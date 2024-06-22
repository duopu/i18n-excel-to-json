"use strict";function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function e(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}function n(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=i(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}function o(){o=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),c=new A(n||[]);return a(i,"_invoke",{value:j(t,e,c)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",y="suspendedYield",v="executing",d="completed",m={};function g(){}function b(){}function x(){}var w={};f(w,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(F([])));L&&L!==e&&n.call(L,c)&&(w=L);var k=x.prototype=g.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function j(r,e,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?d:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return b.prototype=x,a(k,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},S(_.prototype),f(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(k),f(k,s,"Generator"),f(k,c,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,A.prototype={constructor:A,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function a(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||i(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,e){if(r){if("string"==typeof r)return t(r,e);var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}var c=require("xlsx"),u=require("axios"),s=require("fs"),f=require("path"),l=function(){var t=e(o().mark((function t(r,e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,u.post("https://libretranslate.com/translate",{q:r,source:"zh",target:e,format:"text"});case 4:return n=t.sent,t.abrupt("return",n.data.translatedText);case 8:return t.prev=8,t.t0=t.catch(1),console.error("Error translating text: ".concat(r),t.t0),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(r,e){return t.apply(this,arguments)}}(),h=function(t,r,e){var n=t;r.forEach((function(t,o){o===r.length-1?n[t]=e:(n[t]=n[t]||{},n=n[t])}))},p=function(){var t=e(o().mark((function t(r,e){var n,i,c,u,p,y,v,d,m,g,b,x,w,E,L;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={},i={},c={},u=null,p=1;case 5:if(!(p<e.length)){t.next=70;break}if(y=e[p][0],v=e[p][1],d=e[p][2],m=e[p][3],g=e[p][4],y){t.next=36;break}if(!u||!v){t.next=35;break}if(b=v.split(".").map((function(t){return t.trim()})),h(n,[u].concat(a(b)),d),t.t0=h,t.t1=c,t.t2=[u].concat(a(b)),t.t3=g,t.t3){t.next=23;break}return t.next=22,l(d,"zh-TW");case 22:t.t3=t.sent;case 23:if(t.t4=t.t3,(0,t.t0)(t.t1,t.t2,t.t4),t.t5=h,t.t6=i,t.t7=[u].concat(a(b)),t.t8=m,t.t8){t.next=33;break}return t.next=32,l(d,"en");case 32:t.t8=t.sent;case 33:t.t9=t.t8,(0,t.t5)(t.t6,t.t7,t.t9);case 35:return t.abrupt("continue",67);case 36:if(!y||v){t.next=51;break}if(n[y]=d,t.t10=g,t.t10){t.next=43;break}return t.next=42,l(d,"zh-TW");case 42:t.t10=t.sent;case 43:if(c[y]=t.t10,t.t11=m,t.t11){t.next=49;break}return t.next=48,l(d,"en");case 48:t.t11=t.sent;case 49:i[y]=t.t11,u=y;case 51:if(!y||!v){t.next=67;break}if(x="".concat(y,".").concat(v),n[x]=d,t.t12=g,t.t12){t.next=59;break}return t.next=58,l(d,"zh-TW");case 58:t.t12=t.sent;case 59:if(c[x]=t.t12,t.t13=m,t.t13){t.next=65;break}return t.next=64,l(d,"en");case 64:t.t13=t.sent;case 65:i[x]=t.t13,u=y;case 67:p++,t.next=5;break;case 70:["zh_CN","en_US","zh_TW"].forEach((function(t){s.existsSync(t)||s.mkdirSync(t)})),w=f.join("zh_CN","".concat(r,".json")),E=f.join("en_US","".concat(r,".json")),L=f.join("zh_TW","".concat(r,".json")),s.writeFileSync(w,JSON.stringify(n,null,2),"utf8"),s.writeFileSync(E,JSON.stringify(i,null,2),"utf8"),s.writeFileSync(L,JSON.stringify(c,null,2),"utf8");case 78:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}();(function(){var t=e(o().mark((function t(){var r,e,a,i,u,s,l,h;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=f.join(__dirname,"basic.xls"),e=c.readFile(r),a=e.SheetNames,i=n(a),t.prev=4,i.s();case 6:if((u=i.n()).done){t.next=14;break}return s=u.value,l=e.Sheets[s],h=c.utils.sheet_to_json(l,{header:1}),t.next=12,p(s,h);case 12:t.next=6;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),i.e(t.t0);case 19:return t.prev=19,i.f(),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[4,16,19,22]])})));return function(){return t.apply(this,arguments)}})()().catch((function(t){return console.error(t)}));
//# sourceMappingURL=bundle.js.map
