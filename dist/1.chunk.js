webpackJsonp([1],{

/***/ "../../../../../src/app/shared/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Base structure\r\n */\r\n\r\n/* Move down content because we have a fixed navbar that is 50px tall */\r\nbody {\r\n  padding-top: 50px;\r\n}\r\n\r\n/*\r\n * Typography\r\n */\r\n\r\nh1 {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 9px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n.logo{\r\n    height: 80px;\r\n    text-align: center;\r\n    background-color: orange;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-family: serif;\r\n    font-size: 13px;\r\n    line-height: 80px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.sidebar .nav {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.sidebar .nav-item {\r\n  width: 100%;\r\n}\r\n\r\n.sidebar .nav-item + .nav-item {\r\n  margin-left: 0;\r\n}\r\n\r\n.sidebar .nav-link {\r\n  border-radius: 0;\r\n}\r\n\r\n/*\r\n * Dashboard\r\n */\r\n\r\n /* Placeholders */\r\n.placeholders {\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.placeholder img {\r\n  padding-top: 1.5rem;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n\r\nul li{\r\n padding:0 10px 0;\r\n color: white;\r\n}\r\n\r\n.nav-link{\r\n color: #b5a4a4;\r\n font-family: sans-serif;\r\n cursor: pointer;\r\n}\r\n\r\na.nav-link:hover .hidden, .active-link .hidden{\r\n  display:block;\r\n}\r\n\r\na.nav-link:hover, .active-link{\r\n background-color: darkslategray;\r\n color: white;\r\n}\r\n\r\n.hidden{\r\n  display: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills flex-column\">\r\n    <li class=\"nav-item disabled logo\">\r\n        基金管理系统-Link\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"../dashboard\" routerLinkActive=\"active-link\">\r\n                <span class=\"col-md-2 col-sm-2  clear-pd\">\r\n                    <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"col-md-8 col-sm-10\">首页</span>\r\n                <span class=\"col-md-2 col-sm-0 clear-pd pull-right hidden\">\r\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"../fund\" routerLinkActive=\"active-link\" >\r\n                <span class=\"col-md-2 col-sm-2  clear-pd\">\r\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"col-md-8 col-sm-10\">基金管理</span>\r\n                <span class=\"col-md-2 col-sm-0 clear-pd pull-right hidden\">\r\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"../investment\" routerLinkActive=\"active-link\">\r\n                <span class=\"col-md-2 col-sm-2  clear-pd\">\r\n                    <i class=\"fa fa-product-hunt\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"col-md-8 col-sm-10\">投资项目管理</span>\r\n                <span class=\"col-md-2 col-sm-0 clear-pd pull-right hidden\">\r\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"../invester\" routerLinkActive=\"active-link\">\r\n                <span class=\"col-md-2 col-sm-2  clear-pd\">\r\n                    <i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"col-md-8 col-sm-10\">投资人管理</span>\r\n                <span class=\"col-md-2 col-sm-0 clear-pd pull-right hidden\">\r\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" >\r\n                <span class=\"col-md-2 col-sm-2  clear-pd\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"col-md-8 col-sm-10\">分析模块</span>\r\n                <span class=\"col-md-2 col-sm-0 clear-pd pull-right hidden\">\r\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink='/library' routerLinkActive=\"active\" >\r\n                <span class=\"col-md-2 col-sm-2  clear-pd\">\r\n                    <i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>\r\n                </span>\r\n                <span class=\"col-md-8 col-sm-10\">文件库</span>\r\n                <span class=\"col-md-2 col-sm-0 clear-pd pull-right hidden\">\r\n                    <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/shared/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = (function () {
    function NavComponent() {
    }
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/shared/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/nav.component.css")]
    })
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-profile{\r\n    background: white;\r\n    height: 80px;\r\n}\r\n#user-profile ul{\r\n    -webkit-box-orient:horizontal;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:row;\r\n            flex-direction:row;\r\n    margin-top:15px;\r\n}\r\n\r\n#user-profile li a{\r\n    color:black !important;\r\n}\r\n\r\n#user-profile li{\r\n    border-right:1px solid lightgoldenrodyellow;\r\n    width: 50px;\r\n    text-align: center;\r\n    line-height: 15px;\r\n    height:30px;\r\n}\r\n#user-profile li:last-child{\r\n    border-right:0px;\r\n    width: 150px;\r\n}\r\n#user-profile button{\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"user-profile\" class=\"navbar  navbar-inverse mt-3\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                 <a class=\"nav-link\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                 <a class=\"nav-link\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Jayden Yang  <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></a>\r\n            </li>\r\n        </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'user-profile',
        template: __webpack_require__("../../../../../src/app/shared/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/user-profile.component.css")]
    })
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/platform-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_component__ = __webpack_require__("../../../../../src/app/user/platform.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__platform_component__["a" /* PlatformComponent */],
        children: [
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    },
    {
        path: 'fund', component: __WEBPACK_IMPORTED_MODULE_2__platform_component__["a" /* PlatformComponent */],
        children: [
            { path: '', loadChildren: './fund/fund.module#FundModule' }
        ]
    },
    {
        path: 'investment', component: __WEBPACK_IMPORTED_MODULE_2__platform_component__["a" /* PlatformComponent */],
        children: [
            { path: '', loadChildren: './investment/investment.module#InvestmentModule' }
        ]
    },
    {
        path: 'invester', component: __WEBPACK_IMPORTED_MODULE_2__platform_component__["a" /* PlatformComponent */],
        children: [
            { path: '', loadChildren: './invester/invester.module#InvesterModule' }
        ]
    },
    {
        path: 'library', component: __WEBPACK_IMPORTED_MODULE_2__platform_component__["a" /* PlatformComponent */],
        children: [
            { path: '', loadChildren: './library/library.module#LibraryModule' }
        ]
    }
];
var PlatformRoutingModule = (function () {
    function PlatformRoutingModule() {
    }
    return PlatformRoutingModule;
}());
PlatformRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PlatformRoutingModule);

//# sourceMappingURL=platform-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/platform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\r\n  position: absolute;\r\n  top: 16px;\r\n  bottom: 16px;\r\n  left: 15px;\r\n  z-index: 1000;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  border-right: 1px solid #eee;\r\n   background-color:black;\r\n}\r\n\r\n.sidebar {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n#app{\r\n  min-height:750px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/platform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"app\">\r\n      <div class=\"row\">\r\n            <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\r\n             <app-nav></app-nav>\r\n            </nav>\r\n            <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2\">\r\n                  <user-profile></user-profile>\r\n                  <router-outlet></router-outlet>\r\n            </main>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/platform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlatformComponent = (function () {
    function PlatformComponent() {
    }
    return PlatformComponent;
}());
PlatformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/platform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/platform.component.css")]
    })
], PlatformComponent);

//# sourceMappingURL=platform.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/platform.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_routing_module__ = __webpack_require__("../../../../../src/app/user/platform-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_log_service__ = __webpack_require__("../../../../../src/app/core/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_nav_component__ = __webpack_require__("../../../../../src/app/shared/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_user_profile_component__ = __webpack_require__("../../../../../src/app/shared/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__platform_component__ = __webpack_require__("../../../../../src/app/user/platform.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PlatformModule = (function () {
    function PlatformModule() {
    }
    return PlatformModule;
}());
PlatformModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__platform_component__["a" /* PlatformComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_user_profile_component__["a" /* UserProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__platform_routing_module__["a" /* PlatformRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__core_log_service__["a" /* LogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__platform_component__["a" /* PlatformComponent */]]
    })
], PlatformModule);

//# sourceMappingURL=platform.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map