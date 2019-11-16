'use strict';

const NAMESPACE = 'stencilredux';

const win = window;
const doc = document;
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
};

const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerHost = (elm) => {
    // TODO: it's so ugly, but minifies really well
    {
        const hostRef = {
            $flags$: 0,
            $hostElement$: elm
        };
        hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
        return hostRefs.set(elm, hostRef);
    }
};

const consoleError = (e) => console.error(e);

const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const bundleId = cmpMeta.$lazyBundleIds$;
    return Promise.resolve(require(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.(system|cjs)\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`)).then(importedModule => importedModule[cmpMeta.$tagName$.replace(/-/g, '_')], consoleError);
};
const cssVarShim = win.__stencil_cssshim;

function getDynamicImportFunction(namespace) {
    return `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
}

const patchEsm = () => {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve(require('./css-shim-229ebf7a-56ba83b5.js'));
    }
    return Promise.resolve();
};
const patchBrowser = async () => {
    // @ts-ignore
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencilredux-fd5599b2.js', document.baseURI).href));
    if (importMeta !== '') {
        return Promise.resolve(new URL('.', importMeta).pathname);
    }
    else {
        const allScripts = Array.from(doc.querySelectorAll('script'));
        const scriptElm = (allScripts.find(s => s.hasAttribute(DATA_RESOURCES_URL)) ||
            allScripts.find(s => s.src.includes(`/${NAMESPACE}.esm.js`)));
        const resourcesUrl = new URL('.', new URL(scriptElm.getAttribute(DATA_RESOURCES_URL) || scriptElm.src, doc.baseURI));
        patchDynamicImport(resourcesUrl.href);
        if (!window.customElements) {
            // @ts-ignore
            await Promise.resolve(require('./dom-7eb7509a-4c879aea.js'));
        }
        return resourcesUrl.pathname;
    }
};
const patchDynamicImport = (base) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const DATA_RESOURCES_URL = 'data-resources-url';
const HYDRATED_CLASS = 'hydrated';
const scheduleUpdate = async (elm, hostRef, cmpMeta, isInitialLoad) => {
    const instance = hostRef.$lazyInstance$;
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    {
        // syncronuously write DOM
        updateComponent(elm, hostRef, cmpMeta, isInitialLoad, instance);
    }
};
const updateComponent = (elm, hostRef, cmpMeta, isInitialLoad, instance) => {
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    postUpdateComponent(elm, hostRef);
};
const postUpdateComponent = (elm, hostRef, ancestorsActivelyLoadingChildren) => {
    if (!elm['s-al']) {
        const instance = hostRef.$lazyInstance$;
        const ancestorComponent = hostRef.$ancestorComponent$;
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
                    setTimeout(() => plt.$flags$ |= 2 /* appLoaded */, 999);
                }
            }
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};

const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        const instance = hostRef.$lazyInstance$;
    }
};

const proxyComponent = (Cstr, cmpMeta, isElementConstructor, proxyState) => {
    return Cstr;
};

const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0) {
        // we haven't initialized this element yet
        hostRef.$flags$ |= 256 /* hasInitializedComponent */;
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = await loadModule(cmpMeta, hostRef, hmrVersionId);
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
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        scheduleUpdate(elm, hostRef, cmpMeta, true);
    }
};

const fireConnectedCallback = (instance) => {
};
const connectedCallback = (elm, cmpMeta) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        const hostRef = getHostRef(elm);
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

const bootstrapLazy = (lazyBundles, options = {}) => {
    const exclude = options.exclude || [];
    const head = doc.head;
    const customElements = win.customElements;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(lazyBundle => lazyBundle[1].forEach(compactMeta => {
        const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        const tagName = cmpMeta.$tagName$;
        const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
                // @ts-ignore
                super(self);
                self = this;
                registerHost(self);
            }
            connectedCallback() {
                connectedCallback(this, cmpMeta);
            }
            disconnectedCallback() {
                disconnectedCallback(this);
            }
            's-init'() {
                const hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            }
            's-hmr'(hmrVersionId) {
            }
            forceUpdate() {
            }
            componentOnReady() {
                return getHostRef(this).$onReadyPromise$;
            }
        };
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1, 0));
        }
    }));
};

exports.bootstrapLazy = bootstrapLazy;
exports.patchBrowser = patchBrowser;
exports.patchEsm = patchEsm;
