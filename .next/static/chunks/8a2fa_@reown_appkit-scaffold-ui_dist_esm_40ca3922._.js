(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsWidget",
    ()=>W3mAllWalletsWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-list-wallet\n        name="All Wallets"\n        walletIcon="allWallets"\n        showAllWallets\n        @click=',
        "\n        tagLabel=",
        '\n        tagVariant="shade"\n        data-testid="all-wallets"\n        tabIdx=',
        "\n        .loading=",
        "\n        loadingSpinnerColor=",
        "\n      ></wui-list-wallet>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
let W3mAllWalletsWidget = class W3mAllWalletsWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const wcConnector = this.connectors.find((c)=>c.id === 'walletConnect');
        const { allWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        if (!wcConnector || allWallets === 'HIDE') {
            return null;
        }
        if (allWallets === 'ONLY_MOBILE' && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            return null;
        }
        const featuredCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.featured.length;
        const rawCount = this.count + featuredCount;
        const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
        const count = this.filteredCount > 0 ? this.filteredCount : roundedCount;
        let tagLabel = "".concat(count);
        if (this.filteredCount > 0) {
            tagLabel = "".concat(this.filteredCount);
        } else if (count < rawCount) {
            tagLabel = "".concat(count, "+");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), this.onAllWallets.bind(this), tagLabel, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx), this.isFetchingRecommendedWallets, this.isFetchingRecommendedWallets ? 'fg-300' : 'accent-100');
    }
    onAllWallets() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'CLICK_ALL_WALLETS'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('AllWallets');
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.count;
        this.filteredCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.filteredWallets.length;
        this.isFetchingRecommendedWallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.isFetchingRecommendedWallets;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('count', (val)=>this.count = val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('filteredWallets', (val)=>this.filteredCount = val.length), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('isFetchingRecommendedWallets', (val)=>this.isFetchingRecommendedWallets = val));
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsWidget.prototype, "connectors", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsWidget.prototype, "count", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
W3mAllWalletsWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-all-wallets-widget')
], W3mAllWalletsWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-announced-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectAnnouncedWidget",
    ()=>W3mConnectAnnouncedWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n              <wui-list-wallet\n                imageSrc=",
        "\n                name=",
        "\n                @click=",
        '\n                tagVariant="success"\n                tagLabel="installed"\n                data-testid=',
        "\n                .installed=",
        "\n                tabIdx=",
        "\n              >\n              </wui-list-wallet>\n            "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
let W3mConnectAnnouncedWidget = class W3mConnectAnnouncedWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const announcedConnectors = this.connectors.filter((connector)=>connector.type === 'ANNOUNCED');
        if (!(announcedConnectors === null || announcedConnectors === void 0 ? void 0 : announcedConnectors.length)) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), announcedConnectors.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector).map((connector)=>{
            var _connector_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector)), (_connector_name = connector.name) !== null && _connector_name !== void 0 ? _connector_name : 'Unknown', ()=>this.onConnector(connector), "wallet-selector-".concat(connector.id), true, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
        }));
    }
    onConnector(connector) {
        if (connector.id === 'walletConnect') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('AllWallets');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect');
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingExternal', {
                connector
            });
        }
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val));
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectAnnouncedWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectAnnouncedWidget.prototype, "connectors", void 0);
W3mConnectAnnouncedWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-announced-widget')
], W3mConnectAnnouncedWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-custom-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectCustomWidget",
    ()=>W3mConnectCustomWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          <wui-list-wallet\n            imageSrc=",
        "\n            name=",
        "\n            @click=",
        "\n            data-testid=",
        "\n            tabIdx=",
        "\n            ?loading=",
        "\n          >\n          </wui-list-wallet>\n        "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-flex flexDirection="column" gap="xs">\n      ',
        "\n    </wui-flex>"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
let W3mConnectCustomWidget = class W3mConnectCustomWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const { customWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        if (!(customWallets === null || customWallets === void 0 ? void 0 : customWallets.length)) {
            this.style.cssText = "display: none";
            return null;
        }
        const wallets = this.filterOutDuplicateWallets(customWallets);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), wallets.map((wallet)=>{
            var _wallet_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(wallet)), (_wallet_name = wallet.name) !== null && _wallet_name !== void 0 ? _wallet_name : 'Unknown', ()=>this.onConnectWallet(wallet), "wallet-selector-".concat(wallet.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx), this.loading);
        }));
    }
    filterOutDuplicateWallets(wallets) {
        const recent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const connectorRDNSs = this.connectors.map((connector)=>{
            var _connector_info;
            return (_connector_info = connector.info) === null || _connector_info === void 0 ? void 0 : _connector_info.rdns;
        }).filter(Boolean);
        const recentRDNSs = recent.map((wallet)=>wallet.rdns).filter(Boolean);
        const allRDNSs = connectorRDNSs.concat(recentRDNSs);
        if (allRDNSs.includes('io.metamask.mobile') && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            const index = allRDNSs.indexOf('io.metamask.mobile');
            allRDNSs[index] = 'io.metamask';
        }
        const filtered = wallets.filter((wallet)=>!allRDNSs.includes(String(wallet === null || wallet === void 0 ? void 0 : wallet.rdns)));
        return filtered;
    }
    onConnectWallet(wallet) {
        if (this.loading) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect', {
            wallet
        });
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.loading = false;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos()) {
            this.loading = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
            this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>this.loading = !val));
        }
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectCustomWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectCustomWidget.prototype, "connectors", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectCustomWidget.prototype, "loading", void 0);
W3mConnectCustomWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-custom-widget')
], W3mConnectCustomWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-external-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectExternalWidget",
    ()=>W3mConnectExternalWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$common$40$1$2e$7$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-common@1.7.8_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-list-wallet\n              imageSrc=",
        "\n              .installed=",
        "\n              name=",
        "\n              data-testid=",
        "\n              @click=",
        "\n              tabIdx=",
        "\n            >\n            </wui-list-wallet>\n          "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
;
let W3mConnectExternalWidget = class W3mConnectExternalWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const externalConnectors = this.connectors.filter((connector)=>connector.type === 'EXTERNAL');
        const filteredOutExcludedConnectors = externalConnectors.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector);
        const filteredOutCoinbaseConnectors = filteredOutExcludedConnectors.filter((connector)=>connector.id !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$common$40$1$2e$7$2e$8_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK);
        if (!(filteredOutCoinbaseConnectors === null || filteredOutCoinbaseConnectors === void 0 ? void 0 : filteredOutCoinbaseConnectors.length)) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), filteredOutCoinbaseConnectors.map((connector)=>{
            var _connector_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector)), true, (_connector_name = connector.name) !== null && _connector_name !== void 0 ? _connector_name : 'Unknown', "wallet-selector-external-".concat(connector.id), ()=>this.onConnector(connector), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
        }));
    }
    onConnector(connector) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingExternal', {
            connector
        });
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val));
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectExternalWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectExternalWidget.prototype, "connectors", void 0);
W3mConnectExternalWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-external-widget')
], W3mConnectExternalWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-featured-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectFeaturedWidget",
    ()=>W3mConnectFeaturedWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-list-wallet\n              data-testid=",
        "\n              imageSrc=",
        "\n              name=",
        "\n              @click=",
        "\n              tabIdx=",
        "\n            >\n            </wui-list-wallet>\n          "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
let W3mConnectFeaturedWidget = class W3mConnectFeaturedWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        if (!this.wallets.length) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), this.wallets.map((wallet)=>{
            var _wallet_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), "wallet-selector-featured-".concat(wallet.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(wallet)), (_wallet_name = wallet.name) !== null && _wallet_name !== void 0 ? _wallet_name : 'Unknown', ()=>this.onConnectWallet(wallet), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
        }));
    }
    onConnectWallet(wallet) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].selectWalletConnector(wallet);
    }
    constructor(){
        super(...arguments);
        this.tabIdx = undefined;
        this.wallets = [];
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectFeaturedWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectFeaturedWidget.prototype, "wallets", void 0);
W3mConnectFeaturedWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-featured-widget')
], W3mConnectFeaturedWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-injected-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectInjectedWidget",
    ()=>W3mConnectInjectedWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-list-wallet\n              imageSrc=",
        "\n              .installed=",
        "\n              name=",
        '\n              tagVariant="success"\n              tagLabel="installed"\n              data-testid=',
        "\n              @click=",
        "\n              tabIdx=",
        "\n            >\n            </wui-list-wallet>\n          "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
