(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec7e56b"],{"2a53":function(t,e,i){"use strict";i("3cd0"),i("d548")},"34e9":function(t,e,i){"use strict";var a=i("2638"),s=i.n(a),r=i("d282"),n=i("ba31"),o=i("b1d2"),c=Object(r["a"])("cell-group"),l=c[0],u=c[1];function d(t,e,i,a){var r,c=t("div",s()([{class:[u({inset:e.inset}),(r={},r[o["f"]]=e.border,r)]},Object(n["b"])(a,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",{key:a.data.key},[t("div",{class:u("title",{inset:e.inset})},[i.title?i.title():e.title]),c]):c}d.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},e["a"]=l(d)},"3ec1":function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2"),i("01f7")},"40ef":function(t,e,i){},"565f":function(t,e,i){"use strict";var a=i("2638"),s=i.n(a),r=i("c31d"),n=i("a142");function o(){return!n["g"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var c=i("a8c1"),l=o();function u(){l&&Object(c["g"])(Object(c["b"])())}var d=i("482d"),h=i("1325"),m=i("d282"),f=i("ea8e"),p=i("ad06"),g=i("7744"),b=i("dfaf"),v=Object(m["a"])("field"),y=v[0],C=v[1];e["a"]=y({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(r["a"])({},b["a"],{name:String,rules:Array,disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[Number,String],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){var t=this.getProp("readonly");if(this.clearable&&!t){var e=Object(n["c"])(this.value)&&""!==this.value,i="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return e&&i}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return Object(r["a"])({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(f["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var a=e.validator(t,e);if(Object(n["f"])(a))return a.then(i);i(a)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:0!==t&&!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(n["d"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateFailed){var t=e.formValue;return i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i)?i.validator?e.runValidator(t,i).then((function(a){!1===a&&(e.validateFailed=!0,e.validateMessage=e.getRuleMessage(t,i))})):void 0:(e.validateFailed=!0,void(e.validateMessage=e.getRuleMessage(t,i)))}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.resetValidation(),e.runRules(t).then((function(){e.validateFailed?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));i.length&&this.validate(i)}},resetValidation:function(){this.validateFailed&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,e){void 0===e&&(e="onChange"),t=Object(n["c"])(t)?String(t):"";var i=this.maxlength;if(Object(n["c"])(i)&&t.length>i&&(t=this.value&&this.value.length===+i?this.value:t.slice(0,i)),"number"===this.type||"digit"===this.type){var a="number"===this.type;t=Object(d["a"])(t,a,a)}this.formatter&&e===this.formatTrigger&&(t=this.formatter(t));var s=this.$refs.input;s&&t!==s.value&&(s.value=t),t!==this.value&&this.$emit("input",t)},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.$nextTick(this.adjustSize),this.getProp("readonly")&&this.blur()},onBlur:function(t){this.getProp("readonly")||(this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),this.$nextTick(this.adjustSize),u())},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(h["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||Object(h["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){var e=Object(c["b"])();t.style.height="auto";var i=t.scrollHeight;if(Object(n["e"])(this.autosize)){var a=this.autosize,s=a.maxHeight,r=a.minHeight;s&&(i=Math.min(i,s)),r&&(i=Math.max(i,r))}i&&(t.style.height=i+"px",Object(c["g"])(e))}},genInput:function(){var t=this.$createElement,e=this.type,i=this.getProp("disabled"),a=this.getProp("readonly"),n=this.slots("input"),o=this.getProp("inputAlign");if(n)return t("div",{class:C("control",[o,"custom"]),on:{click:this.onClickInput}},[n]);var c={ref:"input",class:C("control",o),domProps:{value:this.value},attrs:Object(r["a"])({},this.$attrs,{name:this.name,disabled:i,readonly:a,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",s()([{},c]));var l,u=e;return"number"===e&&(u="text",l="decimal"),"digit"===e&&(u="tel",l="numeric"),t("input",s()([{attrs:{type:u,inputmode:l}},c]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:C("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(p["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:C("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(p["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=(this.value||"").length;return t("div",{class:C("word-limit")},[t("span",{class:C("word-num")},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:C("error-message",i)},[e])}}},getProp:function(t){return Object(n["c"])(this[t])?this[t]:this.vanForm&&Object(n["c"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,a=this.getProp("disabled"),s=this.getProp("labelAlign"),r={icon:this.genLeftIcon},n=this.genLabel();n&&(r.title=function(){return n});var o=this.slots("extra");return o&&(r.extra=function(){return o}),e(g["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:C("value"),titleClass:[C("label",s),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:r,class:C((t={error:this.showError,disabled:a},t["label-"+s]=s,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:C("body")},[this.genInput(),this.showClear&&e(p["a"],{attrs:{name:"clear"},class:C("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:C("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}})},"58d2":function(t,e,i){"use strict";i.d(e,"i",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"l",(function(){return c})),i.d(e,"k",(function(){return l})),i.d(e,"a",(function(){return u})),i.d(e,"f",(function(){return d})),i.d(e,"g",(function(){return h})),i.d(e,"e",(function(){return m})),i.d(e,"c",(function(){return f})),i.d(e,"d",(function(){return p})),i.d(e,"j",(function(){return g})),i.d(e,"m",(function(){return b})),i.d(e,"h",(function(){return v}));var a=i("b775"),s=i("4328"),r=i.n(s);function n(t,e,i,s,n,o,c,l,u,d,h){return Object(a["a"])({url:"/paymentgateway/isChannelBind",method:"post",data:r.a.stringify({bankCard:t,idCard:e,phone:i,userName:s,bankName:n,expiredTime:o,securityCode:c,dbankCard:l,dphone:u,dbankName:d,loginPhone:h})})}function o(t){return Object(a["a"])({url:"/creditcardmanager/app/balance/verify/band/card",method:"post",params:t})}function c(t){return Object(a["a"])({url:"/creditcardmanager/app/balance/plan/stop",method:"post",params:t})}function l(t,e){return Object(a["a"])({url:"creditcardmanager/app/empty/card/plan/save",method:"post",data:r.a.stringify({userId:t,creditCardNumber:e})})}function u(t){return Object(a["a"])({url:"/creditcardmanager/app/balance/plan/save",method:"post",params:t})}function d(t,e,i,s,n,o,c,l,u){return Object(a["a"])({url:"/creditcardmanager/app/create/repayment/task",method:"post",data:r.a.stringify({userId:t,brandId:e,creditCardNumber:i,amount:s,reservedAmount:n,executeDate:o,version:c,isNotPoint:l,dayRepaymentCount:u})})}function h(t){return Object(a["a"])({url:"/creditcardmanager/app/create/repayment/task/new",method:"post",params:t})}function m(t,e,i,s,n,o,c,l,u){return Object(a["a"])({url:"/creditcardmanager/app/save/all/task",method:"post",data:r.a.stringify({taskJSON:t,amount:e,reservedAmount:i,version:s,city:n,isCustom:o,extra:c,couponId:l,creditCardNumber:u})})}function f(t,e,i,s,n){return Object(a["a"])({url:"/creditcardmanager/app/verify/card/isuserable",method:"post",data:r.a.stringify({userId:t,brandId:e,creditCardNumber:i,version:s,repaymentType:n})})}function p(t,e,i){return Object(a["a"])({url:"/creditcardmanager/app/get/repaymentbill/by/userid",method:"post",data:r.a.stringify({userId:t,creditCardNumber:e,size:i})})}function g(t,e){return Object(a["a"])({url:"/creditcardmanager/app/delete/repaymenttask/by/repaymenttaskid",method:"post",data:r.a.stringify({repaymentTaskId:t,isCloseAutoConsume:1})})}function b(){return Object(a["a"])({url:"/creditcardmanager/app/plan/today/run",method:"post"})}function v(){return Object(a["a"])({url:"/creditcardmanager/app/limit/min",method:"post",data:r.a.stringify({})})}},"7f75":function(t,e,i){},"8e11":function(t,e,i){"use strict";i("3cd0"),i("25bb"),i("f8c2")},"9eda":function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2"),i("01f7"),i("7f75")},abc1:function(t,e,i){},b342:function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2")},bfac:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.disshow,expression:"disshow"}],staticClass:"main"},[i("div",{staticClass:"layb"},[i("img",{attrs:{src:t.src}}),i("div",{staticClass:"zi"},[t._v("\n      "+t._s(t.zi)+"\n    ")]),1==t.but?i("div",{staticClass:"but"},[i("div",{staticClass:"confirm theme-linear-bg",on:{click:function(e){return t.disconfirm()}}},[t._v("确定")])]):t._e(),2==t.but?i("div",{staticClass:"inp"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sms,expression:"sms"}],attrs:{type:"Number"},domProps:{value:t.sms},on:{input:function(e){e.target.composing||(t.sms=e.target.value)}}}),i("button",{staticClass:"cancel",on:{click:function(e){"获取验证码"==t.message&&t.getCode()}}},[t._v(t._s(t.message))])]):t._e(),2==t.but?i("div",{staticClass:"but"},[i("button",{staticClass:"cancel2",on:{click:function(e){return t.smsConfirm()}}},[t._v("确认")])]):t._e(),2==t.but?i("div",{staticClass:"close2"},[i("van-icon",{attrs:{name:"close",color:"#fff"},on:{click:function(e){return t.topClose()}}})],1):t._e(),3==t.but?i("div",{staticClass:"close2"},[i("van-icon",{attrs:{name:"close",color:"#fff"},on:{click:function(e){return t.topClose()}}})],1):t._e(),2!=t.but?i("div",{staticClass:"close"},[i("van-icon",{attrs:{name:"close",color:"#fff"},on:{click:function(e){return t.topClose()}}})],1):t._e()]),i("div",{staticClass:"zhanwei"})])},s=[],r=i("bd86"),n=(i("7f7f"),i("b342"),i("ad06")),o={data:function(){return{disshow:!1,sms:"",num:60}},props:["src","zi","but","message"],methods:{disopen:function(){this.disshow=!0},discancel:function(){this.disshow=!1},disconfirm:function(){this.disshow=!1,this.$emit("disconfirm")},close:function(){this.disshow=!1},topClose:function(){this.disshow=!1,this.$emit("topClose")},getCode:function(){this.$emit("getCode")},smsConfirm:function(){this.$emit("smsConfirm",this.sms)}},components:Object(r["a"])({},n["a"].name,n["a"])},c=o,l=(i("f3fe"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,"4d2734e0",null);e["a"]=u.exports},c625:function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2"),i("25bb"),i("968a")},d3f5:function(t,e,i){"use strict";var a=i("40ef"),s=i.n(a);s.a},d548:function(t,e,i){},f3fe:function(t,e,i){"use strict";var a=i("abc1"),s=i.n(a);s.a},f513:function(t,e,i){"use strict";i.r(e);var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:"还款确认","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("div",{staticClass:"warpper"},[i("div",{staticClass:"upcreditcard_title"},[t._v("信息加密处理，仅用于银行验证，请验证您本人的银行卡")]),i("div",{staticClass:"card_box"},[i("div",{staticClass:"card_item"},[i("van-field",{attrs:{label:"持卡人",readonly:"readonly"},model:{value:t.authorityList.result.userName,callback:function(e){t.$set(t.authorityList.result,"userName",e)},expression:"authorityList.result.userName"}}),i("van-field",{attrs:{label:"卡号",placeholder:"请输入信用卡号",clearable:"",minlength:"10",readonly:"readonly"},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}}),i("van-field",{attrs:{label:"安全码",maxlength:"3",readonly:"readonly",placeholder:"请输入(卡背面CVN2后三位数字)",clearable:""},model:{value:t.authorityList.result.securityCode,callback:function(e){t.$set(t.authorityList.result,"securityCode",e)},expression:"authorityList.result.securityCode"}}),i("van-field",{attrs:{label:"有效期",maxlength:"4",readonly:"readonly",placeholder:"请输入(如09/22输入0922)",clearable:""},model:{value:t.authorityList.result.expiredTime,callback:function(e){t.$set(t.authorityList.result,"expiredTime",e)},expression:"authorityList.result.expiredTime"}}),i("van-field",{attrs:{label:"手机号",placeholder:"请输入银行卡预留手机号",readonly:"readonly",clearable:"",maxlength:"11"},model:{value:t.authorityList.result.phone,callback:function(e){t.$set(t.authorityList.result,"phone",e)},expression:"authorityList.result.phone"}}),i("van-field",{attrs:{center:"",type:"digit",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[i("van-button",{attrs:{size:"small",plain:"",type:"danger"},on:{click:function(e){"获取验证码"==t.message&&t.getCode()}}},[t._v("\n              "+t._s(t.message)+"\n            ")])]},proxy:!0}]),model:{value:t.smsCode,callback:function(e){t.smsCode=e},expression:"smsCode"}})],1)]),i("div",{staticClass:" upcreditcard_btn_box"},[i("van-button",{staticClass:" upcreditcard_btn  ",attrs:{type:"primary",round:""},nativeOn:{click:function(e){return t.confirm()}}},[t._v("确认")])],1)])],1)},r=[],n=(i("28a5"),i("bd86")),o=(i("b342"),i("ad06")),c=(i("c625"),i("b650")),l=(i("87d0"),i("e41f")),u=(i("8e11"),i("f253")),d=(i("9eda"),i("565f")),h=(i("2a53"),i("34e9")),m=(i("3ec1"),i("7744")),f=(i("7f7f"),i("da02"),i("6b41")),p=(i("bfac"),i("58d2")),g=i("b775"),b=i("4328"),v=i.n(b),y={data:function(){return{token:localStorage.getItem("token"),cardNo:"",brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),phoneTrueFalseBy:!1,codeTrueFalseBy:!1,smsCode:"",num:60,message:"获取验证码",orderCode:"",num2:60,message2:"获取验证码",channelactive:{},authorityList:{result:{bankCard:"",userName:"",phone:"",securityCode:"",expiredTime:""}},task:{},extra:"",start:"为保障用户还款时的多元化场景，更有利于养卡提额，建立一个还款多元化消费、多通道介入机制和即时切换机制，请您确认是否体验此功能",getSmsUrl:"",confirmSmsUrl:"",channelTags:"",isold:""}},components:(a={},Object(n["a"])(a,f["a"].name,f["a"]),Object(n["a"])(a,m["a"].name,m["a"]),Object(n["a"])(a,h["a"].name,h["a"]),Object(n["a"])(a,d["a"].name,d["a"]),Object(n["a"])(a,u["a"].name,u["a"]),Object(n["a"])(a,l["a"].name,l["a"]),Object(n["a"])(a,c["a"].name,c["a"]),Object(n["a"])(a,o["a"].name,o["a"]),a),created:function(){this.authorityList=JSON.parse(this.$route.params.authorityList),this.item=JSON.parse(this.$route.params.item),this.task=JSON.parse(this.$route.params.task),this.province=this.$route.params.province,this.extra=this.$route.params.extra,this.isold=this.$route.params.isold,this.cardNo=this.authorityList.result.bankCard.substring(0,4)+"****  ****  ****"+this.authorityList.result.bankCard.substring(this.authorityList.result.bankCard.length-4,this.authorityList.result.bankCard.length)},methods:{onClickLeft:function(){this.publicJs.back()},getUserInfo:function(){var t=this;userInfoQuery(this.token).then((function(e){"000000"==e.resp_code&&(t.userList=e.result)}))},getCode:function(){var t=this;Object(g["a"])({url:this.authorityList.result.getSmsUrl,method:"post",data:v.a.stringify({bankCard:this.authorityList.result.bankCard,bankName:this.authorityList.result.bankName,channelTag:this.authorityList.result.channelTag,expiredTime:this.authorityList.result.expiredTime,idCard:this.authorityList.result.idCard,phone:this.authorityList.result.phone,securityCode:this.authorityList.result.securityCode,userName:this.authorityList.result.userName,rate:this.authorityList.result.rate,extraFee:this.authorityList.result.extraFee,dbankCard:this.authorityList.result.dbankCard,dbankName:this.authorityList.result.dbankName,dphone:this.authorityList.result.dphone,userId:this.item.userId})}).then((function(e){if("000000"==e.resp_code){var i=setInterval((function(){t.message="("+t.num+")秒",t.num--,0==t.num&&(clearInterval(i),t.num=60,t.message="获取验证码")}),1e3);t.$toast({message:"验证码发送成功",position:"bottom"})}else if("999995"==e.resp_code){var a=setInterval((function(){t.message="("+t.num+")秒",t.num--,0==t.num&&(clearInterval(a),t.num=60,t.message="获取验证码")}),1e3);t.$toast({message:"验证码发送成功",position:"bottom"}),t.orderCode=res.result}else if("666666"==e.resp_code)t.createTask(t.authorityList);else if("999991"==e.resp_code){var s=document.createElement("div");s.innerHTML=e.result,document.body.appendChild(s),null==document.getElementById("pay_form")?document.getElementById("gatewayform").submit():document.getElementById("pay_form").submit()}}))},confirm:function(){var t=this;""!=this.smsCode?Object(g["a"])({url:this.authorityList.result.ipAddress+this.authorityList.result.confirmSmsUrl,method:"post",data:v.a.stringify({bankCard:this.authorityList.result.bankCard,bankName:this.authorityList.result.bankName,channelTag:this.authorityList.result.channelTag,expiredTime:this.authorityList.result.expiredTime,idCard:this.authorityList.result.idCard,phone:this.authorityList.result.phone,securityCode:this.authorityList.result.securityCode,userName:this.authorityList.result.userName,smsCode:this.smsCode,orderNo:this.orderCode,userId:this.item.userId})}).then((function(e){t.$store.commit("closeLoading"),e.resp_code,t.createTask()})):this.$notify({message:"请先输入验证码",duration:1e3})},createTask:function(){var t=this;1==this.isold?(this.$store.commit("Loading"),Object(p["e"])(JSON.stringify(this.task.result),this.task.amount,this.task.reservedAmount,this.task.version,this.province,"",JSON.stringify(this.extra),this.task.couponId,this.item.cardNo).then((function(e){t.$store.commit("closeLoading"),"000000"==e.resp_code?t.$router.push({path:"/creditcard",query:{phone:localStorage.getItem("phone"),token:localStorage.getItem("token"),brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),ip:t.global.ip,type:"h5",deviceId:localStorage.getItem("deviceId")}}):"999992"==e.resp_code&&t.$router.push({name:"confirmPlan",params:{channelactive:JSON.stringify(version),authorityList:JSON.stringify(e),item:JSON.stringify(t.item),task:JSON.stringify(t.task),province:province,extra:t.extra,isold:1}})}))):2==this.isold&&(this.$store.commit("Loading"),Object(p["b"])(this.item.userId,this.task.creditCardNumber).then((function(e){if(t.$store.commit("closeLoading"),"000000"==e.resp_code){var i=JSON.parse(t.extra).merprovince+"-"+JSON.parse(t.extra).mercity+"-"+JSON.parse(t.extra).provinceId.split(",")[0]+"-"+JSON.parse(t.extra).cityCode.split(",")[0];Object(p["a"])(t.item.userId,t.task.creditCardNumber,i).then((function(e){t.$store.commit("closeLoading"),"000000"==e.resp_code&&t.$router.push({path:"/creditcard",query:{phone:localStorage.getItem("phone"),token:localStorage.getItem("token"),brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),ip:t.global.ip,type:"h5",deviceId:localStorage.getItem("deviceId")}})}))}else"999994"==e.resp_code?t.$dialog.alert({title:"温馨提示",message:e.resp_message}):"999996"==e.resp_code?t.$router.push({name:"link",params:{url:JSON.stringify(e.result),title:JSON.stringify("权限认证")}}):"999995"==e.resp_code?window.location.href=e.result:"999992"==e.resp_code&&(t.authorityList=e,t.$router.go(-1))})))},smsConfirm:function(t){var e=this;""!=t&&null!=t?Object(g["a"])({url:this.confirmSmsUrl.substring(6),method:"post",data:v.a.stringify({bankCard:this.item.cardNo,idCard:this.item.idcard,phone:this.item.phone,userName:this.item.userName,bankName:this.item.bankName,expiredTime:this.item.expiredTime,securityCode:this.item.securityCode,channelTag:this.channelTags,smsCode:t})}).then((function(t){"000000"==t.resp_code&&(e.$toast({message:t.resp_message,position:"bottom"}),e.$refs.Dialog.close(),e.$router.push({path:"/creditcard",query:{phone:localStorage.getItem("phone"),token:localStorage.getItem("token"),brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),ip:e.global.ip,type:"h5",deviceId:localStorage.getItem("deviceId")}}))}),(function(t){e.$toast({message:res.resp_message,position:"bottom"})})):this.$toast({message:"请输入验证码",position:"bottom"})},getCode2:function(){var t=this;Object(g["a"])({url:this.getSmsUrl,method:"post",data:v.a.stringify({bankCard:this.item.cardNo,idCard:this.item.idcard,phone:this.item.phone,userName:this.item.userName,bankName:this.item.bankName,expiredTime:this.item.expiredTime,securityCode:this.item.securityCode,channelTag:this.channelTags})}).then((function(e){if("000000"==e.resp_code){var i=setInterval((function(){t.message2="("+t.num+")秒",t.num2--,0==t.num&&(clearInterval(i),t.num2=60,t.message2="获取验证码")}),1e3);t.$toast({message:"验证码发送成功,请注意查收",position:"bottom"})}}))},topClose:function(){this.$router.push({path:"/creditcard",query:{phone:localStorage.getItem("phone"),token:localStorage.getItem("token"),brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),ip:this.global.ip,type:"h5",deviceId:localStorage.getItem("deviceId")}})}}},C=y,k=(i("d3f5"),i("2877")),I=Object(k["a"])(C,s,r,!1,null,"7655f972",null);e["default"]=I.exports}}]);