(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{39:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c,a,r,o,i,b,l,s,j,u,d,O=n(0),p=n.n(O),h=n(14),m=n.n(h),x=n(28),f=n(8),g=n(24),y=(n(39),n(20)),v=n(5),k=n(6),C=k.a.form(c||(c=Object(v.a)(["\n  display: block;\n  margin-left: 22px;\n"]))),w=k.a.label(a||(a=Object(v.a)(["\n  font-size: 15px;\n"]))),A=k.a.input(r||(r=Object(v.a)(["\n  display: block;\n  width: 222px;\n  height: 30px;\n  margin-bottom: 10px;\n"]))),F=k.a.button(o||(o=Object(v.a)(["\n  margin-left: 56px;\n  margin-top: 10px;\n  width: 110px;\n  height: 37px;\n  color: white;\n  background-color: navy;\n  border-style: none;\n  border-radius: 4px;\n"]))),z=function(e){return e.contacts.items},S=function(e){return e.contacts.filter},J=function(e){var t=z(e),n=S(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},Z=n(47),q=n(9),B={createContact:Object(q.b)("createContact",(function(e,t){return{payload:{id:Object(Z.a)(),name:e,number:t}}})),deleteContact:Object(q.b)("deleteContact"),changeFilter:Object(q.b)("changeFilter")},D=n(1),L=function(){var e=Object(O.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(O.useState)(""),r=Object(y.a)(a,2),o=r[0],i=r[1],b=Object(f.b)(),l=Object(f.c)(z),s=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}},j=function(){var e={name:n,number:o};l.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):b(B.createContact(n,o))};return Object(D.jsxs)(C,{onSubmit:function(e){e.preventDefault(),j(),c(""),i("")},children:[Object(D.jsxs)(w,{htmlFor:"name",children:["Name",Object(D.jsx)(A,{value:n,onChange:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(D.jsxs)(w,{htmlFor:"number",children:["Number",Object(D.jsx)(A,{value:o,onChange:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(D.jsx)("div",{children:Object(D.jsx)(F,{type:"submit",children:"Add contact"})})]})},M=k.a.ul(i||(i=Object(v.a)(["\n  list-style-type: none;\n  padding-left: 22px;\n"]))),N=k.a.li(b||(b=Object(v.a)(["\n  background-color: whitesmoke;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 344px;\n  margin-bottom: 8px;\n"]))),T=k.a.button(l||(l=Object(v.a)(["\n  width: 88px;\n  height: 30px;\n  color: white;\n  background-color: navy;\n  border-style: none;\n  border-radius: 4px;\n"]))),E=function(e){var t=e.id,n=e.name,c=e.number,a=e.onClick;return Object(D.jsxs)(N,{children:[Object(D.jsxs)("span",{children:[n,": ",c]}),Object(D.jsx)(T,{type:"button",onClick:a,children:"Delete"})]},t)},I=function(){var e=Object(f.c)(J),t=Object(f.b)();return Object(D.jsx)(M,{children:e.map((function(e){return Object(D.jsx)(E,{name:e.name,number:e.number,onClick:function(){return n=e.id,t(B.deleteContact(n));var n}},e.id)}))})},P=k.a.label(s||(s=Object(v.a)(["\n  display: block;\n  margin-left: 22px;\n  font-weight: 500;\n"]))),$=function(){var e=Object(f.c)(S),t=Object(f.b)();return Object(D.jsxs)(P,{children:[Object(D.jsx)("p",{children:" Find contact by name"}),Object(D.jsx)("input",{type:"text",value:e,onChange:function(e){return t(B.changeFilter(e.target.value))}})]})},G=k.a.h1(j||(j=Object(v.a)(["\n  margin-left: 110px;\n"]))),H=k.a.h2(u||(u=Object(v.a)(["\n  margin-top: 40px;\n  margin-left: 144px;\n"]))),K=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(G,{children:"Phonebook"}),Object(D.jsx)(L,{}),Object(D.jsx)(H,{children:"Contacts"}),Object(D.jsx)($,{}),Object(D.jsx)(I,{})]})},Q=n(25),R=n.n(Q),U=n(10),V=n(26),W=n.n(V),X=n(16),Y=n(29),_=n(3),ee=Object(q.c)([],(d={},Object(X.a)(d,B.createContact,(function(e,t){var n=t.payload;return[].concat(Object(Y.a)(e),[n])})),Object(X.a)(d,B.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),d)),te=Object(q.c)("",Object(X.a)({},B.changeFilter,(function(e,t){return t.payload}))),ne=Object(_.b)({items:ee,filter:te}),ce={key:"contacts",storage:W.a,blacklist:["filter"]},ae=Object(q.a)({reducer:{contacts:Object(U.g)(ce,ne)},devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}}).concat(R.a)}}),re={store:ae,persistor:Object(U.h)(ae)};m.a.render(Object(D.jsx)(p.a.StrictMode,{children:Object(D.jsx)(f.a,{store:re.store,children:Object(D.jsx)(g.a,{loading:null,persistor:re.persistor,children:Object(D.jsx)(x.a,{children:Object(D.jsx)(K,{})})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2480dd7a.chunk.js.map