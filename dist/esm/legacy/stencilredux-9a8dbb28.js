var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var NAMESPACE = 'stencilredux';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerHost = function (elm) {
    // TODO: it's so ugly, but minifies really well
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.(system|cjs)\.entry\.js$/ */
    /* webpackMode: "lazy" */
    "./" + bundleId + ".entry.js" + '').then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var cssVarShim = win.__stencil_cssshim;
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import('./css-shim-229ebf7a-229ebf7a.js');
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, allScripts, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).pathname)];
            case 1:
                allScripts = Array.from(doc.querySelectorAll('script'));
                scriptElm = (allScripts.find(function (s) { return s.hasAttribute(DATA_RESOURCES_URL); }) ||
                    allScripts.find(function (s) { return s.src.includes("/" + NAMESPACE + ".esm.js"); }));
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute(DATA_RESOURCES_URL) || scriptElm.src, doc.baseURI));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, import('./dom-7eb7509a-7eb7509a.js')];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.pathname];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var DATA_RESOURCES_URL = 'data-resources-url';
var HYDRATED_CLASS = 'hydrated';
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        instance = hostRef.$lazyInstance$;
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            // syncronuously write DOM
            updateComponent(elm, hostRef, cmpMeta, isInitialLoad, instance);
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, isInitialLoad, instance) {
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
    }
};
var proxyComponent = function (Cstr, cmpMeta, isElementConstructor, proxyState) {
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 2];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta, hostRef, hmrVersionId)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                _a.label = 2;
            case 2:
                ancestorComponent = hostRef.$ancestorComponent$;
                {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                registerHost(self);
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1, 0));
        }
    }); });
};
export { patchBrowser as a, bootstrapLazy as b, patchEsm as c };
