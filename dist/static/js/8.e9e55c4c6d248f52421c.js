webpackJsonp([8],{"7iA4":function(e,t,a){var o=a("SRBf");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("bUva")("e7f0082a",o,!0,{})},"NOQ/":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},on:{change:e.dateChangebirthday},model:{value:e.formData.date,callback:function(t){e.$set(e.formData,"date",t)},expression:"formData.date"}})],1),e._v(" "),a("div",{staticStyle:{width:"200px"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://39.105.203.57:9999/manage/securityCode/uploadInspection",data:e.formData,headers:e.header,"on-success":e.addSuccess,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过10M")])],1)],1)])},s=[],n={render:o,staticRenderFns:s};t.a=n},SRBf:function(e,t,a){t=e.exports=a("yKCJ")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"add.vue",sourceRoot:""}])},ULos:function(e,t,a){"use strict";var o=a("Suey"),s=(a.n(o),a("Kf/3"));t.a={data:function(){return{fileList:[],header:{},formData:{date:""}}},created:function(){console.log(Object(s.a)()),this.header={TOKEN:Object(s.a)()}},methods:{dateChangebirthday:function(e){console.log(e)},submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){console.log(11111),console.log(e,t)},handlePreview:function(e){console.log(2222),console.log(e)},addSuccess:function(e,t,a){var s=this;return console.log(e),"0000"==e.code?(Object(o.Message)("上传成功"),!1):"0001"==e.code?(o.MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){s.$routes.push({path:"/login"})}),!1):void Object(o.Message)(e.msg)}}}},Y97G:function(e,t,a){"use strict";function o(e){a("7iA4")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("ULos"),n=a("NOQ/"),i=a("Mz/3"),l=o,c=i(s.a,n.a,!1,l,null,null);t.default=c.exports}});
//# sourceMappingURL=8.e9e55c4c6d248f52421c.js.map