let W3mConnectInjectedWidget = class W3mConnectInjectedWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        const injectedConnectors = this.connectors.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].showConnector);
        if (injectedConnectors.length === 0) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), injectedConnectors.map((connector)=>{
            var _connector_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector)), true, (_connector_name = connector.name) !== null && _connector_name !== void 0 ? _connector_name : 'Unknown', "wallet-selector-".concat(connector.id), ()=>this.onConnector(connector), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
        }));
    }
    onConnector(connector) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setActiveConnector(connector);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingExternal', {
            connector
        });
    }
    constructor(){
        super(...arguments);
        this.tabIdx = undefined;
        this.connectors = [];
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectInjectedWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectInjectedWidget.prototype, "connectors", void 0);
W3mConnectInjectedWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-injected-widget')
], W3mConnectInjectedWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-multi-chain-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectMultiChainWidget",
    ()=>W3mConnectMultiChainWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-list-wallet\n              imageSrc=",
        "\n              .installed=",
        "\n              name=",
        '\n              tagVariant="shade"\n              tagLabel="multichain"\n              data-testid=',
        "\n              @click=",
        "\n              tabIdx=",
        "\n            >\n            </wui-list-wallet>\n          "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
let W3mConnectMultiChainWidget = class W3mConnectMultiChainWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const multiChainConnectors = this.connectors.filter((connector)=>connector.type === 'MULTI_CHAIN' && connector.name !== 'WalletConnect');
        if (!(multiChainConnectors === null || multiChainConnectors === void 0 ? void 0 : multiChainConnectors.length)) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), multiChainConnectors.map((connector)=>{
            var _connector_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(connector)), true, (_connector_name = connector.name) !== null && _connector_name !== void 0 ? _connector_name : 'Unknown', "wallet-selector-".concat(connector.id), ()=>this.onConnector(connector), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
        }));
    }
    onConnector(connector) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setActiveConnector(connector);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingMultiChain');
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val));
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectMultiChainWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectMultiChainWidget.prototype, "connectors", void 0);
W3mConnectMultiChainWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-multi-chain-widget')
], W3mConnectMultiChainWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recent-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectRecentWidget",
    ()=>W3mConnectRecentWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-list-wallet\n              imageSrc=",
        "\n              name=",
        "\n              @click=",
        '\n              tagLabel="recent"\n              tagVariant="shade"\n              tabIdx=',
        "\n              ?loading=",
        "\n            >\n            </wui-list-wallet>\n          "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
let W3mConnectRecentWidget = class W3mConnectRecentWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        const recentWallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const filteredRecentWallets = recentWallets.filter((wallet)=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].isExcluded(wallet)).filter((wallet)=>!this.hasWalletConnector(wallet)).filter((wallet)=>this.isWalletCompatibleWithCurrentChain(wallet));
        if (!filteredRecentWallets.length) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), filteredRecentWallets.map((wallet)=>{
            var _wallet_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(wallet)), (_wallet_name = wallet.name) !== null && _wallet_name !== void 0 ? _wallet_name : 'Unknown', ()=>this.onConnectWallet(wallet), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx), this.loading);
        }));
    }
    onConnectWallet(wallet) {
        if (this.loading) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].selectWalletConnector(wallet);
    }
    hasWalletConnector(wallet) {
        return this.connectors.some((connector)=>connector.id === wallet.id || connector.name === wallet.name);
    }
    isWalletCompatibleWithCurrentChain(wallet) {
        const currentNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        if (currentNamespace && wallet.chains) {
            return wallet.chains.some((c)=>{
                const chainNamespace = c.split(':')[0];
                return currentNamespace === chainNamespace;
            });
        }
        return true;
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.loading = false;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos()) {
            this.loading = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
            this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>this.loading = !val));
        }
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectRecentWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectRecentWidget.prototype, "connectors", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectRecentWidget.prototype, "loading", void 0);
W3mConnectRecentWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-recent-widget')
], W3mConnectRecentWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recommended-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectRecommendedWidget",
    ()=>W3mConnectRecommendedWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-list-wallet\n              imageSrc=",
        "\n              name=",
        "\n              @click=",
        "\n              tabIdx=",
        "\n              ?loading=",
        "\n            >\n            </wui-list-wallet>\n          "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
        "\n      </wui-flex>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
let W3mConnectRecommendedWidget = class W3mConnectRecommendedWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
        const { customWallets, featuredWalletIds } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
        const recentWallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
        const wcConnector = connectors.find((c)=>c.id === 'walletConnect');
        const injectedConnectors = connectors.filter((c)=>c.type === 'INJECTED' || c.type === 'ANNOUNCED' || c.type === 'MULTI_CHAIN');
        const injectedWallets = injectedConnectors.filter((i)=>i.name !== 'Browser Wallet');
        if (!wcConnector) {
            return null;
        }
        if (featuredWalletIds || customWallets || !this.wallets.length) {
            this.style.cssText = "display: none";
            return null;
        }
        const overrideLength = injectedWallets.length + recentWallets.length;
        const maxRecommended = Math.max(0, 2 - overrideLength);
        const wallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].filterOutDuplicateWallets(this.wallets).slice(0, maxRecommended);
        if (!wallets.length) {
            this.style.cssText = "display: none";
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), wallets.map((wallet)=>{
            var _wallet_name;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(wallet)), (_wallet_name = wallet === null || wallet === void 0 ? void 0 : wallet.name) !== null && _wallet_name !== void 0 ? _wallet_name : 'Unknown', ()=>this.onConnectWallet(wallet), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx), this.loading);
        }));
    }
    onConnectWallet(wallet) {
        if (this.loading) {
            return;
        }
        const connector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnector(wallet.id, wallet.rdns);
        if (connector) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingExternal', {
                connector
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect', {
                wallet
            });
        }
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.wallets = [];
        this.loading = false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos()) {
            this.loading = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
            this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>this.loading = !val));
        }
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectRecommendedWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectRecommendedWidget.prototype, "wallets", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectRecommendedWidget.prototype, "loading", void 0);
W3mConnectRecommendedWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-recommended-widget')
], W3mConnectRecommendedWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-walletconnect-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectWalletConnectWidget",
    ()=>W3mConnectWalletConnectWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/AssetController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      <wui-list-wallet\n        imageSrc=",
        "\n        name=",
        "\n        @click=",
        '\n        tagLabel="qr code"\n        tagVariant="main"\n        tabIdx=',
        '\n        data-testid="wallet-selector-walletconnect"\n      >\n      </wui-list-wallet>\n    '
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
let W3mConnectWalletConnectWidget = class W3mConnectWalletConnectWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            this.style.cssText = "display: none";
            return null;
        }
        const connector = this.connectors.find((c)=>c.id === 'walletConnect');
        if (!connector) {
            this.style.cssText = "display: none";
            return null;
        }
        var _connector_imageId;
        const connectorImage = connector.imageUrl || this.connectorImages[(_connector_imageId = connector === null || connector === void 0 ? void 0 : connector.imageId) !== null && _connector_imageId !== void 0 ? _connector_imageId : ''];
        var _connector_name;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(connectorImage), (_connector_name = connector.name) !== null && _connector_name !== void 0 ? _connector_name : 'Unknown', ()=>this.onConnector(connector), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
    }
    onConnector(connector) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].setActiveConnector(connector);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect');
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.connectorImages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].state.connectorImages;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$AssetController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetController"].subscribeKey('connectorImages', (val)=>this.connectorImages = val));
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectWalletConnectWidget.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectWalletConnectWidget.prototype, "connectors", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectWalletConnectWidget.prototype, "connectorImages", void 0);
W3mConnectWalletConnectWidget = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connect-walletconnect-widget')
], W3mConnectWalletConnectWidget);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  :host {\n    margin-top: var(--wui-spacing-3xs);\n  }\n  wui-separator {\n    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)\n      calc(var(--wui-spacing-m) * -1);\n    width: calc(100% + var(--wui-spacing-s) * 2);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectorList",
    ()=>W3mConnectorList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$announced$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-announced-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$custom$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-custom-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$external$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-external-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$featured$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-featured-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$injected$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-injected-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$multi$2d$chain$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-multi-chain-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$recent$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recent-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$recommended$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recommended-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connect$2d$walletconnect$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-walletconnect-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connector$2d$list$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex flexDirection="column" gap="xs"> ',
        " </wui-flex>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-multi-chain-widget\n                  tabIdx=",
        "\n                ></w3m-connect-multi-chain-widget>"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-announced-widget\n                  tabIdx=",
        "\n                ></w3m-connect-announced-widget>"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-injected-widget\n                  .connectors=",
        "\n                  tabIdx=",
        "\n                ></w3m-connect-injected-widget>"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            ",
        "\n            ",
        "\n            ",
        "\n          "
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-walletconnect-widget\n            tabIdx=",
        "\n          ></w3m-connect-walletconnect-widget>"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-recent-widget\n            tabIdx=",
        "\n          ></w3m-connect-recent-widget>"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-featured-widget\n            .wallets=",
        "\n            tabIdx=",
        "\n          ></w3m-connect-featured-widget>"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-custom-widget\n            tabIdx=",
        "\n          ></w3m-connect-custom-widget>"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-external-widget\n            tabIdx=",
        "\n          ></w3m-connect-external-widget>"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connect-recommended-widget\n            .wallets=",
        "\n            tabIdx=",
        "\n          ></w3m-connect-recommended-widget>"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let W3mConnectorList = class W3mConnectorList extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), this.connectorListTemplate());
    }
    connectorListTemplate() {
        const { custom, recent, announced, injected, multiChain, recommended, featured, external } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].getConnectorsByType(this.connectors, this.recommended, this.featured);
        const connectorTypeOrder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorUtil"].getConnectorTypeOrder({
            custom,
            recent,
            announced,
            injected,
            multiChain,
            recommended,
            featured,
            external
        });
        return connectorTypeOrder.map((type)=>{
            switch(type){
                case 'injected':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject4(), multiChain.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx)) : null, announced.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx)) : null, injected.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3(), injected, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx)) : null);
                case 'walletConnect':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject5(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
                case 'recent':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject6(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
                case 'featured':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject7(), featured, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
                case 'custom':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject8(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
                case 'external':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject9(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
                case 'recommended':
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject10(), recommended, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.tabIdx));
                default:
                    console.warn("Unknown connector type: ".concat(type));
                    return null;
            }
        });
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.tabIdx = undefined;
        this.connectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state.connectors;
        this.recommended = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.recommended;
        this.featured = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.featured;
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].subscribeKey('connectors', (val)=>this.connectors = val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('recommended', (val)=>this.recommended = val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('featured', (val)=>this.featured = val));
    }
};
W3mConnectorList.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connector$2d$list$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectorList.prototype, "tabIdx", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectorList.prototype, "connectors", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectorList.prototype, "recommended", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectorList.prototype, "featured", void 0);
W3mConnectorList = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connector-list')
], W3mConnectorList);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingHeader",
    ()=>W3mConnectingHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-tabs.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex justifyContent="center" .padding=',
        ">\n        <wui-tabs .tabs=",
        " .onTabChange=",
        "></wui-tabs>\n      </wui-flex>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
