(this["webpackJsonpwordguess-react-ts"]=this["webpackJsonpwordguess-react-ts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={"main-container":"WordGame_main-container__bZ8F_",lettercontainer:"WordGame_lettercontainer__3LStp",letters:"WordGame_letters__1aWae",box:"WordGame_box__3l0Tt","correct-answer":"WordGame_correct-answer__3C1aP",firework:"WordGame_firework__1xrj8","firework-element":"WordGame_firework-element__2xl-e",firework1:"WordGame_firework1__1aPmq",fireworkanimation:"WordGame_fireworkanimation__33hts"}},function(e,t,n){e.exports={letters:"NextQuestion_letters__TZ7CD",box:"NextQuestion_box__Jg01K","skip-button":"NextQuestion_skip-button__3WMG2","skip-text-container":"NextQuestion_skip-text-container__1FPdr",text:"NextQuestion_text__2kGOm",arrow:"NextQuestion_arrow__3H1CS","next-button":"NextQuestion_next-button__1dLqt"}},,,function(e,t,n){e.exports={"category-heading":"Questions_category-heading__6WFy8","categories-container":"Questions_categories-container__3fvmV"}},function(e,t,n){e.exports={"alphabet-container":"Buttons_alphabet-container__1xsbz",letter:"Buttons_letter__2zOhm"}},function(e,t,n){e.exports={xmarkcontainer:"WrongAnswers_xmarkcontainer__2RNwH",xmarkpending:"WrongAnswers_xmarkpending__7K_h_","wrong-answer":"WrongAnswers_wrong-answer__2Y7oB"}},function(e,t,n){e.exports={"input-container":"InputAnswer_input-container__omSlp",inputfield:"InputAnswer_inputfield__3vkes","submit-button":"InputAnswer_submit-button__1r8WC"}},function(e,t,n){e.exports={MainMenu:"MainMenu_MainMenu__2b3go","title-heading":"MainMenu_title-heading__1R-Zb",gamecontainer:"MainMenu_gamecontainer__3-goF"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(9),a=n.n(c),i=(n(20),n(3)),o={Animals:["Animals","Goose","Rat","Moose","Goat","Dolphin","Crocodile","Wolf","Bird","Skunk","Mouse","Cheetah","Lion","Zebra","Panda"],"Game Characters":["Game Characters","Mario","Luigi","Donkey Kong","Kirby","Princess Peach","Lucario","Pikachu","Samus"]},l=n(10),j=n.n(l),u=n(2),d=n.n(u),b=n(0),m=d.a.bind(j.a);var x=function(e){var t=e.setWordCategory,n=e.setText;return Object(b.jsx)("div",{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:m("category-heading"),children:"Select a category"}),Object(b.jsx)("div",{className:m("categories-container"),children:function(){var e=[],r=function(r){e.push(Object(b.jsx)("button",{onClick:function(){t(o[r]),n(Object(b.jsxs)("h1",{children:["The Category is ",r]}))},children:r},r))};for(var s in o)r(s);return e}()})]})})},O=n(6),h=n.n(O),_=n(15),f=n(11),p=n.n(f),w=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],v=d.a.bind(p.a),N=function(e){var t=e.animal,n=e.stateElements,s=e.setStateElements,c=e.setincorrectAnswer,a=e.incorrectAnswer,o=Object(r.useRef)([]),l=Object(r.useState)(w.map((function(e,t){return Object(b.jsx)("button",{className:v("letter"),onClick:function(){return m(e)},children:e},t)}))),j=Object(i.a)(l,2),u=j[0],d=j[1];function m(e){if(o.current.push(e),t.toUpperCase().includes(e)){var r=t.split(""),a=Object(_.a)(n);r.map((function(n,r){return e.toLowerCase()===n.toLowerCase()&&(a[r]=Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:t[r]})},r))})),s(a)}else c((function(e){return e+1}))}return Object(r.useEffect)((function(){d(w.map((function(e,t){return o.current.includes(e)?Object(b.jsx)("button",{className:v("letter"),disabled:!0,children:e},t):Object(b.jsx)("button",{className:v("letter"),onClick:function(){return m(e)},children:e},t)})))}),[n,a]),Object(b.jsx)("div",{className:v("alphabet-container"),children:u})},g=n(12),k=n.n(g),C=d.a.bind(k.a),S=function(e){var t=e.incorrectAnswer,n=e.animal,s=e.setStateElements,c=e.setText;return Object(r.useEffect)((function(){s(n.split("").map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})},t)}))),t>6&&c(Object(b.jsx)("h1",{className:C("wrong-answer"),children:"Wrong Answer!"}))}),[t>6]),Object(b.jsxs)("div",{className:C("xmarkcontainer"),children:[Object(b.jsx)("div",{className:C({xmarkpending:t<1}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<2}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<3}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<4}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<5}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<6}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<7}),children:"\u274c"})]})},A=n(13),W=n.n(A),G=d.a.bind(W.a),M=function(e){var t=e.animal,n=e.setStateElements,s=e.setincorrectAnswer,c=Object(r.useRef)(null),a=function(){var e;t.toLowerCase()===(null===(e=c.current)||void 0===e?void 0:e.value.toLowerCase())?n(t.split("").map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})},t)}))):s((function(e){return e+1}))};return Object(b.jsxs)("div",{className:G("input-container"),children:[Object(b.jsx)("input",{className:G("inputfield"),ref:c,placeholder:"Enter Answer Here"}),Object(b.jsx)("button",{className:G("submit-button"),onClick:function(){c.current&&(""!==c.current.value?a():alert("Please enter a value"))},children:"Submit Answer"})]})},y=n(7),E=n.n(y),T=d.a.bind(E.a),F=function(e){var t=e.setStateElements,n=e.setincorrectAnswer,s=e.animal,c=e.setNextButton,a=e.nextButton,i=e.setAnimal,o=e.wordCategory,l=e.setText;return Object(r.useEffect)((function(){t((function(){return s.split("").map((function(e,t){return" "===e?Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:" "})},t):Object(b.jsx)("div",{className:T(E.a.box),children:Object(b.jsx)("p",{className:T(E.a.letters)})},t)}))}))}),[s]),Object(b.jsxs)(b.Fragment,{children:[a&&Object(b.jsx)("button",{className:T("next-button"),onClick:function(){i(o[o.indexOf(s)+1]),n(0),c(!1),l(Object(b.jsxs)("h1",{children:["The Category is ",o[0]]}))},children:"Next Word"}),!a&&Object(b.jsx)("button",{className:T("skip-button"),onClick:function(){n(7),c(!0),l(Object(b.jsx)("h1",{children:"The Answer Was:"})),t(s.split("").map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})},t)})))},children:Object(b.jsxs)("div",{className:T("skip-text-container"),children:[Object(b.jsx)("div",{className:T("text"),children:"Skip Question"}),Object(b.jsx)("div",{className:T("arrow"),children:"\u2794"})]})})]})},L=d.a.bind(h.a),B=function(e){var t=e.text,n=e.setText,s=e.wordCategory,c=Object(r.useState)(0),a=Object(i.a)(c,2),o=a[0],l=a[1],j=Object(r.useState)(!1),u=Object(i.a)(j,2),d=u[0],m=u[1],x=Object(r.useState)(s[1]),O=Object(i.a)(x,2),_=O[0],f=O[1],p=Object(r.useState)(1),w=Object(i.a)(p,2),v=w[0],g=w[1],k=Object(r.useState)(_.split("").map((function(e,t){return Object(b.jsx)("div",{className:L(h.a.box),children:Object(b.jsx)("p",{className:L(h.a.letters)})},t)}))),C=Object(i.a)(k,2),A=C[0],W=C[1];return Object(r.useEffect)((function(){A.every((function(e){return void 0===e.props.className}))&&(m(!0),o<7&&n(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:L("correct-answer"),children:"Good Job!"}),Object(b.jsxs)("div",{className:L("firework"),id:"firework1",children:[Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")}),Object(b.jsx)("div",{className:L("firework-element")})]})]})))}),[A]),Object(b.jsxs)("div",{className:L("main-container"),children:[Object(b.jsx)(b.Fragment,{children:t}),Object(b.jsx)("div",{className:L("lettercontainer"),children:A}),!d&&Object(b.jsx)(S,{incorrectAnswer:o,animal:_,setStateElements:W,setText:n}),!d&&Object(b.jsx)(N,{animal:_,stateElements:A,setStateElements:W,incorrectAnswer:o,setincorrectAnswer:l,setChange:g},v),!d&&Object(b.jsx)(M,{animal:_,setStateElements:W,setincorrectAnswer:l}),Object(b.jsx)(F,{setStateElements:W,setincorrectAnswer:l,animal:_,setNextButton:m,nextButton:d,setAnimal:f,wordCategory:s,setText:n})]})},P=n(14),Q=n.n(P),I=d.a.bind(Q.a),R=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(Object(b.jsx)(b.Fragment,{})),a=Object(i.a)(c,2),o=a[0],l=a[1];return Object(b.jsxs)("div",{className:I("MainMenu"),children:[Object(b.jsx)("h1",{className:I("title-heading"),children:"Guess The Word"}),Object(b.jsx)("div",{className:I("gamecontainer"),children:void 0===n?Object(b.jsx)(x,{setWordCategory:s,setText:l}):Object(b.jsx)(B,{text:o,setText:l,wordCategory:n})})]})};var D=function(){return Object(b.jsx)("div",{className:"appdiv",children:Object(b.jsx)(R,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),J()}],[[22,1,2]]]);
//# sourceMappingURL=main.870ad944.chunk.js.map