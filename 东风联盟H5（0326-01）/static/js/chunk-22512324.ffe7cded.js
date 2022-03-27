(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22512324"],{4391:function(t,e,n){"use strict";n("3cd0"),n("25bb"),n("dc22")},"58e6":function(t,e,n){"use strict";var a=n("d282"),r=n("1325"),s=n("a8c1"),i=n("3875"),u=n("543e"),c=Object(a["a"])("pull-refresh"),o=c[0],d=c[1],l=c[2],h=50,p=["pulling","loosing","success"];e["a"]=o({mixins:[i["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:h}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==h)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(s["d"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(s["c"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(r["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+(this.pullDistance||this.headHeight);return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var n;n=e?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,n!==this.status&&(this.status=n)},genStatus:function(){var t=this.$createElement,e=this.status,n=this.distance,a=this.slots(e,{distance:n});if(a)return a;var r=[],s=this[e+"Text"]||l(e);return-1!==p.indexOf(e)&&r.push(t("div",{class:d("text")},[s])),"loading"===e&&r.push(t(u["a"],{attrs:{size:"16"}},[s])),r},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:d()},[t("div",{ref:"track",class:d("track"),style:e},[t("div",{class:d("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},"594b":function(t,e,n){},bcac:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("b775"),r=n("4328"),s=n.n(r);function i(t,e){return Object(a["a"])({url:"/user/app/bank/intermediary/query/namebyothers",method:"post",data:s.a.stringify({idCard:t,userName:e})})}},c24f:function(t,e,n){"use strict";n.d(e,"q",(function(){return i})),n.d(e,"y",(function(){return u})),n.d(e,"r",(function(){return c})),n.d(e,"m",(function(){return o})),n.d(e,"s",(function(){return d})),n.d(e,"t",(function(){return l})),n.d(e,"x",(function(){return h})),n.d(e,"l",(function(){return p})),n.d(e,"z",(function(){return f})),n.d(e,"i",(function(){return m})),n.d(e,"A",(function(){return b})),n.d(e,"b",(function(){return g})),n.d(e,"w",(function(){return v})),n.d(e,"v",(function(){return y})),n.d(e,"e",(function(){return j})),n.d(e,"u",(function(){return O})),n.d(e,"k",(function(){return k})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"h",(function(){return S})),n.d(e,"g",(function(){return C})),n.d(e,"p",(function(){return _})),n.d(e,"n",(function(){return T})),n.d(e,"f",(function(){return L})),n.d(e,"j",(function(){return D})),n.d(e,"a",(function(){return N})),n.d(e,"o",(function(){return P}));var a=n("b775"),r=n("4328"),s=n.n(r);function i(t,e){return Object(a["a"])({url:"/user/app/paypass/auth/"+t,method:"post",data:s.a.stringify({paypass:e})})}function u(t){return Object(a["a"])({url:"/user/app/info/query/"+t,method:"get"})}function c(t,e){return Object(a["a"])({url:"/user/app/query/phone",method:"post",data:s.a.stringify({brandId:t,phone:e})})}function o(t,e){return Object(a["a"])({url:"/user/app/headportrait/getby/phone/",method:"POST",data:s.a.stringify({phone:t,brandId:e})})}function d(t){return Object(a["a"])({url:"/user/app/headportrait/updateby/phone/",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/user/app/update/users/nick/name",method:"post",data:s.a.stringify({nickName:t})})}function h(){return Object(a["a"])({url:"/user/app/level/name",method:"post"})}function p(){return Object(a["a"])({url:"/user/app/user/level/get",method:"post"})}function f(t,e){return Object(a["a"])({url:"/user/app/jpush/history/"+t,method:"get",params:{size:e}})}function m(){return Object(a["a"])({url:"/user/app/user/account",method:"post"})}function b(t){return Object(a["a"])({url:"/paymentgateway/app/withdraw",method:"post",params:t})}function g(t){return Object(a["a"])({url:"/user/app/bank/default/userid",method:"post",data:s.a.stringify({user_id:t})})}function v(t){return Object(a["a"])({url:"/notice/app/tysj/IDOCR/distinguish",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function y(t){return Object(a["a"])({url:"/user/app/oss/picture","Access-Control-Allow-Origin":"*",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/user/app/tysj/IDCard/contrast",method:"post",data:t})}function O(t,e,n,r){return Object(a["a"])({url:"/user/app/tysj/IDCard/contrast",method:"post",data:s.a.stringify({idcard:t,name:e,image:n,address:r})})}function k(t){return Object(a["a"])({url:"/user/app/below/get",method:"post",params:t})}function w(){return Object(a["a"])({url:"/user/app/below/count",method:"post"})}function x(t){return Object(a["a"])({url:"/user/app/empower/below/list",method:"post",params:t})}function S(t){return Object(a["a"])({url:"/user/app/empower/update",method:"post",params:t})}function C(t){return Object(a["a"])({url:"/user/app/empower/token",method:"post",params:t})}function _(){return Object(a["a"])({url:"/user/app/member/amount",method:"post"})}function T(t){return Object(a["a"])({url:"/user/app/user/level/get/list",method:"post",params:t})}function L(t){return Object(a["a"])({url:"/user/app/user/level/change",method:"post",params:t})}function D(){return Object(a["a"])({url:"/user/app/ali/account/get",method:"post",data:s.a.stringify({})})}function N(t){return Object(a["a"])({url:"/user/app/ali/account/add",method:"post",data:s.a.stringify({aliNo:t})})}function P(t){return Object(a["a"])({url:"/user/app/versionnumber?brand_id="+t,method:"get"})}},c406:function(t,e,n){t.exports=n.p+"static/img/safeguard.d50741a2.png"},ca4d:function(t,e,n){t.exports=n.p+"static/img/safety.59475737.png"},ce0e:function(t,e,n){"use strict";n.r(e);var a,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"agent_nav theme_bg",staticStyle:{background:"none"},attrs:{"left-arrow":"",border:!1,title:"添加用户"},on:{"click-left":t.onClickLeft}}),a("van-pull-refresh",{attrs:{"loading-text":"加载中..."},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[a("div",[a("div",{staticClass:"agent_cont"},[a("div",{staticClass:"card_box"},[a("div",{staticClass:"card_item"},[a("van-field",{attrs:{label:"姓名",placeholder:"请输入姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("van-field",{attrs:{label:"身份证号",placeholder:"请输入身份证号"},model:{value:t.idCard,callback:function(e){t.idCard=e},expression:"idCard"}}),a("van-field",{attrs:{label:"储蓄卡号",type:"number",placeholder:"请输入储蓄卡号"},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}}),a("van-field",{attrs:{readonly:"readonly","is-link":"",placeholder:"请选择开户行所在省市",label:"开户省市"},on:{click:function(e){t.showPicker2=!0}},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),a("van-field",{attrs:{label:"手机号",type:"number",placeholder:"请输入银行卡预留手机号",clearable:"",maxlength:"11"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]),a("div",{staticClass:"warn"},[a("div",[a("img",{attrs:{src:n("ca4d"),alt:""}}),a("p",[a("span",[t._v("信息安全")]),a("span",[t._v("金融级加密体系")])])]),a("div",[a("img",{attrs:{src:n("c406")}}),a("p",[a("span",[t._v("资金安全")]),a("span",[t._v("保险公司全程联保")])])])]),a("div",{staticClass:"upcreditcard_btn_box"},[a("van-button",{staticClass:"upcreditcard_btn ",attrs:{type:"primary",round:""},nativeOn:{click:function(e){return t.addUser()}}},[t._v("确实添加")])],1)])])]),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker2,callback:function(e){t.showPicker2=e},expression:"showPicker2"}},[a("van-area",{attrs:{"area-list":t.areaList,"columns-num":2},on:{cancel:function(e){t.showPicker2=!1},confirm:t.onConfirm2}})],1)],1)},s=[],i=(n("a481"),n("96cf"),n("3b8d")),u=n("bd86"),c=(n("c625"),n("b650")),o=(n("ec8c"),n("1125")),d=(n("87d0"),n("e41f")),l=(n("4391"),n("58e6")),h=(n("9eda"),n("565f")),p=(n("b342"),n("ad06")),f=(n("7f7f"),n("da02"),n("6b41")),m=n("bcac"),b=n("c24f"),g=n("1cf0"),v=n("c978"),y={components:(a={},Object(u["a"])(a,f["a"].name,f["a"]),Object(u["a"])(a,p["a"].name,p["a"]),Object(u["a"])(a,h["a"].name,h["a"]),Object(u["a"])(a,l["a"].name,l["a"]),Object(u["a"])(a,d["a"].name,d["a"]),Object(u["a"])(a,o["a"].name,o["a"]),Object(u["a"])(a,c["a"].name,c["a"]),a),data:function(){return{isLoading:!1,userList:[],token:localStorage.getItem("token"),idCard:"",cardNo:"",address:"",phone:"",showPicker2:!1,province:"",city:"",areaList:v["a"],name:""}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["y"])(this.token);case 2:this.userList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{onClickLeft:function(){this.publicJs.back()},_namebyothers:function(){var t=this;Object(m["a"])(this.userList.result.idcard,this.text).then((function(e){t.levelList=e.result,t.isLoading=!1,t.finished=!0}))},addUser:function(){var t=this;Object(g["a"])(this.token,this.name,this.cardNo,this.idCard,this.phone.replace(/\s/g,""),0,"","","","","",this.province,this.city).then((function(e){"000000"==e.resp_code&&(t.publicJs.back(),t.$notify({type:"primary",message:e.resp_message}))}))},onConfirm2:function(t){this.address=t[0].name+"-"+t[1].name,this.province=t[0].name,this.city=t[1].name,this.showPicker2=!1},onRefresh:function(){var t=this,e=setTimeout((function(){t._namebyothers(),clearTimeout(e)}),1e3)}}},j=y,O=(n("f6c0"),n("2877")),k=Object(O["a"])(j,r,s,!1,null,"3d9a3530",null);e["default"]=k.exports},dc22:function(t,e,n){},f6c0:function(t,e,n){"use strict";var a=n("594b"),r=n.n(a);r.a}}]);