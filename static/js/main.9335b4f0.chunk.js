(this.webpackJsonptodolistapp=this.webpackJsonptodolistapp||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(6),s=n.n(i),r=(n(12),n(7)),a=n(5),o=n(0);var j=function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo_style",children:[Object(o.jsx)("i",{className:"fas fa-times",onClick:function(){t.onSelect(t.id)}}),Object(o.jsx)("li",{children:t.text})]})})};var l=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)([]),l=Object(a.a)(s,2),u=l[0],d=l[1],b=function(t){d((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main_div",children:Object(o.jsxs)("div",{className:"center_div",children:[Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsx)("input",{type:"text",placeholder:"Add an Item",value:n,onChange:function(t){i(t.target.value)}}),Object(o.jsx)("button",{onClick:function(){""!=n&&d((function(t){return[].concat(Object(r.a)(t),[n])})),i("")},children:" + "}),Object(o.jsx)("ol",{children:u.map((function(t,e){return Object(o.jsx)(j,{id:e,text:t,onSelect:b},e)}))})]})})})};s.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9335b4f0.chunk.js.map