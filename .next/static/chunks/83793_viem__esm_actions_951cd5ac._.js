(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBalance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBalance",
    ()=>getBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
var _client_experimental_blockTag;
async function getBalance(client, param) {
    let { address, blockNumber, blockTag = (_client_experimental_blockTag = client.experimental_blockTag) !== null && _client_experimental_blockTag !== void 0 ? _client_experimental_blockTag : 'latest' } = param;
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const balance = await client.request({
        method: 'eth_getBalance',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    });
    return BigInt(balance);
} //# sourceMappingURL=getBalance.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "call",
    ()=>call,
    "getRevertErrorData",
    ()=>getRevertErrorData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$1$2e$0_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.1.0_typescript@5.9.2_zod@3.22.4/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.9.6_typescript@5.9.2_zod@3.22.4/node_modules/ox/_esm/core/BlockOverrides.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getCallError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function call(client, args) {
    var _client_batch;
    var _client_experimental_blockTag;
    const { account: account_ = client.account, authorizationList, batch = Boolean((_client_batch = client.batch) === null || _client_batch === void 0 ? void 0 : _client_batch.multicall), blockNumber, blockTag = (_client_experimental_blockTag = client.experimental_blockTag) !== null && _client_experimental_blockTag !== void 0 ? _client_experimental_blockTag : 'latest', accessList, blobs, blockOverrides, code, data: data_, factory, factoryData, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    if (code && (factory || factoryData)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Cannot provide both `code` & `factory`/`factoryData` as parameters.');
    if (code && to) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Cannot provide both `code` & `to` as parameters.');
    // Check if the call is deployless via bytecode.
    const deploylessCallViaBytecode = code && data_;
    // Check if the call is deployless via a factory.
    const deploylessCallViaFactory = factory && factoryData && to && data_;
    const deploylessCall = deploylessCallViaBytecode || deploylessCallViaFactory;
    const data = (()=>{
        if (deploylessCallViaBytecode) return toDeploylessCallViaBytecodeData({
            code,
            data: data_
        });
        if (deploylessCallViaFactory) return toDeploylessCallViaFactoryData({
            data: data_,
            factory,
            factoryData,
            to
        });
        return data_;
    })();
    try {
        var _client_chain_formatters_transactionRequest, _client_chain_formatters, _client_chain;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcBlockOverrides = blockOverrides ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRpc"](blockOverrides) : undefined;
        const rpcStateOverride = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStateOverride"])(stateOverride);
        const chainFormat = (_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_transactionRequest = _client_chain_formatters.transactionRequest) === null || _client_chain_formatters_transactionRequest === void 0 ? void 0 : _client_chain_formatters_transactionRequest.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account === null || account === void 0 ? void 0 : account.address,
            accessList,
            authorizationList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to: deploylessCall ? undefined : to,
            value
        });
        if (batch && shouldPerformMulticall({
            request
        }) && !rpcStateOverride && !rpcBlockOverrides) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag
                });
            } catch (err) {
                if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChainNotConfiguredError"]) && !(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainDoesNotSupportContract"])) throw err;
            }
        }
        const params = (()=>{
            const base = [
                request,
                block
            ];
            if (rpcStateOverride && rpcBlockOverrides) return [
                ...base,
                rpcStateOverride,
                rpcBlockOverrides
            ];
            if (rpcStateOverride) return [
                ...base,
                rpcStateOverride
            ];
            if (rpcBlockOverrides) return [
                ...base,
                {},
                rpcBlockOverrides
            ];
            return base;
        })();
        const response = await client.request({
            method: 'eth_call',
            params
        });
        if (response === '0x') return {
            data: undefined
        };
        return {
            data: response
        };
    } catch (err) {
        const data = getRevertErrorData(err);
        // Check for CCIP-Read offchain lookup signature.
        const { offchainLookup, offchainLookupSignature } = await __turbopack_context__.A("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ccip.js [app-client] (ecmascript, async loader)");
        if (client.ccipRead !== false && (data === null || data === void 0 ? void 0 : data.slice(0, 10)) === offchainLookupSignature && to) return {
            data: await offchainLookup(client, {
                data,
                to
            })
        };
        // Check for counterfactual deployment error.
        if (deploylessCall && (data === null || data === void 0 ? void 0 : data.slice(0, 10)) === '0x101bb98d') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CounterfactualDeploymentFailedError"]({
            factory
        });
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall(param) {
    let { request } = param;
    const { data, to, ...request_ } = request;
    if (!data) return false;
    if (data.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aggregate3Signature"])) return false;
    if (!to) return false;
    if (Object.values(request_).filter((x)=>typeof x !== 'undefined').length > 0) return false;
    return true;
}
async function scheduleMulticall(client, args) {
    var _client_batch;
    const { batchSize = 1024, deployless = false, wait = 0 } = typeof ((_client_batch = client.batch) === null || _client_batch === void 0 ? void 0 : _client_batch.multicall) === 'object' ? client.batch.multicall : {};
    var _client_experimental_blockTag;
    const { blockNumber, blockTag = (_client_experimental_blockTag = client.experimental_blockTag) !== null && _client_experimental_blockTag !== void 0 ? _client_experimental_blockTag : 'latest', data, to } = args;
    const multicallAddress = (()=>{
        if (deployless) return null;
        if (args.multicallAddress) return args.multicallAddress;
        if (client.chain) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
                blockNumber,
                chain: client.chain,
                contract: 'multicall3'
            });
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientChainNotConfiguredError"]();
    })();
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBatchScheduler"])({
        id: "".concat(client.uid, ".").concat(block),
        wait,
        shouldSplitBatch (args) {
            const size = args.reduce((size, param)=>{
                let { data } = param;
                return size + (data.length - 2);
            }, 0);
            return size > batchSize * 2;
        },
        fn: async (requests)=>{
            const calls = requests.map((request)=>({
                    allowFailure: true,
                    callData: request.data,
                    target: request.to
                }));
            const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
                args: [
                    calls
                ],
                functionName: 'aggregate3'
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        ...multicallAddress === null ? {
                            data: toDeploylessCallViaBytecodeData({
                                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Bytecode"],
                                data: calldata
                            })
                        } : {
                            to: multicallAddress,
                            data: calldata
                        }
                    },
                    block
                ]
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
                args: [
                    calls
                ],
                functionName: 'aggregate3',
                data: data || '0x'
            });
        }
    });
    const [{ returnData, success }] = await schedule({
        data,
        to
    });
    if (!success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContractError"]({
        data: returnData
    });
    if (returnData === '0x') return {
        data: undefined
    };
    return {
        data: returnData
    };
}
function toDeploylessCallViaBytecodeData(parameters) {
    const { code, data } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$1$2e$0_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbi"])([
            'constructor(bytes, bytes)'
        ]),
        bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deploylessCallViaBytecodeBytecode"],
        args: [
            code,
            data
        ]
    });
}
function toDeploylessCallViaFactoryData(parameters) {
    const { data, factory, factoryData, to } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$1$2e$0_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbi"])([
            'constructor(address, bytes, address, bytes)'
        ]),
        bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deploylessCallViaFactoryBytecode"],
        args: [
            to,
            data,
            factory,
            factoryData
        ]
    });
}
function getRevertErrorData(err) {
    var _error_data;
    if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"])) return undefined;
    const error = err.walk();
    return typeof (error === null || error === void 0 ? void 0 : error.data) === 'object' ? (_error_data = error.data) === null || _error_data === void 0 ? void 0 : _error_data.data : error.data;
} //# sourceMappingURL=call.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readContract",
    ()=>readContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
