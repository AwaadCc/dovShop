"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

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

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var _Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../serve.service */ 4526);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);









let Tab3Page = class Tab3Page {
  constructor(storage, serve, loadingCtrl, alertController, http) {
    this.storage = storage;
    this.serve = serve;
    this.loadingCtrl = loadingCtrl;
    this.alertController = alertController;
    this.http = http;
    this.clist = [];
    this.flist = [];
    this.imgList = [];
    this.toplist = [];
    this.tempa = [];
    this.tempa2 = [];
    this.arr = [];
    this.urlList = [];
  }

  ngOnInit() {
    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  getData() {
    this.storage.get('url').then(res => {
      this.urlList = res; // console.log(this.urlList);
    });
    this.storage.get('source').then(res => {
      this.alist = res;

      if (!this.alist) {} else {
        for (let i = 0; i < this.alist.length; i++) {
          this.clist.push(this.alist[i]);
          this.imgList.push(this.clist[i].image);
          this.toplist.push(this.clist[i].changelog[1]);
          this.flist.push(this.clist[i].changelog[0]);
        }

        for (let i = 0; i < this.clist.length; i++) {
          for (let j = 2; j < this.clist[i].changelog.length; j++) {
            this.flist.push(this.clist[i].changelog[j]); //console.log(this.imgList);
          }

          for (let i = 0; i < this.clist.length; i++) {
            for (let j = 2; j < this.clist[i].changelog.length; j++) this.imgList.push(this.clist[i].changelog[0]);
          }
        }
      }
    });
  }

  ionViewDidEnter() {
    this.getData();
  }

  ionViewDidLeave() {
    this.alist = [];
    this.clist = [];
    this.imgList = [];
    this.toplist = [];
    this.flist = [];
  }

  isEmpty() {
    return this.flist.length == 0;
  }

  refresh() {
    var _this = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Updating Sources',
        duration: 1000,
        spinner: 'circles'
      });
      loading.present();
      setTimeout(() => {
        _this.doRefresh();

        _this.doneRefresh();
      }, 1500);
    })();
  }

  doRefresh() {
    //TODO: MAKE doRefresh()  SO DATA IS RETRIEVED FROM URL(S) AGAIN
    //      IN ORDER TO INPLEMENT REALTIME SOURCE REFRESH
    this.storage.remove('source'); //window.location.reload();

    console.log(this.urlList);
    this.alist = [];
    this.clist = [];
    this.imgList = [];
    this.toplist = [];
    this.flist = [];
    this.arr = [];

    for (let i = 0; i < this.urlList.length; i++) {
      this.serve.getSourceData(this.urlList[i]).subscribe(data => {
        this.clist = data['sources'];
        console.log(this.clist);
        const item = this.clist[0];
        this.arr.push(item);
        console.log(this.arr);
        this.storage.set('source', this.arr);
      });
    }

    setTimeout(() => {
      this.getData();
    }, 1000);
  }

  doneRefresh() {
    var _this2 = this;

    return (0,_Users_awaadchaudhry_Desktop_Coding_Projects_dovShop_dovShop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        subHeader: 'Sources have been updated',
        buttons: [{
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }]
      });
      yield alert.present();
    })();
  }

};

Tab3Page.ctorParameters = () => [{
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}, {
  type: _serve_service__WEBPACK_IMPORTED_MODULE_4__.ServeService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}];

Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tab3',
  template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab3Page);


/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".get-button {\n  --color: var(--ion-color-primary);\n  --background: var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtBQUNGIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldC1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuIl19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-button fil=\"clear\" (click)=\"refresh()\">\n      <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n    <ion-title>\n      Changes\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Changes</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-list inset=\"true\">\n    <ion-item lines=\"none\" color=\"light\" style=\"--padding-top:10px;--padding-bottom:10px; --border-radius:35px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"https://awaadcc.github.io/images/dovshop/icon.png\" style=\"border-radius: 20%;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>dovShop</h2>\n    <p>Latest Version Installed</p>\n  </ion-label>\n  <ion-button fill=\"solid\" strong=\"true\" class=\"get-button\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\" [routerLink]=\"['/tabs/tab1']\">BROWSE</ion-button>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf=\"isEmpty()\" inset=\"true\">\n  <ion-list-header color=\"\">\n  <ion-label>Changelog</ion-label>\n</ion-list-header>\n  <ion-item color=\"\">\n    No Recent Changes\n  </ion-item>\n</ion-list>\n\n<ng-container *ngIf=\"!isEmpty()\">\n<ion-list>\n<ion-list-header>\n  <ion-label>Recent Changes</ion-label>\n</ion-list-header>\n  <ion-item *ngFor=\"let item of toplist; let i = index;\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{imgList[i]}}\" />\n  </ion-avatar>\n    <ion-label>\n      <h1>{{item.changes}}</h1>\n      <p>{{item.name}}</p>\n      <h3>{{item.desc}}</h3> \n    </ion-label>\n  </ion-item>\n<ion-list-header>\n  <ion-label>Older Changes</ion-label>\n</ion-list-header>\n    <ng-container *ngFor=\"let item of flist; let i = index;\" >\n  <ion-item *ngIf=\"imgList[i].image\">\n\n    <ion-avatar slot=\"start\" >\n      <img src=\"{{imgList[i].image}}\">\n    </ion-avatar>\n    <ion-label>\n      <h1>{{item.changes}}</h1>\n      <p>{{item.name}}</p>\n      <h3>{{item.desc}}</h3> \n    </ion-label>\n  </ion-item>\n  </ng-container>\n\n</ion-list>\n</ng-container>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map