let W3mConnectingHeader = class W3mConnectingHeader extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        const tabs = this.generateTabs();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), [
            '0',
            '0',
            'l',
            '0'
        ], tabs, this.onTabChange.bind(this));
    }
    generateTabs() {
        const tabs = this.platforms.map((platform)=>{
            if (platform === 'browser') {
                return {
                    label: 'Browser',
                    icon: 'extension',
                    platform: 'browser'
                };
            } else if (platform === 'mobile') {
                return {
                    label: 'Mobile',
                    icon: 'mobile',
                    platform: 'mobile'
                };
            } else if (platform === 'qrcode') {
                return {
                    label: 'Mobile',
                    icon: 'mobile',
                    platform: 'qrcode'
                };
            } else if (platform === 'web') {
                return {
                    label: 'Webapp',
                    icon: 'browser',
                    platform: 'web'
                };
            } else if (platform === 'desktop') {
                return {
                    label: 'Desktop',
                    icon: 'desktop',
                    platform: 'desktop'
                };
            }
            return {
                label: 'Browser',
                icon: 'extension',
                platform: 'unsupported'
            };
        });
        this.platformTabs = tabs.map((param)=>{
            let { platform } = param;
            return platform;
        });
        return tabs;
    }
    onTabChange(index) {
        const tab = this.platformTabs[index];
        if (tab) {
            var _this_onSelectPlatfrom, _this;
            (_this_onSelectPlatfrom = (_this = this).onSelectPlatfrom) === null || _this_onSelectPlatfrom === void 0 ? void 0 : _this_onSelectPlatfrom.call(_this, tab);
        }
    }
    constructor(){
        super(...arguments);
        this.platformTabs = [];
        this.unsubscribe = [];
        this.platforms = [];
        this.onSelectPlatfrom = undefined;
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Array
    })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
