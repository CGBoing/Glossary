(this["webpackJsonpjopis-glossary"]=this["webpackJsonpjopis-glossary"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(8),s=c.n(a),r=(c(14),c(2)),l=c(3),o=c(5),j=c(4),b=c(0),p=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).onClick=function(){var t=e.props,c=t.label;(0,t.onClick)(c)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props,c=t.activeTab,i=t.label,n="tab-list-item";return c===i&&(n+=" tab-list-active"),Object(b.jsx)("li",{className:n,onClick:e,children:i})}}]),c}(i.Component),d=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var i;return Object(r.a)(this,c),(i=t.call(this,e)).onClickTabItem=function(e){i.setState({activeTab:e})},i.state={activeTab:i.props.children[0].props.label},i}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,c=this.state.activeTab;return Object(b.jsxs)("div",{className:"tabs",children:[Object(b.jsx)("ol",{className:"tab-list",children:t.map((function(t){var i=t.props.label;return Object(b.jsx)(p,{activeTab:c,label:i,onClick:e},i)}))}),Object(b.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===c)return e.props.children}))})]})}}]),c}(i.Component),h=(c(16),c(9)),O=c(6),u=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).onClick=function(){e.props.onClick(e.props.label)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props,c=t.isOpen,i=t.label;return Object(b.jsxs)("div",{style:{"border-top":"1px solid #8f8f68",padding:"5px 10px"},children:[Object(b.jsxs)("div",{onClick:e,style:{cursor:"pointer"},children:[i,Object(b.jsxs)("div",{style:{float:"right"},children:[!c&&Object(b.jsx)("span",{children:"\u25b2"}),c&&Object(b.jsx)("span",{children:"\u25bc"})]})]}),c&&Object(b.jsx)("div",{style:{marginTop:10,padding:"10px 20px"},children:this.props.children})]})}}]),c}(i.Component),x=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var i;Object(r.a)(this,c),(i=t.call(this,e)).onClick=function(e){var t=!!Object(O.a)(i).state.openSections[e];i.setState({openSections:Object(h.a)({},e,!t)})};return i.state={openSections:{}},i}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props.children,c=this.state.openSections;return Object(b.jsx)("div",{style:{},children:t.map((function(t){return Object(b.jsx)(u,{isOpen:!!c[t.props.label],label:t.props.label,onClick:e,children:t.props.children})}))})}}]),c}(i.Component),m=c.p+"static/media/appealtoauthority.a7181bef.jpg",f=c.p+"static/media/bandwagon.f88462a9.jpg",v=c.p+"static/media/strawman.bc058b0a.jpg",g=c.p+"static/media/adhominem.c9e53d06.jpg",y=c.p+"static/media/appealtonature.7b3a34fb.jpg";var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Glossaries of Stuff"}),Object(b.jsxs)(d,{children:[Object(b.jsxs)("div",{label:"Statistics",children:[Object(b.jsx)("h2",{children:"Basic statistical concepts"}),Object(b.jsxs)(x,{children:[Object(b.jsx)("div",{label:"Student's t test",children:Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"Coming soon."})})}),Object(b.jsx)("div",{label:"Analysis of Variance",children:Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"Coming soon."})})})]})]}),Object(b.jsxs)("div",{label:"Fallacies",children:[Object(b.jsx)("h2",{children:"Logical fallacies in argumentation"}),"These are the most common fallacious arguments you should ",Object(b.jsx)("i",{children:"usually"})," avoid. These are adapted from ",Object(b.jsx)("a",{href:"https://yourlogicalfallacyis.com",children:"YourLogicalFallacyIs.com"}),".",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(x,{children:[Object(b.jsx)("div",{label:"Appeal to Authority",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:m,alt:"Appeal to Authority"})})}),Object(b.jsx)("div",{label:"Argument from Popularity / Bandwagon",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:f,alt:"Bandwagon"})})}),Object(b.jsx)("div",{label:"Ad Hominem",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:g,alt:"Ad Hominem"})})}),Object(b.jsx)("div",{label:"Strawman",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:v,alt:"Strawman"})})}),Object(b.jsx)("div",{label:"Appeal to Nature",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:y,alt:"Appeal to Nature"})})})]})]}),Object(b.jsxs)("div",{label:"About",children:[Object(b.jsx)("h2",{children:"What am I looking at?"}),"The motivations for creating this site are manifold: mainly to learn and revise Web app development techniques, React specifically.",Object(b.jsx)("br",{}),"Secondly, act as a glossary of things that might interest me at any given time - a so-called personal learning platform or reference, if you will.",Object(b.jsx)("br",{}),'Thirdly, it is sort of a UI/UX "test lab", so expect drastic changes and other whimsiness.',Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{children:"Jopi Mikkonen"})]})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.2074ea35.chunk.js.map