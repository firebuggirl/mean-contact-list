(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-detail-contact-detail-module"],{

/***/ "./src/app/contact-detail/contact-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailRoutingModule", function() { return ContactDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail/contact-detail.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_2__["ContactDetailComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var ContactDetailRoutingModule = /** @class */ (function () {
    function ContactDetailRoutingModule() {
    }
    ContactDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContactDetailRoutingModule);
    return ContactDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/contact-detail/contact-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailModule", function() { return ContactDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-detail-routing.module */ "./src/app/contact-detail/contact-detail-routing.module.ts");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/contact-detail/contact-detail/contact-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactDetailModule = /** @class */ (function () {
    function ContactDetailModule() {
    }
    ContactDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _contact_detail_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactDetailRoutingModule"]
            ],
            declarations: [_contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__["ContactDetailComponent"]]
        })
    ], ContactDetailModule);
    return ContactDetailModule;
}());



/***/ }),

/***/ "./src/app/contact-detail/contact-detail/contact-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail/contact-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-detail/contact-detail/contact-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail/contact-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact-detail/contact-detail/contact-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/contact-detail/contact-detail/contact-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
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

var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent() {
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
    };
    ContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! ./contact-detail.component.html */ "./src/app/contact-detail/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.css */ "./src/app/contact-detail/contact-detail/contact-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contact-detail-contact-detail-module.js.map