W3mConnectingHeader = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-header')
], W3mConnectingHeader);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  :host {\n    display: block;\n    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mMobileDownloadLinks",
    ()=>W3mMobileDownloadLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/UiHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$cta$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-cta-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        <wui-cta-button\n          label=",
        '\n          buttonLabel="Get"\n          @click=',
        "\n        ></wui-cta-button>\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        <wui-cta-button\n          label=",
        '\n          buttonLabel="Get"\n          @click=',
        "\n        ></wui-cta-button>\n      "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        <wui-cta-button\n          label=",
        '\n          buttonLabel="Get"\n          @click=',
        "\n        ></wui-cta-button>\n      "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        <wui-cta-button\n          label=",
        '\n          buttonLabel="Get"\n          @click=',
        "\n        ></wui-cta-button>\n      "
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
let W3mMobileDownloadLinks = class W3mMobileDownloadLinks extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        if (!this.wallet) {
            this.style.display = 'none';
            return null;
        }
        const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
        const isMobile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile();
        const isIos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos();
        const isAndroid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isAndroid();
        const isMultiple = [
            app_store,
            play_store,
            homepage,
            chrome_store
        ].filter(Boolean).length > 1;
        const shortName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$UiHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UiHelperUtil"].getTruncateString({
            string: name,
            charsStart: 12,
            charsEnd: 0,
            truncate: 'end'
        });
        if (isMultiple && !isMobile) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), "Don't have ".concat(shortName, "?"), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('Downloads', {
                    wallet: this.wallet
                }));
        }
        if (!isMultiple && homepage) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), "Don't have ".concat(shortName, "?"), this.onHomePage.bind(this));
        }
        if (app_store && isIos) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), "Don't have ".concat(shortName, "?"), this.onAppStore.bind(this));
        }
        if (play_store && isAndroid) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3(), "Don't have ".concat(shortName, "?"), this.onPlayStore.bind(this));
        }
        this.style.display = 'none';
        return null;
    }
    onAppStore() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.app_store) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.app_store, '_blank');
        }
    }
    onPlayStore() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.play_store) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.play_store, '_blank');
        }
    }
    onHomePage() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.homepage) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.homepage, '_blank');
        }
    }
    constructor(){
        super(...arguments);
        this.wallet = undefined;
    }
};
W3mMobileDownloadLinks.styles = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Object
    })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-mobile-download-links')
], W3mMobileDownloadLinks);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  @keyframes shake {\n    0% {\n      transform: translateX(0);\n    }\n    25% {\n      transform: translateX(3px);\n    }\n    50% {\n      transform: translateX(-3px);\n    }\n    75% {\n      transform: translateX(3px);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n\n  wui-flex:first-child:not(:only-child) {\n    position: relative;\n  }\n\n  wui-loading-thumbnail {\n    position: absolute;\n  }\n\n  wui-icon-box {\n    position: absolute;\n    right: calc(var(--wui-spacing-3xs) * -1);\n    bottom: calc(var(--wui-spacing-3xs) * -1);\n    opacity: 0;\n    transform: scale(0.5);\n    transition-property: opacity, transform;\n    transition-duration: var(--wui-duration-lg);\n    transition-timing-function: var(--wui-ease-out-power-2);\n    will-change: opacity, transform;\n  }\n\n  wui-text[align='center'] {\n    width: 100%;\n    padding: 0px var(--wui-spacing-l);\n  }\n\n  [data-error='true'] wui-icon-box {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  [data-error='true'] > wui-flex:first-child {\n    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  }\n\n  [data-retry='false'] wui-link {\n    display: none;\n  }\n\n  [data-retry='true'] wui-link {\n    display: block;\n    opacity: 1;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWidget",
    ()=>W3mConnectingWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$loading$2d$thumbnail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$wallet$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n              <wui-button\n                variant="accent"\n                size="md"\n                ?disabled=',
        "\n                @click=",
        '\n                data-testid="w3m-connecting-widget-secondary-button"\n              >\n                <wui-icon color="inherit" slot="iconLeft" name=',
        "></wui-icon>\n                ",
        "\n              </wui-button>\n            "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <wui-flex .padding=",
        ' justifyContent="center">\n              <wui-link @click=',
        ' color="fg-200" data-testid="wui-link-copy">\n                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>\n                Copy link\n              </wui-link>\n            </wui-flex>\n          '
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      <wui-flex\n        data-error=",
        "\n        data-retry=",
        '\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
        '\n        gap="xl"\n      >\n        <wui-flex justifyContent="center" alignItems="center">\n          <wui-wallet-image size="lg" imageSrc=',
        "></wui-wallet-image>\n\n          ",
        '\n\n          <wui-icon-box\n            backgroundColor="error-100"\n            background="opaque"\n            iconColor="error-100"\n            icon="close"\n            size="sm"\n            border\n            borderColor="wui-color-bg-125"\n          ></wui-icon-box>\n        </wui-flex>\n\n        <wui-flex flexDirection="column" alignItems="center" gap="xs">\n          <wui-text variant="paragraph-500" color=',
        ">\n            ",
        '\n          </wui-text>\n          <wui-text align="center" variant="small-500" color="fg-200">',
        "</wui-text>\n        </wui-flex>\n\n        ",
        "\n      </wui-flex>\n\n      ",
        "\n\n      <w3m-mobile-download-links .wallet=",
        "></w3m-mobile-download-links>\n    "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<wui-loading-thumbnail radius=",
        "></wui-loading-thumbnail>"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
class W3mConnectingWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    firstUpdated() {
        var _this_onAutoConnect, _this;
        (_this_onAutoConnect = (_this = this).onAutoConnect) === null || _this_onAutoConnect === void 0 ? void 0 : _this_onAutoConnect.call(_this);
        this.showRetry = !this.onAutoConnect;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        clearTimeout(this.timeout);
    }
    render() {
        var _this_onRender, _this;
        (_this_onRender = (_this = this).onRender) === null || _this_onRender === void 0 ? void 0 : _this_onRender.call(_this);
        this.onShowRetry();
        const subLabel = this.error ? 'Connection can be declined if a previous request is still active' : this.secondaryLabel;
        let label = "Continue in ".concat(this.name);
        if (this.error) {
            label = 'Connection declined';
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.error), this.showRetry, [
            '3xl',
            'xl',
            'xl',
            'xl'
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.imageSrc), this.error ? null : this.loaderTemplate(), this.error ? 'error-100' : 'fg-100', label, subLabel, this.secondaryBtnLabel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), this.isRetrying || this.isLoading, this.onTryAgain.bind(this), this.secondaryBtnIcon, this.secondaryBtnLabel) : null, this.isWalletConnect ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), [
            '0',
            'xl',
            'xl',
            'xl'
        ], this.onCopyUri) : null, this.wallet);
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            var _this_shadowRoot;
            this.showRetry = true;
            const retryButton = (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector('wui-button');
            retryButton === null || retryButton === void 0 ? void 0 : retryButton.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onTryAgain() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        if (this.onRetry) {
            var _this_onRetry, _this;
            this.isRetrying = true;
            (_this_onRetry = (_this = this).onRetry) === null || _this_onRetry === void 0 ? void 0 : _this_onRetry.call(_this);
        } else {
            var _this_onConnect, _this1;
            (_this_onConnect = (_this1 = this).onConnect) === null || _this_onConnect === void 0 ? void 0 : _this_onConnect.call(_this1);
        }
    }
    loaderTemplate() {
        const borderRadiusMaster = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3(), radius * 9);
    }
    onCopyUri() {
        try {
            if (this.uri) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].copyToClopboard(this.uri);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Link copied');
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to copy');
        }
    }
    constructor(){
        var _RouterController_state_data, _RouterController_state_data1, _this_wallet, _this_connector;
        super();
        this.wallet = (_RouterController_state_data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data) === null || _RouterController_state_data === void 0 ? void 0 : _RouterController_state_data.wallet;
        this.connector = (_RouterController_state_data1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data) === null || _RouterController_state_data1 === void 0 ? void 0 : _RouterController_state_data1.connector;
        this.timeout = undefined;
        this.secondaryBtnIcon = 'refresh';
        this.onConnect = undefined;
        this.onRender = undefined;
        this.onAutoConnect = undefined;
        this.isWalletConnect = true;
        this.unsubscribe = [];
        var _AssetUtil_getWalletImage;
        this.imageSrc = (_AssetUtil_getWalletImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet)) !== null && _AssetUtil_getWalletImage !== void 0 ? _AssetUtil_getWalletImage : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(this.connector);
        var _this_wallet_name, _ref;
        this.name = (_ref = (_this_wallet_name = (_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.name) !== null && _this_wallet_name !== void 0 ? _this_wallet_name : (_this_connector = this.connector) === null || _this_connector === void 0 ? void 0 : _this_connector.name) !== null && _ref !== void 0 ? _ref : 'Wallet';
        this.isRetrying = false;
        this.uri = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
        this.error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcError;
        this.ready = false;
        this.showRetry = false;
        this.secondaryBtnLabel = 'Try again';
        this.secondaryLabel = 'Accept connection request in the wallet';
        this.isLoading = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>{
                this.uri = val;
                if (this.isRetrying && this.onRetry) {
                    var _this_onConnect, _this;
                    this.isRetrying = false;
                    (_this_onConnect = (_this = this).onConnect) === null || _this_onConnect === void 0 ? void 0 : _this_onConnect.call(_this);
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcError', (val)=>this.error = val)
        ]);
        if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafari()) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri) {
            var _this_onConnect, _this;
            (_this_onConnect = (_this = this).onConnect) === null || _this_onConnect === void 0 ? void 0 : _this_onConnect.call(_this);
        }
    }
}
W3mConnectingWidget.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "isLoading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])({
        type: Boolean
    })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectingWidget.prototype, "onRetry", void 0); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcBrowser",
    ()=>W3mConnectingWcBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
let W3mConnectingWcBrowser = class W3mConnectingWcBrowser extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWidget"] {
    async onConnectProxy() {
        try {
            var _this_wallet;
            this.error = false;
            const { connectors } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].state;
            const connector = connectors.find((c)=>{
                var _c_info, _this_wallet, _this_wallet1;
                return c.type === 'ANNOUNCED' && ((_c_info = c.info) === null || _c_info === void 0 ? void 0 : _c_info.rdns) === ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.rdns) || c.type === 'INJECTED' || c.name === ((_this_wallet1 = this.wallet) === null || _this_wallet1 === void 0 ? void 0 : _this_wallet1.name);
            });
            if (connector) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].connectExternal(connector, connector.chain);
            } else {
                throw new Error('w3m-connecting-wc-browser: No connector found');
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'CONNECT_SUCCESS',
                properties: {
                    method: 'browser',
                    name: ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.name) || 'Unknown'
                }
            });
        } catch (error) {
            var _error_message;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'CONNECT_ERROR',
                properties: {
                    message: (_error_message = error === null || error === void 0 ? void 0 : error.message) !== null && _error_message !== void 0 ? _error_message : 'Unknown'
                }
            });
            this.error = true;
        }
    }
    constructor(){
        super();
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-browser: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.onAutoConnect = this.onConnectProxy.bind(this);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'browser'
            }
        });
    }
};
W3mConnectingWcBrowser = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-browser')
], W3mConnectingWcBrowser);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcDesktop",
    ()=>W3mConnectingWcDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
