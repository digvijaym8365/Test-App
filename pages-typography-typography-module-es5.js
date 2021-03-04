function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-typography-typography-module"], {
  /***/
  "./src/app/pages/typography/containers/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/typography/containers/index.ts ***!
    \******************************************************/

  /*! exports provided: TypographyPageComponent */

  /***/
  function srcAppPagesTypographyContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./typography-page/typography-page.component */
    "./src/app/pages/typography/containers/typography-page/typography-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypographyPageComponent", function () {
      return _typography_page_typography_page_component__WEBPACK_IMPORTED_MODULE_0__["TypographyPageComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/typography/containers/typography-page/typography-page.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/typography/containers/typography-page/typography-page.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: TypographyPageComponent */

  /***/
  function srcAppPagesTypographyContainersTypographyPageTypographyPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyPageComponent", function () {
      return TypographyPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/layout/layout.component */
    "./src/app/shared/layout/layout.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var TypographyPageComponent = function TypographyPageComponent() {
      _classCallCheck(this, TypographyPageComponent);
    };

    TypographyPageComponent.ɵfac = function TypographyPageComponent_Factory(t) {
      return new (t || TypographyPageComponent)();
    };

    TypographyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypographyPageComponent,
      selectors: [["app-typography-page"]],
      decls: 78,
      vars: 0,
      consts: [["role", "heading", 1, "page-header"], [1, "typography-content"], [1, "typography-content__wrapper"], [1, "typography-content__item-wrapper"], [1, "typography-content__headings"], [1, "typography-content__colors"], [1, "typography-content__colors_blue"], [1, "typography-content__colors_green"], [1, "typography-content__colors_pink"], [1, "typography-content__colors_yellow"], [1, "typography-content__colors_light-blue"], [1, "typography-content__colors_violet"], [1, "typography-content__settings"], [1, "fw-light"], [1, "fw-medium"], [1, "fw-bold"], [1, "font-uppercase"], [1, "font-lowercase"], [1, "fst-italic"], [1, "typography-content__size"], [1, "fs-sm"], [1, "fs-regular"], [1, "fs-md"], [1, "fs-xl"], [1, "fs-xxl"]],
      template: function TypographyPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Typography");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Headings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "h1. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "h2. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "h3. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "h4. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "h5. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "h6. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Typography Colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "h1. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "h2. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "h3. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "h4. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "h5. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "h6. Heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Basic Text Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Basic text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Basic light text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Basic medium text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Basic bold text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "basic lowercase text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "basic lowercase text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Basic Capitalized Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Basic Cursive Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Text Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Heading Typography SM Font Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Heading Typography Regular Font Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Heading Typography MD Font Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Heading Typography XL Font Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Heading Typography XXL Font Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: [".typography-content__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 8px;\n}\n@media (max-width: 576px) {\n  .typography-content__wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.typography-content__item-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  width: 100%;\n  margin: 16px;\n}\n.typography-content__headings[_ngcontent-%COMP%], .typography-content__colors[_ngcontent-%COMP%], .typography-content__settings[_ngcontent-%COMP%], .typography-content__size[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  border: 1px dashed #536DFE;\n  padding: 32px 16px;\n}\n@media (max-width: 576px) {\n  .typography-content__headings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typography-content__colors[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typography-content__settings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typography-content__size[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    line-height: 46px;\n  }\n}\n.typography-content__colors_blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.typography-content__colors_green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.typography-content__colors_pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.typography-content__colors_yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.typography-content__colors_light-blue[_ngcontent-%COMP%] {\n  color: #798DFE;\n}\n.typography-content__colors_violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n}\n.fw-light[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.font-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n.fst-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.fs-sm[_ngcontent-%COMP%] {\n  font-size: 11.2px;\n}\n.fs-regular[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.fs-md[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.fs-xl[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.fs-xxl[_ngcontent-%COMP%] {\n  font-size: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvYnVpbGRlci9zcmMvYXBwL3BhZ2VzL3R5cG9ncmFwaHkvY29udGFpbmVycy90eXBvZ3JhcGh5LXBhZ2UvQzpcXFVzZXJzXFxkaWd2aWpheS5taXNhbFxcRGVza3RvcFxcV29ya1xcVGVzdF9hcHAvYXBwc1xcYnVpbGRlclxcc3JjXFxhcHBcXHBhZ2VzXFx0eXBvZ3JhcGh5XFxjb250YWluZXJzXFx0eXBvZ3JhcGh5LXBhZ2VcXHR5cG9ncmFwaHktcGFnZS5jb21wb25lbnQuc2NzcyIsImFwcHMvYnVpbGRlci9zcmMvYXBwL3BhZ2VzL3R5cG9ncmFwaHkvY29udGFpbmVycy90eXBvZ3JhcGh5LXBhZ2UvdHlwb2dyYXBoeS1wYWdlLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9idWlsZGVyL3NyYy9hcHAvcGFnZXMvdHlwb2dyYXBoeS9jb250YWluZXJzL3R5cG9ncmFwaHktcGFnZS9DOlxcVXNlcnNcXGRpZ3ZpamF5Lm1pc2FsXFxEZXNrdG9wXFxXb3JrXFxUZXN0X2FwcC9hcHBzXFxidWlsZGVyXFxzcmNcXGFwcFxcc3R5bGVzXFxjb2xvcnMuc2NzcyIsImFwcHMvYnVpbGRlci9zcmMvYXBwL3BhZ2VzL3R5cG9ncmFwaHkvY29udGFpbmVycy90eXBvZ3JhcGh5LXBhZ2UvQzpcXFVzZXJzXFxkaWd2aWpheS5taXNhbFxcRGVza3RvcFxcV29ya1xcVGVzdF9hcHAvYXBwc1xcYnVpbGRlclxcc3JjXFxhcHBcXHN0eWxlc1xcZm9udC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNMSjtBRE9JO0VBSkY7SUFLSSxlQUFBO0VDSko7QUFDRjtBRE9FO0VBQ0UsaUZBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0xKO0FEUUU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU007RUFERjtJQUVJLGlCQUFBO0VDTk47QUFDRjtBRFdJO0VBQ0UsY0VsQ0M7QUR5QlA7QURZSTtFQUNFLGNFaENFO0FEc0JSO0FEYUk7RUFDRSxjRXRDQztBRDJCUDtBRGNJO0VBQ0UsY0UvQ0c7QURtQ1Q7QURlSTtFQUNFLGNFakRPO0FEb0NiO0FEZ0JJO0VBQ0UsY0UvQ0c7QURpQ1Q7QURtQkE7RUFDRSxnQkc3RFc7QUY2Q2I7QURtQkE7RUFDRSxnQkdoRVU7QUZnRFo7QURtQkE7RUFDRSxnQkduRVE7QUZtRFY7QURtQkE7RUFDRSx5QkFBQTtBQ2hCRjtBRG1CQTtFQUNFLHlCQUFBO0FDaEJGO0FEbUJBO0VBQ0Usa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkdoRk07QUZnRVI7QURtQkE7RUFDRSxlR25GUztBRm1FWDtBRG1CQTtFQUNFLGVHcEZVO0FGb0VaO0FEbUJBO0VBQ0UsZUd0Rk07QUZzRVI7QURtQkE7RUFDRSxlR3hGUTtBRndFViIsImZpbGUiOiJhcHBzL2J1aWxkZXIvc3JjL2FwcC9wYWdlcy90eXBvZ3JhcGh5L2NvbnRhaW5lcnMvdHlwb2dyYXBoeS1wYWdlL3R5cG9ncmFwaHktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9jb2xvcnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvZm9udCc7XG5cbi50eXBvZ3JhcGh5LWNvbnRlbnQge1xuXG4gICZfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICB9XG5cbiAgJl9faXRlbS13cmFwcGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgJHNoYWRvdy13aGl0ZSwgMCAzcHggM3B4IC0ycHggI0IyQjJCMjFBLCAwIDFweCA4cHggMCAjOUE5QTlBMUE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNnB4O1xuICB9XG5cbiAgJl9faGVhZGluZ3MsICZfX2NvbG9ycywgJl9fc2V0dGluZ3MsICZfX3NpemUge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgJGJsdWU7XG4gICAgcGFkZGluZzogMzJweCAxNnB4O1xuXG4gICAgaDEge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xuICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19jb2xvcnMge1xuICAgICZfYmx1ZSB7XG4gICAgICBjb2xvcjogJGJsdWU7XG4gICAgfVxuXG4gICAgJl9ncmVlbiB7XG4gICAgICBjb2xvcjogJGdyZWVuO1xuICAgIH1cblxuICAgICZfcGluayB7XG4gICAgICBjb2xvcjogJHBpbms7XG4gICAgfVxuXG4gICAgJl95ZWxsb3cge1xuICAgICAgY29sb3I6ICR5ZWxsb3c7XG4gICAgfVxuXG4gICAgJl9saWdodC1ibHVlIHtcbiAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgICB9XG5cbiAgICAmX3Zpb2xldCB7XG4gICAgICBjb2xvcjogJHZpb2xldDtcbiAgICB9XG4gIH1cbn1cblxuLmZ3LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xufVxuXG4uZnctbWVkaXVtIHtcbiAgZm9udC13ZWlnaHQ6ICRmdy1ub3JtYWw7XG59XG5cbi5mdy1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6ICRmdy1ib2xkO1xufVxuXG4uZm9udC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9udC1sb3dlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4uZnN0LWl0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmZzLXNtIHtcbiAgZm9udC1zaXplOiAkZnMteHM7XG59XG5cbi5mcy1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAkZnMtc21hbGw7XG59XG5cbi5mcy1tZCB7XG4gIGZvbnQtc2l6ZTogJGZzLW1lZGl1bTtcbn1cblxuLmZzLXhsIHtcbiAgZm9udC1zaXplOiAkZnMteGw7XG59XG5cbi5mcy14eGwge1xuICBmb250LXNpemU6ICRmcy14eHhsO1xufVxuIiwiLnR5cG9ncmFwaHktY29udGVudF9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50eXBvZ3JhcGh5LWNvbnRlbnRfX3dyYXBwZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuLnR5cG9ncmFwaHktY29udGVudF9faXRlbS13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICNFOEVBRkMsIDAgM3B4IDNweCAtMnB4ICNCMkIyQjIxQSwgMCAxcHggOHB4IDAgIzlBOUE5QTFBO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4O1xufVxuLnR5cG9ncmFwaHktY29udGVudF9faGVhZGluZ3MsIC50eXBvZ3JhcGh5LWNvbnRlbnRfX2NvbG9ycywgLnR5cG9ncmFwaHktY29udGVudF9fc2V0dGluZ3MsIC50eXBvZ3JhcGh5LWNvbnRlbnRfX3NpemUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTM2REZFO1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnR5cG9ncmFwaHktY29udGVudF9faGVhZGluZ3MgaDEsIC50eXBvZ3JhcGh5LWNvbnRlbnRfX2NvbG9ycyBoMSwgLnR5cG9ncmFwaHktY29udGVudF9fc2V0dGluZ3MgaDEsIC50eXBvZ3JhcGh5LWNvbnRlbnRfX3NpemUgaDEge1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICB9XG59XG4udHlwb2dyYXBoeS1jb250ZW50X19jb2xvcnNfYmx1ZSB7XG4gIGNvbG9yOiAjNTM2REZFO1xufVxuLnR5cG9ncmFwaHktY29udGVudF9fY29sb3JzX2dyZWVuIHtcbiAgY29sb3I6ICMzQ0Q0QTA7XG59XG4udHlwb2dyYXBoeS1jb250ZW50X19jb2xvcnNfcGluayB7XG4gIGNvbG9yOiAjZmY0MDgxO1xufVxuLnR5cG9ncmFwaHktY29udGVudF9fY29sb3JzX3llbGxvdyB7XG4gIGNvbG9yOiAjZmZjMjYwO1xufVxuLnR5cG9ncmFwaHktY29udGVudF9fY29sb3JzX2xpZ2h0LWJsdWUge1xuICBjb2xvcjogIzc5OERGRTtcbn1cbi50eXBvZ3JhcGh5LWNvbnRlbnRfX2NvbG9yc192aW9sZXQge1xuICBjb2xvcjogIzkwMTNGRTtcbn1cblxuLmZ3LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZ3LW1lZGl1bSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mdy1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvbnQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvbnQtbG93ZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLmZzdC1pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5mcy1zbSB7XG4gIGZvbnQtc2l6ZTogMTEuMnB4O1xufVxuXG4uZnMtcmVndWxhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZzLW1kIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uZnMteGwge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5mcy14eGwge1xuICBmb250LXNpemU6IDQycHg7XG59IiwiJHllbGxvdzogI2ZmYzI2MDtcbiRibHVlOiAjNTM2REZFO1xuJGxpZ2h0LWJsdWU6ICM3OThERkU7XG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xuJHBpbms6ICNmZjQwODE7XG4kZGFyay1waW5rOiAjZmYwZjYwO1xuJGdyZWVuOiAjM0NENEEwO1xuJHZpb2xldDogIzkwMTNGRTtcbiR3aGl0ZTogd2hpdGU7XG4kZGFyay1ncmV5OiAjNEE0QTRBO1xuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XG4kZ3JleTogIzZFNkU2RTtcbiRza3k6ICNjMGNhZmY7XG5cblxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuJHdoaXRlLTgwOiAjRkZGRkZGODA7XG5cbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XG4kZ3JheS04MDogI0Q4RDhEODgwO1xuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcblxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xuXG5cbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcbiRmdy1ub3JtYWw6IDUwMDtcbiRmdy1ib2xkOiA2MDA7XG5cblxuJGZzLXhzOiAxMS4ycHg7XG4kZnMtc21hbGw6IDE0cHg7XG4kZnMtbm9ybWFsOiAxNnB4O1xuJGZzLXJlZ3VsYXI6IDE4cHg7XG4kZnMtbWVkaXVtOiAyMXB4O1xuJGZzLWxhcmdlOiAyNHB4O1xuJGZzLXhsOiAyOHB4O1xuJGZzLXh4bDogMzhweDtcbiRmcy14eHhsOiA0MnB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypographyPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-typography-page',
          templateUrl: './typography-page.component.html',
          styleUrls: ['./typography-page.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/typography/typography-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/typography/typography-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: TypographyRoutingModule */

  /***/
  function srcAppPagesTypographyTypographyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyRoutingModule", function () {
      return TypographyRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers */
    "./src/app/pages/typography/containers/index.ts");

    var routes = [{
      path: '',
      component: _containers__WEBPACK_IMPORTED_MODULE_2__["TypographyPageComponent"]
    }];

    var TypographyRoutingModule = function TypographyRoutingModule() {
      _classCallCheck(this, TypographyRoutingModule);
    };

    TypographyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TypographyRoutingModule
    });
    TypographyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TypographyRoutingModule_Factory(t) {
        return new (t || TypographyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TypographyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypographyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/typography/typography.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/typography/typography.module.ts ***!
    \*******************************************************/

  /*! exports provided: TypographyModule */

  /***/
  function srcAppPagesTypographyTypographyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyModule", function () {
      return TypographyModule;
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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/app/pages/typography/containers/index.ts");
    /* harmony import */


    var _typography_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./typography-routing.module */
    "./src/app/pages/typography/typography-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var TypographyModule = function TypographyModule() {
      _classCallCheck(this, TypographyModule);
    };

    TypographyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TypographyModule
    });
    TypographyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TypographyModule_Factory(t) {
        return new (t || TypographyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _typography_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypographyRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypographyModule, {
        declarations: [_containers__WEBPACK_IMPORTED_MODULE_4__["TypographyPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _typography_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypographyRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypographyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_containers__WEBPACK_IMPORTED_MODULE_4__["TypographyPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _typography_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypographyRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-typography-typography-module-es5.js.map