webpackJsonp([2],{"/Ir+":function(t,e,a){var r=a("mLmt");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("bUva")("2ffcefbb",r,!0,{})},"0qwr":function(t,e,a){"use strict";var r=a("Hmpo"),s=a.n(r),o=a("vYJH"),l=a.n(o),n=a("a7Xk"),i=a("T452"),c=a("Suey");a.n(c);e.a={data:function(){return{dataList:[],list:[],dateTime:[],tableData:[{queryRate:"",refferRate:""}],page:1,total:0,pageSize:20,searchForm:{create_start:"",create_end:"",size:20}}},mounted:function(){this.searchForm.create_start=this.getNowFormatDate(),this.searchForm.create_end=this.getNowFormatDate(),this.codeStatsByDate(),this.visitCodes()},methods:{visitCodes:function(){var t=this;return l()(s.a.mark(function e(){var a,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={startDate:t.searchForm.create_start||"",endDate:t.searchForm.create_end||"",page:t.page,pageSize:20,visitOrQueryFlag:1},e.next=3,Object(n.b)(a);case 3:if(r=e.sent,o=r.data,o.code!=i.b){e.next=10;break}return t.dataList=o.list,console.log(t.dataList),t.total=o.total,e.abrupt("return",!1);case 10:Object(c.Message)(o.msg);case 11:case"end":return e.stop()}},e,t)}))()},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return a>=1&&a<=9&&(a="0"+a),r>=0&&r<=9&&(r="0"+r),e+"-"+a+"-"+r},codeStatsByDate:function(){var t=this;return l()(s.a.mark(function e(){var a,r,o,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={startDate:t.searchForm.create_start||"",endDate:t.searchForm.create_end||""},e.next=3,Object(n.a)(a);case 3:if(r=e.sent,r.data.code!==i.b){e.next=12;break}return o=r.data,l=100*o.queryRate,u=100*o.refferRate,t.tableData[0].queryRate=l.toFixed(2)+"%",t.tableData[0].refferRate=u.toFixed(2)+"%",t.list=o.list,e.abrupt("return",!1);case 12:Object(c.Message)(r.data.msg);case 13:case"end":return e.stop()}},e,t)}))()},resetForm:function(t){this.dateTime=[],this.$refs[t].resetFields()},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.codeStatsByDate(),e.visitCodes()})},dateChangebirthday:function(t){this.searchForm.create_start=t[0],this.searchForm.create_end=t[1]},handleCurrentChange:function(t){this.page=t,this.visitCodes()}}}},a7Xk:function(t,e,a){"use strict";function r(t){return Object(o.a)({url:"/stats/code/getCodeStatsByDate",method:"post",data:t})}function s(t){return Object(o.a)({url:"/stats/code/listVisitCodes?page="+t.page+"&pageSize=20",method:"post",data:t})}e.a=r,e.b=s;var o=a("BXx+")},hdmz:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"ibox-content"},[a("el-form",{ref:"searchForm",attrs:{model:t.searchForm,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"日期："}},[a("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.dateChangebirthday},model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"info"},on:{click:function(e){t.resetForm("searchForm")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("searchForm")}}},[t._v("搜索")])],1)],1),t._v(" "),t._m(0),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"50px"},attrs:{data:t.list,stripe:""}},[a("el-table-column",{attrs:{prop:"device",label:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"visitTysonCount",label:"安心码访问总数（泰森）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"queryTysonCount",label:"安心码查询总数（泰森）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"visitWalmartCount",label:"安心码访问总数（沃尔玛）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"queryWalmartCount",label:"安心码查询总数（沃尔玛）"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalCount",label:"访问总数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ipCount",label:"ip总数"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"50px"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"queryRate",label:"安心码跳转率"}}),t._v(" "),a("el-table-column",{attrs:{prop:"refferRate",label:"安心码查询率"}})],1)],1)],1),t._v(" "),t._m(1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"50px"},attrs:{data:t.dataList,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"securityCode",label:"安心码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"visitTime",label:"访问时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"device",label:"设备类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"ip"}}),t._v(" "),a("el-table-column",{attrs:{prop:"referer",label:"来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"province",label:"省份"}}),t._v(" "),a("el-table-column",{attrs:{prop:"city",label:"城市"}})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"},attrs:{type:"flex",justify:"center"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.page,"page-size":t.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ibox-title"},[a("h3",[t._v("统计信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ibox-title"},[a("h3",[t._v("访问明细")])])}],o={render:r,staticRenderFns:s};e.a=o},lWxt:function(t,e,a){"use strict";function r(t){a("/Ir+")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("0qwr"),o=a("hdmz"),l=a("Mz/3"),n=r,i=l(s.a,o.a,!1,n,"data-v-787c2dfc",null);e.default=i.exports},mLmt:function(t,e,a){e=t.exports=a("yKCJ")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"axm.vue",sourceRoot:""}])}});
//# sourceMappingURL=2.24ebcca081a3ad25e1ce.js.map