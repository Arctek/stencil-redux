const e=window,t=document,s={t:0,s:"",raf:e=>requestAnimationFrame(e),ael:(e,t,s,n)=>e.addEventListener(t,s,n),rel:(e,t,s,n)=>e.removeEventListener(t,s,n)},n=new WeakMap,c=e=>n.get(e),r=e=>console.error(e),o=e.__stencil_cssshim,a=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stencilredux("./p-229ebf7a.js"),i=async()=>{{const e=Array.from(t.querySelectorAll("script")),s=e.find(e=>e.hasAttribute(m))||e.find(e=>e.src.includes("/stencilredux.esm.js")),n=new URL(".",new URL(s.getAttribute(m)||s.src,t.baseURI));return l(n.href),window.customElements||await __sc_import_stencilredux("./p-7eb7509a.js"),n.pathname}},l=s=>{const n=`__sc_import_${"stencilredux".replace(/\s|-/g,"_")}`;try{e[n]=new Function("w","return import(w);")}catch(c){const r=new Map;e[n]=(c=>{const o=new URL(c,s).href;let a=r.get(o);if(!a){const s=t.createElement("script");s.type="module",s.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${n}.m = m;`],{type:"application/javascript"})),a=new Promise(t=>{s.onload=(()=>{t(e[n].m),s.remove()})}),r.set(o,a),t.head.appendChild(s)}return a})}},m="data-resources-url",w=(e,n)=>{if(!e["s-al"]){const c=n.o;512&n.t||(n.t|=512,n.i(e),c||(t.documentElement.classList.add("hydrated"),setTimeout(()=>s.t|=2,999)))}},p=(a,i={})=>{const l=i.exclude||[],m=e.customElements;Object.assign(s,i),s.s=new URL(i.resourcesUrl||"/",t.baseURI).href,i.syncQueue&&(s.t|=4),a.forEach(e=>e[1].forEach(t=>{const a={t:t[0],l:t[1],p:t[2],$:t[3]},i=a.l;a.u=e[0],l.includes(i)||m.get(i)||m.define(i,(e=>e)(class extends HTMLElement{constructor(e){super(e),(e=>{{const t={t:0,_:e};t.h=new Promise(e=>t.i=e),n.set(e,t)}})(e=this)}connectedCallback(){((e,t)=>{if(0==(1&s.t)){const s=c(e);1&s.t||(s.t|=1,(async(e,t,s,n,c)=>{if(0==(256&t.t)){t.t|=256,c=await(e=>__sc_import_stencilredux(`./${e.u}.entry.js`).then(t=>t[e.l.replace(/-/g,"_")],r))(s);try{new c(t)}catch(e){r(e)}}(async(e,t)=>{((e,t)=>{o&&o.updateHost(e),t.t|=2,w(e,t)})(e,t)})(e,t)})(e,s,t))}})(this,a)}disconnectedCallback(){0==(1&s.t)&&o&&o.removeHost(this)}"s-init"(){const e=c(this);e.U&&w(this,e)}"s-hmr"(e){}forceUpdate(){}componentOnReady(){return c(this).h}}))}))};export{i as a,p as b,a as c};