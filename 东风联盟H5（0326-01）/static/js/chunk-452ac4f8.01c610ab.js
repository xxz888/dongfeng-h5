(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452ac4f8"],{2160:function(t,e,r){"use strict";var a=r("9d94"),i=r.n(a);i.a},"26f1":function(t,e,r){"use strict";r.d(e,"h",(function(){return s})),r.d(e,"e",(function(){return o})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return d})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return m}));var a=r("b775"),i=r("4328"),n=r.n(i);function s(){return Object(a["a"])({url:"/creditcardmanager/app/empty/card/get/channel/all",method:"post"})}function o(t,e,r){return Object(a["a"])({url:"/creditcardmanager/app/empty/card/verify/card",method:"post",data:n.a.stringify({userId:t,creditCardNumber:e,version:r})})}function u(t,e,r,i,s,o){return Object(a["a"])({url:"/creditcardmanager/app/empty/card/calculate/reservedamount",method:"post",data:n.a.stringify({userId:t,creditCardNumber:e,amount:r,executeDate:i,version:s,dayRepaymentCounts:o})})}function l(t){return Object(a["a"])({url:"/creditcardmanager/app/empty/card/plan/error/message",method:"post",data:n.a.stringify({planItemId:t})})}function c(t){return Object(a["a"])({url:"/creditcardmanager/app/empty/card/plan/get",method:"post",data:n.a.stringify({planId:t})})}function d(t,e,r,i,s,o){return Object(a["a"])({url:"creditcardmanager/app/empty/card/plan/apply",method:"post",data:n.a.stringify({userId:t,creditCardNumber:e,taskAmount:r,version:i,dayRepaymentCounts:s,city:o})})}function h(t,e){return Object(a["a"])({url:"creditcardmanager/app/empty/card/plan/reRun",method:"post",data:n.a.stringify({userId:t,planId:e})})}function m(t,e){return Object(a["a"])({url:"creditcardmanager/app/empty/card/plan/stop",method:"post",data:n.a.stringify({userId:t,planId:e})})}},"2a53":function(t,e,r){"use strict";r("3cd0"),r("d548")},"2e95":function(t,e,r){"use strict";r.r(e);var a,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"还款确认","left-arrow":""},on:{"click-left":t.onClickLeft}}),r("div",{staticClass:"warpper"},[r("div",{staticClass:"upcreditcard_title"},[t._v("信息加密处理，仅用于银行验证，请验证您本人的银行卡")]),r("div",{staticClass:"card_box"},[r("div",{staticClass:"card_item"},[r("van-field",{attrs:{label:"持卡人",readonly:"readonly"},model:{value:t.authorityList.result.userName,callback:function(e){t.$set(t.authorityList.result,"userName",e)},expression:"authorityList.result.userName"}}),r("van-field",{attrs:{label:"卡号",placeholder:"请输入信用卡号",clearable:"",minlength:"10",readonly:"readonly"},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}}),r("van-field",{attrs:{label:"安全码",maxlength:"3",readonly:"readonly",placeholder:"请输入(卡背面CVN2后三位数字)",clearable:""},model:{value:t.authorityList.result.securityCode,callback:function(e){t.$set(t.authorityList.result,"securityCode",e)},expression:"authorityList.result.securityCode"}}),r("van-field",{attrs:{label:"有效期",maxlength:"4",readonly:"readonly",placeholder:"请输入(如09/22输入0922)",clearable:""},model:{value:t.authorityList.result.expiredTime,callback:function(e){t.$set(t.authorityList.result,"expiredTime",e)},expression:"authorityList.result.expiredTime"}}),r("van-field",{attrs:{label:"手机号",placeholder:"请输入银行卡预留手机号",readonly:"readonly",clearable:"",maxlength:"11"},model:{value:t.authorityList.result.phone,callback:function(e){t.$set(t.authorityList.result,"phone",e)},expression:"authorityList.result.phone"}}),r("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码"},scopedSlots:t._u([{key:"button",fn:function(){return[r("van-button",{attrs:{size:"small",plain:"",type:"danger"},on:{click:function(e){return t.getCode()}}},[t._v(t._s(t.message))])]},proxy:!0}]),model:{value:t.smsCode,callback:function(e){t.smsCode=e},expression:"smsCode"}})],1)]),r("div",{staticClass:" upcreditcard_btn_box"},[r("van-button",{staticClass:" upcreditcard_btn  ",attrs:{type:"primary",round:""},nativeOn:{click:function(e){return t.confirm()}}},[t._v("确认")])],1)])],1)},n=[],s=r("bd86"),o=(r("b342"),r("ad06")),u=(r("c625"),r("b650")),l=(r("87d0"),r("e41f")),c=(r("8e11"),r("f253")),d=(r("9eda"),r("565f")),h=(r("2a53"),r("34e9")),m=(r("3ec1"),r("7744")),p=(r("7f7f"),r("da02"),r("6b41")),f=r("58d2"),g=r("26f1"),b=r("b775"),v=r("4328"),y=r.n(v),C={data:function(){return{token:localStorage.getItem("token"),cardNo:"",brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),phoneTrueFalseBy:!1,codeTrueFalseBy:!1,smsCode:"",num:60,message:"获取验证码",orderCode:"",channelactive:{},authorityList:{result:{bankCard:"",userName:"",phone:"",securityCode:"",expiredTime:""}}}},components:(a={},Object(s["a"])(a,p["a"].name,p["a"]),Object(s["a"])(a,m["a"].name,m["a"]),Object(s["a"])(a,h["a"].name,h["a"]),Object(s["a"])(a,d["a"].name,d["a"]),Object(s["a"])(a,c["a"].name,c["a"]),Object(s["a"])(a,l["a"].name,l["a"]),Object(s["a"])(a,u["a"].name,u["a"]),Object(s["a"])(a,o["a"].name,o["a"]),a),computed:{},created:function(){this.authorityList=JSON.parse(this.$route.params.authorityList),this.item=JSON.parse(this.$route.params.item),this.cardNo=this.authorityList.result.bankCard.substring(0,4)+"****  ****  ****"+this.authorityList.result.bankCard.substring(this.authorityList.result.bankCard.length-4,this.authorityList.result.bankCard.length)},methods:{onClickLeft:function(){this.publicJs.back()},getUserInfo:function(){var t=this;userInfoQuery(this.token).then((function(e){"000000"==e.resp_code&&(t.userList=e.result)}))},getCode:function(){var t=this;Object(b["a"])({url:this.authorityList.result.ipAddress+this.authorityList.result.getSmsUrlNew,method:"post",data:y.a.stringify({bankCard:this.authorityList.result.bankCard,bankName:this.authorityList.result.bankName,channelTag:this.authorityList.result.channelTag,expiredTime:this.authorityList.result.expiredTime,idCard:this.authorityList.result.idCard,phone:this.authorityList.result.phone,securityCode:this.authorityList.result.securityCode,userName:this.authorityList.result.userName,rate:this.authorityList.result.rate,extraFee:this.authorityList.result.extraFee,dbankCard:this.authorityList.result.dbankCard,dbankName:this.authorityList.result.dbankName,dphone:this.authorityList.result.dphone})}).then((function(e){if("000000"==e.resp_code){var r=setInterval((function(){t.message="("+t.num+")秒",t.num--,0==t.num&&(clearInterval(r),t.num=60,t.message="获取验证码")}),1e3);t.$toast({message:"验证码发送成功",position:"bottom"})}else if("999995"==e.resp_code){var a=setInterval((function(){t.message="("+t.num+")秒",t.num--,0==t.num&&(clearInterval(a),t.num=60,t.message="获取验证码")}),1e3);t.$toast({message:"验证码发送成功",position:"bottom"}),t.orderCode=res.result}else if("666666"==e.resp_code)t.createTask(t.authorityList);else if("999991"==e.resp_code){var i=document.createElement("div");i.innerHTML=e.result,document.body.appendChild(i),null==document.getElementById("pay_form")?document.getElementById("gatewayform").submit():document.getElementById("pay_form").submit()}}))},confirm:function(){var t=this;""!=this.smsCode?Object(b["a"])({url:this.authorityList.result.ipAddress+this.authorityList.result.confirmSmsUrl,method:"post",data:y.a.stringify({bankCard:this.authorityList.result.bankCard,bankName:this.authorityList.result.bankName,channelTag:this.authorityList.result.channelTag,expiredTime:this.authorityList.result.expiredTime,idCard:this.authorityList.result.idCard,phone:this.authorityList.result.phone,securityCode:this.authorityList.result.securityCode,userName:this.authorityList.result.userName,smsCode:this.smsCode,orderNo:this.orderCode})}).then((function(e){t.$store.commit("closeLoading"),"000000"==e.resp_code&&Object(g["e"])(t.userId,t.item.creditCardNumber,t.item.version).then((function(e){"000000"==e.resp_code?t.confirmPlan():t.$toast({message:e.resp_message,position:"bottom"})}))})):this.$notify({message:"请先输入验证码",duration:1e3})},confirmPlan:function(){var t=this;this.$store.commit("Loading"),Object(f["k"])(this.userId,this.item.creditCardNumber).then((function(e){t.$store.commit("closeLoading"),"000000"==e.resp_code&&(t.$router.push({path:"/zero",query:{phone:localStorage.getItem("phone"),token:localStorage.getItem("token"),brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),ip:t.global.ip,type:"h5",deviceId:localStorage.getItem("deviceId")}}),t.$toast({message:"计划启动成功",position:"bottom"}))})).catch((function(e){t.$toast({message:"计划启动失败",position:"bottom"})}))}}},k=C,I=(r("2160"),r("2877")),L=Object(I["a"])(k,i,n,!1,null,"2b8e0950",null);e["default"]=L.exports},"34e9":function(t,e,r){"use strict";var a=r("2638"),i=r.n(a),n=r("d282"),s=r("ba31"),o=r("b1d2"),u=Object(n["a"])("cell-group"),l=u[0],c=u[1];function d(t,e,r,a){var n,u=t("div",i()([{class:[c({inset:e.inset}),(n={},n[o["f"]]=e.border,n)]},Object(s["b"])(a,!0)]),[null==r.default?void 0:r.default()]);return e.title||r.title?t("div",{key:a.data.key},[t("div",{class:c("title",{inset:e.inset})},[r.title?r.title():e.title]),u]):u}d.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},e["a"]=l(d)},"3ec1":function(t,e,r){"use strict";r("3cd0"),r("1a44"),r("acc2"),r("01f7")},"565f":function(t,e,r){"use strict";var a=r("2638"),i=r.n(a),n=r("c31d"),s=r("a142");function o(){return!s["g"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var u=r("a8c1"),l=o();function c(){l&&Object(u["g"])(Object(u["b"])())}var d=r("482d"),h=r("1325"),m=r("d282"),p=r("ea8e"),f=r("ad06"),g=r("7744"),b=r("dfaf"),v=Object(m["a"])("field"),y=v[0],C=v[1];e["a"]=y({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(n["a"])({},b["a"],{name:String,rules:Array,disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[Number,String],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){var t=this.getProp("readonly");if(this.clearable&&!t){var e=Object(s["c"])(this.value)&&""!==this.value,r="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return e&&r}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return Object(n["a"])({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(p["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(r){var a=e.validator(t,e);if(Object(s["f"])(a))return a.then(r);r(a)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:0!==t&&!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var r=e.message;return Object(s["d"])(r)?r(t,e):r},runRules:function(t){var e=this;return t.reduce((function(t,r){return t.then((function(){if(!e.validateFailed){var t=e.formValue;return r.formatter&&(t=r.formatter(t,r)),e.runSyncRule(t,r)?r.validator?e.runValidator(t,r).then((function(a){!1===a&&(e.validateFailed=!0,e.validateMessage=e.getRuleMessage(t,r))})):void 0:(e.validateFailed=!0,void(e.validateMessage=e.getRuleMessage(t,r)))}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(r){t||r(),e.resetValidation(),e.runRules(t).then((function(){e.validateFailed?r({name:e.name,message:e.validateMessage}):r()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,r=this.rules.filter((function(r){return r.trigger?r.trigger===t:e}));r.length&&this.validate(r)}},resetValidation:function(){this.validateFailed&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,e){void 0===e&&(e="onChange"),t=Object(s["c"])(t)?String(t):"";var r=this.maxlength;if(Object(s["c"])(r)&&t.length>r&&(t=this.value&&this.value.length===+r?this.value:t.slice(0,r)),"number"===this.type||"digit"===this.type){var a="number"===this.type;t=Object(d["a"])(t,a,a)}this.formatter&&e===this.formatTrigger&&(t=this.formatter(t));var i=this.$refs.input;i&&t!==i.value&&(i.value=t),t!==this.value&&this.$emit("input",t)},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.$nextTick(this.adjustSize),this.getProp("readonly")&&this.blur()},onBlur:function(t){this.getProp("readonly")||(this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),this.$nextTick(this.adjustSize),c())},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(h["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var r=this.getProp("submitOnEnter");r||"textarea"===this.type||Object(h["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){var e=Object(u["b"])();t.style.height="auto";var r=t.scrollHeight;if(Object(s["e"])(this.autosize)){var a=this.autosize,i=a.maxHeight,n=a.minHeight;i&&(r=Math.min(r,i)),n&&(r=Math.max(r,n))}r&&(t.style.height=r+"px",Object(u["g"])(e))}},genInput:function(){var t=this.$createElement,e=this.type,r=this.getProp("disabled"),a=this.getProp("readonly"),s=this.slots("input"),o=this.getProp("inputAlign");if(s)return t("div",{class:C("control",[o,"custom"]),on:{click:this.onClickInput}},[s]);var u={ref:"input",class:C("control",o),domProps:{value:this.value},attrs:Object(n["a"])({},this.$attrs,{name:this.name,disabled:r,readonly:a,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",i()([{},u]));var l,c=e;return"number"===e&&(c="text",l="decimal"),"digit"===e&&(c="tel",l="numeric"),t("input",i()([{attrs:{type:c,inputmode:l}},u]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:C("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(f["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,r=e("right-icon")||this.rightIcon;if(r)return t("div",{class:C("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(f["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=(this.value||"").length;return t("div",{class:C("word-limit")},[t("span",{class:C("word-num")},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var r=this.getProp("errorMessageAlign");return t("div",{class:C("error-message",r)},[e])}}},getProp:function(t){return Object(s["c"])(this[t])?this[t]:this.vanForm&&Object(s["c"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],r=this.slots,a=this.getProp("disabled"),i=this.getProp("labelAlign"),n={icon:this.genLeftIcon},s=this.genLabel();s&&(n.title=function(){return s});var o=this.slots("extra");return o&&(n.extra=function(){return o}),e(g["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:C("value"),titleClass:[C("label",i),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:n,class:C((t={error:this.showError,disabled:a},t["label-"+i]=i,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:C("body")},[this.genInput(),this.showClear&&e(f["a"],{attrs:{name:"clear"},class:C("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),r("button")&&e("div",{class:C("button")},[r("button")])]),this.genWordLimit(),this.genMessage()])}})},"58d2":function(t,e,r){"use strict";r.d(e,"i",(function(){return s})),r.d(e,"b",(function(){return o})),r.d(e,"l",(function(){return u})),r.d(e,"k",(function(){return l})),r.d(e,"a",(function(){return c})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return h})),r.d(e,"e",(function(){return m})),r.d(e,"c",(function(){return p})),r.d(e,"d",(function(){return f})),r.d(e,"j",(function(){return g})),r.d(e,"m",(function(){return b})),r.d(e,"h",(function(){return v}));var a=r("b775"),i=r("4328"),n=r.n(i);function s(t,e,r,i,s,o,u,l,c,d,h){return Object(a["a"])({url:"/paymentgateway/isChannelBind",method:"post",data:n.a.stringify({bankCard:t,idCard:e,phone:r,userName:i,bankName:s,expiredTime:o,securityCode:u,dbankCard:l,dphone:c,dbankName:d,loginPhone:h})})}function o(t){return Object(a["a"])({url:"/creditcardmanager/app/balance/verify/band/card",method:"post",params:t})}function u(t){return Object(a["a"])({url:"/creditcardmanager/app/balance/plan/stop",method:"post",params:t})}function l(t,e){return Object(a["a"])({url:"creditcardmanager/app/empty/card/plan/save",method:"post",data:n.a.stringify({userId:t,creditCardNumber:e})})}function c(t){return Object(a["a"])({url:"/creditcardmanager/app/balance/plan/save",method:"post",params:t})}function d(t,e,r,i,s,o,u,l,c){return Object(a["a"])({url:"/creditcardmanager/app/create/repayment/task",method:"post",data:n.a.stringify({userId:t,brandId:e,creditCardNumber:r,amount:i,reservedAmount:s,executeDate:o,version:u,isNotPoint:l,dayRepaymentCount:c})})}function h(t){return Object(a["a"])({url:"/creditcardmanager/app/create/repayment/task/new",method:"post",params:t})}function m(t,e,r,i,s,o,u,l,c){return Object(a["a"])({url:"/creditcardmanager/app/save/all/task",method:"post",data:n.a.stringify({taskJSON:t,amount:e,reservedAmount:r,version:i,city:s,isCustom:o,extra:u,couponId:l,creditCardNumber:c})})}function p(t,e,r,i,s){return Object(a["a"])({url:"/creditcardmanager/app/verify/card/isuserable",method:"post",data:n.a.stringify({userId:t,brandId:e,creditCardNumber:r,version:i,repaymentType:s})})}function f(t,e,r){return Object(a["a"])({url:"/creditcardmanager/app/get/repaymentbill/by/userid",method:"post",data:n.a.stringify({userId:t,creditCardNumber:e,size:r})})}function g(t,e){return Object(a["a"])({url:"/creditcardmanager/app/delete/repaymenttask/by/repaymenttaskid",method:"post",data:n.a.stringify({repaymentTaskId:t,isCloseAutoConsume:1})})}function b(){return Object(a["a"])({url:"/creditcardmanager/app/plan/today/run",method:"post"})}function v(){return Object(a["a"])({url:"/creditcardmanager/app/limit/min",method:"post",data:n.a.stringify({})})}},"7f75":function(t,e,r){},"8e11":function(t,e,r){"use strict";r("3cd0"),r("25bb"),r("f8c2")},"9d94":function(t,e,r){},"9eda":function(t,e,r){"use strict";r("3cd0"),r("1a44"),r("acc2"),r("01f7"),r("7f75")},b342:function(t,e,r){"use strict";r("3cd0"),r("1a44"),r("acc2")},c625:function(t,e,r){"use strict";r("3cd0"),r("1a44"),r("acc2"),r("25bb"),r("968a")},d548:function(t,e,r){}}]);