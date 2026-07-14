"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var c=v(function(C,d){
function E(e,r,u,a,s,i,R,_){var t,n,o;if(e<=0)return i;for(t=s,n=_,o=0;o<e;o++)r+=u[t],i[n]=r,t+=a,n+=R;return i}d.exports=E
});var p=v(function(D,m){
var f=require('@stdlib/strided-base-stride2offset/dist'),O=c();function b(e,r,u,a,s,i){return O(e,r,u,a,f(e,a),s,i,f(e,i)),s}m.exports=b
});var y=v(function(F,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),h=c();g(x,"ndarray",h);j.exports=x
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=y(),q,l=w(k(__dirname,"./native.js"));z(l)?q=A:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
