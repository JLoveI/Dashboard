webpackJsonp([3],{

/***/ "../../../../../src/app/user/fund/detail/fund-detail-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fund-info nav button.navbar-toggler{\r\n    color: black;\r\n}\r\n#navbars-tab a{\r\n    font-size: 15px;\r\n}\r\n\r\n#tab-content{\r\n    padding: 20px 20px 10px;\r\n}\r\n\r\n#tab-content span{\r\n    margin-left: 10px;\r\n}\r\n\r\n#tab-content .info{\r\n    background-color: #bbb6b0;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.line-show{\r\n    display: block;\r\n    width: 100%;\r\n    padding: .5rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.25;\r\n    color: #464a4c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n   \r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n.col-center{\r\n    margin:0 auto 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/fund/detail/fund-detail-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\" id=\"fund-info\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-inverse mt-3\">\r\n    <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbars-tab\"\r\n      aria-controls=\"navbars-tab\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbars-tab\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\">基本信息</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">投资组合</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">投资人</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">SPV管理</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">事件安排</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">现金流信息</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">合规遵从</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">财务信息</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">股权交易</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">分析</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">文件一览</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">事件安排</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\">收益分配</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <div class=\"tab-content tab-pannel\" id=\"tab-content\">\r\n    <div class=\"info\">\r\n      基本信息\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"row col-lg-6\">\r\n        <label class=\"col-3  col-form-label\">基金全程</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">试验基金1号（有限合伙）</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-6\">\r\n        <label class=\"col-3  col-form-label\">基金募集额度</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">1000万</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label  class=\"col-3  col-form-label\">基金简称</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">基金1号</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">注册号</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">SD7463</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">已募集额度</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">800万</p>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">基金代码</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">F00001</p>\r\n        </div>\r\n      </div>\r\n      <div class=\" row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">出资进度</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">0%</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">募集(%)</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">80%</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row col-lg-4\">\r\n        <label  class=\"col-3  col-form-label\">基金类型</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">有限合伙</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n       <div class=\"row col-lg-4\">\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">缴款安排</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">分次缴纳</p>\r\n        </div>\r\n      </div>\r\n       <div class=\"row col-lg-4\">\r\n      </div>\r\n       <div class=\"row col-lg-4\">\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">设立时间 </label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">2017年3月2日</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">基金期限\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">3年</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">管理费率</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">3%</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3 col-form-label\">优先回报</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">8%</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">业绩报酬\r\n        </label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">20%</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n\r\n      <div class=\"row col-lg-12\">\r\n        <label class=\"col-3  col-form-label\">费用报酬详述 </label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\"></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">注册地</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\">上海市湖滨路23号</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n\r\n       <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">备案号</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\"></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n\r\n       <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">合伙协议 </label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\"><i class=\"fa fa-file-word-o\" aria-hidden=\"true\"></i><span>合伙协议文件</span></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n\r\n\r\n       <div class=\"row col-lg-4\">\r\n        <label class=\"col-3  col-form-label\">托管协议</label>\r\n        <div class=\"col-9\">\r\n          <p class=\"line-show\"><i class=\"fa fa-file-word-o\" aria-hidden=\"true\"></i><span>托管协议文件</span></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n      <div class=\"row col-lg-4\">\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n   <div class=\"form-group row\">\r\n      <div class=\"col-center\">\r\n        <button class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i><span>编辑</span></button>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/fund/detail/fund-detail-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundDetailInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FundDetailInfoComponent = (function () {
    function FundDetailInfoComponent() {
    }
    return FundDetailInfoComponent;
}());
FundDetailInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/fund/detail/fund-detail-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/fund/detail/fund-detail-info.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FundDetailInfoComponent);

