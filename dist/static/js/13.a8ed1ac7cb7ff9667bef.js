webpackJsonp([13],{"2twu":function(e,r,t){"use strict";var a=t("Xxa5"),o=t.n(a),n=t("exGp"),s=t.n(n),l=t("9Pbq"),u=t("T452"),c=t("zL8q");t.n(c);r.a={data:function(){return{rules:{factoryCode:[{required:!0,message:"请输入工厂编码",trigger:"blur"}],factoryName:[{required:!0,message:"请输入工厂名称",trigger:"blur"}],factoryOwner:[{required:!0,message:"请输入工厂厂长",trigger:"blur"}],factoryAddress:[{required:!0,message:"请输入工厂地址",trigger:"blur"}],sensoryIndex:[{required:!0,message:"请输入感官指标",trigger:"blur"}],manageSysAuth:[{required:!0,message:"请输入管理体系认证",trigger:"blur"}]},ruleForm:{id:this.$route.params.id,factoryCode:"",factoryName:"",factoryOwner:"",factoryAddress:"",sensoryIndex:"",manageSysAuth:"",xAxis:"",yAxis:"",image:""},file:"",image:""}},created:function(){0===this.ruleForm.id?this.$router.push({path:"/axm/factory/list"}):this.queryFactory()},methods:{onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.edit()})},queryFactory:function(){var e=this;return s()(o.a.mark(function r(){var t,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t={id:e.ruleForm.id},r.next=3,Object(l.e)(t);case 3:if(a=r.sent,a.data.code!==u.b){r.next=9;break}return e.ruleForm=a.data,console.log(a.data.image),e.image=a.data.image,r.abrupt("return",!1);case 9:Object(c.Message)(a.data.msg);case 10:case"end":return r.stop()}},r,e)}))()},edit:function(){var e=this;return s()(o.a.mark(function r(){var t,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=new FormData,t.append("id",e.ruleForm.id),t.append("factoryCode",e.ruleForm.factoryCode),t.append("factoryName",e.ruleForm.factoryName),t.append("factoryOwner",e.ruleForm.factoryOwner),t.append("factoryAddress",e.ruleForm.factoryAddress),t.append("sensoryIndex",e.ruleForm.sensoryIndex),t.append("manageSysAuth",e.ruleForm.manageSysAuth),t.append("xAxis",e.ruleForm.xAxis),t.append("yAxis",e.ruleForm.yAxis),t.append("file",e.file),console.log(t),r.next=14,Object(l.d)(t);case 14:if(a=r.sent,console.log(a),a.data.code!==u.b){r.next=19;break}return e.$alert("修改成功",{confirmButtonText:"确定",callback:function(r){"confirm"===r&&e.$router.push({path:"/axm/factory/list"})}}),r.abrupt("return",!1);case 19:Object(c.Message)(a.data.msg);case 20:case"end":return r.stop()}},r,e)}))()},resetForm:function(e){this.$refs[e].resetFields()},changeHandle:function(e){this.file=e.target.files[0]}}}},"9Pbq":function(e,r,t){"use strict";function a(e){return Object(u.a)({url:"/manage/factory/listFactories?page="+e.page+"&pageSize=20",method:"post",data:e})}function o(e){return Object(u.a)({url:"/manage/factory/addFactory",method:"post",data:e})}function n(e){return Object(u.a)({url:"/manage/factory/modifyFactory",method:"post",data:e})}function s(e){return Object(u.a)({url:"/manage/factory/queryFactory?id="+e.id,method:"post",data:e})}function l(e){return Object(u.a)({url:"/manage/factory/deleteFactory",method:"post",data:e})}r.c=a,r.a=o,r.d=n,r.e=s,r.b=l;var u=t("BXx+")},"K+Of":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("2twu"),o=t("Q/xf"),n=t("VU/8"),s=n(a.a,o.a,!1,null,null,null);r.default=s.exports},"Q/xf":function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"工厂编码：",prop:"factoryCode"}},[t("el-input",{attrs:{name:"factoryCode",type:"text",placeholder:"工厂编码"},model:{value:e.ruleForm.factoryCode,callback:function(r){e.$set(e.ruleForm,"factoryCode",r)},expression:"ruleForm.factoryCode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"工厂名称：",prop:"factoryName"}},[t("el-input",{attrs:{name:"factoryName",type:"text",placeholder:"工厂名称"},model:{value:e.ruleForm.factoryName,callback:function(r){e.$set(e.ruleForm,"factoryName",r)},expression:"ruleForm.factoryName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"工厂厂长：",prop:"factoryOwner"}},[t("el-input",{attrs:{name:"factoryOwner",type:"text",placeholder:"工厂厂长"},model:{value:e.ruleForm.factoryOwner,callback:function(r){e.$set(e.ruleForm,"factoryOwner",r)},expression:"ruleForm.factoryOwner"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"工厂地址：",prop:"factoryAddress"}},[t("el-input",{attrs:{name:"factoryAddress",type:"text",placeholder:"工厂地址"},model:{value:e.ruleForm.factoryAddress,callback:function(r){e.$set(e.ruleForm,"factoryAddress",r)},expression:"ruleForm.factoryAddress"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"感官指标：",prop:"sensoryIndex"}},[t("el-input",{attrs:{name:"sensoryIndex",type:"text",placeholder:"感官指标"},model:{value:e.ruleForm.sensoryIndex,callback:function(r){e.$set(e.ruleForm,"sensoryIndex",r)},expression:"ruleForm.sensoryIndex"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"管理体系认证：",prop:"manageSysAuth"}},[t("el-input",{attrs:{name:"manageSysAuth",type:"text",placeholder:"管理体系认证"},model:{value:e.ruleForm.manageSysAuth,callback:function(r){e.$set(e.ruleForm,"manageSysAuth",r)},expression:"ruleForm.manageSysAuth"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"图片文件：",prop:"file"}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("input",{ref:"imgFile",attrs:{type:"file",id:"imgFile"},on:{change:e.changeHandle}})]),e._v(" "),t("el-col",{attrs:{span:18}},[e.image?t("img",{staticStyle:{"max-width":"200px"},attrs:{src:e.image,alt:""}}):e._e()])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"坐标："}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"X轴："}},[t("el-input",{attrs:{name:"xAxis",type:"number",placeholder:"X轴"},model:{value:e.ruleForm.xAxis,callback:function(r){e.$set(e.ruleForm,"xAxis",r)},expression:"ruleForm.xAxis"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:6,offset:2}},[t("el-form-item",{attrs:{label:"Y轴："}},[t("el-input",{attrs:{name:"yAxis",type:"number",placeholder:"Y轴"},model:{value:e.ruleForm.yAxis,callback:function(r){e.$set(e.ruleForm,"yAxis",r)},expression:"ruleForm.yAxis"}})],1)],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.onSubmit("ruleForm")}}},[e._v("保存")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],n={render:a,staticRenderFns:o};r.a=n}});