"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_appstab_appstab_module_ts"],{

/***/ 572:
/*!***************************************************!*\
  !*** ./src/app/appstab/appstab-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppstabPageRoutingModule": () => (/* binding */ AppstabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _appstab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appstab.page */ 8498);




const routes = [
    {
        path: '',
        component: _appstab_page__WEBPACK_IMPORTED_MODULE_0__.AppstabPage
    }
];
let AppstabPageRoutingModule = class AppstabPageRoutingModule {
};
AppstabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppstabPageRoutingModule);



/***/ }),

/***/ 6611:
/*!*******************************************!*\
  !*** ./src/app/appstab/appstab.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppstabPageModule": () => (/* binding */ AppstabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _appstab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appstab-routing.module */ 572);
/* harmony import */ var _appstab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appstab.page */ 8498);








let AppstabPageModule = class AppstabPageModule {
};
AppstabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule,
            _appstab_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppstabPageRoutingModule
        ],
        declarations: [_appstab_page__WEBPACK_IMPORTED_MODULE_1__.AppstabPage]
    })
], AppstabPageModule);



/***/ }),

/***/ 8498:
/*!*****************************************!*\
  !*** ./src/app/appstab/appstab.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppstabPage": () => (/* binding */ AppstabPage)
/* harmony export */ });
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _appstab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appstab.page.html?ngResource */ 5913);
/* harmony import */ var _appstab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appstab.page.scss?ngResource */ 5641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serve.service */ 4526);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 6710);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicSlides, swiper__WEBPACK_IMPORTED_MODULE_5__.Virtual]);
let AppstabPage = class AppstabPage {
  constructor(storage, serve, iab) {
    this.storage = storage;
    this.serve = serve;
    this.iab = iab;
    this.list = [];
    this.applist = [];
    this.fixedlist = [];
  }

  ngOnInit() {}

  ionViewDidEnter() {
    var _this = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.getData();

      _this.getFixedData();
    })();
  }

  ionViewDidLeave() {
    this.list = [];
    this.applist = [];
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

  getFixedData() {
    this.serve.getSourceData('https://awaadcc.github.io/dovshop/home.json').subscribe(data => {
      this.fixedlist = data['cards']; //console.log(this.fixedlist);
    });
  }

  getData() {
    this.storage.get('source').then(res => {
      this.list = res;

      if (!this.list) {} else {
        for (let i = 0; i < this.list.length; i++) {
          for (let j = 0; j < this.list[i].packages.length; j++) {
            this.applist.push(this.list[i].packages[j]);
          }
        } //console.log(this.list);

      }
    });
  }

};

AppstabPage.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _serve_service__WEBPACK_IMPORTED_MODULE_3__.ServeService
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser
}];

AppstabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-appstab',
  template: _appstab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
  styles: [_appstab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppstabPage);


/***/ }),

