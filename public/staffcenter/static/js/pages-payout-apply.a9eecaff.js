(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payout-apply"],{"0f04":function(t,e,n){"use strict";var i=n("dbce");n("a434"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("56ec")),s=n("f8ff"),u={props:{max:{type:Number,default:9},list:{type:Array,default:function(){return[]}}},data:function(){return{imgList:[]}},created:function(){this.list.length>0&&(this.imgList=this.list)},methods:{ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var e=this;uni.showModal({title:"删除确认",content:"确定要删除?",success:function(n){n.confirm&&e.imgList.splice(t.currentTarget.dataset.index,1)}})},ChooseImage:function(){var t=this;a.uploadFiles((function(e){t.imgList.push((0,s.fixImgUrl)(e.data.url)),uni.$emit("choosedImg",e.data.url)}))}}};e.default=u},"3c19":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("请款类型:")]),n("v-uni-picker",{attrs:{value:t.typeIndex,range:t.types},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.types[t.typeIndex]))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("请款金额:")]),n("v-uni-input",{attrs:{placeholder:"请输入",name:"input",type:"number"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("收款姓名:")]),n("v-uni-input",{attrs:{placeholder:"请输入",name:"input",type:"text"},model:{value:t.payee,callback:function(e){t.payee=e},expression:"payee"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("收款账号:")]),n("v-uni-input",{attrs:{placeholder:"请输入",name:"input",type:"text"},model:{value:t.payee_account,callback:function(e){t.payee_account=e},expression:"payee_account"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"请输入请款原因..."},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.textareaInput.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("附图:")])],1),n("imgUpload",{attrs:{max:3}}),n("v-uni-view",{staticClass:"padding flex flex-direction",staticStyle:{position:"fixed",bottom:"0",width:"100%"}},[n("v-uni-button",{staticClass:"cu-btn bg-white margin-tb-sm lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showHistory.apply(void 0,arguments)}}},[t._v("查看请款记录")]),n("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交申请")])],1)],1)},s=[]},4026:function(t,e,n){"use strict";var i=n("4ea4"),a=n("dbce");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n("7484")),u=a(n("56ec")),r=(n("f8ff"),i(n("72e6"))),o={components:{imgUpload:r.default},data:function(){return{money:0,payee:"",payee_account:"",types:[],typeIndex:0,reason:"",imgList:[]}},onLoad:function(){var t=this;this.handleReq(),uni.$on("choosedImg",(function(e){t.imgList.push(e)}))},methods:{textareaInput:function(t){this.reason=t.detail.value},PickerChange:function(t){this.typeIndex=t.detail.value},handleReq:function(){var t=this;u.get("staff/payoutTypes",{},(function(e){"success"==e.result?t.types=e.data:s.showError(e.msg)}))},showHistory:function(){uni.navigateTo({url:"/pages/payout/index",animationDuration:200})},handleSubmit:function(){var t=this;""!=this.money?""!=this.payee?""!=this.reason?s.modelShow("请确认","确认提交请款申请",(function(){u.post("staff/payoutApply",{money:t.money,payee:t.payee,payee_account:t.payee_account,images:t.imgList,reason:t.reason,type:t.types[t.typeIndex]},(function(e){"success"==e.result?s.showSuccess(e.msg,(function(){t.showHistory()})):s.showError(e.msg)}))})):s.showError("请输入内容"):s.showError("请输入收款人"):s.showError("请输入金额")}}};e.default=o},"72e6":function(t,e,n){"use strict";n.r(e);var i=n("a9db"),a=n("c1a8");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var u,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"a8403f5a",null,!1,i["a"],u);e["default"]=o.exports},"88e4":function(t,e,n){"use strict";n.r(e);var i=n("4026"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},a715:function(t,e,n){"use strict";n.r(e);var i=n("3c19"),a=n("88e4");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var u,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5a690e44",null,!1,i["a"],u);e["default"]=o.exports},a9db:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-form-group padding-top-sm"},[n("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":t.imgList[i]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ViewImage.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.imgList[i],mode:"aspectFill"}}),n("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.DelImg.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<t.max?n("v-uni-view",{staticClass:"solids",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1)},s=[]},c1a8:function(t,e,n){"use strict";n.r(e);var i=n("0f04"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},f8ff:function(t,e,n){"use strict";n("a15b"),n("d81d"),n("b680"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("841c"),n("1276");var i=n("0d5f");function a(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var i=t;return[e,n,i].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function s(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var u={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var i=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+i(e.getMonth()+1)+"/"+i(e.getDate())+"-"+i(e.getHours())+":"+i(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};function r(t){return t&&-1==t.search("http")?(i.baseUrl+t).replace("\\","/"):t}t.exports={formatTime:a,formatLocation:s,dateUtils:u,fixImgUrl:r}}}]);