let W3mConnectingWcDesktop = class W3mConnectingWcDesktop extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWidget"] {
    onRenderProxy() {
        if (!this.ready && this.uri) {
            var _this_onConnect, _this;
            this.ready = true;
            (_this_onConnect = (_this = this).onConnect) === null || _this_onConnect === void 0 ? void 0 : _this_onConnect.call(_this);
        }
    }
    onConnectProxy() {
        var _this_wallet;
        if (((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.desktop_link) && this.uri) {
            try {
                this.error = false;
                const { desktop_link, name } = this.wallet;
                const { redirect, href } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].formatNativeUrl(desktop_link, this.uri);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcLinking({
                    name,
                    href
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setRecentWallet(this.wallet);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(redirect, '_blank');
            } catch (e) {
                this.error = true;
            }
        }
    }
    constructor(){
        super();
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-desktop: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.onRender = this.onRenderProxy.bind(this);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'desktop'
            }
        });
    }
};
W3mConnectingWcDesktop = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-desktop')
], W3mConnectingWcDesktop);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcMobile",
    ()=>W3mConnectingWcMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
let W3mConnectingWcMobile = class W3mConnectingWcMobile extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWidget"] {
    disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(this.btnLabelTimeout);
    }
    onHandleURI() {
        this.isLoading = !this.uri;
        if (!this.ready && this.uri) {
            var _this_onConnect, _this;
            this.ready = true;
            (_this_onConnect = (_this = this).onConnect) === null || _this_onConnect === void 0 ? void 0 : _this_onConnect.call(_this);
        }
    }
    onTryAgain() {
        var _this_onConnect, _this;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        (_this_onConnect = (_this = this).onConnect) === null || _this_onConnect === void 0 ? void 0 : _this_onConnect.call(_this);
    }
    constructor(){
        super();
        this.btnLabelTimeout = undefined;
        this.redirectDeeplink = undefined;
        this.redirectUniversalLink = undefined;
        this.target = undefined;
        this.preferUniversalLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.experimental_preferUniversalLinks;
        this.isLoading = true;
        this.onConnect = ()=>{
            var _this_wallet;
            if (((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.mobile_link) && this.uri) {
                try {
                    this.error = false;
                    const { mobile_link, link_mode, name } = this.wallet;
                    const { redirect, redirectUniversalLink, href } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].formatNativeUrl(mobile_link, this.uri, link_mode);
                    this.redirectDeeplink = redirect;
                    this.redirectUniversalLink = redirectUniversalLink;
                    this.target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIframe() ? '_top' : '_self';
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcLinking({
                        name,
                        href
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setRecentWallet(this.wallet);
                    if (this.preferUniversalLinks && this.redirectUniversalLink) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.redirectUniversalLink, this.target);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.redirectDeeplink, this.target);
                    }
                } catch (e) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                        type: 'track',
                        event: 'CONNECT_PROXY_ERROR',
                        properties: {
                            message: e instanceof Error ? e.message : 'Error parsing the deeplink',
                            uri: this.uri,
                            mobile_link: this.wallet.mobile_link,
                            name: this.wallet.name
                        }
                    });
                    this.error = true;
                }
            }
        };
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-mobile: No wallet provided');
        }
        this.secondaryBtnLabel = 'Open';
        this.secondaryLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECT_LABELS.MOBILE;
        this.secondaryBtnIcon = 'externalLink';
        this.onHandleURI();
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', ()=>{
            this.onHandleURI();
        }));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'mobile'
            }
        });
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcMobile.prototype, "redirectDeeplink", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcMobile.prototype, "redirectUniversalLink", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcMobile.prototype, "target", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcMobile.prototype, "preferUniversalLinks", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcMobile.prototype, "isLoading", void 0);
W3mConnectingWcMobile = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-mobile')
], W3mConnectingWcMobile);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  wui-shimmer {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;\n  }\n\n  wui-qr-code {\n    opacity: 0;\n    animation-duration: 200ms;\n    animation-timing-function: ease;\n    animation-name: fadein;\n    animation-fill-mode: forwards;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcQrcode",
    ()=>W3mConnectingWcQrcode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$qr$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$shimmer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$ux$2d$by$2d$reown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$qrcode$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
        '\n        gap="xl"\n      >\n        <wui-shimmer borderRadius="l" width="100%"> ',
        ' </wui-shimmer>\n\n        <wui-text variant="paragraph-500" color="fg-100">\n          Scan this QR Code with your phone\n        </wui-text>\n        ',
        "\n      </wui-flex>\n      <w3m-mobile-download-links .wallet=",
        "></w3m-mobile-download-links>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        " <wui-qr-code\n      size=",
        "\n      theme=",
        "\n      uri=",
        "\n      imageSrc=",
        "\n      color=",
        "\n      alt=",
        '\n      data-testid="wui-qr-code"\n    ></wui-qr-code>'
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<wui-link\n      .disabled=",
        "\n      @click=",
        '\n      color="fg-200"\n      data-testid="copy-wc2-uri"\n    >\n      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>\n      Copy link\n    </wui-link>'
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let W3mConnectingWcQrcode = class W3mConnectingWcQrcode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWidget"] {
    disconnectedCallback() {
        var _this_unsubscribe;
        super.disconnectedCallback();
        (_this_unsubscribe = this.unsubscribe) === null || _this_unsubscribe === void 0 ? void 0 : _this_unsubscribe.forEach((unsub)=>unsub());
        window.removeEventListener('resize', this.forceUpdate);
    }
    render() {
        this.onRenderProxy();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), [
            '0',
            'xl',
            'xl',
            'xl'
        ], this.qrCodeTemplate(), this.copyTemplate(), this.wallet);
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.timeout = setTimeout(()=>{
                this.ready = true;
            }, 200);
        }
    }
    qrCodeTemplate() {
        if (!this.uri || !this.ready) {
            return null;
        }
        const size = this.getBoundingClientRect().width - 40;
        const alt = this.wallet ? this.wallet.name : undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcLinking(undefined);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setRecentWallet(this.wallet);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), size, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeMode, this.uri, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables['--w3m-qr-color']), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(alt));
    }
    copyTemplate() {
        const inactive = !this.uri || !this.ready;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), inactive, this.onCopyUri);
    }
    constructor(){
        var _this_wallet;
        super();
        this.forceUpdate = ()=>{
            this.requestUpdate();
        };
        window.addEventListener('resize', this.forceUpdate);
        var _this_wallet_name;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: (_this_wallet_name = (_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.name) !== null && _this_wallet_name !== void 0 ? _this_wallet_name : 'WalletConnect',
                platform: 'qrcode'
            }
        });
    }
};
W3mConnectingWcQrcode.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$qrcode$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
W3mConnectingWcQrcode = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-qrcode')
], W3mConnectingWcQrcode);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcUnsupported",
    ()=>W3mConnectingWcUnsupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$wallet$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
        '\n        gap="xl"\n      >\n        <wui-wallet-image\n          size="lg"\n          imageSrc=',
        '\n        ></wui-wallet-image>\n\n        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>\n      </wui-flex>\n\n      <w3m-mobile-download-links .wallet=',
        "></w3m-mobile-download-links>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
let W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), [
            '3xl',
            'xl',
            'xl',
            'xl'
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet)), this.wallet);
    }
    constructor(){
        var _RouterController_state_data;
        super();
        this.wallet = (_RouterController_state_data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data) === null || _RouterController_state_data === void 0 ? void 0 : _RouterController_state_data.wallet;
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-unsupported: No wallet provided');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'browser'
            }
        });
    }
};
W3mConnectingWcUnsupported = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-unsupported')
], W3mConnectingWcUnsupported);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcWeb",
    ()=>W3mConnectingWcWeb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
