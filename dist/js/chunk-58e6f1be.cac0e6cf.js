(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58e6f1be"],{1148:function(e,t,r){"use strict";var s=r("a691"),n=r("577e"),o=r("1d80");e.exports=function(e){var t=n(o(this)),r="",i=s(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},2375:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"})},n=[],o={},i=o,a=(r("e85f"),r("2877")),l=Object(a["a"])(i,s,n,!1,null,"6422aaba",null);t["a"]=l.exports},"25a1":function(e,t,r){"use strict";r("f221")},2708:function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return _}));var s=r("5530"),n=(r("a9e3"),r("b680"),r("a4d3"),r("e01a"),r("2f62")),o=r("5a0c"),i=r.n(o),a=r("4208"),l=r.n(a),u=(r("5087"),r("d9cb"));i.a.extend(l.a).locale("zh-tw");var c={filters:{fromNowFilter:function(e){if(!e)return"-";var t=i()(),r=t.diff(e,"hour");return r>24?i()(e).format("M月DD日"):i()(e).fromNow(!0)}}},d={filters:{timeFormatFilter:function(e){if(!e)return"-";var t=i()(e).hour()>12?"下午":"上午";return t+i()(e).format(" hh:mm・YYYY年M月DD日")}}},f={filters:{thousandFilter:function(e){return e?Number(e)>1e3&&(e=(e/1e3).toFixed(1),e=String(e)+"K"):e=0,e}}},p={filters:{altFilter:function(e){return e?"@"+e:"@"}}},h={computed:Object(s["a"])({},Object(n["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},m={computed:Object(s["a"])({},Object(n["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(e){this.$store.dispatch("handleSetReplyDetail",e),this.$store.dispatch("isReplyModalOpen",!0)}}},_={methods:{ToastSuccess:function(e){var t=e.title,r=void 0===t?"":t,s=e.description,n=void 0===s?"":s;this.$toast({component:u["a"],props:{icon:"success",title:r,description:n}})},ToastError:function(e){var t=e.title,r=void 0===t?"":t,s=e.description,n=void 0===s?"":s;this.$toast({component:u["a"],props:{icon:"error",title:r,description:n}})}}}},"27df":function(e,t,r){},"408a":function(e,t){var r=1..valueOf;e.exports=function(e){return r.call(e)}},4208:function(e,t,r){!function(t,r){e.exports=r()}(0,(function(){"use strict";return function(e,t,r){e=e||{};var s=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return s.fromToBase(e,t,r,n)}r.en.relativeTime=n,s.fromToBase=function(t,s,o,i,a){for(var l,u,c,d=o.$locale().relativeTime||n,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=f.length,h=0;h<p;h+=1){var m=f[h];m.d&&(l=i?r(t).diff(o,m.d,!0):o.diff(t,m.d,!0));var _=(e.rounding||Math.round)(Math.abs(l));if(c=l>0,_<=m.r||!m.r){_<=1&&h>0&&(m=f[h-1]);var v=d[m.l];a&&(_=a(""+_)),u="string"==typeof v?v.replace("%d",_):v(_,s,m.l,c);break}}if(s)return u;var w=c?d.future:d.past;return"function"==typeof w?w(u):w.replace("%s",u)},s.to=function(e,t){return o(e,t,this,!0)},s.from=function(e,t){return o(e,t,this)};var i=function(e){return e.$u?r.utc():r()};s.toNow=function(e){return this.to(i(this),e)},s.fromNow=function(e){return this.from(i(this),e)}}}))},"4b58":function(e,t,r){e.exports=r.p+"img/close_theme.b1a8a695.svg"},5087:function(e,t,r){!function(t,s){e.exports=s(r("5a0c"))}(0,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),s={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return r.default.locale(s,null,!0),s}))},"907e":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"button-follow",class:{"button-follow-small":e.small,"button-follow-wait":e.isProcessing},attrs:{disabled:e.isProcessing}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.user.isFollowed,expression:"!user.isFollowed"}],staticClass:"button-follow__follow",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleClickFollow(e.userId)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}]},[e._v("跟隨")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isProcessing,expression:"isProcessing"}],staticClass:"button-follow__follow__spinner"})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.user.isFollowed,expression:"user.isFollowed"}],staticClass:"button-follow__following",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleClickFollow(e.userId)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isProcessing,expression:"!isProcessing"}]},[e._v("正在跟隨")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isProcessing,expression:"isProcessing"}],staticClass:"button-follow__following__spinner"})])])},n=[],o=r("1da1"),i=(r("96cf"),r("a9e3"),r("4cce")),a=r("2708"),l={name:"ButtonFollow",mixins:[a["a"]],props:{user:{type:Object},userId:{type:Number},small:{type:Boolean,defaut:!1}},data:function(){return{isProcessing:!1}},computed:{isViewCurrentUser:function(){return this.$store.getters.getViewUser.isViewCurrentUser}},methods:{handleClickFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.isProcessing=!0,!t.user.isFollowed){r.next=8;break}return r.next=5,i["a"].removeFollowShip({userId:e});case 5:r.t0=r.sent,r.next=11;break;case 8:return r.next=10,i["a"].addFollowShip({id:e});case 10:r.t0=r.sent;case 11:if(s=r.t0,n=s.data,"success"===n.status){r.next=15;break}throw new Error(n.message);case 15:if(t.$store.dispatch("handleSetFollowed",e),t.isViewCurrentUser&&t.user.isFollowed&&(t.$store.dispatch("fetchViewUserFollowings"),t.$store.dispatch("fetchViewUserFollowers")),t.isProcessing=!1,t.ToastSuccess({title:n.message}),"success"===n.status){r.next=21;break}throw new Error(n.message);case 21:r.next=28;break;case 23:r.prev=23,r.t1=r["catch"](0),o="",o=r.t1.response?r.t1.response.data.message:r.t1.message,t.ToastError({title:"更新失敗",description:o});case 28:case"end":return r.stop()}}),r,null,[[0,23]])})))()}}},u=l,c=(r("25a1"),r("2877")),d=Object(c["a"])(u,s,n,!1,null,"bff64330",null);t["a"]=d.exports},"9be1":function(e,t,r){},b439:function(e,t,r){"use strict";r("27df")},b680:function(e,t,r){"use strict";var s=r("23e7"),n=r("a691"),o=r("408a"),i=r("1148"),a=r("d039"),l=1..toFixed,u=Math.floor,c=function(e,t,r){return 0===t?r:t%2===1?c(e,t-1,r*e):c(e*e,t/2,r)},d=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},f=function(e,t,r){var s=-1,n=r;while(++s<6)n+=t*e[s],e[s]=n%1e7,n=u(n/1e7)},p=function(e,t){var r=6,s=0;while(--r>=0)s+=e[r],e[r]=u(s/t),s=s%t*1e7},h=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var s=String(e[t]);r=""===r?s:r+i.call("0",7-s.length)+s}return r},m=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){l.call({})}));s({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,r,s,a,l=o(this),u=n(e),m=[0,0,0,0,0,0],_="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(_="-",l=-l),l>1e-21)if(t=d(l*c(2,69,1))-69,r=t<0?l*c(2,-t,1):l/c(2,t,1),r*=4503599627370496,t=52-t,t>0){f(m,0,r),s=u;while(s>=7)f(m,1e7,0),s-=7;f(m,c(10,s,1),0),s=t-1;while(s>=23)p(m,1<<23),s-=23;p(m,1<<s),f(m,1,1),p(m,2),v=h(m)}else f(m,0,r),f(m,1<<-t,0),v=h(m)+i.call("0",u);return u>0?(a=v.length,v=_+(a<=u?"0."+i.call("0",u-a)+v:v.slice(0,a-u)+"."+v.slice(a-u))):v=_+v,v}})},e83a:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popular"},[r("div",{staticClass:"popular__container"},[r("div",{staticClass:"popular__title"},[e._v(" Popular ")]),e.isLoading?r("Spinner"):e._e(),r("div",{staticClass:"popular__user-list"},e._l(e.popular,(function(t){return r("router-link",{key:t.id,staticClass:"popular__user-list__list",attrs:{to:{name:"UserAllTweets",params:{user_id:t.id}}}},[r("div",{staticClass:"popular__user-list__avatar",style:{backgroundImage:"url("+t.avatar+")"}}),r("div",{staticClass:"popular__user-list__info"},[r("div",{staticClass:"popular__user-list__name"},[e._v(e._s(t.name))]),r("div",{staticClass:"popular__user-list__account"},[e._v(" "+e._s(e._f("altFilter")(t.account))+" ")])]),r("ButtonFollow",{attrs:{user:t,userId:t.id}})],1)})),1)],1),r("p",{staticClass:"more"},[e._v("© 2021 WAHP")])])},n=[],o=r("1da1"),i=(r("96cf"),r("4cce")),a=r("2708"),l=r("2375"),u=r("907e"),c={name:"UserPopularTop.vue",components:{Spinner:l["a"],ButtonFollow:u["a"]},mixins:[a["b"],a["a"]],data:function(){return{isLoading:!0,userIsFollowing:!1}},computed:{popular:function(){return this.$store.getters.getPopular}},created:function(){this.fetchPopularUsers()},methods:{fetchPopularUsers:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i["a"].getPopularUsers();case 3:r=t.sent,s=r.data,e.$store.dispatch("handleSetPopular",s),e.isLoading=!1,t.next=15;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),n="",n=t.t0.response?t.t0.response.data.message:t.t0.message,e.ToastError({title:"PopularTop讀取失敗！",description:n});case 15:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},d=c,f=(r("b439"),r("2877")),p=Object(f["a"])(d,s,n,!1,null,"15bbfa54",null);t["a"]=p.exports},e85f:function(e,t,r){"use strict";r("9be1")},f221:function(e,t,r){}}]);
//# sourceMappingURL=chunk-58e6f1be.cac0e6cf.js.map