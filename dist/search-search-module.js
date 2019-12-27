(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search/search.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search/search.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div id=\"searchDiv\">\n\n    <form class=\"search\">\n      <input #searchBox type=\"text\" name=\"search\" placeholder=\"Search by name or state\" id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n    </form>\n</div>\n\n<div id=\"searchUL\">\n  <ul class=\"search-result\">\n    <li *ngFor=\"let contact of contacts | async\" >\n      <a [routerLink]=\"['/contact-details', contact._id]\">\n        {{contact.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n<div >\n    <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search/search.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var routes = [
    {
        path: '',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"]
            ],
            declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/search/search/search.component.css":
/*!****************************************************!*\
  !*** ./src/app/search/search/search.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-result {\n\tlist-style-type: none;\n\tmargin-top: 3rem;\n\ttext-align: center;\n\n}\n\n@media screen and (max-width: 500px){\n\t#searchUL{\n\t\twidth:80vw;\n\t}\n}\n\n#search-box{\n  border-radius: 6px;\n  height: 50px;\n}\n\n#searchUL{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\nli a{\n  color: beige;\n  font-size: 30px;\n\n}\n\ninput[type=text] {\n    border: 2px solid red;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n\t\tcolor: #7b0101;\n}\n\ninput[type=text]:focus {\n    background-color: #960f03;\n\t\tborder: 3px solid #ded9c9;\n\t\tcolor: beige;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsa0JBQWtCOztBQUVuQjs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtBQUN4Qjs7QUFHQTtFQUNFLFlBQVk7RUFDWixlQUFlOztBQUVqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0VBQzNCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHQge1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdG1hcmdpbi10b3A6IDNyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG5cdCNzZWFyY2hVTHtcblx0XHR3aWR0aDo4MHZ3O1xuXHR9XG59XG4jc2VhcmNoLWJveHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4jc2VhcmNoVUx7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbmxpIGF7XG4gIGNvbG9yOiBiZWlnZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuXG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGNvbG9yOiAjN2IwMTAxO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTYwZjAzO1xuXHRcdGJvcmRlcjogM3B4IHNvbGlkICNkZWQ5Yzk7XG5cdFx0Y29sb3I6IGJlaWdlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/search/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/search/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(auth, http, contactService, router, route) {
        this.auth = auth;
        this.http = http;
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isCollapsed = true;
        auth.handleAuthentication();
    }
    // Push a search term into the observable stream.
    SearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contacts = this.searchTerms.pipe(
        // wait 300ms after each keystroke before constermering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) { return _this.contactService.searchContacts(term); }));
        //this.getContactDetails(this.route.snapshot.params['id']);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search/search.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search.component.css */ "./src/app/search/search/search.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _contact_service__WEBPACK_IMPORTED_MODULE_6__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map