;
;
;
;
;
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')({
            ...rest,
            data: calldata,
            to: address
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName
        });
    }
} //# sourceMappingURL=readContract.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/multicall.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multicall",
    ()=>multicall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function multicall(client, parameters) {
    var _client_batch;
    const { account, authorizationList, allowFailure = true, blockNumber, blockOverrides, blockTag, stateOverride } = parameters;
    const contracts = parameters.contracts;
    var _parameters_batchSize, _parameters_deployless;
    const { batchSize = (_parameters_batchSize = parameters.batchSize) !== null && _parameters_batchSize !== void 0 ? _parameters_batchSize : 1024, deployless = (_parameters_deployless = parameters.deployless) !== null && _parameters_deployless !== void 0 ? _parameters_deployless : false } = typeof ((_client_batch = client.batch) === null || _client_batch === void 0 ? void 0 : _client_batch.multicall) === 'object' ? client.batch.multicall : {};
    const multicallAddress = (()=>{
        if (parameters.multicallAddress) return parameters.multicallAddress;
        if (deployless) return null;
        if (client.chain) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
                blockNumber,
                chain: client.chain,
                contract: 'multicall3'
            });
        }
        throw new Error('client chain not configured. multicallAddress is required.');
    })();
    const chunkedCalls = [
        []
    ];
    let currentChunk = 0;
    let currentChunkSize = 0;
    for(let i = 0; i < contracts.length; i++){
        const { abi, address, args, functionName } = contracts[i];
        try {
            const callData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                abi,
                args,
                functionName
            });
            currentChunkSize += (callData.length - 2) / 2;
            // Check to see if we need to create a new chunk.
            if (// Check if batching is enabled.
            batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
            currentChunkSize > batchSize && // Check if the current chunk is not already empty.
            chunkedCalls[currentChunk].length > 0) {
                currentChunk++;
                currentChunkSize = (callData.length - 2) / 2;
                chunkedCalls[currentChunk] = [];
            }
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData,
                    target: address
                }
            ];
        } catch (err) {
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(err, {
                abi,
                address,
                args,
                docsPath: '/docs/contract/multicall',
                functionName,
                sender: account
            });
            if (!allowFailure) throw error;
            chunkedCalls[currentChunk] = [
                ...chunkedCalls[currentChunk],
                {
                    allowFailure: true,
                    callData: '0x',
                    target: address
                }
            ];
        }
    }
    const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
            ...multicallAddress === null ? {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Bytecode"]
            } : {
                address: multicallAddress
            },
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
            account,
            args: [
                calls
            ],
            authorizationList,
            blockNumber,
            blockOverrides,
            blockTag,
            functionName: 'aggregate3',
            stateOverride
        })));
    const results = [];
    for(let i = 0; i < aggregate3Results.length; i++){
        const result = aggregate3Results[i];
        // If an error occurred in a `readContract` invocation (ie. network error),
        // then append the failure reason to each contract result.
        if (result.status === 'rejected') {
            if (!allowFailure) throw result.reason;
            for(let j = 0; j < chunkedCalls[i].length; j++){
                results.push({
                    status: 'failure',
                    error: result.reason,
                    result: undefined
                });
            }
            continue;
        }
        // If the `readContract` call was successful, then decode the results.
        const aggregate3Result = result.value;
        for(let j = 0; j < aggregate3Result.length; j++){
            // Extract the response from `readContract`
            const { returnData, success } = aggregate3Result[j];
            // Extract the request call data from the original call.
            const { callData } = chunkedCalls[i][j];
            // Extract the contract config for this call from the `contracts` argument
            // for decoding.
            const { abi, address, functionName, args } = contracts[results.length];
            try {
                if (callData === '0x') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]();
                if (!success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContractError"]({
                    data: returnData
                });
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                    abi,
                    args,
                    data: returnData,
                    functionName
                });
                results.push(allowFailure ? {
                    result,
                    status: 'success'
                } : result);
            } catch (err) {
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(err, {
                    abi,
                    address,
                    args,
                    docsPath: '/docs/contract/multicall',
                    functionName
                });
                if (!allowFailure) throw error;
                results.push({
                    error,
                    result: undefined,
                    status: 'failure'
                });
            }
        }
    }
    if (results.length !== contracts.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('multicall results mismatch');
    return results;
} //# sourceMappingURL=multicall.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsText",
    ()=>getEnsText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function getEnsText(client, parameters) {
    const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain === null || chain === void 0 ? void 0 : chain.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalResolverResolveAbi"],
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(name)),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textResolverAbi"],
                    functionName: 'text',
                    args: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name),
                        key
                    ]
                }),
                gatewayUrls !== null && gatewayUrls !== void 0 ? gatewayUrls : [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]
                ]
            ],
            functionName: 'resolveWithGateways',
            blockNumber,
            blockTag
        };
        const readContractAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textResolverAbi"],
            functionName: 'text',
            data: res[0]
        });
        return record === '' ? null : record;
    } catch (err) {
        if (strict) throw err;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullUniversalResolverError"])(err)) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsText.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsAvatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsAvatar",
    ()=>getEnsAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$parseAvatarRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsText.js [app-client] (ecmascript)");
;
;
;
async function getEnsAvatar(client, param) {
    let { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress } = param;
    const record = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnsText"], 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
        gatewayUrls,
        strict
    });
    if (!record) return null;
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$parseAvatarRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAvatarRecord"])(client, {
            record,
            gatewayUrls: assetGatewayUrls
        });
    } catch (e) {
        return null;
    }
} //# sourceMappingURL=getEnsAvatar.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsName",
    ()=>getEnsName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function getEnsName(client, parameters) {
    const { address, blockNumber, blockTag, coinType = 60n, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalResolverReverseAbi"],
            args: [
                address,
                coinType,
                gatewayUrls !== null && gatewayUrls !== void 0 ? gatewayUrls : [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]
                ]
            ],
            functionName: 'reverseWithGateways',
            blockNumber,
            blockTag
        };
        const readContractAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
        const [name] = await readContractAction(readContractParameters);
        return name || null;
    } catch (err) {
        if (strict) throw err;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullUniversalResolverError"])(err)) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsName.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsAddress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsAddress",
    ()=>getEnsAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/namehash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
async function getEnsAddress(client, parameters) {
    const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain === null || chain === void 0 ? void 0 : chain.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) return null;
    const args = (()=>{
        if (coinType != null) return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name),
            BigInt(coinType)
        ];
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$namehash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namehash"])(name)
        ];
    })();
    try {
        const functionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressResolverAbi"],
            functionName: 'addr',
            args
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["universalResolverResolveAbi"],
            functionName: 'resolveWithGateways',
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(name)),
                functionData,
                gatewayUrls !== null && gatewayUrls !== void 0 ? gatewayUrls : [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]
                ]
            ],
            blockNumber,
            blockTag
        };
        const readContractAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract');
        const res = await readContractAction(readContractParameters);
        if (res[0] === '0x') return null;
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressResolverAbi"],
            args,
            functionName: 'addr',
            data: res[0]
        });
        if (address === '0x') return null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(address) === '0x00') return null;
        return address;
    } catch (err) {
        if (strict) throw err;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNullUniversalResolverError"])(err)) return null;
        throw err;
    }
} //# sourceMappingURL=getEnsAddress.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsResolver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEnsResolver",
    ()=>getEnsResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
async function getEnsResolver(client, parameters) {
    const { blockNumber, blockTag, name } = parameters;
    const { chain } = client;
    const universalResolverAddress = (()=>{
        if (parameters.universalResolverAddress) return parameters.universalResolverAddress;
        if (!chain) throw new Error('client chain not configured. universalResolverAddress is required.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$getChainContractAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainContractAddress"])({
            blockNumber,
            chain,
            contract: 'ensUniversalResolver'
        });
    })();
    const tlds = chain === null || chain === void 0 ? void 0 : chain.ensTlds;
    if (tlds && !tlds.some((tld)=>name.endsWith(tld))) throw new Error("".concat(name, " is not a valid ENS TLD (").concat(tlds === null || tlds === void 0 ? void 0 : tlds.join(', '), ') for chain "').concat(chain.name, '" (id: ').concat(chain.id, ")."));
    const [resolverAddress] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [
                    {
                        type: 'bytes'
                    }
                ],
                name: 'findResolver',
                outputs: [
                    {
                        type: 'address'
                    },
                    {
                        type: 'bytes32'
                    },
                    {
                        type: 'uint256'
                    }
                ],
                stateMutability: 'view',
                type: 'function'
            }
        ],
        functionName: 'findResolver',
        args: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$packetToBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packetToBytes"])(name))
        ],
        blockNumber,
        blockTag
    });
    return resolverAddress;
} //# sourceMappingURL=getEnsResolver.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createAccessList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAccessList",
    ()=>createAccessList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getCallError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function createAccessList(client, args) {
    const { account: account_ = client.account, blockNumber, blockTag = 'latest', blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    try {
        var _client_chain_formatters_transactionRequest, _client_chain_formatters, _client_chain;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const chainFormat = (_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_transactionRequest = _client_chain_formatters.transactionRequest) === null || _client_chain_formatters_transactionRequest === void 0 ? void 0 : _client_chain_formatters_transactionRequest.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account === null || account === void 0 ? void 0 : account.address,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            to,
            value
        });
        const response = await client.request({
            method: 'eth_createAccessList',
            params: [
                request,
                block
            ]
        });
        return {
            accessList: response.accessList,
            gasUsed: BigInt(response.gasUsed)
        };
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getCallError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=createAccessList.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createBlockFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBlockFilter",
    ()=>createBlockFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
async function createBlockFilter(client) {
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newBlockFilter'
    });
    const id = await client.request({
        method: 'eth_newBlockFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'block'
    };
} //# sourceMappingURL=createBlockFilter.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createContractEventFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContractEventFilter",
    ()=>createContractEventFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
;
;
async function createContractEventFilter(client, parameters) {
    const { address, abi, args, eventName, fromBlock, strict, toBlock } = parameters;
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newFilter'
    });
    const topics = eventName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
        abi,
        args,
        eventName
    }) : undefined;
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock) : toBlock,
                topics
            }
        ]
    });
    return {
        abi,
        args,
        eventName,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        type: 'event'
    };
} //# sourceMappingURL=createContractEventFilter.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createEventFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventFilter",
    ()=>createEventFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
;
;
async function createEventFilter(client) {
    let { address, args, event, events: events_, fromBlock, strict, toBlock } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const events = events_ !== null && events_ !== void 0 ? events_ : event ? [
        event
    ] : undefined;
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newFilter'
    });
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                abi: [
                    event
                ],
                eventName: event.name,
                args
            }));
        // TODO: Clean up type casting
        topics = [
            encoded
        ];
        if (event) topics = topics[0];
    }
    const id = await client.request({
        method: 'eth_newFilter',
        params: [
            {
                address,
                fromBlock: typeof fromBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock) : fromBlock,
                toBlock: typeof toBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock) : toBlock,
                ...topics.length ? {
                    topics
                } : {}
            }
        ]
    });
    return {
        abi: events,
        args,
        eventName: event ? event.name : undefined,
        fromBlock,
        id,
        request: getRequest(id),
        strict: Boolean(strict),
        toBlock,
        type: 'event'
    };
} //# sourceMappingURL=createEventFilter.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPendingTransactionFilter",
    ()=>createPendingTransactionFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-client] (ecmascript)");
;
async function createPendingTransactionFilter(client) {
    const getRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$filters$2f$createFilterRequestScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterRequestScope"])(client, {
        method: 'eth_newPendingTransactionFilter'
    });
    const id = await client.request({
        method: 'eth_newPendingTransactionFilter'
    });
    return {
        id,
        request: getRequest(id),
        type: 'transaction'
    };
} //# sourceMappingURL=createPendingTransactionFilter.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlock",
    ()=>getBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/block.js [app-client] (ecmascript)");
;
;
;
var _client_experimental_blockTag;
async function getBlock(client) {
    let { blockHash, blockNumber, blockTag = (_client_experimental_blockTag = client.experimental_blockTag) !== null && _client_experimental_blockTag !== void 0 ? _client_experimental_blockTag : 'latest', includeTransactions: includeTransactions_ } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _client_chain_formatters_block, _client_chain_formatters, _client_chain;
    const includeTransactions = includeTransactions_ !== null && includeTransactions_ !== void 0 ? includeTransactions_ : false;
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    let block = null;
    if (blockHash) {
        block = await client.request({
            method: 'eth_getBlockByHash',
            params: [
                blockHash,
                includeTransactions
            ]
        }, {
            dedupe: true
        });
    } else {
        block = await client.request({
            method: 'eth_getBlockByNumber',
            params: [
                blockNumberHex || blockTag,
                includeTransactions
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    if (!block) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNotFoundError"]({
        blockHash,
        blockNumber
    });
    const format = ((_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_block = _client_chain_formatters.block) === null || _client_chain_formatters_block === void 0 ? void 0 : _client_chain_formatters_block.format) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBlock"];
    return format(block);
} //# sourceMappingURL=getBlock.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the current price of gas (in wei).
 *
 * - Docs: https://viem.sh/docs/actions/public/getGasPrice
 * - JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)
 *
 * @param client - Client to use
 * @returns The gas price (in wei). {@link GetGasPriceReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getGasPrice } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const gasPrice = await getGasPrice(client)
 */ __turbopack_context__.s([
    "getGasPrice",
    ()=>getGasPrice
]);
async function getGasPrice(client) {
    const gasPrice = await client.request({
        method: 'eth_gasPrice'
    });
    return BigInt(gasPrice);
} //# sourceMappingURL=getGasPrice.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateMaxPriorityFeePerGas",
    ()=>estimateMaxPriorityFeePerGas,
    "internal_estimateMaxPriorityFeePerGas",
    ()=>internal_estimateMaxPriorityFeePerGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)");
