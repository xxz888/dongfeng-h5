(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61946358"],{"2a53":function(e,t,a){"use strict";a("3cd0"),a("d548")},"34e9":function(e,t,a){"use strict";var i=a("2638"),n=a.n(i),s=a("d282"),c=a("ba31"),r=a("b1d2"),o=Object(s["a"])("cell-group"),l=o[0],d=o[1];function u(e,t,a,i){var s,o=e("div",n()([{class:[d({inset:t.inset}),(s={},s[r["f"]]=t.border,s)]},Object(c["b"])(i,!0)]),[null==a.default?void 0:a.default()]);return t.title||a.title?e("div",{key:i.data.key},[e("div",{class:d("title",{inset:t.inset})},[a.title?a.title():t.title]),o]):o}u.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},t["a"]=l(u)},"3ec1":function(e,t,a){"use strict";a("3cd0"),a("1a44"),a("acc2"),a("01f7")},6125:function(e,t,a){"use strict";var i=a("bd30"),n=a.n(i);n.a},"8e11":function(e,t,a){"use strict";a("3cd0"),a("25bb"),a("f8c2")},bd30:function(e,t,a){},cd25:function(e,t,a){"use strict";a.r(t);var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"修改储蓄卡","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("div",{staticClass:"warpper"},[a("div",{staticClass:"deposit_upcreditcard_title"},[e._v("请添加本人储蓄卡作为结算卡，该卡作为后续刷卡、提现资金的结算 账号，户名必须与实名认证姓名一致")]),a("div",{staticClass:"card_box"},[a("div",{staticClass:"card_item"},[a("div",{staticClass:"card_item_tips theme "},[e._v("*建议：工商、农业、交通、招商、民生、华夏、平安等一类卡（不支持二类卡及地方性银行）")]),a("van-field",{attrs:{label:"账户姓名",readonly:"readonly"},model:{value:e.item.userName,callback:function(t){e.$set(e.item,"userName",t)},expression:"item.userName"}}),a("van-field",{attrs:{readonly:"readonly",label:"银行卡号",placeholder:"请输入银行卡号",clearable:"",minlength:"10",required:""},model:{value:e.item.cardNo,callback:function(t){e.$set(e.item,"cardNo",t)},expression:"item.cardNo"}}),a("div",{staticClass:"card_no_tips"},[e._v("请核对卡号信息是否正确，若有误，请手动修改")]),a("van-field",{attrs:{readonly:"readonly","is-link":"",placeholder:"请选择开户行所在省市",label:"开户省市"},on:{click:function(t){e.showPicker2=!0}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("van-field",{attrs:{readonly:"readonly",label:"手机号",placeholder:"请输入银行卡预留手机号",clearable:"",maxlength:"11",required:""},model:{value:e.item.phone,callback:function(t){e.$set(e.item,"phone",t)},expression:"item.phone"}},[a("van-icon",{attrs:{slot:"right-icon",name:"question"},on:{click:function(t){e.phoneTrueFalseBy=!0}},slot:"right-icon"})],1)],1)]),a("div",{staticClass:" upcreditcard_btn_box"},[a("van-button",{staticClass:" upcreditcard_btn ",attrs:{type:"primary",round:""},nativeOn:{click:function(t){return e.add()}}},[e._v("修改储蓄卡")])],1)]),a("input",{staticStyle:{display:"none"},attrs:{name:"bankFile",type:"file",accept:"image/*",id:"idCard"},on:{change:function(t){return e.getFile(t,0)}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker2,callback:function(t){e.showPicker2=t},expression:"showPicker2"}},[a("van-area",{attrs:{"area-list":e.areaList,"columns-num":2},on:{cancel:function(t){e.showPicker2=!1},confirm:e.onConfirm2}})],1),a("van-popup",{attrs:{round:""},model:{value:e.phoneTrueFalseBy,callback:function(t){e.phoneTrueFalseBy=t},expression:"phoneTrueFalseBy"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"title"},[e._v("手机号说明")]),a("div",{staticClass:"tips"},[e._v("\n        手机号为办卡时预留手机号、网银签约手机号或者短信通知手机号，没有预留手机号、手机号忘记或者停用，请联系银行客服更新处理哦。\n      ")]),a("div",{staticClass:"btn",on:{click:function(t){e.phoneTrueFalseBy=!1}}},[e._v("我知道了")])])])],1)},s=[],c=a("bd86"),r=(a("b342"),a("ad06")),o=(a("ec8c"),a("1125")),l=(a("c625"),a("b650")),d=(a("87d0"),a("e41f")),u=(a("8e11"),a("f253")),m=(a("9eda"),a("565f")),p=(a("2a53"),a("34e9")),f=(a("3ec1"),a("7744")),b=(a("7f7f"),a("da02"),a("6b41")),v=a("1cf0"),h=a("c978"),y=(a("6ca8"),{data:function(){return{token:localStorage.getItem("token"),cardNo:"",brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),item:{cardNo:"",phone:"",securityCode:"",expiredTime:"",province:"",city:""},realname:"未实名",userList:{realnameStatus:"",realname:"",idcard:""},address:"",areaList:h["a"],showPicker2:!1,province:"",city:"",phoneTrueFalseBy:!1,imgUrl:""}},components:(i={},Object(c["a"])(i,b["a"].name,b["a"]),Object(c["a"])(i,f["a"].name,f["a"]),Object(c["a"])(i,p["a"].name,p["a"]),Object(c["a"])(i,m["a"].name,m["a"]),Object(c["a"])(i,u["a"].name,u["a"]),Object(c["a"])(i,d["a"].name,d["a"]),Object(c["a"])(i,l["a"].name,l["a"]),Object(c["a"])(i,o["a"].name,o["a"]),Object(c["a"])(i,r["a"].name,r["a"]),i),created:function(){this.item=JSON.parse(this.$route.params.item),this.address=this.item.province+"-"+this.item.city},methods:{onClickLeft:function(){this.publicJs.back()},onConfirm2:function(e){this.address=e[0].name+"-"+e[1].name,this.item.province=e[0].name,this.item.city=e[1].name,this.showPicker2=!1},add:function(){var e=this;Object(v["g"])(this.item.userId,this.item.cardNo,this.item.province,this.item.city).then((function(t){"000000"==t.resp_code&&(e.$notify({type:"primary",message:t.resp_message}),window.history.go(-1))}))}}}),k=y,_=(a("6125"),a("2877")),g=Object(_["a"])(k,n,s,!1,null,"0320523b",null);t["default"]=g.exports},d548:function(e,t,a){}}]);