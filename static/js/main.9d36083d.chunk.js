(this["webpackJsonpzanehitchcox.com"]=this["webpackJsonpzanehitchcox.com"]||[]).push([[0],{33:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},48:function(e,c,t){},49:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t(1),i=t.n(s),r=t(24),j=t.n(r),a=(t(33),t(12)),l=t(11),d=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:"top-nav",children:Object(n.jsxs)("ul",{className:"menu",children:[Object(n.jsx)(a.b,{to:"/",children:Object(n.jsx)("li",{className:"logo",children:"Zane Hitchcox"})}),Object(n.jsx)("li",{className:"space"}),Object(n.jsx)("a",{href:"https://github.com/zwhitchcox",children:Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{})})}),Object(n.jsx)("a",{href:"mailto:zwhitchcox@gmail.com",children:Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{})})}),Object(n.jsx)("a",{href:"tel:+18652360804",children:Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{})})}),Object(n.jsx)("a",{onClick:window.print,children:Object(n.jsx)("li",{children:Object(n.jsx)(l.d,{})})}),Object(n.jsx)("a",{href:"https://github.com/zwhitchcox?tab=repositories&q=ref-&type=&language=",children:Object(n.jsx)("li",{className:"item",children:"Refs"})})]})})})},h=t(18),o=t.n(h),b=t(26),x=t(13),O=t(19),u=t(27),m=t.n(u),p=(t(46),function(e){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Skills/Interests"}),Object(n.jsx)("ul",{className:"skills",children:e.skills.map((function(e){return Object(n.jsx)("li",{children:e})}))})]})}),f=function(e){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Open Source"}),Object(n.jsxs)("div",{className:"lists",children:[Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("p",{children:"Creator/Maintainer"}),Object(n.jsx)("ul",{children:e.open_source.creator.map((function(e){var c=e.name,t=e.link;return Object(n.jsx)("a",{href:t,children:Object(n.jsx)("li",{children:c})})}))})]}),Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("p",{children:"Contributor"}),Object(n.jsx)("ul",{children:e.open_source.contributor.map((function(e){var c=e.name,t=e.link;return Object(n.jsx)("a",{href:t,children:Object(n.jsx)("li",{children:c})})}))})]})]})]})},v=function(e){var c=e.jobs,t=e.duration;return Object(n.jsxs)("div",{className:"experience contractor-experience",children:[Object(n.jsxs)("div",{className:"general",children:[Object(n.jsx)("div",{children:Object(n.jsx)("i",{children:"Contractor"})}),Object(n.jsxs)("div",{children:["(",t,")"]})]}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("ul",{children:c.map((function(e){var c=e.company,t=e.title,s=e.description;return Object(n.jsxs)("li",{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{children:c})," - ",t]}),Object(n.jsx)("p",{children:s})]})}))})})]})},N=function(e){var c=e.company,t=e.title,s=e.duration,i=e.description;return Object(n.jsxs)("div",{className:"experience employee-experience",children:[Object(n.jsxs)("div",{className:"general",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("i",{children:c})," - ",t]}),Object(n.jsxs)("div",{children:["(",s,")"]})]}),Object(n.jsx)("div",{className:"description",children:i})]})},g=function(e){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Work Experience"}),e.experience.map((function(e){return"employee"===e.type?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(N,Object(O.a)({},e))}):"contractor"===e.type?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(v,Object(O.a)({},e))}):void 0}))]})},w=function(e){var c=e.education;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h3",{children:"Education"}),c.map((function(e){var c=e.school,t=e.location,s=e.graduation,i=e.degree,r=e.major,j=e.minor;return Object(n.jsxs)("div",{className:"education",children:[Object(n.jsxs)("div",{className:"general",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("i",{children:[c,", ",t]})}),Object(n.jsxs)("div",{className:"graduation",children:["(",s,")"]})]}),Object(n.jsxs)("div",{className:"degree",children:[Object(n.jsx)("div",{children:i}),Object(n.jsxs)("div",{className:"major",children:["Major: ",r,", Collateral: ",j]})]})]})}))]})},y=function(){var e,c=s.useState({}),t=Object(x.a)(c,2),i=t[0],r=t[1],j=s.useState(!0),a=Object(x.a)(j,2),l=a[0],d=a[1],h=s.useState(""),O=Object(x.a)(h,2),u=O[0],v=O[1],N=function(){var e=Object(b.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/resume.yml");case 2:return c=e.sent,e.next=5,c.text();case 5:if(t=e.sent,!(c.status>399)){e.next=8;break}return e.abrupt("return",v(t));case 8:r(m.a.parse(t)),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.useEffect((function(){N()}),[]),u?Object(n.jsxs)("div",{children:["There was an error: ",u]}):l?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsxs)("div",{className:"resume",children:[(e=i,Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"name",children:e.name}),Object(n.jsx)("h2",{className:"title",children:e.title}),Object(n.jsx)("div",{className:"contact-info",children:Object(n.jsx)("div",{className:"contact-line",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:e.addr}),Object(n.jsx)("li",{className:"hide-screen",children:e.phone}),Object(n.jsx)("li",{className:"hide-screen",children:Object(n.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(n.jsx)("li",{className:"hide-screen",children:Object(n.jsx)("a",{href:"https://".concat(e.site),children:e.website})})]})})})]})),Object(n.jsxs)("div",{className:"content",children:[p(i),f(i),g(i),w(i)]})]})},k=(t(47),function(){return Object(n.jsx)("div",{className:"refs",children:Object(n.jsx)("p",{children:"These are references I use so I can copy and paste into my own code when I need to without having to rewrite everything."})})}),C=t(2);t(48);var F=function(){return Object(n.jsx)(a.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsx)("main",{children:Object(n.jsxs)(C.c,{children:[Object(n.jsx)(C.a,{path:"/refs",children:Object(n.jsx)(k,{})}),Object(n.jsx)(C.a,{path:"/",children:Object(n.jsx)(y,{})})]})})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),i(e),r(e)}))};j.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.9d36083d.chunk.js.map