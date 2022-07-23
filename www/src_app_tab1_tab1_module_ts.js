"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot({}),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../serve.service */ 4526);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 6710);












swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicSlides, swiper__WEBPACK_IMPORTED_MODULE_6__.Virtual]);
let Tab1Page = class Tab1Page {
  constructor(http, serve, storage, iab) {
    this.http = http;
    this.serve = serve;
    this.storage = storage;
    this.iab = iab;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.isModalOpen = false;
    this.isModalOpen2 = false;
    this.isModalOpen3 = false;
    this.cardlist = [];
    this.toollist = [];
    this.toplist = [];
    this.applist = [];
    this.slides = Array.from({
      length: 1000
    }).map((el, index) => `Slide ${index + 1}`);
  }

  ngOnInit() {
    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  ionViewDidEnter() {
    var _this = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.getData();
    })();
  }

  ionViewDidLeave() {
    var _this2 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.cardlist = [];
      _this2.toollist = [];
      _this2.toplist = [];
      _this2.applist = [];
    })();
  }

  getData() {
    this.getHomeList().subscribe(data => {
      this.toollist = data['tools'];
    });
    this.getHomeList().subscribe(data => {
      this.cardlist = data['cards'];
    });
    this.getHomeList().subscribe(data => {
      this.toplist = data['topapps'];
    });
    this.storage.get('source').then(res => {
      const list = res;

      if (!list) {
        console.log("empty");
      } else {
        for (let i = 0; i < list.length; i++) {
          for (let j = 0; j < list[i].packages.length; j++) {
            this.applist.push(list[i].packages[j]);
          }
        }
      }
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen) {
    this.isModalOpen2 = isOpen;
  }

  setOpen3(isOpen) {
    this.isModalOpen3 = isOpen;
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  getHomeList() {
    return this.http.get('https://awaadcc.github.io/dovshop/home.json');
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

};

Tab1Page.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: _serve_service__WEBPACK_IMPORTED_MODULE_4__.ServeService
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
}];

Tab1Page.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
  }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".get-button {\n  --color: var(--ion-color-primary);\n  --background: var(--ion-color-light-tint);\n}\n\n.header {\n  inner-padding-top: 30px !important;\n}\n\ncdk-virtual-scroll-viewport {\n  height: 100%;\n  width: 100%;\n  orientation: vertical;\n  overflow-x: scroll;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n  writing-mode: vertical-lr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUNBQUE7RUFDQSx5Q0FBQTtBQUNEOztBQUNBO0VBQ0Esa0NBQUE7QUFFQTs7QUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0UseUJBQUE7QUFJSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZXQtYnV0dG9uIHtcblx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cbi5oZWFkZXIge1xuaW5uZXItcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9yaWVudGF0aW9uOiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsXG59XG4uY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Browse\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Browse</ion-title>\n\n    </ion-toolbar>\n  </ion-header>\n\n\n<!-- Info Card \nstyle=\"--background: url(https://awaadcc.github.io/images/dovshop/home_info.png);\"\"\n-->\n<ion-card id=\"info-modal\" button=\"true\" style=\"height:400px; --background: url(https://awaadcc.github.io/images/dovshop/home_info.png); \">\n<ion-card-header>\n    <ion-card-subtitle style=\"color:#9d9fa6;\">Getting Started</ion-card-subtitle>\n    <ion-card-title style=\"color:white;\">Learn The Basics!</ion-card-title>\n  </ion-card-header>\n\n</ion-card>\n\n<!-- Info Modal-->\n<ion-modal #infomodal trigger=\"info-modal\" [initialBreakpoint]=\"1.0\" [breakpoints]=\"[0, 1.0]\">\n      <ng-template>\n      <ion-content>\n        <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"modal.dismiss()\">\n        <ion-fab-button  color=\"clear\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-fab-button>\n        </ion-fab>\n<ion-card style=\"height:300px;\" color=\"light\">\n<ion-card-header>\n    <ion-card-subtitle>How to Install Apps</ion-card-subtitle>\n    <ion-card-title>Learn How To Sideload</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text>\n      Sideloading is an essential part of installing 3rd party apps.<br>\n      Since apple does not allow this we need to use some tools to help us.<br>\n      Below are two of the recommended tools to use.<br>\n      AltStore is my personal favorite and is what I prefer due to being able to resign apps automatically over wifi.\n    </ion-text>\n  </ion-card-content>\n</ion-card>\n<ion-card color=\"light\">\n <ion-card-header>\n    <ion-card-title>Essential Tools</ion-card-title>\n  </ion-card-header>\n<ion-list lines=\"inset\">\n  <ion-item lines=\"\" class=\"list-border\" color=\"light\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://pbs.twimg.com/profile_images/1177457687014985729/3rleupvs_400x400.png\" style=\"border-radius: 20%; height:85%; width: auto;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>AltStore</h2>\n    <p>Recommended Package Installer</p>\n  </ion-label>\n  <ion-button fill=\"solid\" strong=\"true\" color=\"dark\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n  </ion-item>\n</ion-list>\n</ion-card>\n\n<ion-list-header>\nGuides\n</ion-list-header>\n<ion-card color=\"light\">\n<ion-card-header>\n    <ion-card-subtitle>AltStore</ion-card-subtitle>\n    <ion-card-title>How To Use</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text>\n      Using AltStore is fairly simple.<br><br>\n      1) Visit the website on computer<br>\n      2) Download AltServer and run it<br>\n      3) Plug in phone and run install altstore<br>\n      4) Enter Apple ID<br>\n      5) App will be installed on phone\n    </ion-text>\n  </ion-card-content>\n</ion-card>\n<ion-card color=\"light\">\n<ion-card-header>\n    <ion-card-subtitle>Untrusted App</ion-card-subtitle>\n    <ion-card-title>How To Open Sideloaded Apps</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text>\n      Opening Sideloaded Apps is simple.<br><br>\n      1) Open the app<br>\n      2) Close the untrusted developer popup<br>\n      3) Open Settings>General>VPN & Device Management<br>\n      4) Press your apple ID<br>\n      5) Trust App\n    </ion-text>\n  </ion-card-content>\n</ion-card>\n      </ion-content>\n      </ng-template>\n</ion-modal>\n\n<!-- Sideloading Tools Card -->\n<ion-card color=\"light\" style=\"padding-bottom:20px;\">\n <ion-card-header style=\"padding-bottom: 30px;\">\n    <ion-card-subtitle>Essential Tools</ion-card-subtitle>\n    <ion-card-title>Sideloading Apps</ion-card-title>\n  </ion-card-header>\n<ion-list lines=\"inset\" *ngFor=\"let item of toollist\"> \n  <ion-item color=\"light\" style=\"--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\" style=\"--border-radius: 20%; margin-right:-1px;\">\n    <ion-img src=\"{{item.icon}}\" style=\"height:85%; width:85%;\"></ion-img>\n  </ion-thumbnail>\n  <ion-label style=\" margin-top: -2px; margin-left:9px;\">\n    <h2>  {{item.name}}</h2>\n    <h4>  {{item.desc}}</h4>\n  </ion-label>\n  <ion-button (click)=\"openBrowser(item.url)\" class=\"get-button\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n  </ion-item>\n</ion-list>\n</ion-card>\n\n<!-- Hardcoded Card -->\n\n<ion-card (click)=\"setOpen(true)\" button=\"true\" style=\"height:400px; --background: url(https://awaadcc.github.io/images/dovshop/banner.jpg); \">\n<ion-card-header>\n    <ion-card-subtitle style=\"color:#9d9fa6;\">Sources Info</ion-card-subtitle>\n    <ion-card-title style=\"color:white;\">Unlock it's full potential!</ion-card-title>\n  </ion-card-header>\n\n</ion-card>\n\n<!-- Hardcoded Card Modal-->\n<ion-modal [initialBreakpoint]=\"1.0\" [breakpoints]=\"[0, 1.0]\" [isOpen]=\"isModalOpen\" canDismiss=\"true\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n      <ng-template>\n      <ion-content>\n                <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"setOpen(false)\">\n        <ion-fab-button  color=\"clear\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-fab-button>\n        </ion-fab>\n          <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Modal</ion-title>\n\n    </ion-toolbar>\n  </ion-header>\n\n<ion-card color=\"light\">\n<ion-card-header>\n    <ion-card-subtitle>dovShop Sources</ion-card-subtitle>\n    <ion-card-title>How To Use</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text>\n      Using sources is very easy!<br><br>\n      1) Open the sources tab<br>\n      2) Press the + icon and input a dovShop source URL<br>\n      *URL MUST BEGIN WITH http(s):// & END WITH .json \n      3) If source is valid will show up under default source<br>\n      4) Source has been installed!\n    </ion-text>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n</ng-template>\n</ion-modal>\n\n\n<ion-card color=\"light\" style=\"padding-bottom:20px;\">\n <ion-card-header style=\"padding-bottom: 30px;\">\n    <ion-card-subtitle>Essential Tools</ion-card-subtitle>\n    <ion-card-title>Sideloading Apps</ion-card-title>\n  </ion-card-header>\n<ion-list lines=\"inset\" *ngFor=\"let item of toplist\"> \n  <ion-item color=\"light\" style=\"--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\" style=\"--border-radius: 20%; margin-right:-1px;\">\n    <ion-img src=\"{{item.icon}}\" style=\"height:85%; width:85%;\"></ion-img>\n  </ion-thumbnail>\n  <ion-label style=\"margin-top:-2px; margin-left:9px;\">\n    <h2>{{item.name}}</h2>\n    <p>{{item.desc}}</p>\n  </ion-label>\n<ion-button (click)=\"openBrowser(item.url)\" class=\"get-button\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n  </ion-item>\n</ion-list>\n</ion-card>\n\n\n<!-- Dynamic Cards -->\n<ion-card *ngFor=\"let item of cardlist;\">\n  <img src=\"{{item.banner}} \" style=\"display:block;\">\n<ion-item lines=\"none\" color=\"light\" style=\"--padding-top:8px;--padding-bottom:8px;\">\n<ion-thumbnail slot=\"start\">\n  <img src=\"{{item.icon}} \" style=\"border-radius: 20%; height:90%;width: auto;\">\n</ion-thumbnail>\n<ion-label>\n  <h2>{{item.name}}</h2>\n  <p>{{item.desc}}</p>\n</ion-label>\n<ion-button class=\"get-button\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n</ion-item>\n</ion-card>\n<!-- All App Cards -->\n<ion-card *ngFor=\"let item of applist;\">\n  <img src=\"{{item.searchbanner}} \" style=\"display:block;\">\n<ion-item lines=\"none\" color=\"light\" style=\"--padding-top:8px;--padding-bottom:8px;\">\n<ion-thumbnail slot=\"start\">\n  <img src=\"{{item.image}} \" style=\"border-radius: 20%; height:90%;width: auto;\">\n</ion-thumbnail>\n<ion-label>\n  <h2>{{item.name}}</h2>\n  <p>{{item.desc}}</p>\n</ion-label>\n<ion-button (click)=\"openBrowser(item.url)\" class=\"get-button\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n</ion-item>\n</ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map