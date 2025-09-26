import { Star } from "lucide-react";

interface ScoreStarsProps {
  score: number;
  completedLoans: number;
  isFinalScore?: boolean;
}

export function ScoreStars({
  score,
  completedLoans,
  isFinalScore = false,
}: ScoreStarsProps) {
  const displayScore = score > 0 ? score : 0;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.floor(displayScore)
              ? "fill-accent text-accent"
              : "text-muted-foreground"
          }`}
        />
      ))}
      <div className="flex flex-col items-start ml-2">
        <span className="text-sm font-medium leading-tight">
          {displayScore > 0 ? displayScore.toFixed(1) : "N/A"}
        </span>
        {isFinalScore ? (
          <span className="text-xs text-accent leading-tight">Final score</span>
        ) : (
          <span className="text-xs text-muted-foreground leading-tight">
            {completedLoans > 0
              ? `from ${completedLoans} loan${completedLoans > 1 ? "s" : ""}`
              : "New Borrower"}
          </span>
        )}
      </div>
    </div>
  );
}