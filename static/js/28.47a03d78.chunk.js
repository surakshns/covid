(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[28],{102:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,a,c;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(a=n;0!==a--;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,c[a]))return!1;for(a=n;0!==a--;){var i=c[a];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}},131:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(26);function a(t,e){var r;if(void 0===e){var a,c=Object(n.a)(t);try{for(c.s();!(a=c.n()).done;){var i=a.value;null!=i&&(r<i||void 0===r&&i>=i)&&(r=i)}}catch(l){c.e(l)}finally{c.f()}}else{var o,u=-1,s=Object(n.a)(t);try{for(s.s();!(o=s.n()).done;){var f=o.value;null!=(f=e(f,++u,t))&&(r<f||void 0===r&&f>=f)&&(r=f)}}catch(l){s.e(l)}finally{s.f()}}return r}},170:function(t,e,r){"use strict";r.r(e);var n=r(51),a=r(10),c=r(25),i=r(104),o=r.n(i),u=r(131),s=r(129),f=r(283),l=r(153),j=r(263),d=r(177),b=r(265),O=(r(117),r(76)),h=r(91),v=r(102),p=r.n(v),y=r(2),g=r(126),m=r(20),k=10,x=10,w=2,M=10;function A(t){var e=t.timeseries,r=t.date,i=Object(y.useRef)([]),v=r||Object(c.g)(),p=Object(g.a)(),A=Object(n.a)(p,2),R=A[0],S=A[1].width;S=Math.min(S,120);var C=Object(y.useMemo)((function(){var t=Object.keys(e||{}).filter((function(t){return t<=v})),r=t[t.length-1],n=Object(O.a)(Object(h.a)(Object(c.j)(r),a.s),{representation:"date"});return t.filter((function(t){return t>=n}))}),[v,e]),E=Object(y.useCallback)((function(t,r){return Object(c.h)(null===e||void 0===e?void 0:e[t],"delta",r)}),[e]);return Object(y.useEffect)((function(){if(S){var t=C.length,e=S-x,r=75-w,n=Object(f.a)().clamp(!0).domain([Object(c.j)(C[0]||v),Object(c.j)(C[t-1])||v]).range([M,e]);i.current.forEach((function(e,i){var o,f=Object(j.a)(e),O=a.j[i],h=a.y[O].color,v=Object(u.a)(C,(function(t){return Math.abs(E(t,O))})),p=Object(l.a)().clamp(!0).domain([-v,v]).range([r,k]),y=Object(d.a)().curve(b.a).x((function(t){return n(Object(c.j)(t))})).y((function(t){return p(E(t,O))}));f.selectAll("path").data(t?[C]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",h+"99").attr("stroke-width",2.5).attr("d",y).attr("stroke-dasharray",(function(){return o=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",o).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(j.a)(this).attr("d"),r=y(t);return Object(s.a)(e,r)})).selection()})),f.selectAll("circle").data(t?[C[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",h).attr("r",2.5).attr("cx",(function(t){return n(Object(c.j)(t))})).attr("cy",(function(t){return p(E(t,O))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return n(Object(c.j)(t))})).attr("cy",(function(t){return p(E(t,O))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return n(Object(c.j)(t))})).attr("cy",(function(t){return p(E(t,O))})).style("opacity",1).selection()}))}))}}),[v,C,S,E]),Object(m.jsx)("div",{className:"Minigraph",children:a.j.map((function(t,e){return Object(m.jsx)("div",{className:o()("svg-parent"),ref:0===e?R:null,style:{width:"calc(".concat(100/a.j.length,"%)")},children:Object(m.jsx)("svg",{ref:function(t){i.current[e]=t},preserveAspectRatio:"xMidYMid meet",width:S,height:75})},t)}))})}var R=function(t,e){return!e.forceRender&&(!(e.timeseries||!t.timeseries)||!(e.timeseries&&!t.timeseries)&&(!!p()(e.stateCode,t.stateCode)&&!!p()(e.date,t.date)))};e.default=Object(y.memo)(A,R)}}]);
//# sourceMappingURL=28.47a03d78.chunk.js.map