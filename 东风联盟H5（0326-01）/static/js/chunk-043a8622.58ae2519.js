(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043a8622"],{"0ece":function(t,e,i){},1114:function(t,e,i){},"2d6d":function(t,e,i){"use strict";var s=i("d282"),n=i("a142"),a=i("a8c1"),o=i("9884"),r=i("b222"),c=Object(s["a"])("dropdown-menu"),l=c[0],u=c[1];e["a"]=l({mixins:[Object(o["b"])("vanDropdownMenu"),Object(r["a"])({event:"click",method:"onClickOutside"})],props:{zIndex:[Number,String],activeColor:String,overlay:{type:Boolean,default:!0},duration:{type:[Number,String],default:.2},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0}},data:function(){return{offset:0}},computed:{scroller:function(){return Object(a["d"])(this.$el)},opened:function(){return this.children.some((function(t){return t.showWrapper}))},barStyle:function(){if(this.opened&&Object(n["c"])(this.zIndex))return{zIndex:1+this.zIndex}}},methods:{updateOffset:function(){if(this.$refs.bar){var t=this.$refs.bar.getBoundingClientRect();"down"===this.direction?this.offset=t.bottom:this.offset=window.innerHeight-t.top}},toggleItem:function(t){this.children.forEach((function(e,i){i===t?e.toggle():e.showPopup&&e.toggle(!1,{immediate:!0})}))},onClickOutside:function(){this.children.forEach((function(t){t.toggle(!1)}))}},render:function(){var t=this,e=arguments[0],i=this.children.map((function(i,s){return e("div",{attrs:{role:"button",tabindex:i.disabled?-1:0},class:u("item",{disabled:i.disabled}),on:{click:function(){i.disabled||t.toggleItem(s)}}},[e("span",{class:[u("title",{active:i.showPopup,down:i.showPopup===("down"===t.direction)}),i.titleClass],style:{color:i.showPopup?t.activeColor:""}},[e("div",{class:"van-ellipsis"},[i.slots("title")||i.displayTitle])])])}));return e("div",{class:u()},[e("div",{ref:"bar",style:this.barStyle,class:u("bar",{opened:this.opened})},[i]),this.slots("default")])}})},"438c":function(t,e,i){},4391:function(t,e,i){"use strict";i("3cd0"),i("25bb"),i("dc22")},"58e6":function(t,e,i){"use strict";var s=i("d282"),n=i("1325"),a=i("a8c1"),o=i("3875"),r=i("543e"),c=Object(s["a"])("pull-refresh"),l=c[0],u=c[1],h=c[2],d=50,p=["pulling","loosing","success"];e["a"]=l({mixins:[o["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:d}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==d)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(a["d"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(a["c"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(n["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+(this.pullDistance||this.headHeight);return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var i;i=e?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},genStatus:function(){var t=this.$createElement,e=this.status,i=this.distance,s=this.slots(e,{distance:i});if(s)return s;var n=[],a=this[e+"Text"]||h(e);return-1!==p.indexOf(e)&&n.push(t("div",{class:u("text")},[a])),"loading"===e&&n.push(t(r["a"],{attrs:{size:"16"}},[a])),n},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:u()},[t("div",{ref:"track",class:u("track"),style:e},[t("div",{class:u("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},"6b41":function(t,e,i){"use strict";var s=i("d282"),n=i("b1d2"),a=i("ad06"),o=Object(s["a"])("nav-bar"),r=o[0],c=o[1];e["a"]=r({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(a["a"],{class:c("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:c("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:c("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[c({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[n["b"]]=this.border,t)]},[e("div",{class:c("content")},[this.hasLeft()&&e("div",{class:c("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[c("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:c("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:c("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},"97b2":function(t,e,i){},b1d6:function(t,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return l})),i.d(e,"e",(function(){return u})),i.d(e,"f",(function(){return h}));var s=i("b775"),n=i("4328"),a=i.n(n);function o(){return Object(s["a"])({url:"/user/app/query/direct/user/award/history/sum",method:"post"})}function r(t,e){return Object(s["a"])({url:"/transactionclear/app/query/profit/sum",method:"post",data:a.a.stringify({queryType:t,queryDate:e})})}function c(t){return Object(s["a"])({url:"/user/app/turnover/user",method:"post",data:t})}function l(){return Object(s["a"])({url:"/user/app/query/activate/award/config",method:"post",data:a.a.stringify({})})}function u(t){return Object(s["a"])({url:"/user/app/turnover/total",method:"post",data:t})}function h(t){return Object(s["a"])({url:"/paymentgateway/app/withdraw/order/list",method:"post",params:t})}},b222:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("1325"),n=function(t){return{props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var e=this,i=function(i){e.closeOnClickOutside&&!e.$el.contains(i.target)&&e[t.method]()};return{clickOutsideHandler:i}},mounted:function(){Object(s["b"])(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){Object(s["a"])(document,t.event,this.clickOutsideHandler)}}}},b342:function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2")},c65f:function(t,e,i){"use strict";i("3cd0"),i("0ece")},d314:function(t,e,i){"use strict";var s=i("d282"),n=i("1325"),a=i("1421"),o=i("9884"),r=i("7744"),c=i("ad06"),l=i("e41f"),u=Object(s["a"])("dropdown-item"),h=u[0],d=u[1];e["a"]=h({mixins:[Object(a["a"])({ref:"wrapper"}),Object(o["a"])("vanDropdownMenu")],props:{value:null,title:String,disabled:Boolean,titleClass:String,options:{type:Array,default:function(){return[]}},lazyRender:{type:Boolean,default:!0}},data:function(){return{transition:!0,showPopup:!1,showWrapper:!1}},computed:{displayTitle:function(){var t=this;if(this.title)return this.title;var e=this.options.filter((function(e){return e.value===t.value}));return e.length?e[0].text:""}},watch:{showPopup:function(t){this.bindScroll(t)}},beforeCreate:function(){var t=this,e=function(e){return function(){return t.$emit(e)}};this.onOpen=e("open"),this.onClose=e("close"),this.onOpened=e("opened")},methods:{toggle:function(t,e){void 0===t&&(t=!this.showPopup),void 0===e&&(e={}),t!==this.showPopup&&(this.transition=!e.immediate,this.showPopup=t,t&&(this.parent.updateOffset(),this.showWrapper=!0))},bindScroll:function(t){var e=this.parent.scroller,i=t?n["b"]:n["a"];i(e,"scroll",this.onScroll,!0)},onScroll:function(){this.parent.updateOffset()},onClickWrapper:function(t){this.getContainer&&t.stopPropagation()}},render:function(){var t=this,e=arguments[0],i=this.parent,s=i.zIndex,n=i.offset,a=i.overlay,o=i.duration,u=i.direction,h=i.activeColor,p=i.closeOnClickOverlay,f=this.options.map((function(i){var s=i.value===t.value;return e(r["a"],{attrs:{clickable:!0,icon:i.icon,title:i.text},key:i.value,class:d("option",{active:s}),style:{color:s?h:""},on:{click:function(){t.showPopup=!1,i.value!==t.value&&(t.$emit("input",i.value),t.$emit("change",i.value))}}},[s&&e(c["a"],{class:d("icon"),attrs:{color:h,name:"success"}})])})),v={zIndex:s};return"down"===u?v.top=n+"px":v.bottom=n+"px",e("div",[e("div",{directives:[{name:"show",value:this.showWrapper}],ref:"wrapper",style:v,class:d([u]),on:{click:this.onClickWrapper}},[e(l["a"],{attrs:{overlay:a,position:"down"===u?"top":"bottom",duration:this.transition?o:0,lazyRender:this.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:p},class:d("content"),on:{open:this.onOpen,close:this.onClose,opened:this.onOpened,closed:function(){t.showWrapper=!1,t.$emit("closed")}},model:{value:t.showPopup,callback:function(e){t.showPopup=e}}},[f,this.slots("default")])])])}})},da02:function(t,e,i){"use strict";i("3cd0"),i("1a44"),i("acc2"),i("1114")},dafa:function(t,e,i){"use strict";i.r(e);var s,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{staticClass:"agent_nav theme_bg",staticStyle:{background:"none"},attrs:{border:!1,title:"推广收益","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("div",{staticClass:"warpper_top"}),i("van-pull-refresh",{attrs:{"loading-text":"加载中..."},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("div",[i("div",{staticClass:"profit_share_top theme_bg"},[i("van-dropdown-menu",{staticClass:"date_sel menu",attrs:{"active-color":"#F08300",background:"none"}},[i("van-dropdown-item",{attrs:{options:t.yearList},on:{change:t.dateChange},model:{value:t.yaer,callback:function(e){t.yaer=e},expression:"yaer"}}),i("van-dropdown-item",{attrs:{options:t.monthList},on:{change:t.dateChange},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1)],1),i("ul",{staticClass:"profit_profit_cont"},[i("li",{staticClass:"item",on:{click:function(e){return t.next("profitUser",1,"直推用户")}}},[i("div",{staticClass:"left"},[i("div",{staticClass:"level"},[t._v("\n              直推\n            ")]),i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.direc1.registerCount)+"人"),i("span",{staticClass:"theme"},[t._v("已注册")])]),i("p",[t._v(t._s(t.profit.direc1.activeCount)+"人"),i("span",{staticClass:"theme"},[t._v("已激活")])])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.direc1.authCount)+"人"),i("span",{staticClass:"theme"},[t._v("已认证")])]),i("p",[t._v(t._s(t.profit.direc1.rebate)+"元"),i("span",{staticClass:"profit_theme"},[t._v("推广收益")])])]),i("van-icon",{staticClass:"right_right",attrs:{name:"arrow"}})],1)]),i("li",{staticClass:"item",on:{click:function(e){return t.next("profitUser",2,"间推用户")}}},[i("div",{staticClass:"left"},[i("div",{staticClass:"level"},[t._v("\n              间推\n            ")]),i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.direc2.registerCount)+"人"),i("span",{staticClass:"theme"},[t._v("已注册")])]),i("p",[t._v(t._s(t.profit.direc2.activeCount)+"人"),i("span",{staticClass:"theme"},[t._v("已激活")])])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.direc2.authCount)+"人"),i("span",{staticClass:"theme"},[t._v("已认证")])]),i("p",[t._v(t._s(t.profit.direc2.rebate)+"元"),i("span",{staticClass:"profit_theme"},[t._v("推广收益")])])]),i("van-icon",{staticClass:"right_right",attrs:{name:"arrow"}})],1)]),i("li",{staticClass:"item",on:{click:function(e){return t.next("profitUser",3,"二级间推用户")}}},[i("div",{staticClass:"left"},[i("div",{staticClass:"level"},[t._v("\n              二级间推\n            ")]),i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.direc3.registerCount)+"人"),i("span",{staticClass:"theme"},[t._v("已注册")])]),i("p",[t._v(t._s(t.profit.direc3.activeCount)+"人"),i("span",{staticClass:"theme"},[t._v("已激活")])])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.direc3.authCount)+"人"),i("span",{staticClass:"theme"},[t._v("已认证")])]),i("p",[t._v(t._s(t.profit.direc3.rebate)+"元"),i("span",{staticClass:"profit_theme"},[t._v("推广收益")])])]),i("van-icon",{staticClass:"right_right",attrs:{name:"arrow"}})],1)]),i("li",{staticClass:"item"},[i("div",{staticClass:"left"},[i("div",{staticClass:"level"},[t._v("\n              总计\n            ")]),i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.total.registerCount)+"人"),i("span",{staticClass:"theme"},[t._v("已注册")])]),i("p",[t._v(t._s(t.profit.total.activeCount)+"人"),i("span",{staticClass:"theme"},[t._v("已激活")])])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"user"},[i("p",[t._v(t._s(t.profit.total.authCount)+"人"),i("span",{staticClass:"theme"},[t._v("已认证")])]),i("p",[t._v(t._s(t.profit.total.rebate)+"元"),i("span",{staticClass:"profit_theme"},[t._v("推广收益")])])])])])])])])],1)},a=[],o=i("bd86"),r=(i("e9a3"),i("d314")),c=(i("c65f"),i("2d6d")),l=(i("b342"),i("ad06")),u=(i("4391"),i("58e6")),h=(i("7f7f"),i("da02"),i("6b41")),d=i("b1d6"),p={data:function(){return{brandId:localStorage.getItem("brandId"),userId:localStorage.getItem("userId"),phone:localStorage.getItem("phone"),isLoading:!1,yearList:[],yaer:"",month:"",monthList:[{text:"01月",value:"01"},{text:"02月",value:"02"},{text:"03月",value:"03"},{text:"04月",value:"04"},{text:"05月",value:"05"},{text:"06月",value:"06"},{text:"07月",value:"07"},{text:"08月",value:"08"},{text:"09月",value:"09"},{text:"10月",value:10},{text:"11月",value:11},{text:"12月",value:12}],queryType:"9",profit:{direc1:{amount:null,rebate:0,registerCount:0,realNameCount:0,activeCount:0,authCount:0},direc2:{amount:null,rebate:0,registerCount:0,realNameCount:0,activeCount:0,authCount:0},direc3:{amount:null,rebate:0,registerCount:0,realNameCount:0,activeCount:0,authCount:0},total:{amount:null,rebate:0,registerCount:0,realNameCount:0,activeCount:0,authCount:0}}}},components:(s={},Object(o["a"])(s,h["a"].name,h["a"]),Object(o["a"])(s,u["a"].name,u["a"]),Object(o["a"])(s,l["a"].name,l["a"]),Object(o["a"])(s,c["a"].name,c["a"]),Object(o["a"])(s,r["a"].name,r["a"]),s),created:function(){this.getData(),this._profitSumQuery()},methods:{onClickLeft:function(){this.publicJs.back()},getData:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1;this.yaer=e,i<9&&(i="0"+i),this.month=i,this.yearList=[{text:e+"年",value:e},{text:e-1+"年",value:e-1},{text:e-2+"年",value:e-2}]},dateChange:function(){this._profitSumQuery()},next:function(t,e,i){this.$router.push({name:t,params:{level:JSON.stringify(e),title:JSON.stringify(i)}})},_profitSumQuery:function(){var t=this;Object(d["b"])(this.queryType,String(this.yaer)+String(this.month)).then((function(e){"000000"==e.resp_code&&(t.profit=e.result)}))},onRefresh:function(){var t=this;setTimeout((function(){t.$toast("刷新成功"),t.isLoading=!1}),1e3)}}},f=p,v=(i("f539"),i("2877")),g=Object(v["a"])(f,n,a,!1,null,"4cedfde7",null);e["default"]=g.exports},dc22:function(t,e,i){},e9a3:function(t,e,i){"use strict";i("3cd0"),i("1812"),i("1a44"),i("acc2"),i("01f7"),i("5e5e"),i("97b2")},f539:function(t,e,i){"use strict";var s=i("438c"),n=i.n(s);n.a}}]);