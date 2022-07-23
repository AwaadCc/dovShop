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
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = "/**\n * Swiper 8.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: July 13, 2022\n */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n}\n.swiper-pointer-events.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper,\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none; /* For Firefox */\n  -ms-overflow-style: none; /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n}\n.swiper {\n  --bullet-background: var(--ion-color-step-200, #cccccc);\n  --bullet-background-active: var(--ion-color-primary, #3880ff);\n  --progress-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --progress-bar-background-active: var(--ion-color-primary-shade, #3171e0);\n  --scroll-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --scroll-bar-background-active: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n  /**\n   * @prop --bullet-background: Background of the pagination bullets\n   * @prop --bullet-background-active: Background of the active pagination bullet\n   *\n   * @prop --progress-bar-background: Background of the pagination progress-bar\n   * @prop --progress-bar-background-active: Background of the active pagination progress-bar\n   *\n   * @prop --scroll-bar-background: Background of the pagination scroll-bar\n   * @prop --scroll-bar-background-active: Background of the active pagination scroll-bar\n   */\n  display: block;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.swiper .swiper-pagination-bullet {\n  background: var(--bullet-background);\n}\n.swiper .swiper-pagination-bullet-active {\n  background: var(--bullet-background-active);\n}\n.swiper .swiper-pagination-progressbar {\n  background: var(--progress-bar-background);\n}\n.swiper .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--progress-bar-background-active);\n}\n.swiper .swiper-scrollbar {\n  background: var(--scroll-bar-background);\n}\n.swiper .swiper-scrollbar-drag {\n  background: var(--scroll-bar-background-active);\n}\n.swiper .slide-zoom {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.swiper .swiper-slide {\n  display: flex;\n  position: relative;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 18px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.swiper .swiper-slide img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}\n/*# sourceMappingURL=ionic-swiper.css.map */\n.get-button {\n  --color: var(--ion-color-primary);\n  --background: var(--ion-color-light-tint);\n}\n.header {\n  inner-padding-top: 30px !important;\n}\ncdk-virtual-scroll-viewport {\n  height: 100%;\n  width: 100%;\n  orientation: horizontal;\n  overflow-x: scroll;\n}\n.cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n  writing-mode: vertical-lr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLnNjc3MiLCJhcHBzdGFiLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvaW9uaWMtc3dpcGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQUFBO0FBY0U7RUFDRSwyQkFBQTtFQUNBLDRzRUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE9FO0VBQ0UsNkJBQUE7QUNMSjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNMRjtBRE9BO0VBQ0Usc0JBQUE7QUNKRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0hGO0FES0E7O0VBRUUsaUNBQUE7QUNGRjtBRElBO0VBQ0UsbUJBQUE7QUNERjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0FGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0EsZ0JBQUE7QUFFRTs7RUFFRSxZQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0VBQ0Esc0NBQUE7QUNBSjtBREdBO0VBQ0Usd0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQUY7QURFQSxlQUFBO0FBRUU7RUFFRSxtQkFBQTtBQ0RKO0FER0U7Ozs7Ozs7O0VBUUUsNEJBQUE7QUNESjtBREdFOzs7OztFQUtFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0RKO0FER0U7RUFDRSwrQkFBQTtBQ0RKO0FER0U7RUFDRSxnRkFBQTtBQ0RKO0FER0U7RUFDRSxpRkFBQTtBQ0RKO0FER0U7RUFDRSwrRUFBQTtBQ0RKO0FER0U7RUFDRSxrRkFBQTtBQ0RKO0FES0EsYUFBQTtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBLEVBQUEsZ0JBQUE7RUFDQSx3QkFBQSxFQUFBLG1DQUFBO0FDSEo7QURJSTtFQUNFLGFBQUE7QUNGTjtBREtFO0VBQ0UsOEJBQUE7QUNISjtBRE9FO0VBQ0UsNkJBQUE7QUNKSjtBRFFFO0VBQ0UsNkJBQUE7QUNMSjtBRFNFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTko7QURTSTtFQUNFLHlEQUFBO0FDUE47QURTSTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ1BOO0FEV0k7RUFDRSx3REFBQTtBQ1ROO0FEV0k7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7QUNUTjtBRGFFO0VBQ0UsZ0NBQUE7QUNYSjtBQzFLQTtFQUNFLHVEQUFBO0VBQ0EsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0VBQUE7RUFDQSw2RUFBQTtFQUNBOzs7Ozs7Ozs7SUFBQTtFQVVBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FENktGO0FDMUtBO0VBQ0Usb0NBQUE7QUQ2S0Y7QUMxS0E7RUFDRSwyQ0FBQTtBRDZLRjtBQzFLQTtFQUNFLDBDQUFBO0FENktGO0FDMUtBO0VBQ0UsaURBQUE7QUQ2S0Y7QUMxS0E7RUFDRSx3Q0FBQTtBRDZLRjtBQzFLQTtFQUNFLCtDQUFBO0FENktGO0FDMUtBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDZLRjtBQzFLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBRDZLRjtBQzFLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FENktGO0FDMUtBLDJDQUFBO0FEckVBO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtBQW1QRjtBQWhQQTtFQUNBLGtDQUFBO0FBbVBBO0FBalBBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBb1BGO0FBbFBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0UseUJBQUE7QUFxUEoiLCJmaWxlIjoiYXBwc3RhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN3aXBlciA4LjMuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMiBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBKdWx5IDEzLCAyMDIyXG4gKi9cblxuQGltcG9ydCAnc3dpcGVyLXZhcnMuc2Nzcyc7XHJcbkBhdC1yb290IHtcclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnc3dpcGVyLWljb25zJztcclxuICAgIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpXHJcbiAgICAgIGZvcm1hdCgnd29mZicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbn1cclxuQGF0LXJvb3Qge1xyXG4gIDpyb290IHtcclxuICAgIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiAjeyR0aGVtZUNvbG9yfTtcclxuICB9XHJcbn1cclxuLnN3aXBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5zd2lwZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnN3aXBlci13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuLnN3aXBlci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXHJcbi5zd2lwZXItd3JhcHBlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xyXG59XHJcbi5zd2lwZXItcG9pbnRlci1ldmVudHMge1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgJi5zd2lwZXItdmVydGljYWwge1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcclxuICB9XHJcbn1cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuLnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4vKiBBdXRvIEhlaWdodCAqL1xyXG4uc3dpcGVyLWF1dG9oZWlnaHQge1xyXG4gICYsXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcclxuICB9XHJcbn1cclxuLnN3aXBlci1iYWNrZmFjZS1oaWRkZW4gLnN3aXBlci1zbGlkZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4vKiAzRCBFZmZlY3RzICovXHJcbi5zd2lwZXItM2Qge1xyXG4gICYsXHJcbiAgJi5zd2lwZXItY3NzLW1vZGUgLnN3aXBlci13cmFwcGVyIHtcclxuICAgIHBlcnNwZWN0aXZlOiAxMjAwcHg7XHJcbiAgfVxyXG4gIC5zd2lwZXItd3JhcHBlcixcclxuICAuc3dpcGVyLXNsaWRlLFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcclxuICAuc3dpcGVyLWN1YmUtc2hhZG93IHtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgfVxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXHJcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgfVxyXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIH1cclxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIENTUyBNb2RlICovXHJcbi5zd2lwZXItY3NzLW1vZGUge1xyXG4gID4gLnN3aXBlci13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydCBzdGFydDtcclxuICB9XHJcbn1cclxuLnN3aXBlci1ob3Jpem9udGFsLnN3aXBlci1jc3MtbW9kZSB7XHJcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgfVxyXG59XHJcbi5zd2lwZXItdmVydGljYWwuc3dpcGVyLWNzcy1tb2RlIHtcclxuICA+IC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcclxuICB9XHJcbn1cclxuLnN3aXBlci1jZW50ZXJlZCB7XHJcbiAgPiAuc3dpcGVyLXdyYXBwZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgb3JkZXI6IDk5OTk7XHJcbiAgfVxyXG4gICYuc3dpcGVyLWhvcml6b250YWwge1xyXG4gICAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUpO1xyXG4gICAgfVxyXG4gICAgPiAuc3dpcGVyLXdyYXBwZXI6OmJlZm9yZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLnN3aXBlci12ZXJ0aWNhbCB7XHJcbiAgICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlKTtcclxuICAgIH1cclxuICAgID4gLnN3aXBlci13cmFwcGVyOjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyIGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCAnfnN3aXBlci9zY3NzJztcbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3MvaW9uaWMtc3dpcGVyJztcbi5nZXQtYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cblxuLmhlYWRlciB7XG5pbm5lci1wYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3JpZW50YXRpb246IGhvcml6b250YWw7XG4gIG92ZXJmbG93LXg6IHNjcm9sbFxufVxuLmNkay12aXJ0dWFsLXNjcm9sbC1jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG59IiwiLnN3aXBlciB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2NjY2NjYyk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yNSk7XG4gIC0tcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCk7XG4gIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMSk7XG4gIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjUpO1xuICAvKipcbiAgICogQHByb3AgLS1idWxsZXQtYmFja2dyb3VuZDogQmFja2dyb3VuZCBvZiB0aGUgcGFnaW5hdGlvbiBidWxsZXRzXG4gICAqIEBwcm9wIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiBCYWNrZ3JvdW5kIG9mIHRoZSBhY3RpdmUgcGFnaW5hdGlvbiBidWxsZXRcbiAgICpcbiAgICogQHByb3AgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDogQmFja2dyb3VuZCBvZiB0aGUgcGFnaW5hdGlvbiBwcm9ncmVzcy1iYXJcbiAgICogQHByb3AgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmU6IEJhY2tncm91bmQgb2YgdGhlIGFjdGl2ZSBwYWdpbmF0aW9uIHByb2dyZXNzLWJhclxuICAgKlxuICAgKiBAcHJvcCAtLXNjcm9sbC1iYXItYmFja2dyb3VuZDogQmFja2dyb3VuZCBvZiB0aGUgcGFnaW5hdGlvbiBzY3JvbGwtYmFyXG4gICAqIEBwcm9wIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogQmFja2dyb3VuZCBvZiB0aGUgYWN0aXZlIHBhZ2luYXRpb24gc2Nyb2xsLWJhclxuICAgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idWxsZXQtYmFja2dyb3VuZCk7XG59XG5cbi5zd2lwZXIgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuXG4uc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kKTtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuXG4uc3dpcGVyIC5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kKTtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXNjcm9sbGJhci1kcmFnIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG5cbi5zd2lwZXIgLnNsaWRlLXpvb20ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc3dpcGVyIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1pb25pYy1zd2lwZXIuY3NzLm1hcCAqL1xuIl19 */";

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