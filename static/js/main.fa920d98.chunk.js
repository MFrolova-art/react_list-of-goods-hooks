(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(9),a=n(1),u=(n(14),n(15),n(4)),l=n.n(u),b=n(8),h=n(0);!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),u=Object(r.a)(o,2),j=u[0],d=u[1],N=n||j!==s.NONE,O=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),console.log(n,c),o}(b,{sortType:j,isReversed:n});return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){return d(s.ALPHABET)},type:"button",className:l()("button is-info",{"is-light":j!==s.ALPHABET}),children:"Sort alphabetically"}),Object(h.jsx)("button",{onClick:function(){return d(s.LENGTH)},type:"button",className:l()("button is-success",{"is-light":j!==s.LENGTH}),children:"Sort by length"}),Object(h.jsx)("button",{onClick:function(){return c(!n)},type:"button",className:l()("button is-warning",{"is-light":!n}),children:"Reverse"}),N&&Object(h.jsx)("button",{onClick:function(){c(!1),d(s.NONE)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(h.jsx)("ul",{children:O.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))},8:function(t){t.exports=JSON.parse('["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]')}},[[17,1,2]]]);
//# sourceMappingURL=main.fa920d98.chunk.js.map