let t,e,n=!1,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},r={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},c=t=>Promise.resolve(t),i=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),a=new WeakMap,u=t=>"sc-"+t.s,f={},$=t=>"object"==(t=typeof t)||"function"===t,p=(t,e,...n)=>{let l=null,s=!1,o=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!$(l))&&(l+=""),s&&o?r[r.length-1].o+=l:r.push(s?d(null,l):l),o=s)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const i=d(t,null);return i.i=e,r.length>0&&(i.u=r),i},d=(t,e)=>({t:0,$:t,o:e,p:null,u:null,i:null}),h={},y=(t,e,n,l,s,o)=>{if(n!==l){let r=V(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,s=w(n),o=w(l);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else{const c=$(l);if((r||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!r||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}}},m=/\s/,w=t=>t?t.split(m):[],b=(t,e,n,l)=>{const s=11===e.p.nodeType&&e.p.host?e.p.host:e.p,o=t&&t.i||f,r=e.i||f;for(l in o)l in r||y(s,l,o[l],void 0,n,e.t);for(l in r)y(s,l,o[l],r[l],n,e.t)},g=(e,l,s)=>{let r,c,i=l.u[s],a=0;if(null!==i.o)r=i.p=o.createTextNode(i.o);else{if(n||(n="svg"===i.$),r=i.p=o.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.$),n&&"foreignObject"===i.$&&(n=!1),b(null,i,n),null!=t&&r["s-si"]!==t&&r.classList.add(r["s-si"]=t),i.u)for(a=0;a<i.u.length;++a)c=g(e,i,a),c&&r.appendChild(c);"svg"===i.$?n=!1:"foreignObject"===r.tagName&&(n=!0)}return r},j=(t,n,l,s,o,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=g(null,l,o),c&&(s[o].p=c,i.insertBefore(c,n)))},v=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.p.remove()},O=(t,e)=>t.$===e.$,S=(t,e)=>{const l=e.p=t.p,s=t.u,o=e.u,r=e.$,c=e.o;null===c?(n="svg"===r||"foreignObject"!==r&&n,"slot"===r||b(t,e,n),null!==s&&null!==o?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],$=l[u];for(;o<=c&&r<=u;)null==i?i=e[++o]:null==a?a=e[--c]:null==f?f=l[++r]:null==$?$=l[--u]:O(i,f)?(S(i,f),i=e[++o],f=l[++r]):O(a,$)?(S(a,$),a=e[--c],$=l[--u]):O(i,$)?(S(i,$),t.insertBefore(i.p,a.p.nextSibling),i=e[++o],$=l[--u]):O(a,f)?(S(a,f),t.insertBefore(a.p,i.p),a=e[--c],f=l[++r]):(s=g(e&&e[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?j(t,null==l[u+1]?null:l[u+1].p,n,l,r,u):r>u&&v(e,o,c)})(l,s,e,o):null!==o?(null!==t.o&&(l.textContent=""),j(l,null,e,o,0,o.length-1)):null!==s&&v(s,0,s.length-1),n&&"svg"===r&&(n=!1)):t.o!==c&&(l.data=c)},M=t=>q(t).h,k=(t,e)=>{e&&!t.m&&e["s-p"]&&e["s-p"].push(new Promise(e=>t.m=e))},C=(t,e)=>{if(t.t|=16,!(4&t.t))return k(t,t.g),Z(()=>x(t,e));t.t|=512},x=(t,e)=>{const n=t.j;let l;return e&&(l=W(n,"componentWillLoad")),A(l,()=>L(t,n,e))},L=async(n,l,s)=>{const r=n.h,c=r["s-rc"];s&&(t=>{const e=t.v,n=t.h,l=e.t,s=((t,e)=>{let n=u(e),l=G.get(n);if(t=11===t.nodeType?t:o,l)if("string"==typeof l){let e,s=a.get(t=t.head||t);s||a.set(t,s=new Set),s.has(n)||(e=o.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(n);((n,l)=>{const s=n.h,o=n.O||d(null,null),r=(t=>t&&t.$===h)(l)?l:p(null,null,l);e=s.tagName,r.$=null,r.t|=4,n.O=r,r.p=o.p=s.shadowRoot||s,t=s["s-sc"],S(o,r)})(n,P(n,l)),c&&(c.map(t=>t()),r["s-rc"]=void 0);{const t=r["s-p"],e=()=>E(n);0===t.length?e():(Promise.all(t).then(e),n.t|=4,t.length=0)}},P=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2}catch(t){_(t)}return e},E=t=>{const e=t.h,n=t.j,l=t.g;64&t.t||(t.t|=64,F(e),W(n,"componentDidLoad"),t.S(e),l||T()),t.m&&(t.m(),t.m=void 0),512&t.t&&Y(()=>C(t,!1)),t.t&=-517},T=()=>{F(o.documentElement),Y(()=>(t=>{const e=r.ce("appload",{detail:{namespace:"app"}});return t.dispatchEvent(e),e})(s))},W=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){_(t)}},A=(t,e)=>t&&t.then?t.then(e):e(),F=t=>t.classList.add("hydrated"),H=(t,e,n)=>{if(e.M){t.watchers&&(e.k=t.watchers);const l=Object.entries(e.M),s=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>q(this).C.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=q(t),o=s.C.get(e),r=s.t,c=s.j;if(n=((t,e)=>null==t||$(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.M[e][0]),!(8&r&&void 0!==o||n===o)&&(s.C.set(e,n),c)){if(l.k&&128&r){const t=l.k[e];t&&t.map(t=>{try{c[t](n,o,e)}catch(t){_(t)}})}2==(18&r)&&C(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){r.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},R=(t,e={})=>{const n=[],l=e.exclude||[],c=s.customElements,a=o.head,f=a.querySelector("meta[charset]"),$=o.createElement("style"),p=[];let d,h=!0;Object.assign(r,e),r.l=new URL(e.resourcesUrl||"./",o.baseURI).href,t.map(t=>t[1].map(e=>{const s={t:e[0],s:e[1],M:e[2],L:e[3]};s.M=e[2],s.k={};const o=s.s,a=class extends HTMLElement{constructor(t){super(t),N(t=this,s),1&s.t&&t.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?p.push(this):r.jmp(()=>(t=>{if(0==(1&r.t)){const e=q(t),n=e.v,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(e,e.g=n);break}}n.M&&Object.entries(n.M).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=B(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.k=s.watchers,H(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){_(t)}e.t&=-9,e.t|=128,t()}if(s.style){let t=s.style;const e=u(n);if(!G.has(e)){const l=()=>{};((t,e,n)=>{let l=G.get(t);i&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,G.set(t,l)})(e,t,!!(1&n.t)),l()}}}const o=e.g,r=()=>C(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this))}disconnectedCallback(){r.jmp(()=>{})}componentOnReady(){return q(this).P}};s.T=t[0],l.includes(o)||c.get(o)||(n.push(o),c.define(o,H(a,s,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),h=!1,p.length?p.map(t=>t.connectedCallback()):r.jmp(()=>d=setTimeout(T,30))},U=new WeakMap,q=t=>U.get(t),D=(t,e)=>U.set(e.j=t,e),N=(t,e)=>{const n={t:0,h:t,v:e,C:new Map};return n.P=new Promise(t=>n.S=t),t["s-p"]=[],t["s-rc"]=[],U.set(t,n)},V=(t,e)=>e in t,_=t=>console.error(t),z=new Map,B=t=>{const e=t.s.replace(/-/g,"_"),n=t.T,l=z.get(n);return l?l[e]:import(`./${n}.entry.js`).then(t=>(z.set(n,t),t[e]),_)},G=new Map,I=[],J=[],K=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&r.t?Y(X):r.raf(X))},Q=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){_(t)}t.length=0},X=()=>{Q(I),Q(J),(l=I.length>0)&&r.raf(X)},Y=t=>c().then(t),Z=K(J,!0);export{h as H,R as b,M as g,p as h,c as p,D as r}