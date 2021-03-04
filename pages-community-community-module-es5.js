function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-community-community-module"], {
  /***/
  "./src/app/pages/community/community-modal/community-modal.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/community/community-modal/community-modal.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CommunityModalComponent */

  /***/
  function srcAppPagesCommunityCommunityModalCommunityModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityModalComponent", function () {
      return CommunityModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../.../../../../../environments/environment */
    "./src/environments/environment.ts");

    var CommunityModalComponent =
    /*#__PURE__*/
    function () {
      function CommunityModalComponent(dialogRef, data, dataService) {
        _classCallCheck(this, CommunityModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.communityData = {
          community_location: "aa",
          community_name: "aa",
          status: ""
        };
        this.communityData = data;
      }

      _createClass(CommunityModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].builderBaseUrl + "community/create-community";
          this.dataService.addCommunity(url, this.communityData).subscribe(function (result) {
            console.log("result....", result);
          });
          this.dialogRef.close();
        }
      }]);

      return CommunityModalComponent;
    }();

    CommunityModalComponent.ɵfac = function CommunityModalComponent_Factory(t) {
      return new (t || CommunityModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    CommunityModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommunityModalComponent,
      selectors: [["fp-community-modal"]],
      decls: 0,
      vars: 0,
      template: function CommunityModalComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29tbXVuaXR5LW1vZGFsL2NvbW11bml0eS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunityModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fp-community-modal',
          templateUrl: './community-modal.component.html',
          styleUrls: ['./community-modal.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/community/community-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/community/community-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CommunityRoutingModule */

  /***/
  function srcAppPagesCommunityCommunityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityRoutingModule", function () {
      return CommunityRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _containers_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers/dashboard-page/dashboard-page.component */
    "./src/app/pages/community/containers/dashboard-page/dashboard-page.component.ts");

    var routes = [{
      path: '',
      component: _containers_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__["DashboardPageComponent"]
    }];

    var CommunityRoutingModule = function CommunityRoutingModule() {
      _classCallCheck(this, CommunityRoutingModule);
    };

    CommunityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommunityRoutingModule
    });
    CommunityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommunityRoutingModule_Factory(t) {
        return new (t || CommunityRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommunityRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunityRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/community/community.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/community/community.module.ts ***!
    \*****************************************************/

  /*! exports provided: CommunityModule */

  /***/
  function srcAppPagesCommunityCommunityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityModule", function () {
      return CommunityModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _community_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./community-routing.module */
    "./src/app/pages/community/community-routing.module.ts");
    /* harmony import */


    var _community_community_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./community/community.component */
    "./src/app/pages/community/community/community.component.ts");
    /* harmony import */


    var _community_modal_community_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./community-modal/community-modal.component */
    "./src/app/pages/community/community-modal/community-modal.component.ts");
    /* harmony import */


    var _containers_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./containers/dashboard-page/dashboard-page.component */
    "./src/app/pages/community/containers/dashboard-page/dashboard-page.component.ts");

    var CommunityModule = function CommunityModule() {
      _classCallCheck(this, CommunityModule);
    };

    CommunityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommunityModule
    });
    CommunityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommunityModule_Factory(t) {
        return new (t || CommunityModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _community_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunityRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommunityModule, {
        declarations: [_community_community_component__WEBPACK_IMPORTED_MODULE_3__["CommunityComponent"], _containers_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _community_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunityRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_community_community_component__WEBPACK_IMPORTED_MODULE_3__["CommunityComponent"], _containers_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _community_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunityRoutingModule"]],
          entryComponents: [_community_modal_community_modal_component__WEBPACK_IMPORTED_MODULE_4__["CommunityModalComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/community/community/community.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/community/community/community.component.ts ***!
    \******************************************************************/

  /*! exports provided: CommunityComponent */

  /***/
  function srcAppPagesCommunityCommunityCommunityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityComponent", function () {
      return CommunityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _community_modal_community_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../community-modal/community-modal.component */
    "./src/app/pages/community/community-modal/community-modal.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../.../../../../../environments/environment */
    "./src/environments/environment.ts");

    var ELEMENT_DATA = [{
      position: 1,
      CommunityName: 'Hydrogen',
      Location: 'jobbe',
      BuilderInCommunity: 'abc',
      Status: 'vijaynagar',
      CommunityId: 'synextic',
      Operations: ''
    }];

    var CommunityComponent =
    /*#__PURE__*/
    function () {
      function CommunityComponent(dialog, dataService) {
        _classCallCheck(this, CommunityComponent);

        this.dialog = dialog;
        this.dataService = dataService;
        this.displayedColumns = ['community_name', 'community_location', 'status', 'community_builders_count', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
      }

      _createClass(CommunityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataService.login('mb@gmail.com', '11111111').subscribe(function (result) {
            console.log("result....", result);
            localStorage.setItem("IFPTOken", result['access_token']);

            _this.getAllCommnuties();
          });
        }
      }, {
        key: "getAllCommnuties",
        value: function getAllCommnuties() {
          var _this2 = this;

          var getCommunityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].builderBaseUrl + "community/get-all-communities";
          this.dataService.getAll(getCommunityUrl).subscribe(function (result) {
            console.log("result....", result);
            _this2.dataSource = result;
            _this2.dataSource.sort = _this2.sort;
            _this2.dataSource.paginator = _this2.paginator;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this3 = this;

          var dialogRef = this.dialog.open(_community_modal_community_modal_component__WEBPACK_IMPORTED_MODULE_5__["CommunityModalComponent"], {
            width: '250px',
            data: {
              community_location: "",
              community_name: "",
              status: ""
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');

            _this3.getAllCommnuties();
          });
        }
      }]);

      return CommunityComponent;
    }();

    CommunityComponent.ɵfac = function CommunityComponent_Factory(t) {
      return new (t || CommunityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]));
    };

    CommunityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommunityComponent,
      selectors: [["fp-community"]],
      viewQuery: function CommunityComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 1,
      vars: 0,
      template: function CommunityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " aaaaa");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29tbXVuaXR5L2NvbW11bml0eS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fp-community',
          templateUrl: './community.component.html',
          styleUrls: ['./community.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/community/containers/dashboard-page/dashboard-page.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/community/containers/dashboard-page/dashboard-page.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DashboardPageComponent */

  /***/
  function srcAppPagesCommunityContainersDashboardPageDashboardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function () {
      return DashboardPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardPageComponent = function DashboardPageComponent() {
      _classCallCheck(this, DashboardPageComponent);
    };

    DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) {
      return new (t || DashboardPageComponent)();
    };

    DashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardPageComponent,
      selectors: [["app-dashboard-page"]],
      decls: 0,
      vars: 0,
      template: function DashboardPageComponent_Template(rf, ctx) {},
      styles: [".charts-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 8px;\n}\n@media (max-width: 1024px) {\n  .charts-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 1024px) {\n  .chart[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 576px) {\n  .chart[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYnVpbGRlci9zcmMvYXBwL3BhZ2VzL2NvbW11bml0eS9jb250YWluZXJzL2Rhc2hib2FyZC1wYWdlL0M6XFxVc2Vyc1xcZGlndmlqYXkubWlzYWxcXERlc2t0b3BcXFdvcmtcXFRlc3RfYXBwL2FwcHNcXGJ1aWxkZXJcXHNyY1xcYXBwXFxwYWdlc1xcY29tbXVuaXR5XFxjb250YWluZXJzXFxkYXNoYm9hcmQtcGFnZVxcZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29udGFpbmVycy9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDREY7QURHRTtFQUpGO0lBS0ksZUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLFdBQUE7QUNBRjtBREVFO0VBSEY7SUFJSSxVQUFBO0VDQ0Y7QUFDRjtBRENFO0VBUEY7SUFRSSxXQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy9jb21tdW5pdHkvY29udGFpbmVycy9kYXNoYm9hcmQtcGFnZS9kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uY2hhcnRzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgOHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbm9ybWFsKSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi5jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbm9ybWFsKSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLmNoYXJ0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNoYXJ0cy13cmFwcGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLmNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jaGFydCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jaGFydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard-page',
          templateUrl: './dashboard-page.component.html',
          styleUrls: ['./dashboard-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-community-community-module-es5.js.map