"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=v(function(C,d){
function E(e,r,s,u,a,i,R,_){var t,n,o;if(e<=0)return i;for(t=a,n=_,o=0;o<e;o++)r+=s[t],i[n]=r,t+=u,n+=R;return i}d.exports=E
});var p=v(function(D,m){
var f=require('@stdlib/strided-base-stride2offset/dist'),O=c();function b(e,r,s,u,a,i){return O(e,r,s,u,f(e,u),a,i,f(e,i)),a}m.exports=b
});var y=v(function(F,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),h=c();g(x,"ndarray",h);j.exports=x
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=y(),q,l=w(k(__dirname,"./native.js"));z(l)?q=A:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
