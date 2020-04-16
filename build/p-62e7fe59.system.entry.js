var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):o(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-b1729adf.system.js","./p-05cd3566.system.js","./p-2d5d376b.system.js","./p-034cf14e.system.js","./p-50f9a219.system.js","./p-f1645a56.system.js"],(function(e){"use strict";var t,r,n,o,i,a,s,u,c,f,l,h,p,d,v,g,y,b,m,w,S,O,E,T,x,j;return{setters:[function(e){t=e.r;r=e.g;n=e.h;o=e.c},function(e){i=e.A},function(e){a=e.m;s=e.a;u=e.s;c=e.b;f=e.c;l=e.d;h=e.h;p=e.e;d=e.f;v=e.g;g=e.l},function(e){y=e.d},function(e){b=e.c;m=e.u;w=e.a},function(e){S=e.s;O=e.a;E=e.b;T=e.g;x=e.i;j=e.c}],execute:function(){function P(e,t,r){if(r===void 0){r=100}if(e===t){throw new Error("The endpoints of linspace must not be equal.")}r=Math.floor(r);if(r===1)return[t];var n=[];for(var o=0;o<r;o++){var i=o/(r-1);n.push((1-i)*e+i*t)}return n}function k(e,t){if(e.length===1&&e[0]===t)return 0;var r=0;var n=e.length-1;while(r<n){var o=Math.floor((r+n)/2);var i=e[o];var a=e[o+1];if(t<i){n=o}else if(t>a){r=o+1}else{return o+(t-i)/(a-i)}}return-1}function _(e,t,r){if(r===void 0){r="linear"}switch(r){case"nearest":{return e[Math.round(t)]}case"next":{return e[Math.ceil(t)]}case"previous":{return e[Math.floor(t)]}case"linear":default:{var n=Math.floor(t);var o=Math.ceil(t);var i=t-n;return(1-i)*e[n]+i*e[o]}}}function A(e,t,r,n){if(n===void 0){n="linear"}if(e.length!==t.length){throw new Error("Arrays of sample points xs and corresponding values vs have to have\n      equal length.")}var o=e.map((function(e,r){return[e,t[r]]}));o.sort((function(e,t){var r=e[0]-t[0];if(r===0){throw new Error("Two sample points have equal value "+e[0]+". This is not allowed.")}return r}));var i=[];var a=[];for(var s=0;s<o.length;s++){var u=o[s];i.push(u[0]);a.push(u[1])}var c=r.map((function(e){var t=k(i,e);if(t===-1){throw new Error("Query value "+e+" lies outside of range. Extrapolation is not\n        supported.")}return _(a,t,n)}));return c}var I="/assets/data/data.json";var D=function(){function e(){}e.getData=function(){return fetch(I).then((function(e){return e.json()}))};e.interpTimeSeries=function(e){var t=[];var r=[];for(var n=0,o=e;n<o.length;n++){var i=o[n];t.push(i[0]);r.push(i[1])}var a=Math.pow(2,Math.floor(Math.log2(t.length)));var s=Math.min.apply(Math,t);var u=Math.max.apply(Math,t);var c=P(s,u,a);var f=A(t,r,c,"linear");return c.map((function(e,t){return[e,f[t]]}))};return e}();var N=function(e){return function(t){return t({type:"SET_COEFFS",payload:e})}};var L=function(e){return function(t){return t({type:"SET_INTERP_TIME_SERIES",payload:e})}};var M=function(e){return function(t){return t({type:"SET_TIME_SERIES",payload:e})}};function C(e){var t;var r=e.Symbol;if(typeof r==="function"){if(r.observable){t=r.observable}else{t=r("observable");r.observable=t}}else{t="@@observable"}return t}var R;if(typeof self!=="undefined"){R=self}else if(typeof window!=="undefined"){R=window}else if(typeof global!=="undefined"){R=global}else if(typeof module!=="undefined"){R=module}else{R=Function("return this")()}var U=C(R);var F=function e(){return Math.random().toString(36).substring(7).split("").join(".")};var H={INIT:"@@redux/INIT"+F(),REPLACE:"@@redux/REPLACE"+F(),PROBE_UNKNOWN_ACTION:function e(){return"@@redux/PROBE_UNKNOWN_ACTION"+F()}};function V(e){if(typeof e!=="object"||e===null)return false;var t=e;while(Object.getPrototypeOf(t)!==null){t=Object.getPrototypeOf(t)}return Object.getPrototypeOf(e)===t}function q(e,t,r){var n;if(typeof t==="function"&&typeof r==="function"||typeof r==="function"&&typeof arguments[3]==="function"){throw new Error("It looks like you are passing several store enhancers to "+"createStore(). This is not supported. Instead, compose them "+"together to a single function.")}if(typeof t==="function"&&typeof r==="undefined"){r=t;t=undefined}if(typeof r!=="undefined"){if(typeof r!=="function"){throw new Error("Expected the enhancer to be a function.")}return r(q)(e,t)}if(typeof e!=="function"){throw new Error("Expected the reducer to be a function.")}var o=e;var i=t;var a=[];var s=a;var u=false;function c(){if(s===a){s=a.slice()}}function f(){if(u){throw new Error("You may not call store.getState() while the reducer is executing. "+"The reducer has already received the state as an argument. "+"Pass it down from the top reducer instead of reading it from the store.")}return i}function l(e){if(typeof e!=="function"){throw new Error("Expected the listener to be a function.")}if(u){throw new Error("You may not call store.subscribe() while the reducer is executing. "+"If you would like to be notified after the store has been updated, subscribe from a "+"component and invoke store.getState() in the callback to access the latest state. "+"See https://redux.js.org/api-reference/store#subscribelistener for more details.")}var t=true;c();s.push(e);return function r(){if(!t){return}if(u){throw new Error("You may not unsubscribe from a store listener while the reducer is executing. "+"See https://redux.js.org/api-reference/store#subscribelistener for more details.")}t=false;c();var n=s.indexOf(e);s.splice(n,1);a=null}}function h(e){if(!V(e)){throw new Error("Actions must be plain objects. "+"Use custom middleware for async actions.")}if(typeof e.type==="undefined"){throw new Error('Actions may not have an undefined "type" property. '+"Have you misspelled a constant?")}if(u){throw new Error("Reducers may not dispatch actions.")}try{u=true;i=o(i,e)}finally{u=false}var t=a=s;for(var r=0;r<t.length;r++){var n=t[r];n()}return e}function p(e){if(typeof e!=="function"){throw new Error("Expected the nextReducer to be a function.")}o=e;h({type:H.REPLACE})}function d(){var e;var t=l;return e={subscribe:function e(r){if(typeof r!=="object"||r===null){throw new TypeError("Expected the observer to be an object.")}function n(){if(r.next){r.next(f())}}n();var o=t(n);return{unsubscribe:o}}},e[U]=function(){return this},e}h({type:H.INIT});return n={dispatch:h,subscribe:l,getState:f,replaceReducer:p},n[U]=d,n}function B(e,t){var r=t&&t.type;var n=r&&'action "'+String(r)+'"'||"an action";return"Given "+n+', reducer "'+e+'" returned undefined. '+"To ignore an action, you must explicitly return the previous state. "+"If you want this reducer to hold no value, you can return null instead of undefined."}function Y(e){Object.keys(e).forEach((function(t){var r=e[t];var n=r(undefined,{type:H.INIT});if(typeof n==="undefined"){throw new Error('Reducer "'+t+'" returned undefined during initialization. '+"If the state passed to the reducer is undefined, you must "+"explicitly return the initial state. The initial state may "+"not be undefined. If you don't want to set a value for this reducer, "+"you can use null instead of undefined.")}if(typeof r(undefined,{type:H.PROBE_UNKNOWN_ACTION()})==="undefined"){throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+H.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the "+"current state for any unknown actions, unless it is undefined, "+"in which case you must return the initial state, regardless of the "+"action type. The initial state may not be undefined, but can be null.")}}))}function W(e){var t=Object.keys(e);var r={};for(var n=0;n<t.length;n++){var o=t[n];if(typeof e[o]==="function"){r[o]=e[o]}}var i=Object.keys(r);var a;try{Y(r)}catch(s){a=s}return function e(t,n){if(t===void 0){t={}}if(a){throw a}var o=false;var s={};for(var u=0;u<i.length;u++){var c=i[u];var f=r[c];var l=t[c];var h=f(l,n);if(typeof h==="undefined"){var p=B(c,n);throw new Error(p)}s[c]=h;o=o||h!==l}o=o||i.length!==Object.keys(t).length;return o?s:t}}function G(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){r.push.apply(r,Object.getOwnPropertySymbols(e))}if(t)r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));return r}function K(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){z(r,true).forEach((function(t){G(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function J(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}if(t.length===0){return function(e){return e}}if(t.length===1){return t[0]}return t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function Q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return function(e){return function(){var r=e.apply(void 0,arguments);var n=function e(){throw new Error("Dispatching while constructing your middleware is not allowed. "+"Other middleware would not be applied to this dispatch.")};var o={getState:r.getState,dispatch:function e(){return n.apply(void 0,arguments)}};var i=t.map((function(e){return e(o)}));n=J.apply(void 0,i)(r.dispatch);return K({},r,{dispatch:n})}}}var X=b((function(e,t){!function(e,r){r(t)}(w,(function(e){function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function s(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":A(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function c(e,t,r,f,l,h,p){l=l||[],p=p||[];var d=l.slice(0);if("undefined"!=typeof h){if(f){if("function"==typeof f&&f(d,h))return;if("object"===("undefined"==typeof f?"undefined":A(f))){if(f.prefilter&&f.prefilter(d,h))return;if(f.normalize){var v=f.normalize(d,h,e,t);v&&(e=v[0],t=v[1])}}}d.push(h)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var g="undefined"==typeof e?"undefined":A(e),y="undefined"==typeof t?"undefined":A(t),b="undefined"!==g||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(h),m="undefined"!==y||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(h);if(!b&&m)r(new o(d,t));else if(!m&&b)r(new i(d,e));else if(u(e)!==u(t))r(new n(d,e,t));else if("date"===u(e)&&e-t!==0)r(new n(d,e,t));else if("object"===g&&null!==e&&null!==t)if(p.filter((function(t){return t.lhs===e})).length)e!==t&&r(new n(d,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(w=0;w<e.length;w++)w>=t.length?r(new a(d,w,new i(void 0,e[w]))):c(e[w],t[w],r,f,d,w,p);for(;w<t.length;)r(new a(d,w,new o(void 0,t[w++])))}else{var S=Object.keys(e),O=Object.keys(t);S.forEach((function(n,o){var i=O.indexOf(n);i>=0?(c(e[n],t[n],r,f,d,n,p),O=s(O,i)):c(e[n],void 0,r,f,d,n,p)})),O.forEach((function(e){c(void 0,t[e],r,f,d,e,p)}))}p.length=p.length-1}else e!==t&&("number"===g&&isNaN(e)&&isNaN(t)||r(new n(d,e,t)))}function f(e,t,r,n){return n=n||[],c(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function l(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":l(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":l(e[t],r.index,r.item);break;case"D":e=s(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function h(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":l(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=s(e,t)}return e}function d(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function v(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||h(e,t,n)};c(e,t,n)}}function g(e){return"color: "+N[e].color+"; font-weight: bold"}function y(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=f(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=y(e);r.log.apply(r,["%c "+N[t].text,g(t)].concat(I(n)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":A(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,I(r)):e[n];case"function":return e(t);default:return e}}function S(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function O(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?S(t):o,a=t.collapsed,s=t.colors,u=t.level,c=t.diff,f="undefined"==typeof t.titleFormatter;e.forEach((function(o,l){var h=o.started,p=o.startedTime,d=o.action,v=o.prevState,g=o.error,y=o.took,w=o.nextState,S=e[l+1];S&&(w=S.prevState,y=S.started-h);var O=n(d),E="function"==typeof a?a((function(){return w}),d,o):a,T=k(p),x=s.title?"color: "+s.title(O)+";":"",j=["color: gray; font-weight: lighter;"];j.push(x),t.timestamp&&j.push("color: gray; font-weight: lighter;"),t.duration&&j.push("color: gray; font-weight: lighter;");var P=i(O,T,y);try{E?s.title&&f?r.groupCollapsed.apply(r,["%c "+P].concat(j)):r.groupCollapsed(P):s.title&&f?r.group.apply(r,["%c "+P].concat(j)):r.group(P)}catch(e){r.log(P)}var _=m(u,O,[v],"prevState"),A=m(u,O,[O],"action"),I=m(u,O,[g,v],"error"),D=m(u,O,[w],"nextState");if(_)if(s.prevState){var N="color: "+s.prevState(v)+"; font-weight: bold";r[_]("%c prev state",N,v)}else r[_]("prev state",v);if(A)if(s.action){var L="color: "+s.action(O)+"; font-weight: bold";r[A]("%c action    ",L,O)}else r[A]("action    ",O);if(g&&I)if(s.error){var M="color: "+s.error(g,v)+"; font-weight: bold;";r[I]("%c error     ",M,g)}else r[I]("error     ",g);if(D)if(s.nextState){var C="color: "+s.nextState(w)+"; font-weight: bold";r[D]("%c next state",C,w)}else r[D]("next state",w);c&&b(v,w,r,E);try{r.groupEnd()}catch(e){r.log("—— log end ——")}}))}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,s=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(c){if("function"==typeof i&&!i(r,c))return e(c);var f={};u.push(f),f.started=_.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=c;var l=void 0;if(a)try{l=e(c)}catch(e){f.error=o(e)}else l=e(c);f.took=_.now()-f.started,f.nextState=n(r());var h=t.diff&&"function"==typeof s?s(r,c):t.diff;if(O(u,Object.assign({},t,{diff:h})),u.length=0,f.error)throw f.error;return l}}}}var T,x,j=function(e,t){return new Array(t+1).join(e)},P=function(e,t){return j("0",t-e.toString().length)+e},k=function(e){return P(e.getHours(),2)+":"+P(e.getMinutes(),2)+":"+P(e.getSeconds(),2)+"."+P(e.getMilliseconds(),3)},_="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},D=[];T="object"===("undefined"==typeof w?"undefined":A(w))&&w?w:"undefined"!=typeof window?window:{},x=T.DeepDiff,x&&D.push((function(){"undefined"!=typeof x&&T.DeepDiff===f&&(T.DeepDiff=x,x=void 0)})),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:v,enumerable:!0},applyChange:{value:h,enumerable:!0},revertChange:{value:d,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof x},enumerable:!0},noConflict:{value:function(){return D&&(D.forEach((function(e){e()})),D=null),f},enumerable:!0}});var N={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?E()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=E,e.logger=M,e.default=M,Object.defineProperty(e,"__esModule",{value:!0})}))}));m(X);function Z(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){if(typeof o==="function"){return o(r,n,e)}return t(o)}}}}var $=Z();$.withExtraArgument=Z;var ee=function(e,t){if(e===void 0){e={coeffs:null,interpTimeSeries:null,timeSeries:null}}switch(t.type){case"SET_COEFFS":{var r=t.payload;return Object.assign(Object.assign({},e),{coeffs:r})}case"SET_INTERP_TIME_SERIES":{var n=t.payload;return Object.assign(Object.assign({},e),{interpTimeSeries:n})}case"SET_TIME_SERIES":{var o=t.payload;return Object.assign(Object.assign({},e),{timeSeries:o})}default:{return e}}};var te=W({data:ee});var re=[$];var ne=q(te,Q.apply(void 0,re));var oe="app-root strc-progress-bar{position:fixed;z-index:6}";var ie=e("app_root",function(){function e(e){t(this,e);this.setCoeffs=function(){};this.setInterpTimeSeries=function(){};this.setTimeSeries=function(){};this.store=r(this,"store")}e.prototype.handleInterpTimeSeries=function(e){var t=null;if(e){var r=e.map((function(e){return e[1]}));t=y.transform(r)}this.setCoeffs(t)};e.prototype.handleTimeSeries=function(e){var t=null;if(e)t=D.interpTimeSeries(e);this.setInterpTimeSeries(t)};e.prototype.componentWillLoad=function(){this.initStore()};e.prototype.componentDidLoad=function(){this.loadData()};e.prototype.initStore=function(){this.store.setStore(ne);this.store.mapStateToProps(this,(function(e){var t=e.data.coeffs;var r=e.data.interpTimeSeries;var n=e.data.timeSeries;return{coeffs:t,interpTimeSeries:r,timeSeries:n}}));this.store.mapDispatchToProps(this,{setCoeffs:N,setInterpTimeSeries:L,setTimeSeries:M})};e.prototype.loadData=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){return[2,D.getData().then((function(t){return e.setTimeSeries(t)}))]}))}))};e.prototype.progress=function(){var e=this;var t=1;var r=["coeffs","interpTimeSeries","timeSeries"];var n=r.reduce((function(t,r){return e[r]===null||e[r]===undefined?t:t+1}),0);return(n+t)/(r.length+t)};e.prototype.render=function(){var e=this.progress();return n("div",null,n("strc-progress-bar",{class:e<1?null:"fade-out",progress:e}),n("stencil-router",null,n("stencil-route-switch",null,n("stencil-route",{component:"page-dashboard",exact:true,url:"/"}))))};Object.defineProperty(e,"watchers",{get:function(){return{interpTimeSeries:["handleInterpTimeSeries"],timeSeries:["handleTimeSeries"]}},enumerable:true,configurable:true});return e}());ie.style=oe;var ae="stencil-route.inactive{display:none}";var se=e("stencil_route",function(){function e(e){t(this,e);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}e.prototype.computeMatch=function(e){var t=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!e||t){return}this.previousMatch=this.match;return this.match=a(e.pathname,{path:this.url,exact:this.exact,strict:true})};e.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e={};if(this.history&&this.history.location.hash){e={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){e={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(e)}else if(this.match&&!s(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(e)}return[2]}))}))};e.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.render=function(){if(!this.match||!this.history){return null}var e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},e,{component:this.component}))}if(this.component){var t=this.component;return n(t,Object.assign({},e))}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return e}());i.injectProps(se,["location","history","historyType","routeViewsUpdated"]);se.style=ae;var ue=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var ce=function(e,t,r){return a(e,{path:t,exact:r,strict:true})};var fe=function(e){return e.tagName==="STENCIL-ROUTE"};var le=e("stencil_route_switch",function(){function e(e){t(this,e);this.group=ue();this.subscribers=[];this.queue=r(this,"queue")}e.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};e.prototype.regenerateSubscribers=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;var n=this;return __generator(this,(function(o){if(e==null){return[2]}t=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(fe).map((function(r,n){var o=ce(e.pathname,r.url,r.exact);if(o&&t===-1){t=n}return{el:r,match:o}}));if(t===-1){return[2]}if(this.activeIndex===t){this.subscribers[t].el.match=this.subscribers[t].match;return[2]}this.activeIndex=t;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(e){n.queue.write((function(){n.subscribers.forEach((function(e,t){e.el.componentUpdated=undefined;if(t===n.activeIndex){return e.el.style.display=""}if(n.scrollTopOffset){e.el.scrollTopOffset=n.scrollTopOffset}e.el.group=n.group;e.el.match=null;e.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},e))}};return[2]}))}))};e.prototype.render=function(){return n("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return e}());i.injectProps(le,["location","routeViewsUpdated"]);var he=function(e){var t=[];for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}if(!e){console.warn.apply(console,t)}};var pe=function(){var e;var t=[];var r=function(t){he(e==null,"A history supports only one prompt at a time");e=t;return function(){if(e===t){e=null}}};var n=function(t,r,n,o){if(e!=null){var i=typeof e==="function"?e(t,r):e;if(typeof i==="string"){if(typeof n==="function"){n(i,o)}else{he(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(e){var r=true;var n=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}if(r){e.apply(void 0,t)}};t.push(n);return function(){r=false;t=t.filter((function(e){return e!==n}))}};var i=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}t.forEach((function(t){return t.apply(void 0,e)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:o,notifyListeners:i}};var de=function(e,t){if(t===void 0){t="scrollPositions"}var r=new Map;var n=function(t,n){r.set(t,n);if(S(e,"sessionStorage")){var o=[];r.forEach((function(e,t){o.push([t,e])}));e.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(e){return r.get(e)};var i=function(e){return r.has(e)};var a=function(t){n(t,[e.scrollX,e.scrollY])};if(S(e,"sessionStorage")){var s=e.sessionStorage.getItem(t);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in e.history){history.scrollRestoration="manual"}return{set:n,get:o,has:i,capture:a}};var ve="popstate";var ge="hashchange";var ye=function(e,t){if(t===void 0){t={}}var r=false;var n=e.history;var o=e.location;var i=e.navigator;var a=O(e);var s=!E(i);var v=de(e);var g=t.forceRefresh!=null?t.forceRefresh:false;var y=t.getUserConfirmation!=null?t.getUserConfirmation:T;var b=t.keyLength!=null?t.keyLength:6;var m=t.basename?u(c(t.basename)):"";var w=function(){try{return e.history.state||{}}catch(t){return{}}};var S=function(e){e=e||{};var t=e.key,r=e.state;var n=o.pathname,i=o.search,a=o.hash;var s=n+i+a;he(!m||h(s,m),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+m+'".');if(m){s=p(s,m)}return f(s,r,t||l(b))};var j=pe();var P=function(e){v.capture(W.location.key);Object.assign(W,e);W.location.scrollPosition=v.get(W.location.key);W.length=n.length;j.notifyListeners(W.location,W.action)};var k=function(e){if(!x(i,e)){A(S(e.state))}};var _=function(){A(S(w()))};var A=function(e){if(r){r=false;P()}else{var t="POP";j.confirmTransitionTo(e,t,y,(function(r){if(r){P({action:t,location:e})}else{I(e)}}))}};var I=function(e){var t=W.location;var n=N.indexOf(t.key);var o=N.indexOf(e.key);if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;F(i)}};var D=S(w());var N=[D.key];var L=0;var M=false;var C=function(e){return m+d(e)};var R=function(e,t){he(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var i=f(e,t,l(b),W.location);j.confirmTransitionTo(i,r,y,(function(e){if(!e){return}var t=C(i);var s=i.key,u=i.state;if(a){n.pushState({key:s,state:u},"",t);if(g){o.href=t}else{var c=N.indexOf(W.location.key);var f=N.slice(0,c===-1?0:c+1);f.push(i.key);N=f;P({action:r,location:i})}}else{he(u===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=t}}))};var U=function(e,t){he(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var i=f(e,t,l(b),W.location);j.confirmTransitionTo(i,r,y,(function(e){if(!e){return}var t=C(i);var s=i.key,u=i.state;if(a){n.replaceState({key:s,state:u},"",t);if(g){o.replace(t)}else{var c=N.indexOf(W.location.key);if(c!==-1){N[c]=i.key}P({action:r,location:i})}}else{he(u===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(t)}}))};var F=function(e){n.go(e)};var H=function(){return F(-1)};var V=function(){return F(1)};var q=function(t){L+=t;if(L===1){e.addEventListener(ve,k);if(s){e.addEventListener(ge,_)}}else if(L===0){e.removeEventListener(ve,k);if(s){e.removeEventListener(ge,_)}}};var B=function(e){if(e===void 0){e=""}var t=j.setPrompt(e);if(!M){q(1);M=true}return function(){if(M){M=false;q(-1)}return t()}};var Y=function(e){var t=j.appendListener(e);q(1);return function(){q(-1);t()}};var W={length:n.length,action:"POP",location:D,createHref:C,push:R,replace:U,go:F,goBack:H,goForward:V,block:B,listen:Y,win:e};return W};var be="hashchange";var me={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+v(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:v,decodePath:c},slash:{encodePath:c,decodePath:c}};var we=function(e,t){if(t===void 0){t={}}var r=false;var n=null;var o=0;var i=false;var a=e.location;var s=e.history;var v=j(e.navigator);var y=t.keyLength!=null?t.keyLength:6;var b=t.getUserConfirmation,m=b===void 0?T:b,w=t.hashType,S=w===void 0?"slash":w;var O=t.basename?u(c(t.basename)):"";var E=me[S],x=E.encodePath,P=E.decodePath;var k=function(){var e=a.href;var t=e.indexOf("#");return t===-1?"":e.substring(t+1)};var _=function(e){return a.hash=e};var A=function(e){var t=a.href.indexOf("#");a.replace(a.href.slice(0,t>=0?t:0)+"#"+e)};var I=function(){var e=P(k());he(!O||h(e,O),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+e+'" to begin with "'+O+'".');if(O){e=p(e,O)}return f(e,undefined,l(y))};var D=pe();var N=function(e){Object.assign(Q,e);Q.length=s.length;D.notifyListeners(Q.location,Q.action)};var L=function(){var e=k();var t=x(e);if(e!==t){A(t)}else{var o=I();var i=Q.location;if(!r&&g(i,o)){return}if(n===d(o)){return}n=null;M(o)}};var M=function(e){if(r){r=false;N()}else{var t="POP";D.confirmTransitionTo(e,t,m,(function(r){if(r){N({action:t,location:e})}else{C(e)}}))}};var C=function(e){var t=Q.location;var n=H.lastIndexOf(d(t));var o=H.lastIndexOf(d(e));if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;Y(i)}};var R=k();var U=x(R);if(R!==U){A(U)}var F=I();var H=[d(F)];var V=function(e){return"#"+x(O+d(e))};var q=function(e,t){he(t===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var o=f(e,undefined,l(y),Q.location);D.confirmTransitionTo(o,r,m,(function(e){if(!e){return}var t=d(o);var i=x(O+t);var a=k()!==i;if(a){n=t;_(i);var s=H.lastIndexOf(d(Q.location));var u=H.slice(0,s===-1?0:s+1);u.push(t);H=u;N({action:r,location:o})}else{he(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");N()}}))};var B=function(e,t){he(t===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var o=f(e,undefined,l(y),Q.location);D.confirmTransitionTo(o,r,m,(function(e){if(!e){return}var t=d(o);var i=x(O+t);var a=k()!==i;if(a){n=t;A(i)}var s=H.indexOf(d(Q.location));if(s!==-1){H[s]=t}N({action:r,location:o})}))};var Y=function(e){he(v,"Hash history go(n) causes a full page reload in this browser");s.go(e)};var W=function(){return Y(-1)};var G=function(){return Y(1)};var z=function(e,t){o+=t;if(o===1){e.addEventListener(be,L)}else if(o===0){e.removeEventListener(be,L)}};var K=function(t){if(t===void 0){t=""}var r=D.setPrompt(t);if(!i){z(e,1);i=true}return function(){if(i){i=false;z(e,-1)}return r()}};var J=function(t){var r=D.appendListener(t);z(e,1);return function(){z(e,-1);r()}};var Q={length:s.length,action:"POP",location:F,createHref:V,push:q,replace:B,go:Y,goBack:W,goForward:G,block:K,listen:J,win:e};return Q};var Se=function(e,t){var r=e.pathname.indexOf(t)==0?"/"+e.pathname.slice(t.length):e.pathname;return Object.assign({},e,{pathname:r})};var Oe={browser:ye,hash:we};var Ee=e("stencil_router",function(){function e(e){var n=this;t(this,e);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(e){if(e===void 0){e={}}if(n.history&&e.scrollToId&&n.historyType==="browser"){var t=n.history.win.document.getElementById(e.scrollToId);if(t){return t.scrollIntoView()}}n.scrollTo(e.scrollTopOffset||n.scrollTopOffset)};this.isServer=r(this,"isServer");this.queue=r(this,"queue")}e.prototype.componentWillLoad=function(){var e=this;this.history=Oe[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(t){t=Se(t,e.root);e.location=t}));this.location=Se(this.history.location,this.root)};e.prototype.scrollTo=function(e){var t=this.history;if(e==null||this.isServer||!t){return}if(t.action==="POP"&&Array.isArray(t.location.scrollPosition)){return this.queue.write((function(){if(t&&t.location&&Array.isArray(t.location.scrollPosition)){t.win.scrollTo(t.location.scrollPosition[0],t.location.scrollPosition[1])}}))}return this.queue.write((function(){t.win.scrollTo(0,e)}))};e.prototype.render=function(){if(!this.location||!this.history){return}var e={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return n(i.Provider,{state:e},n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());var Te=":host{background-color:#cccccc;background-color:var(--strc-progress-bar-background-color, #cccccc);display:block;height:2px;height:var(--strc-progress-bar-height, 2px);width:100%}div{background-color:#000000;background-color:var(--strc-progress-bar-color, #000000);height:100%;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-transition-duration:var(--strc-progress-bar-transition-duration, 0.2s);transition-duration:var(--strc-progress-bar-transition-duration, 0.2s);-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}";var xe=e("strc_progress_bar",function(){function e(e){t(this,e);this.progress=0}e.prototype.handleProgress=function(e){this.progress=Math.max(0,Math.min(1,e))};e.prototype.componentWillLoad=function(){this.handleProgress(this.progress)};e.prototype.render=function(){return n("div",{style:{width:this.progress*100+"%"}})};Object.defineProperty(e,"watchers",{get:function(){return{progress:["handleProgress"]}},enumerable:true,configurable:true});return e}());xe.style=Te}}}));