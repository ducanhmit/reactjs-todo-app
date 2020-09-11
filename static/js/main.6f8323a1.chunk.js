(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(57)},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(4),r=n.n(c),l=n(17),u=n(11),i=n(6),s=n(7),d=n(12),m=n(10),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("header",{className:"header-container"},a.a.createElement("h1",{className:"header-title"},"Simple Todo App"))}}]),n}(a.a.Component);var h=function(e){var t=e.todo,n=t.completed,o=t.id,c=t.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.handleChange(o)}}),a.a.createElement("span",{className:n?"completed":null},c),a.a.createElement("button",{className:"btn-style",onClick:function(){return e.deleteTodo(o)}},"X"))};var f=function(e){return a.a.createElement("div",null,a.a.createElement("ul",null,e.todos.map((function(t){return a.a.createElement(h,{key:t.id,todo:t,handleChange:e.handleChange,deleteTodo:e.deleteTodo})}))))},b=n(13),v=n.n(b);var E=function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1];return a.a.createElement("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),e.addTodo(c),r("")}},a.a.createElement("input",{type:"text",placeholder:"Add Todo...",className:"input-text",value:c,onChange:function(e){r(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))},C=n(9),j=n(8),y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).submitThemeColor=o.submitThemeColor.bind(Object(j.a)(o)),o}return Object(s.a)(n,[{key:"submitThemeColor",value:function(e){e&&(console.log("handleChangeTheme"),this.props.saveColorTheme(e))}},{key:"componentWillReceiveProps",value:function(e){console.log("UNSAFE_componentWillReceiveProps: "+JSON.stringify(e)),document.documentElement.style.setProperty("--main-color",e.themeColor.color)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"footer"},a.a.createElement("div",{className:"vertical-center"},a.a.createElement("span",null,"Choose Theme "),a.a.createElement("button",{onClick:function(){return e.submitThemeColor("#ff0000")},className:"dot red"}),a.a.createElement("button",{onClick:function(){return e.submitThemeColor("#0000ff")},className:"dot blue"}),a.a.createElement("button",{onClick:function(){return e.submitThemeColor("#678c89")},className:"dot gray"})))}}]),n}(a.a.Component);var O=Object(C.b)((function(e){return{themeColor:e.color}}),(function(e){return{dispatch:e,saveColorTheme:function(t){return e(function(e){return{type:"CHANGE_THEME",payload:{color:e}}}(t))}}}))(y);var g=function(){var e=Object(o.useState)({todos:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){v.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then((function(e){return c({todos:e.data})}))}),[]),a.a.createElement("div",{className:"container"},a.a.createElement(p,null),a.a.createElement(E,{addTodo:function(e){var t={title:e,completed:!1};v.a.post("https://jsonplaceholder.typicode.com/todos",t).then((function(e){console.log(e.data),c({todos:[].concat(Object(l.a)(n.todos),[e.data])})}))}}),a.a.createElement(f,{todos:n.todos,handleChange:function(e){c({todos:n.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},deleteTodo:function(e){v.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(t){return c({todos:Object(l.a)(n.todos.filter((function(t){return t.id!==e})))})}))}}),a.a.createElement(O,null))},T=(n(56),n(2)),N={color:"#FFFFFF"};var k=Object(T.b)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return console.log("themeReducer: "+JSON.stringify(e)),Object.assign({},e,{color:t.payload.color});default:return N}}}),S=Object(T.c)(k);r.a.render(a.a.createElement(C.a,{store:S},a.a.createElement(g,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6f8323a1.chunk.js.map