;
;
;
;
;
async function estimateMaxPriorityFeePerGas(client, args) {
    return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
    const { block: block_, chain = client.chain, request } = args || {};
    try {
        var _chain_fees, _chain_fees1;
        var _chain_fees_maxPriorityFeePerGas;
        const maxPriorityFeePerGas = (_chain_fees_maxPriorityFeePerGas = chain === null || chain === void 0 ? void 0 : (_chain_fees = chain.fees) === null || _chain_fees === void 0 ? void 0 : _chain_fees.maxPriorityFeePerGas) !== null && _chain_fees_maxPriorityFeePerGas !== void 0 ? _chain_fees_maxPriorityFeePerGas : chain === null || chain === void 0 ? void 0 : (_chain_fees1 = chain.fees) === null || _chain_fees1 === void 0 ? void 0 : _chain_fees1.defaultPriorityFee;
        if (typeof maxPriorityFeePerGas === 'function') {
            const block = block_ || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({});
            const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
                block,
                client,
                request
            });
            if (maxPriorityFeePerGas_ === null) throw new Error();
            return maxPriorityFeePerGas_;
        }
        if (typeof maxPriorityFeePerGas !== 'undefined') return maxPriorityFeePerGas;
        const maxPriorityFeePerGasHex = await client.request({
            method: 'eth_maxPriorityFeePerGas'
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGasHex);
    } catch (e) {
        // If the RPC Provider does not support `eth_maxPriorityFeePerGas`
        // fall back to calculating it manually via `gasPrice - baseFeePerGas`.
        // See: https://github.com/ethereum/pm/issues/328#:~:text=eth_maxPriorityFeePerGas%20after%20London%20will%20effectively%20return%20eth_gasPrice%20%2D%20baseFee
        const [block, gasPrice] = await Promise.all([
            block_ ? Promise.resolve(block_) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({}),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPrice"], 'getGasPrice')({})
        ]);
        if (typeof block.baseFeePerGas !== 'bigint') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1559FeesNotSupportedError"]();
        const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
        if (maxPriorityFeePerGas < 0n) return 0n;
        return maxPriorityFeePerGas;
    }
} //# sourceMappingURL=estimateMaxPriorityFeePerGas.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateFeesPerGas",
    ()=>estimateFeesPerGas,
    "internal_estimateFeesPerGas",
    ()=>internal_estimateFeesPerGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getGasPrice.js [app-client] (ecmascript)");
;
;
;
;
;
async function estimateFeesPerGas(client, args) {
    return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
    var _baseFeeMultiplier_toString_split_, _chain_fees;
    const { block: block_, chain = client.chain, request, type = 'eip1559' } = args || {};
    const baseFeeMultiplier = await (async ()=>{
        var _chain_fees, _chain_fees1;
        if (typeof (chain === null || chain === void 0 ? void 0 : (_chain_fees = chain.fees) === null || _chain_fees === void 0 ? void 0 : _chain_fees.baseFeeMultiplier) === 'function') return chain.fees.baseFeeMultiplier({
            block: block_,
            client,
            request
        });
        var _chain_fees_baseFeeMultiplier;
        return (_chain_fees_baseFeeMultiplier = chain === null || chain === void 0 ? void 0 : (_chain_fees1 = chain.fees) === null || _chain_fees1 === void 0 ? void 0 : _chain_fees1.baseFeeMultiplier) !== null && _chain_fees_baseFeeMultiplier !== void 0 ? _chain_fees_baseFeeMultiplier : 1.2;
    })();
    if (baseFeeMultiplier < 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseFeeScalarError"]();
    var _baseFeeMultiplier_toString_split__length;
    const decimals = (_baseFeeMultiplier_toString_split__length = (_baseFeeMultiplier_toString_split_ = baseFeeMultiplier.toString().split('.')[1]) === null || _baseFeeMultiplier_toString_split_ === void 0 ? void 0 : _baseFeeMultiplier_toString_split_.length) !== null && _baseFeeMultiplier_toString_split__length !== void 0 ? _baseFeeMultiplier_toString_split__length : 0;
    const denominator = 10 ** decimals;
    const multiply = (base)=>base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
    const block = block_ ? block_ : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({});
    if (typeof (chain === null || chain === void 0 ? void 0 : (_chain_fees = chain.fees) === null || _chain_fees === void 0 ? void 0 : _chain_fees.estimateFeesPerGas) === 'function') {
        const fees = await chain.fees.estimateFeesPerGas({
            block: block_,
            client,
            multiply,
            request,
            type
        });
        if (fees !== null) return fees;
    }
    if (type === 'eip1559') {
        if (typeof block.baseFeePerGas !== 'bigint') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1559FeesNotSupportedError"]();
        const maxPriorityFeePerGas = typeof (request === null || request === void 0 ? void 0 : request.maxPriorityFeePerGas) === 'bigint' ? request.maxPriorityFeePerGas : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internal_estimateMaxPriorityFeePerGas"])(client, {
            block: block,
            chain,
            request
        });
        const baseFeePerGas = multiply(block.baseFeePerGas);
        var _request_maxFeePerGas;
        const maxFeePerGas = (_request_maxFeePerGas = request === null || request === void 0 ? void 0 : request.maxFeePerGas) !== null && _request_maxFeePerGas !== void 0 ? _request_maxFeePerGas : baseFeePerGas + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
    var _request_gasPrice;
    const gasPrice = (_request_gasPrice = request === null || request === void 0 ? void 0 : request.gasPrice) !== null && _request_gasPrice !== void 0 ? _request_gasPrice : multiply(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGasPrice"], 'getGasPrice')({}));
    return {
        gasPrice
    };
} //# sourceMappingURL=estimateFeesPerGas.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransactionCount",
    ()=>getTransactionCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
async function getTransactionCount(client, param) {
    let { address, blockTag = 'latest', blockNumber } = param;
    const count = await client.request({
        method: 'eth_getTransactionCount',
        params: [
            address,
            typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : blockTag
        ]
    }, {
        dedupe: Boolean(blockNumber)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(count);
} //# sourceMappingURL=getTransactionCount.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChainId",
    ()=>getChainId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
;
async function getChainId(client) {
    const chainIdHex = await client.request({
        method: 'eth_chainId'
    }, {
        dedupe: true
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainIdHex);
} //# sourceMappingURL=getChainId.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultParameters",
    ()=>defaultParameters,
    "eip1559NetworkCache",
    ()=>eip1559NetworkCache,
    "prepareTransactionRequest",
    ()=>prepareTransactionRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/fee.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/blob/blobsToCommitments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/blob/blobsToProofs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/getTransactionType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultParameters = [
    'blobVersionedHashes',
    'chainId',
    'fees',
    'gas',
    'nonce',
    'type'
];
const eip1559NetworkCache = /*#__PURE__*/ new Map();
async function prepareTransactionRequest(client, args) {
    const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = defaultParameters, type } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : account_;
    const request = {
        ...args,
        ...account ? {
            from: account === null || account === void 0 ? void 0 : account.address
        } : {}
    };
    let block;
    async function getBlock() {
        if (block) return block;
        block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
            blockTag: 'latest'
        });
        return block;
    }
    let chainId;
    async function getChainId() {
        if (chainId) return chainId;
        if (chain) return chain.id;
        if (typeof args.chainId !== 'undefined') return args.chainId;
        const chainId_ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
        chainId = chainId_;
        return chainId;
    }
    if (parameters.includes('nonce') && typeof nonce === 'undefined' && account) {
        if (nonceManager) {
            const chainId = await getChainId();
            request.nonce = await nonceManager.consume({
                address: account.address,
                chainId,
                client
            });
        } else {
            request.nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount')({
                address: account.address,
                blockTag: 'pending'
            });
        }
    }
    if ((parameters.includes('blobVersionedHashes') || parameters.includes('sidecars')) && blobs && kzg) {
        const commitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
            blobs,
            kzg
        });
        if (parameters.includes('blobVersionedHashes')) {
            const versionedHashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentsToVersionedHashes"])({
                commitments,
                to: 'hex'
            });
            request.blobVersionedHashes = versionedHashes;
        }
        if (parameters.includes('sidecars')) {
            const proofs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blobsToProofs"])({
                blobs,
                commitments,
                kzg
            });
            const sidecars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
                blobs,
                commitments,
                proofs,
                to: 'hex'
            });
            request.sidecars = sidecars;
        }
    }
    if (parameters.includes('chainId')) request.chainId = await getChainId();
    if ((parameters.includes('fees') || parameters.includes('type')) && typeof type === 'undefined') {
        try {
            request.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionType"])(request);
        } catch (e) {
            let isEip1559Network = eip1559NetworkCache.get(client.uid);
            if (typeof isEip1559Network === 'undefined') {
                const block = await getBlock();
                isEip1559Network = typeof (block === null || block === void 0 ? void 0 : block.baseFeePerGas) === 'bigint';
                eip1559NetworkCache.set(client.uid, isEip1559Network);
            }
            request.type = isEip1559Network ? 'eip1559' : 'legacy';
        }
    }
    if (parameters.includes('fees')) {
        // TODO(4844): derive blob base fees once https://github.com/ethereum/execution-apis/pull/486 is merged.
        if (request.type !== 'legacy' && request.type !== 'eip2930') {
            // EIP-1559 fees
            if (typeof request.maxFeePerGas === 'undefined' || typeof request.maxPriorityFeePerGas === 'undefined') {
                const block = await getBlock();
                const { maxFeePerGas, maxPriorityFeePerGas } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internal_estimateFeesPerGas"])(client, {
                    block: block,
                    chain,
                    request: request
                });
                if (typeof args.maxPriorityFeePerGas === 'undefined' && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxFeePerGasTooLowError"]({
                    maxPriorityFeePerGas
                });
                request.maxPriorityFeePerGas = maxPriorityFeePerGas;
                request.maxFeePerGas = maxFeePerGas;
            }
        } else {
            // Legacy fees
            if (typeof args.maxFeePerGas !== 'undefined' || typeof args.maxPriorityFeePerGas !== 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$fee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip1559FeesNotSupportedError"]();
            if (typeof args.gasPrice === 'undefined') {
                const block = await getBlock();
                const { gasPrice: gasPrice_ } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["internal_estimateFeesPerGas"])(client, {
                    block: block,
                    chain,
                    request: request,
                    type: 'legacy'
                });
                request.gasPrice = gasPrice_;
            }
        }
    }
    if (parameters.includes('gas') && typeof gas === 'undefined') request.gas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"], 'estimateGas')({
        ...request,
        account: account ? {
            address: account.address,
            type: 'json-rpc'
        } : account
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(request);
    delete request.parameters;
    return request;
} //# sourceMappingURL=prepareTransactionRequest.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateGas",
    ()=>estimateGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getEstimateGasError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getEstimateGasError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/extract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function estimateGas(client, args) {
    const { account: account_ = client.account } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    try {
        var _client_chain_formatters_transactionRequest, _client_chain_formatters, _client_chain;
        const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, {
            ...args,
            parameters: // Some RPC Providers do not compute versioned hashes from blobs. We will need
            // to compute them.
            (account === null || account === void 0 ? void 0 : account.type) === 'local' ? undefined : [
                'blobVersionedHashes'
            ]
        });
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStateOverride"])(stateOverride);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (rest.to) return rest.to;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(args);
        const chainFormat = (_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_transactionRequest = _client_chain_formatters.transactionRequest) === null || _client_chain_formatters_transactionRequest === void 0 ? void 0 : _client_chain_formatters_transactionRequest.format;
        const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extract"])(rest, {
                format: chainFormat
            }),
            from: account === null || account === void 0 ? void 0 : account.address,
            accessList,
            authorizationList,
            blobs,
            blobVersionedHashes,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value
        });
        var _ref;
        return BigInt(await client.request({
            method: 'eth_estimateGas',
            params: rpcStateOverride ? [
                request,
                (_ref = block !== null && block !== void 0 ? block : client.experimental_blockTag) !== null && _ref !== void 0 ? _ref : 'latest',
                rpcStateOverride
            ] : block ? [
                request,
                block
            ] : [
                request
            ]
        }));
    } catch (err) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getEstimateGasError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEstimateGasError"])(err, {
            ...args,
            account,
            chain: client.chain
        });
    }
} //# sourceMappingURL=estimateGas.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateContractGas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "estimateContractGas",
    ()=>estimateContractGas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateGas.js [app-client] (ecmascript)");
