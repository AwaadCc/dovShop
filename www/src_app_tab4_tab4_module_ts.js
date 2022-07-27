"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

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

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page */ 3631);








let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_2__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 9184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _serve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serve.service */ 4526);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 2407);







let Tab4Page = class Tab4Page {
    constructor(storage, serve, iab) {
        this.storage = storage;
        this.serve = serve;
        this.iab = iab;
        this.searchInput = '';
        this.list = [];
        this.searchList = [];
        this.deflist = [];
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.getData();
        this.getDefData();
    }
    notext() {
        if (this.Filter) {
            return false;
        }
        else {
            return true;
        }
    }
    ionViewDidLeave() {
        this.list = [];
        this.searchList = [];
        this.items = [];
    }
    getItems(ev) {
        this.items = this.searchList;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
    }
    openBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
    }
    getDefData() {
        this.serve.getSourceData('https://awaadcc.github.io/dovshop/home.json').subscribe(data => {
            this.deflist = data['cards'];
            // console.log(this.deflist);
        });
    }
    getData() {
        this.storage.get('source').then(res => {
            this.list = res;
            if (!this.list) {
            }
            else {
                for (let i = 0; i < this.list.length; i++) {
                    for (let j = 0; j < this.list[i].packages.length; j++) {
                        this.searchList.push(this.list[i].packages[j]);
                    }
                }
                //console.log(this.searchList);
            }
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _serve_service__WEBPACK_IMPORTED_MODULE_3__.ServeService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".get-button {\n  --color: var(--ion-color-primary);\n  --background: var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUNBQUE7RUFDQSx5Q0FBQTtBQUNEIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldC1idXR0b24ge1xuXHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuIl19 */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Search</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-searchbar [(ngModel)]=\"Filter\" showCancelButton=\"focus\" cancel-button-text=\"Cancel\" spellcheck=\"true\" autocorrect=\"on\" showClearButton=\"true\" debounce=\"100\"></ion-searchbar>\n<div style=\"margin-right:5px;\">\n  <ion-list *ngIf=\"notext()\">\n    <ion-list-header>\n      Discover\n    </ion-list-header>\n    <ion-item style=\"color:var(--ion-color-primary);\">\n      altStore\n    </ion-item>\n    <ion-item style=\"color:var(--ion-color-primary);\">\n      sideloady\n    </ion-item>\n      <ion-item style=\"color:var(--ion-color-primary);\">\n      github page\n    </ion-item>\n      <ion-item style=\"color:var(--ion-color-primary);\">\n      dovshop website\n    </ion-item>\n  </ion-list>\n\n<ng-container *ngIf=\"!notext()\">\n    <ion-card *ngFor=\"let item of deflist | filter:Filter\">\n  <ion-item color=\"light\" lines=\"none\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{item.icon}}\" style=\"border-radius: 20%; display:block;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{item.name}}</h2>\n    <p>{{item.desc}}</p>\n  </ion-label>\n  <ion-button class=\"get-button\" (click)=\"openBrowser(item.url)\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n  </ion-item>\n  <img src=\"{{item.banner}}\" style=\"display:block;\">\n</ion-card>\n  <ion-card *ngFor=\"let item of searchList | filter:Filter\">\n  <ion-item color=\"light\" lines=\"none\" style=\"--padding-top:10px;--padding-bottom:10px;\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"{{item.image}}\" style=\"border-radius: 20%; display:block;\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>{{item.name}}</h2>\n    <p>{{item.desc}}</p>\n  </ion-label>\n  <ion-button class=\"get-button\" (click)=\"openBrowser(item.url)\" fill=\"solid\" strong=\"true\" shape=\"round\" size=\"small\" expand=\"full\" slot=\"end\" style=\"--padding-start:20px; --padding-end:20px;\">GET</ion-button>\n  </ion-item>\n  <img src=\"{{item.searchbanner}}\" style=\"display:block;\">\n</ion-card>\n</ng-container>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map