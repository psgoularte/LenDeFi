// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract LoanMarket {
    address public owner;
    address payable public feeWallet = payable(0x0fadE5b267b572dc1F002d1b9148976cCCE9C8C8);

    uint private _status = 1; // Guarda de re-entrância

    // --- Variáveis para os Níveis de Risco (modificáveis pelo owner) --- // MODIFICADO
    uint256 public bronzeLoanLimit;
    uint256 public silverLoanLimit;
    uint8 public goldReqRepaid;
    uint8 public silverReqRepaid;
    uint8 public goldReqAvgScorePercent;
    uint8 public silverReqAvgScorePercent;
    
    constructor(
        address payable _feeWallet,
        uint256 _bronzeLoanLimit,
        uint256 _silverLoanLimit,
        uint8 _silverReqRepaid,
        uint8 _silverReqAvgScore,
        uint8 _goldReqRepaid,
        uint8 _goldReqAvgScore
    ) {
        owner = msg.sender;
        feeWallet = _feeWallet;
        bronzeLoanLimit = _bronzeLoanLimit;
        silverLoanLimit = _silverLoanLimit;
        silverReqRepaid = _silverReqRepaid;
        silverReqAvgScorePercent = _silverReqAvgScore;
        goldReqRepaid = _goldReqRepaid;
        goldReqAvgScorePercent = _goldReqAvgScore;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier nonReentrant() {
        require(_status == 1, "ReentrancyGuard: reentrant call");
        _status = 2;
        _;
        _status = 1;
    }

    // --- Eventos ---
    event TierRequirementsUpdated(address indexed owner); // NOVO
    event LoanCreated(uint indexed loanId, address indexed borrower, uint amountRequested);
    event Funded(uint indexed loanId, address indexed investor, uint amount);
    event WithdrawnByBorrower(uint indexed loanId, uint amount);
    event RepaymentMade(uint indexed loanId, uint amount);
    event InvestorWithdraw(uint indexed loanId, address indexed investor, uint amount);
    event ScoreLeft(uint indexed loanId, address indexed investor, uint8 score);
    event Defaulted(uint indexed loanId, uint defaultTimestamp);
    event LoanCancelled(uint indexed loanId, address indexed borrower);
    event CollateralWithdrawn(uint indexed loanId, address indexed borrower, uint amount);
    event CollateralClaimed(uint indexed loanId, address indexed investor, uint grossAmount, uint fee, uint netAmount);

    enum Status { Open, Funded, Active, Repaid, Defaulted, Cancelled }
    enum RiskTier { Bronze, Silver, Gold }

    struct BorrowerProfile {
        uint repaidLoansCount;
        uint weightedScoreSum;
        uint totalAmountRepaid;
    }

    mapping(address => BorrowerProfile) public borrowerProfiles;

    struct Loan {
        address borrower;
        uint amountRequested;
        uint amountFunded;
        uint interestBps;
        uint durationSecs;
        uint fundingDeadline;
        Status status;
        uint startTimestamp;
        uint totalRepayment;
        address investor;
        uint8 score;
        uint defaultTimestamp;
        uint collateralAmount;
        bool collateralClaimed;
    }

    Loan[] public loans;
    mapping(uint => uint) public withdrawableOf;

    // --- Função para alterar os limites e requisitos --- // NOVO
    function setTierRequirements(
        uint256 _bronzeLoanLimit,
        uint256 _silverLoanLimit,
        uint8 _silverReqRepaid,
        uint8 _silverReqAvgScore,
        uint8 _goldReqRepaid,
        uint8 _goldReqAvgScore
    ) external onlyOwner {
        bronzeLoanLimit = _bronzeLoanLimit;
        silverLoanLimit = _silverLoanLimit;
        silverReqRepaid = _silverReqRepaid;
        silverReqAvgScorePercent = _silverReqAvgScore;
        goldReqRepaid = _goldReqRepaid;
        goldReqAvgScorePercent = _goldReqAvgScore;
        
        emit TierRequirementsUpdated(msg.sender);
    }

    function createLoan(
        uint amountRequested,
        uint interestBps,
        uint durationSecs,
        uint fundingDeadline,
        uint collateralAmount
    ) external payable returns (uint loanId) {
        RiskTier tier = getBorrowerTier(msg.sender);
        if (tier == RiskTier.Bronze) {
            require(amountRequested <= bronzeLoanLimit, "Bronze tier limit exceeded"); // MODIFICADO
        } else if (tier == RiskTier.Silver) {
            require(amountRequested <= silverLoanLimit, "Silver tier limit exceeded"); // MODIFICADO
        }

        require(amountRequested > 0, "Amount must be greater than 0");
        require(fundingDeadline > block.timestamp, "Deadline must be in the future");
        require(msg.value == collateralAmount, "Collateral mismatch");

        Loan memory L = Loan({
            borrower: msg.sender,
            amountRequested: amountRequested,
            amountFunded: 0,
            interestBps: interestBps,
            durationSecs: durationSecs,
            fundingDeadline: fundingDeadline,
            status: Status.Open,
            startTimestamp: 0,
            totalRepayment: 0,
            investor: address(0),
            score: 0,
            defaultTimestamp: 0,
            collateralAmount: collateralAmount,
            collateralClaimed: false
        });

        loans.push(L);
        loanId = loans.length - 1;
        emit LoanCreated(loanId, msg.sender, amountRequested);
    }
    
    receive() external payable {
        revert("Use fundLoan(loanId) to send ETH");
    }

    function fundLoan(uint loanId) external payable {
        Loan storage L = loans[loanId];
        require(L.status == Status.Open, "Not open");
        require(block.timestamp <= L.fundingDeadline, "Deadline passed");
        require(msg.value == L.amountRequested, "Must fund full");
        require(L.investor == address(0), "Already funded");

        L.amountFunded = msg.value;
        L.investor = msg.sender;
        L.status = Status.Funded;
        L.startTimestamp = block.timestamp;
        emit Funded(loanId, msg.sender, msg.value);
    }

    function withdrawAsBorrower(uint loanId) external nonReentrant {
        Loan storage L = loans[loanId];
        require(L.borrower == msg.sender, "Not borrower");
        require(L.status == Status.Funded, "Not funded");

        uint repaymentDeadline = L.startTimestamp + L.durationSecs;
        require(block.timestamp <= repaymentDeadline, "Withdraw period has passed");

        uint amount = L.amountFunded;
        require(amount > 0, "No amount");

        L.status = Status.Active;
        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Transfer failed");

        emit WithdrawnByBorrower(loanId, amount);
    }

    function checkDefault(uint loanId) public {
        Loan storage L = loans[loanId];
        if (
            L.status == Status.Active &&
            block.timestamp > L.startTimestamp + L.durationSecs &&
            L.defaultTimestamp == 0
        ) {
            L.status = Status.Defaulted;
            L.defaultTimestamp = block.timestamp;
            emit Defaulted(loanId, block.timestamp);
        }
    }

    function repay(uint loanId) external payable nonReentrant {
        Loan storage L = loans[loanId];
        require(L.borrower == msg.sender, "Not borrower");
        require(L.status == Status.Active, "Loan is not active");

        uint repaymentDeadline = L.startTimestamp + L.durationSecs;
        require(block.timestamp <= repaymentDeadline, "Repayment period has passed");

        checkDefault(loanId);
        
        uint principal = L.amountRequested;
        uint interest = (principal * L.interestBps) / 10000;
        uint owed = principal + interest;
        require(msg.value >= owed, "Not enough");

        L.totalRepayment = owed;
        L.status = Status.Repaid;
        withdrawableOf[loanId] = owed;

        if (L.collateralAmount > 0) {
            require(!L.collateralClaimed, "Collateral already handled");
            L.collateralClaimed = true;
            (bool ok, ) = msg.sender.call{value: L.collateralAmount}("");
            require(ok, "Collateral refund failed");
            emit CollateralWithdrawn(loanId, L.borrower, L.collateralAmount);
        }

        if (msg.value > owed) {
            (bool r, ) = msg.sender.call{value: msg.value - owed}("");
            require(r, "Refund failed");
        }

        emit RepaymentMade(loanId, owed);
    }
    
    function withdrawInvestorShare(uint loanId, uint8 score) external nonReentrant {
        Loan storage L = loans[loanId];
        require(msg.sender == L.investor, "Not investor");
        require(L.status == Status.Repaid, "Loan not repaid");
        require(feeWallet != address(0), "Fee wallet not set");

        uint available = withdrawableOf[loanId];
        require(available > 0, "Nothing to withdraw");
        uint principal = L.amountRequested;
        withdrawableOf[loanId] = 0;

        if (available > principal) {
            uint profit = available - principal;
            uint platformFee = (profit * 10) / 100;
            uint investorShare = available - platformFee;
            (bool f, ) = feeWallet.call{value: platformFee}("");
            require(f, "Fee failed");
            (bool s, ) = msg.sender.call{value: investorShare}("");
            require(s, "Send failed");
            emit InvestorWithdraw(loanId, msg.sender, investorShare);
        } else {
            (bool s, ) = msg.sender.call{value: available}("");
            require(s, "Send failed");
            emit InvestorWithdraw(loanId, msg.sender, available);
        }
        
        _leaveScore(L, loanId, score, true);
    }

    function _leaveScore(Loan storage L, uint loanId, uint8 score, bool updateReputation) internal {
        require(score >= 1 && score <= 5, "Score must be between 1 and 5");
        require(L.score == 0, "Score has already been left");

        L.score = score;
        
        if (updateReputation) {
            BorrowerProfile storage profile = borrowerProfiles[L.borrower];
            profile.repaidLoansCount++;
            profile.weightedScoreSum += score * L.amountRequested;
            profile.totalAmountRepaid += L.amountRequested;
        }

        emit ScoreLeft(loanId, msg.sender, score);
    }

    function cancelLoan(uint loanId) external nonReentrant {
        Loan storage L = loans[loanId];
        require(msg.sender == L.borrower, "Not borrower");
        require(L.status == Status.Open, "Not open");

        L.status = Status.Cancelled;

        if (L.collateralAmount > 0) {
            (bool ok, ) = L.borrower.call{value: L.collateralAmount}("");
            require(ok, "Collateral refund failed");
        }

        emit LoanCancelled(loanId, L.borrower);
    }

    function averageScoreOfBorrower(address borrower) external view returns (uint avgTimes100) {
        uint sum = 0;
        uint count = 0;
        for (uint i = 0; i < loans.length; i++) {
            if (loans[i].borrower == borrower && loans[i].score > 0) {
                sum += loans[i].score;
                count++;
            }
        }
        if (count == 0) return 0;
        return (sum * 100) / count;
    }

    function claimCollateral(uint loanId, uint8 score) external nonReentrant {
        checkDefault(loanId); 
        
        Loan storage L = loans[loanId];
        require(msg.sender == L.investor, "Not investor");
        require(L.status == Status.Defaulted, "Not defaulted");
        require(!L.collateralClaimed, "Already claimed");
        require(L.collateralAmount > 0, "No collateral");

        L.collateralClaimed = true;

        uint gross = L.collateralAmount;
        uint fee = (gross * 5) / 100;
        uint net = gross - fee;
        (bool f, ) = feeWallet.call{value: fee}("");
        require(f, "Fee transfer failed");
        (bool s, ) = L.investor.call{value: net}("");
        require(s, "Investor transfer failed");
        emit CollateralClaimed(loanId, L.investor, gross, fee, net);
        
        _leaveScore(L, loanId, score, false);
    }
    
    function cancelFundedLoan(uint loanId) external nonReentrant {
        Loan storage L = loans[loanId];
        require(msg.sender == L.investor, "Not investor");
        require(L.status == Status.Funded, "Not funded");

        uint withdrawalDeadline = L.startTimestamp + L.durationSecs;
        require(block.timestamp > withdrawalDeadline, "Borrower's withdrawal period has not expired yet");

        L.status = Status.Cancelled;

        (bool investorPaid, ) = L.investor.call{value: L.amountFunded}("");
        require(investorPaid, "Investor refund failed");

        if (L.collateralAmount > 0) {
            (bool borrowerPaid, ) = L.borrower.call{value: L.collateralAmount}("");
            require(borrowerPaid, "Collateral refund failed");
        }

        emit LoanCancelled(loanId, L.borrower);
    }

    // --- Views ---
    function getLoanCount() external view returns (uint) {
        return loans.length;
    }

    function getBorrowerTier(address borrower) public view returns (RiskTier) {
        BorrowerProfile storage profile = borrowerProfiles[borrower];

        if (profile.repaidLoansCount == 0 || profile.totalAmountRepaid == 0) {
            return RiskTier.Bronze;
        }
        
        uint avgScorePercent = (profile.weightedScoreSum * 20) / profile.totalAmountRepaid;

        if (profile.repaidLoansCount >= goldReqRepaid && avgScorePercent > goldReqAvgScorePercent) { // MODIFICADO
            return RiskTier.Gold;
        }
        
        if (profile.repaidLoansCount >= silverReqRepaid && avgScorePercent > silverReqAvgScorePercent) { // MODIFICADO
            return RiskTier.Silver;
        }

        return RiskTier.Bronze;
    }
}