;
;
;
;
;
async function estimateContractGas(client, parameters) {
    const { abi, address, args, functionName, dataSuffix, ...request } = parameters;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        const gas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateGas"], 'estimateGas')({
            data: "".concat(data).concat(dataSuffix ? dataSuffix.replace('0x', '') : ''),
            to: address,
            ...request
        });
        return gas;
    } catch (error) {
        const account = request.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(request.account) : undefined;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/estimateContractGas',
            functionName,
            sender: account === null || account === void 0 ? void 0 : account.address
        });
    }
} //# sourceMappingURL=estimateContractGas.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlobBaseFee.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the base fee per blob gas in wei.
 *
 * - Docs: https://viem.sh/docs/actions/public/getBlobBaseFee
 * - JSON-RPC Methods: [`eth_blobBaseFee`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blobBaseFee)
 *
 * @param client - Client to use
 * @returns The blob base fee (in wei). {@link GetBlobBaseFeeReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getBlobBaseFee } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const blobBaseFee = await getBlobBaseFee(client)
 */ __turbopack_context__.s([
    "getBlobBaseFee",
    ()=>getBlobBaseFee
]);
async function getBlobBaseFee(client) {
    const baseFee = await client.request({
        method: 'eth_blobBaseFee'
    });
    return BigInt(baseFee);
} //# sourceMappingURL=getBlobBaseFee.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlockNumber",
    ()=>getBlockNumber,
    "getBlockNumberCache",
    ()=>getBlockNumberCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/promise/withCache.js [app-client] (ecmascript)");
;
const cacheKey = (id)=>"blockNumber.".concat(id);
function getBlockNumberCache(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCache"])(cacheKey(id));
}
async function getBlockNumber(client) {
    let { cacheTime = client.cacheTime } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const blockNumberHex = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withCache"])(()=>client.request({
            method: 'eth_blockNumber'
        }), {
        cacheKey: cacheKey(client.uid),
        cacheTime
    });
    return BigInt(blockNumberHex);
} //# sourceMappingURL=getBlockNumber.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockTransactionCount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlockTransactionCount",
    ()=>getBlockTransactionCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
async function getBlockTransactionCount(client) {
    let { blockHash, blockNumber, blockTag = 'latest' } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    let count;
    if (blockHash) {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByHash',
            params: [
                blockHash
            ]
        }, {
            dedupe: true
        });
    } else {
        count = await client.request({
            method: 'eth_getBlockTransactionCountByNumber',
            params: [
                blockNumberHex || blockTag
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(count);
} //# sourceMappingURL=getBlockTransactionCount.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCode",
    ()=>getCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function getCode(client, param) {
    let { address, blockNumber, blockTag = 'latest' } = param;
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    if (hex === '0x') return undefined;
    return hex;
} //# sourceMappingURL=getCode.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getLogs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLogs",
    ()=>getLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
;
;
;
;
async function getLogs(client) {
    let { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const strict = strict_ !== null && strict_ !== void 0 ? strict_ : false;
    const events = events_ !== null && events_ !== void 0 ? events_ : event ? [
        event
    ] : undefined;
    let topics = [];
    if (events) {
        const encoded = events.flatMap((event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                abi: [
                    event
                ],
                eventName: event.name,
                args: events_ ? undefined : args
            }));
        // TODO: Clean up type casting
        topics = [
            encoded
        ];
        if (event) topics = topics[0];
    }
    let logs;
    if (blockHash) {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    blockHash
                }
            ]
        });
    } else {
        logs = await client.request({
            method: 'eth_getLogs',
            params: [
                {
                    address,
                    topics,
                    fromBlock: typeof fromBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(fromBlock) : fromBlock,
                    toBlock: typeof toBlock === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(toBlock) : toBlock
                }
            ]
        });
    }
    const formattedLogs = logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (!events) return formattedLogs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: events,
        args: args,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getLogs.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getContractEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContractEvents",
    ()=>getContractEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getLogs.js [app-client] (ecmascript)");
;
;
;
async function getContractEvents(client, parameters) {
    const { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
    const event = eventName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAbiItem"])({
        abi,
        name: eventName
    }) : undefined;
    const events = !event ? abi.filter((x)=>x.type === 'event') : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogs"], 'getLogs')({
        address,
        args,
        blockHash,
        event,
        events,
        fromBlock,
        toBlock,
        strict
    });
} //# sourceMappingURL=getContractEvents.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getEip712Domain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEip712Domain",
    ()=>getEip712Domain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
            abi,
            address,
            functionName: 'eip712Domain',
            factory,
            factoryData
        });
        return {
            domain: {
                name,
                version,
                chainId: Number(chainId),
                verifyingContract,
                salt
            },
            extensions,
            fields
        };
    } catch (e) {
        const error = e;
        if (error.name === 'ContractFunctionExecutionError' && error.cause.name === 'ContractFunctionZeroDataError') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip712DomainNotFoundError"]({
                address
            });
        }
        throw error;
    }
}
const abi = [
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                name: 'fields',
                type: 'bytes1'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
            {
                name: 'salt',
                type: 'bytes32'
            },
            {
                name: 'extensions',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]; //# sourceMappingURL=getEip712Domain.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFeeHistory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeeHistory",
    ()=>getFeeHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$feeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/feeHistory.js [app-client] (ecmascript)");
;
;
async function getFeeHistory(client, param) {
    let { blockCount, blockNumber, blockTag = 'latest', rewardPercentiles } = param;
    const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const feeHistory = await client.request({
        method: 'eth_feeHistory',
        params: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockCount),
            blockNumberHex || blockTag,
            rewardPercentiles
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$feeHistory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatFeeHistory"])(feeHistory);
} //# sourceMappingURL=getFeeHistory.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFilterChanges",
    ()=>getFilterChanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
;
;
async function getFilterChanges(_client, param) {
    let { filter } = param;
    const strict = 'strict' in filter && filter.strict;
    const logs = await filter.request({
        method: 'eth_getFilterChanges',
        params: [
            filter.id
        ]
    });
    if (typeof logs[0] === 'string') return logs;
    const formattedLogs = logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (!('abi' in filter) || !filter.abi) return formattedLogs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterChanges.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterLogs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFilterLogs",
    ()=>getFilterLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/parseEventLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
;
;
async function getFilterLogs(_client, param) {
    let { filter } = param;
    var _filter_strict;
    const strict = (_filter_strict = filter.strict) !== null && _filter_strict !== void 0 ? _filter_strict : false;
    const logs = await filter.request({
        method: 'eth_getFilterLogs',
        params: [
            filter.id
        ]
    });
    const formattedLogs = logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
    if (!filter.abi) return formattedLogs;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$parseEventLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventLogs"])({
        abi: filter.abi,
        logs: formattedLogs,
        strict
    });
} //# sourceMappingURL=getFilterLogs.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getProof.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProof",
    ()=>getProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$proof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/proof.js [app-client] (ecmascript)");
;
;
async function getProof(client, param) {
    let { address, blockNumber, blockTag: blockTag_, storageKeys } = param;
    const blockTag = blockTag_ !== null && blockTag_ !== void 0 ? blockTag_ : 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const proof = await client.request({
        method: 'eth_getProof',
        params: [
            address,
            storageKeys,
            blockNumberHex || blockTag
        ]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$proof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatProof"])(proof);
} //# sourceMappingURL=getProof.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getStorageAt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStorageAt",
    ()=>getStorageAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function getStorageAt(client, param) {
    let { address, blockNumber, blockTag = 'latest', slot } = param;
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const data = await client.request({
        method: 'eth_getStorageAt',
        params: [
            address,
            slot,
            blockNumberHex || blockTag
        ]
    });
    return data;
} //# sourceMappingURL=getStorageAt.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransaction",
    ()=>getTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transaction.js [app-client] (ecmascript)");
;
;
;
async function getTransaction(client, param) {
    let { blockHash, blockNumber, blockTag: blockTag_, hash, index } = param;
    var _client_chain_formatters_transaction, _client_chain_formatters, _client_chain;
    const blockTag = blockTag_ || 'latest';
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    let transaction = null;
    if (hash) {
        transaction = await client.request({
            method: 'eth_getTransactionByHash',
            params: [
                hash
            ]
        }, {
            dedupe: true
        });
    } else if (blockHash) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockHashAndIndex',
            params: [
                blockHash,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(index)
            ]
        }, {
            dedupe: true
        });
    } else if ("TURBOPACK compile-time truthy", 1) {
        transaction = await client.request({
            method: 'eth_getTransactionByBlockNumberAndIndex',
            params: [
                blockNumberHex || blockTag,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(index)
            ]
        }, {
            dedupe: Boolean(blockNumberHex)
        });
    }
    if (!transaction) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionNotFoundError"]({
        blockHash,
        blockNumber,
        blockTag,
        hash,
        index
    });
    const format = ((_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_transaction = _client_chain_formatters.transaction) === null || _client_chain_formatters_transaction === void 0 ? void 0 : _client_chain_formatters_transaction.format) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransaction"];
    return format(transaction);
} //# sourceMappingURL=getTransaction.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionConfirmations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransactionConfirmations",
    ()=>getTransactionConfirmations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
;
;
;
async function getTransactionConfirmations(client, param) {
    let { hash, transactionReceipt } = param;
    const [blockNumber, transaction] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({}),
        hash ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction')({
            hash
        }) : undefined
    ]);
    const transactionBlockNumber = (transactionReceipt === null || transactionReceipt === void 0 ? void 0 : transactionReceipt.blockNumber) || (transaction === null || transaction === void 0 ? void 0 : transaction.blockNumber);
    if (!transactionBlockNumber) return 0n;
    return blockNumber - transactionBlockNumber + 1n;
} //# sourceMappingURL=getTransactionConfirmations.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransactionReceipt",
    ()=>getTransactionReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
