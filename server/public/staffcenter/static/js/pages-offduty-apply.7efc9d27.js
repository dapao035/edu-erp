(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-offduty-apply"],{"0795":function(t,e,n){"use strict";n.r(e);var a=n("ce65"),i=n("4df1");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"44bf0b3e",null,!1,a["a"],r);e["default"]=o.exports},"10c8":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-form-group padding-top-sm"},[n("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"bg-img",attrs:{"data-url":t.imgList[a]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ViewImage.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.imgList[a],mode:"aspectFill"}}),n("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":a},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.DelImg.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<t.max?n("v-uni-view",{staticClass:"solids",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1)},s=[]},"4df1":function(t,e,n){"use strict";n.r(e);var a=n("d92a"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},55673:function(t,e,n){"use strict";n("a15b"),n("d81d"),n("b680"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("841c"),n("1276");var a=n("a732");function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var a=t;return[e,n,a].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function s(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var r={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+a(e.getMonth()+1)+"/"+a(e.getDate())+"-"+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};function u(t){return t&&-1==t.search("http")?(a.baseUrl+t).replace("\\","/"):t}t.exports={formatTime:i,formatLocation:s,dateUtils:r,fixImgUrl:u}},"7f03":function(t,e,n){"use strict";n.r(e);var a=n("10c8"),i=n("a7d5");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"a8403f5a",null,!1,a["a"],r);e["default"]=o.exports},a7d5:function(t,e,n){"use strict";n.r(e);var a=n("cdf0"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},cdf0:function(t,e,n){"use strict";var a=n("dbce");n("a434"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5567")),s=n("55673"),r={props:{max:{type:Number,default:9},list:{type:Array,default:function(){return[]}}},data:function(){return{imgList:[]}},created:function(){this.list.length>0&&(this.imgList=this.list)},methods:{ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){var e=this;uni.showModal({title:"删除确认",content:"确定要删除?",success:function(n){n.confirm&&e.imgList.splice(t.currentTarget.dataset.index,1)}})},ChooseImage:function(){var t=this;i.uploadFiles((function(e){t.imgList.push((0,s.fixImgUrl)(e.data.url)),uni.$emit("choosedImg",e.data.url)}))}}};e.default=r},ce65:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("请假类型:")]),n("v-uni-picker",{attrs:{value:t.typeIndex,range:t.types},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.types[t.typeIndex]))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("开始日期:")]),n("v-uni-picker",{attrs:{mode:"date",value:t.startDate,start:"2020-08-01",end:"2028-09-01"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.startDateChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.startDate))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("结束日期:")]),n("v-uni-picker",{attrs:{mode:"date",value:t.endDate,start:"2020-08-01",end:"2028-09-01"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.endDateChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.endDate))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"请输入请假原因..."},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.textareaInput.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("附图:")])],1),n("imgUpload",{attrs:{max:3}}),n("v-uni-view",{staticClass:"padding flex flex-direction",staticStyle:{position:"fixed",bottom:"0",width:"100%"}},[n("v-uni-button",{staticClass:"cu-btn bg-white margin-tb-sm lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showHistory.apply(void 0,arguments)}}},[t._v("查看请假记录")]),n("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg shadow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交申请")])],1)],1)},s=[]},d92a:function(t,e,n){"use strict";var a=n("4ea4"),i=n("dbce");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("596b")),r=i(n("5567")),u=(n("55673"),a(n("7f03"))),o={components:{imgUpload:u.default},data:function(){return{types:[],typeIndex:0,startDate:"",endDate:"",reason:"",imgList:[]}},onLoad:function(){var t=this,e=new Date;this.startDate=this.endDate=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),this.handleReq(),uni.$on("choosedImg",(function(e){t.imgList.push(e)}))},methods:{textareaInput:function(t){this.reason=t.detail.value},PickerChange:function(t){this.typeIndex=t.detail.value},startDateChange:function(t){this.startDate=t.detail.value},endDateChange:function(t){this.endDate=t.detail.value},handleReq:function(){var t=this;r.get("staff/offdutyTypes",{},(function(e){"success"==e.result?t.types=e.data:s.showError(e.msg)}))},showHistory:function(){uni.navigateTo({url:"/pages/offduty/index",animationDuration:200})},handleSubmit:function(){var t=this;""!=this.startDate?""!=this.endDate?""!=this.reason?s.modelShow("请确认","确认请假时间",(function(){r.post("staff/offdutyApply",{startDate:t.startDate,endDate:t.endDate,reason:t.reason,images:t.imgList,type:t.types[t.typeIndex]},(function(e){"success"==e.result?s.showSuccess(e.msg,(function(){t.showHistory()})):s.showError(e.msg)}))})):s.showError("请输入事由"):s.showError("请输入结束日期"):s.showError("请输入开始日期")}}};e.default=o}}]);