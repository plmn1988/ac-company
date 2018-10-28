(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 page-header-container\">\n        <h2>За нас</h2>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section id=\"section-contact-us\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"section-title\">Климатици ЕООД</h1>\n        <p class=\"section-description\">\n          Curabitur vulputate mi eu lacinia imperdiet. Curabitur vulputate mi eu lacinia imperdiet.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-xs-12\">\n        <div class=\"shadow-sm\">\n          <img src=\"../../assets/images/pexels-photo-269077.jpeg\" alt=\"Our company\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-xs-12\">\n        <h4>История на компанията</h4>\n        <p class=\"text-left\">\n          Morbi massa nisi, faucibus eget nibh ac, vestibulum ullamcorper elit. Aenean pretium sem a aliquet\n          consectetur.\n          Curabitur vulputate mi eu lacinia imperdiet. Nam nulla urna, auctor id aliquet eget, tristique fringilla ex.\n          Nullam commodo lectus sed justo condimentum, non facilisis mauris sagittis. Phasellus justo ligula, lobortis\n          et eleifend vitae, vehicula luctus quam.\n          Integer turpis neque, commodo vel suscipit in, auctor sit amet risus. Curabitur scelerisque volutpat\n          bibendum.\n          Duis egestas quam fermentum efficitur ullamcorper.\n        </p>\n        <p>Aenean pretium sem a aliquet\n          consectetur. Duis egestas quam fermentum efficitur ullamcorper.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about-us', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header-wrap\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/home\">Logo</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\" aria-controls=\"navbar-main\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbar-main\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/home\">Начало <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about-us\">За нас</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"products\">Продукти</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"contact-us\">Контакти</a>\n          </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Търсене\" aria-label=\"Търсене\">\n        </form>\n      </div>\n    </div>\n  </nav>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <div class=\"container\">\n    <div class=\"row section\">\n      <div class=\"footer-widget col-md-4 col-xs-12 mb-sm-4\">\n        <h3 class=\"widget-title\">За нас</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida pharetra velit quis auctor. Aenean\n          porta nec augue sit amet aliquet. Cras dignissim bibendum dolor, a tincidunt dui bibendum in. Morbi aliquam\n          dolor ac neque auctor dapibus. Vestibulum auctor mattis libero, consectetur feugiat sem elementum ut.</p>\n      </div>\n      <div class=\"footer-widget col-md-4 col-xs-12 mb-sm-4\">\n        <h3 class=\"widget-title\">Връзки</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida pharetra velit quis auctor. Aenean\n          porta nec augue sit amet aliquet. Cras dignissim bibendum dolor, a tincidunt dui bibendum in. Morbi aliquam\n          dolor ac neque auctor dapibus. Vestibulum auctor mattis libero, consectetur feugiat sem elementum ut.</p>\n      </div>\n      <div class=\"footer-widget col-md-4 col-xs-12\">\n        <h3 class=\"widget-title\">Контакти</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida pharetra velit quis auctor. Aenean\n          porta nec augue sit amet aliquet. Cras dignissim bibendum dolor, a tincidunt dui bibendum in. Morbi aliquam\n          dolor ac neque auctor dapibus. Vestibulum auctor mattis libero, consectetur feugiat sem elementum ut.</p>\n      </div>\n    </div>\n  </div>\n  <div id=\"copyright\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <p>Copyright information</p>\n        </div>\n        <div class=\"col-md-6\">\n          <ul class=\"nav nav-inline justify-content-end\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Sitemap</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Privacy Policy</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ac-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 page-header-container\">\n        <h2>Контакти</h2>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"map\">\n  <img src=\"../../assets/images/map.png\" alt=\"Just an image of a google map.. because they are paid.\">\n</div>\n\n<section id=\"section-contact-us\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"section-title\">Контакти</h1>\n        <p class=\"section-description\">\n          Ще се радваме да Ви бъдем полезни с информация или съвети.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <form>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Име / Фирма\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Телефон\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Имейл\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"inputSubject\" placeholder=\"Относно\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" id=\"inputMessage\" rows=\"5\" placeholder=\"Съобщение\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n              <label class=\"form-check-label\" for=\"gridCheck\">\n                Прочетох и се съгласявам с условията за защита на личните данни.\n              </label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary pull-right\">Изпращане</button>\n        </form>\n      </div>\n      <div class=\"col-md-4 mt-sm-5 mt-md-0\">\n        <h4>Централен офис</h4>\n        <address>\n          <p>\n            <i class=\"fa fa-map-marker fa-fw\"></i>\n            ул. „Берое“ 10, 6000 Митрополит Методий Кусев, Стара Загора\n          </p>\n          <p><i class=\"fa fa-phone fa-fw\"></i>\n            0889 900 900</p>\n          <p><i class=\"fa fa-envelope fa-fw\"></i>\n            email-ac-app@gmail.com\n          </p>\n          <h4>Работно време</h4>\n          <p><i class=\"fa fa-clock fa-fw\"></i>\n            От понеделник до петък от 8:30 до 17:30ч.\n          </p>\n        </address>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouser-area\">\n    <div id=\"carouser-main\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n      <ul class=\"carousel-indicators\">\n        <li data-target=\"#carouser-main\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouser-main\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouser-main\" data-slide-to=\"2\"></li>\n      </ul>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img src=\"../assets/images/carousel_image_1.png\" alt=\"Los Angeles\">\n          <div class=\"carousel-caption\">\n            <h2>Kлиматици ЕООД</h2>\n            <h3>Осигурете на дома си винаги перфектната температура</h3>\n            <a href=\"\" class=\"btn btn-primary btn-lg\">Виж повече</a>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../assets/images//carousel_image_2.png\" alt=\"Chicago\">\n          <div class=\"carousel-caption\">\n            <h2>Продуктова гама</h2>\n            <h3>Качествена климатична техника на най-добри цени</h3>\n            <a href=\"\" class=\"btn btn-primary btn-lg\">Виж повече</a>\n          </div>\n        </div>\n        <div class=\"carousel-item\">\n          <img src=\"../assets/images//carousel_image_3.png\" alt=\"New York\">\n          <div class=\"carousel-caption\">\n            <h2>Услуги</h2>\n            <h3>Pellentesque aliquam ornare ullamcorper</h3>\n            <a href=\"\" class=\"btn btn-primary btn-lg\">Виж повече</a>\n          </div>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouser-main\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\"></span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouser-main\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\"></span>\n      </a>\n    </div>\n  </div>\n\n<section id=\"section-introduction\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"logo-placeholder shadow-sm border\">\n          <h5>Logo</h5>\n        </div>\n      </div>\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\n        <h1 class=\"section-title responsive-title\">Климатици ЕООД</h1>\n          <p class=\"section-description\">Morbi massa nisi, faucibus eget nibh ac, vestibulum ullamcorper elit. Aenean\n            pretium sem a aliquet consectetur. Curabitur vulputate mi eu lacinia imperdiet. Nam nulla urna, auctor id\n            aliquet eget, tristique fringilla ex.\n          </p>\n      </div>\n    </div>\n    <div class=\"row offer-wrap\">\n      <div class=\"col-md-4 offer-container\">\n        <div class=\"icon-wrap\">\n          <i class=\"fa fa-home\"></i>\n        </div>\n        <h2>Оферта #1</h2>\n        <p>\n          Curabitur vulputate mi eu lacinia imperdiet. Curabitur vulputate mi eu lacinia imperdiet.\n        </p>\n      </div>\n      <div class=\"col-md-4 offer-container\">\n        <div class=\"icon-wrap\">\n          <i class=\"fa fa-credit-card\"></i>\n        </div>\n        <h2>Оферта #2</h2>\n        <p>\n          Nam nulla urna, auctor id\n          aliquet eget, tristique fringilla ex. Curabitur vulputate mi eu lacinia imperdiet.\n        </p>\n      </div>\n      <div class=\"col-md-4 offer-container\">\n        <div class=\"icon-wrap\">\n          <i class=\"fa fa-people-carry\"></i>\n        </div>\n        <h2>Оферта #3</h2>\n        <p>\n          Aenean\n          pretium sem a aliquet consectetur. Curabitur vulputate mi eu lacinia imperdiet.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"section-products\">\n  <div class=\"container\">\n    <h1 class=\"section-title\">Продуктова гама</h1>\n    <p class=\"section-description\">Morbi massa nisi, faucibus eget nibh ac,\n      vestibulum ullamcorper elit. Aenean pretium sem a aliquet consectetur. <br>\n      aliquet eget, tristique fringilla ex. </p>\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center btn-menu\">\n        <button class=\"btn btn-primary btn-sm active mr-1\">Всички</button>\n        <button class=\"btn btn-primary btn-sm mr-1\">За дома</button>\n        <button class=\"btn btn-primary btn-sm mr-1\">За офиса</button>\n        <button class=\"btn btn-primary btn-sm\">За заведения</button>\n      </div>\n    </div>\n    <div class=\"row gallery\">\n      <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 px-1 pb-2\">\n        <div class=\"image-container shadow-sm\">\n          <img src=\"../assets/images/gallery_img_1.jpg\" alt=\"\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 px-1 pb-2\">\n        <div class=\"image-container shadow-sm\">\n          <img src=\"../assets/images/gallery_img_2.jpg\" alt=\"\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 px-1 pb-2\">\n        <div class=\"image-container shadow-sm\">\n          <img src=\"../assets/images/gallery_img_3.jpg\" alt=\"\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 px-1 pb-2\">\n        <div class=\"image-container shadow-sm\">\n          <img src=\"../assets/images/gallery_img_4.jpg\" alt=\"\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 px-1 pb-2\">\n        <div class=\"image-container shadow-sm\">\n          <img src=\"../assets/images/gallery_img_5.jpg\" alt=\"\" class=\"img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 px-1\">\n        <div class=\"image-container shadow-sm\">\n          <img src=\"../assets/images/gallery_img_6.jpg\" alt=\"\" class=\"img-fluid\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center btn-more\">\n        <button class=\"btn btn-primary\">Виж повече</button>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"section-services\">\n  <div class=\"container\">\n    <h1 class=\"section-title\">Услуги</h1>\n    <p class=\"section-description\">Morbi massa nisi, faucibus eget nibh ac, vestibulum ullamcorper elit.\n      Aeneanvpretium sem a aliquet consectetur. <br>\n      Curabitur vulputate mi eu lacinia imperdiet.\n    </p>\n    <div class=\"row\">\n      <div class=\"service-box col-md-4 mb-4\">\n        <div class=\"service-icon\">\n          <i class=\"fa fa-home\"></i>\n        </div>\n        <div class=\"service-description\">\n          <h4>Услуга</h4>\n          <p>\n            Morbi massa nisi, faucibus eget nibh ac, vestibulum ullamcorper elit. Aenean\n            pretium sem a aliquet consectetur.\n          </p>\n        </div>\n      </div>\n      <div class=\"service-box col-md-4 mb-4\">\n        <div class=\"service-icon\">\n          <i class=\"fa fa-car\"></i>\n        </div>\n        <div class=\"service-description\">\n          <h4>Услуга</h4>\n          <p>\n            Morbi massa nisi, faucibus eget nibh ac, vestibulum ullamcorper elit. Aenean\n            pretium sem a aliquet consectetur.\n          </p>\n        </div>\n      </div>\n      <div class=\"service-box col-md-4 mb-4\">\n        <div class=\"service-icon\">\n          <i class=\"fa fa-wrench\"></i>\n        </div>\n        <div class=\"service-description\">\n          <h4>Услуга</h4>\n          <p>\n            Morbi massa nisi, faucibus eget nibh ac, vestibulum ullamcorper elit. Aenean\n            pretium sem a aliquet consectetur.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <section id=\"section-clients\">\n  <div class=\"container\">\n    <h1 class=\"section-title\">Наши клиенти</h1>\n    <p class=\"section-description\">Aeneanvpretium sem a aliquet consectetur. Curabitur vulputate mi eu lacinia imperdiet. <br>\n      Curabitur vulputate mi eu lacinia imperdiet.\n    </p>\n    <div class=\"row\">\n\n    </div>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\P.Ivanov\Documents\Visual Studio Code Projects\ac-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map