//# sourceMappingURL=fund-detail-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/fund/fund-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pd-5{\r\n    padding: 5px;\r\n}\r\n\r\n#fund table tbody tr{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/fund/fund-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\" id=\"fund\">\r\n  <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n    <a class=\"navbar-brand\" >基金列表</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <div class=\"btn-group ml-auto\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i><span class=\"pd-5\">添加</span></button>\r\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-window-close\" aria-hidden=\"true\"></i><span class=\"pd-5\">删除</span></button>\r\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i><span class=\"pd-5\">导出</span></button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <section class=\"pd-5\">\r\n    <table class=\"table table-hover table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th> <i class=\"fa {{allChecked ? 'fa-check-square-o' : 'fa-square-o'}}\"  aria-hidden=\"true\"></i> </th>\r\n          <th>基金名称</th>\r\n          <th>基金状态</th>\r\n          <th>认缴规模</th>\r\n          <th>已缴款</th>\r\n\r\n          <th>设立时间</th>\r\n          <th>行业偏好</th>\r\n          <th>投资经理</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr (click)=\"navToFundDetail()\">\r\n          <td scope=\"row\"><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i></td>\r\n          <td>基金1号</td>\r\n          <td>已募未投</td>\r\n          <td>1000万</td>\r\n          <td>200万</td>\r\n          <td>2016-12-1</td>\r\n          <td>互联网</td>\r\n          <td>张斌</td>\r\n        </tr>\r\n        <tr (click)=\"navToFundDetail()\">\r\n          <td scope=\"row\"><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i></td>\r\n          <td>基金2号</td>\r\n          <td>已投资</td>\r\n          <td>200万</td>\r\n          <td>200万</td>\r\n          <td>2016-12-1</td>\r\n          <td>金融页</td>\r\n          <td>张斌</td>\r\n        </tr>\r\n         <tr (click)=\"navToFundDetail()\">\r\n          <td scope=\"row\"><i class=\"fa {{checked ? 'fa-check-square-o' : 'fa-square-o'}}\" aria-hidden=\"true\"></i></td>\r\n          <td>基金3号</td>\r\n          <td>已退出</td>\r\n          <td>400万</td>\r\n          <td>400万</td>\r\n          <td>2016-12-1</td>\r\n          <td>互联网</td>\r\n          <td>张斌</td>\r\n        </tr>\r\n         <tr (click)=\"navToFundDetail()\">\r\n          <td scope=\"row\"><i  class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i></td>\r\n          <td>基金4号</td>\r\n          <td>未募集</td>\r\n          <td>600万</td>\r\n          <td></td>\r\n          <td>2016-12-1</td>\r\n          <td>制造业</td>\r\n          <td>徐来</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </section>\r\n\r\n  <div>"

/***/ }),

/***/ "../../../../../src/app/user/fund/fund-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FundListComponent = (function () {
    function FundListComponent(router) {
        this.router = router;
        this.allChecked = false;
        this.checked = false;
    }
    FundListComponent.prototype.navToFundDetail = function () {
        this.router.navigate(['/fund', 1]);
    };
    return FundListComponent;
}());
FundListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/fund/fund-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/fund/fund-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FundListComponent);

var _a;
//# sourceMappingURL=fund-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/fund/fund-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fund_list_component__ = __webpack_require__("../../../../../src/app/user/fund/fund-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_fund_detail_info_component__ = __webpack_require__("../../../../../src/app/user/fund/detail/fund-detail-info.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__fund_list_component__["a" /* FundListComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__detail_fund_detail_info_component__["a" /* FundDetailInfoComponent */] }
];
var FundRoutingModule = (function () {
    function FundRoutingModule() {
    }
    return FundRoutingModule;
}());
FundRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], FundRoutingModule);

//# sourceMappingURL=fund-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/fund/fund.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fund_routing_module__ = __webpack_require__("../../../../../src/app/user/fund/fund-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fund_list_component__ = __webpack_require__("../../../../../src/app/user/fund/fund-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_fund_detail_info_component__ = __webpack_require__("../../../../../src/app/user/fund/detail/fund-detail-info.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundModule", function() { return FundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FundModule = (function () {
    function FundModule() {
    }
    return FundModule;
}());
FundModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__fund_routing_module__["a" /* FundRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__fund_list_component__["a" /* FundListComponent */], __WEBPACK_IMPORTED_MODULE_6__detail_fund_detail_info_component__["a" /* FundDetailInfoComponent */]]
    })
], FundModule);

//# sourceMappingURL=fund.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map