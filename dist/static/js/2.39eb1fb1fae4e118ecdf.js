webpackJsonp([2],{"4TNT":function(t,e,a){e=t.exports=a("yKCJ")(!1),e.push([t.i,"#brm-images{margin-top:20px}#brm-images .img{float:left;min-width:200px;min-height:150px;margin-right:20px;border:1px solid #ccc;position:relative}#brm-images .img img{width:200px;min-height:150px}#brm-images .img .el-icon-delete{position:absolute;right:-10px;top:-10px}",""])},"8BTR":function(t,e,a){"use strict";function n(t){return Object(s.a)({url:"/manage/securityCode/queryInspectionsByDate",method:"post",data:t})}function i(t){return Object(s.a)({url:"/manage/securityCode/deleteInspection",method:"post",data:t})}e.b=n,e.a=i;var s=a("BXx+")},SQyf:function(t,e,a){var n=a("4TNT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("bUva")("66d01184",n,!0,{})},ULos:function(t,e,a){"use strict";var n=a("Hmpo"),i=a.n(n),s=a("vYJH"),o=a.n(s),r=a("8BTR"),c=a("T452"),l=a("Suey"),u=(a.n(l),a("Kf/3"));e.a={data:function(){return{fileList:[],header:{},formData:{date:""},images:[]}},created:function(){this.header={TOKEN:Object(u.a)()},this.getInspectionsByDate()},methods:{delImg:function(t){var e=this;this.$confirm("此操作将永久删除图片信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={path:t};Object(r.a)(a).then(function(t){var a=t.data;a.code===c.b?e.getInspectionsByDate():Object(l.Message)(a.msg)})})},getInspectionsByDate:function(){var t=this;return o()(i.a.mark(function e(){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.b)(t.formData);case 2:if(a=e.sent,a.data.code!==c.b){e.next=8;break}return n=a.data,t.images=n.images,console.log(t.images),e.abrupt("return",!1);case 8:Object(l.Message)(a.data.msg);case 9:case"end":return e.stop()}},e,t)}))()},dateChangebirthday:function(t){this.getInspectionsByDate()},submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},addSuccess:function(t,e,a){var n=this;return"0000"==t.code?(Object(l.Message)("上传成功"),this.getInspectionsByDate(),!1):"0001"==t.code?(l.MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){n.$router.push({path:"/login"})}),!1):void Object(l.Message)(t.msg)}}}},Y97G:function(t,e,a){"use strict";function n(t){a("SQyf")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("ULos"),s=a("ubsg"),o=a("Mz/3"),r=n,c=o(i.a,s.a,!1,r,null,null);e.default=c.exports},ubsg:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},on:{change:t.dateChangebirthday},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1),t._v(" "),a("div",[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://39.105.203.57:9999/manage/securityCode/uploadInspection",data:t.formData,headers:t.header,"on-success":t.addSuccess,"on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过10M")])],1)],1),t._v(" "),a("div",{attrs:{id:"brm-images"}},t._l(t.images,function(e,n){return""!=e?a("div",{key:n,staticClass:"img"},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){t.delImg(e)}}}),t._v(" "),a("img",{attrs:{src:e,alt:""}})]):t._e()}))])},i=[],s={render:n,staticRenderFns:i};e.a=s}});