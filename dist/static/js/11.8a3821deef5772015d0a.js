webpackJsonp([11],{Hvba:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"ruleForm",staticStyle:{width:"600px"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"农场编码：",prop:"farmCode"}},[a("el-input",{attrs:{name:"farmCode",type:"text",placeholder:"农场编码"},model:{value:e.ruleForm.farmCode,callback:function(r){e.$set(e.ruleForm,"farmCode",r)},expression:"ruleForm.farmCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"农场名称：",prop:"farmName"}},[a("el-input",{attrs:{name:"farmName",type:"text",placeholder:"农场名称"},model:{value:e.ruleForm.farmName,callback:function(r){e.$set(e.ruleForm,"farmName",r)},expression:"ruleForm.farmName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"农场负责人：",prop:"farmLeader"}},[a("el-input",{attrs:{name:"farmLeader",type:"text",placeholder:"农场负责人"},model:{value:e.ruleForm.farmLeader,callback:function(r){e.$set(e.ruleForm,"farmLeader",r)},expression:"ruleForm.farmLeader"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"负责人图片：",prop:"file"}},[a("input",{ref:"imgFile",attrs:{type:"file",id:"imgFile"},on:{change:e.changefileLeader}})]),e._v(" "),a("el-form-item",{attrs:{label:"农场地址：",prop:"farmAddress"}},[a("el-input",{attrs:{name:"farmAddress",type:"text",placeholder:"农场地址"},model:{value:e.ruleForm.farmAddress,callback:function(r){e.$set(e.ruleForm,"farmAddress",r)},expression:"ruleForm.farmAddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图片文件：",prop:"file"}},[a("input",{ref:"imgFile",attrs:{type:"file",id:"imgFile"},on:{change:e.changeHandle}})]),e._v(" "),a("el-form-item",{attrs:{label:"x轴坐标：",prop:"xAxis"}},[a("el-input",{attrs:{name:"xAxis",type:"text",placeholder:"x轴坐标"},model:{value:e.ruleForm.xAxis,callback:function(r){e.$set(e.ruleForm,"xAxis",r)},expression:"ruleForm.xAxis"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"y轴坐标：",prop:"yAxis"}},[a("el-input",{attrs:{name:"yAxis",type:"text",placeholder:"y轴坐标"},model:{value:e.ruleForm.yAxis,callback:function(r){e.$set(e.ruleForm,"yAxis",r)},expression:"ruleForm.yAxis"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(r){e.onSubmit("ruleForm")}}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},l=[],m={render:t,staticRenderFns:l};r.a=m},ddSY:function(e,r,a){"use strict";var t=a("Hmpo"),l=a.n(t),m=a("vYJH"),n=a.n(m),o=a("vTna"),s=a("T452"),i=a("Suey");a.n(i);r.a={data:function(){return{rules:{farmCode:[{required:!0,message:"请输入农场编码",trigger:"blur"}],farmName:[{required:!0,message:"请输入农场名称",trigger:"blur"}],farmLeader:[{required:!0,message:"请输入农场负责人",trigger:"blur"}],farmAddress:[{required:!0,message:"请输入农场地址",trigger:"blur"}]},ruleForm:{farmCode:"",farmName:"",farmLeader:"",farmAddress:"",xAxis:"",yAxis:""},file:"",leaderFile:""}},methods:{onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.add()})},add:function(){var e=this;return n()(l.a.mark(function r(){var a,t;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=new FormData,a.append("fileFarm",e.file),a.append("fileLeader",e.leaderFile),a.append("farmCode",e.ruleForm.farmCode),a.append("farmName",e.ruleForm.farmName),a.append("farmLeader",e.ruleForm.farmLeader),a.append("farmAddress",e.ruleForm.farmAddress),a.append("xAxis",e.ruleForm.xAxis),a.append("yAxis",e.ruleForm.yAxis),console.log(a),r.next=12,Object(o.a)(a);case 12:if(t=r.sent,t.data.code!==s.b){r.next=16;break}return e.$alert("保存成功",{confirmButtonText:"确定",callback:function(r){"confirm"===r&&e.$router.push({path:"/axm/farm/list"})}}),r.abrupt("return",!1);case 16:Object(i.Message)(t.data.msg);case 17:case"end":return r.stop()}},r,e)}))()},changeHandle:function(e){this.file=e.target.files[0]},changefileLeader:function(e){this.leaderFile=e.target.files[0]},resetForm:function(e){this.$refs[e].resetFields()}}}},"q+5K":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=a("ddSY"),l=a("Hvba"),m=a("Mz/3"),n=m(t.a,l.a,!1,null,null,null);r.default=n.exports},vTna:function(e,r,a){"use strict";function t(e){return Object(s.a)({url:"/manage/farm/listFarms?page="+e.page+"&pageSize=20",method:"post",data:e})}function l(e){return Object(s.a)({url:"/manage/farm/addFarm",method:"post",data:e})}function m(e){return Object(s.a)({url:"/manage/farm/modifyFarm",method:"post",data:e})}function n(e){return Object(s.a)({url:"/manage/farm/queryFarmInfo",method:"post",data:e})}function o(e){return Object(s.a)({url:"/manage/farm/deleteFarm",method:"post",data:e})}r.d=t,r.a=l,r.c=m,r.e=n,r.b=o;var s=a("BXx+")}});