/***/ 5641:
/*!******************************************************!*\
  !*** ./src/app/appstab/appstab.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/**\n * Swiper 8.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: July 13, 2022\n */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n.swiper {\n  --bullet-background: var(--ion-color-step-200, #cccccc);\n  --bullet-background-active: var(--ion-color-primary, #3880ff);\n  --progress-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --progress-bar-background-active: var(--ion-color-primary-shade, #3171e0);\n  --scroll-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --scroll-bar-background-active: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n  /**\n   * @prop --bullet-background: Background of the pagination bullets\n   * @prop --bullet-background-active: Background of the active pagination bullet\n   *\n   * @prop --progress-bar-background: Background of the pagination progress-bar\n   * @prop --progress-bar-background-active: Background of the active pagination progress-bar\n   *\n   * @prop --scroll-bar-background: Background of the pagination scroll-bar\n   * @prop --scroll-bar-background-active: Background of the active pagination scroll-bar\n   */\n  display: block;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.swiper .swiper-pagination-bullet {\n  background: var(--bullet-background);\n}\n.swiper .swiper-pagination-bullet-active {\n  background: var(--bullet-background-active);\n}\n.swiper .swiper-pagination-progressbar {\n  background: var(--progress-bar-background);\n}\n.swiper .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--progress-bar-background-active);\n}\n.swiper .swiper-scrollbar {\n  background: var(--scroll-bar-background);\n}\n.swiper .swiper-scrollbar-drag {\n  background: var(--scroll-bar-background-active);\n}\n.swiper .slide-zoom {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.swiper .swiper-slide {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.swiper .swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}\n/*# sourceMappingURL=ionic-swiper.css.map */\n.get-button {\n  --color: var(--ion-color-primary);\n  --background: var(--ion-color-light-tint);\n}\n.header {\n  inner-padding-top: 30px !important;\n}\ncdk-virtual-scroll-viewport {\n  height: 100%;\n  width: 100%;\n  orientation: horizontal;\n  overflow-x: scroll;\n}\n.cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n  writing-mode: vertical-lr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLnNjc3MiLCJhcHBzdGFiLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvaW9uaWMtc3dpcGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQUFBO0FBY0U7RUFDRSwyQkFBQTtFQUNBLDRzRUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE9FO0VBQ0UsNkJBQUE7QUNMSjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNMRjtBRE9BO0VBQ0Usc0JBQUE7QUNKRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0hGO0FES0E7O0VBRUUsaUNBQUE7QUNGRjtBRElBO0VBQ0UsbUJBQUE7QUNERjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0FGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0EsZ0JBQUE7QUFFRTs7RUFFRSxZQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0VBQ0Esc0NBQUE7QUNBSjtBREdBO0VBQ0Usd0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQUY7QURFQSxlQUFBO0FBRUU7RUFFRSxtQkFBQTtBQ0RKO0FER0U7Ozs7Ozs7O0VBUUUsNEJBQUE7QUNESjtBREdFOzs7OztFQUtFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0RKO0FER0U7RUFDRSwrQkFBQTtBQ0RKO0FER0U7RUFDRSxnRkFBQTtBQ0RKO0FER0U7RUFDRSxpRkFBQTtBQ0RKO0FER0U7RUFDRSwrRUFBQTtBQ0RKO0FER0U7RUFDRSxrRkFBQTtBQ0RKO0FES0EsYUFBQTtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FDRDlCO0FERUk7RUFDRSxhQUFBO0FDQU47QURHRTtFQUNFLDhCQUFBO0FDREo7QURLRTtFQUNFLDZCQUFBO0FDRko7QURNRTtFQUNFLDZCQUFBO0FDSEo7QURPRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0k7RUFDRSx5REFBQTtBQ0xOO0FET0k7RUFDRSxZQUFBO0VBQ0EsMENBQUE7QUNMTjtBRFNJO0VBQ0Usd0RBQUE7QUNQTjtBRFNJO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0FDUE47QURXRTtFQUNFLGdDQUFBO0FDVEo7QUM1S0E7RUFDRSx1REFBQTtFQUNBLDZEQUFBO0VBQ0EseUVBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0VBQ0EsNkVBQUE7RUFDQTs7Ozs7Ozs7O0lBQUE7RUFVQSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBRCtLRjtBQzVLQTtFQUNFLG9DQUFBO0FEK0tGO0FDNUtBO0VBQ0UsMkNBQUE7QUQrS0Y7QUM1S0E7RUFDRSwwQ0FBQTtBRCtLRjtBQzVLQTtFQUNFLGlEQUFBO0FEK0tGO0FDNUtBO0VBQ0Usd0NBQUE7QUQrS0Y7QUM1S0E7RUFDRSwrQ0FBQTtBRCtLRjtBQzVLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUQrS0Y7QUM1S0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUQrS0Y7QUM1S0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRCtLRjtBQzVLQSwyQ0FBQTtBRHJFQTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7QUFxUEY7QUFsUEE7RUFDQSxrQ0FBQTtBQXFQQTtBQW5QQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXNQRjtBQXBQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNFLHlCQUFBO0FBdVBKIiwiZmlsZSI6ImFwcHN0YWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTd2lwZXIgOC4zLjFcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjIgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogSnVseSAxMywgMjAyMlxuICovXG5cbkBpbXBvcnQgJ3N3aXBlci12YXJzLnNjc3MnO1xyXG5AYXQtcm9vdCB7XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XHJcbiAgICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKVxyXG4gICAgICBmb3JtYXQoJ3dvZmYnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG59XHJcbkBhdC1yb290IHtcclxuICA6cm9vdCB7XHJcbiAgICAtLXN3aXBlci10aGVtZS1jb2xvcjogI3skdGhlbWVDb2xvcn07XHJcbiAgfVxyXG59XHJcbi5zd2lwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc3dpcGVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zd2lwZXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcbi5zd2lwZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxyXG4uc3dpcGVyLXdyYXBwZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcclxufVxyXG4uc3dpcGVyLXBvaW50ZXItZXZlbnRzIHtcclxuICB0b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICYuc3dpcGVyLXZlcnRpY2FsIHtcclxuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XHJcbiAgfVxyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcbi5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLyogQXV0byBIZWlnaHQgKi9cclxuLnN3aXBlci1hdXRvaGVpZ2h0IHtcclxuICAmLFxyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci13cmFwcGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBoZWlnaHQ7XHJcbiAgfVxyXG59XHJcbi5zd2lwZXItYmFja2ZhY2UtaGlkZGVuIC5zd2lwZXItc2xpZGUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLyogM0QgRWZmZWN0cyAqL1xyXG4uc3dpcGVyLTNkIHtcclxuICAmLFxyXG4gICYuc3dpcGVyLWNzcy1tb2RlIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xyXG4gIH1cclxuICAuc3dpcGVyLXdyYXBwZXIsXHJcbiAgLnN3aXBlci1zbGlkZSxcclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXHJcbiAgLnN3aXBlci1jdWJlLXNoYWRvdyB7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyxcclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3cge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDU1MgTW9kZSAqL1xyXG4uc3dpcGVyLWNzcy1tb2RlIHtcclxuICA+IC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQgc3RhcnQ7XHJcbiAgfVxyXG59XHJcbi5zd2lwZXItaG9yaXpvbnRhbC5zd2lwZXItY3NzLW1vZGUge1xyXG4gID4gLnN3aXBlci13cmFwcGVyIHtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gIH1cclxufVxyXG4uc3dpcGVyLXZlcnRpY2FsLnN3aXBlci1jc3MtbW9kZSB7XHJcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbiAgfVxyXG59XHJcbi5zd2lwZXItY2VudGVyZWQge1xyXG4gID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG9yZGVyOiA5OTk5O1xyXG4gIH1cclxuICAmLnN3aXBlci1ob3Jpem9udGFsIHtcclxuICAgID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKTtcclxuICAgIH1cclxuICAgID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5zd2lwZXItdmVydGljYWwge1xyXG4gICAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZSk7XHJcbiAgICB9XHJcbiAgICA+IC5zd2lwZXItd3JhcHBlcjo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlciBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgJ35zd2lwZXIvc2Nzcyc7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL2lvbmljLXN3aXBlcic7XG4uZ2V0LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbi5oZWFkZXIge1xuaW5uZXItcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsO1xuICBvdmVyZmxvdy14OiBzY3JvbGxcbn1cbi5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xufSIsIi5zd2lwZXIge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNjY2NjY2MpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMjUpO1xuICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApO1xuICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEpO1xuICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC41KTtcbiAgLyoqXG4gICAqIEBwcm9wIC0tYnVsbGV0LWJhY2tncm91bmQ6IEJhY2tncm91bmQgb2YgdGhlIHBhZ2luYXRpb24gYnVsbGV0c1xuICAgKiBAcHJvcCAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogQmFja2dyb3VuZCBvZiB0aGUgYWN0aXZlIHBhZ2luYXRpb24gYnVsbGV0XG4gICAqXG4gICAqIEBwcm9wIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IEJhY2tncm91bmQgb2YgdGhlIHBhZ2luYXRpb24gcHJvZ3Jlc3MtYmFyXG4gICAqIEBwcm9wIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOiBCYWNrZ3JvdW5kIG9mIHRoZSBhY3RpdmUgcGFnaW5hdGlvbiBwcm9ncmVzcy1iYXJcbiAgICpcbiAgICogQHByb3AgLS1zY3JvbGwtYmFyLWJhY2tncm91bmQ6IEJhY2tncm91bmQgb2YgdGhlIHBhZ2luYXRpb24gc2Nyb2xsLWJhclxuICAgKiBAcHJvcCAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6IEJhY2tncm91bmQgb2YgdGhlIGFjdGl2ZSBwYWdpbmF0aW9uIHNjcm9sbC1iYXJcbiAgICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnVsbGV0LWJhY2tncm91bmQpO1xufVxuXG4uc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlKTtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCk7XG59XG5cbi5zd2lwZXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlKTtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbC1iYXItYmFja2dyb3VuZCk7XG59XG5cbi5zd2lwZXIgLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuXG4uc3dpcGVyIC5zbGlkZS16b29tIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zd2lwZXIgLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aW9uaWMtc3dpcGVyLmNzcy5tYXAgKi9cbiJdfQ== */";

/***/ }),

