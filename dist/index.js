"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=f(function(A,x){
function _(e,r,v,t,n,i){var a,s,u;if(e<=0)return n;for(t<0?a=(1-e)*t:a=0,i<0?s=(1-e)*i:s=0,u=0;u<e;u++)r+=v[a],n[s]=r,a+=t,s+=i;return n}x.exports=_
});var d=f(function(B,p){
function E(e,r,v,t,n,i,a,s){var u,o,c;if(e<=0)return i;for(u=n,o=s,c=0;c<e;c++)r+=v[u],i[o]=r,u+=t,o+=a;return i}p.exports=E
});var y=f(function(C,j){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=m(),b=d();O(l,"ndarray",b);j.exports=l
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),q,R=h(g(__dirname,"./native.js"));k(R)?q=w:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
