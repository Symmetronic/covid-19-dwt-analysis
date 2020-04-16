import{r as t,g as e,h as r,c as n}from"./p-f6009613.js";import{A as o}from"./p-b7c30b2b.js";import{m as i,a as s,s as a,b as c,c as u,d as l,h as f,e as h,f as d,g as p,l as b}from"./p-1728ead7.js";import{d as v}from"./p-e767d6dd.js";import{c as g,u as y,a as w}from"./p-74149bb1.js";import{s as m,a as E,b as j,g as S,i as O,c as x}from"./p-2bd4c60e.js";class T{static getData(){return fetch("/assets/data/data.json").then(t=>t.json())}static interpTimeSeries(t){let e=[],r=[];for(const s of t)e.push(s[0]),r.push(s[1]);const n=Math.pow(2,Math.floor(Math.log2(e.length))),o=function(t,e,r){if(void 0===r&&(r=100),t===e)throw new Error("The endpoints of linspace must not be equal.");if(1===(r=Math.floor(r)))return[e];for(var n=[],o=0;o<r;o++){var i=o/(r-1);n.push((1-i)*t+i*e)}return n}(Math.min(...e),Math.max(...e),n),i=function(t,e,r,n){if(void 0===n&&(n="linear"),t.length!==e.length)throw new Error("Arrays of sample points xs and corresponding values vs have to have\n      equal length.");var o=t.map((function(t,r){return[t,e[r]]}));o.sort((function(t,e){var r=t[0]-e[0];if(0===r)throw new Error("Two sample points have equal value "+t[0]+". This is not allowed.");return r}));for(var i=[],s=[],a=0;a<o.length;a++){var c=o[a];i.push(c[0]),s.push(c[1])}return r.map((function(t){var e=function(t,e){if(1===t.length&&t[0]===e)return 0;for(var r=0,n=t.length-1;r<n;){var o=Math.floor((r+n)/2),i=t[o],s=t[o+1];if(e<i)n=o;else{if(!(e>s))return o+(e-i)/(s-i);r=o+1}}return-1}(i,t);if(-1===e)throw new Error("Query value "+t+" lies outside of range. Extrapolation is not\n        supported.");return function(t,e,r){switch(void 0===r&&(r="linear"),r){case"nearest":return t[Math.round(e)];case"next":return t[Math.ceil(e)];case"previous":return t[Math.floor(e)];case"linear":default:var n=Math.floor(e),o=Math.ceil(e),i=e-n;return(1-i)*t[n]+i*t[o]}}(s,e,n)}))}(e,r,o,"linear");return o.map((t,e)=>[t,i[e]])}}const A=t=>e=>e({type:"SET_COEFFS",payload:t}),k=t=>e=>e({type:"SET_INTERP_TIME_SERIES",payload:t}),P=t=>e=>e({type:"SET_TIME_SERIES",payload:t});var M=function(){var t,e=("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()).Symbol;return"function"==typeof e?e.observable?t=e.observable:(t=e("observable"),e.observable=t):t="@@observable",t}(),N=function(){return Math.random().toString(36).substring(7).split("").join(".")},I={INIT:"@@redux/INIT"+N(),REPLACE:"@@redux/REPLACE"+N(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+N()}};function D(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function R(t,e){var r=e&&e.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function L(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach((function(e){L(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function U(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function H(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}y(g((function(t,e){!function(t){function e(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}function r(t,e){Object.defineProperty(this,"kind",{value:t,enumerable:!0}),e&&e.length&&Object.defineProperty(this,"path",{value:e,enumerable:!0})}function n(t,e,r){n.super_.call(this,"E",t),Object.defineProperty(this,"lhs",{value:e,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(t,e){o.super_.call(this,"N",t),Object.defineProperty(this,"rhs",{value:e,enumerable:!0})}function i(t,e){i.super_.call(this,"D",t),Object.defineProperty(this,"lhs",{value:e,enumerable:!0})}function s(t,e,r){s.super_.call(this,"A",t),Object.defineProperty(this,"index",{value:e,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function a(t,e,r){var n=t.slice((r||e)+1||t.length);return t.length=e<0?t.length+e:e,t.push.apply(t,n),t}function c(t){var e=void 0===t?"undefined":S(t);return"object"!==e?e:t===Math?"math":null===t?"null":Array.isArray(t)?"array":"[object Date]"===Object.prototype.toString.call(t)?"date":"function"==typeof t.toString&&/^\/.*\//.test(t.toString())?"regexp":"object"}function u(t,e,r,l,f,h,d){d=d||[];var p=(f=f||[]).slice(0);if(void 0!==h){if(l){if("function"==typeof l&&l(p,h))return;if("object"===(void 0===l?"undefined":S(l))){if(l.prefilter&&l.prefilter(p,h))return;if(l.normalize){var b=l.normalize(p,h,t,e);b&&(t=b[0],e=b[1])}}}p.push(h)}"regexp"===c(t)&&"regexp"===c(e)&&(t=t.toString(),e=e.toString());var v=void 0===t?"undefined":S(t),g=void 0===e?"undefined":S(e),y="undefined"!==v||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(h),w="undefined"!==g||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(h);if(!y&&w)r(new o(p,e));else if(!w&&y)r(new i(p,t));else if(c(t)!==c(e))r(new n(p,t,e));else if("date"===c(t)&&t-e!=0)r(new n(p,t,e));else if("object"===v&&null!==t&&null!==e)if(d.filter((function(e){return e.lhs===t})).length)t!==e&&r(new n(p,t,e));else{if(d.push({lhs:t,rhs:e}),Array.isArray(t)){var m;for(m=0;m<t.length;m++)m>=e.length?r(new s(p,m,new i(void 0,t[m]))):u(t[m],e[m],r,l,p,m,d);for(;m<e.length;)r(new s(p,m,new o(void 0,e[m++])))}else{var E=Object.keys(t),j=Object.keys(e);E.forEach((function(n){var o=j.indexOf(n);o>=0?(u(t[n],e[n],r,l,p,n,d),j=a(j,o)):u(t[n],void 0,r,l,p,n,d)})),j.forEach((function(t){u(void 0,e[t],r,l,p,t,d)}))}d.length=d.length-1}else t!==e&&("number"===v&&isNaN(t)&&isNaN(e)||r(new n(p,t,e)))}function l(t,e,r,n){return n=n||[],u(t,e,(function(t){t&&n.push(t)}),r),n.length?n:void 0}function f(t,e,r){if(t&&e&&r&&r.kind){for(var n=t,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function t(e,r,n){if(n.path&&n.path.length){var o,i=e[r],s=n.path.length-1;for(o=0;o<s;o++)i=i[n.path[o]];switch(n.kind){case"A":t(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":t(e[r],n.index,n.item);break;case"D":e=a(e,r);break;case"E":case"N":e[r]=n.rhs}return e}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function h(t){return"color: "+T[t].color+"; font-weight: bold"}function d(t,e,r,n){var o=l(t,e);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(t){r.log("diff")}o?o.forEach((function(t){var e=t.kind,n=function(t){var e=t.path,r=t.lhs,n=t.rhs,o=t.index,i=t.item;switch(t.kind){case"E":return[e.join("."),r,"→",n];case"N":return[e.join("."),n];case"D":return[e.join(".")];case"A":return[e.join(".")+"["+o+"]",i];default:return[]}}(t);r.log.apply(r,["%c "+T[e].text,h(e)].concat(O(n)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(t){r.log("—— diff end —— ")}}function p(t,e,r,n){switch(void 0===t?"undefined":S(t)){case"object":return"function"==typeof t[n]?t[n].apply(t,O(r)):t[n];case"function":return t(e);default:return t}}function b(t,e){var r=e.logger,n=e.actionTransformer,o=e.titleFormatter,i=void 0===o?function(t){var e=t.timestamp,r=t.duration;return function(t,n,o){var i=["action"];return i.push("%c"+String(t.type)),e&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(e):o,s=e.collapsed,a=e.colors,c=e.level,u=e.diff,l=void 0===e.titleFormatter;t.forEach((function(o,f){var h=o.startedTime,b=o.action,v=o.prevState,g=o.error,y=o.took,w=o.nextState,m=t[f+1];m&&(w=m.prevState,y=m.started-o.started);var j=n(b),S="function"==typeof s?s((function(){return w}),b,o):s,O=E(h),x=a.title?"color: "+a.title(j)+";":"",T=["color: gray; font-weight: lighter;"];T.push(x),e.timestamp&&T.push("color: gray; font-weight: lighter;"),e.duration&&T.push("color: gray; font-weight: lighter;");var A=i(j,O,y);try{S?a.title&&l?r.groupCollapsed.apply(r,["%c "+A].concat(T)):r.groupCollapsed(A):a.title&&l?r.group.apply(r,["%c "+A].concat(T)):r.group(A)}catch(t){r.log(A)}var k=p(c,j,[v],"prevState"),P=p(c,j,[j],"action"),M=p(c,j,[g,v],"error"),N=p(c,j,[w],"nextState");if(k)if(a.prevState){var I="color: "+a.prevState(v)+"; font-weight: bold";r[k]("%c prev state",I,v)}else r[k]("prev state",v);if(P)if(a.action){var D="color: "+a.action(j)+"; font-weight: bold";r[P]("%c action    ",D,j)}else r[P]("action    ",j);if(g&&M)if(a.error){var R="color: "+a.error(g,v)+"; font-weight: bold;";r[M]("%c error     ",R,g)}else r[M]("error     ",g);if(N)if(a.nextState){var L="color: "+a.nextState(w)+"; font-weight: bold";r[N]("%c next state",L,w)}else r[N]("next state",w);u&&d(v,w,r,S);try{r.groupEnd()}catch(t){r.log("—— log end ——")}}))}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},A,t),r=e.logger,n=e.stateTransformer,o=e.errorTransformer,i=e.predicate,s=e.logErrors,a=e.diffPredicate;if(void 0===r)return function(){return function(t){return function(e){return t(e)}}};if(t.getState&&t.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(t){return function(e){return t(e)}}};var c=[];return function(t){var r=t.getState;return function(t){return function(u){if("function"==typeof i&&!i(r,u))return t(u);var l={};c.push(l),l.started=j.now(),l.startedTime=new Date,l.prevState=n(r()),l.action=u;var f=void 0;if(s)try{f=t(u)}catch(t){l.error=o(t)}else f=t(u);l.took=j.now()-l.started,l.nextState=n(r());var h=e.diff&&"function"==typeof a?a(r,u):e.diff;if(b(c,Object.assign({},e,{diff:h})),c.length=0,l.error)throw l.error;return f}}}}var g,y,m=function(t,e){return function(t,e){return new Array(e+1).join("0")}(0,e-t.toString().length)+t},E=function(t){return m(t.getHours(),2)+":"+m(t.getMinutes(),2)+":"+m(t.getSeconds(),2)+"."+m(t.getMilliseconds(),3)},j="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},x=[];g="object"===(void 0===w?"undefined":S(w))&&w?w:"undefined"!=typeof window?window:{},(y=g.DeepDiff)&&x.push((function(){void 0!==y&&g.DeepDiff===l&&(g.DeepDiff=y,y=void 0)})),e(n,r),e(o,r),e(i,r),e(s,r),Object.defineProperties(l,{diff:{value:l,enumerable:!0},observableDiff:{value:u,enumerable:!0},applyDiff:{value:function(t,e,r){t&&e&&u(t,e,(function(n){r&&!r(t,e,n)||f(t,e,n)}))},enumerable:!0},applyChange:{value:f,enumerable:!0},revertChange:{value:function(t,e,r){if(t&&e&&r&&r.kind){var n,o,i=t;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function t(e,r,n){if(n.path&&n.path.length){var o,i=e[r],s=n.path.length-1;for(o=0;o<s;o++)i=i[n.path[o]];switch(n.kind){case"A":t(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":t(e[r],n.index,n.item);break;case"D":case"E":e[r]=n.lhs;break;case"N":e=a(e,r)}return e}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==y},enumerable:!0},noConflict:{value:function(){return x&&(x.forEach((function(t){t()})),x=null),l},enumerable:!0}});var T={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},A={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(t){return t},actionTransformer:function(t){return t},errorTransformer:function(t){return t},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch,r=t.getState;return"function"==typeof e||"function"==typeof r?v()({dispatch:e,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=A,t.createLogger=v,t.logger=k,t.default=k,Object.defineProperty(t,"__esModule",{value:!0})}(e)})));var F=H();F.withExtraArgument=H;const Y=function t(e,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(t)(e,r)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var i=e,s=r,a=[],c=a,u=!1;function l(){c===a&&(c=a.slice())}function f(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return l(),c.push(t),function(){if(e){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,l();var r=c.indexOf(t);c.splice(r,1),a=null}}}function d(t){if(!D(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,s=i(s,t)}finally{u=!1}for(var e=a=c,r=0;r<e.length;r++)(0,e[r])();return t}function p(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");i=t,d({type:I.REPLACE})}function b(){var t,e=h;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(f())}return r(),{unsubscribe:e(r)}}})[M]=function(){return this},t}return d({type:I.INIT}),(o={dispatch:d,subscribe:h,getState:f,replaceReducer:p})[M]=b,o}(function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];"function"==typeof t[o]&&(r[o]=t[o])}var i,s=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:I.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:I.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+I.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(a){i=a}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},a=0;a<s.length;a++){var c=s[a],u=t[c],l=(0,r[c])(u,e);if(void 0===l){var f=R(c,e);throw new Error(f)}o[c]=l,n=n||l!==u}return(n=n||s.length!==Object.keys(t).length)?o:t}}({data:(t={coeffs:null,interpTimeSeries:null,timeSeries:null},e)=>{switch(e.type){case"SET_COEFFS":{const r=e.payload;return Object.assign(Object.assign({},t),{coeffs:r})}case"SET_INTERP_TIME_SERIES":{const r=e.payload;return Object.assign(Object.assign({},t),{interpTimeSeries:r})}case"SET_TIME_SERIES":{const r=e.payload;return Object.assign(Object.assign({},t),{timeSeries:r})}default:return t}}}),function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return C({},r,{dispatch:n=U.apply(void 0,i)(r.dispatch)})}}}(F)),B=class{constructor(r){t(this,r),this.setCoeffs=()=>{},this.setInterpTimeSeries=()=>{},this.setTimeSeries=()=>{},this.store=e(this,"store")}handleInterpTimeSeries(t){let e=null;if(t){const r=t.map(t=>t[1]);e=v.transform(r)}this.setCoeffs(e)}handleTimeSeries(t){let e=null;t&&(e=T.interpTimeSeries(t)),this.setInterpTimeSeries(e)}componentWillLoad(){this.initStore()}componentDidLoad(){this.loadData()}initStore(){this.store.setStore(Y),this.store.mapStateToProps(this,t=>({coeffs:t.data.coeffs,interpTimeSeries:t.data.interpTimeSeries,timeSeries:t.data.timeSeries})),this.store.mapDispatchToProps(this,{setCoeffs:A,setInterpTimeSeries:k,setTimeSeries:P})}async loadData(){return T.getData().then(t=>this.setTimeSeries(t))}progress(){const t=["coeffs","interpTimeSeries","timeSeries"];return(t.reduce((t,e)=>null==this[e]?t:t+1,0)+1)/(t.length+1)}render(){const t=this.progress();return r("div",null,r("strc-progress-bar",{class:t<1?null:"fade-out",progress:t}),r("stencil-router",null,r("stencil-route-switch",null,r("stencil-route",{component:"page-dashboard",exact:!0,url:"/"}))))}static get watchers(){return{interpTimeSeries:["handleInterpTimeSeries"],timeSeries:["handleTimeSeries"]}}};B.style="app-root strc-progress-bar{position:fixed;z-index:6}";const W=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=i(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!s(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?r(this.component,Object.assign({},t)):void 0}get el(){return n(this)}static get watchers(){return{location:["computeMatch"]}}};o.injectProps(W,["location","history","historyType","routeViewsUpdated"]),W.style="stencil-route.inactive{display:none}";const q=t=>"STENCIL-ROUTE"===t.tagName,G=class{constructor(r){t(this,r),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=e(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(q).map((r,n)=>{const o=i(t.pathname,{path:r.url,exact:r.exact,strict:!0});return o&&-1===e&&(e=n),{el:r,match:o}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const r=this.subscribers[this.activeIndex];this.scrollTopOffset&&(r.el.scrollTopOffset=this.scrollTopOffset),r.el.group=this.group,r.el.match=r.match,r.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return r("slot",null)}get el(){return n(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};o.injectProps(G,["location","routeViewsUpdated"]);const K=(t,...e)=>{t||console.warn(...e)},V=()=>{let t,e=[];return{setPrompt:e=>(K(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,r,n,o)=>{if(null!=t){const i="function"==typeof t?t(e,r):t;"string"==typeof i?"function"==typeof n?n(i,o):(K(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==i)}else o(!0)},appendListener:t=>{let r=!0;const n=(...e)=>{r&&t(...e)};return e.push(n),()=>{r=!1,e=e.filter(t=>t!==n)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},z=(t,e="scrollPositions")=>{let r=new Map;const n=(e,n)=>{if(r.set(e,n),m(t,"sessionStorage")){const e=[];r.forEach((t,r)=>{e.push([r,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(m(t,"sessionStorage")){const n=t.sessionStorage.getItem(e);r=n?new Map(JSON.parse(n)):r}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:n,get:t=>r.get(t),has:t=>r.has(t),capture:e=>{n(e,[t.scrollX,t.scrollY])}}},J={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+p(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:p,decodePath:c},slash:{encodePath:c,decodePath:c}},Q=(t,e)=>{const r=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})},X={browser:(t,e={})=>{let r=!1;const n=t.history,o=t.location,i=t.navigator,s=E(t),p=!j(i),b=z(t),v=null!=e.forceRefresh&&e.forceRefresh,g=null!=e.getUserConfirmation?e.getUserConfirmation:S,y=null!=e.keyLength?e.keyLength:6,w=e.basename?a(c(e.basename)):"",m=()=>{try{return t.history.state||{}}catch(e){return{}}},x=t=>{t=t||{};const{key:e,state:r}=t,{pathname:n,search:i,hash:s}=o;let a=n+i+s;return K(!w||f(a,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+w+'".'),w&&(a=h(a,w)),u(a,r,e||l(y))},T=V(),A=t=>{b.capture(H.location.key),Object.assign(H,t),H.location.scrollPosition=b.get(H.location.key),H.length=n.length,T.notifyListeners(H.location,H.action)},k=t=>{O(i,t)||M(x(t.state))},P=()=>{M(x(m()))},M=t=>{if(r)r=!1,A();else{const e="POP";T.confirmTransitionTo(t,e,g,r=>{r?A({action:e,location:t}):N(t)})}},N=t=>{let e=D.indexOf(H.location.key),n=D.indexOf(t.key);-1===e&&(e=0),-1===n&&(n=0);const o=e-n;o&&(r=!0,C(o))},I=x(m());let D=[I.key],R=0,L=!1;const _=t=>w+d(t),C=t=>{n.go(t)},U=e=>{R+=e,1===R?(t.addEventListener("popstate",k),p&&t.addEventListener("hashchange",P)):0===R&&(t.removeEventListener("popstate",k),p&&t.removeEventListener("hashchange",P))},H={length:n.length,action:"POP",location:I,createHref:_,push:(t,e)=>{K(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const r=u(t,e,l(y),H.location);T.confirmTransitionTo(r,"PUSH",g,t=>{if(!t)return;const e=_(r),{key:i,state:a}=r;if(s)if(n.pushState({key:i,state:a},"",e),v)o.href=e;else{const t=D.indexOf(H.location.key),e=D.slice(0,-1===t?0:t+1);e.push(r.key),D=e,A({action:"PUSH",location:r})}else K(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),o.href=e})},replace:(t,e)=>{K(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const r=u(t,e,l(y),H.location);T.confirmTransitionTo(r,"REPLACE",g,t=>{if(!t)return;const e=_(r),{key:i,state:a}=r;if(s)if(n.replaceState({key:i,state:a},"",e),v)o.replace(e);else{const t=D.indexOf(H.location.key);-1!==t&&(D[t]=r.key),A({action:"REPLACE",location:r})}else K(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),o.replace(e)})},go:C,goBack:()=>C(-1),goForward:()=>C(1),block:(t="")=>{const e=T.setPrompt(t);return L||(U(1),L=!0),()=>(L&&(L=!1,U(-1)),e())},listen:t=>{const e=T.appendListener(t);return U(1),()=>{U(-1),e()}},win:t};return H},hash:(t,e={})=>{let r=!1,n=null,o=0,i=!1;const s=t.location,p=t.history,v=x(t.navigator),g=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:y=S,hashType:w="slash"}=e,m=e.basename?a(c(e.basename)):"",{encodePath:E,decodePath:j}=J[w],O=()=>{const t=s.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},T=t=>{const e=s.href.indexOf("#");s.replace(s.href.slice(0,e>=0?e:0)+"#"+t)},A=()=>{let t=j(O());return K(!m||f(t,m),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+m+'".'),m&&(t=h(t,m)),u(t,void 0,l(g))},k=V(),P=t=>{Object.assign(H,t),H.length=p.length,k.notifyListeners(H.location,H.action)},M=()=>{const t=O(),e=E(t);if(t!==e)T(e);else{const t=A(),e=H.location;if(!r&&b(e,t))return;if(n===d(t))return;n=null,N(t)}},N=t=>{if(r)r=!1,P();else{const e="POP";k.confirmTransitionTo(t,e,y,r=>{r?P({action:e,location:t}):I(t)})}},I=t=>{let e=_.lastIndexOf(d(H.location)),n=_.lastIndexOf(d(t));-1===e&&(e=0),-1===n&&(n=0);const o=e-n;o&&(r=!0,C(o))},D=O(),R=E(D);D!==R&&T(R);const L=A();let _=[d(L)];const C=t=>{K(v,"Hash history go(n) causes a full page reload in this browser"),p.go(t)},U=(t,e)=>{o+=e,1===o?t.addEventListener("hashchange",M):0===o&&t.removeEventListener("hashchange",M)},H={length:p.length,action:"POP",location:L,createHref:t=>"#"+E(m+d(t)),push:(t,e)=>{K(void 0===e,"Hash history cannot push state; it is ignored");const r=u(t,void 0,l(g),H.location);k.confirmTransitionTo(r,"PUSH",y,t=>{if(!t)return;const e=d(r),o=E(m+e);if(O()!==o){n=e,(t=>{s.hash=t})(o);const t=_.lastIndexOf(d(H.location)),i=_.slice(0,-1===t?0:t+1);i.push(e),_=i,P({action:"PUSH",location:r})}else K(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),P()})},replace:(t,e)=>{K(void 0===e,"Hash history cannot replace state; it is ignored");const r=u(t,void 0,l(g),H.location);k.confirmTransitionTo(r,"REPLACE",y,t=>{if(!t)return;const e=d(r),o=E(m+e);O()!==o&&(n=e,T(o));const i=_.indexOf(d(H.location));-1!==i&&(_[i]=e),P({action:"REPLACE",location:r})})},go:C,goBack:()=>C(-1),goForward:()=>C(1),block:(e="")=>{const r=k.setPrompt(e);return i||(U(t,1),i=!0),()=>(i&&(i=!1,U(t,-1)),r())},listen:e=>{const r=k.appendListener(e);return U(t,1),()=>{U(t,-1),r()}},win:t};return H}},Z=class{constructor(r){t(this,r),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=e(this,"isServer"),this.queue=e(this,"queue")}componentWillLoad(){this.history=X[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=Q(t,this.root),this.location=t}),this.location=Q(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return r(o.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},r("slot",null))}get el(){return n(this)}},$=class{constructor(e){t(this,e),this.progress=0}handleProgress(t){this.progress=Math.max(0,Math.min(1,t))}componentWillLoad(){this.handleProgress(this.progress)}render(){return r("div",{style:{width:100*this.progress+"%"}})}static get watchers(){return{progress:["handleProgress"]}}};$.style=":host{background-color:#cccccc;background-color:var(--strc-progress-bar-background-color, #cccccc);display:block;height:2px;height:var(--strc-progress-bar-height, 2px);width:100%}div{background-color:#000000;background-color:var(--strc-progress-bar-color, #000000);height:100%;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-duration:var(--strc-progress-bar-transition-duration, 0.2s);transition-duration:var(--strc-progress-bar-transition-duration, 0.2s);-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}";export{B as app_root,W as stencil_route,G as stencil_route_switch,Z as stencil_router,$ as strc_progress_bar}