// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,l=o.__lookupSetter__;function c(e,t,r,o,n,i){var a,u,l;if(e<=0)return n;for(a=o<0?(1-e)*o:0,u=i<0?(1-e)*i:0,l=0;l<e;l++)t+=r[a],n[u]=t,a+=o,u+=i;return n}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n,i,a,u){var l,c,f;if(e<=0)return i;for(l=n,c=u,f=0;f<e;f++)t+=r[l],i[c]=t,l+=o,c+=a;return i}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dcusumors=t();
//# sourceMappingURL=index.js.map
