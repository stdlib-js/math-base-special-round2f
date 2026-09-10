"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var n=s(function(m,v){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-infinitef/dist'),p=require('@stdlib/math-base-special-frexpf/dist'),f=require('@stdlib/math-base-special-ldexpf/dist'),c=require('@stdlib/math-base-special-absf/dist'),t=require('@stdlib/number-float64-base-to-float32/dist');function d(r){var e,i,u,a;return r=t(r),q(r)||o(r)||r===0?r:(i=p(c(r)),e=i[0],u=i[1],e<.75?a=f(1,u-1):a=f(1,u),r<0?t(-a):a)}v.exports=d
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
