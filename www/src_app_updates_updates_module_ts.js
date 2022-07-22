"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_updates_updates_module_ts"],{

/***/ 9434:
/*!***************************************************!*\
  !*** ./src/app/updates/updates-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatesPageRoutingModule": () => (/* binding */ UpdatesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _updates_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updates.page */ 3842);




const routes = [
    {
        path: '',
        component: _updates_page__WEBPACK_IMPORTED_MODULE_0__.UpdatesPage
    }
];
let UpdatesPageRoutingModule = class UpdatesPageRoutingModule {
};
UpdatesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdatesPageRoutingModule);



/***/ }),

/***/ 5901:
/*!*******************************************!*\
  !*** ./src/app/updates/updates.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatesPageModule": () => (/* binding */ UpdatesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _updates_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updates-routing.module */ 9434);
/* harmony import */ var _updates_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updates.page */ 3842);







let UpdatesPageModule = class UpdatesPageModule {
};
UpdatesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _updates_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatesPageRoutingModule
        ],
        declarations: [_updates_page__WEBPACK_IMPORTED_MODULE_1__.UpdatesPage]
    })
], UpdatesPageModule);



/***/ }),

/***/ 3842:
/*!*****************************************!*\
  !*** ./src/app/updates/updates.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatesPage": () => (/* binding */ UpdatesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _updates_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updates.page.html?ngResource */ 6963);
/* harmony import */ var _updates_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updates.page.scss?ngResource */ 5632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UpdatesPage = class UpdatesPage {
    constructor() { }
    ngOnInit() {
    }
};
UpdatesPage.ctorParameters = () => [];
UpdatesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-updates',
        template: _updates_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_updates_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdatesPage);



/***/ }),

/***/ 5632:
/*!******************************************************!*\
  !*** ./src/app/updates/updates.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6963:
/*!******************************************************!*\
  !*** ./src/app/updates/updates.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Updates</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_updates_updates_module_ts.js.map