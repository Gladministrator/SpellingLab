(this["webpackJsonpwordguess-react-ts"]=this["webpackJsonpwordguess-react-ts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={"main-container":"WordGame_main-container__bZ8F_",lettercontainer:"WordGame_lettercontainer__3LStp",letters:"WordGame_letters__1aWae",box:"WordGame_box__3l0Tt","correct-answer":"WordGame_correct-answer__3C1aP",firework:"WordGame_firework__1xrj8","firework-element":"WordGame_firework-element__2xl-e",firework1:"WordGame_firework1__1aPmq",fireworkanimation:"WordGame_fireworkanimation__33hts"}},function(e,t,n){e.exports={letters:"NextQuestion_letters__TZ7CD",box:"NextQuestion_box__Jg01K","skip-button":"NextQuestion_skip-button__3WMG2","skip-text-container":"NextQuestion_skip-text-container__1FPdr",text:"NextQuestion_text__2kGOm",arrow:"NextQuestion_arrow__3H1CS","next-button":"NextQuestion_next-button__1dLqt","return-main":"NextQuestion_return-main__SH3FW"}},,,function(e,t,n){e.exports={"category-heading":"Questions_category-heading__6WFy8","categories-container":"Questions_categories-container__3fvmV"}},function(e,t,n){e.exports={"alphabet-container":"Buttons_alphabet-container__1xsbz",letter:"Buttons_letter__2zOhm"}},function(e,t,n){e.exports={xmarkcontainer:"WrongAnswers_xmarkcontainer__2RNwH",xmarkpending:"WrongAnswers_xmarkpending__7K_h_","wrong-answer":"WrongAnswers_wrong-answer__2Y7oB"}},function(e,t,n){e.exports={"input-container":"InputAnswer_input-container__omSlp",inputfield:"InputAnswer_inputfield__3vkes","submit-button":"InputAnswer_submit-button__1r8WC"}},function(e,t,n){e.exports={MainMenu:"MainMenu_MainMenu__2b3go","title-heading":"MainMenu_title-heading__1R-Zb",gamecontainer:"MainMenu_gamecontainer__3-goF"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(9),c=n.n(a),i=(n(20),n(3)),o={Animals:["Animals","Goose","Rat","Moose","Goat","Dolphin","Crocodile","Wolf","Bird","Skunk","Mouse","Cheetah","Lion","Zebra","Panda"],"Game Characters":["Game Characters","Mario","Luigi","Donkey Kong","Kirby","Princess Peach","Lucario","Pikachu","Samus"],Sports:["Sports","Soccer","Basketball","Tennis","Baseball","Golf","Hockey","Cricket","Football","Badminton","Wrestling","Volleyball","Boxing"]},l=n(10),u=n.n(l),j=n(2),d=n.n(j),b=n(0),x=d.a.bind(u.a);var m=function(e){var t=e.setWordCategory,n=e.setText;return Object(b.jsx)("div",{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:x("category-heading"),children:"Select a category"}),Object(b.jsx)("div",{className:x("categories-container"),children:function(){var e=[],r=function(r){e.push(Object(b.jsx)("button",{onClick:function(){t(o[r]),n(Object(b.jsxs)("h1",{children:["The Category is ",r]}))},children:r},r))};for(var s in o)r(s);return e}()})]})})},h=n(6),O=n.n(h),_=n(15),f=n(11),p=n.n(f),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],w=d.a.bind(p.a),v=function(e){var t=e.animal,n=e.stateElements,s=e.setStateElements,a=e.setincorrectAnswer,c=e.incorrectAnswer,o=Object(r.useRef)([]),l=Object(r.useState)(g.map((function(e,t){return Object(b.jsx)("button",{className:w("letter"),onClick:function(){return x(e)},children:e},t)}))),u=Object(i.a)(l,2),j=u[0],d=u[1];function x(e){if(o.current.push(e),t.toUpperCase().includes(e)){var r=t.split(""),c=Object(_.a)(n);r.map((function(n,r){return e.toLowerCase()===n.toLowerCase()&&(c[r]=Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:t[r]})},r))})),s(c)}else a((function(e){return e+1}))}return Object(r.useEffect)((function(){d(g.map((function(e,t){return o.current.includes(e)?Object(b.jsx)("button",{className:w("letter"),disabled:!0,children:e},t):Object(b.jsx)("button",{className:w("letter"),onClick:function(){return x(e)},children:e},t)})))}),[n,c]),Object(b.jsx)("div",{className:w("alphabet-container"),children:j})},N=n(12),k=n.n(N),C=d.a.bind(k.a),S=function(e){var t=e.incorrectAnswer,n=e.animal,s=e.setStateElements,a=e.setText;return Object(r.useEffect)((function(){s(n.split("").map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})},t)}))),t>6&&a(Object(b.jsx)("h1",{className:C("wrong-answer"),children:"Wrong Answer!"}))}),[t>6]),Object(b.jsxs)("div",{className:C("xmarkcontainer"),children:[Object(b.jsx)("div",{className:C({xmarkpending:t<1}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<2}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<3}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<4}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<5}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<6}),children:"\u274c"}),Object(b.jsx)("div",{className:C({xmarkpending:t<7}),children:"\u274c"})]})},W=n(13),A=n.n(W),y=d.a.bind(A.a),G=function(e){var t=e.animal,n=e.setStateElements,s=e.setincorrectAnswer,a=Object(r.useRef)(null),c=function(){var e;t.toLowerCase()===(null===(e=a.current)||void 0===e?void 0:e.value.toLowerCase())?n(t.split("").map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})},t)}))):s((function(e){return e+1}))};return Object(b.jsxs)("div",{className:y("input-container"),children:[Object(b.jsx)("input",{className:y("inputfield"),ref:a,placeholder:"Enter Answer Here"}),Object(b.jsx)("button",{className:y("submit-button"),onClick:function(){a.current&&(""!==a.current.value?c():alert("Please enter a value"))},children:"Submit Answer"})]})},M=n(7),E=n.n(M),T=d.a.bind(E.a),F=function(e){var t=e.setStateElements,n=e.setincorrectAnswer,s=e.animal,a=e.setNextButton,c=e.nextButton,i=e.setAnimal,o=e.wordCategory,l=e.setWordCategory,u=e.setText;return Object(r.useEffect)((function(){t((function(){return s.split("").map((function(e,t){return" "===e?Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:" "})},t):Object(b.jsx)("div",{className:T(E.a.box),children:Object(b.jsx)("p",{className:T(E.a.letters)})},t)}))}))}),[s]),Object(b.jsxs)(b.Fragment,{children:[c&&Object(b.jsx)("button",{className:T("next-button"),onClick:function(){o[o.indexOf(s)+1]?(i(o[o.indexOf(s)+1]),n(0),a(!1),u(Object(b.jsxs)("h1",{children:["The Category is ",o[0]]}))):u(Object(b.jsx)("h1",{children:"End of the Game! Click below to return to the menu"}))},children:"Next Word"}),!c&&Object(b.jsx)("button",{className:T("skip-button"),onClick:function(){n(7),a(!0),u(Object(b.jsx)("h1",{children:"The Answer Was:"})),t(s.split("").map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e})},t)})))},children:Object(b.jsxs)("div",{className:T("skip-text-container"),children:[Object(b.jsx)("div",{className:T("text"),children:"Skip Question"}),Object(b.jsx)("div",{className:T("arrow"),children:"\u2794"})]})}),Object(b.jsx)("button",{className:T("return-main"),onClick:function(){l("None")},children:"Return to Main Menu"})]})},B=d.a.bind(O.a),L=function(e){for(var t=e.text,n=e.setText,s=e.wordCategory,a=e.setWordCategory,c=Object(r.useState)(0),o=Object(i.a)(c,2),l=o[0],u=o[1],j=Object(r.useState)(!1),d=Object(i.a)(j,2),x=d[0],m=d[1],h=Object(r.useState)(s[1]),_=Object(i.a)(h,2),f=_[0],p=_[1],g=Object(r.useState)(1),w=Object(i.a)(g,2),N=w[0],k=w[1],C=Object(r.useState)(f.split("").map((function(e,t){return Object(b.jsx)("div",{className:B(O.a.box),children:Object(b.jsx)("p",{className:B(O.a.letters)})},t)}))),W=Object(i.a)(C,2),A=W[0],y=W[1],M=0,E=[];M<12;)E.push(Object(b.jsx)("div",{className:B("firework-element")})),M++;return Object(r.useEffect)((function(){A.every((function(e){return void 0===e.props.className}))&&(m(!0),l<7&&n(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:B("correct-answer"),children:"Good Job!"}),Object(b.jsx)("div",{className:B("firework"),id:"firework1",children:E})]})))}),[A]),Object(b.jsxs)("div",{className:B("main-container"),children:[Object(b.jsx)(b.Fragment,{children:t}),Object(b.jsx)("div",{className:B("lettercontainer"),children:A}),!x&&Object(b.jsx)(S,{incorrectAnswer:l,animal:f,setStateElements:y,setText:n}),!x&&Object(b.jsx)(v,{animal:f,stateElements:A,setStateElements:y,incorrectAnswer:l,setincorrectAnswer:u,setChange:k},N),!x&&Object(b.jsx)(G,{animal:f,setStateElements:y,setincorrectAnswer:u}),Object(b.jsx)(F,{setStateElements:y,setincorrectAnswer:u,animal:f,setNextButton:m,nextButton:x,setAnimal:p,wordCategory:s,setWordCategory:a,setText:n})]})},Q=n(14),P=n.n(Q),R=d.a.bind(P.a),H=function(){var e=Object(r.useState)("None"),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(Object(b.jsx)(b.Fragment,{})),c=Object(i.a)(a,2),o=c[0],l=c[1];return Object(b.jsxs)("div",{className:R("MainMenu"),children:[Object(b.jsx)("h1",{className:R("title-heading"),children:"Guess The Word!"}),Object(b.jsx)("div",{className:R("gamecontainer"),children:"None"===n?Object(b.jsx)(m,{setWordCategory:s,setText:l}):Object(b.jsx)(L,{text:o,setText:l,wordCategory:n,setWordCategory:s})})]})};var I=function(){return Object(b.jsx)("div",{className:"appdiv",children:Object(b.jsx)(H,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),D()}],[[22,1,2]]]);
//# sourceMappingURL=main.179ba95d.chunk.js.map