;
;
async function getTransactionReceipt(client, param) {
    let { hash } = param;
    var _client_chain_formatters_transactionReceipt, _client_chain_formatters, _client_chain;
    const receipt = await client.request({
        method: 'eth_getTransactionReceipt',
        params: [
            hash
        ]
    }, {
        dedupe: true
    });
    if (!receipt) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionReceiptNotFoundError"]({
        hash
    });
    const format = ((_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_formatters = _client_chain.formatters) === null || _client_chain_formatters === void 0 ? void 0 : (_client_chain_formatters_transactionReceipt = _client_chain_formatters.transactionReceipt) === null || _client_chain_formatters_transactionReceipt === void 0 ? void 0 : _client_chain_formatters_transactionReceipt.format) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionReceipt"];
    return format(receipt);
} //# sourceMappingURL=getTransactionReceipt.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateBlocks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "simulateBlocks",
    ()=>simulateBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.9.6_typescript@5.9.2_zod@3.22.4/node_modules/ox/_esm/core/BlockOverrides.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getNodeError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stateOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function simulateBlocks(client, parameters) {
    var _client_experimental_blockTag;
    const { blockNumber, blockTag = (_client_experimental_blockTag = client.experimental_blockTag) !== null && _client_experimental_blockTag !== void 0 ? _client_experimental_blockTag : 'latest', blocks, returnFullTransactions, traceTransfers, validation } = parameters;
    try {
        const blockStateCalls = [];
        for (const block of blocks){
            const blockOverrides = block.blockOverrides ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$BlockOverrides$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRpc"](block.blockOverrides) : undefined;
            const calls = block.calls.map((call_)=>{
                const call = call_;
                const account = call.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(call.account) : undefined;
                const data = call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])(call) : call.data;
                var _call_from;
                const request = {
                    ...call,
                    data: call.dataSuffix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                        data || '0x',
                        call.dataSuffix
                    ]) : data,
                    from: (_call_from = call.from) !== null && _call_from !== void 0 ? _call_from : account === null || account === void 0 ? void 0 : account.address
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertRequest"])(request);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransactionRequest"])(request);
            });
            const stateOverrides = block.stateOverrides ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stateOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeStateOverride"])(block.stateOverrides) : undefined;
            blockStateCalls.push({
                blockOverrides,
                calls,
                stateOverrides
            });
        }
        const blockNumberHex = typeof blockNumber === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const result = await client.request({
            method: 'eth_simulateV1',
            params: [
                {
                    blockStateCalls,
                    returnFullTransactions,
                    traceTransfers,
                    validation
                },
                block
            ]
        });
        return result.map((block, i)=>({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBlock"])(block),
                calls: block.calls.map((call, j)=>{
                    var _call_error, _call_logs;
                    const { abi, args, functionName, to } = blocks[i].calls[j];
                    var _call_error_data;
                    const data = (_call_error_data = (_call_error = call.error) === null || _call_error === void 0 ? void 0 : _call_error.data) !== null && _call_error_data !== void 0 ? _call_error_data : call.returnData;
                    const gasUsed = BigInt(call.gasUsed);
                    const logs = (_call_logs = call.logs) === null || _call_logs === void 0 ? void 0 : _call_logs.map((log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log));
                    const status = call.status === '0x1' ? 'success' : 'failure';
                    const result = abi && status === 'success' && data !== '0x' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
                        abi,
                        data,
                        functionName
                    }) : null;
                    const error = (()=>{
                        var _call_error;
                        if (status === 'success') return undefined;
                        let error;
                        if (((_call_error = call.error) === null || _call_error === void 0 ? void 0 : _call_error.data) === '0x') error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]();
                        else if (call.error) error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContractError"](call.error);
                        if (!error) return undefined;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
                            abi: abi !== null && abi !== void 0 ? abi : [],
                            address: to !== null && to !== void 0 ? to : '0x',
                            args,
                            functionName: functionName !== null && functionName !== void 0 ? functionName : '<unknown>'
                        });
                    })();
                    return {
                        data,
                        gasUsed,
                        logs,
                        status,
                        ...status === 'success' ? {
                            result
                        } : {
                            error
                        }
                    };
                })
            }));
    } catch (e) {
        const cause = e;
        const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeError"])(cause, {});
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnknownNodeError"]) throw cause;
        throw error;
    }
} //# sourceMappingURL=simulateBlocks.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateCalls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "simulateCalls",
    ()=>simulateCalls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiConstructor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.9.6_typescript@5.9.2_zod@3.22.4/node_modules/ox/_esm/core/AbiConstructor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.9.6_typescript@5.9.2_zod@3.22.4/node_modules/ox/_esm/core/AbiFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createAccessList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateBlocks.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const getBalanceCode = '0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033';
