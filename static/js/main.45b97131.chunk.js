(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={sidebar:"Header_sidebar__2SpBK",inactive:"Header_inactive__1jUrd",active:"Header_active__2hxEJ"}},,,,,,,,function(e,a,t){e.exports={message:"Message_message__1SWfV",body:"Message_body__1Mjtq",name:"Message_name__w5rs2",text:"Message_text__3arh3",time:"Message_time__3x4I9"}},function(e,a,t){e.exports={button:"Clock_button__1FArm"}},,,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__cijY4",error:"Greeting_error__3uGkN",errormessage:"Greeting_errormessage__1dd-g",button:"Greeting_button__1p_nr",span:"Greeting_span__VQpFK"}},,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2xjRt",errorInput:"SuperInputText_errorInput__1rILO",error:"SuperInputText_error__wkdQ4"}},function(e,a,t){e.exports={body:"HW10_body__ygS3A",button:"HW10_button__3NtHL"}},,function(e,a,t){e.exports={App:"App_App__1g84w",React:"App_React__2LxDc"}},function(e,a,t){e.exports={default:"SuperButton_default__2OLFK",red:"SuperButton_red__3w2J5"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__34zVf",spanClassName:"SuperCheckbox_spanClassName__2iv61"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__3H5h7",superSpan:"SuperEditableSpan_superSpan__3R00s"}},function(e,a,t){e.exports={table:"HW8_table__2xWQO",body:"HW8_body__1gMbV"}},,function(e,a,t){e.exports={dark:"HW12_dark__2pxTo","dark-text":"HW12_dark-text__2XB3X",red:"HW12_red__heY1b","red-text":"HW12_red-text__1j4_5",some:"HW12_some__1a2Ut","some-text":"HW12_some-text__9OEz4"}},,,,,,function(e,a,t){e.exports={blue:"HW4_blue__3ctOF",column:"HW4_column__1fkMJ"}},function(e,a,t){e.exports=t.p+"static/media/preloader.0ad6a0ce.gif"},,function(e,a,t){e.exports={range:"SuperRange_range__2JP5v"}},function(e,a,t){},,function(e,a,t){e.exports=t(52)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(46),t(23)),u=t.n(o),i=t(4),m=t(1),s=t.n(m);var E=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},d=t(9),p=t.n(d),v=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("div",{className:p.a.ava},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:p.a.body},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.text},e.message),r.a.createElement("div",{className:p.a.time},e.time)))},f="https://img.labirint.ru/images/goodssets/preview_img_small_2635_604.jpg",h="Alexey",g="Hello!",b="22:00",_=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks \u21161",r.a.createElement(v,{avatar:f,name:h,message:g,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(2);var k=function(e){return r.a.createElement("div",null,"".concat(e.affair._id+" ").concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(w),a=Object(C.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(C.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks \u21162",r.a.createElement(N,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(8),x=t(16),y=t.n(x),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?y.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("button",{className:y.a.button,onClick:function(){return n(a)}},"add"),r.a.createElement("span",{className:y.a.span},c),r.a.createElement("div",{className:y.a.errormessage},l))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(C.a)(i,2),s=m[0],E=m[1],d=a.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){u(e.currentTarget.value),E("")},addUser:function(){var e;(e=o).trim()?(alert("Hello "+o),t(e),u(""),E("")):E("Enter a name to continue!")},error:s,totalUsers:d})},I=t(54);var R=function(){var e=Object(n.useState)([]),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(I.a)(),name:e};l([].concat(Object(j.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(5),F=t(20),T=t.n(F),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(T.a.error," ").concat(u||""),s="".concat(c?T.a.errorInput:T.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},i)),c&&r.a.createElement("span",{className:m},c))},W=t(35),J=t.n(W),P=t(24),U=t.n(P),D=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,["red","className"]),l="".concat(a?U.a.red:U.a.default," ").concat(t," ");return r.a.createElement("button",Object.assign({className:l},n))},B=t(25),G=t.n(B),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var L=function(){var e=Object(n.useState)(""),a=Object(C.a)(e,2),t=a[0],l=a[1],c=t?"":"Enter text",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t),l("")},u=Object(n.useState)(!1),i=Object(C.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(D,{red:!0,onClick:o},"Click to continue "),r.a.createElement(K,{checked:m,onChangeChecked:s},"\u0421ompleted "),r.a.createElement(K,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}},"\u0421ompleted")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(O,null),r.a.createElement(R,null),r.a.createElement(L,null))},z=t(26),Q=t.n(z),X=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(A.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(C.a)(o,2),i=u[0],m=u[1],s=l||{},E=s.children,d=s.onDoubleClick,p=s.className,v=Object(A.a)(s,["children","onDoubleClick","className"]),f="".concat(Q.a.span," ").concat(p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("div",{className:Q.a.superSpan,"data-title":"Double click to continue!"},r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:f},v),E||c.value)))};function Y(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function q(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Y("test",{x:"A",y:1});q("test",{x:"",y:0});var $=function(){var e=Object(n.useState)(""),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 6",r.a.createElement("div",null,r.a.createElement(X,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(D,{onClick:function(){Y("editable-span-value",t)}},"save"),r.a.createElement(D,{onClick:function(){l(q("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},Z=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(A.a)(e,["options","onChange","onChangeOption"]),l=a&&a.map((function(e,a){return r.a.createElement("option",{key:a},e)}));return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(A.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,checked:n===e,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ae=["x","y","z"];var te=function(){var e=Object(n.useState)(ae[1]),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 7",r.a.createElement("div",null,r.a.createElement(Z,{options:ae,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ee,{name:"radio",options:ae,value:t,onChangeOption:l})))},ne=function(e,a){switch(a.type){case"sort":if("up"===a.payload)return Object(j.a)(e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})));if("down"===a.payload)return Object(j.a)(e.sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0})));case"check":return Object(j.a)(e.filter((function(e){return e.age>18})));case"sortAge":if("age-up"===a.payload)return Object(j.a)(e.sort((function(e,a){return e.age-a.age})));if("age-down"===a.payload)return Object(j.a)(e.sort((function(e,a){return a.age-e.age})));default:return e}},re=t(27),le=t.n(re),ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(n.useState)(ce),a=Object(C.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{className:le.a.table,key:e._id},"name:",e.name,", age: ",e.age)}));return r.a.createElement("div",{className:le.a.body},r.a.createElement("hr",null),"Homeworks 8",c,r.a.createElement("div",null,r.a.createElement(D,{onClick:function(){return l(ne(ce,{type:"sort",payload:"up"}))}},"Sort up")),r.a.createElement("div",null,r.a.createElement(D,{onClick:function(){return l(ne(ce,{type:"sort",payload:"down"}))}},"Sort down")),r.a.createElement("div",null,r.a.createElement(D,{onClick:function(){return l(ne(ce,{type:"check",payload:18}))}},"Check 18")),r.a.createElement("div",null,r.a.createElement(D,{onClick:function(){return l(ne(ce,{type:"sortAge",payload:"age-up"}))}},"Check Age Up")),r.a.createElement("div",null,r.a.createElement(D,{onClick:function(){return l(ne(ce,{type:"sortAge",payload:"age-down"}))}},"Check Age Down")))},ue=t(10),ie=t.n(ue);var me=function(){var e=Object(n.useState)(0),a=Object(C.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(C.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),s=Object(C.a)(m,2),E=s[0],d=s[1],p=function(){clearInterval(t)},v=u.getMonth()+1,f=(u.getHours()<10?"0"+u.getHours():u.getHours())+":"+(u.getMinutes()<10?"0"+u.getMinutes():u.getMinutes())+":"+(u.getSeconds()<10?"0"+u.getSeconds():u.getSeconds()),h=u.getDate()+"."+v+"."+u.getFullYear();return r.a.createElement("div",{className:ie.a.body},r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},r.a.createElement("div",{className:ie.a.time},f)),E&&r.a.createElement("div",{className:ie.a.date},h),r.a.createElement("div",{className:ie.a.buttons},r.a.createElement(D,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)},className:ie.a.button},"Start"),r.a.createElement(D,{onClick:p,className:ie.a.button},"Stop")))};var se=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 9",r.a.createElement(me,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(te,null),r.a.createElement(oe,null),r.a.createElement(se,null))};var de=function(){return r.a.createElement("div",null)},pe=t(3),ve=t(36),fe=t.n(ve),he=t(15),ge=t(40),be={loading:!1},_e=function(e){return{type:"loading",loading:e}},Ce=t(21),ke=t.n(Ce);var Ne=function(){var e=Object(he.b)(),a=Object(he.c)((function(e){return e.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"Homeworks 10",r.a.createElement("div",{className:ke.a.body},a.loading?r.a.createElement("div",{className:ke.a.img},r.a.createElement("img",{src:fe.a})):r.a.createElement("div",null,r.a.createElement(D,{onClick:function(){return e(_e(!0)),setTimeout((function(){return e(_e(!1))}),2e3),console.log("loading..."),clearTimeout()},className:ke.a.button},"set loading..."))),r.a.createElement("hr",null),r.a.createElement("hr",null))},we=t(38),Oe=t.n(we),je=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(A.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(Oe.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:c},l)))},xe=function(e){e.onChangeRange,e.value;return r.a.createElement(r.a.Fragment,null,"DoubleRange")};var ye=function(){var e=Object(n.useState)(0),a=Object(C.a)(e,2),t=a[0],l=(a[1],Object(n.useState)(100)),c=Object(C.a)(l,2),o=c[0];return c[1],r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(je,null)),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(xe,null),r.a.createElement("span",null,o)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Se=t(29),He=t.n(Se);var Ie=function(){return r.a.createElement("div",{className:He.a.some},r.a.createElement("hr",null),r.a.createElement("span",{className:He.a["some-text"]},"homeworks 12"),r.a.createElement("hr",null))},Re="/junior",Ae="/juniorSuper";var Fe=function(){return r.a.createElement("div",null,r.a.createElement(pe.d,null,'\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "/" \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 "/" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)',r.a.createElement(pe.b,{path:"/",exact:!0,render:function(){return r.a.createElement(pe.a,{to:"/PRE_JUNIOR"})}}),r.a.createElement(pe.b,{path:"/PRE_JUNIOR",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(pe.b,{path:"/junior",exact:!0,render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(pe.b,{path:"/juniorSuper",exact:!0,render:function(){return r.a.createElement(de,null)}}),r.a.createElement(pe.b,{path:"/hw1",exact:!0,render:function(){return r.a.createElement(_,null)}}),r.a.createElement(pe.b,{path:"/hw2",exact:!0,render:function(){return r.a.createElement(O,null)}}),r.a.createElement(pe.b,{path:"/hw3",exact:!0,render:function(){return r.a.createElement(R,null)}}),r.a.createElement(pe.b,{path:"/hw4",exact:!0,render:function(){return r.a.createElement(L,null)}}),r.a.createElement(pe.b,{path:"/hw6",exact:!0,render:function(){return r.a.createElement($,null)}}),r.a.createElement(pe.b,{path:"/hw7",exact:!0,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(pe.b,{path:"/hw8",exact:!0,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(pe.b,{path:"/hw9",exact:!0,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(pe.b,{path:"/hw10",exact:!0,render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(pe.b,{path:"/hw11",exact:!0,render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(pe.b,{path:"/hw12",exact:!0,render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(pe.b,{render:function(){return r.a.createElement(E,null)}}),"//\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"))};var Te=function(){return r.a.createElement("div",{className:s.a.sidebar},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/PRE_JUNIOR",className:s.a.inactive,activeClassName:s.a.active},"PreJunior:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw1",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21161")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw2",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21162")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw3",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21163")),r.a.createElement("li",null," ",r.a.createElement(i.b,{to:"/hw4",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21164")))),r.a.createElement("div",null,r.a.createElement(i.b,{to:Re,className:s.a.inactive,activeClassName:s.a.active},"Junior:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw6",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21166")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw7",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21167")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw8",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21168")),r.a.createElement("li",null," ",r.a.createElement(i.b,{to:"/hw9",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u21169")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw10",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u211610")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw11",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u211611")))),r.a.createElement("div",null,r.a.createElement(i.b,{to:Ae,className:s.a.inactive,activeClassName:s.a.active},"Junior+:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/hw12",className:s.a.inactive,activeClassName:s.a.active},"Homeworks \u211612")))))},Me=t(39),We=t.n(Me);var Je=function(){return r.a.createElement("div",{className:We.a.general},r.a.createElement(i.a,null,r.a.createElement(Te,null),r.a.createElement(Fe,null)))};var Pe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",{className:u.a.React},"React homeworks:"),r.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=t(14),De=Object(Ue.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"loading":return Object(ge.a)({},e,{loading:a.loading});default:return e}}}),Be=Object(Ue.c)(De),Ge=Be;window.store=Be,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he.a,{store:Ge},r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.45b97131.chunk.js.map