let W3mConnectingWcWeb = class W3mConnectingWcWeb extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWidget"] {
    updateLoadingState() {
        this.isLoading = !this.uri;
    }
    onConnectProxy() {
        var _this_wallet;
        if (((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.webapp_link) && this.uri) {
            try {
                this.error = false;
                const { webapp_link, name } = this.wallet;
                const { redirect, href } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].formatUniversalUrl(webapp_link, this.uri);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcLinking({
                    name,
                    href
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setRecentWallet(this.wallet);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(redirect, '_blank');
            } catch (e) {
                this.error = true;
            }
        }
    }
    constructor(){
        super();
        this.isLoading = true;
        if (!this.wallet) {
            throw new Error('w3m-connecting-wc-web: No wallet provided');
        }
        this.onConnect = this.onConnectProxy.bind(this);
        this.secondaryBtnLabel = 'Open';
        this.secondaryLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECT_LABELS.MOBILE;
        this.secondaryBtnIcon = 'externalLink';
        this.updateLoadingState();
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', ()=>{
            this.updateLoadingState();
        }));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: {
                name: this.wallet.name,
                platform: 'web'
            }
        });
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcWeb.prototype, "isLoading", void 0);
W3mConnectingWcWeb = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-web')
], W3mConnectingWcWeb);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcView",
    ()=>W3mConnectingWcView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/EventsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ModalController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$header$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$desktop$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$mobile$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$qrcode$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$unsupported$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connecting$2d$wc$2d$web$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      ",
        "\n      <div>",
        "</div>\n      ",
        "\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<wui-ux-by-reown></wui-ux-by-reown>"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connecting-wc-browser></w3m-connecting-wc-browser>"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connecting-wc-web></w3m-connecting-wc-web>"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          <w3m-connecting-wc-desktop .onRetry=",
        ">\n          </w3m-connecting-wc-desktop>\n        "
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n          <w3m-connecting-wc-mobile isMobile .onRetry=",
        ">\n          </w3m-connecting-wc-mobile>\n        "
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      <w3m-connecting-header\n        .platforms=",
        "\n        .onSelectPlatfrom=",
        "\n      >\n      </w3m-connecting-header>\n    "
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let W3mConnectingWcView = class W3mConnectingWcView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
    }
    render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), this.headerTemplate(), this.platformTemplate(), this.reownBrandingTemplate());
    }
    reownBrandingTemplate() {
        var _this_remoteFeatures;
        if (!((_this_remoteFeatures = this.remoteFeatures) === null || _this_remoteFeatures === void 0 ? void 0 : _this_remoteFeatures.reownBranding)) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1());
    }
    async initializeConnection() {
        let retry = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (this.platform === 'browser' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.manualWCControl && !retry) {
            return;
        }
        try {
            const { wcPairingExpiry, status } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].state;
            if (retry || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.enableEmbedded || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isPairingExpired(wcPairingExpiry) || status === 'connecting') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].connectWalletConnect();
                if (!this.isSiwxEnabled) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ModalController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalController"].close();
                }
            }
        } catch (error) {
            var _error_message;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$EventsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsController"].sendEvent({
                type: 'track',
                event: 'CONNECT_ERROR',
                properties: {
                    message: (_error_message = error === null || error === void 0 ? void 0 : error.message) !== null && _error_message !== void 0 ? _error_message : 'Unknown'
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(true);
            var _error_message1;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showError((_error_message1 = error.message) !== null && _error_message1 !== void 0 ? _error_message1 : 'Connection error');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].resetWcConnection();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].goBack();
        }
    }
    determinePlatforms() {
        if (!this.wallet) {
            this.platforms.push('qrcode');
            this.platform = 'qrcode';
            return;
        }
        if (this.platform) {
            return;
        }
        const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
        const injectedIds = injected === null || injected === void 0 ? void 0 : injected.map((param)=>{
            let { injected_id } = param;
            return injected_id;
        }).filter(Boolean);
        const browserIds = [
            ...rdns ? [
                rdns
            ] : injectedIds !== null && injectedIds !== void 0 ? injectedIds : []
        ];
        const isBrowser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.isUniversalProvider ? false : browserIds.length;
        const hasMobileWCLink = mobile_link;
        const isWebWc = webapp_link;
        const isBrowserInstalled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionController"].checkInstalled(browserIds);
        const isBrowserWc = isBrowser && isBrowserInstalled;
        const isDesktopWc = desktop_link && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile();
        if (isBrowserWc && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters) {
            this.platforms.push('browser');
        }
        if (hasMobileWCLink) {
            this.platforms.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile() ? 'mobile' : 'qrcode');
        }
        if (isWebWc) {
            this.platforms.push('web');
        }
        if (isDesktopWc) {
            this.platforms.push('desktop');
        }
        if (!isBrowserWc && isBrowser && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.noAdapters) {
            this.platforms.push('unsupported');
        }
        this.platform = this.platforms[0];
    }
    platformTemplate() {
        switch(this.platform){
            case 'browser':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2());
            case 'web':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3());
            case 'desktop':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject4(), ()=>this.initializeConnection(true));
            case 'mobile':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject5(), ()=>this.initializeConnection(true));
            case 'qrcode':
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject6());
            default:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject7());
        }
    }
    headerTemplate() {
        const multiPlatform = this.platforms.length > 1;
        if (!multiPlatform) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject8(), this.platforms, this.onSelectPlatform.bind(this));
    }
    async onSelectPlatform(platform) {
        var _this_shadowRoot;
        const container = (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector('div');
        if (container) {
            await container.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.platform = platform;
            container.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    constructor(){
        var _RouterController_state_data;
        super();
        this.wallet = (_RouterController_state_data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data) === null || _RouterController_state_data === void 0 ? void 0 : _RouterController_state_data.wallet;
        this.unsubscribe = [];
        this.platform = undefined;
        this.platforms = [];
        this.isSiwxEnabled = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.siwx);
        this.remoteFeatures = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures;
        this.determinePlatforms();
        this.initializeConnection();
        this.unsubscribe.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].subscribeKey('remoteFeatures', (val)=>this.remoteFeatures = val));
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "platforms", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
W3mConnectingWcView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-view')
], W3mConnectingWcView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mConnectingWcBasicView",
    ()=>W3mConnectingWcBasicView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$widget$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$connector$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-connector-list></w3m-connector-list>"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-flex\n        flexDirection="column"\n        gap="xs"\n        .margin=',
        "\n      >\n        ",
        "\n        <w3m-all-wallets-widget></w3m-all-wallets-widget>\n      </wui-flex>"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-flex flexDirection="column" .padding=',
        '>\n      <w3m-connecting-wc-view></w3m-connecting-wc-view>\n      <wui-flex flexDirection="column" .padding=',
        ">\n        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex\n    ></wui-flex>"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