async function simulateCalls(client, parameters) {
    const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
    const account = parameters.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account) : undefined;
    if (traceAssetChanges && !account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`account` is required when `traceAssetChanges` is true');
    // Derive bytecode to extract ETH balance via a contract call.
    const getBalanceData = account ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiConstructor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiConstructor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('constructor(bytes, bytes)'), {
        bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deploylessCallViaBytecodeBytecode"],
        args: [
            getBalanceCode,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeData"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('function getBalance(address)'), [
                account.address
            ])
        ]
    }) : undefined;
    // Fetch ERC20/721 addresses that were "touched" from the calls.
    const assetAddresses = traceAssetChanges ? await Promise.all(parameters.calls.map(async (call)=>{
        if (!call.data && !call.abi) return;
        const { accessList } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAccessList"])(client, {
            account: account.address,
            ...call,
            data: call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])(call) : call.data
        });
        return accessList.map((param)=>{
            let { address, storageKeys } = param;
            return storageKeys.length > 0 ? address : null;
        });
    })).then((x)=>x.flat().filter(Boolean)) : [];
    const blocks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["simulateBlocks"])(client, {
        blockNumber,
        blockTag: blockTag,
        blocks: [
            ...traceAssetChanges ? [
                // ETH pre balances
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ],
                    stateOverrides
                },
                // Asset pre balances
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                }
            ] : [],
            {
                calls: [
                    ...calls,
                    {}
                ].map((call)=>({
                        ...call,
                        from: account === null || account === void 0 ? void 0 : account.address
                    })),
                stateOverrides
            },
            ...traceAssetChanges ? [
                // ETH post balances
                {
                    calls: [
                        {
                            data: getBalanceData
                        }
                    ]
                },
                // Asset post balances
                {
                    calls: assetAddresses.map((address, i)=>({
                            abi: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('function balanceOf(address) returns (uint256)')
                            ],
                            functionName: 'balanceOf',
                            args: [
                                account.address
                            ],
                            to: address,
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                },
                // Decimals
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('function decimals() returns (uint256)')
                            ],
                            functionName: 'decimals',
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                },
                // Token URI
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('function tokenURI(uint256) returns (string)')
                            ],
                            functionName: 'tokenURI',
                            args: [
                                0n
                            ],
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                },
                // Symbols
                {
                    calls: assetAddresses.map((address, i)=>({
                            to: address,
                            abi: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('function symbol() returns (string)')
                            ],
                            functionName: 'symbol',
                            from: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: i
                        })),
                    stateOverrides: [
                        {
                            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroAddress"],
                            nonce: 0
                        }
                    ]
                }
            ] : []
        ],
        traceTransfers,
        validation
    });
    const block_results = traceAssetChanges ? blocks[2] : blocks[0];
    const [block_ethPre, block_assetsPre, , block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks : [];
    // Extract call results from the simulation.
    const { calls: block_calls, ...block } = block_results;
    var _block_calls_slice;
    const results = (_block_calls_slice = block_calls.slice(0, -1)) !== null && _block_calls_slice !== void 0 ? _block_calls_slice : [];
    var _block_ethPre_calls;
    // Extract pre-execution ETH and asset balances.
    const ethPre = (_block_ethPre_calls = block_ethPre === null || block_ethPre === void 0 ? void 0 : block_ethPre.calls) !== null && _block_ethPre_calls !== void 0 ? _block_ethPre_calls : [];
    var _block_assetsPre_calls;
    const assetsPre = (_block_assetsPre_calls = block_assetsPre === null || block_assetsPre === void 0 ? void 0 : block_assetsPre.calls) !== null && _block_assetsPre_calls !== void 0 ? _block_assetsPre_calls : [];
    const balancesPre = [
        ...ethPre,
        ...assetsPre
    ].map((call)=>call.status === 'success' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.data) : null);
    var _block_ethPost_calls;
    // Extract post-execution ETH and asset balances.
    const ethPost = (_block_ethPost_calls = block_ethPost === null || block_ethPost === void 0 ? void 0 : block_ethPost.calls) !== null && _block_ethPost_calls !== void 0 ? _block_ethPost_calls : [];
    var _block_assetsPost_calls;
    const assetsPost = (_block_assetsPost_calls = block_assetsPost === null || block_assetsPost === void 0 ? void 0 : block_assetsPost.calls) !== null && _block_assetsPost_calls !== void 0 ? _block_assetsPost_calls : [];
    const balancesPost = [
        ...ethPost,
        ...assetsPost
    ].map((call)=>call.status === 'success' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.data) : null);
    var _block_decimals_calls;
    // Extract asset symbols & decimals.
    const decimals = ((_block_decimals_calls = block_decimals === null || block_decimals === void 0 ? void 0 : block_decimals.calls) !== null && _block_decimals_calls !== void 0 ? _block_decimals_calls : []).map((x)=>x.status === 'success' ? x.result : null);
    var _block_symbols_calls;
    const symbols = ((_block_symbols_calls = block_symbols === null || block_symbols === void 0 ? void 0 : block_symbols.calls) !== null && _block_symbols_calls !== void 0 ? _block_symbols_calls : []).map((x)=>x.status === 'success' ? x.result : null);
    var _block_tokenURI_calls;
    const tokenURI = ((_block_tokenURI_calls = block_tokenURI === null || block_tokenURI === void 0 ? void 0 : block_tokenURI.calls) !== null && _block_tokenURI_calls !== void 0 ? _block_tokenURI_calls : []).map((x)=>x.status === 'success' ? x.result : null);
    const changes = [];
    for (const [i, balancePost] of balancesPost.entries()){
        const balancePre = balancesPre[i];
        if (typeof balancePost !== 'bigint') continue;
        if (typeof balancePre !== 'bigint') continue;
        const decimals_ = decimals[i - 1];
        const symbol_ = symbols[i - 1];
        const tokenURI_ = tokenURI[i - 1];
        const token = (()=>{
            if (i === 0) return {
                address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ethAddress"],
                decimals: 18,
                symbol: 'ETH'
            };
            return {
                address: assetAddresses[i - 1],
                decimals: tokenURI_ || decimals_ ? Number(decimals_ !== null && decimals_ !== void 0 ? decimals_ : 1) : undefined,
                symbol: symbol_ !== null && symbol_ !== void 0 ? symbol_ : undefined
            };
        })();
        if (changes.some((change)=>change.token.address === token.address)) continue;
        changes.push({
            token,
            value: {
                pre: balancePre,
                post: balancePost,
                diff: balancePost - balancePre
            }
        });
    }
    return {
        assetChanges: changes,
        block,
        results
    };
} //# sourceMappingURL=simulateCalls.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateContract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "simulateContract",
    ()=>simulateContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function simulateContract(client, parameters) {
    const { abi, address, args, dataSuffix, functionName, ...callRequest } = parameters;
    const account = callRequest.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(callRequest.account) : client.account;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')({
            batch: false,
            data: "".concat(calldata).concat(dataSuffix ? dataSuffix.replace('0x', '') : ''),
            to: address,
            ...callRequest,
            account
        });
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeFunctionResult"])({
            abi,
            args,
            functionName,
            data: data || '0x'
        });
        const minimizedAbi = abi.filter((abiItem)=>'name' in abiItem && abiItem.name === parameters.functionName);
        return {
            result,
            request: {
                abi: minimizedAbi,
                address,
                args,
                dataSuffix,
                functionName,
                ...callRequest,
                account
            }
        };
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/simulateContract',
            functionName,
            sender: account === null || account === void 0 ? void 0 : account.address
        });
    }
} //# sourceMappingURL=simulateContract.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Destroys a [`Filter`](https://viem.sh/docs/glossary/types#filter).
 *
 * - Docs: https://viem.sh/docs/actions/public/uninstallFilter
 * - JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)
 *
 * Destroys a Filter that was created from one of the following Actions:
 * - [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter)
 * - [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter)
 * - [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter)
 *
 * @param client - Client to use
 * @param parameters - {@link UninstallFilterParameters}
 * @returns A boolean indicating if the Filter was successfully uninstalled. {@link UninstallFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'
 *
 * const filter = await createPendingTransactionFilter(client)
 * const uninstalled = await uninstallFilter(client, { filter })
 * // true
 */ __turbopack_context__.s([
    "uninstallFilter",
    ()=>uninstallFilter
]);
async function uninstallFilter(_client, param) {
    let { filter } = param;
    return filter.request({
        method: 'eth_uninstallFilter',
        params: [
            filter.id
        ]
    });
} //# sourceMappingURL=uninstallFilter.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyErc1271",
    ()=>verifyErc1271,
    "verifyErc8010",
    ()=>verifyErc8010,
    "verifyHash",
    ()=>verifyHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$erc6492$2f$SignatureErc6492$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc6492$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.9.6_typescript@5.9.2_zod@3.22.4/node_modules/ox/_esm/erc6492/SignatureErc6492.js [app-client] (ecmascript) <export * as SignatureErc6492>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ox@0.9.6_typescript@5.9.2_zod@3.22.4/node_modules/ox/_esm/erc8010/SignatureErc8010.js [app-client] (ecmascript) <export * as SignatureErc8010>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$verifyAuthorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function verifyHash(client, parameters) {
    var _client_chain_contracts_multicall3, _client_chain_contracts, _client_chain;
    var _parameters_universalSignatureVerifierAddress, _parameters_multicallAddress;
    const { address, hash, erc6492VerifierAddress: verifierAddress = (()=>{
        var _client_chain_contracts_erc6492Verifier, _client_chain_contracts, _client_chain;
        return (_parameters_universalSignatureVerifierAddress = parameters.universalSignatureVerifierAddress) !== null && _parameters_universalSignatureVerifierAddress !== void 0 ? _parameters_universalSignatureVerifierAddress : (_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_contracts = _client_chain.contracts) === null || _client_chain_contracts === void 0 ? void 0 : (_client_chain_contracts_erc6492Verifier = _client_chain_contracts.erc6492Verifier) === null || _client_chain_contracts_erc6492Verifier === void 0 ? void 0 : _client_chain_contracts_erc6492Verifier.address;
    })(), multicallAddress = (_parameters_multicallAddress = parameters.multicallAddress) !== null && _parameters_multicallAddress !== void 0 ? _parameters_multicallAddress : (_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : (_client_chain_contracts = _client_chain.contracts) === null || _client_chain_contracts === void 0 ? void 0 : (_client_chain_contracts_multicall3 = _client_chain_contracts.multicall3) === null || _client_chain_contracts_multicall3 === void 0 ? void 0 : _client_chain_contracts_multicall3.address } = parameters;
    const signature = (()=>{
        const signature = parameters.signature;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(signature)) return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeSignature"])(signature);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(signature);
    })();
    try {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].validate(signature)) return await verifyErc8010(client, {
            ...parameters,
            multicallAddress,
            signature
        });
        return await verifyErc6492(client, {
            ...parameters,
            verifierAddress,
            signature
        });
    } catch (error) {
        // Fallback attempt to verify the signature via ECDSA recovery.
        try {
            const verified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"])({
                hash,
                signature
            }));
            if (verified) return true;
        } catch (e) {}
        if (error instanceof VerificationError) {
            // if the execution fails, the signature was not valid and an internal method inside of the validator reverted
            // this can happen for many reasons, for example if signer can not be recovered from the signature
            // or if the signature has no valid format
            return false;
        }
        throw error;
    }
}
async function verifyErc8010(client, parameters) {
    var _results_;
    const { address, blockNumber, blockTag, hash, multicallAddress } = parameters;
    const { authorization: authorization_ox, data: initData, signature, to } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].unwrap(parameters.signature);
    // Check if already delegated
    const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCode"])(client, {
        address,
        blockNumber,
        blockTag
    });
    // If already delegated, perform standard ERC-1271 verification.
    if (code === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        '0xef0100',
        authorization_ox.address
    ])) return await verifyErc1271(client, {
        address,
        blockNumber,
        blockTag,
        hash,
        signature
    });
    const authorization = {
        address: authorization_ox.address,
        chainId: Number(authorization_ox.chainId),
        nonce: Number(authorization_ox.nonce),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(authorization_ox.r, {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(authorization_ox.s, {
            size: 32
        }),
        yParity: authorization_ox.yParity
    };
    const valid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$verifyAuthorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAuthorization"])({
        address,
        authorization
    });
    if (!valid) throw new VerificationError();
    // Deployless verification.
    const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        ...multicallAddress ? {
            address: multicallAddress
        } : {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Bytecode"]
        },
        authorizationList: [
            authorization
        ],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
        blockNumber,
        blockTag: 'pending',
        functionName: 'aggregate3',
        args: [
            [
                ...initData ? [
                    {
                        allowFailure: true,
                        target: to !== null && to !== void 0 ? to : address,
                        callData: initData
                    }
                ] : [],
                {
                    allowFailure: true,
                    target: address,
                    callData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1271Abi"],
                        functionName: 'isValidSignature',
                        args: [
                            hash,
                            signature
                        ]
                    })
                }
            ]
        ]
    });
    const data = (_results_ = results[results.length - 1]) === null || _results_ === void 0 ? void 0 : _results_.returnData;
    if (data === null || data === void 0 ? void 0 : data.startsWith('0x1626ba7e')) return true;
    throw new VerificationError();
}
/** @internal */ // biome-ignore lint/correctness/noUnusedVariables: _
async function verifyErc6492(client, parameters) {
    const { address, factory, factoryData, hash, signature, verifierAddress, ...rest } = parameters;
    const wrappedSignature = await (async ()=>{
        // If no `factory` or `factoryData` is provided, it is assumed that the
        // address is not a Smart Account, or the Smart Account is already deployed.
        if (!factory && !factoryData) return signature;
        // If the signature is already wrapped, return the signature.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$erc6492$2f$SignatureErc6492$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc6492$3e$__["SignatureErc6492"].validate(signature)) return signature;
        // If the Smart Account is not deployed, wrap the signature with a 6492 wrapper
        // to perform counterfactual validation.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ox$40$0$2e$9$2e$6_typescript$40$5$2e$9$2e$2_zod$40$3$2e$22$2e$4$2f$node_modules$2f$ox$2f$_esm$2f$erc6492$2f$SignatureErc6492$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc6492$3e$__["SignatureErc6492"].wrap({
            data: factoryData,
            signature,
            to: factory
        });
    })();
    const args = verifierAddress ? {
        to: verifierAddress,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc6492SignatureValidatorAbi"],
            functionName: 'isValidSig',
            args: [
                address,
                hash,
                wrappedSignature
            ]
        }),
        ...rest
    } : {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc6492SignatureValidatorAbi"],
            args: [
                address,
                hash,
                wrappedSignature
            ],
            bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc6492SignatureValidatorByteCode"]
        }),
        ...rest
    };
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')(args).catch((error)=>{
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallExecutionError"]) throw new VerificationError();
        throw error;
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBool"])(data !== null && data !== void 0 ? data : '0x0')) return true;
    throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
    const { address, blockNumber, blockTag, hash, signature } = parameters;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1271Abi"],
        args: [
            hash,
            signature
        ],
        blockNumber,
        blockTag,
        functionName: 'isValidSignature'
    }).catch((error)=>{
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw new VerificationError();
        throw error;
    });
    if (result.startsWith('0x1626ba7e')) return true;
    throw new VerificationError();
}
class VerificationError extends Error {
} //# sourceMappingURL=verifyHash.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyMessage",
    ()=>verifyMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)");
;
;
async function verifyMessage(client, param) {
    let { address, message, factory, factoryData, signature, ...callRequest } = param;
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(message);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyHash"])(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyMessage.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyTypedData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyTypedData",
    ()=>verifyTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)");
