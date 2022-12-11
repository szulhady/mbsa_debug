(window.webpackJsonp=window.webpackJsonp||[]).push([[34,33],{505:function(t,e,r){"use strict";r.r(e);var n={name:"Notification",props:["message"]},o=r(41),c=r(84),l=r.n(c),d=r(211),f=r(66),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notification is-danger"},[r("v-card",{staticClass:"my-4"},t._l(t.message,(function(e,n){return r("v-card-subtitle",{key:n},[t._v("\n      "+t._s(e.msg)+"\n    ")])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.b})},513:function(t,e,r){r(15)({target:"Object",stat:!0},{is:r(312)})},529:function(t,e,r){var content=r(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("1a5efa0c",content,!0,{sourceMap:!1})},563:function(t,e,r){"use strict";var n=r(3),o=(r(46),r(61),r(182),r(10),r(4),r(11),r(60),r(122),r(9),r(13),r(19),r(20),r(12)),c=r(106),l=r(144);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},587:function(t,e,r){"use strict";r(529)},588:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.container2[data-v-e43e1714]{margin:50px auto;display:flex;flex-direction:column;justify-content:center;max-width:350px;align-items:center}.control[data-v-e43e1714]{outline:1px;width:300px}.register[data-v-e43e1714]{margin-top:10px;font-size:15px!important}a[data-v-e43e1714]{color:#5f9ea0;text-decoration:none}.input[data-v-e43e1714]{font-size:18px}.submit-btn[data-v-e43e1714]{font-family:"Montserrat",sans-serif;color:#eee}',""]),t.exports=n},637:function(t,e,r){"use strict";r.r(e);var n=r(26),o=(r(78),{layout:"login",components:{Notification:r(505).default},data:function(){return{username:"",email:"",password:"",password2:"",error:null}},methods:{register:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("https://soap.txio.live/api/user/register",{username:t.username,email:t.email,password:t.password,password2:t.password2}).then((function(e){t.error=e.data,"Success. You can log in now"==e.data[0].msg&&(t.username="",t.email="",t.password="",t.password2="")}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),t.error=e.t0.response.data.message;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},track:function(){var t=this;window.onclick=function(e){var r=document.getElementById("notification");e.target!=r&&(t.error=null)}}},mounted:function(){this.track()}}),c=(r(587),r(41)),l=r(84),d=r.n(l),f=r(236),v=r(563),m=r(718),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"container2"},[r("h2",{staticClass:"title has-text-centered",staticStyle:{color:"#eee"}},[t._v("Register")]),t._v(" "),t.error?r("Notification",{attrs:{message:t.error,id:"notification"}}):t._e(),t._v(" "),r("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"text",label:"Full Name",dark:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"email",label:"Email",dark:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"password",label:"Password",dark:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"password",label:"Confirm Password",dark:""},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1)]),t._v(" "),r("div",{staticClass:"control"},[r("v-btn",{staticClass:"submit-btn",attrs:{block:"",type:"submit",outlined:""}},[t._v("Register")])],1),t._v(" "),r("p",{staticClass:"title has-text-centered register"},[r("span",{staticStyle:{color:"#eee"}},[t._v("Already got an account?")]),t._v(" "),r("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")])],1)])],1)])}),[],!1,null,"e43e1714",null);e.default=component.exports;d()(component,{Notification:r(505).default}),d()(component,{VBtn:f.a,VForm:v.a,VTextField:m.a})}}]);