/***/ 5913:
/*!******************************************************!*\
  !*** ./src/app/appstab/appstab.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Apps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Apps</ion-title>\n\n    </ion-toolbar>\n  </ion-header>\n<br>\n  <swiper [virtual]=\"true\" >\n<ng-template swiperSlide *ngFor=\"let item of fixedlist; index as i\">\n<ion-card >\n  <img src=\"{{item.banner}} \" style=\"display:block; height:250px; width:fit-content;\">\n<ion-item lines=\"none\" color=\"light\" style=\"--padding-top:8px;--padding-bottom:8px;\">\n<ion-thumbnail slot=\"start\">\n  <img src=\"{{item.icon}} \" style=\"border-radius: 20%; height:90%;width: auto;\">\n</ion-thumbnail>\n<ion-label>\n  <h2>{{item.name}}</h2>\n  <p>{{item.desc}}</p>\n</ion-label>\n<ion-button class=\"get-button\" (click)=\"openBrowser(item.url)\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n</ion-item>\n</ion-card>\n</ng-template></swiper>\n<!-- All App Cards -->\n<!-- <ion-card *ngFor=\"let item of applist;\">\n  <img src=\"{{item.searchbanner}} \" style=\"display:block;\">\n<ion-item lines=\"none\" color=\"light\" style=\"--padding-top:8px;--padding-bottom:8px;\">\n<ion-thumbnail slot=\"start\">\n  <img src=\"{{item.image}} \" style=\"border-radius: 20%; height:90%;width: auto;\">\n</ion-thumbnail>\n<ion-label>\n  <h2>{{item.name}}</h2>\n  <p>{{item.desc}}</p>\n</ion-label>\n<ion-button class=\"get-button\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n</ion-item>\n</ion-card>\n -->\n<ion-list>\n<ion-list-header>\n  All Apps\n</ion-list-header>\n  <ion-item lines=\"inset\"  style=\"--padding-top:10px;--padding-bottom:10px;\" *ngFor=\"let item of fixedlist\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{item.icon}}\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{item.name}}</h2>\n    <p>{{item.desc}}</p>\n  </ion-label>\n  <ion-button class=\"get-button\" (click)=\"openBrowser(item.url)\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">Get</ion-button>\n  </ion-item>\n\n  <ion-item lines=\"inset\"  style=\"--padding-top:10px;--padding-bottom:10px;\" *ngFor=\"let item of applist\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{item.image}}\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{item.name}}</h2>\n    <p>{{item.desc}}</p>\n  </ion-label>\n  <ion-button class=\"get-button\" (click)=\"openBrowser(item.url)\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">Get</ion-button>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_appstab_appstab_module_ts.js.map