;
;
async function verifyTypedData(client, parameters) {
    const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashTypedData"])({
        message,
        primaryType,
        types,
        domain
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyHash"])(client, {
        address,
        factory: factory,
        factoryData: factoryData,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifyTypedData.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchBlockNumber",
    ()=>watchBlockNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
;
;
;
;
;
;
function watchBlockNumber(client, param) {
    let { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval } = param;
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    let prevBlockNumber;
    const pollBlockNumber = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed,
            pollingInterval
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                try {
                    const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({
                        cacheTime: 0
                    });
                    if (prevBlockNumber !== undefined) {
                        // If the current block number is the same as the previous,
                        // we can skip.
                        if (blockNumber === prevBlockNumber) return;
                        // If we have missed out on some previous blocks, and the
                        // `emitMissed` flag is truthy, let's emit those blocks.
                        if (blockNumber - prevBlockNumber > 1 && emitMissed) {
                            for(let i = prevBlockNumber + 1n; i < blockNumber; i++){
                                emit.onBlockNumber(i, prevBlockNumber);
                                prevBlockNumber = i;
                            }
                        }
                    }
                    // If the next block number is greater than the previous,
                    // it is not in the past, and we can emit the new block number.
                    if (prevBlockNumber === undefined || blockNumber > prevBlockNumber) {
                        emit.onBlockNumber(blockNumber, prevBlockNumber);
                        prevBlockNumber = blockNumber;
                    }
                } catch (err) {
                    var _emit_onError;
                    (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlockNumber = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchBlockNumber',
            client.uid,
            emitOnBegin,
            emitMissed
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onBlockNumber,
            onError
        }, (emit)=>{
            let active = true;
            let unsubscribe = ()=>active = false;
            (async ()=>{
                try {
                    const transport = (()=>{
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                            if (!transport) return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: [
                            'newHeads'
                        ],
                        onData (data) {
                            var _data_result;
                            if (!active) return;
                            const blockNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])((_data_result = data.result) === null || _data_result === void 0 ? void 0 : _data_result.number);
                            emit.onBlockNumber(blockNumber, prevBlockNumber);
                            prevBlockNumber = blockNumber;
                        },
                        onError (error) {
                            var _emit_onError;
                            (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, error);
                        }
                    });
                    unsubscribe = unsubscribe_;
                    if (!active) unsubscribe();
                } catch (err) {
                    onError === null || onError === void 0 ? void 0 : onError(err);
                }
            })();
            return ()=>unsubscribe();
        });
    };
    return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
} //# sourceMappingURL=watchBlockNumber.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "waitForTransactionReceipt",
    ()=>waitForTransactionReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/promise/withResolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/promise/withRetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function waitForTransactionReceipt(client, parameters) {
    const { checkReplacement = true, confirmations = 1, hash, onReplaced, retryCount = 6, retryDelay = (param)=>{
        let { count } = param;
        return ~~(1 << count) * 200;
    }, timeout = 180_000 } = parameters;
    const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
        'waitForTransactionReceipt',
        client.uid,
        hash
    ]);
    const pollingInterval = (()=>{
        var _client_chain;
        if (parameters.pollingInterval) return parameters.pollingInterval;
        if ((_client_chain = client.chain) === null || _client_chain === void 0 ? void 0 : _client_chain.experimental_preconfirmationTime) return client.chain.experimental_preconfirmationTime;
        return client.pollingInterval;
    })();
    let transaction;
    let replacedTransaction;
    let receipt;
    let retrying = false;
    let _unobserve;
    let _unwatch;
    const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withResolvers"])();
    const timer = timeout ? setTimeout(()=>{
        _unwatch === null || _unwatch === void 0 ? void 0 : _unwatch();
        _unobserve === null || _unobserve === void 0 ? void 0 : _unobserve();
        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaitForTransactionReceiptTimeoutError"]({
            hash
        }));
    }, timeout) : undefined;
    _unobserve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
        onReplaced,
        resolve,
        reject
    }, async (emit)=>{
        receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"], 'getTransactionReceipt')({
            hash
        }).catch(()=>undefined);
        if (receipt && confirmations <= 1) {
            clearTimeout(timer);
            emit.resolve(receipt);
            _unobserve === null || _unobserve === void 0 ? void 0 : _unobserve();
            return;
        }
        _unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchBlockNumber"], 'watchBlockNumber')({
            emitMissed: true,
            emitOnBegin: true,
            poll: true,
            pollingInterval,
            async onBlockNumber (blockNumber_) {
                const done = (fn)=>{
                    clearTimeout(timer);
                    _unwatch === null || _unwatch === void 0 ? void 0 : _unwatch();
                    fn();
                    _unobserve === null || _unobserve === void 0 ? void 0 : _unobserve();
                };
                let blockNumber = blockNumber_;
                if (retrying) return;
                try {
                    // If we already have a valid receipt, let's check if we have enough
                    // confirmations. If we do, then we can resolve.
                    if (receipt) {
                        if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                        done(()=>emit.resolve(receipt));
                        return;
                    }
                    // Get the transaction to check if it's been replaced.
                    // We need to retry as some RPC Providers may be slow to sync
                    // up mined transactions.
                    if (checkReplacement && !transaction) {
                        retrying = true;
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                            transaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransaction"], 'getTransaction')({
                                hash
                            });
                            if (transaction.blockNumber) blockNumber = transaction.blockNumber;
                        }, {
                            delay: retryDelay,
                            retryCount
                        });
                        retrying = false;
                    }
                    // Get the receipt to check if it's been processed.
                    receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"], 'getTransactionReceipt')({
                        hash
                    });
                    // Check if we have enough confirmations. If not, continue polling.
                    if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                    done(()=>emit.resolve(receipt));
                } catch (err) {
                    // If the receipt is not found, the transaction will be pending.
                    // We need to check if it has potentially been replaced.
                    if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionNotFoundError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionReceiptNotFoundError"]) {
                        if (!transaction) {
                            retrying = false;
                            return;
                        }
                        try {
                            replacedTransaction = transaction;
                            // Let's retrieve the transactions from the current block.
                            // We need to retry as some RPC Providers may be slow to sync
                            // up mined blocks.
                            retrying = true;
                            const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                                    blockNumber,
                                    includeTransactions: true
                                }), {
                                delay: retryDelay,
                                retryCount,
                                shouldRetry: (param)=>{
                                    let { error } = param;
                                    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockNotFoundError"];
                                }
                            });
                            retrying = false;
                            const replacementTransaction = block.transactions.find((param)=>{
                                let { from, nonce } = param;
                                return from === replacedTransaction.from && nonce === replacedTransaction.nonce;
                            });
                            // If we couldn't find a replacement transaction, continue polling.
                            if (!replacementTransaction) return;
                            // If we found a replacement transaction, return it's receipt.
                            receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionReceipt"], 'getTransactionReceipt')({
                                hash: replacementTransaction.hash
                            });
                            // Check if we have enough confirmations. If not, continue polling.
                            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations)) return;
                            let reason = 'replaced';
                            if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value && replacementTransaction.input === replacedTransaction.input) {
                                reason = 'repriced';
                            } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                                reason = 'cancelled';
                            }
                            done(()=>{
                                var _emit_onReplaced;
                                (_emit_onReplaced = emit.onReplaced) === null || _emit_onReplaced === void 0 ? void 0 : _emit_onReplaced.call(emit, {
                                    reason,
                                    replacedTransaction: replacedTransaction,
                                    transaction: replacementTransaction,
                                    transactionReceipt: receipt
                                });
                                emit.resolve(receipt);
                            });
                        } catch (err_) {
                            done(()=>emit.reject(err_));
                        }
                    } else {
                        done(()=>emit.reject(err));
                    }
                }
            }
        });
    });
    return promise;
} //# sourceMappingURL=waitForTransactionReceipt.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchBlocks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchBlocks",
    ()=>watchBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-client] (ecmascript)");
