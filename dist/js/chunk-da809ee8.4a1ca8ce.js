(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da809ee8"],{1148:function(t,e,r){"use strict";var s=r("a691"),n=r("577e"),i=r("1d80");t.exports=function(t){var e=n(i(this)),r="",a=s(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"257f":function(t,e,r){},2708:function(t,e,r){"use strict";r.d(e,"c",(function(){return l})),r.d(e,"g",(function(){return d})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return _})),r.d(e,"a",(function(){return p}));var s=r("5530"),n=(r("a9e3"),r("b680"),r("a4d3"),r("e01a"),r("2f62")),i=r("5a0c"),a=r.n(i),o=r("4208"),c=r.n(o),u=(r("5087"),r("d9cb"));a.a.extend(c.a).locale("zh-tw");var l={filters:{fromNowFilter:function(t){if(!t)return"-";var e=a()(),r=e.diff(t,"hour");return r>24?a()(t).format("M月DD日"):a()(t).fromNow(!0)}}},d={filters:{timeFormatFilter:function(t){if(!t)return"-";var e=a()(t).hour()>12?"下午":"上午";return e+a()(t).format(" hh:mm・YYYY年M月DD日")}}},f={filters:{thousandFilter:function(t){return t?Number(t)>1e3&&(t=(t/1e3).toFixed(1),t=String(t)+"K"):t=0,t}}},h={filters:{altFilter:function(t){return t?"@"+t:"@"}}},m={computed:Object(s["a"])({},Object(n["b"])(["isNewPostRefresh"])),methods:{handleActionNewPost:function(){this.$store.dispatch("isNewPostModalOpen",!0)}}},_={computed:Object(s["a"])({},Object(n["b"])(["replyDetail","isReplyRefresh"])),methods:{handleActionReply:function(t){this.$store.dispatch("handleSetReplyDetail",t),this.$store.dispatch("isReplyModalOpen",!0)}}},p={methods:{ToastSuccess:function(t){var e=t.title,r=void 0===e?"":e,s=t.description,n=void 0===s?"":s;this.$toast({component:u["a"],props:{icon:"success",title:r,description:n}})},ToastError:function(t){var e=t.title,r=void 0===e?"":e,s=t.description,n=void 0===s?"":s;this.$toast({component:u["a"],props:{icon:"error",title:r,description:n}})}}}},"408a":function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},4208:function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";return function(t,e,r){t=t||{};var s=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,r,n){return s.fromToBase(t,e,r,n)}r.en.relativeTime=n,s.fromToBase=function(e,s,i,a,o){for(var c,u,l,d=i.$locale().relativeTime||n,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=f.length,m=0;m<h;m+=1){var _=f[m];_.d&&(c=a?r(e).diff(i,_.d,!0):i.diff(e,_.d,!0));var p=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,p<=_.r||!_.r){p<=1&&m>0&&(_=f[m-1]);var w=d[_.l];o&&(p=o(""+p)),u="string"==typeof w?w.replace("%d",p):w(p,s,_.l,l);break}}if(s)return u;var v=l?d.future:d.past;return"function"==typeof v?v(u):v.replace("%s",u)},s.to=function(t,e){return i(t,e,this,!0)},s.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?r.utc():r()};s.toNow=function(t){return this.to(a(this),t)},s.fromNow=function(t){return this.from(a(this),t)}}}))},"4edb":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container container--user"},[r("Head",{attrs:{title:t.currentViewUser.data.name,count:t.currentViewUser.data.TweetsCount,backArrow:""}}),r("section",{staticClass:"tab-router"},[r("router-link",{staticClass:"tab-router__link",class:{"router-link-active":"UserFollowers"===t.tab},attrs:{to:{name:"UserFollowers",params:{user_id:t.userId}}}},[r("span",{staticClass:"tab-router__text"},[t._v("跟隨者")])]),r("router-link",{staticClass:"tab-router__link",class:{"router-link-active":"UserFollowings"===t.tab},attrs:{to:{name:"UserFollowings",params:{user_id:t.userId}}}},[r("span",{staticClass:"tab-router__text"},[t._v("正在跟隨")])])],1),r("router-view",{attrs:{isLoadingPage:t.isLoading}})],1)},n=[],i=r("1da1"),a=r("5530"),o=(r("96cf"),r("b0c0"),r("2f62")),c=r("4cce"),u=r("2708"),l=r("7a0f"),d={name:"UserAllFollow",mixins:[u["a"]],components:{Head:l["a"]},data:function(){return{isLoading:!0,userId:"",show:""}},computed:Object(a["a"])(Object(a["a"])({},Object(o["b"])(["currentUser"])),{},{currentViewUser:function(){return this.$store.getters.getViewUser},tab:function(){return this.$route.name}}),created:function(){var t=this.$route.params.user_id;this.userId=t,this.fetchUser(t),this.$store.dispatch("isViewCurrentUser",t),this.$store.dispatch("fetchViewUserFollowings"),this.$store.dispatch("fetchViewUserFollowers")},beforeRouteUpdate:function(t,e,r){var s=this.$route.params.user_id;this.userId=s,this.fetchUser(s),this.$store.dispatch("isViewCurrentUser",s),this.$store.dispatch("fetchViewUserFollowings"),this.$store.dispatch("fetchViewUserFollowers"),r()},methods:{fetchUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,c["a"].getUser({userId:t});case 4:s=r.sent,n=s.data,e.userInfo=n,e.$store.dispatch("handleInitViewUser",n),e.isLoading=!1,r.next=18;break;case 11:r.prev=11,r.t0=r["catch"](0),e.isLoading=!1,i="",i=r.t0.response?r.t0.response.data.message:r.t0.message,e.ToastError({title:"取得使用者資訊失敗！",description:i}),e.$router.back();case 18:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},f=d,h=(r("96f3"),r("2877")),m=Object(h["a"])(f,s,n,!1,null,"70ec832a",null);e["default"]=m.exports},5087:function(t,e,r){!function(e,s){t.exports=s(r("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),s={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};return r.default.locale(s,null,!0),s}))},"555b":function(t,e,r){},"78e6":function(t,e,r){"use strict";r("555b")},"7a0f":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.backArrow,expression:"backArrow"}],staticClass:"head__back",on:{click:t.handleBack}},[s("img",{staticClass:"head__back__icon",attrs:{src:r("ddf8"),alt:"back"}})]),s("div",{staticClass:"head__info"},[s("div",{staticClass:"head__info__title"},[t._v(" "+t._s(t.title)+" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.account,expression:"account"}],staticClass:"head__info__account"},[t._v("@"+t._s(t.account))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}],staticClass:"head__info__count"},[t._v(t._s(t.count)+" 推文")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}],staticClass:"head__message"},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M23.2499 3.25001H20.8249V0.825012C20.8249 0.411012 20.4889 0.0750122 20.0749 0.0750122C19.6609 0.0750122 19.3249 0.411012 19.3249 0.825012V3.25001H16.8999C16.4859 3.25001 16.1499 3.58601 16.1499 4.00001C16.1499 4.41401 16.4859 4.75001 16.8999 4.75001H19.3249V7.17501C19.3249 7.58901 19.6609 7.92501 20.0749 7.92501C20.4889 7.92501 20.8249 7.58901 20.8249 7.17501V4.75001H23.2499C23.6639 4.75001 23.9999 4.41401 23.9999 4.00001C23.9999 3.58601 23.6639 3.25001 23.2499 3.25001ZM20.0749 10.126C19.6609 10.126 19.3249 10.462 19.3249 10.876V18.954C19.3249 19.368 18.9879 19.704 18.5749 19.704H4.09495C3.68295 19.704 3.34495 19.368 3.34495 18.954V8.29801L10.1229 12.816C10.4909 13.062 10.9129 13.186 11.3359 13.186C11.7579 13.186 12.1799 13.062 12.5479 12.816L17.0779 9.80301C17.4139 9.58001 17.5059 9.12701 17.2819 8.79101C17.0589 8.45901 16.6069 8.36601 16.2699 8.59101L11.7399 11.605C11.4939 11.767 11.1769 11.768 10.9319 11.605L3.34595 6.54501V5.50001C3.34595 5.08601 3.68295 4.75001 4.09595 4.75001H13.1899C13.6039 4.75001 13.9399 4.41401 13.9399 4.00001C13.9399 3.58601 13.6039 3.25001 13.1899 3.25001H4.09595C2.85595 3.25001 1.84595 4.26001 1.84595 5.50001V18.955C1.84595 20.195 2.85595 21.205 4.09595 21.205H18.5759C19.8159 21.205 20.8259 20.195 20.8259 18.955V10.877C20.8259 10.462 20.4889 10.127 20.0759 10.127L20.0749 10.126Z",fill:"black"}})])])])},n=[],i=(r("a9e3"),{name:"Head",props:{backArrow:{type:Boolean,default:!1},message:{type:Boolean,default:!1},title:{type:String,default:"loading",required:!0},count:{type:[String,Number],default:""},account:{type:String}},methods:{handleBack:function(){this.$router.back()}}}),a=i,o=(r("78e6"),r("2877")),c=Object(o["a"])(a,s,n,!1,null,"1b90c462",null);e["a"]=c.exports},"96f3":function(t,e,r){"use strict";r("257f")},b680:function(t,e,r){"use strict";var s=r("23e7"),n=r("a691"),i=r("408a"),a=r("1148"),o=r("d039"),c=1..toFixed,u=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},d=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},f=function(t,e,r){var s=-1,n=r;while(++s<6)n+=e*t[s],t[s]=n%1e7,n=u(n/1e7)},h=function(t,e){var r=6,s=0;while(--r>=0)s+=t[r],t[r]=u(s/e),s=s%e*1e7},m=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var s=String(t[e]);r=""===r?s:r+a.call("0",7-s.length)+s}return r},_=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));s({target:"Number",proto:!0,forced:_},{toFixed:function(t){var e,r,s,o,c=i(this),u=n(t),_=[0,0,0,0,0,0],p="",w="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=d(c*l(2,69,1))-69,r=e<0?c*l(2,-e,1):c/l(2,e,1),r*=4503599627370496,e=52-e,e>0){f(_,0,r),s=u;while(s>=7)f(_,1e7,0),s-=7;f(_,l(10,s,1),0),s=e-1;while(s>=23)h(_,1<<23),s-=23;h(_,1<<s),f(_,1,1),h(_,2),w=m(_)}else f(_,0,r),f(_,1<<-e,0),w=m(_)+a.call("0",u);return u>0?(o=w.length,w=p+(o<=u?"0."+a.call("0",u-o)+w:w.slice(0,o-u)+"."+w.slice(o-u))):w=p+w,w}})},ddf8:function(t,e,r){t.exports=r.p+"img/back.eb89e502.svg"}}]);
//# sourceMappingURL=chunk-da809ee8.4a1ca8ce.js.map