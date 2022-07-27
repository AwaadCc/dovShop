"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 4526:
/*!**********************************!*\
  !*** ./src/app/serve.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServeService": () => (/* binding */ ServeService)
/* harmony export */ });
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);





let ServeService = class ServeService {
  constructor(storage, http) {
    this.storage = storage;
    this.http = http;
    this.arr = [];
    this.init();
  }

  init() {
    var _this = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storage.create();
    })();
  }

  addedItems(data) {
    return this.addedItems = data;
  }

  getsourcelist() {
    return this.sourceList;
  }

  getSourceData(str) {
    console.log("getSourceData call made");
    return this.http.get(str);
  }

};

ServeService.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

ServeService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ServeService);


/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../serve.service */ 4526);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);











let Tab2Page = class Tab2Page {
  constructor(storage, alertController, http, serve, loadingCtrl, iab) {
    this.storage = storage;
    this.alertController = alertController;
    this.http = http;
    this.serve = serve;
    this.loadingCtrl = loadingCtrl;
    this.iab = iab;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.isModalOpen = false;
    this.isModalOpen2 = false;
    this.arr = [];
    this.urlList = [];
    this.deflist = [];
  }

  ngOnInit() {}

  ionViewDidEnter() {
    var _this = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadData();

      _this.getDefSource();
    })();
  }

  ionViewDidLeave() {
    var _this2 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.sourceList = [];
    })();
  }

  showLoading() {
    var _this3 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingCtrl.create({
        message: 'Installing Source...',
        duration: 1000,
        spinner: 'circles'
      });
      setTimeout(() => {
        _this3.loadData();
      }, 1000);
      loading.present();
    })();
  }

  showLoading2(i) {
    var _this4 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingCtrl.create({
        message: 'Removing Sources...',
        duration: 1000,
        spinner: 'circles'
      });
      loading.present();
      setTimeout(() => {
        _this4.removeItem(i); // window.location.reload();

      }, 1000);
    })();
  }

  openModal(i) {
    this.setOpen(true);
    this.list = this.sourceList[i].packages; //console.log(this.list);
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen) {
    this.isModalOpen2 = isOpen;
  }

  getSourceData() {
    return this.http.get(this.alertData);
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      this.message = `Hello`;
    }
  }

  getDefSource() {
    this.serve.getSourceData('https://awaadcc.github.io/dovshop/home.json').subscribe(data => {
      this.deflist = data['topapps']; //console.log(this.deflist)
    });
  }

  removeItem(i) {
    //this.storage.remove('source');
    //this.sourceList = null;
    this.sourceList.splice(i, 1);
    this.storage.set('source', this.sourceList);
    this.urlList.splice(i, 1);
    this.storage.set('url', this.urlList);
  }

  getData(str) {
    this.loadData();
    this.serve.getSourceData(str).subscribe(data => {
      this.addList = data['sources']; //console.log(this.addList);

      const item = this.addList[0];
      console.log("this.arr after push call");
      this.arr.push(item);
      console.log(this.arr);
      this.storage.set('source', this.arr);
    });
  }

  loadData() {
    this.storage.get('source').then(res => {
      if (!res) {
        this.sourceList = [];
        this.arr = [];
      } else {
        this.sourceList = res;
        this.arr = res;
        console.log("this.arr after load data call");
        console.log(this.arr);
      }
    });
    this.storage.get('url').then(res => console.log(res));
  }

  addSource() {
    var _this5 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header: 'Add Source',
        subHeader: 'Enter dovShop Package URL',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: aData => {
            _this5.alertData = aData.source;

            _this5.getData(_this5.alertData);

            _this5.showLoading();

            _this5.urlList.push(_this5.alertData);

            _this5.storage.set('url', _this5.urlList);
          }
        }],
        inputs: [{
          type: 'url',
          name: 'source',
          value: 'https://'
        }]
      });
      yield alert.present();
    })();
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

};

Tab2Page.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}, {
  type: _serve_service__WEBPACK_IMPORTED_MODULE_4__.ServeService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__.InAppBrowser
}];

Tab2Page.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal]
  }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab2Page);


/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".get-button {\n  --color: var(--ion-color-primary);\n  --background: var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtBQUNGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldC1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuIl19 */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Sources\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n    <ion-button fil=\"clear\" (click)=\"addSource()\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Sources</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-list inset=\"true\">\n  <ion-item button (click)=\"setOpen2(true)\" lines=\"none\" color=\"light\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://awaadcc.github.io/images/dovshop/icon.png\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>dovShop Main Package</h2>\n    <p>Default Package for dovShop</p>\n  </ion-label>\n  </ion-item>\n  <ion-item-sliding *ngFor=\"let items of sourceList; let i = index\">\n<ion-item button (click)=\"openModal(i)\" lines=\"none\" color=\"light\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{items.image}}\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{items.name}}</h2>\n    <p>{{items.desc}}</p>\n  </ion-label>\n  </ion-item>\n<ion-item-options side=\"end\">\n<ion-item-option color=\"danger\" (click)=\"showLoading2(i)\">Remove</ion-item-option>\n</ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n<!-- Modal for default source -->\n<ion-modal [isOpen]=\"isModalOpen2\" canDismiss=\"true\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\" [initialBreakpoint]=\"1.0\" [breakpoints]=\"[0, 1.0]\">\n      <ng-template>\n      <ion-content>\n                <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"setOpen2(false)\">\n        <ion-fab-button  color=\"clear\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-fab-button>\n        </ion-fab>\n          <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" >Packages</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-list inset=\"true\">\n  <ion-item *ngFor=\"let item of deflist\" lines=\"none\" color=\"light\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{item.icon}}\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{item.name}}</h2>\n    <p>{{item.desc}}</p>\n  </ion-label>\n  <ion-button class=\"get-button\" (click)=\"openBrowser(item.url)\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">Get</ion-button>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n</ng-template>\n</ion-modal>\n\n<!-- Modal for external sources -->\n<ion-modal [isOpen]=\"isModalOpen\" canDismiss=\"true\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\" [initialBreakpoint]=\"1.0\" [breakpoints]=\"[0, 1.0]\">\n      <ng-template>\n      <ion-content>\n                <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"setOpen(false)\">\n        <ion-fab-button  color=\"clear\">\n        <ion-icon name=\"close-circle\"></ion-icon>\n        </ion-fab-button>\n        </ion-fab>\n          <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" >Packages</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-list inset=\"true\">\n  <ion-item *ngFor=\"let items of list; let i = index\" lines=\"none\" color=\"light\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{items.image}}\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{items.name}}</h2>\n    <p>{{items.desc}}</p>\n  </ion-label>\n  <ion-button (click)=\"openBrowser(items.url)\" fill=\"solid\" strong=\"true\" class=\"get-button\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">Get</ion-button>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n</ng-template>\n</ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map