;
;
;
;
;
var _client_experimental_blockTag;
function watchBlocks(client, param) {
    let { blockTag = (_client_experimental_blockTag = client.experimental_blockTag) !== null && _client_experimental_blockTag !== void 0 ? _client_experimental_blockTag : 'latest', emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval } = param;
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    const includeTransactions = includeTransactions_ !== null && includeTransactions_ !== void 0 ? includeTransactions_ : false;
    let prevBlock;
    const pollBlocks = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchBlocks',
            client.uid,
            blockTag,
            emitMissed,
            emitOnBegin,
            includeTransactions,
            pollingInterval
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onBlock,
            onError
        }, (emit)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                try {
                    const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                        blockTag,
                        includeTransactions
                    });
                    if (block.number !== null && (prevBlock === null || prevBlock === void 0 ? void 0 : prevBlock.number) != null) {
                        // If the current block number is the same as the previous,
                        // we can skip.
                        if (block.number === prevBlock.number) return;
                        // If we have missed out on some previous blocks, and the
                        // `emitMissed` flag is truthy, let's emit those blocks.
                        if (block.number - prevBlock.number > 1 && emitMissed) {
                            for(let i = (prevBlock === null || prevBlock === void 0 ? void 0 : prevBlock.number) + 1n; i < block.number; i++){
                                const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                                    blockNumber: i,
                                    includeTransactions
                                });
                                emit.onBlock(block, prevBlock);
                                prevBlock = block;
                            }
                        }
                    }
                    if (// If no previous block exists, emit.
                    (prevBlock === null || prevBlock === void 0 ? void 0 : prevBlock.number) == null || blockTag === 'pending' && (block === null || block === void 0 ? void 0 : block.number) == null || block.number !== null && block.number > prevBlock.number) {
                        emit.onBlock(block, prevBlock);
                        prevBlock = block;
                    }
                } catch (err) {
                    var _emit_onError;
                    (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, err);
                }
            }, {
                emitOnBegin,
                interval: pollingInterval
            }));
    };
    const subscribeBlocks = ()=>{
        let active = true;
        let emitFetched = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                if (emitOnBegin) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                        blockTag,
                        includeTransactions
                    }).then((block)=>{
                        if (!active) return;
                        if (!emitFetched) return;
                        onBlock(block, undefined);
                        emitFetched = false;
                    }).catch(onError);
                }
                const transport = (()=>{
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                        if (!transport) return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: [
                        'newHeads'
                    ],
                    async onData (data) {
                        var _data_result;
                        if (!active) return;
                        const block = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlock"], 'getBlock')({
                            blockNumber: (_data_result = data.result) === null || _data_result === void 0 ? void 0 : _data_result.number,
                            includeTransactions
                        }).catch(()=>{});
                        if (!active) return;
                        onBlock(block, prevBlock);
                        emitFetched = false;
                        prevBlock = block;
                    },
                    onError (error) {
                        onError === null || onError === void 0 ? void 0 : onError(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollBlocks() : subscribeBlocks();
} //# sourceMappingURL=watchBlocks.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchContractEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchContractEvent",
    ()=>watchContractEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createContractEventFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getContractEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function watchContractEvent(client, parameters) {
    const { abi, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (typeof fromBlock === 'bigint') return true;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    const pollContractEvent = ()=>{
        const strict = strict_ !== null && strict_ !== void 0 ? strict_ : false;
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict,
            fromBlock
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContractEventFilter"], 'createContractEventFilter')({
                            abi,
                            address,
                            args: args,
                            eventName: eventName,
                            strict: strict,
                            fromBlock
                        });
                    } catch (e) {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterChanges"], 'getFilterChanges')({
                            filter
                        });
                    } else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber < blockNumber) {
                            logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractEvents"], 'getContractEvents')({
                                abi,
                                address,
                                args,
                                eventName,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber,
                                strict
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    var _emit_onError;
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidInputRpcError"]) initialized = false;
                    (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uninstallFilter"], 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeContractEvent = ()=>{
        const strict = strict_ !== null && strict_ !== void 0 ? strict_ : false;
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchContractEvent',
            address,
            args,
            batch,
            client.uid,
            eventName,
            pollingInterval,
            strict
        ]);
        let active = true;
        let unsubscribe = ()=>active = false;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            ;
            (async ()=>{
                try {
                    const transport = (()=>{
                        if (client.transport.type === 'fallback') {
                            const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                            if (!transport) return client.transport;
                            return transport.value;
                        }
                        return client.transport;
                    })();
                    const topics = eventName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                        abi: abi,
                        eventName: eventName,
                        args
                    }) : [];
                    const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                        params: [
                            'logs',
                            {
                                address,
                                topics
                            }
                        ],
                        onData (data) {
                            if (!active) return;
                            const log = data.result;
                            try {
                                const { eventName, args } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                                    abi: abi,
                                    data: log.data,
                                    topics: log.topics,
                                    strict: strict_
                                });
                                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                    args,
                                    eventName: eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            } catch (err) {
                                let eventName;
                                let isUnnamed;
                                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogDataMismatch"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogTopicsMismatch"]) {
                                    var _err_abiItem_inputs;
                                    // If strict mode is on, and log data/topics do not match event definition, skip.
                                    if (strict_) return;
                                    eventName = err.abiItem.name;
                                    isUnnamed = (_err_abiItem_inputs = err.abiItem.inputs) === null || _err_abiItem_inputs === void 0 ? void 0 : _err_abiItem_inputs.some((x)=>!('name' in x && x.name));
                                }
                                // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                    args: isUnnamed ? [] : {},
                                    eventName
                                });
                                emit.onLogs([
                                    formatted
                                ]);
                            }
                        },
                        onError (error) {
                            var _emit_onError;
                            (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, error);
                        }
                    });
                    unsubscribe = unsubscribe_;
                    if (!active) unsubscribe();
                } catch (err) {
                    onError === null || onError === void 0 ? void 0 : onError(err);
                }
            })();
            return ()=>unsubscribe();
        });
    };
    return enablePolling ? pollContractEvent() : subscribeContractEvent();
} //# sourceMappingURL=watchContractEvent.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchEvent",
    ()=>watchEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/abi/encodeEventTopics.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createEventFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getLogs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function watchEvent(client, param) {
    let { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = param;
    const enablePolling = (()=>{
        if (typeof poll_ !== 'undefined') return poll_;
        if (typeof fromBlock === 'bigint') return true;
        if (client.transport.type === 'webSocket' || client.transport.type === 'ipc') return false;
        if (client.transport.type === 'fallback' && (client.transport.transports[0].config.type === 'webSocket' || client.transport.transports[0].config.type === 'ipc')) return false;
        return true;
    })();
    const strict = strict_ !== null && strict_ !== void 0 ? strict_ : false;
    const pollEvent = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchEvent',
            address,
            args,
            batch,
            client.uid,
            event,
            pollingInterval,
            fromBlock
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onLogs,
            onError
        }, (emit)=>{
            let previousBlockNumber;
            if (fromBlock !== undefined) previousBlockNumber = fromBlock - 1n;
            let filter;
            let initialized = false;
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                if (!initialized) {
                    try {
                        filter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventFilter"], 'createEventFilter')({
                            address,
                            args,
                            event: event,
                            events,
                            strict,
                            fromBlock
                        });
                    } catch (e) {}
                    initialized = true;
                    return;
                }
                try {
                    let logs;
                    if (filter) {
                        logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterChanges"], 'getFilterChanges')({
                            filter
                        });
                    } else {
                        // If the filter doesn't exist, we will fall back to use `getLogs`.
                        // The fall back exists because some RPC Providers do not support filters.
                        // Fetch the block number to use for `getLogs`.
                        const blockNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlockNumber"], 'getBlockNumber')({});
                        // If the block number has changed, we will need to fetch the logs.
                        // If the block number doesn't exist, we are yet to reach the first poll interval,
                        // so do not emit any logs.
                        if (previousBlockNumber && previousBlockNumber !== blockNumber) {
                            logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLogs"], 'getLogs')({
                                address,
                                args,
                                event: event,
                                events,
                                fromBlock: previousBlockNumber + 1n,
                                toBlock: blockNumber
                            });
                        } else {
                            logs = [];
                        }
                        previousBlockNumber = blockNumber;
                    }
                    if (logs.length === 0) return;
                    if (batch) emit.onLogs(logs);
                    else for (const log of logs)emit.onLogs([
                        log
                    ]);
                } catch (err) {
                    var _emit_onError;
                    // If a filter has been set and gets uninstalled, providers will throw an InvalidInput error.
                    // Reinitialize the filter when this occurs
                    if (filter && err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidInputRpcError"]) initialized = false;
                    (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uninstallFilter"], 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribeEvent = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const transport = (()=>{
                    if (client.transport.type === 'fallback') {
                        const transport = client.transport.transports.find((transport)=>transport.config.type === 'webSocket' || transport.config.type === 'ipc');
                        if (!transport) return client.transport;
                        return transport.value;
                    }
                    return client.transport;
                })();
                const events_ = events !== null && events !== void 0 ? events : event ? [
                    event
                ] : undefined;
                let topics = [];
                if (events_) {
                    const encoded = events_.flatMap((event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeEventTopics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEventTopics"])({
                            abi: [
                                event
                            ],
                            eventName: event.name,
                            args
                        }));
                    // TODO: Clean up type casting
                    topics = [
                        encoded
                    ];
                    if (event) topics = topics[0];
                }
                const { unsubscribe: unsubscribe_ } = await transport.subscribe({
                    params: [
                        'logs',
                        {
                            address,
                            topics
                        }
                    ],
                    onData (data) {
                        if (!active) return;
                        const log = data.result;
                        try {
                            const { eventName, args } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                                abi: events_ !== null && events_ !== void 0 ? events_ : [],
                                data: log.data,
                                topics: log.topics,
                                strict
                            });
                            const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                args,
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        } catch (err) {
                            let eventName;
                            let isUnnamed;
                            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogDataMismatch"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeLogTopicsMismatch"]) {
                                var _err_abiItem_inputs;
                                // If strict mode is on, and log data/topics do not match event definition, skip.
                                if (strict_) return;
                                eventName = err.abiItem.name;
                                isUnnamed = (_err_abiItem_inputs = err.abiItem.inputs) === null || _err_abiItem_inputs === void 0 ? void 0 : _err_abiItem_inputs.some((x)=>!('name' in x && x.name));
                            }
                            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
                            const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLog"])(log, {
                                args: isUnnamed ? [] : {},
                                eventName
                            });
                            onLogs([
                                formatted
                            ]);
                        }
                    },
                    onError (error) {
                        onError === null || onError === void 0 ? void 0 : onError(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollEvent() : subscribeEvent();
} //# sourceMappingURL=watchEvent.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchPendingTransactions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchPendingTransactions",
    ()=>watchPendingTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function watchPendingTransactions(client, param) {
    let { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval } = param;
    const enablePolling = typeof poll_ !== 'undefined' ? poll_ : client.transport.type !== 'webSocket' && client.transport.type !== 'ipc';
    const pollPendingTransactions = ()=>{
        const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
            'watchPendingTransactions',
            client.uid,
            batch,
            pollingInterval
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
            onTransactions,
            onError
        }, (emit)=>{
            let filter;
            const unwatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
                try {
                    if (!filter) {
                        try {
                            filter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPendingTransactionFilter"], 'createPendingTransactionFilter')({});
                            return;
                        } catch (err) {
                            unwatch();
                            throw err;
                        }
                    }
                    const hashes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilterChanges"], 'getFilterChanges')({
                        filter
                    });
                    if (hashes.length === 0) return;
                    if (batch) emit.onTransactions(hashes);
                    else for (const hash of hashes)emit.onTransactions([
                        hash
                    ]);
                } catch (err) {
                    var _emit_onError;
                    (_emit_onError = emit.onError) === null || _emit_onError === void 0 ? void 0 : _emit_onError.call(emit, err);
                }
            }, {
                emitOnBegin: true,
                interval: pollingInterval
            });
            return async ()=>{
                if (filter) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uninstallFilter"], 'uninstallFilter')({
                    filter
                });
                unwatch();
            };
        });
    };
    const subscribePendingTransactions = ()=>{
        let active = true;
        let unsubscribe = ()=>active = false;
        (async ()=>{
            try {
                const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
                    params: [
                        'newPendingTransactions'
                    ],
                    onData (data) {
                        if (!active) return;
                        const transaction = data.result;
                        onTransactions([
                            transaction
                        ]);
                    },
                    onError (error) {
                        onError === null || onError === void 0 ? void 0 : onError(error);
                    }
                });
                unsubscribe = unsubscribe_;
                if (!active) unsubscribe();
            } catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
            }
        })();
        return ()=>unsubscribe();
    };
    return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
} //# sourceMappingURL=watchPendingTransactions.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/siwe/verifySiweMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifySiweMessage",
    ()=>verifySiweMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$parseSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/siwe/parseSiweMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$validateSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/siwe/validateSiweMessage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)");
;
;
;
;
async function verifySiweMessage(client, parameters) {
    const { address, domain, message, nonce, scheme, signature, time = new Date(), ...callRequest } = parameters;
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$parseSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSiweMessage"])(message);
    if (!parsed.address) return false;
    const isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$siwe$2f$validateSiweMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSiweMessage"])({
        address,
        domain,
        message: parsed,
        nonce,
        scheme,
        time
    });
    if (!isValid) return false;
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashMessage"])(message);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyHash"])(client, {
        address: parsed.address,
        hash,
        signature,
        ...callRequest
    });
} //# sourceMappingURL=verifySiweMessage.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sends a **signed** transaction to the network
 *
 * - Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
 * - JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
 *
 * @param client - Client to use
 * @param parameters - {@link SendRawTransactionParameters}
 * @returns The transaction hash. {@link SendRawTransactionReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { sendRawTransaction } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 *
 * const hash = await sendRawTransaction(client, {
 *   serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
 * })
 */ __turbopack_context__.s([
    "sendRawTransaction",
    ()=>sendRawTransaction
]);
async function sendRawTransaction(client, param) {
    let { serializedTransaction } = param;
    return client.request({
        method: 'eth_sendRawTransaction',
        params: [
            serializedTransaction
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=sendRawTransaction.js.map
}),
"[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/wallet/signMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signMessage",
    ()=>signMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.37.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
async function signMessage(client, param) {
    let { account: account_ = client.account, message } = param;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signMessage'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    if (account.signMessage) return account.signMessage({
        message
    });
    const message_ = (()=>{
        if (typeof message === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToHex"])(message);
        if (message.raw instanceof Uint8Array) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$37$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(message.raw);
        return message.raw;
    })();
    return client.request({
        method: 'personal_sign',
        params: [
            message_,
            account.address
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signMessage.js.map
}),
]);

//# sourceMappingURL=83793_viem__esm_actions_951cd5ac._.js.map