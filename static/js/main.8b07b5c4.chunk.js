(this["webpackJsonpjopis-glossary"]=this["webpackJsonpjopis-glossary"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(8),s=c.n(a),r=(c(14),c(2)),l=c(3),o=c(5),j=c(4),b=c(0),d=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onClick=function(){var t=e.props,c=t.label;(0,t.onClick)(c)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props,c=t.activeTab,n=t.label,i="tab-list-item";return c===n&&(i+=" tab-list-active"),Object(b.jsx)("li",{className:i,onClick:e,children:n})}}]),c}(n.Component),p=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).onClickTabItem=function(e){n.setState({activeTab:e})},n.state={activeTab:n.props.children[0].props.label},n}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,c=this.state.activeTab;return Object(b.jsxs)("div",{className:"tabs",children:[Object(b.jsx)("ol",{className:"tab-list",children:t.map((function(t){var n=t.props.label;return Object(b.jsx)(d,{activeTab:c,label:n,onClick:e},n)}))}),Object(b.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===c)return e.props.children}))})]})}}]),c}(n.Component),h=(c(16),c(9)),O=c(6),u=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onClick=function(){e.props.onClick(e.props.label)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props,c=t.isOpen,n=t.label;return Object(b.jsxs)("div",{style:{"border-top":"1px solid #8f8f68",padding:"5px 10px"},children:[Object(b.jsxs)("div",{onClick:e,style:{cursor:"pointer"},children:[n,Object(b.jsxs)("div",{style:{float:"right"},children:[!c&&Object(b.jsx)("span",{children:"\u25b2"}),c&&Object(b.jsx)("span",{children:"\u25bc"})]})]}),c&&Object(b.jsx)("div",{style:{marginTop:10,padding:"10px 20px"},children:this.props.children})]})}}]),c}(n.Component),x=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var n;Object(r.a)(this,c),(n=t.call(this,e)).onClick=function(e){var t=!!Object(O.a)(n).state.openSections[e];n.setState({openSections:Object(h.a)({},e,!t)})};return n.state={openSections:{}},n}return Object(l.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props.children,c=this.state.openSections;return Object(b.jsx)("div",{style:{},children:t.map((function(t){return Object(b.jsx)(u,{isOpen:!!c[t.props.label],label:t.props.label,onClick:e,children:t.props.children})}))})}}]),c}(n.Component),v=c.p+"static/media/appealtoauthority.cc16505d.jpg",f=c.p+"static/media/bandwagon.1472ee67.jpg";var m=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Glossaries of Stuff"}),Object(b.jsxs)(p,{children:[Object(b.jsxs)("div",{label:"Statistics",children:[Object(b.jsx)("h2",{children:"Basic statistical concepts"}),Object(b.jsxs)(x,{children:[Object(b.jsx)("div",{label:"Student's t test",children:Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"Coming soon."})})}),Object(b.jsx)("div",{label:"Analysis of Variance",children:Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"Coming soon."})})})]})]}),Object(b.jsxs)("div",{label:"Fallacies",children:[Object(b.jsx)("h2",{children:"Logical fallacies in argumentation"}),"These are the most common fallacious arguments you should ",Object(b.jsx)("i",{children:"usually"})," avoid. These are adapted from ",Object(b.jsx)("a",{href:"https://yourlogicalfallacyis.com",children:"YourLogicalFallacyIs.com"}),".",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(x,{children:[Object(b.jsx)("div",{label:"Appeal to Authority",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:v,alt:"Appeal to Authority"})})}),Object(b.jsx)("div",{label:"Argument from Popularity / Bandwagon",children:Object(b.jsx)("p",{children:Object(b.jsx)("img",{src:f,alt:"Bandwagon"})})}),Object(b.jsx)("div",{label:"Ad Hominem",children:Object(b.jsx)("p",{})}),Object(b.jsx)("div",{label:"Strawman",children:Object(b.jsx)("p",{})}),Object(b.jsx)("div",{label:"Appeal to Nature",children:Object(b.jsx)("p",{})})]})]}),Object(b.jsxs)("div",{label:"About",children:[Object(b.jsx)("h2",{children:"What am I looking at?"}),"The motivations for creating this site are manifold: mainly to learn and revise Web app development techniques, React specifically.",Object(b.jsx)("br",{}),"Secondly, act as a glossary of things that might interest me at any given time - a so-called personal learning platform or reference, if you will.",Object(b.jsx)("br",{}),'Thirdly, it is sort of a UI/UX "test lab", so expect drastic changes and other whimsiness.',Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("i",{children:"Jopi Mikkonen"})]})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.8b07b5c4.chunk.js.map