let W3mConnectingWcBasicView = class W3mConnectingWcBasicView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        if (this.isMobile) {
            const { featured, recommended } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state;
            const { customWallets } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state;
            const recent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getRecentWallets();
            const showConnectors = featured.length || recommended.length || (customWallets === null || customWallets === void 0 ? void 0 : customWallets.length) || recent.length;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), [
                '3xs',
                's',
                's',
                's'
            ], showConnectors ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject()) : null);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), [
            '0',
            '0',
            'l',
            '0'
        ], [
            '0',
            'm',
            '0',
            'm'
        ]);
    }
    constructor(){
        super(...arguments);
        this.isMobile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile();
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
W3mConnectingWcBasicView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-connecting-wc-basic-view')
], W3mConnectingWcBasicView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  button {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: 104px;\n    row-gap: var(--wui-spacing-xs);\n    padding: var(--wui-spacing-s) var(--wui-spacing-0);\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);\n    transition:\n      color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: background-color, color, border-radius;\n    outline: none;\n    border: none;\n  }\n\n  button > wui-flex > wui-text {\n    color: var(--wui-color-fg-100);\n    max-width: 86px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    justify-content: center;\n  }\n\n  button > wui-flex > wui-text.certified {\n    max-width: 66px;\n  }\n\n  button:hover:enabled {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  button:disabled > wui-flex > wui-text {\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  [data-selected='true'] {\n    background-color: var(--wui-color-accent-glass-020);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    [data-selected='true']:hover:enabled {\n      background-color: var(--wui-color-accent-glass-015);\n    }\n  }\n\n  [data-selected='true']:active:enabled {\n    background-color: var(--wui-color-accent-glass-010);\n  }\n\n  @media (max-width: 350px) {\n    button {\n      width: 100%;\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsListItem",
    ()=>W3mAllWalletsListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$shimmer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$wallet$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2d$item$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-icon size="sm" name="walletConnectBrown"></wui-icon>'
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      <button>\n        ",
        '\n        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">\n          <wui-text\n            variant="tiny-500"\n            color="inherit"\n            class=',
        "\n            >",
        "</wui-text\n          >\n          ",
        "\n        </wui-flex>\n      </button>\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-wallet-image\n        size="md"\n        imageSrc=',
        "\n        name=",
        "\n        .installed=",
        '\n        badgeSize="sm"\n      >\n      </wui-wallet-image>\n    '
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>'
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let W3mAllWalletsListItem = class W3mAllWalletsListItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    firstUpdated() {
        this.observer.observe(this);
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    render() {
        var _this_wallet, _this_wallet1;
        const certified = ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.badge_type) === 'certified';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), this.imageTemplate(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(certified ? 'certified' : undefined), (_this_wallet1 = this.wallet) === null || _this_wallet1 === void 0 ? void 0 : _this_wallet1.name, certified ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject()) : null);
    }
    imageTemplate() {
        var _this_wallet, _this_wallet1;
        if (!this.visible && !this.imageSrc || this.imageLoading) {
            return this.shimmerTemplate();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.imageSrc), (_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.name, (_this_wallet1 = this.wallet) === null || _this_wallet1 === void 0 ? void 0 : _this_wallet1.installed);
    }
    shimmerTemplate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3());
    }
    async fetchImageSrc() {
        if (!this.wallet) {
            return;
        }
        this.imageSrc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet);
        if (this.imageSrc) {
            return;
        }
        this.imageLoading = true;
        this.imageSrc = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetUtil"].fetchWalletImage(this.wallet.image_id);
        this.imageLoading = false;
    }
    constructor(){
        super();
        this.observer = new IntersectionObserver(()=>undefined);
        this.visible = false;
        this.imageSrc = undefined;
        this.imageLoading = false;
        this.wallet = undefined;
        this.observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    this.visible = true;
                    this.fetchImageSrc();
                } else {
                    this.visible = false;
                }
            });
        }, {
            threshold: 0.01
        });
    }
};
W3mAllWalletsListItem.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2d$item$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsListItem.prototype, "visible", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mAllWalletsListItem.prototype, "wallet", void 0);
W3mAllWalletsListItem = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-all-wallets-list-item')
], W3mAllWalletsListItem);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  wui-grid {\n    max-height: clamp(360px, 400px, 80vh);\n    overflow: scroll;\n    scrollbar-width: none;\n    grid-auto-rows: min-content;\n    grid-template-columns: repeat(auto-fill, 104px);\n  }\n\n  @media (max-width: 350px) {\n    wui-grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  wui-grid[data-scroll='false'] {\n    overflow: hidden;\n  }\n\n  wui-grid::-webkit-scrollbar {\n    display: none;\n  }\n\n  wui-loading-spinner {\n    padding-top: var(--wui-spacing-l);\n    padding-bottom: var(--wui-spacing-l);\n    justify-content: center;\n    grid-column: 1 / span 4;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsList",
    ()=>W3mAllWalletsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$card$2d$select$2d$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-card-select-loader.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-grid.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2d$item$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      <wui-grid\n        data-scroll=",
        "\n        .padding=",
        '\n        columnGap="xxs"\n        rowGap="l"\n        justifyContent="space-between"\n      >\n        ',
        "\n        ",
        "\n      </wui-grid>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n        <wui-card-select-loader type="wallet" id=',
        "></wui-card-select-loader>\n      "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n        <w3m-all-wallets-list-item\n          @click=",
        "\n          .wallet=",
        "\n        ></w3m-all-wallets-list-item>\n      "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const PAGINATOR_ID = 'local-paginator';
let W3mAllWalletsList = class W3mAllWalletsList extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    firstUpdated() {
        this.initialFetch();
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        var _this_paginationObserver;
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
        (_this_paginationObserver = this.paginationObserver) === null || _this_paginationObserver === void 0 ? void 0 : _this_paginationObserver.disconnect();
    }
    render() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), !this.loading, [
            '0',
            's',
            's',
            's'
        ], this.loading ? this.shimmerTemplate(16) : this.walletsTemplate(), this.paginationLoaderTemplate());
    }
    async initialFetch() {
        var _this_shadowRoot;
        this.loading = true;
        const gridEl = (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector('wui-grid');
        if (gridEl) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchWalletsByPage({
                page: 1
            });
            await gridEl.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.loading = false;
            gridEl.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    shimmerTemplate(items, id) {
        return [
            ...Array(items)
        ].map(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(id)));
    }
    walletsTemplate() {
        var _this_filteredWallets;
        const wallets = ((_this_filteredWallets = this.filteredWallets) === null || _this_filteredWallets === void 0 ? void 0 : _this_filteredWallets.length) > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].uniqueBy([
            ...this.featured,
            ...this.recommended,
            ...this.filteredWallets
        ], 'id') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].uniqueBy([
            ...this.featured,
            ...this.recommended,
            ...this.wallets
        ], 'id');
        const walletsWithInstalled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].markWalletsAsInstalled(wallets);
        return walletsWithInstalled.map((wallet)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), ()=>this.onConnectWallet(wallet), wallet));
    }
    paginationLoaderTemplate() {
        const { wallets, recommended, featured, count } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state;
        const columns = window.innerWidth < 352 ? 3 : 4;
        const currentWallets = wallets.length + recommended.length;
        const minimumRows = Math.ceil(currentWallets / columns);
        let shimmerCount = minimumRows * columns - currentWallets + columns;
        shimmerCount -= wallets.length ? featured.length % columns : 0;
        if (count === 0 && featured.length > 0) {
            return null;
        }
        if (count === 0 || [
            ...featured,
            ...wallets,
            ...recommended
        ].length < count) {
            return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
        }
        return null;
    }
    createPaginationObserver() {
        var _this_shadowRoot;
        const loaderEl = (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector("#".concat(PAGINATOR_ID));
        if (loaderEl) {
            this.paginationObserver = new IntersectionObserver((param)=>{
                let [element] = param;
                if ((element === null || element === void 0 ? void 0 : element.isIntersecting) && !this.loading) {
                    const { page, count, wallets } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state;
                    if (wallets.length < count) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].fetchWalletsByPage({
                            page: page + 1
                        });
                    }
                }
            });
            this.paginationObserver.observe(loaderEl);
        }
    }
    onConnectWallet(wallet) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].selectWalletConnector(wallet);
    }
    constructor(){
        super();
        this.unsubscribe = [];
        this.paginationObserver = undefined;
        this.loading = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.wallets.length;
        this.wallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.wallets;
        this.recommended = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.recommended;
        this.featured = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.featured;
        this.filteredWallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state.filteredWallets;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('wallets', (val)=>this.wallets = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('recommended', (val)=>this.recommended = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('featured', (val)=>this.featured = val),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].subscribeKey('filteredWallets', (val)=>this.filteredWallets = val)
        ]);
    }
};
W3mAllWalletsList.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsList.prototype, "loading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsList.prototype, "featured", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsList.prototype, "filteredWallets", void 0);
W3mAllWalletsList = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-all-wallets-list')
], W3mAllWalletsList);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/css-tag.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  wui-grid,\n  wui-loading-spinner,\n  wui-flex {\n    height: 360px;\n  }\n\n  wui-grid {\n    overflow: scroll;\n    scrollbar-width: none;\n    grid-auto-rows: min-content;\n    grid-template-columns: repeat(auto-fill, 104px);\n  }\n\n  wui-grid[data-scroll='false'] {\n    overflow: hidden;\n  }\n\n  wui-grid::-webkit-scrollbar {\n    display: none;\n  }\n\n  wui-loading-spinner {\n    justify-content: center;\n    align-items: center;\n  }\n\n  @media (max-width: 350px) {\n    wui-grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject());
 //# sourceMappingURL=styles.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsSearch",
    ()=>W3mAllWalletsSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ApiController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-grid.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$loading$2d$spinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/WalletUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2d$item$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$search$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-loading-spinner color="accent-100"></wui-loading-spinner>'
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n        <wui-flex\n          data-testid="no-wallet-found"\n          justifyContent="center"\n          alignItems="center"\n          gap="s"\n          flexDirection="column"\n        >\n          <wui-icon-box\n            size="lg"\n            iconColor="fg-200"\n            backgroundColor="fg-300"\n            icon="wallet"\n            background="transparent"\n          ></wui-icon-box>\n          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">\n            No Wallet found\n          </wui-text>\n        </wui-flex>\n      '
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n            <w3m-all-wallets-list-item\n              @click=",
        "\n              .wallet=",
        '\n              data-testid="wallet-search-item-',
        '"\n            ></w3m-all-wallets-list-item>\n          '
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-grid\n        data-testid="wallet-list"\n        .padding=',
        '\n        rowGap="l"\n        columnGap="xs"\n        justifyContent="space-between"\n      >\n        ',
        "\n      </wui-grid>\n    "
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let W3mAllWalletsSearch = class W3mAllWalletsSearch extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        this.onSearch();
        return this.loading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject()) : this.walletsTemplate();
    }
    async onSearch() {
        if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
            this.prevQuery = this.query;
            this.prevBadge = this.badge;
            this.loading = true;
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].searchWallet({
                search: this.query,
                badge: this.badge
            });
            this.loading = false;
        }
    }
    walletsTemplate() {
        const { search } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ApiController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiController"].state;
        const wallets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WalletUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletUtil"].markWalletsAsInstalled(search);
        if (!search.length) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1());
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3(), [
            '0',
            's',
            's',
            's'
        ], wallets.map((wallet)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), ()=>this.onConnectWallet(wallet), wallet, wallet.id)));
    }
    onConnectWallet(wallet) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].selectWalletConnector(wallet);
    }
    constructor(){
        super(...arguments);
        this.prevQuery = '';
        this.prevBadge = undefined;
        this.loading = true;
        this.query = '';
    }
};
W3mAllWalletsSearch.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$search$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mAllWalletsSearch.prototype, "query", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["property"])()
], W3mAllWalletsSearch.prototype, "badge", void 0);
W3mAllWalletsSearch = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-all-wallets-search')
], W3mAllWalletsSearch);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsView",
    ()=>W3mAllWalletsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.1/node_modules/@lit/reactive-element/development/decorators/state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/directives/if-defined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$certified$2d$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-certified-switch.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$search$2d$bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-search-bar.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$list$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$all$2d$wallets$2d$search$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-all-wallets-search\n            query=",
        "\n            badge=",
        "\n          ></w3m-all-wallets-search>"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "<w3m-all-wallets-list badge=",
        "></w3m-all-wallets-list>"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      <wui-flex .padding=",
        ' gap="xs">\n        <wui-search-bar @inputChange=',
        "></wui-search-bar>\n        <wui-certified-switch\n          ?checked=",
        "\n          @click=",
        '\n          data-testid="wui-certified-switch"\n        ></wui-certified-switch>\n        ',
        "\n      </wui-flex>\n      ",
        "\n    "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n        <wui-icon-box\n          size="lg"\n          iconSize="xl"\n          iconColor="accent-100"\n          backgroundColor="accent-100"\n          icon="qrCode"\n          background="transparent"\n          border\n          borderColor="wui-accent-glass-010"\n          @click=',
        "\n        ></wui-icon-box>\n      "
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let W3mAllWalletsView = class W3mAllWalletsView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        const isSearch = this.search.length >= 2;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), [
            '0',
            's',
            's',
            's'
        ], this.onInputChange.bind(this), this.badge, this.onClick.bind(this), this.qrButtonTemplate(), isSearch || this.badge ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), this.search, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.badge)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ifDefined"])(this.badge)));
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    onClick() {
        if (this.badge === 'certified') {
            this.badge = undefined;
            return;
        }
        this.badge = 'certified';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackController"].showSvg('Only WalletConnect certified', {
            icon: 'walletConnectBrown',
            iconColor: 'accent-100'
        });
    }
    qrButtonTemplate() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isMobile()) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3(), this.onWalletConnectQr.bind(this));
        }
        return null;
    }
    onWalletConnectQr() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].push('ConnectingWalletConnect');
    }
    constructor(){
        super(...arguments);
        this.search = '';
        this.onDebouncedSearch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].debounce((value)=>{
            this.search = value;
        });
    }
};
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsView.prototype, "search", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$1$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["state"])()
], W3mAllWalletsView.prototype, "badge", void 0);
W3mAllWalletsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-all-wallets-view')
], W3mAllWalletsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mDownloadsView",
    ()=>W3mDownloadsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.1/node_modules/lit-element/development/lit-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.1/node_modules/lit-html/development/lit-html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_07675b1b12404b5ab6b04cc90d115d62/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/src/utils/WebComponentsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$list$2d$item$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4.0.9_reac_04033330a9f138c5627498e3e92366ae/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-client] (ecmascript) <locals>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-flex gap="xs" flexDirection="column" .padding=',
        ">\n        ",
        " ",
        " ",
        "\n        ",
        "\n      </wui-flex>\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-list-item\n      variant="icon"\n      icon="chromeStore"\n      iconVariant="square"\n      @click=',
        '\n      chevron\n    >\n      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>\n    </wui-list-item>'
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-list-item\n      variant="icon"\n      icon="appStore"\n      iconVariant="square"\n      @click=',
        '\n      chevron\n    >\n      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>\n    </wui-list-item>'
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '<wui-list-item\n      variant="icon"\n      icon="playStore"\n      iconVariant="square"\n      @click=',
        '\n      chevron\n    >\n      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>\n    </wui-list-item>'
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n      <wui-list-item\n        variant="icon"\n        icon="browser"\n        iconVariant="square-blue"\n        @click=',
        '\n        chevron\n      >\n        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>\n      </wui-list-item>\n    '
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
let W3mDownloadsView = class W3mDownloadsView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$1$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LitElement"] {
    render() {
        if (!this.wallet) {
            throw new Error('w3m-downloads-view');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject(), [
            's',
            's',
            'l',
            's'
        ], this.chromeTemplate(), this.iosTemplate(), this.androidTemplate(), this.homepageTemplate());
    }
    chromeTemplate() {
        var _this_wallet;
        if (!((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.chrome_store)) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject1(), this.onChromeStore.bind(this));
    }
    iosTemplate() {
        var _this_wallet;
        if (!((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.app_store)) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject2(), this.onAppStore.bind(this));
    }
    androidTemplate() {
        var _this_wallet;
        if (!((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.play_store)) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject3(), this.onPlayStore.bind(this));
    }
    homepageTemplate() {
        var _this_wallet;
        if (!((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.homepage)) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$1$2f$node_modules$2f$lit$2d$html$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["html"])(_templateObject4(), this.onHomePage.bind(this));
    }
    onChromeStore() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.chrome_store) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.chrome_store, '_blank');
        }
    }
    onAppStore() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.app_store) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.app_store, '_blank');
        }
    }
    onPlayStore() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.play_store) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.play_store, '_blank');
        }
    }
    onHomePage() {
        var _this_wallet;
        if ((_this_wallet = this.wallet) === null || _this_wallet === void 0 ? void 0 : _this_wallet.homepage) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreHelperUtil"].openHref(this.wallet.homepage, '_blank');
        }
    }
    constructor(){
        var _RouterController_state_data;
        super(...arguments);
        this.wallet = (_RouterController_state_data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_07675b1b12404b5ab6b04cc90d115d62$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterController"].state.data) === null || _RouterController_state_data === void 0 ? void 0 : _RouterController_state_data.wallet;
    }
};
W3mDownloadsView = __decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4$2e$0$2e$9_reac_04033330a9f138c5627498e3e92366ae$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$WebComponentsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customElement"])('w3m-downloads-view')
], W3mDownloadsView);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$basic$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$all$2d$wallets$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$downloads$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js [app-client] (ecmascript)"); //# sourceMappingURL=basic.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "W3mAllWalletsView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$all$2d$wallets$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mAllWalletsView"],
    "W3mConnectingWcBasicView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$basic$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mConnectingWcBasicView"],
    "W3mDownloadsView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$downloads$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W3mDownloadsView"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$exports$2f$basic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$connecting$2d$wc$2d$basic$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$all$2d$wallets$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$8_$40$types$2b$react$40$19$2e$1$2e$13_$40$upstash$2b$redis$40$1$2e$35$2e$4_bufferutil$40$4_d1d74f59b152b0f73010029eea2760c0$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$views$2f$w3m$2d$downloads$2d$view$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.8_@types+react@19.1.13_@upstash+redis@1.35.4_bufferutil@4_d1d74f59b152b0f73010029eea2760c0/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=8a2fa_%40reown_appkit-scaffold-ui_dist_esm_40ca3922._.js.map