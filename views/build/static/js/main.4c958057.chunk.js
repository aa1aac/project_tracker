(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"userLogin",(function(){return N})),a.d(r,"userLogout",(function(){return B})),a.d(r,"getUser",(function(){return y}));var n=a(0),c=a.n(n),o=a(20),l=a.n(o),s=a(14),i=a(64),u=a(29),m={_id:null,email:null,name:null},p=a(53),d=[],E=Object(u.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return t.payload;case"USER_LOGOUT":return m;case"GET_USER":return t.payload;default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return console.log(t.payload),t.payload;case"GET_MORE_PROJECTS":return[].concat(Object(p.a)(e),Object(p.a)(t.payload));default:return e}}}),b=a(37),g=a(38),f=a(45),v=a(43),h=a(15),A=a(27),j=a(7),k=a(6),S=a(5),C=a.n(S),w=a(10),I=a(11),O=a.n(I),N=function(e){var t=e.email,a=e.password;return function(){var e=Object(w.a)(C.a.mark((function e(r){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!a){e.next=12;break}return e.prev=1,e.next=4,O.a.post("/api/auth/login",{email:t,password:a});case 4:n=e.sent,console.log("USER_LOGIN",n.data),r({type:"USER_LOGIN",payload:n.data.user}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response.data.errors?(console.log(e.t0.response.data.errors[0]),j.b.error(e.t0.response.data.errors[0])):j.b.error("invalid email or password");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},B=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/auth/logout");case 3:t({type:"USER_LOGOUT"}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),j.b.error(e.t0.response.data.errors[0]);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/auth/me");case 3:(a=e.sent).data.user&&a.data.user._id&&t({type:"GET_USER",payload:a.data.user}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},x=Object(s.b)(null,r)((function(e){var t=e.userLogin,a=Object(n.useState)(""),r=Object(k.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(""),i=Object(k.a)(s,2),u=i[0],m=i[1];return c.a.createElement("div",null,c.a.createElement("h5",{className:"mb-2"},"Login"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&u&&t({email:o,password:u})}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email address"),c.a.createElement("input",{value:o,onChange:function(e){return l(e.target.value)},required:!0,type:"email",className:"form-control bg-dark text-white",id:"email",placeholder:"Email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{value:u,onChange:function(e){return m(e.target.value)},required:!0,type:"password",className:"form-control bg-dark text-white",id:"password",placeholder:"Password"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Login"),c.a.createElement("a",{href:"http://localhost:5000/api/auth/github",className:"btn btn-secondary btn-block"},"Login with Github")))})),Q=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(k.a)(o,2),s=l[0],i=l[1],u=Object(n.useState)(""),m=Object(k.a)(u,2),p=m[0],d=m[1],E=Object(n.useState)(""),b=Object(k.a)(E,2),g=b[0],f=b[1],v=function(){var e=Object(w.a)(C.a.mark((function e(t){var r,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("/api/auth/signup",{name:a,email:s,password:p,confirm:g});case 4:r=e.sent,n=r.data,console.log(n),j.b.success(n.msg),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),c=e.t0.response.data.errors,console.log(c),c&&j.b.error(e.t0.response.data.errors[0]),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h5",{className:"mb-2"},"Signup"),c.a.createElement("form",{onSubmit:v},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{value:a,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control bg-dark text-white",id:"name",placeholder:"Name",required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email address"),c.a.createElement("input",{value:s,onChange:function(e){return i(e.target.value)},type:"email",className:"form-control bg-dark text-white",id:"email",placeholder:"Email",required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{value:p,onChange:function(e){return d(e.target.value)},type:"password",className:"form-control bg-dark text-white",id:"password",placeholder:"Password",required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"confirm"},"Confirm Password"),c.a.createElement("input",{value:g,onChange:function(e){return f(e.target.value)},type:"password",className:"form-control bg-dark text-white",id:"confirm",placeholder:"Confirm Password",required:!0})),c.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Signup"),c.a.createElement("a",{href:"http://localhost:5000/api/auth/github/",className:"btn btn-secondary btn-block"},"Signup with Github")))},T=function(){var e=Object(n.useState)(!0),t=Object(k.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"card bg-dark text-white "},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},"Tracker"),c.a.createElement("p",{className:"card-text"},"Tracker helps you track your project seamlessly.")),c.a.createElement("div",{className:"card-body"},a?c.a.createElement(x,null):c.a.createElement(Q,null),c.a.createElement("p",{className:"text-center"},"Or,"),c.a.createElement("button",{className:"btn btn-block btn-outline-info",onClick:function(){return r(!a)}}," ",a?"Signup":"Login"," "))))},U=a(65),L=a.n(U),P=function(){return Object(n.useEffect)((function(){document.title="Tracker"}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"background"},c.a.createElement("img",{src:L.a,alt:"index",className:"index"})),c.a.createElement(T,null))},K=Object(s.b)(null,{addProject:function(e){var t=e.title,a=e.tag,r=e.description,n=e.toBeCompleted;return function(){var e=Object(w.a)(C.a.mark((function e(c){var o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/project/add",{title:t,tag:a,description:r,toBeCompleted:n});case 3:o=e.sent,j.b.info(o.data.msg),e.next=12;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.error(e.t0),j.b.error("some error occured adding project"),new Error("unable to save");case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(Object(A.f)((function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(""),s=Object(k.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),p=Object(k.a)(m,2),d=p[0],E=p[1],b=Object(n.useState)(""),g=Object(k.a)(b,2),f=g[0],v=g[1];Object(n.useEffect)((function(){document.title="Add Project | Tracker"}),[]);return c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"addProjectForm ",onSubmit:function(t){t.preventDefault(),r&&i&&d&&f&&e.addProject({title:r,tag:i,description:d,toBeCompleted:f}).then((function(){e.history.push("/")})).catch((function(e){return console.error(e)}))}},c.a.createElement("h3",null,"Add Project"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{value:r,onChange:function(e){return o(e.target.value)},required:!0,type:"text",className:"form-control ",id:"title",placeholder:"Title"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"tag"},"Tag"),c.a.createElement("select",{required:!0,className:"form-control ",id:"tag",value:i,onChange:function(e){return u(e.target.value)}},c.a.createElement("option",{disabled:!0}),c.a.createElement("option",{value:"urgent"},"urgent"),c.a.createElement("option",{value:"not urgent"},"not urgent"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"description"},"description"),c.a.createElement("textarea",{required:!0,className:"form-control ",id:"description",rows:"3",value:d,onChange:function(e){return E(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"toBeCompleted"},"to Be Completed on"),c.a.createElement("input",{required:!0,className:"form-control",id:"toBeCompleted",type:"date",value:f,onChange:function(e){return v(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn btn-primary btn-block"},"Add"))))}))),F=a(67),q=a.n(F),G=function(e){var t=e.project,a=t._id,r=t.completed,n=t.createdAt,o=t.description,l=t.tag,s=t.title,i=t.toBeCompleted;return c.a.createElement("div",null,c.a.createElement("div",{className:"card bg-primary text-white",style:{width:"19rem",margin:"1rem"}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},s),c.a.createElement("span",{className:"badge badge-info"},"# ",l," "),c.a.createElement("p",{className:"card-text"},o)),c.a.createElement("ul",{className:"list-group list-group-flush text-dark"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,r?"completed":"incomplete"," ")),c.a.createElement("li",{className:"list-group-item"}," ",c.a.createElement("strong",null,"createdAt :",c.a.createElement("br",null))," ",new Date(n).toDateString()),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null," ","To be completed on :",c.a.createElement("br",null))," ",new Date(i).toDateString())),c.a.createElement("div",{className:"card-body link-white"},c.a.createElement(h.b,{to:"/project/".concat(a),className:"card-link text-white"},"View"))))},R=Object(s.b)((function(e){return{projects:e.projects}}),{getProjects:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/api/project/".concat(e));case 3:r=t.sent,a({type:"GET_PROJECTS",payload:r.data.projects}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),j.b.error("some error occured fetching projects");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getMoreProjects:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/api/project/".concat(e));case 3:r=t.sent,a({type:"GET_MORE_PROJECTS",payload:r.data.projects}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),j.b.error("unable to fetch more projects");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return window.onscroll=q()((function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&e.getMoreProjects(e.projects.length)}),150),Object(n.useEffect)((function(){e.getProjects(),document.title="tracker"}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.projects.map((function(e,t){return c.a.createElement(G,{project:e,key:t})}))))})),M=a(114),Y=a(113),H=function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(""),s=Object(k.a)(l,2),i=s[0],u=s[1];return c.a.createElement("form",{className:"container mt-3",onSubmit:function(t){t.preventDefault(),r&&i&&e.addWork({flag:r,work:i})}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"work"},"work"),c.a.createElement("input",{type:"text",required:!0,className:"form-control",id:"work",value:i,onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",{className:"form-group "},c.a.createElement("label",{htmlFor:"tag"},"Tag"),c.a.createElement("select",{id:"tag",className:"form-control",value:r,onChange:function(e){return o(e.target.value)}},c.a.createElement("option",{value:"",disabled:!0}," "),c.a.createElement("option",{value:"urgent"},"Urgent"),c.a.createElement("option",{value:"not urgent"},"Not Urgent"))),c.a.createElement("button",{type:"submit",className:"btn btn-info"}," ","Add Work!"," "))},J=function(e){var t=Object(n.useState)(null),a=Object(k.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(k.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!1),p=Object(k.a)(m,2),d=p[0],E=p[1];Object(n.useEffect)((function(){v()}),[e.match.params.id]),r&&(document.title=r.title+"| Project");var b=function(){var t=Object(w.a)(C.a.mark((function t(){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/api/project/remove/".concat(e.match.params.id));case 3:a=t.sent,u(!1),j.b.info(a.data.msg),console.log(a.data),e.history.push("/"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),j.b.error("some error occured deleting the project"),u(!1);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),g=function(){var e=function(){return u(!1)};return c.a.createElement(M.a,{show:i,onHide:e},c.a.createElement(M.a.Header,{closeButton:!0},c.a.createElement(M.a.Title,null,"Delete Project")),c.a.createElement(M.a.Body,null,"Are you sure that you want to delete ",r.title," Project"),c.a.createElement(M.a.Footer,null,c.a.createElement(Y.a,{variant:"secondary",onClick:e},"Close"),c.a.createElement(Y.a,{variant:"danger",onClick:b},"Yes! delete")))},f=function(){var t=Object(w.a)(C.a.mark((function t(a){var r,n,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.flag,n=a.work,t.prev=1,t.next=4,O.a.post("/api/project/add-work/".concat(e.match.params.id),{flag:r,description:n});case 4:c=t.sent,j.b.info(c.data.msg),E(!1),v(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),console.log(t.t0.response.data);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(w.a)(C.a.mark((function t(){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/api/project/specific/".concat(e.match.params.id));case 3:a=t.sent,o(a.data.project),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),j.b.error(t.t0.response.data.errors[0]),console.log(t.t0.response.satus);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(w.a)(C.a.mark((function t(a){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete work",a),t.prev=1,t.next=4,O.a.delete("/api/project/delete-work/".concat(e.match.params.id,"/").concat(a));case 4:r=t.sent,j.b.info(r.data.msg),v(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0),j.b.error("some error occured deleting the work");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},r?c.a.createElement("div",{className:"project"},c.a.createElement("h3",null,r.title," ",c.a.createElement("span",{className:"badge badge-info"},"#",r.tag)),c.a.createElement("p",{className:"lead"},r.description),c.a.createElement("p",null,c.a.createElement("strong",null,"Completed : ")," ",r.completed?"yes":"no"," "),c.a.createElement("p",null," ",c.a.createElement("strong",null,"Created at : ")," ",new Date(r.createdAt).toDateString()),c.a.createElement("p",null," ",c.a.createElement("strong",null,"Deadline : "),new Date(r.toBeCompleted).toDateString()),c.a.createElement("p",null," ",c.a.createElement("strong",null,"Works : ")," ",r.works.length),c.a.createElement(h.b,{to:"/projects/edit/".concat(r._id),className:"btn btn-primary"}," ","Edit Project")," ",c.a.createElement("button",{className:"btn btn-danger",onClick:function(){return u(!0)}}," ","Delete Project")," ",c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return E(!d)}},d?"Cancel adding work":"add work"," "),c.a.createElement(g,null),d?c.a.createElement(H,{addWork:f}):null,c.a.createElement("ul",{className:"list-group mt-5 text-white"},r.works.map((function(e){return c.a.createElement("li",{className:"list-group-item bg-primary p-3 m-3",key:e._id},c.a.createElement("h4",null,e.description),c.a.createElement("p",{className:"badge badge-info"}," # ",e.flag," "),c.a.createElement("button",{className:"btn btn-danger d-block",onClick:function(){return A(e._id)}},"Delete"))})))):null)},X=function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(""),s=Object(k.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),p=Object(k.a)(m,2),d=p[0],E=p[1],b=Object(n.useState)(""),g=Object(k.a)(b,2),f=g[0],v=g[1],h=Object(n.useState)(""),A=Object(k.a)(h,2),S=A[0],I=A[1],N=Object(n.useState)(!1),B=Object(k.a)(N,2),y=B[0],x=B[1];Object(n.useEffect)((function(){Q()}),[e.match.params.id]);var Q=function(){var t=Object(w.a)(C.a.mark((function t(){var a,r,n,c,l,s,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("/api/project/specific/".concat(e.match.params.id));case 3:a=t.sent,r=a.data.project,n=r.title,c=r.tag,l=r.description,s=r.toBeCompleted,i=r.completed,o(n),u(c),E(l),v(Date.parse(s)),I(i),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0),j.b.error("some error occured"),x(!0);case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(r&&i&&d&&f&&S)){t.next=14;break}return t.prev=2,t.next=5,O.a.put("/api/project/edit/".concat(e.match.params.id),{tag:i,description:d,title:r,toBeCompleted:f,completed:S});case 5:n=t.sent,j.b.info(n.data.msg),e.history.push("/project/".concat(e.match.params.id)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0),j.b.error(t.t0.response.data.errors[0]);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},y?c.a.createElement("div",{className:"h2"}," Some error occured "):c.a.createElement("form",{className:"addProjectForm ",onSubmit:T},c.a.createElement("h3",null,"Edit project Form"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{value:r,onChange:function(e){return o(e.target.value)},required:!0,type:"text",className:"form-control ",id:"title",placeholder:"Title"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"tag"},"Tag"),c.a.createElement("select",{required:!0,className:"form-control ",id:"tag",value:i,onChange:function(e){return u(e.target.value)}},c.a.createElement("option",{disabled:!0}),c.a.createElement("option",{value:"urgent"},"urgent"),c.a.createElement("option",{value:"not urgent"},"not urgent"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"tag"},"is Complete"),c.a.createElement("select",{required:!0,className:"form-control ",id:"tag",value:S,onChange:function(e){return I(e.target.value)}},c.a.createElement("option",{disabled:!0}),c.a.createElement("option",{value:!1},"no"),c.a.createElement("option",{value:!0},"yes"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"description"},"description"),c.a.createElement("textarea",{required:!0,className:"form-control ",id:"description",rows:"3",value:d,onChange:function(e){return E(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"toBeCompleted"},"to Be Completed on"),c.a.createElement("input",{required:!0,className:"form-control",id:"toBeCompleted",type:"date",value:f,onChange:function(e){return v(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{className:"btn btn-primary btn-block"},"Edit"))))},W=a(116),D=a(115),Z=a(72),V=a.n(Z),z=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement(W.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},c.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Tracker ",c.a.createElement("img",{src:V.a,alt:"logo",width:"35",height:"35"})," "),c.a.createElement(W.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(W.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(D.a,{className:"mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{className:"/"===t?"nav-link active":"nav-link",to:"/"},"Home"," ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{className:"/create-one"===t?"nav-link active":"nav-link",to:"/create-one"},"add project"," "))),c.a.createElement(D.a,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/",className:"nav-link btn btn-outline-danger",onClick:function(){return e.props.userLogout()}},"Logout")))))}}]),a}(n.Component),_=Object(A.f)(Object(s.b)(null,{userLogout:B})(z)),$=(a(108),a(109),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){return console.log(this.props.user),c.a.createElement(h.a,null,c.a.createElement(j.a,{autoClose:5e3}),this.props.user._id?c.a.createElement("div",null,c.a.createElement(_,null),c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/",exact:!0,component:R}),c.a.createElement(A.a,{path:"/create-one",exact:!0,component:K}),c.a.createElement(A.a,{path:"/project/:id",exact:!0,component:J}),c.a.createElement(A.a,{path:"/projects/edit/:id",exact:!0,component:X}))):c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/",component:P})))}}]),a}(n.Component)),ee=Object(s.b)((function(e){return{user:e.user}}),{getUser:y})($),te=Object(u.d)(E,{},Object(u.a)(i.a));l.a.render(c.a.createElement(s.a,{store:te},c.a.createElement(ee,null)),document.getElementById("root"))},65:function(e,t,a){e.exports=a.p+"static/media/project.18b46b3e.jpg"},72:function(e,t){e.exports="data:image/png;base64,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"},77:function(e,t,a){e.exports=a(110)}},[[77,1,2]]]);
//# sourceMappingURL=main.4c958057.chunk.js.map