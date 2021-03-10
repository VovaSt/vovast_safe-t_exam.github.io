(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "+0xr":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
  \***********************************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn, _MatTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function() { return MatNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTableDataSource", function() { return _MatTableDataSource; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wrapper for the CdkTable with Material design styles.
 */



var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
var _c1 = ["caption", "colgroup, col"];

function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var data_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}

var MatTable = /*#__PURE__*/function (_CdkTable) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTable, _CdkTable);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatTable);

  function MatTable() {
    var _this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatTable);

    _this = _super.apply(this, arguments);
    /** Overrides the sticky CSS class set by the `CdkTable`. */

    _this.stickyCssClass = 'mat-table-sticky';
    /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

    _this.needsPositionStickyOnElement = false;
    return _this;
  }

  return MatTable;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTable"]);

MatTable.ɵfac = function MatTable_Factory(t) {
  return ɵMatTable_BaseFactory(t || MatTable);
};

MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatTable,
  selectors: [["mat-table"], ["table", "mat-table", ""]],
  hostAttrs: [1, "mat-table"],
  hostVars: 2,
  hostBindings: function MatTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
    }
  },
  exportAs: ["matTable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
  //  is only included in the build if used.
  {
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["_VIEW_REPEATER_STRATEGY"],
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["_DisposeViewRepeaterStrategy"]
  }, {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTable"],
    useExisting: MatTable
  }, {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CDK_TABLE"],
    useExisting: MatTable
  }, {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["_COALESCED_STYLE_SCHEDULER"],
    useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["_CoalescedStyleScheduler"]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function MatTable_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](2, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](3, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](4, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](5, 3);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["FooterRowOutlet"]],
  styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"],
  encapsulation: 2
});
var ɵMatTable_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTable);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-table, table[mat-table]',
      exportAs: 'matTable',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CDK_TABLE_TEMPLATE"],
      host: {
        'class': 'mat-table',
        '[class.mat-table-fixed-layout]': 'fixedLayout'
      },
      providers: [// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
      //  is only included in the build if used.
      {
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["_VIEW_REPEATER_STRATEGY"],
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["_DisposeViewRepeaterStrategy"]
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTable"],
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CDK_TABLE"],
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["_COALESCED_STYLE_SCHEDULER"],
        useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["_CoalescedStyleScheduler"]
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].Default,
      styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */


var MatCellDef = /*#__PURE__*/function (_CdkCellDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatCellDef, _CdkCellDef);

  var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatCellDef);

  function MatCellDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatCellDef);

    return _super2.apply(this, arguments);
  }

  return MatCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCellDef"]);

MatCellDef.ɵfac = function MatCellDef_Factory(t) {
  return ɵMatCellDef_BaseFactory(t || MatCellDef);
};

MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatCellDef,
  selectors: [["", "matCellDef", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCellDef"],
    useExisting: MatCellDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatCellDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatCellDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCellDef"],
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */


var MatHeaderCellDef = /*#__PURE__*/function (_CdkHeaderCellDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatHeaderCellDef, _CdkHeaderCellDef);

  var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatHeaderCellDef);

  function MatHeaderCellDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatHeaderCellDef);

    return _super3.apply(this, arguments);
  }

  return MatHeaderCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderCellDef"]);

MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) {
  return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef);
};

MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatHeaderCellDef,
  selectors: [["", "matHeaderCellDef", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderCellDef"],
    useExisting: MatHeaderCellDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderCellDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatHeaderCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matHeaderCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderCellDef"],
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */


var MatFooterCellDef = /*#__PURE__*/function (_CdkFooterCellDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatFooterCellDef, _CdkFooterCellDef);

  var _super4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatFooterCellDef);

  function MatFooterCellDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFooterCellDef);

    return _super4.apply(this, arguments);
  }

  return MatFooterCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterCellDef"]);

MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) {
  return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef);
};

MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatFooterCellDef,
  selectors: [["", "matFooterCellDef", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterCellDef"],
    useExisting: MatFooterCellDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterCellDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFooterCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matFooterCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterCellDef"],
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */


var MatColumnDef = /*#__PURE__*/function (_CdkColumnDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatColumnDef, _CdkColumnDef);

  var _super5 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatColumnDef);

  function MatColumnDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatColumnDef);

    return _super5.apply(this, arguments);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatColumnDef, [{
    key: "name",
    get:
    /** Unique name for this column. */
    function get() {
      return this._name;
    },
    set: function set(name) {
      this._setNameInput(name);
    }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */

  }, {
    key: "_updateColumnCssClassName",
    value: function _updateColumnCssClassName() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatColumnDef.prototype), "_updateColumnCssClassName", this).call(this);

      this._columnCssClassName.push("mat-column-".concat(this.cssClassFriendlyName));
    }
  }]);

  return MatColumnDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkColumnDef"]);

MatColumnDef.ɵfac = function MatColumnDef_Factory(t) {
  return ɵMatColumnDef_BaseFactory(t || MatColumnDef);
};

MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatColumnDef,
  selectors: [["", "matColumnDef", ""]],
  inputs: {
    sticky: "sticky",
    name: ["matColumnDef", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkColumnDef"],
    useExisting: MatColumnDef
  }, {
    provide: 'MAT_SORT_HEADER_COLUMN_DEF',
    useExisting: MatColumnDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
MatColumnDef.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matColumnDef']
  }]
};
var ɵMatColumnDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatColumnDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatColumnDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matColumnDef]',
      inputs: ['sticky'],
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkColumnDef"],
        useExisting: MatColumnDef
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matColumnDef']
    }]
  });
})();
/** Header cell template container that adds the right classes and role. */


var MatHeaderCell = /*#__PURE__*/function (_CdkHeaderCell) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatHeaderCell, _CdkHeaderCell);

  var _super6 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatHeaderCell);

  function MatHeaderCell() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatHeaderCell);

    return _super6.apply(this, arguments);
  }

  return MatHeaderCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderCell"]);

MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) {
  return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell);
};

MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatHeaderCell,
  selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatHeaderCell_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderCell);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatHeaderCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-header-cell, th[mat-header-cell]',
      host: {
        'class': 'mat-header-cell',
        'role': 'columnheader'
      }
    }]
  }], null, null);
})();
/** Footer cell template container that adds the right classes and role. */


var MatFooterCell = /*#__PURE__*/function (_CdkFooterCell) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatFooterCell, _CdkFooterCell);

  var _super7 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatFooterCell);

  function MatFooterCell() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFooterCell);

    return _super7.apply(this, arguments);
  }

  return MatFooterCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterCell"]);

MatFooterCell.ɵfac = function MatFooterCell_Factory(t) {
  return ɵMatFooterCell_BaseFactory(t || MatFooterCell);
};

MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatFooterCell,
  selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
  hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatFooterCell_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterCell);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFooterCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-footer-cell, td[mat-footer-cell]',
      host: {
        'class': 'mat-footer-cell',
        'role': 'gridcell'
      }
    }]
  }], null, null);
})();
/** Cell template container that adds the right classes and role. */


var MatCell = /*#__PURE__*/function (_CdkCell) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatCell, _CdkCell);

  var _super8 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatCell);

  function MatCell() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatCell);

    return _super8.apply(this, arguments);
  }

  return MatCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCell"]);

MatCell.ɵfac = function MatCell_Factory(t) {
  return ɵMatCell_BaseFactory(t || MatCell);
};

MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatCell,
  selectors: [["mat-cell"], ["td", "mat-cell", ""]],
  hostAttrs: ["role", "gridcell", 1, "mat-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatCell_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatCell);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-cell, td[mat-cell]',
      host: {
        'class': 'mat-cell',
        'role': 'gridcell'
      }
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */


var MatHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatHeaderRowDef, _CdkHeaderRowDef);

  var _super9 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatHeaderRowDef);

  function MatHeaderRowDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatHeaderRowDef);

    return _super9.apply(this, arguments);
  }

  return MatHeaderRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRowDef"]);

MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) {
  return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef);
};

MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatHeaderRowDef,
  selectors: [["", "matHeaderRowDef", ""]],
  inputs: {
    columns: ["matHeaderRowDef", "columns"],
    sticky: ["matHeaderRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRowDef"],
    useExisting: MatHeaderRowDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderRowDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatHeaderRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matHeaderRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRowDef"],
        useExisting: MatHeaderRowDef
      }],
      inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
    }]
  }], null, null);
})();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */


var MatFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatFooterRowDef, _CdkFooterRowDef);

  var _super10 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatFooterRowDef);

  function MatFooterRowDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFooterRowDef);

    return _super10.apply(this, arguments);
  }

  return MatFooterRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterRowDef"]);

MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) {
  return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef);
};

MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatFooterRowDef,
  selectors: [["", "matFooterRowDef", ""]],
  inputs: {
    columns: ["matFooterRowDef", "columns"],
    sticky: ["matFooterRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterRowDef"],
    useExisting: MatFooterRowDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterRowDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFooterRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matFooterRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterRowDef"],
        useExisting: MatFooterRowDef
      }],
      inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
    }]
  }], null, null);
})();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */


var MatRowDef = /*#__PURE__*/function (_CdkRowDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatRowDef, _CdkRowDef);

  var _super11 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatRowDef);

  function MatRowDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatRowDef);

    return _super11.apply(this, arguments);
  }

  return MatRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRowDef"]);

MatRowDef.ɵfac = function MatRowDef_Factory(t) {
  return ɵMatRowDef_BaseFactory(t || MatRowDef);
};

MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatRowDef,
  selectors: [["", "matRowDef", ""]],
  inputs: {
    columns: ["matRowDefColumns", "columns"],
    when: ["matRowDefWhen", "when"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRowDef"],
    useExisting: MatRowDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatRowDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatRowDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRowDef"],
        useExisting: MatRowDef
      }],
      inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
    }]
  }], null, null);
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */


var MatHeaderRow = /*#__PURE__*/function (_CdkHeaderRow) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatHeaderRow, _CdkHeaderRow);

  var _super12 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatHeaderRow);

  function MatHeaderRow() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatHeaderRow);

    return _super12.apply(this, arguments);
  }

  return MatHeaderRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRow"]);

MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) {
  return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow);
};

MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatHeaderRow,
  selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-header-row"],
  exportAs: ["matHeaderRow"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRow"],
    useExisting: MatHeaderRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCellOutlet"]],
  encapsulation: 2
});
var ɵMatHeaderRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatHeaderRow);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatHeaderRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-header-row, tr[mat-header-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CDK_ROW_TEMPLATE"],
      host: {
        'class': 'mat-header-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      exportAs: 'matHeaderRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRow"],
        useExisting: MatHeaderRow
      }]
    }]
  }], null, null);
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */


var MatFooterRow = /*#__PURE__*/function (_CdkFooterRow) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatFooterRow, _CdkFooterRow);

  var _super13 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatFooterRow);

  function MatFooterRow() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFooterRow);

    return _super13.apply(this, arguments);
  }

  return MatFooterRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterRow"]);

MatFooterRow.ɵfac = function MatFooterRow_Factory(t) {
  return ɵMatFooterRow_BaseFactory(t || MatFooterRow);
};

MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatFooterRow,
  selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-footer-row"],
  exportAs: ["matFooterRow"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterRow"],
    useExisting: MatFooterRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCellOutlet"]],
  encapsulation: 2
});
var ɵMatFooterRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatFooterRow);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFooterRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-footer-row, tr[mat-footer-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CDK_ROW_TEMPLATE"],
      host: {
        'class': 'mat-footer-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      exportAs: 'matFooterRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkFooterRow"],
        useExisting: MatFooterRow
      }]
    }]
  }], null, null);
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */


var MatRow = /*#__PURE__*/function (_CdkRow) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatRow, _CdkRow);

  var _super14 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatRow);

  function MatRow() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatRow);

    return _super14.apply(this, arguments);
  }

  return MatRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRow"]);

MatRow.ɵfac = function MatRow_Factory(t) {
  return ɵMatRow_BaseFactory(t || MatRow);
};

MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatRow,
  selectors: [["mat-row"], ["tr", "mat-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-row"],
  exportAs: ["matRow"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRow"],
    useExisting: MatRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkCellOutlet"]],
  encapsulation: 2
});
var ɵMatRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatRow);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-row, tr[mat-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CDK_ROW_TEMPLATE"],
      host: {
        'class': 'mat-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      exportAs: 'matRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRow"],
        useExisting: MatRow
      }]
    }]
  }], null, null);
})();
/** Row that can be used to display a message when no data is shown in the table. */


var MatNoDataRow = /*#__PURE__*/function (_CdkNoDataRow) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatNoDataRow, _CdkNoDataRow);

  var _super15 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatNoDataRow);

  function MatNoDataRow() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatNoDataRow);

    return _super15.apply(this, arguments);
  }

  return MatNoDataRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkNoDataRow"]);

MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) {
  return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow);
};

MatNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatNoDataRow,
  selectors: [["ng-template", "matNoDataRow", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkNoDataRow"],
    useExisting: MatNoDataRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
var ɵMatNoDataRow_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatNoDataRow);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatNoDataRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'ng-template[matNoDataRow]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkNoDataRow"],
        useExisting: MatNoDataRow
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */


var MatTextColumn = /*#__PURE__*/function (_CdkTextColumn) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTextColumn, _CdkTextColumn);

  var _super16 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatTextColumn);

  function MatTextColumn() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatTextColumn);

    return _super16.apply(this, arguments);
  }

  return MatTextColumn;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTextColumn"]);

MatTextColumn.ɵfac = function MatTextColumn_Factory(t) {
  return ɵMatTextColumn_BaseFactory(t || MatTextColumn);
};

MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatTextColumn,
  selectors: [["mat-text-column"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 0,
  consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
  template: function MatTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    }
  },
  directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
  encapsulation: 2
});
var ɵMatTextColumn_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTextColumn);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTextColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-text-column',
      template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].Default
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var EXPORTED_DECLARATIONS = [// Table
MatTable, // Template defs
MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
MatHeaderCell, MatCell, MatFooterCell, // Row directives
MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];

var MatTableModule = function MatTableModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatTableModule);
};

MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatTableModule
});
MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatTableModule_Factory(t) {
    return new (t || MatTableModule)();
  },
  imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatTableModule, {
    declarations: function declarations() {
      return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
    },
    imports: function imports() {
      return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], EXPORTED_DECLARATIONS],
      declarations: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */


var MAX_SAFE_INTEGER = 9007199254740991;
/** Shared base class with MDC-based implementation. */

var _MatTableDataSource = /*#__PURE__*/function (_DataSource) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatTableDataSource, _DataSource);

  var _super17 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(_MatTableDataSource);

  function _MatTableDataSource() {
    var _this2;

    var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _MatTableDataSource);

    _this2 = _super17.call(this);
    /** Stream emitting render data to the table (depends on ordered data changes). */

    _this2._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]([]);
    /** Stream that emits when a new filter string is set on the data source. */

    _this2._filter = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]('');
    /** Used to react to internal changes of the paginator that are made by the data source itself. */

    _this2._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */

    _this2._renderChangesSubscription = null;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * @param data Data object that is being accessed.
     * @param sortHeaderId The name of the column that represents the data.
     */

    _this2.sortingDataAccessor = function (data, sortHeaderId) {
      var value = data[sortHeaderId];

      if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["_isNumberValue"])(value)) {
        var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
        // leave them as strings. For more info: https://goo.gl/y5vbSg

        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }

      return value;
    };
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * @param data The array of data that should be sorted.
     * @param sort The connected MatSort that holds the current sort state.
     */


    _this2.sortData = function (data, sort) {
      var active = sort.active;
      var direction = sort.direction;

      if (!active || direction == '') {
        return data;
      }

      return data.sort(function (a, b) {
        var valueA = _this2.sortingDataAccessor(a, active);

        var valueB = _this2.sortingDataAccessor(b, active); // If there are data in the column that can be converted to a number,
        // it must be ensured that the rest of the data
        // is of the same type so as not to order incorrectly.


        var valueAType = typeof valueA;
        var valueBType = typeof valueB;

        if (valueAType !== valueBType) {
          if (valueAType === 'number') {
            valueA += '';
          }

          if (valueBType === 'number') {
            valueB += '';
          }
        } // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).


        var comparatorResult = 0;

        if (valueA != null && valueB != null) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }

        return comparatorResult * (direction == 'asc' ? 1 : -1);
      });
    };
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * @param data Data object used to check against the filter.
     * @param filter Filter string that has been set on the data source.
     * @returns Whether the filter matches against the data
     */


    _this2.filterPredicate = function (data, filter) {
      // Transform the data into a lowercase string of all property values.
      var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
        // Use an obscure Unicode character to delimit the words in the concatenated string.
        // This avoids matches where the values of two columns combined will match the user's query
        // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
        // that has a very low chance of being typed in by somebody in a text field. This one in
        // particular is "White up-pointing triangle with dot" from
        // https://en.wikipedia.org/wiki/List_of_Unicode_characters
        return currentTerm + data[key] + '◬';
      }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

      var transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };

    _this2._data = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"](initialData);

    _this2._updateChangeSubscription();

    return _this2;
  }
  /** Array of data that should be rendered by the table, where each object represents one row. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_MatTableDataSource, [{
    key: "data",
    get: function get() {
      return this._data.value;
    },
    set: function set(data) {
      this._data.next(data);
    }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */

  }, {
    key: "filter",
    get: function get() {
      return this._filter.value;
    },
    set: function set(filter) {
      this._filter.next(filter);
    }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */

  }, {
    key: "sort",
    get: function get() {
      return this._sort;
    },
    set: function set(sort) {
      this._sort = sort;

      this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */

  }, {
    key: "paginator",
    get: function get() {
      return this._paginator;
    },
    set: function set(paginator) {
      this._paginator = paginator;

      this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */

  }, {
    key: "_updateChangeSubscription",
    value: function _updateChangeSubscription() {
      var _this3 = this;

      var _a; // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
      // The events should emit whenever the component emits a change or initializes, or if no
      // component is provided, a stream with just a null event should be provided.
      // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
      // pipeline can progress to the next step. Note that the value from these streams are not used,
      // they purely act as a signal to progress in the pipeline.


      var sortChange = this._sort ? Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
      var pageChange = this._paginator ? Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(null);
      var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

      var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (_ref) {
        var _ref2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
            data = _ref2[0];

        return _this3._filterData(data);
      })); // Watch for filtered data or sort changes to provide an ordered set of data.

      var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (_ref3) {
        var _ref4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 1),
            data = _ref4[0];

        return _this3._orderData(data);
      })); // Watch for ordered data or page changes to provide a paged set of data.

      var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (_ref5) {
        var _ref6 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 1),
            data = _ref6[0];

        return _this3._pageData(data);
      })); // Watched for paged data changes and send the result to the table to render.

      (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
      this._renderChangesSubscription = paginatedData.subscribe(function (data) {
        return _this3._renderData.next(data);
      });
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */

  }, {
    key: "_filterData",
    value: function _filterData(data) {
      var _this4 = this;

      // If there is a filter string, filter out data that does not contain it.
      // Each data object is converted to a string using the function defined by filterTermAccessor.
      // May be overridden for customization.
      this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(function (obj) {
        return _this4.filterPredicate(obj, _this4.filter);
      });

      if (this.paginator) {
        this._updatePaginator(this.filteredData.length);
      }

      return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */

  }, {
    key: "_orderData",
    value: function _orderData(data) {
      // If there is no active sort or direction, return the data without trying to sort.
      if (!this.sort) {
        return data;
      }

      return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */

  }, {
    key: "_pageData",
    value: function _pageData(data) {
      if (!this.paginator) {
        return data;
      }

      var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */

  }, {
    key: "_updatePaginator",
    value: function _updatePaginator(filteredDataLength) {
      var _this5 = this;

      Promise.resolve().then(function () {
        var paginator = _this5.paginator;

        if (!paginator) {
          return;
        }

        paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

        if (paginator.pageIndex > 0) {
          var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
          var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

          if (newPageIndex !== paginator.pageIndex) {
            paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
            // we need our own stream so we know to should re-render the data.

            _this5._internalPageChanges.next();
          }
        }
      });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */

  }, {
    key: "connect",
    value: function connect() {
      if (!this._renderChangesSubscription) {
        this._updateChangeSubscription();
      }

      return this._renderData;
    }
    /**
     * Used by the MatTable. Called when it disconnects from the data source.
     * @docs-private
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _a;

      (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
      this._renderChangesSubscription = null;
    }
  }]);

  return _MatTableDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["DataSource"]);
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */


var MatTableDataSource = /*#__PURE__*/function (_MatTableDataSource2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTableDataSource, _MatTableDataSource2);

  var _super18 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(MatTableDataSource);

  function MatTableDataSource() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatTableDataSource);

    return _super18.apply(this, arguments);
  }

  return MatTableDataSource;
}(_MatTableDataSource);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "0EQZ":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
  \************************************************************************/
/*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, getMultipleValuesInSingleSelectionError, isDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DisposeViewRepeaterStrategy", function() { return _DisposeViewRepeaterStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RecycleViewRepeaterStrategy", function() { return _RecycleViewRepeaterStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_VIEW_REPEATER_STRATEGY", function() { return _VIEW_REPEATER_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var DataSource = function DataSource() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DataSource);
};
/** Checks whether an object is a data source. */


function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource.
  return value && typeof value.connect === 'function';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** DataSource wrapper for a native array. */


var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ArrayDataSource, _DataSource);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(ArrayDataSource);

  function ArrayDataSource(_data) {
    var _this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ArrayDataSource);

    _this = _super.call(this);
    _this._data = _data;
    return _this;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrayDataSource, [{
    key: "connect",
    value: function connect() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this._data);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }]);

  return ArrayDataSource;
}(DataSource);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A repeater that destroys views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */


var _DisposeViewRepeaterStrategy = /*#__PURE__*/function () {
  function _DisposeViewRepeaterStrategy() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _DisposeViewRepeaterStrategy);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_DisposeViewRepeaterStrategy, [{
    key: "applyChanges",
    value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
      changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
        var view;
        var operation;

        if (record.previousIndex == null) {
          var insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
          view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
          operation = 1
          /* INSERTED */
          ;
        } else if (currentIndex == null) {
          viewContainerRef.remove(adjustedPreviousIndex);
          operation = 3
          /* REMOVED */
          ;
        } else {
          view = viewContainerRef.get(adjustedPreviousIndex);
          viewContainerRef.move(view, currentIndex);
          operation = 2
          /* MOVED */
          ;
        }

        if (itemViewChanged) {
          itemViewChanged({
            context: view === null || view === void 0 ? void 0 : view.context,
            operation: operation,
            record: record
          });
        }
      });
    }
  }, {
    key: "detach",
    value: function detach() {}
  }]);

  return _DisposeViewRepeaterStrategy;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A repeater that caches views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */


var _RecycleViewRepeaterStrategy = /*#__PURE__*/function () {
  function _RecycleViewRepeaterStrategy() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _RecycleViewRepeaterStrategy);

    /**
     * The size of the cache used to store unused views.
     * Setting the cache size to `0` will disable caching. Defaults to 20 views.
     */
    this.viewCacheSize = 20;
    /**
     * View cache that stores embedded view instances that have been previously stamped out,
     * but don't are not currently rendered. The view repeater will reuse these views rather than
     * creating brand new ones.
     *
     * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
     */

    this._viewCache = [];
  }
  /** Apply changes to the DOM. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_RecycleViewRepeaterStrategy, [{
    key: "applyChanges",
    value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
      var _this2 = this;

      // Rearrange the views to put them in the right location.
      changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
        var view;
        var operation;

        if (record.previousIndex == null) {
          // Item added.
          var viewArgsFactory = function viewArgsFactory() {
            return itemContextFactory(record, adjustedPreviousIndex, currentIndex);
          };

          view = _this2._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
          operation = view ? 1
          /* INSERTED */
          : 0
          /* REPLACED */
          ;
        } else if (currentIndex == null) {
          // Item removed.
          _this2._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);

          operation = 3
          /* REMOVED */
          ;
        } else {
          // Item moved.
          view = _this2._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
          operation = 2
          /* MOVED */
          ;
        }

        if (itemViewChanged) {
          itemViewChanged({
            context: view === null || view === void 0 ? void 0 : view.context,
            operation: operation,
            record: record
          });
        }
      });
    }
  }, {
    key: "detach",
    value: function detach() {
      var _iterator = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this._viewCache),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var view = _step.value;
          view.destroy();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._viewCache = [];
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new
     * one. Returns `undefined` if the item was inserted into a cached view.
     */

  }, {
    key: "_insertView",
    value: function _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
      var cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);

      if (cachedView) {
        cachedView.context.$implicit = value;
        return undefined;
      }

      var viewArgs = viewArgsFactory();
      return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
    }
    /** Detaches the view at the given index and inserts into the view cache. */

  }, {
    key: "_detachAndCacheView",
    value: function _detachAndCacheView(index, viewContainerRef) {
      var detachedView = viewContainerRef.detach(index);

      this._maybeCacheView(detachedView, viewContainerRef);
    }
    /** Moves view at the previous index to the current index. */

  }, {
    key: "_moveView",
    value: function _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
      var view = viewContainerRef.get(adjustedPreviousIndex);
      viewContainerRef.move(view, currentIndex);
      view.context.$implicit = value;
      return view;
    }
    /**
     * Cache the given detached view. If the cache is full, the view will be
     * destroyed.
     */

  }, {
    key: "_maybeCacheView",
    value: function _maybeCacheView(view, viewContainerRef) {
      if (this._viewCache.length < this.viewCacheSize) {
        this._viewCache.push(view);
      } else {
        var index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
        // the view repeater. It's unlikely this will occur, but just in case,
        // destroy the view on its own, otherwise destroy it through the
        // container to ensure that all the references are removed.

        if (index === -1) {
          view.destroy();
        } else {
          viewContainerRef.remove(index);
        }
      }
    }
    /** Inserts a recycled view from the cache at the given index. */

  }, {
    key: "_insertViewFromCache",
    value: function _insertViewFromCache(index, viewContainerRef) {
      var cachedView = this._viewCache.pop();

      if (cachedView) {
        viewContainerRef.insert(cachedView, index);
      }

      return cachedView || null;
    }
  }]);

  return _RecycleViewRepeaterStrategy;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class to be used to power selecting one or more options from a list.
 */


var SelectionModel = /*#__PURE__*/function () {
  function SelectionModel() {
    var _this3 = this;

    var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

    var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SelectionModel);

    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    /** Currently-selected values. */

    this._selection = new Set();
    /** Keeps track of the deselected options that haven't been emitted by the change event. */

    this._deselectedToEmit = [];
    /** Keeps track of the selected options that haven't been emitted by the change event. */

    this._selectedToEmit = [];
    /** Event emitted when the value has changed. */

    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();

    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(function (value) {
          return _this3._markSelected(value);
        });
      } else {
        this._markSelected(initiallySelectedValues[0]);
      } // Clear the array in order to avoid firing the change event for preselected values.


      this._selectedToEmit.length = 0;
    }
  }
  /** Selected values. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectionModel, [{
    key: "selected",
    get: function get() {
      if (!this._selected) {
        this._selected = Array.from(this._selection.values());
      }

      return this._selected;
    }
    /**
     * Selects a value or an array of values.
     */

  }, {
    key: "select",
    value: function select() {
      var _this4 = this;

      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      this._verifyValueAssignment(values);

      values.forEach(function (value) {
        return _this4._markSelected(value);
      });

      this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     */

  }, {
    key: "deselect",
    value: function deselect() {
      var _this5 = this;

      for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      this._verifyValueAssignment(values);

      values.forEach(function (value) {
        return _this5._unmarkSelected(value);
      });

      this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     */

  }, {
    key: "toggle",
    value: function toggle(value) {
      this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._unmarkAll();

      this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     */

  }, {
    key: "isSelected",
    value: function isSelected(value) {
      return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     */

  }, {
    key: "hasValue",
    value: function hasValue() {
      return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     */

  }, {
    key: "sort",
    value: function sort(predicate) {
      if (this._multiple && this.selected) {
        this._selected.sort(predicate);
      }
    }
    /**
     * Gets whether multiple values can be selected.
     */

  }, {
    key: "isMultipleSelection",
    value: function isMultipleSelection() {
      return this._multiple;
    }
    /** Emits a change event and clears the records of selected and deselected values. */

  }, {
    key: "_emitChangeEvent",
    value: function _emitChangeEvent() {
      // Clear the selected values so they can be re-cached.
      this._selected = null;

      if (this._selectedToEmit.length || this._deselectedToEmit.length) {
        this.changed.next({
          source: this,
          added: this._selectedToEmit,
          removed: this._deselectedToEmit
        });
        this._deselectedToEmit = [];
        this._selectedToEmit = [];
      }
    }
    /** Selects a value. */

  }, {
    key: "_markSelected",
    value: function _markSelected(value) {
      if (!this.isSelected(value)) {
        if (!this._multiple) {
          this._unmarkAll();
        }

        this._selection.add(value);

        if (this._emitChanges) {
          this._selectedToEmit.push(value);
        }
      }
    }
    /** Deselects a value. */

  }, {
    key: "_unmarkSelected",
    value: function _unmarkSelected(value) {
      if (this.isSelected(value)) {
        this._selection.delete(value);

        if (this._emitChanges) {
          this._deselectedToEmit.push(value);
        }
      }
    }
    /** Clears out the selected values. */

  }, {
    key: "_unmarkAll",
    value: function _unmarkAll() {
      var _this6 = this;

      if (!this.isEmpty()) {
        this._selection.forEach(function (value) {
          return _this6._unmarkSelected(value);
        });
      }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */

  }, {
    key: "_verifyValueAssignment",
    value: function _verifyValueAssignment(values) {
      if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMultipleValuesInSingleSelectionError();
      }
    }
  }]);

  return SelectionModel;
}();
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */


function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */


var UniqueSelectionDispatcher = /*#__PURE__*/function () {
  function UniqueSelectionDispatcher() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, UniqueSelectionDispatcher);

    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UniqueSelectionDispatcher, [{
    key: "notify",
    value: function notify(id, name) {
      var _iterator2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this._listeners),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var listener = _step2.value;
          listener(id, name);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */

  }, {
    key: "listen",
    value: function listen(listener) {
      var _this7 = this;

      this._listeners.push(listener);

      return function () {
        _this7._listeners = _this7._listeners.filter(function (registered) {
          return listener !== registered;
        });
      };
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._listeners = [];
    }
  }]);

  return UniqueSelectionDispatcher;
}();

UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
  return new (t || UniqueSelectionDispatcher)();
};

UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({
  factory: function UniqueSelectionDispatcher_Factory() {
    return new UniqueSelectionDispatcher();
  },
  token: UniqueSelectionDispatcher,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
 * @docs-private
 */


var _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('_ViewRepeater');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "eMzQ");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            {
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() | services-services-module */ "services-services-module").then(__webpack_require__.bind(null, /*! ../services/services.module */ "334H")).then(function (m) { return m.ServicesModule; }); },
            },
            {
                path: '**',
                component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"],
            }
        ]
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
    MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return MainRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "8LU1":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \********************************************************/
/*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceStringArray", function() { return coerceStringArray; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Coerces a data-bound value (typically a string) to a boolean. */

function coerceBooleanProperty(value) {
  return value != null && "".concat(value) !== 'false';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function coerceNumberProperty(value) {
  var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */


function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Coerces a value to a CSS pixel value. */


function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }

  return typeof value === 'string' ? value : "".concat(value, "px");
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */


function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */


function coerceStringArray(value) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /\s+/;
  var result = [];

  if (value != null) {
    var sourceValues = Array.isArray(value) ? value : "".concat(value).split(separator);

    var _iterator = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceValues),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sourceValue = _step.value;
        var trimmedString = "".concat(sourceValue).trim();

        if (trimmedString) {
          result.push(trimmedString);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return result;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/***/ }),

/***/ "8yBR":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js ***!
  \**********************************************************************/
/*! exports provided: MatNestedTreeNode, MatTree, MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource, MatTreeNode, MatTreeNodeDef, MatTreeNodeOutlet, MatTreeNodePadding, MatTreeNodeToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function() { return MatNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTree", function() { return MatTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function() { return MatTreeFlatDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function() { return MatTreeFlattener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeModule", function() { return MatTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function() { return MatTreeNestedDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNode", function() { return MatTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function() { return MatTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function() { return MatTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function() { return MatTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function() { return MatTreeNodeToggle; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




var _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNode"]));
/**
 * Wrapper for the CdkTree node with Material design styles.
 */


var MatTreeNode = /*#__PURE__*/function (_MatTreeNodeMixinBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTreeNode, _MatTreeNodeMixinBase2);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTreeNode);

  function MatTreeNode(_elementRef, _tree, tabIndex) {
    var _this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeNode);

    _this = _super.call(this, _elementRef, _tree);
    _this._elementRef = _elementRef;
    _this._tree = _tree;
    _this.tabIndex = Number(tabIndex) || 0; // The classes are directly added here instead of in the host property because classes on
    // the host property are not inherited with View Engine. It is not set as a @HostBinding because
    // it is not set by the time it's children nodes try to read the class from it.
    // TODO: move to host after View Engine deprecation

    _this._elementRef.nativeElement.classList.add('mat-tree-node');

    return _this;
  } // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTreeNode, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTreeNode.prototype), "ngOnInit", this).call(this);
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTreeNode.prototype), "ngDoCheck", this).call(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTreeNode.prototype), "ngOnDestroy", this).call(this);
    }
  }]);

  return MatTreeNode;
}(_MatTreeNodeMixinBase);

MatTreeNode.ɵfac = function MatTreeNode_Factory(t) {
  return new (t || MatTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinjectAttribute"]('tabindex'));
};

MatTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatTreeNode,
  selectors: [["mat-tree-node"]],
  inputs: {
    role: "role",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  exportAs: ["matTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNode"],
    useExisting: MatTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

MatTreeNode.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Attribute"],
      args: ['tabindex']
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-tree-node',
      exportAs: 'matTreeNode',
      inputs: ['role', 'disabled', 'tabIndex'],
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNode"],
        useExisting: MatTreeNode
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Attribute"],
        args: ['tabindex']
      }]
    }];
  }, null);
})();
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */


var MatTreeNodeDef = /*#__PURE__*/function (_CdkTreeNodeDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTreeNodeDef, _CdkTreeNodeDef);

  var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTreeNodeDef);

  function MatTreeNodeDef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeNodeDef);

    return _super2.apply(this, arguments);
  }

  return MatTreeNodeDef;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeDef"]);

MatTreeNodeDef.ɵfac = function MatTreeNodeDef_Factory(t) {
  return ɵMatTreeNodeDef_BaseFactory(t || MatTreeNodeDef);
};

MatTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatTreeNodeDef,
  selectors: [["", "matTreeNodeDef", ""]],
  inputs: {
    when: ["matTreeNodeDefWhen", "when"],
    data: ["matTreeNode", "data"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeDef"],
    useExisting: MatTreeNodeDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
MatTreeNodeDef.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matTreeNode']
  }]
};
var ɵMatTreeNodeDef_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTreeNodeDef);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTreeNodeDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matTreeNodeDef]',
      inputs: ['when: matTreeNodeDefWhen'],
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeDef"],
        useExisting: MatTreeNodeDef
      }]
    }]
  }], null, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matTreeNode']
    }]
  });
})();
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 */


var MatNestedTreeNode = /*#__PURE__*/function (_CdkNestedTreeNode) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatNestedTreeNode, _CdkNestedTreeNode);

  var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatNestedTreeNode);

  function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
    var _this2;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatNestedTreeNode);

    _this2 = _super3.call(this, _elementRef, _tree, _differs);
    _this2._elementRef = _elementRef;
    _this2._tree = _tree;
    _this2._differs = _differs;
    _this2._disabled = false;
    _this2.tabIndex = Number(tabIndex) || 0; // The classes are directly added here instead of in the host property because classes on
    // the host property are not inherited with View Engine. It is not set as a @HostBinding because
    // it is not set by the time it's children nodes try to read the class from it.
    // TODO: move to host after View Engine deprecation

    _this2._elementRef.nativeElement.classList.add('mat-nested-tree-node');

    return _this2;
  }
  /** Whether the node is disabled. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatNestedTreeNode, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** Tabindex for the node. */

  }, {
    key: "tabIndex",
    get: function get() {
      return this.disabled ? -1 : this._tabIndex;
    },
    set: function set(value) {
      // If the specified tabIndex value is null or undefined, fall back to the default value.
      this._tabIndex = value != null ? value : 0;
    } // This is a workaround for https://github.com/angular/angular/issues/19145
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #19145 is fixed

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatNestedTreeNode.prototype), "ngOnInit", this).call(this);
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatNestedTreeNode.prototype), "ngDoCheck", this).call(this);
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatNestedTreeNode.prototype), "ngAfterContentInit", this).call(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
    }
  }]);

  return MatNestedTreeNode;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkNestedTreeNode"]);

MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) {
  return new (t || MatNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinjectAttribute"]('tabindex'));
};

MatNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatNestedTreeNode,
  selectors: [["mat-nested-tree-node"]],
  inputs: {
    role: "role",
    disabled: "disabled",
    tabIndex: "tabIndex",
    node: ["matNestedTreeNode", "node"]
  },
  exportAs: ["matNestedTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkNestedTreeNode"],
    useExisting: MatNestedTreeNode
  }, {
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNode"],
    useExisting: MatNestedTreeNode
  }, {
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CDK_TREE_NODE_OUTLET_NODE"],
    useExisting: MatNestedTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

MatNestedTreeNode.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["IterableDiffers"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Attribute"],
      args: ['tabindex']
    }]
  }];
};

MatNestedTreeNode.propDecorators = {
  node: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matNestedTreeNode']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatNestedTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-nested-tree-node',
      exportAs: 'matNestedTreeNode',
      inputs: ['role', 'disabled', 'tabIndex'],
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkNestedTreeNode"],
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNode"],
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CDK_TREE_NODE_OUTLET_NODE"],
        useExisting: MatNestedTreeNode
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["IterableDiffers"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Attribute"],
        args: ['tabindex']
      }]
    }];
  }, {
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    node: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matNestedTreeNode']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wrapper for the CdkTree padding with Material design styles.
 */


var MatTreeNodePadding = /*#__PURE__*/function (_CdkTreeNodePadding) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTreeNodePadding, _CdkTreeNodePadding);

  var _super4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTreeNodePadding);

  function MatTreeNodePadding() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeNodePadding);

    return _super4.apply(this, arguments);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTreeNodePadding, [{
    key: "level",
    get:
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    function get() {
      return this._level;
    },
    set: function set(value) {
      this._setLevelInput(value);
    }
    /** The indent for each level. Default number 40px from material design menu sub-menu spec. */

  }, {
    key: "indent",
    get: function get() {
      return this._indent;
    },
    set: function set(indent) {
      this._setIndentInput(indent);
    }
  }]);

  return MatTreeNodePadding;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodePadding"]);

MatTreeNodePadding.ɵfac = function MatTreeNodePadding_Factory(t) {
  return ɵMatTreeNodePadding_BaseFactory(t || MatTreeNodePadding);
};

MatTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatTreeNodePadding,
  selectors: [["", "matTreeNodePadding", ""]],
  inputs: {
    level: ["matTreeNodePadding", "level"],
    indent: ["matTreeNodePaddingIndent", "indent"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodePadding"],
    useExisting: MatTreeNodePadding
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
MatTreeNodePadding.propDecorators = {
  level: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matTreeNodePadding']
  }],
  indent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matTreeNodePaddingIndent']
  }]
};
var ɵMatTreeNodePadding_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTreeNodePadding);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTreeNodePadding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matTreeNodePadding]',
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodePadding"],
        useExisting: MatTreeNodePadding
      }]
    }]
  }], null, {
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matTreeNodePadding']
    }],
    indent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matTreeNodePaddingIndent']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */


var MatTreeNodeOutlet = function MatTreeNodeOutlet(viewContainer, _node) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeNodeOutlet);

  this.viewContainer = viewContainer;
  this._node = _node;
};

MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) {
  return new (t || MatTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CDK_TREE_NODE_OUTLET_NODE"], 8));
};

MatTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatTreeNodeOutlet,
  selectors: [["", "matTreeNodeOutlet", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeOutlet"],
    useExisting: MatTreeNodeOutlet
  }])]
});

MatTreeNodeOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CDK_TREE_NODE_OUTLET_NODE"]]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTreeNodeOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matTreeNodeOutlet]',
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeOutlet"],
        useExisting: MatTreeNodeOutlet
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewContainerRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CDK_TREE_NODE_OUTLET_NODE"]]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wrapper for the CdkTable with Material design styles.
 */


var MatTree = /*#__PURE__*/function (_CdkTree) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTree, _CdkTree);

  var _super5 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTree);

  function MatTree() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTree);

    return _super5.apply(this, arguments);
  }

  return MatTree;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"]);

MatTree.ɵfac = function MatTree_Factory(t) {
  return ɵMatTree_BaseFactory(t || MatTree);
};

MatTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatTree,
  selectors: [["mat-tree"]],
  viewQuery: function MatTree_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](MatTreeNodeOutlet, 3);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "mat-tree", "cdk-tree"],
  exportAs: ["matTree"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"],
    useExisting: MatTree
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["matTreeNodeOutlet", ""]],
  template: function MatTree_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [MatTreeNodeOutlet],
  styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],
  encapsulation: 2
});
MatTree.propDecorators = {
  _nodeOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: [MatTreeNodeOutlet, {
      static: true
    }]
  }]
};
var ɵMatTree_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTree);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTree, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-tree',
      exportAs: 'matTree',
      template: "<ng-container matTreeNodeOutlet></ng-container>",
      host: {
        // The 'cdk-tree' class needs to be included here because classes set in the host in the
        // parent class are not inherited with View Engine. The 'cdk-tree' class in CdkTreeNode has
        // to be set in the host because:
        // if it is set as a @HostBinding it is not set by the time the tree nodes try to read the
        // class from it.
        // the ElementRef is not available in the constructor so the class can't be applied directly
        // without a breaking constructor change.
        'class': 'mat-tree cdk-tree',
        'role': 'tree'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      // See note on CdkTree for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].Default,
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTree"],
        useExisting: MatTree
      }],
      styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"]
    }]
  }], null, {
    _nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: [MatTreeNodeOutlet, {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 */
// tslint:disable-next-line: coercion-types


var MatTreeNodeToggle = /*#__PURE__*/function (_CdkTreeNodeToggle) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTreeNodeToggle, _CdkTreeNodeToggle);

  var _super6 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTreeNodeToggle);

  function MatTreeNodeToggle() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeNodeToggle);

    return _super6.apply(this, arguments);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTreeNodeToggle, [{
    key: "recursive",
    get: function get() {
      return this._recursive;
    },
    set: function set(value) {
      // TODO: when we remove support for ViewEngine, change this setter to an input
      // alias in the decorator metadata.
      this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
  }]);

  return MatTreeNodeToggle;
}(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeToggle"]);

MatTreeNodeToggle.ɵfac = function MatTreeNodeToggle_Factory(t) {
  return ɵMatTreeNodeToggle_BaseFactory(t || MatTreeNodeToggle);
};

MatTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatTreeNodeToggle,
  selectors: [["", "matTreeNodeToggle", ""]],
  inputs: {
    recursive: ["matTreeNodeToggleRecursive", "recursive"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeToggle"],
    useExisting: MatTreeNodeToggle
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});
MatTreeNodeToggle.propDecorators = {
  recursive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matTreeNodeToggleRecursive']
  }]
};
var ɵMatTreeNodeToggle_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatTreeNodeToggle);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTreeNodeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matTreeNodeToggle]',
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeNodeToggle"],
        useExisting: MatTreeNodeToggle
      }]
    }]
  }], null, {
    recursive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matTreeNodeToggleRecursive']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];

var MatTreeModule = function MatTreeModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeModule);
};

MatTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatTreeModule
});
MatTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatTreeModule_Factory(t) {
    return new (t || MatTreeModule)();
  },
  imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatTreeModule, {
    declarations: function declarations() {
      return [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
    },
    imports: function imports() {
      return [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MAT_TREE_DIRECTIVES],
      declarations: MAT_TREE_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 */


var MatTreeFlattener = /*#__PURE__*/function () {
  function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeFlattener);

    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTreeFlattener, [{
    key: "_flattenNode",
    value: function _flattenNode(node, level, resultNodes, parentMap) {
      var _this3 = this;

      var flatNode = this.transformFunction(node, level);
      resultNodes.push(flatNode);

      if (this.isExpandable(flatNode)) {
        var childrenNodes = this.getChildren(node);

        if (childrenNodes) {
          if (Array.isArray(childrenNodes)) {
            this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
          } else {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function (children) {
              _this3._flattenChildren(children, level, resultNodes, parentMap);
            });
          }
        }
      }

      return resultNodes;
    }
  }, {
    key: "_flattenChildren",
    value: function _flattenChildren(children, level, resultNodes, parentMap) {
      var _this4 = this;

      children.forEach(function (child, index) {
        var childParentMap = parentMap.slice();
        childParentMap.push(index != children.length - 1);

        _this4._flattenNode(child, level + 1, resultNodes, childParentMap);
      });
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     */

  }, {
    key: "flattenNodes",
    value: function flattenNodes(structuredData) {
      var _this5 = this;

      var resultNodes = [];
      structuredData.forEach(function (node) {
        return _this5._flattenNode(node, 0, resultNodes, []);
      });
      return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     */

  }, {
    key: "expandFlattenedNodes",
    value: function expandFlattenedNodes(nodes, treeControl) {
      var _this6 = this;

      var results = [];
      var currentExpand = [];
      currentExpand[0] = true;
      nodes.forEach(function (node) {
        var expand = true;

        for (var i = 0; i <= _this6.getLevel(node); i++) {
          expand = expand && currentExpand[i];
        }

        if (expand) {
          results.push(node);
        }

        if (_this6.isExpandable(node)) {
          currentExpand[_this6.getLevel(node) + 1] = treeControl.isExpanded(node);
        }
      });
      return results;
    }
  }]);

  return MatTreeFlattener;
}();
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 */


var MatTreeFlatDataSource = /*#__PURE__*/function (_DataSource) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTreeFlatDataSource, _DataSource);

  var _super7 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTreeFlatDataSource);

  function MatTreeFlatDataSource(_treeControl, _treeFlattener) {
    var _this7;

    var initialData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeFlatDataSource);

    _this7 = _super7.call(this);
    _this7._treeControl = _treeControl;
    _this7._treeFlattener = _treeFlattener;
    _this7._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"]([]);
    _this7._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"]([]);
    _this7._data = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"](initialData);
    return _this7;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTreeFlatDataSource, [{
    key: "data",
    get: function get() {
      return this._data.value;
    },
    set: function set(value) {
      this._data.next(value);

      this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

      this._treeControl.dataNodes = this._flattenedData.value;
    }
  }, {
    key: "connect",
    value: function connect(collectionViewer) {
      var _this8 = this;

      var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
      return rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"].apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
        _this8._expandedData.next(_this8._treeFlattener.expandFlattenedNodes(_this8._flattenedData.value, _this8._treeControl));

        return _this8._expandedData.value;
      }));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {// no op
    }
  }]);

  return MatTreeFlatDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["DataSource"]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 */


var MatTreeNestedDataSource = /*#__PURE__*/function (_DataSource2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTreeNestedDataSource, _DataSource2);

  var _super8 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(MatTreeNestedDataSource);

  function MatTreeNestedDataSource() {
    var _this9;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTreeNestedDataSource);

    _this9 = _super8.apply(this, arguments);
    _this9._data = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"]([]);
    return _this9;
  }
  /**
   * Data for the nested tree
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTreeNestedDataSource, [{
    key: "data",
    get: function get() {
      return this._data.value;
    },
    set: function set(value) {
      this._data.next(value);
    }
  }, {
    key: "connect",
    value: function connect(collectionViewer) {
      var _this10 = this;

      return rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"].apply(void 0, [collectionViewer.viewChange, this._data]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
        return _this10.data;
      }));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {// no op
    }
  }]);

  return MatTreeNestedDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["DataSource"]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "FKr1":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
  \**********************************************************************/
/*! exports provided: AnimationCurves, AnimationDurations, DateAdapter, ErrorStateMatcher, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MatCommonModule, MatLine, MatLineModule, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NativeDateAdapter, NativeDateModule, RippleRef, RippleRenderer, ShowOnDirtyErrorStateMatcher, VERSION, _MatOptgroupBase, _MatOptionBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵ0, ɵangular_material_src_material_core_core_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTGROUP", function() { return MAT_OPTGROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatOptgroupBase", function() { return _MatOptgroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatOptionBase", function() { return _MatOptionBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return setLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk */ "xz+E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of Angular Material. */





var _c0 = ["*", [["mat-option"], ["ng-container"]]];
var _c1 = ["*", "mat-option, ng-container"];

function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}

function MatOption_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
  }
}

var _c2 = ["*"];
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["Version"]('11.2.3');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

var AnimationCurves = function AnimationCurves() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AnimationCurves);
};

AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */

var AnimationDurations = function AnimationDurations() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AnimationDurations);
};

AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points

var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["Version"]('11.2.3');
/** @docs-private */

function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */


var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('mat-sanity-checks', {
  providedIn: 'root',
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */

var MatCommonModule = /*#__PURE__*/function () {
  function MatCommonModule(highContrastModeDetector, sanityChecks, document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatCommonModule);

    /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
    this._hasDoneGlobalChecks = false;
    this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
    // in MatCommonModule.

    highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
    // throws an error if we use the `SanityChecks` type directly.


    this._sanityChecks = sanityChecks;

    if (!this._hasDoneGlobalChecks) {
      this._checkDoctypeIsDefined();

      this._checkThemeIsPresent();

      this._checkCdkVersionMatch();

      this._hasDoneGlobalChecks = true;
    }
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MatCommonModule, [{
    key: "_getWindow",
    value: function _getWindow() {
      var win = this._document.defaultView || window;
      return typeof win === 'object' && win ? win : null;
    }
    /** Whether any sanity checks are enabled. */

  }, {
    key: "_checksAreEnabled",
    value: function _checksAreEnabled() {
      // TODO(crisbeto): we can't use `ngDevMode` here yet, because ViewEngine apps might not support
      // it. Since these checks can have performance implications and they aren't tree shakeable
      // in their current form, we can leave the `isDevMode` check in for now.
      // tslint:disable-next-line:ban
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])() && !this._isTestEnv();
    }
    /** Whether the code is running in tests. */

  }, {
    key: "_isTestEnv",
    value: function _isTestEnv() {
      var window = this._getWindow();

      return window && (window.__karma__ || window.jasmine);
    }
  }, {
    key: "_checkDoctypeIsDefined",
    value: function _checkDoctypeIsDefined() {
      var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.doctype);

      if (isEnabled && !this._document.doctype) {
        console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
      }
    }
  }, {
    key: "_checkThemeIsPresent",
    value: function _checkThemeIsPresent() {
      // We need to assert that the `body` is defined, because these checks run very early
      // and the `body` won't be defined if the consumer put their scripts in the `head`.
      var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !this._sanityChecks.theme;

      if (isDisabled || !this._document.body || typeof getComputedStyle !== 'function') {
        return;
      }

      var testElement = this._document.createElement('div');

      testElement.classList.add('mat-theme-loaded-marker');

      this._document.body.appendChild(testElement);

      var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
      // Firefox, the computed style is null if an application is running inside of a hidden iframe.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

      if (computedStyle && computedStyle.display !== 'none') {
        console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
      }

      this._document.body.removeChild(testElement);
    }
    /** Checks whether the material version matches the cdk version */

  }, {
    key: "_checkCdkVersionMatch",
    value: function _checkCdkVersionMatch() {
      var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.version);

      if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_10__["VERSION"].full) {
        console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_10__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
      }
    }
  }]);

  return MatCommonModule;
}();

MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatCommonModule
});
MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatCommonModule_Factory(t) {
    return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]));
  },
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]]
});

MatCommonModule.ctorParameters = function () {
  return [{
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["HighContrastModeDetector"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MATERIAL_SANITY_CHECKS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
    }]
  }];
};

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatCommonModule, {
    imports: function imports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["BidiModule"]]
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["HighContrastModeDetector"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MATERIAL_SANITY_CHECKS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with a `disabled` property. */


function mixinDisabled(base) {
  return /*#__PURE__*/function (_base) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, _base);

    var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(_class);

    function _class() {
      var _this;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this._disabled = false;
      return _this;
    }

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, [{
      key: "disabled",
      get: function get() {
        return this._disabled;
      },
      set: function set(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
      }
    }]);

    return _class;
  }(base);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with a `color` property. */


function mixinColor(base, defaultColor) {
  return /*#__PURE__*/function (_base2) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_class2, _base2);

    var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2);

    function _class2() {
      var _this2;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _class2);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _super2.call.apply(_super2, [this].concat(args));
      _this2.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

      _this2.color = defaultColor;
      return _this2;
    }

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2, [{
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(value) {
        var colorPalette = value || this.defaultColor;

        if (colorPalette !== this._color) {
          if (this._color) {
            this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
          }

          if (colorPalette) {
            this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
          }

          this._color = colorPalette;
        }
      }
    }]);

    return _class2;
  }(base);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with a `disableRipple` property. */


function mixinDisableRipple(base) {
  var Mixin = /*#__PURE__*/function (_base3) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Mixin, _base3);

    var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Mixin);

    function Mixin() {
      var _this3;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Mixin);

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _this3 = _super3.call.apply(_super3, [this].concat(args));
      _this3._disableRipple = false;
      return _this3;
    }
    /** Whether the ripple effect is disabled or not. */


    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Mixin, [{
      key: "disableRipple",
      get: function get() {
        return this._disableRipple;
      },
      set: function set(value) {
        this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
      }
    }]);

    return Mixin;
  }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
  // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
  // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


  return Mixin;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with a `tabIndex` property. */


function mixinTabIndex(base) {
  var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // Note: We cast `base` to `unknown` and then `Constructor`. It could be an abstract class,
  // but given we `extend` it from another class, we can assume a constructor being accessible.
  var Mixin = /*#__PURE__*/function (_base4) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Mixin, _base4);

    var _super4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Mixin);

    function Mixin() {
      var _this4;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Mixin);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      _this4 = _super4.call.apply(_super4, [this].concat(args));
      _this4._tabIndex = defaultTabIndex;
      _this4.defaultTabIndex = defaultTabIndex;
      return _this4;
    }

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Mixin, [{
      key: "tabIndex",
      get: function get() {
        return this.disabled ? -1 : this._tabIndex;
      },
      set: function set(value) {
        // If the specified tabIndex value is null or undefined, fall back to the default value.
        this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceNumberProperty"])(value) : this.defaultTabIndex;
      }
    }]);

    return Mixin;
  }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
  // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
  // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


  return Mixin;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 */


function mixinErrorState(base) {
  return /*#__PURE__*/function (_base5) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_class3, _base5);

    var _super5 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(_class3);

    function _class3() {
      var _this5;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _class3);

      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      _this5 = _super5.call.apply(_super5, [this].concat(args));
      /** Whether the component is in an error state. */

      _this5.errorState = false;
      /**
       * Stream that emits whenever the state of the input changes such that the wrapping
       * `MatFormField` needs to run change detection.
       */

      _this5.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
      return _this5;
    }

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_class3, [{
      key: "updateErrorState",
      value: function updateErrorState() {
        var oldState = this.errorState;
        var parent = this._parentFormGroup || this._parentForm;
        var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        var control = this.ngControl ? this.ngControl.control : null;
        var newState = matcher.isErrorState(control, parent);

        if (newState !== oldState) {
          this.errorState = newState;
          this.stateChanges.next();
        }
      }
    }]);

    return _class3;
  }(base);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


function mixinInitialized(base) {
  return /*#__PURE__*/function (_base6) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_class4, _base6);

    var _super6 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(_class4);

    function _class4() {
      var _this6;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _class4);

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      _this6 = _super6.call.apply(_super6, [this].concat(args));
      /** Whether this directive has been marked as initialized. */

      _this6._isInitialized = false;
      /**
       * List of subscribers that subscribed before the directive was initialized. Should be notified
       * during _markInitialized. Set to null after pending subscribers are notified, and should
       * not expect to be populated after.
       */

      _this6._pendingSubscribers = [];
      /**
       * Observable stream that emits when the directive initializes. If already initialized, the
       * subscriber is stored to be notified once _markInitialized is called.
       */

      _this6.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"](function (subscriber) {
        // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
        // when _markInitialized is called.
        if (_this6._isInitialized) {
          _this6._notifySubscriber(subscriber);
        } else {
          _this6._pendingSubscribers.push(subscriber);
        }
      });
      return _this6;
    }
    /**
     * Marks the state as initialized and notifies pending subscribers. Should be called at the end
     * of ngOnInit.
     * @docs-private
     */


    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_class4, [{
      key: "_markInitialized",
      value: function _markInitialized() {
        if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
        }

        this._isInitialized = true;

        this._pendingSubscribers.forEach(this._notifySubscriber);

        this._pendingSubscribers = null;
      }
      /** Emits and completes the subscriber stream (should only emit once). */

    }, {
      key: "_notifySubscriber",
      value: function _notifySubscriber(subscriber) {
        subscriber.next();
        subscriber.complete();
      }
    }]);

    return _class4;
  }(base);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for datepicker that can be used to override default locale code. */


var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: MAT_DATE_LOCALE_FACTORY
});
/** @docs-private */

function MAT_DATE_LOCALE_FACTORY() {
  return Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_7__["LOCALE_ID"]);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */


var DateAdapter = /*#__PURE__*/function () {
  function DateAdapter() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, DateAdapter);

    this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** A stream that emits when the locale changes. */

    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DateAdapter, [{
    key: "getValidDateOrNull",
    value: function getValidDateOrNull(obj) {
      return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
    }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */

  }, {
    key: "deserialize",
    value: function deserialize(value) {
      if (value == null || this.isDateInstance(value) && this.isValid(value)) {
        return value;
      }

      return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */

  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this.locale = locale;

      this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */

  }, {
    key: "compareDate",
    value: function compareDate(first, second) {
      return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */

  }, {
    key: "sameDate",
    value: function sameDate(first, second) {
      if (first && second) {
        var firstValid = this.isValid(first);
        var secondValid = this.isValid(second);

        if (firstValid && secondValid) {
          return !this.compareDate(first, second);
        }

        return firstValid == secondValid;
      }

      return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */

  }, {
    key: "clampDate",
    value: function clampDate(date, min, max) {
      if (min && this.compareDate(date, min) < 0) {
        return min;
      }

      if (max && this.compareDate(date, max) > 0) {
        return max;
      }

      return date;
    }
  }]);

  return DateAdapter;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('mat-date-formats');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): Remove when we no longer support safari 9.

/** Whether the browser supports the Intl API. */

var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687

try {
  SUPPORTS_INTL_API = typeof Intl != 'undefined';
} catch (_a) {
  SUPPORTS_INTL_API = false;
}
/** The default month names to use if Intl API is not available. */


var DEFAULT_MONTH_NAMES = {
  'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};

var ɵ0 = function ɵ0(i) {
  return String(i + 1);
};
/** The default date names to use if Intl API is not available. */


var DEFAULT_DATE_NAMES = range(31, ɵ0);
/** The default day of the week names to use if Intl API is not available. */

var DEFAULT_DAY_OF_WEEK_NAMES = {
  'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */

var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */

function range(length, valueFunction) {
  var valuesArray = Array(length);

  for (var i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }

  return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */


var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NativeDateAdapter, _DateAdapter);

  var _super7 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NativeDateAdapter);

  function NativeDateAdapter(matDateLocale, platform) {
    var _thisSuper, _this7;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, NativeDateAdapter);

    _this7 = _super7.call(this);
    /**
     * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
     * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
     * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
     * will produce `'8/13/1800'`.
     *
     * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
     * getting the string representation of a Date object from its utc representation. We're keeping
     * it here for sometime, just for precaution, in case we decide to revert some of these changes
     * though.
     */

    _this7.useUtcForDisplay = true;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__["default"])((_thisSuper = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this7), Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(NativeDateAdapter.prototype)), "setLocale", _thisSuper).call(_thisSuper, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


    _this7.useUtcForDisplay = !platform.TRIDENT;
    _this7._clampDate = platform.TRIDENT || platform.EDGE;
    return _this7;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NativeDateAdapter, [{
    key: "getYear",
    value: function getYear(date) {
      return date.getFullYear();
    }
  }, {
    key: "getMonth",
    value: function getMonth(date) {
      return date.getMonth();
    }
  }, {
    key: "getDate",
    value: function getDate(date) {
      return date.getDate();
    }
  }, {
    key: "getDayOfWeek",
    value: function getDayOfWeek(date) {
      return date.getDay();
    }
  }, {
    key: "getMonthNames",
    value: function getMonthNames(style) {
      var _this8 = this;

      if (SUPPORTS_INTL_API) {
        var dtf = new Intl.DateTimeFormat(this.locale, {
          month: style,
          timeZone: 'utc'
        });
        return range(12, function (i) {
          return _this8._stripDirectionalityCharacters(_this8._format(dtf, new Date(2017, i, 1)));
        });
      }

      return DEFAULT_MONTH_NAMES[style];
    }
  }, {
    key: "getDateNames",
    value: function getDateNames() {
      var _this9 = this;

      if (SUPPORTS_INTL_API) {
        var dtf = new Intl.DateTimeFormat(this.locale, {
          day: 'numeric',
          timeZone: 'utc'
        });
        return range(31, function (i) {
          return _this9._stripDirectionalityCharacters(_this9._format(dtf, new Date(2017, 0, i + 1)));
        });
      }

      return DEFAULT_DATE_NAMES;
    }
  }, {
    key: "getDayOfWeekNames",
    value: function getDayOfWeekNames(style) {
      var _this10 = this;

      if (SUPPORTS_INTL_API) {
        var dtf = new Intl.DateTimeFormat(this.locale, {
          weekday: style,
          timeZone: 'utc'
        });
        return range(7, function (i) {
          return _this10._stripDirectionalityCharacters(_this10._format(dtf, new Date(2017, 0, i + 1)));
        });
      }

      return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
  }, {
    key: "getYearName",
    value: function getYearName(date) {
      if (SUPPORTS_INTL_API) {
        var dtf = new Intl.DateTimeFormat(this.locale, {
          year: 'numeric',
          timeZone: 'utc'
        });
        return this._stripDirectionalityCharacters(this._format(dtf, date));
      }

      return String(this.getYear(date));
    }
  }, {
    key: "getFirstDayOfWeek",
    value: function getFirstDayOfWeek() {
      // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
      return 0;
    }
  }, {
    key: "getNumDaysInMonth",
    value: function getNumDaysInMonth(date) {
      return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
  }, {
    key: "clone",
    value: function clone(date) {
      return new Date(date.getTime());
    }
  }, {
    key: "createDate",
    value: function createDate(year, month, date) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
          throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
        }

        if (date < 1) {
          throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
        }
      }

      var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


      if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
      }

      return result;
    }
  }, {
    key: "today",
    value: function today() {
      return new Date();
    }
  }, {
    key: "parse",
    value: function parse(value) {
      // We have no way using the native JS Date to set the parse format or locale, so we ignore these
      // parameters.
      if (typeof value == 'number') {
        return new Date(value);
      }

      return value ? new Date(Date.parse(value)) : null;
    }
  }, {
    key: "format",
    value: function format(date, displayFormat) {
      if (!this.isValid(date)) {
        throw Error('NativeDateAdapter: Cannot format invalid date.');
      }

      if (SUPPORTS_INTL_API) {
        // On IE and Edge the i18n API will throw a hard error that can crash the entire app
        // if we attempt to format a date whose year is less than 1 or greater than 9999.
        if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
          date = this.clone(date);
          date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
        }

        displayFormat = Object.assign(Object.assign({}, displayFormat), {
          timeZone: 'utc'
        });
        var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
        return this._stripDirectionalityCharacters(this._format(dtf, date));
      }

      return this._stripDirectionalityCharacters(date.toDateString());
    }
  }, {
    key: "addCalendarYears",
    value: function addCalendarYears(date, years) {
      return this.addCalendarMonths(date, years * 12);
    }
  }, {
    key: "addCalendarMonths",
    value: function addCalendarMonths(date, months) {
      var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
      // month. In this case we want to go to the last day of the desired month.
      // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
      // guarantee this.


      if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
        newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
      }

      return newDate;
    }
  }, {
    key: "addCalendarDays",
    value: function addCalendarDays(date, days) {
      return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
  }, {
    key: "toIso8601",
    value: function toIso8601(date) {
      return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */

  }, {
    key: "deserialize",
    value: function deserialize(value) {
      if (typeof value === 'string') {
        if (!value) {
          return null;
        } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
        // string is the right format first.


        if (ISO_8601_REGEX.test(value)) {
          var date = new Date(value);

          if (this.isValid(date)) {
            return date;
          }
        }
      }

      return Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
    }
  }, {
    key: "isDateInstance",
    value: function isDateInstance(obj) {
      return obj instanceof Date;
    }
  }, {
    key: "isValid",
    value: function isValid(date) {
      return !isNaN(date.getTime());
    }
  }, {
    key: "invalid",
    value: function invalid() {
      return new Date(NaN);
    }
    /** Creates a date but allows the month and date to overflow. */

  }, {
    key: "_createDateWithOverflow",
    value: function _createDateWithOverflow(year, month, date) {
      // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
      // To work around this we use `setFullYear` and `setHours` instead.
      var d = new Date();
      d.setFullYear(year, month, date);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    /**
     * Pads a number to make it two digits.
     * @param n The number to pad.
     * @returns The padded number.
     */

  }, {
    key: "_2digit",
    value: function _2digit(n) {
      return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param str The string to strip direction characters from.
     * @returns The stripped string.
     */

  }, {
    key: "_stripDirectionalityCharacters",
    value: function _stripDirectionalityCharacters(str) {
      return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param date Date from which we want to get the string representation according to dtf
     * @returns A Date object with its UTC representation based on the passed in date info
     */

  }, {
    key: "_format",
    value: function _format(dtf, date) {
      // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
      // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
      var d = new Date();
      d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
      return dtf.format(d);
    }
  }]);

  return NativeDateAdapter;
}(DateAdapter);

NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
  return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]));
};

NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: NativeDateAdapter,
  factory: NativeDateAdapter.ɵfac
});

NativeDateAdapter.ctorParameters = function () {
  return [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_DATE_LOCALE]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NativeDateAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], function () {
    return [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_DATE_LOCALE]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    }
  }
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var NativeDateModule = function NativeDateModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, NativeDateModule);
};

NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: NativeDateModule
});
NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function NativeDateModule_Factory(t) {
    return new (t || NativeDateModule)();
  },
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }],
  imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NativeDateModule, {
    imports: function imports() {
      return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](NativeDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"]],
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();

var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

var MatNativeDateModule = function MatNativeDateModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatNativeDateModule);
};

MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatNativeDateModule
});
MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatNativeDateModule_Factory(t) {
    return new (t || MatNativeDateModule)();
  },
  providers: [{
    provide: MAT_DATE_FORMATS,
    useValue: ɵ0$1
  }],
  imports: [[NativeDateModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
    imports: [NativeDateModule]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatNativeDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [NativeDateModule],
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: ɵ0$1
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Error state matcher that matches when a control is invalid and dirty. */


var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
  function ShowOnDirtyErrorStateMatcher() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ShowOnDirtyErrorStateMatcher);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ShowOnDirtyErrorStateMatcher, [{
    key: "isErrorState",
    value: function isErrorState(control, form) {
      return !!(control && control.invalid && (control.dirty || form && form.submitted));
    }
  }]);

  return ShowOnDirtyErrorStateMatcher;
}();

ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || ShowOnDirtyErrorStateMatcher)();
};

ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: ShowOnDirtyErrorStateMatcher,
  factory: ShowOnDirtyErrorStateMatcher.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"]
  }], null, null);
})();
/** Provider that defines how form controls behave with regards to displaying error messages. */


var ErrorStateMatcher = /*#__PURE__*/function () {
  function ErrorStateMatcher() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ErrorStateMatcher);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ErrorStateMatcher, [{
    key: "isErrorState",
    value: function isErrorState(control, form) {
      return !!(control && control.invalid && (control.touched || form && form.submitted));
    }
  }]);

  return ErrorStateMatcher;
}();

ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
  return new (t || ErrorStateMatcher)();
};

ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"])({
  factory: function ErrorStateMatcher_Factory() {
    return new ErrorStateMatcher();
  },
  token: ErrorStateMatcher,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */


var MatLine = function MatLine() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatLine);
};

MatLine.ɵfac = function MatLine_Factory(t) {
  return new (t || MatLine)();
};

MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatLine, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[mat-line], [matLine]',
      host: {
        'class': 'mat-line'
      }
    }]
  }], null, null);
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */


function setLines(lines, element) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["startWith"])(lines)).subscribe(function (_ref) {
    var length = _ref.length;
    setClass(element, "".concat(prefix, "-2-line"), false);
    setClass(element, "".concat(prefix, "-3-line"), false);
    setClass(element, "".concat(prefix, "-multi-line"), false);

    if (length === 2 || length === 3) {
      setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
    } else if (length > 3) {
      setClass(element, "".concat(prefix, "-multi-line"), true);
    }
  });
}
/** Adds or removes a class from an element. */


function setClass(element, className, isAdd) {
  var classList = element.nativeElement.classList;
  isAdd ? classList.add(className) : classList.remove(className);
}

var MatLineModule = function MatLineModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatLineModule);
};

MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatLineModule
});
MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatLineModule_Factory(t) {
    return new (t || MatLineModule)();
  },
  imports: [[MatCommonModule], MatCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatLineModule, {
    declarations: [MatLine],
    imports: [MatCommonModule],
    exports: [MatLine, MatCommonModule]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatLineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [MatCommonModule],
      exports: [MatLine, MatCommonModule],
      declarations: [MatLine]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reference to a previously launched ripple element.
 */


var RippleRef = /*#__PURE__*/function () {
  function RippleRef(_renderer,
  /** Reference to the ripple HTML element. */
  element,
  /** Ripple configuration used for the ripple. */
  config) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, RippleRef);

    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    /** Current state of the ripple. */

    this.state = 3
    /* HIDDEN */
    ;
  }
  /** Fades out the ripple element. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(RippleRef, [{
    key: "fadeOut",
    value: function fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  }]);

  return RippleRef;
}();
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */


var defaultRippleAnimationConfig = {
  enterDuration: 450,
  exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */

var ignoreMouseEventsTimeout = 800;
/** Options that apply to all the event listeners that are bound by the ripple renderer. */

var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["normalizePassiveListenerOptions"])({
  passive: true
});
/** Events that signal that the pointer is down. */

var pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */

var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */

var RippleRenderer = /*#__PURE__*/function () {
  function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, RippleRenderer);

    this._target = _target;
    this._ngZone = _ngZone;
    /** Whether the pointer is currently down or not. */

    this._isPointerDown = false;
    /** Set of currently active ripple references. */

    this._activeRipples = new Set();
    /** Whether pointer-up event listeners have been registered. */

    this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

    if (platform.isBrowser) {
      this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceElement"])(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(RippleRenderer, [{
    key: "fadeInRipple",
    value: function fadeInRipple(x, y) {
      var _this11 = this;

      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

      var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

      if (config.centered) {
        x = containerRect.left + containerRect.width / 2;
        y = containerRect.top + containerRect.height / 2;
      }

      var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
      var offsetX = x - containerRect.left;
      var offsetY = y - containerRect.top;
      var duration = animationConfig.enterDuration;
      var ripple = document.createElement('div');
      ripple.classList.add('mat-ripple-element');
      ripple.style.left = "".concat(offsetX - radius, "px");
      ripple.style.top = "".concat(offsetY - radius, "px");
      ripple.style.height = "".concat(radius * 2, "px");
      ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
      // set, the default color will be applied through the ripple theme styles.

      if (config.color != null) {
        ripple.style.backgroundColor = config.color;
      }

      ripple.style.transitionDuration = "".concat(duration, "ms");

      this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
      // ripple elements. This is critical because then the `scale` would not animate properly.


      enforceStyleRecalculation(ripple);
      ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

      var rippleRef = new RippleRef(this, ripple, config);
      rippleRef.state = 0
      /* FADING_IN */
      ; // Add the ripple reference to the list of all active ripples.

      this._activeRipples.add(rippleRef);

      if (!config.persistent) {
        this._mostRecentTransientRipple = rippleRef;
      } // Wait for the ripple element to be completely faded in.
      // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


      this._runTimeoutOutsideZone(function () {
        var isMostRecentTransientRipple = rippleRef === _this11._mostRecentTransientRipple;
        rippleRef.state = 1
        /* VISIBLE */
        ; // When the timer runs out while the user has kept their pointer down, we want to
        // keep only the persistent ripples and the latest transient ripple. We do this,
        // because we don't want stacked transient ripples to appear after their enter
        // animation has finished.

        if (!config.persistent && (!isMostRecentTransientRipple || !_this11._isPointerDown)) {
          rippleRef.fadeOut();
        }
      }, duration);

      return rippleRef;
    }
    /** Fades out a ripple reference. */

  }, {
    key: "fadeOutRipple",
    value: function fadeOutRipple(rippleRef) {
      var wasActive = this._activeRipples.delete(rippleRef);

      if (rippleRef === this._mostRecentTransientRipple) {
        this._mostRecentTransientRipple = null;
      } // Clear out the cached bounding rect if we have no more ripples.


      if (!this._activeRipples.size) {
        this._containerRect = null;
      } // For ripples that are not active anymore, don't re-run the fade-out animation.


      if (!wasActive) {
        return;
      }

      var rippleEl = rippleRef.element;
      var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
      rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
      rippleEl.style.opacity = '0';
      rippleRef.state = 2
      /* FADING_OUT */
      ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

      this._runTimeoutOutsideZone(function () {
        rippleRef.state = 3
        /* HIDDEN */
        ;
        rippleEl.parentNode.removeChild(rippleEl);
      }, animationConfig.exitDuration);
    }
    /** Fades out all currently active ripples. */

  }, {
    key: "fadeOutAll",
    value: function fadeOutAll() {
      this._activeRipples.forEach(function (ripple) {
        return ripple.fadeOut();
      });
    }
    /** Sets up the trigger event listeners */

  }, {
    key: "setupTriggerEvents",
    value: function setupTriggerEvents(elementOrElementRef) {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceElement"])(elementOrElementRef);

      if (!element || element === this._triggerElement) {
        return;
      } // Remove all previously registered event listeners from the trigger element.


      this._removeTriggerEvents();

      this._triggerElement = element;

      this._registerEvents(pointerDownEvents);
    }
    /**
     * Handles all registered events.
     * @docs-private
     */

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'mousedown') {
        this._onMousedown(event);
      } else if (event.type === 'touchstart') {
        this._onTouchStart(event);
      } else {
        this._onPointerUp();
      } // If pointer-up events haven't been registered yet, do so now.
      // We do this on-demand in order to reduce the total number of event listeners
      // registered by the ripples, which speeds up the rendering time for large UIs.


      if (!this._pointerUpEventsRegistered) {
        this._registerEvents(pointerUpEvents);

        this._pointerUpEventsRegistered = true;
      }
    }
    /** Function being called whenever the trigger is being pressed using mouse. */

  }, {
    key: "_onMousedown",
    value: function _onMousedown(event) {
      // Screen readers will fire fake mouse events for space/enter. Skip launching a
      // ripple in this case for consistency with the non-screen-reader experience.
      var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
      var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

      if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
        this._isPointerDown = true;
        this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
      }
    }
    /** Function being called whenever the trigger is being pressed using touch. */

  }, {
    key: "_onTouchStart",
    value: function _onTouchStart(event) {
      if (!this._target.rippleDisabled && !Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeTouchstartFromScreenReader"])(event)) {
        // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
        // events will launch a second ripple if we don't ignore mouse events for a specific
        // time after a touchstart event.
        this._lastTouchStartEvent = Date.now();
        this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
        // their finger down, but used another finger to tap the element again.

        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
    /** Function being called whenever the trigger is being released. */

  }, {
    key: "_onPointerUp",
    value: function _onPointerUp() {
      if (!this._isPointerDown) {
        return;
      }

      this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

      this._activeRipples.forEach(function (ripple) {
        // By default, only ripples that are completely visible will fade out on pointer release.
        // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
        var isVisible = ripple.state === 1
        /* VISIBLE */
        || ripple.config.terminateOnPointerUp && ripple.state === 0
        /* FADING_IN */
        ;

        if (!ripple.config.persistent && isVisible) {
          ripple.fadeOut();
        }
      });
    }
    /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */

  }, {
    key: "_runTimeoutOutsideZone",
    value: function _runTimeoutOutsideZone(fn) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this._ngZone.runOutsideAngular(function () {
        return setTimeout(fn, delay);
      });
    }
    /** Registers event listeners for a given list of events. */

  }, {
    key: "_registerEvents",
    value: function _registerEvents(eventTypes) {
      var _this12 = this;

      this._ngZone.runOutsideAngular(function () {
        eventTypes.forEach(function (type) {
          _this12._triggerElement.addEventListener(type, _this12, passiveEventOptions);
        });
      });
    }
    /** Removes previously registered event listeners from the trigger element. */

  }, {
    key: "_removeTriggerEvents",
    value: function _removeTriggerEvents() {
      var _this13 = this;

      if (this._triggerElement) {
        pointerDownEvents.forEach(function (type) {
          _this13._triggerElement.removeEventListener(type, _this13, passiveEventOptions);
        });

        if (this._pointerUpEventsRegistered) {
          pointerUpEvents.forEach(function (type) {
            _this13._triggerElement.removeEventListener(type, _this13, passiveEventOptions);
          });
        }
      }
    }
  }]);

  return RippleRenderer;
}();
/** Enforces a style recalculation of a DOM element by computing its styles. */


function enforceStyleRecalculation(element) {
  // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
  // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
  // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */


function distanceToFurthestCorner(x, y, rect) {
  var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to specify the global ripple options. */


var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('mat-ripple-global-options');

var MatRipple = /*#__PURE__*/function () {
  function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatRipple);

    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */

    this.radius = 0;
    this._disabled = false;
    /** Whether ripple directive is initialized and the input bindings are set. */

    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MatRipple, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = value;

      this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     */

  }, {
    key: "trigger",
    get: function get() {
      return this._trigger || this._elementRef.nativeElement;
    },
    set: function set(trigger) {
      this._trigger = trigger;

      this._setupTriggerEventsIfEnabled();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._isInitialized = true;

      this._setupTriggerEventsIfEnabled();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._rippleRenderer._removeTriggerEvents();
    }
    /** Fades out all currently showing ripple elements. */

  }, {
    key: "fadeOutAll",
    value: function fadeOutAll() {
      this._rippleRenderer.fadeOutAll();
    }
    /**
     * Ripple configuration from the directive's input values.
     * @docs-private Implemented as part of RippleTarget
     */

  }, {
    key: "rippleConfig",
    get: function get() {
      return {
        centered: this.centered,
        radius: this.radius,
        color: this.color,
        animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
          enterDuration: 0,
          exitDuration: 0
        } : {}), this.animation),
        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
      };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * @docs-private Implemented as part of RippleTarget
     */

  }, {
    key: "rippleDisabled",
    get: function get() {
      return this.disabled || !!this._globalOptions.disabled;
    }
    /** Sets up the trigger event listeners if ripples are enabled. */

  }, {
    key: "_setupTriggerEventsIfEnabled",
    value: function _setupTriggerEventsIfEnabled() {
      if (!this.disabled && this._isInitialized) {
        this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
    }
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */

  }, {
    key: "launch",
    value: function launch(configOrX) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var config = arguments.length > 2 ? arguments[2] : undefined;

      if (typeof configOrX === 'number') {
        return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
      } else {
        return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
      }
    }
  }]);

  return MatRipple;
}();

MatRipple.ɵfac = function MatRipple_Factory(t) {
  return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"], 8));
};

MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    radius: ["matRippleRadius", "radius"],
    disabled: ["matRippleDisabled", "disabled"],
    trigger: ["matRippleTrigger", "trigger"],
    color: ["matRippleColor", "color"],
    unbounded: ["matRippleUnbounded", "unbounded"],
    centered: ["matRippleCentered", "centered"],
    animation: ["matRippleAnimation", "animation"]
  },
  exportAs: ["matRipple"]
});

MatRipple.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatRipple.propDecorators = {
  color: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleColor']
  }],
  unbounded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleUnbounded']
  }],
  centered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleCentered']
  }],
  radius: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleRadius']
  }],
  animation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleAnimation']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleDisabled']
  }],
  trigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matRippleTrigger']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatRipple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[mat-ripple], [matRipple]',
      exportAs: 'matRipple',
      host: {
        'class': 'mat-ripple',
        '[class.mat-ripple-unbounded]': 'unbounded'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleRadius']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleDisabled']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleTrigger']
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleColor']
    }],
    unbounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleUnbounded']
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleCentered']
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matRippleAnimation']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatRippleModule = function MatRippleModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatRippleModule);
};

MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatRippleModule
});
MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatRippleModule_Factory(t) {
    return new (t || MatRippleModule)();
  },
  imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"]], MatCommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatRippleModule, {
    declarations: function declarations() {
      return [MatRipple];
    },
    imports: function imports() {
      return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"]];
    },
    exports: function exports() {
      return [MatRipple, MatCommonModule];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatRippleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"]],
      exports: [MatRipple, MatCommonModule],
      declarations: [MatRipple]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */


var MatPseudoCheckbox = function MatPseudoCheckbox(_animationMode) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatPseudoCheckbox);

  this._animationMode = _animationMode;
  /** Display state of the checkbox. */

  this.state = 'unchecked';
  /** Whether the checkbox is disabled. */

  this.disabled = false;
};

MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
  return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"], 8));
};

MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 8,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled"
  },
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {},
  styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatPseudoCheckbox.ctorParameters = function () {
  return [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatPseudoCheckbox.propDecorators = {
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      selector: 'mat-pseudo-checkbox',
      template: '',
      host: {
        'class': 'mat-pseudo-checkbox',
        '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
        '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
        '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
    }]
  }], function () {
    return [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatPseudoCheckboxModule);
};

MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatPseudoCheckboxModule
});
MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatPseudoCheckboxModule_Factory(t) {
    return new (t || MatPseudoCheckboxModule)();
  },
  imports: [[MatCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
    declarations: [MatPseudoCheckbox],
    imports: [MatCommonModule],
    exports: [MatPseudoCheckbox]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [MatCommonModule],
      exports: [MatPseudoCheckbox],
      declarations: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide the parent component to options.
 */


var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Boilerplate for applying mixins to MatOptgroup.

/** @docs-private */

var MatOptgroupBase = function MatOptgroupBase() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatOptgroupBase);
};

var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.


var _uniqueOptgroupIdCounter = 0;

var _MatOptgroupBase = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_MatOptgroupBase, _MatOptgroupMixinBase2);

  var _super8 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatOptgroupBase);

  function _MatOptgroupBase(parent) {
    var _this14;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatOptgroupBase);

    var _a;

    _this14 = _super8.call(this);
    /** Unique id for the underlying label. */

    _this14._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
    _this14._inert = (_a = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _a !== void 0 ? _a : false;
    return _this14;
  }

  return _MatOptgroupBase;
}(_MatOptgroupMixinBase);

_MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
  return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
};

_MatOptgroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: _MatOptgroupBase,
  inputs: {
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

_MatOptgroupBase.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_OPTION_PARENT_COMPONENT]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }];
};

_MatOptgroupBase.propDecorators = {
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](_MatOptgroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_OPTION_PARENT_COMPONENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }];
  }, {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


var MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */

var MatOptgroup = /*#__PURE__*/function (_MatOptgroupBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatOptgroup, _MatOptgroupBase2);

  var _super9 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatOptgroup);

  function MatOptgroup() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatOptgroup);

    return _super9.apply(this, arguments);
  }

  return MatOptgroup;
}(_MatOptgroupBase);

MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
  return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
};

MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-optgroup"],
  hostVars: 5,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matOptgroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_OPTGROUP,
    useExisting: MatOptgroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 2,
  consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](3, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx._labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.label, " ");
    }
  },
  styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var ɵMatOptgroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatOptgroup);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatOptgroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-optgroup',
      exportAs: 'matOptgroup',
      template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      inputs: ['disabled'],
      host: {
        'class': 'mat-optgroup',
        '[attr.role]': '_inert ? null : "group"',
        '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
        '[attr.aria-labelledby]': '_inert ? null : _labelId',
        '[class.mat-optgroup-disabled]': 'disabled'
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */


var _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */

var MatOptionSelectionChange = function MatOptionSelectionChange(
/** Reference to the option that emitted the event. */
source) {
  var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatOptionSelectionChange);

  this.source = source;
  this.isUserInput = isUserInput;
};

var _MatOptionBase = /*#__PURE__*/function () {
  function _MatOptionBase(_element, _changeDetectorRef, _parent, group) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatOptionBase);

    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = '';
    /** The unique ID of the option. */

    this.id = "mat-option-".concat(_uniqueIdCounter++);
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Emits when the state of the option changes and any parents have to be notified. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
  }
  /** Whether the wrapping component is in multiple selection mode. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatOptionBase, [{
    key: "multiple",
    get: function get() {
      return this._parent && this._parent.multiple;
    }
    /** Whether or not the option is currently selected. */

  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    }
    /** Whether the option is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this.group && this.group.disabled || this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
    }
    /** Whether ripples for the option are disabled. */

  }, {
    key: "disableRipple",
    get: function get() {
      return this._parent && this._parent.disableRipple;
    }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */

  }, {
    key: "active",
    get: function get() {
      return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */

  }, {
    key: "viewValue",
    get: function get() {
      // TODO(kara): Add input property alternative for node envs.
      return (this._getHostElement().textContent || '').trim();
    }
    /** Selects the option. */

  }, {
    key: "select",
    value: function select() {
      if (!this._selected) {
        this._selected = true;

        this._changeDetectorRef.markForCheck();

        this._emitSelectionChangeEvent();
      }
    }
    /** Deselects the option. */

  }, {
    key: "deselect",
    value: function deselect() {
      if (this._selected) {
        this._selected = false;

        this._changeDetectorRef.markForCheck();

        this._emitSelectionChangeEvent();
      }
    }
    /** Sets focus onto this option. */

  }, {
    key: "focus",
    value: function focus(_origin, options) {
      // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
      // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
      var element = this._getHostElement();

      if (typeof element.focus === 'function') {
        element.focus(options);
      }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */

  }, {
    key: "setActiveStyles",
    value: function setActiveStyles() {
      if (!this._active) {
        this._active = true;

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */

  }, {
    key: "setInactiveStyles",
    value: function setInactiveStyles() {
      if (this._active) {
        this._active = false;

        this._changeDetectorRef.markForCheck();
      }
    }
    /** Gets the label to be used when determining whether the option should be focused. */

  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.viewValue;
    }
    /** Ensures the option is selected when activated from the keyboard. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["hasModifierKey"])(event)) {
        this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


        event.preventDefault();
      }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */

  }, {
    key: "_selectViaInteraction",
    value: function _selectViaInteraction() {
      if (!this.disabled) {
        this._selected = this.multiple ? !this._selected : true;

        this._changeDetectorRef.markForCheck();

        this._emitSelectionChangeEvent(true);
      }
    }
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     */

  }, {
    key: "_getAriaSelected",
    value: function _getAriaSelected() {
      return this.selected || (this.multiple ? false : null);
    }
    /** Returns the correct tabindex for the option depending on disabled state. */

  }, {
    key: "_getTabIndex",
    value: function _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    /** Gets the host DOM element. */

  }, {
    key: "_getHostElement",
    value: function _getHostElement() {
      return this._element.nativeElement;
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      // Since parent components could be using the option's label to display the selected values
      // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
      // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
      // relatively cheap, however we still limit them only to selected options in order to avoid
      // hitting the DOM too often.
      if (this._selected) {
        var viewValue = this.viewValue;

        if (viewValue !== this._mostRecentViewValue) {
          this._mostRecentViewValue = viewValue;

          this._stateChanges.next();
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._stateChanges.complete();
    }
    /** Emits the selection change event. */

  }, {
    key: "_emitSelectionChangeEvent",
    value: function _emitSelectionChangeEvent() {
      var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
  }]);

  return _MatOptionBase;
}();

_MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
  return new (t || _MatOptionBase)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_MatOptgroupBase));
};

_MatOptionBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: _MatOptionBase,
  inputs: {
    id: "id",
    disabled: "disabled",
    value: "value"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  }
});

_MatOptionBase.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: undefined
  }, {
    type: _MatOptgroupBase
  }];
};

_MatOptionBase.propDecorators = {
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  onSelectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](_MatOptionBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: undefined
    }, {
      type: _MatOptgroupBase
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * Single option inside of a `<mat-select>` element.
 */


var MatOption = /*#__PURE__*/function (_MatOptionBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatOption, _MatOptionBase2);

  var _super10 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatOption);

  function MatOption(element, changeDetectorRef, parent, group) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatOption);

    return _super10.call(this, element, changeDetectorRef, parent, group);
  }

  return MatOption;
}(_MatOptionBase);

MatOption.ɵfac = function MatOption_Factory(t) {
  return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
};

MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatOption,
  selectors: [["mat-option"]],
  hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
  hostVars: 12,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    }
  },
  exportAs: ["matOption"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 4,
  consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], MatRipple, MatPseudoCheckbox],
  styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatOption.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_OPTION_PARENT_COMPONENT]
    }]
  }, {
    type: MatOptgroup,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_OPTGROUP]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-option',
      exportAs: 'matOption',
      host: {
        'role': 'option',
        '[attr.tabindex]': '_getTabIndex()',
        '[class.mat-selected]': 'selected',
        '[class.mat-option-multiple]': 'multiple',
        '[class.mat-active]': 'active',
        '[id]': 'id',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[class.mat-option-disabled]': 'disabled',
        '(click)': '_selectViaInteraction()',
        '(keydown)': '_handleKeydown($event)',
        'class': 'mat-option mat-focus-indicator'
      },
      template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: MatOptgroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_OPTGROUP]
      }]
    }];
  }, null);
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */


function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    var optionsArray = options.toArray();
    var groups = optionGroups.toArray();
    var groupCounter = 0;

    for (var i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }

    return groupCounter;
  }

  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */


function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatOptionModule = function MatOptionModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatOptionModule);
};

MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatOptionModule
});
MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatOptionModule_Factory(t) {
    return new (t || MatOptionModule)();
  },
  imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatOptionModule, {
    declarations: function declarations() {
      return [MatOption, MatOptgroup];
    },
    imports: function imports() {
      return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule];
    },
    exports: function exports() {
      return [MatOption, MatOptgroup];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatOptionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule],
      exports: [MatOption, MatOptgroup],
      declarations: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "FtGj":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
  \*********************************************************************/
/*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModifierKey", function() { return hasModifierKey; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MAC_ENTER = 3;
var BACKSPACE = 8;
var TAB = 9;
var NUM_CENTER = 12;
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var PAUSE = 19;
var CAPS_LOCK = 20;
var ESCAPE = 27;
var SPACE = 32;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var PLUS_SIGN = 43;
var PRINT_SCREEN = 44;
var INSERT = 45;
var DELETE = 46;
var ZERO = 48;
var ONE = 49;
var TWO = 50;
var THREE = 51;
var FOUR = 52;
var FIVE = 53;
var SIX = 54;
var SEVEN = 55;
var EIGHT = 56;
var NINE = 57;
var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

var QUESTION_MARK = 63;
var AT_SIGN = 64;
var A = 65;
var B = 66;
var C = 67;
var D = 68;
var E = 69;
var F = 70;
var G = 71;
var H = 72;
var I = 73;
var J = 74;
var K = 75;
var L = 76;
var M = 77;
var N = 78;
var O = 79;
var P = 80;
var Q = 81;
var R = 82;
var S = 83;
var T = 84;
var U = 85;
var V = 86;
var W = 87;
var X = 88;
var Y = 89;
var Z = 90;
var META = 91; // WIN_KEY_LEFT

var MAC_WK_CMD_LEFT = 91;
var MAC_WK_CMD_RIGHT = 93;
var CONTEXT_MENU = 93;
var NUMPAD_ZERO = 96;
var NUMPAD_ONE = 97;
var NUMPAD_TWO = 98;
var NUMPAD_THREE = 99;
var NUMPAD_FOUR = 100;
var NUMPAD_FIVE = 101;
var NUMPAD_SIX = 102;
var NUMPAD_SEVEN = 103;
var NUMPAD_EIGHT = 104;
var NUMPAD_NINE = 105;
var NUMPAD_MULTIPLY = 106;
var NUMPAD_PLUS = 107;
var NUMPAD_MINUS = 109;
var NUMPAD_PERIOD = 110;
var NUMPAD_DIVIDE = 111;
var F1 = 112;
var F2 = 113;
var F3 = 114;
var F4 = 115;
var F5 = 116;
var F6 = 117;
var F7 = 118;
var F8 = 119;
var F9 = 120;
var F10 = 121;
var F11 = 122;
var F12 = 123;
var NUM_LOCK = 144;
var SCROLL_LOCK = 145;
var FIRST_MEDIA = 166;
var FF_MINUS = 173;
var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

var FF_MUTE = 181;
var FF_VOLUME_DOWN = 182;
var LAST_MEDIA = 183;
var FF_VOLUME_UP = 183;
var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

var COMMA = 188;
var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

var SLASH = 191;
var APOSTROPHE = 192;
var TILDE = 192;
var OPEN_SQUARE_BRACKET = 219;
var BACKSLASH = 220;
var CLOSE_SQUARE_BRACKET = 221;
var SINGLE_QUOTE = 222;
var MAC_META = 224;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */

function hasModifierKey(event) {
  for (var _len = arguments.length, modifiers = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    modifiers[_key - 1] = arguments[_key];
  }

  if (modifiers.length) {
    return modifiers.some(function (modifier) {
      return event[modifier];
    });
  }

  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "FvrZ":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js ***!
  \*****************************************************************/
/*! exports provided: BaseTreeControl, CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeModule, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodePadding, CdkTreeNodeToggle, FlatTreeControl, NestedTreeControl, getTreeControlFunctionsMissingError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function() { return BaseTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function() { return CDK_TREE_NODE_OUTLET_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function() { return CdkNestedTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTree", function() { return CdkTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function() { return CdkTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function() { return CdkTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function() { return CdkTreeNodeDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function() { return CdkTreeNodeOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function() { return CdkTreeNodeOutletContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function() { return CdkTreeNodePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function() { return CdkTreeNodeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function() { return FlatTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function() { return NestedTreeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function() { return getTreeControlFunctionsMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function() { return getTreeControlMissingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function() { return getTreeMissingMatchingNodeDefError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function() { return getTreeMultipleDefaultNodeDefsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function() { return getTreeNoValidDataSourceError; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");














/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */




var BaseTreeControl = /*#__PURE__*/function () {
  function BaseTreeControl() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, BaseTreeControl);

    /** A selection model with multi-selection to track expansion status. */
    this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true);
  }
  /** Toggles one single data node's expanded/collapsed state. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(BaseTreeControl, [{
    key: "toggle",
    value: function toggle(dataNode) {
      this.expansionModel.toggle(this._trackByValue(dataNode));
    }
    /** Expands one single data node. */

  }, {
    key: "expand",
    value: function expand(dataNode) {
      this.expansionModel.select(this._trackByValue(dataNode));
    }
    /** Collapses one single data node. */

  }, {
    key: "collapse",
    value: function collapse(dataNode) {
      this.expansionModel.deselect(this._trackByValue(dataNode));
    }
    /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */

  }, {
    key: "isExpanded",
    value: function isExpanded(dataNode) {
      return this.expansionModel.isSelected(this._trackByValue(dataNode));
    }
    /** Toggles a subtree rooted at `node` recursively. */

  }, {
    key: "toggleDescendants",
    value: function toggleDescendants(dataNode) {
      this.expansionModel.isSelected(this._trackByValue(dataNode)) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
    }
    /** Collapse all dataNodes in the tree. */

  }, {
    key: "collapseAll",
    value: function collapseAll() {
      this.expansionModel.clear();
    }
    /** Expands a subtree rooted at given data node recursively. */

  }, {
    key: "expandDescendants",
    value: function expandDescendants(dataNode) {
      var _this$expansionModel,
          _this = this;

      var toBeProcessed = [dataNode];
      toBeProcessed.push.apply(toBeProcessed, Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getDescendants(dataNode)));

      (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(toBeProcessed.map(function (value) {
        return _this._trackByValue(value);
      })));
    }
    /** Collapses a subtree rooted at given data node recursively. */

  }, {
    key: "collapseDescendants",
    value: function collapseDescendants(dataNode) {
      var _this$expansionModel2,
          _this2 = this;

      var toBeProcessed = [dataNode];
      toBeProcessed.push.apply(toBeProcessed, Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getDescendants(dataNode)));

      (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(toBeProcessed.map(function (value) {
        return _this2._trackByValue(value);
      })));
    }
  }, {
    key: "_trackByValue",
    value: function _trackByValue(value) {
      return this.trackBy ? this.trackBy(value) : value;
    }
  }]);

  return BaseTreeControl;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */


var FlatTreeControl = /*#__PURE__*/function (_BaseTreeControl) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FlatTreeControl, _BaseTreeControl);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FlatTreeControl);

  /** Construct with flat tree data node functions getLevel and isExpandable. */
  function FlatTreeControl(getLevel, isExpandable, options) {
    var _this3;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FlatTreeControl);

    _this3 = _super.call(this);
    _this3.getLevel = getLevel;
    _this3.isExpandable = isExpandable;
    _this3.options = options;

    if (_this3.options) {
      _this3.trackBy = _this3.options.trackBy;
    }

    return _this3;
  }
  /**
   * Gets a list of the data node's subtree of descendent data nodes.
   *
   * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
   * with correct levels.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FlatTreeControl, [{
    key: "getDescendants",
    value: function getDescendants(dataNode) {
      var startIndex = this.dataNodes.indexOf(dataNode);
      var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
      // The level of descendants of a tree node must be greater than the level of the given
      // tree node.
      // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
      // If we reach a node whose level is greater than the level of the tree node, we hit a
      // sibling of an ancestor.

      for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
        results.push(this.dataNodes[i]);
      }

      return results;
    }
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     */

  }, {
    key: "expandAll",
    value: function expandAll() {
      var _this$expansionModel3,
          _this4 = this;

      (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(this.dataNodes.map(function (node) {
        return _this4._trackByValue(node);
      })));
    }
  }]);

  return FlatTreeControl;
}(BaseTreeControl);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */


var NestedTreeControl = /*#__PURE__*/function (_BaseTreeControl2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NestedTreeControl, _BaseTreeControl2);

  var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(NestedTreeControl);

  /** Construct with nested tree function getChildren. */
  function NestedTreeControl(getChildren, options) {
    var _this5;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, NestedTreeControl);

    _this5 = _super2.call(this);
    _this5.getChildren = getChildren;
    _this5.options = options;

    if (_this5.options) {
      _this5.trackBy = _this5.options.trackBy;
    }

    return _this5;
  }
  /**
   * Expands all dataNodes in the tree.
   *
   * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
   * data nodes of the tree.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(NestedTreeControl, [{
    key: "expandAll",
    value: function expandAll() {
      var _this6 = this,
          _this$expansionModel4;

      this.expansionModel.clear();
      var allNodes = this.dataNodes.reduce(function (accumulator, dataNode) {
        return [].concat(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(accumulator), Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_this6.getDescendants(dataNode)), [dataNode]);
      }, []);

      (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(allNodes.map(function (node) {
        return _this6._trackByValue(node);
      })));
    }
    /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */

  }, {
    key: "getDescendants",
    value: function getDescendants(dataNode) {
      var descendants = [];

      this._getDescendants(descendants, dataNode); // Remove the node itself


      return descendants.splice(1);
    }
    /** A helper function to get descendants recursively. */

  }, {
    key: "_getDescendants",
    value: function _getDescendants(descendants, dataNode) {
      var _this7 = this;

      descendants.push(dataNode);
      var childrenNodes = this.getChildren(dataNode);

      if (Array.isArray(childrenNodes)) {
        childrenNodes.forEach(function (child) {
          return _this7._getDescendants(descendants, child);
        });
      } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["isObservable"])(childrenNodes)) {
        // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
        // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
        childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(Boolean)).subscribe(function (children) {
          var _iterator = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(children),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;

              _this7._getDescendants(descendants, child);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      }
    }
  }]);

  return NestedTreeControl;
}(BaseTreeControl);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * @docs-private
 */


var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */

var CdkTreeNodeOutlet = function CdkTreeNodeOutlet(viewContainer, _node) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeNodeOutlet);

  this.viewContainer = viewContainer;
  this._node = _node;
};

CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
  return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CDK_TREE_NODE_OUTLET_NODE, 8));
};

CdkTreeNodeOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkTreeNodeOutlet,
  selectors: [["", "cdkTreeNodeOutlet", ""]]
});

CdkTreeNodeOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkTreeNodeOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [CDK_TREE_NODE_OUTLET_NODE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Context provided to the tree node component. */


var CdkTreeNodeOutletContext = function CdkTreeNodeOutletContext(data) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeNodeOutletContext);

  this.$implicit = data;
};
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */


var CdkTreeNodeDef =
/** @docs-private */
function CdkTreeNodeDef(template) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeNodeDef);

  this.template = template;
};

CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
  return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]));
};

CdkTreeNodeDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkTreeNodeDef,
  selectors: [["", "cdkTreeNodeDef", ""]],
  inputs: {
    when: ["cdkTreeNodeDefWhen", "when"]
  }
});

CdkTreeNodeDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkTreeNodeDef]',
      inputs: ['when: cdkTreeNodeDefWhen']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an error to be thrown when there is no usable data.
 * @docs-private
 */


function getTreeNoValidDataSourceError() {
  return Error("A valid data source must be provided.");
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * @docs-private
 */


function getTreeMultipleDefaultNodeDefsError() {
  return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * @docs-private
 */


function getTreeMissingMatchingNodeDefError() {
  return Error("Could not find a matching node definition for the provided node data.");
}
/**
 * Returns an error to be thrown when there are tree control.
 * @docs-private
 */


function getTreeControlMissingError() {
  return Error("Could not find a tree control for the tree.");
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * @docs-private
 */


function getTreeControlFunctionsMissingError() {
  return Error("Could not find functions for nested/flat tree in tree control.");
}
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */


var CdkTree = /*#__PURE__*/function () {
  function CdkTree(_differs, _changeDetectorRef) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTree);

    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    /** Subject that emits when the component has been destroyed. */

    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Level of nodes */

    this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
    //     Remove the MAX_VALUE in viewChange

    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]({
      start: 0,
      end: Number.MAX_VALUE
    });
  }
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkTree, [{
    key: "dataSource",
    get: function get() {
      return this._dataSource;
    },
    set: function set(dataSource) {
      if (this._dataSource !== dataSource) {
        this._switchDataSource(dataSource);
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._dataDiffer = this._differs.find([]).create(this.trackBy);

      if (!this.treeControl && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTreeControlMissingError();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._nodeOutlet.viewContainer.clear();

      this.viewChange.complete();

      this._onDestroy.next();

      this._onDestroy.complete();

      if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
        this.dataSource.disconnect(this);
      }

      if (this._dataSubscription) {
        this._dataSubscription.unsubscribe();

        this._dataSubscription = null;
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      var defaultNodeDefs = this._nodeDefs.filter(function (def) {
        return !def.when;
      });

      if (defaultNodeDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTreeMultipleDefaultNodeDefsError();
      }

      this._defaultNodeDef = defaultNodeDefs[0];

      if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
        this._observeRenderChanges();
      }
    } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
    //     and nested trees.

    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */

  }, {
    key: "_switchDataSource",
    value: function _switchDataSource(dataSource) {
      if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
        this.dataSource.disconnect(this);
      }

      if (this._dataSubscription) {
        this._dataSubscription.unsubscribe();

        this._dataSubscription = null;
      } // Remove the all dataNodes if there is now no data source


      if (!dataSource) {
        this._nodeOutlet.viewContainer.clear();
      }

      this._dataSource = dataSource;

      if (this._nodeDefs) {
        this._observeRenderChanges();
      }
    }
    /** Set up a subscription for the data provided by the data source. */

  }, {
    key: "_observeRenderChanges",
    value: function _observeRenderChanges() {
      var _this8 = this;

      var dataStream;

      if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["isDataSource"])(this._dataSource)) {
        dataStream = this._dataSource.connect(this);
      } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["isObservable"])(this._dataSource)) {
        dataStream = this._dataSource;
      } else if (Array.isArray(this._dataSource)) {
        dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(this._dataSource);
      }

      if (dataStream) {
        this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._onDestroy)).subscribe(function (data) {
          return _this8.renderNodeChanges(data);
        });
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getTreeNoValidDataSourceError();
      }
    }
    /** Check for changes made in the data and render each change (node added/removed/moved). */

  }, {
    key: "renderNodeChanges",
    value: function renderNodeChanges(data) {
      var _this9 = this;

      var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
      var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
      var parentData = arguments.length > 3 ? arguments[3] : undefined;
      var changes = dataDiffer.diff(data);

      if (!changes) {
        return;
      }

      changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
        if (item.previousIndex == null) {
          _this9.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
        } else if (currentIndex == null) {
          viewContainer.remove(adjustedPreviousIndex);

          _this9._levels.delete(item.item);
        } else {
          var view = viewContainer.get(adjustedPreviousIndex);
          viewContainer.move(view, currentIndex);
        }
      });

      this._changeDetectorRef.detectChanges();
    }
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */

  }, {
    key: "_getNodeDef",
    value: function _getNodeDef(data, i) {
      if (this._nodeDefs.length === 1) {
        return this._nodeDefs.first;
      }

      var nodeDef = this._nodeDefs.find(function (def) {
        return def.when && def.when(i, data);
      }) || this._defaultNodeDef;

      if (!nodeDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTreeMissingMatchingNodeDefError();
      }

      return nodeDef;
    }
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */

  }, {
    key: "insertNode",
    value: function insertNode(nodeData, index, viewContainer, parentData) {
      var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view


      var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
      // Otherwise, use the level of parent node.

      if (this.treeControl.getLevel) {
        context.level = this.treeControl.getLevel(nodeData);
      } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
        context.level = this._levels.get(parentData) + 1;
      } else {
        context.level = 0;
      }

      this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet


      var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
      container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
      // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
      //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

      if (CdkTreeNode.mostRecentTreeNode) {
        CdkTreeNode.mostRecentTreeNode.data = nodeData;
      }
    }
  }]);

  return CdkTree;
}();

CdkTree.ɵfac = function CdkTree_Factory(t) {
  return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"]));
};

CdkTree.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CdkTree,
  selectors: [["cdk-tree"]],
  contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
    }
  },
  viewQuery: function CdkTree_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](CdkTreeNodeOutlet, 3);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "cdk-tree"],
  inputs: {
    dataSource: "dataSource",
    treeControl: "treeControl",
    trackBy: "trackBy"
  },
  exportAs: ["cdkTree"],
  decls: 1,
  vars: 0,
  consts: [["cdkTreeNodeOutlet", ""]],
  template: function CdkTree_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkTreeNodeOutlet],
  encapsulation: 2
});

CdkTree.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"]
  }];
};

CdkTree.propDecorators = {
  dataSource: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  treeControl: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  trackBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  _nodeOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [CdkTreeNodeOutlet, {
      static: true
    }]
  }],
  _nodeDefs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
    args: [CdkTreeNodeDef, {
      // We need to use `descendants: true`, because Ivy will no longer match
      // indirect descendants if it's left as false.
      descendants: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTree, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"],
    args: [{
      selector: 'cdk-tree',
      exportAs: 'cdkTree',
      template: "<ng-container cdkTreeNodeOutlet></ng-container>",
      host: {
        'class': 'cdk-tree',
        'role': 'tree'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].Default
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"]
    }];
  }, {
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    treeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    _nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */


var CdkTreeNode = /*#__PURE__*/function () {
  function CdkTreeNode(_elementRef, _tree) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeNode);

    this._elementRef = _elementRef;
    this._tree = _tree;
    /** Subject that emits when the component has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** Emits when the node's data has changed. */

    this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    CdkTreeNode.mostRecentTreeNode = this; // The classes are directly added here instead of in the host property because classes on
    // the host property are not inherited with View Engine. It is not set as a @HostBinding because
    // it is not set by the time it's children nodes try to read the class from it.
    // TODO: move to host after View Engine deprecation

    this._elementRef.nativeElement.classList.add('cdk-tree-node');

    this.role = 'treeitem';
  }
  /**
   * The role of the tree node.
   * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
   *   removed in a future version.
   * @breaking-change 12.0.0 Remove this input
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkTreeNode, [{
    key: "role",
    get: function get() {
      return 'treeitem';
    },
    set: function set(_role) {
      // TODO: move to host after View Engine deprecation
      this._elementRef.nativeElement.setAttribute('role', _role);
    }
    /** The tree node's data. */

  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      if (value !== this._data) {
        this._data = value;

        this._setRoleFromData();

        this._dataChanges.next();
      }
    }
  }, {
    key: "isExpanded",
    get: function get() {
      return this._tree.treeControl.isExpanded(this._data);
    }
  }, {
    key: "_setExpanded",
    value: function _setExpanded(_expanded) {
      this._isAriaExpanded = _expanded;

      this._elementRef.nativeElement.setAttribute('aria-expanded', "".concat(_expanded));
    }
  }, {
    key: "level",
    get: function get() {
      // If the treeControl has a getLevel method, use it to get the level. Otherwise read the
      // aria-level off the parent node and use it as the level for this node (note aria-level is
      // 1-indexed, while this property is 0-indexed, so we don't need to increment).
      return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);

      this._elementRef.nativeElement.setAttribute('aria-level', "".concat(this.level + 1));
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      // aria-expanded is be set here because the expanded state is stored in the tree control and
      // the node isn't aware when the state is changed.
      // It is not set using a @HostBinding because they sometimes get lost with Mixin based classes.
      // TODO: move to host after View Engine deprecation
      if (this.isExpanded != this._isAriaExpanded) {
        this._setExpanded(this.isExpanded);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // If this is the last tree node being destroyed,
      // clear out the reference to avoid leaking memory.
      if (CdkTreeNode.mostRecentTreeNode === this) {
        CdkTreeNode.mostRecentTreeNode = null;
      }

      this._dataChanges.complete();

      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Focuses the menu item. Implements for FocusableOption. */

  }, {
    key: "focus",
    value: function focus() {
      this._elementRef.nativeElement.focus();
    } // TODO: role should eventually just be set in the component host

  }, {
    key: "_setRoleFromData",
    value: function _setRoleFromData() {
      if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTreeControlFunctionsMissingError();
      }

      this.role = 'treeitem';
    }
  }]);

  return CdkTreeNode;
}();

CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
  return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTree));
};

CdkTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkTreeNode,
  selectors: [["cdk-tree-node"]],
  inputs: {
    role: "role"
  },
  exportAs: ["cdkTreeNode"]
});
/**
 * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
 * in `CdkTree` and set the data to it.
 */

CdkTreeNode.mostRecentTreeNode = null;

CdkTreeNode.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }, {
    type: CdkTree
  }];
};

CdkTreeNode.propDecorators = {
  role: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: 'cdk-tree-node',
      exportAs: 'cdkTreeNode'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }, {
      type: CdkTree
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }]
  });
})();

function getParentNodeAriaLevel(nodeElement) {
  var parent = nodeElement.parentElement;

  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }

  if (!parent) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw Error('Incorrect tree structure containing detached node.');
    } else {
      return -1;
    }
  } else if (parent.classList.contains('cdk-nested-tree-node')) {
    return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceNumberProperty"])(parent.getAttribute('aria-level'));
  } else {
    // The ancestor element is the cdk-tree itself
    return 0;
  }
}

function isNodeElement(element) {
  var classList = element.classList;
  return !!((classList === null || classList === void 0 ? void 0 : classList.contains('cdk-nested-tree-node')) || (classList === null || classList === void 0 ? void 0 : classList.contains('cdk-tree')));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * The children of node will be automatically added to `cdkTreeNodeOutlet`.
 */


var CdkNestedTreeNode = /*#__PURE__*/function (_CdkTreeNode) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkNestedTreeNode, _CdkTreeNode);

  var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CdkNestedTreeNode);

  function CdkNestedTreeNode(_elementRef, _tree, _differs) {
    var _this10;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkNestedTreeNode);

    _this10 = _super3.call(this, _elementRef, _tree);
    _this10._elementRef = _elementRef;
    _this10._tree = _tree;
    _this10._differs = _differs; // The classes are directly added here instead of in the host property because classes on
    // the host property are not inherited with View Engine. It is not set as a @HostBinding because
    // it is not set by the time it's children nodes try to read the class from it.
    // TODO: move to host after View Engine deprecation

    _this10._elementRef.nativeElement.classList.add('cdk-nested-tree-node');

    return _this10;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkNestedTreeNode, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this11 = this;

      this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

      if (!this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTreeControlFunctionsMissingError();
      }

      var childrenNodes = this._tree.treeControl.getChildren(this.data);

      if (Array.isArray(childrenNodes)) {
        this.updateChildrenNodes(childrenNodes);
      } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["isObservable"])(childrenNodes)) {
        childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function (result) {
          return _this11.updateChildrenNodes(result);
        });
      }

      this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this11.updateChildrenNodes();
      });
    } // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkNestedTreeNode.prototype), "ngOnInit", this).call(this);
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkNestedTreeNode.prototype), "ngDoCheck", this).call(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._clear();

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
    }
    /** Add children dataNodes to the NodeOutlet */

  }, {
    key: "updateChildrenNodes",
    value: function updateChildrenNodes(children) {
      var outlet = this._getNodeOutlet();

      if (children) {
        this._children = children;
      }

      if (outlet && this._children) {
        var viewContainer = outlet.viewContainer;

        this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
      } else {
        // Reset the data differ if there's no children nodes displayed
        this._dataDiffer.diff([]);
      }
    }
    /** Clear the children dataNodes. */

  }, {
    key: "_clear",
    value: function _clear() {
      var outlet = this._getNodeOutlet();

      if (outlet) {
        outlet.viewContainer.clear();

        this._dataDiffer.diff([]);
      }
    }
    /** Gets the outlet for the current node. */

  }, {
    key: "_getNodeOutlet",
    value: function _getNodeOutlet() {
      var _this12 = this;

      var outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
      // that we don't pick up the outlet of a child node by accident.

      return outlets && outlets.find(function (outlet) {
        return !outlet._node || outlet._node === _this12;
      });
    }
  }]);

  return CdkNestedTreeNode;
}(CdkTreeNode);

CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
  return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]));
};

CdkNestedTreeNode.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkNestedTreeNode,
  selectors: [["cdk-nested-tree-node"]],
  contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
    }
  },
  inputs: {
    role: "role",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  exportAs: ["cdkNestedTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([{
    provide: CdkTreeNode,
    useExisting: CdkNestedTreeNode
  }, {
    provide: CDK_TREE_NODE_OUTLET_NODE,
    useExisting: CdkNestedTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]]
});

CdkNestedTreeNode.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }, {
    type: CdkTree
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }];
};

CdkNestedTreeNode.propDecorators = {
  nodeOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
    args: [CdkTreeNodeOutlet, {
      // We need to use `descendants: true`, because Ivy will no longer match
      // indirect descendants if it's left as false.
      descendants: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: 'cdk-nested-tree-node',
      exportAs: 'cdkNestedTreeNode',
      inputs: ['role', 'disabled', 'tabIndex'],
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }, {
      type: CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }];
  }, {
    nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Regex used to split a string on its CSS units. */


var cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */

var CdkTreeNodePadding = /*#__PURE__*/function () {
  function CdkTreeNodePadding(_treeNode, _tree, _element, _dir) {
    var _this13 = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeNodePadding);

    this._treeNode = _treeNode;
    this._tree = _tree;
    this._element = _element;
    this._dir = _dir;
    /** Subject that emits when the component has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    /** CSS units used for the indentation value. */

    this.indentUnits = 'px';
    this._indent = 40;

    this._setPadding();

    if (_dir) {
      _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this13._setPadding(true);
      });
    } // In Ivy the indentation binding might be set before the tree node's data has been added,
    // which means that we'll miss the first render. We have to subscribe to changes in the
    // data to ensure that everything is up to date.


    _treeNode._dataChanges.subscribe(function () {
      return _this13._setPadding();
    });
  }
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkTreeNodePadding, [{
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(value) {
      this._setLevelInput(value);
    }
    /**
     * The indent for each level. Can be a number or a CSS string.
     * Default number 40px from material design menu sub-menu spec.
     */

  }, {
    key: "indent",
    get: function get() {
      return this._indent;
    },
    set: function set(indent) {
      this._setIndentInput(indent);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */

  }, {
    key: "_paddingIndent",
    value: function _paddingIndent() {
      var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
      var level = this._level == null ? nodeLevel : this._level;
      return typeof level === 'number' ? "".concat(level * this._indent).concat(this.indentUnits) : null;
    }
  }, {
    key: "_setPadding",
    value: function _setPadding() {
      var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var padding = this._paddingIndent();

      if (padding !== this._currentPadding || forceChange) {
        var element = this._element.nativeElement;
        var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
        var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
        element.style[paddingProp] = padding || '';
        element.style[resetProp] = '';
        this._currentPadding = padding;
      }
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */

  }, {
    key: "_setLevelInput",
    value: function _setLevelInput(value) {
      // Set to null as the fallback value so that _setPadding can fall back to the node level if the
      // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
      // they set 0 explicitly.
      this._level = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceNumberProperty"])(value, null);

      this._setPadding();
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */

  }, {
    key: "_setIndentInput",
    value: function _setIndentInput(indent) {
      var value = indent;
      var units = 'px';

      if (typeof indent === 'string') {
        var parts = indent.split(cssUnitPattern);
        value = parts[0];
        units = parts[1] || units;
      }

      this.indentUnits = units;
      this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceNumberProperty"])(value);

      this._setPadding();
    }
  }]);

  return CdkTreeNodePadding;
}();

CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
  return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], 8));
};

CdkTreeNodePadding.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkTreeNodePadding,
  selectors: [["", "cdkTreeNodePadding", ""]],
  inputs: {
    level: ["cdkTreeNodePadding", "level"],
    indent: ["cdkTreeNodePaddingIndent", "indent"]
  }
});

CdkTreeNodePadding.ctorParameters = function () {
  return [{
    type: CdkTreeNode
  }, {
    type: CdkTree
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

CdkTreeNodePadding.propDecorators = {
  level: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
    args: ['cdkTreeNodePadding']
  }],
  indent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
    args: ['cdkTreeNodePaddingIndent']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkTreeNodePadding]'
    }]
  }], function () {
    return [{
      type: CdkTreeNode
    }, {
      type: CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, {
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
      args: ['cdkTreeNodePadding']
    }],
    indent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
      args: ['cdkTreeNodePaddingIndent']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Node toggle to expand/collapse the node.
 */


var CdkTreeNodeToggle = /*#__PURE__*/function () {
  function CdkTreeNodeToggle(_tree, _treeNode) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeNodeToggle);

    this._tree = _tree;
    this._treeNode = _treeNode;
    this._recursive = false;
  }
  /** Whether expand/collapse the node recursively. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkTreeNodeToggle, [{
    key: "recursive",
    get: function get() {
      return this._recursive;
    },
    set: function set(value) {
      this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete

  }, {
    key: "_toggle",
    value: function _toggle(event) {
      this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
      event.stopPropagation();
    }
  }]);

  return CdkTreeNodeToggle;
}();

CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
  return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTreeNode));
};

CdkTreeNodeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkTreeNodeToggle,
  selectors: [["", "cdkTreeNodeToggle", ""]],
  hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
        return ctx._toggle($event);
      });
    }
  },
  inputs: {
    recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
  }
});

CdkTreeNodeToggle.ctorParameters = function () {
  return [{
    type: CdkTree
  }, {
    type: CdkTreeNode
  }];
};

CdkTreeNodeToggle.propDecorators = {
  recursive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
    args: ['cdkTreeNodeToggleRecursive']
  }],
  _toggle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"],
    args: ['click', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkTreeNodeToggle]'
    }]
  }], function () {
    return [{
      type: CdkTree
    }, {
      type: CdkTreeNode
    }];
  }, {
    recursive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
      args: ['cdkTreeNodeToggleRecursive']
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"],
      args: ['click', ['$event']]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

var CdkTreeModule = function CdkTreeModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTreeModule);
};

CdkTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: CdkTreeModule
});
CdkTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  factory: function CdkTreeModule_Factory(t) {
    return new (t || CdkTreeModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CdkTreeModule, {
    declarations: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
    exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
    args: [{
      exports: EXPORTED_DECLARATIONS,
      declarations: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "GU7r":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
  \**********************************************************************/
/*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */



var MutationObserverFactory = /*#__PURE__*/function () {
  function MutationObserverFactory() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MutationObserverFactory);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MutationObserverFactory, [{
    key: "create",
    value: function create(callback) {
      return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
  }]);

  return MutationObserverFactory;
}();

MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || MutationObserverFactory)();
};

MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function MutationObserverFactory_Factory() {
    return new MutationObserverFactory();
  },
  token: MutationObserverFactory,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MutationObserverFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** An injectable service that allows watching elements for changes to their content. */


var ContentObserver = /*#__PURE__*/function () {
  function ContentObserver(_mutationObserverFactory) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentObserver);

    this._mutationObserverFactory = _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */

    this._observedElements = new Map();
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentObserver, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this = this;

      this._observedElements.forEach(function (_, element) {
        return _this._cleanupObserver(element);
      });
    }
  }, {
    key: "observe",
    value: function observe(elementOrRef) {
      var _this2 = this;

      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
      return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
        var stream = _this2._observeElement(element);

        var subscription = stream.subscribe(observer);
        return function () {
          subscription.unsubscribe();

          _this2._unobserveElement(element);
        };
      });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */

  }, {
    key: "_observeElement",
    value: function _observeElement(element) {
      if (!this._observedElements.has(element)) {
        var stream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

        var observer = this._mutationObserverFactory.create(function (mutations) {
          return stream.next(mutations);
        });

        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }

        this._observedElements.set(element, {
          observer: observer,
          stream: stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }

      return this._observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */

  }, {
    key: "_unobserveElement",
    value: function _unobserveElement(element) {
      if (this._observedElements.has(element)) {
        this._observedElements.get(element).count--;

        if (!this._observedElements.get(element).count) {
          this._cleanupObserver(element);
        }
      }
    }
    /** Clean up the underlying MutationObserver for the specified element. */

  }, {
    key: "_cleanupObserver",
    value: function _cleanupObserver(element) {
      if (this._observedElements.has(element)) {
        var _this$_observedElemen = this._observedElements.get(element),
            observer = _this$_observedElemen.observer,
            stream = _this$_observedElemen.stream;

        if (observer) {
          observer.disconnect();
        }

        stream.complete();

        this._observedElements.delete(element);
      }
    }
  }]);

  return ContentObserver;
}();

ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MutationObserverFactory));
};

ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function ContentObserver_Factory() {
    return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MutationObserverFactory));
  },
  token: ContentObserver,
  providedIn: "root"
});

ContentObserver.ctorParameters = function () {
  return [{
    type: MutationObserverFactory
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ContentObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MutationObserverFactory
    }];
  }, null);
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


var CdkObserveContent = /*#__PURE__*/function () {
  function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkObserveContent);

    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** Event emitted for each change in the element's content. */

    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this._disabled = false;
    this._currentSubscription = null;
  }
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkObserveContent, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
      this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /** Debounce interval for emitting the changes. */

  }, {
    key: "debounce",
    get: function get() {
      return this._debounce;
    },
    set: function set(value) {
      this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

      this._subscribe();
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      if (!this._currentSubscription && !this.disabled) {
        this._subscribe();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._unsubscribe();
    }
  }, {
    key: "_subscribe",
    value: function _subscribe() {
      var _this3 = this;

      this._unsubscribe();

      var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
      // Consider brining it back inside the zone next time we're making breaking changes.
      // Bringing it back inside can cause things like infinite change detection loops and changed
      // after checked errors if people's code isn't handling it properly.


      this._ngZone.runOutsideAngular(function () {
        _this3._currentSubscription = (_this3.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(_this3.debounce)) : stream).subscribe(_this3.event);
      });
    }
  }, {
    key: "_unsubscribe",
    value: function _unsubscribe() {
      var _a;

      (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
  }]);

  return CdkObserveContent;
}();

CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
};

CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: ["cdkObserveContentDisabled", "disabled"],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"]
});

CdkObserveContent.ctorParameters = function () {
  return [{
    type: ContentObserver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }];
};

CdkObserveContent.propDecorators = {
  event: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
    args: ['cdkObserveContent']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkObserveContentDisabled']
  }],
  debounce: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkObserveContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[cdkObserveContent]',
      exportAs: 'cdkObserveContent'
    }]
  }], function () {
    return [{
      type: ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }];
  }, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
      args: ['cdkObserveContent']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkObserveContentDisabled']
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

var ObserversModule = function ObserversModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ObserversModule);
};

ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ObserversModule
});
ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function ObserversModule_Factory(t) {
    return new (t || ObserversModule)();
  },
  providers: [MutationObserverFactory]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ObserversModule, {
    declarations: [CdkObserveContent],
    exports: [CdkObserveContent]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ObserversModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      exports: [CdkObserveContent],
      declarations: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "Nrb5":
/*!*********************************************************!*\
  !*** ./src/app/main/components/side-menu/menu.model.ts ***!
  \*********************************************************/
/*! exports provided: MenuMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMap", function() { return MenuMap; });
var MenuMap = [
    {
        name: 'Infrastructure',
        image: './../../../../assets/icons/Infrastructure.svg',
        children: [
            {
                name: 'Services',
                image: './../../../../assets/icons/Services.svg',
                link: '/services',
            },
            {
                name: 'Ports',
                image: './../../../../assets/icons/Ports.svg',
                link: '/ports',
            },
            {
                name: 'Cluster',
                image: './../../../../assets/icons/Cluster.svg',
                link: '/cluster',
            },
        ]
    },
    {
        name: 'Rules',
        image: './../../../../assets/icons/Rules.svg',
        link: '/rules',
        children: []
    },
    {
        name: 'Authetication',
        image: './../../../../assets/icons/Authetication.svg',
        children: [
            {
                name: 'Policies',
                image: './../../../../assets/icons/Policies.svg',
                link: '/policies',
            },
            {
                name: 'Connectors',
                image: './../../../../assets/icons/Connectors.svg',
                link: '/connectors',
            },
            {
                name: 'Authetication steps',
                image: './../../../../assets/icons/AutheticationSteps.svg',
                link: '/authetication_steps',
            },
        ]
    },
    {
        name: 'Trusted groups',
        image: './../../../../assets/icons/TrustedGroups.svg',
        link: '/trusted_groups',
        children: []
    },
    {
        name: 'Reports',
        image: './../../../../assets/icons/Reports.svg',
        children: [
            {
                name: 'Audit',
                image: './../../../../assets/icons/Audit.svg',
                link: '/audit',
            },
            {
                name: 'User activity',
                image: './../../../../assets/icons/UserActivity.svg',
                link: '/user_activity',
            },
            {
                name: 'Logs',
                image: './../../../../assets/icons/Logs.svg',
                link: '/logs',
            },
        ]
    },
    {
        name: 'Settings',
        image: './../../../../assets/icons/Settings.svg',
        children: [
            {
                name: 'General',
                image: './../../../../assets/icons/General.svg',
                link: '/general',
            },
            {
                name: 'License',
                image: './../../../../assets/icons/License.svg',
                link: '/license',
            },
            {
                name: 'Web SSL',
                image: './../../../../assets/icons/WebSSL.svg',
                link: '/web_SSL',
            },
            {
                name: 'User managment',
                image: './../../../../assets/icons/UserManagment.svg',
                link: '/user_managment',
            },
            {
                name: 'EULA',
                image: './../../../../assets/icons/EULA.svg',
                link: '/EULA',
            },
        ]
    },
];


/***/ }),

/***/ "PI13":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]] });
    return AngularMaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]] }); })();


/***/ }),

/***/ "VCnB":
/*!******************************************************************!*\
  !*** ./src/app/main/components/side-menu/side-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.model */ "Nrb5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











var _c0 = ["tree"];
function SideMenuComponent_mat_tree_node_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideMenuComponent_mat_tree_node_10_Template_mat_tree_node_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var node_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.redirect(node_r3.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var node_r3 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx_r1.activeRoute$) === node_r3.link)("empty-parent", node_r3.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", node_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](node_r3.name);
} }
function SideMenuComponent_mat_nested_tree_node_11_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nested-tree-node", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideMenuComponent_mat_nested_tree_node_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var node_r6 = ctx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.toogleNode(node_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](8, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var node_r6 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isExpanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("expanded", ctx_r2.treeControl.isExpanded(node_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", node_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](node_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tree-invisible", !ctx_r2.treeControl.isExpanded(node_r6));
} }
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(router) {
        this.router = router;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["NestedTreeControl"](function (node) { return node.children; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        this.foldedSize = 1024;
        this.compactSize = 425;
        this.folded = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](window.innerWidth < this.foldedSize);
        this.folded$ = this.folded.asObservable();
        this.compact = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](window.innerWidth < this.compactSize);
        this.compact$ = this.compact.asObservable();
        this.compactView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        this.dataSource.data = _menu_model__WEBPACK_IMPORTED_MODULE_4__["MenuMap"];
        this.treeControl.dataNodes = _menu_model__WEBPACK_IMPORTED_MODULE_4__["MenuMap"];
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) { return event.url; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])("/" + window.location.href.split('/').slice(-1)[0]));
        this.fold$.subscribe(function (value) {
            if (!value) {
                _this.folded.next(false);
                _this.compact.next(false);
            }
            else {
                if (window.innerWidth < _this.compactSize) {
                    _this.compact.next(true);
                }
                else if (window.innerWidth < _this.foldedSize) {
                    _this.folded.next(true);
                }
            }
        });
        this.compact$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1)).subscribe(function (value) { return _this.compactView.emit(value); });
    };
    SideMenuComponent.prototype.ngAfterViewInit = function () {
        this.tree.treeControl.expandAll();
    };
    SideMenuComponent.prototype.redirect = function (url) {
        this.router.navigate([url]);
    };
    SideMenuComponent.prototype.toogleNode = function (node) {
        this.treeControl.toggle(node);
    };
    SideMenuComponent.prototype.toggleFold = function (fold) {
        if (this.compact.value) {
            this.compact.next(fold);
        }
        else {
            this.folded.next(fold);
        }
    };
    SideMenuComponent.prototype.onResize = function (event) {
        this.folded.next(event.target.innerWidth < this.foldedSize);
        this.compact.next(event.target.innerWidth < this.compactSize);
    };
    SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], viewQuery: function SideMenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tree = _t.first);
        } }, inputs: { fold$: "fold$" }, outputs: { compactView: "compactView" }, decls: 12, vars: 19, consts: [[1, "wrapper", 3, "resize"], [1, "header-block"], ["src", "../../../../assets/icons/Logo.png", "alt", "logo", 1, "logo"], ["src", "../../../../assets/icons/UnfoldButton.svg", "alt", "logo", 1, "button", 3, "click"], [1, "menu-tree", 3, "dataSource", "treeControl"], ["tree", ""], [3, "click", 4, "matTreeNodeDef"], [3, "isExpanded", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [3, "click"], [1, "mat-tree-node"], [1, "mark"], [1, "select-container"], ["alt", "", 1, "icon", 3, "src"], [1, "name"], ["src", "../../../../assets/icons/SelectedArrow.svg", "alt", "", 1, "selected-arrow"], [3, "isExpanded"], [1, "mat-tree-node", "parent", 3, "click"], ["src", "../../../../assets/icons/OpenArrow.svg", "alt", "", 1, "icon-arrow"], ["matTreeNodeOutlet", ""]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SideMenuComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideMenuComponent_Template_img_click_5_listener() { return ctx.toggleFold(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-tree", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SideMenuComponent_mat_tree_node_10_Template, 9, 8, "mat-tree-node", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SideMenuComponent_mat_nested_tree_node_11_Template, 9, 7, "mat-nested-tree-node", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("folded", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 11, ctx.folded$))("compact", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 13, ctx.compact$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("folded", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, ctx.folded$))("compact", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 17, ctx.compact$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatNestedTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  padding: 27px 10px;\n  margin: 0 17px;\n  border-bottom: 1px #cbd4db solid;\n}\n.wrapper[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 93px;\n  height: 29px;\n}\n.wrapper[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   .header-block.folded[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .header-block.folded[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   .header-block.folded[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: block;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%] {\n  overflow: scroll;\n  width: calc(100% + 10px);\n  background: transparent;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  min-height: 38px;\n  position: relative;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20px;\n  border-radius: 10px;\n  background: #ffffff;\n  position: absolute;\n  left: -10px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  height: 100%;\n  flex: 1;\n  display: flex;\n  margin-left: 48px;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 27px;\n  width: 27px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #434d59;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.2px;\n  font-weight: 500;\n  padding: 0 7px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .selected-arrow[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 12px;\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  background: #feae1b;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: calc(100% + 20px);\n  border-radius: 10px;\n  left: -10px;\n  background: #1a242d;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .selected-arrow[_ngcontent-%COMP%] {\n  display: block;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.parent[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .mat-tree-node.empty-parent[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  margin-left: 29px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree.folded[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%] {\n  width: 82px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree.folded[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  margin-left: 29px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree.folded[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree.folded[_ngcontent-%COMP%]   .mat-tree-node.selected[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree.folded[_ngcontent-%COMP%]   .mat-tree-node.parent[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree.compact[_ngcontent-%COMP%] {\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   .menu-tree[_ngcontent-%COMP%]   .tree-invisible[_ngcontent-%COMP%] {\n  height: 0px;\n  overflow: hidden;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNOO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQU47QUFHSTtFQUNFLFNBQUE7QUFETjtBQUdNO0VBQ0UsYUFBQTtBQURSO0FBSU07RUFDRSxjQUFBO0FBRlI7QUFPRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTE47QUFPTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUxSO0FBUU07RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBTlI7QUFRUTtFQUNFLGtCQUFBO0FBTlY7QUFTUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBUFY7QUFVUTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSVjtBQVdRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBVFY7QUFjUTtFQUNFLG1CQUFBO0FBWlY7QUFlUTtFQUNFLGtCQUFBO0FBYlY7QUFlVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBYlo7QUFnQlU7RUFDRSxVQUFBO0FBZFo7QUFpQlU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQWZaO0FBa0JVO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFoQlo7QUFzQlE7RUFDRSxpQkFBQTtBQXBCVjtBQXlCUTtFQUNFLGlCQUFBO0FBdkJWO0FBNkJNO0VBQ0UsV0FBQTtBQTNCUjtBQTZCUTtFQUNFLGlCQUFBO0FBM0JWO0FBNkJVO0VBQ0UsYUFBQTtBQTNCWjtBQStCUTtFQUNFLDhCQUFBO0FBN0JWO0FBaUNVO0VBQ0UsaUJBQUE7QUEvQlo7QUFxQ0k7RUFDRSxhQUFBO0FBbkNOO0FBc0NJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBcENOO0FBeUNBO0VBQ0UsVUFBQTtBQXRDRiIsImZpbGUiOiJzaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmhlYWRlci1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAyN3B4IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMTdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjY2JkNGRiIHNvbGlkO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDkzcHg7XHJcbiAgICAgIGhlaWdodDogMjlweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mb2xkZWQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LXRyZWUge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5tYXQtdHJlZS1ub2RlIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgLm1hcmsge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDhweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAuaWNvbi1hcnJvdyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBjb2xvcjogIzQzNGQ1OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlbGVjdGVkLWFycm93IHtcclxuICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgLm1hcmsge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZlYWUxYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3QtY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhMjQyZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VsZWN0ZWQtYXJyb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucGFyZW50IHtcclxuICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZW1wdHktcGFyZW50IHtcclxuICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjlweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmZvbGRlZCB7XHJcbiAgICAgIC5tYXQtdHJlZS1ub2RlIHtcclxuICAgICAgICB3aWR0aDogODJweDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI5cHg7XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZWxlY3RlZCAuc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnBhcmVudCB7XHJcbiAgICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuY29tcGFjdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyZWUtaW52aXNpYmxlIHtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG59XHJcbiJdfQ== */"] });
    return SideMenuComponent;
}());



/***/ }),

/***/ "XhcP":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js ***!
  \*************************************************************************/
/*! exports provided: MAT_DRAWER_DEFAULT_AUTOSIZE, MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule, matDrawerAnimations, throwMatDuplicatedDrawerError, ɵangular_material_src_material_sidenav_sidenav_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE", function() { return MAT_DRAWER_DEFAULT_AUTOSIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY", function() { return MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDrawer", function() { return MatDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContainer", function() { return MatDrawerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDrawerContent", function() { return MatDrawerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenav", function() { return MatSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContainer", function() { return MatSidenavContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenavContent", function() { return MatSidenavContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSidenavModule", function() { return MatSidenavModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDrawerAnimations", function() { return matDrawerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDuplicatedDrawerError", function() { return throwMatDuplicatedDrawerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_sidenav_sidenav_a", function() { return MAT_DRAWER_CONTAINER; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");

















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material drawers.
 * @docs-private
 */







var _c0 = ["*"];

function MatDrawerContainer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r2._onBackdropClicked();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
  }
}

function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-drawer-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

var _c1 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c2 = ["mat-drawer", "mat-drawer-content", "*"];

function MatSidenavContainer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r2._onBackdropClicked();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
  }
}

function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-sidenav-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

var _c3 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c4 = ["mat-sidenav", "mat-sidenav-content", "*"];
var _c5 = ".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n";
var matDrawerAnimations = {
  /** Animation that slides a drawer in and out. */
  transformDrawer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["trigger"])('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
  // 1. Having a transform can cause elements with ripples or an animated
  //    transform to shift around in Chrome with an RTL layout (see #10023).
  // 2. 3d transforms causes text to appear blurry on IE and Edge.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["style"])({
    'transform': 'none',
    'visibility': 'visible'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["style"])({
    // Avoids the shadow showing up when closed in SSR.
    'box-shadow': 'none',
    'visibility': 'hidden'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_15__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
};
/**
 * Throws an exception when two MatDrawer are matching the same position.
 * @docs-private
 */

function throwMatDuplicatedDrawerError(position) {
  throw Error("A drawer was already declared for 'position=\"".concat(position, "\"'"));
}
/** Configures whether drawers should use auto sizing by default. */


var MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MAT_DRAWER_DEFAULT_AUTOSIZE', {
  providedIn: 'root',
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * @docs-private
 */

var MAT_DRAWER_CONTAINER = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MAT_DRAWER_CONTAINER');
/** @docs-private */

function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}

var MatDrawerContent = /*#__PURE__*/function (_CdkScrollable) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatDrawerContent, _CdkScrollable);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatDrawerContent);

  function MatDrawerContent(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
    var _this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatDrawerContent);

    _this = _super.call(this, elementRef, scrollDispatcher, ngZone);
    _this._changeDetectorRef = _changeDetectorRef;
    _this._container = _container;
    return _this;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDrawerContent, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      this._container._contentMarginChanges.subscribe(function () {
        _this2._changeDetectorRef.markForCheck();
      });
    }
  }]);

  return MatDrawerContent;
}(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollable"]);

MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) {
  return new (t || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MatDrawerContainer;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]));
};

MatDrawerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatDrawerContent,
  selectors: [["mat-drawer-content"]],
  hostAttrs: [1, "mat-drawer-content"],
  hostVars: 4,
  hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatDrawerContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

MatDrawerContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: MatDrawerContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
        return MatDrawerContainer;
      })]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatDrawerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-drawer-content',
      template: '<ng-content></ng-content>',
      host: {
        'class': 'mat-drawer-content',
        '[style.margin-left.px]': '_container._contentMargins.left',
        '[style.margin-right.px]': '_container._contentMargins.right'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: MatDrawerContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
          return MatDrawerContainer;
        })]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }];
  }, null);
})();
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */


var MatDrawer = /*#__PURE__*/function () {
  function MatDrawer(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _doc, _container) {
    var _this3 = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatDrawer);

    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._focusMonitor = _focusMonitor;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._doc = _doc;
    this._container = _container;
    this._elementFocusedBeforeDrawerWasOpened = null;
    /** Whether the drawer is initialized. Used for disabling the initial animation. */

    this._enableAnimations = false;
    this._position = 'start';
    this._mode = 'over';
    this._disableClose = false;
    this._opened = false;
    /** Emits whenever the drawer has started animating. */

    this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Emits whenever the drawer is done animating. */

    this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Current state of the sidenav animation. */
    // @HostBinding is used in the class as it is expected to be extended.  Since @Component decorator
    // metadata is not inherited by child classes, instead the host binding data is defined in a way
    // that can be inherited.
    // tslint:disable:no-host-decorator-in-concrete

    this._animationState = 'void';
    /** Event emitted when the drawer open state is changed. */

    this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"](
    /* isAsync */
    true);
    /** Event emitted when the drawer has been opened. */

    this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (o) {
      return o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function () {}));
    /** Event emitted when the drawer has started opening. */

    this.openedStart = this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (e) {
      return e.fromState !== e.toState && e.toState.indexOf('open') === 0;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])(undefined));
    /** Event emitted when the drawer has been closed. */

    this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (o) {
      return !o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function () {}));
    /** Event emitted when the drawer has started closing. */

    this.closedStart = this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (e) {
      return e.fromState !== e.toState && e.toState === 'void';
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["mapTo"])(undefined));
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Event emitted when the drawer's position changes. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * An observable that emits when the drawer mode changes. This is used by the drawer container to
     * to know when to when the mode changes so it can adapt the margins on the content.
     */

    this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    this.openedChange.subscribe(function (opened) {
      if (opened) {
        if (_this3._doc) {
          _this3._elementFocusedBeforeDrawerWasOpened = _this3._doc.activeElement;
        }

        _this3._takeFocus();
      } else if (_this3._isFocusWithinDrawer()) {
        _this3._restoreFocus();
      }
    });
    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
     * and we don't have close disabled.
     */

    this._ngZone.runOutsideAngular(function () {
      Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(_this3._elementRef.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (event) {
        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(_this3._destroyed)).subscribe(function (event) {
        return _this3._ngZone.run(function () {
          _this3.close();

          event.stopPropagation();
          event.preventDefault();
        });
      });
    }); // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


    this._animationEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])(function (x, y) {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(function (event) {
      var fromState = event.fromState,
          toState = event.toState;

      if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
        _this3.openedChange.emit(_this3._opened);
      }
    });
  }
  /** The side that the drawer is attached to. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDrawer, [{
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      // Make sure we have a valid value.
      value = value === 'end' ? 'end' : 'start';

      if (value != this._position) {
        this._position = value;
        this.onPositionChanged.emit();
      }
    }
    /** Mode of the drawer; one of 'over', 'push' or 'side'. */

  }, {
    key: "mode",
    get: function get() {
      return this._mode;
    },
    set: function set(value) {
      this._mode = value;

      this._updateFocusTrapState();

      this._modeChanged.next();
    }
    /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */

  }, {
    key: "disableClose",
    get: function get() {
      return this._disableClose;
    },
    set: function set(value) {
      this._disableClose = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the drawer should focus the first focusable element automatically when opened.
     * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
     * enabled, focus will be moved into the sidenav in `side` mode as well.
     */

  }, {
    key: "autoFocus",
    get: function get() {
      var value = this._autoFocus; // Note that usually we disable auto focusing in `side` mode, because we don't know how the
      // sidenav is being used, but in some cases it still makes sense to do it. If the consumer
      // explicitly enabled `autoFocus`, we take it as them always wanting to enable it.

      return value == null ? this.mode !== 'side' : value;
    },
    set: function set(value) {
      this._autoFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the drawer is opened. We overload this because we trigger an event when it
     * starts or end.
     */

  }, {
    key: "opened",
    get: function get() {
      return this._opened;
    },
    set: function set(value) {
      this.toggle(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value));
    }
    /**
     * Moves focus into the drawer. Note that this works even if
     * the focus trap is disabled in `side` mode.
     */

  }, {
    key: "_takeFocus",
    value: function _takeFocus() {
      var _this4 = this;

      if (!this.autoFocus || !this._focusTrap) {
        return;
      }

      this._focusTrap.focusInitialElementWhenReady().then(function (hasMovedFocus) {
        // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
        // still works. We need to check that `focus` is a function due to Universal.
        if (!hasMovedFocus && typeof _this4._elementRef.nativeElement.focus === 'function') {
          _this4._elementRef.nativeElement.focus();
        }
      });
    }
    /**
     * Restores focus to the element that was originally focused when the drawer opened.
     * If no element was focused at that time, the focus will be restored to the drawer.
     */

  }, {
    key: "_restoreFocus",
    value: function _restoreFocus() {
      if (!this.autoFocus) {
        return;
      } // Note that we don't check via `instanceof HTMLElement` so that we can cover SVGs as well.


      if (this._elementFocusedBeforeDrawerWasOpened) {
        this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, this._openedVia);
      } else {
        this._elementRef.nativeElement.blur();
      }

      this._elementFocusedBeforeDrawerWasOpened = null;
      this._openedVia = null;
    }
    /** Whether focus is currently within the drawer. */

  }, {
    key: "_isFocusWithinDrawer",
    value: function _isFocusWithinDrawer() {
      var _a;

      var activeEl = (_a = this._doc) === null || _a === void 0 ? void 0 : _a.activeElement;
      return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

      this._updateFocusTrapState();
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // Enable the animations after the lifecycle hooks have run, in order to avoid animating
      // drawers that are open by default. When we're on the server, we shouldn't enable the
      // animations, because we don't want the drawer to animate the first time the user sees
      // the page.
      if (this._platform.isBrowser) {
        this._enableAnimations = true;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._focusTrap) {
        this._focusTrap.destroy();
      }

      this._animationStarted.complete();

      this._animationEnd.complete();

      this._modeChanged.complete();

      this._destroyed.next();

      this._destroyed.complete();
    }
    /**
     * Open the drawer.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */

  }, {
    key: "open",
    value: function open(openedVia) {
      return this.toggle(true, openedVia);
    }
    /** Close the drawer. */

  }, {
    key: "close",
    value: function close() {
      return this.toggle(false);
    }
    /** Closes the drawer with context that the backdrop was clicked. */

  }, {
    key: "_closeViaBackdropClick",
    value: function _closeViaBackdropClick() {
      // If the drawer is closed upon a backdrop click, we always want to restore focus. We
      // don't need to check whether focus is currently in the drawer, as clicking on the
      // backdrop causes blurring of the active element.
      return this._setOpen(
      /* isOpen */
      false,
      /* restoreFocus */
      true);
    }
    /**
     * Toggle this drawer.
     * @param isOpen Whether the drawer should be open.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */

  }, {
    key: "toggle",
    value: function toggle() {
      var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.opened;
      var openedVia = arguments.length > 1 ? arguments[1] : undefined;
      // If the focus is currently inside the drawer content and we are closing the drawer,
      // restore the focus to the initially focused element (when the drawer opened).
      return this._setOpen(isOpen,
      /* restoreFocus */
      !isOpen && this._isFocusWithinDrawer(), openedVia);
    }
    /**
     * Toggles the opened state of the drawer.
     * @param isOpen Whether the drawer should open or close.
     * @param restoreFocus Whether focus should be restored on close.
     * @param openedVia Focus origin that can be optionally set when opening a drawer. The
     *   origin will be used later when focus is restored on drawer close.
     */

  }, {
    key: "_setOpen",
    value: function _setOpen(isOpen, restoreFocus) {
      var _this5 = this;

      var openedVia = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'program';
      this._opened = isOpen;

      if (isOpen) {
        this._animationState = this._enableAnimations ? 'open' : 'open-instant';
        this._openedVia = openedVia;
      } else {
        this._animationState = 'void';

        if (restoreFocus) {
          this._restoreFocus();
        }
      }

      this._updateFocusTrapState();

      return new Promise(function (resolve) {
        _this5.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function (open) {
          return resolve(open ? 'open' : 'close');
        });
      });
    }
  }, {
    key: "_getWidth",
    value: function _getWidth() {
      return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
    }
    /** Updates the enabled state of the focus trap. */

  }, {
    key: "_updateFocusTrapState",
    value: function _updateFocusTrapState() {
      if (this._focusTrap) {
        // The focus trap is only enabled when the drawer is open in any mode other than side.
        this._focusTrap.enabled = this.opened && this.mode !== 'side';
      }
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete

  }, {
    key: "_animationStartListener",
    value: function _animationStartListener(event) {
      this._animationStarted.next(event);
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete

  }, {
    key: "_animationDoneListener",
    value: function _animationDoneListener(event) {
      this._animationEnd.next(event);
    }
  }]);

  return MatDrawer;
}();

MatDrawer.ɵfac = function MatDrawer_Factory(t) {
  return new (t || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
};

MatDrawer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatDrawer,
  selectors: [["mat-drawer"]],
  hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
  hostVars: 12,
  hostBindings: function MatDrawer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsyntheticHostListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
        return ctx._animationStartListener($event);
      })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
        return ctx._animationDoneListener($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsyntheticHostProperty"]("@transform", ctx._animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
    }
  },
  inputs: {
    position: "position",
    mode: "mode",
    disableClose: "disableClose",
    autoFocus: "autoFocus",
    opened: "opened"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    openedStart: "openedStart",
    _closedStream: "closed",
    closedStart: "closedStart",
    onPositionChanged: "positionChanged"
  },
  exportAs: ["matDrawer"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-drawer-inner-container"]],
  template: function MatDrawer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  data: {
    animation: [matDrawerAnimations.transformDrawer]
  },
  changeDetection: 0
});

MatDrawer.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
    }]
  }, {
    type: MatDrawerContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_DRAWER_CONTAINER]
    }]
  }];
};

MatDrawer.propDecorators = {
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  mode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  disableClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  autoFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  opened: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  _animationState: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"],
    args: ['@transform']
  }],
  openedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  _openedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['opened']
  }],
  openedStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  _closedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['closed']
  }],
  closedStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  onPositionChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['positionChanged']
  }],
  _animationStartListener: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['@transform.start', ['$event']]
  }],
  _animationDoneListener: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
    args: ['@transform.done', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatDrawer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-drawer',
      exportAs: 'matDrawer',
      template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
      animations: [matDrawerAnimations.transformDrawer],
      host: {
        'class': 'mat-drawer',
        // must prevent the browser from aligning text based on value
        '[attr.align]': 'null',
        '[class.mat-drawer-end]': 'position === "end"',
        '[class.mat-drawer-over]': 'mode === "over"',
        '[class.mat-drawer-push]': 'mode === "push"',
        '[class.mat-drawer-side]': 'mode === "side"',
        '[class.mat-drawer-opened]': 'opened',
        'tabIndex': '-1'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusTrapFactory"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
      }]
    }, {
      type: MatDrawerContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_DRAWER_CONTAINER]
      }]
    }];
  }, {
    _animationState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"],
      args: ['@transform']
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['opened']
    }],
    openedStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['closed']
    }],
    closedStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    onPositionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['positionChanged']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    disableClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    autoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _animationStartListener: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['@transform.start', ['$event']]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _animationDoneListener: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["HostListener"],
      args: ['@transform.done', ['$event']]
    }]
  });
})();
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */


var MatDrawerContainer = /*#__PURE__*/function () {
  function MatDrawerContainer(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler) {
    var _this6 = this;

    var defaultAutosize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    var _animationMode = arguments.length > 6 ? arguments[6] : undefined;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatDrawerContainer);

    this._dir = _dir;
    this._element = _element;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** Drawers that belong to this container. */

    this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["QueryList"]();
    /** Event emitted when the drawer backdrop is clicked. */

    this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Emits on every ngDoCheck. Used for debouncing reflows. */

    this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /**
     * Margins to be applied to the content. These are used to push / shrink the drawer content when a
     * drawer is open. We use margin rather than transform even for push mode because transform breaks
     * fixed position elements inside of the transformed element.
     */

    this._contentMargins = {
      left: null,
      right: null
    };
    this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"](); // If a `Dir` directive exists up the tree, listen direction changes
    // and update the left/right properties to point to the proper start/end.

    if (_dir) {
      _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this6._validateDrawers();

        _this6.updateContentMargins();
      });
    } // Since the minimum width of the sidenav depends on the viewport width,
    // we need to recompute the margins if the viewport changes.


    viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroyed)).subscribe(function () {
      return _this6.updateContentMargins();
    });
    this._autosize = defaultAutosize;
  }
  /** The drawer child with the `start` position. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatDrawerContainer, [{
    key: "start",
    get: function get() {
      return this._start;
    }
    /** The drawer child with the `end` position. */

  }, {
    key: "end",
    get: function get() {
      return this._end;
    }
    /**
     * Whether to automatically resize the container whenever
     * the size of any of its drawers changes.
     *
     * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
     * the drawers on every change detection cycle. Can be configured globally via the
     * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
     */

  }, {
    key: "autosize",
    get: function get() {
      return this._autosize;
    },
    set: function set(value) {
      this._autosize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the drawer container should have a backdrop while one of the sidenavs is open.
     * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
     * mode as well.
     */

  }, {
    key: "hasBackdrop",
    get: function get() {
      if (this._backdropOverride == null) {
        return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
      }

      return this._backdropOverride;
    },
    set: function set(value) {
      this._backdropOverride = value == null ? null : Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /** Reference to the CdkScrollable instance that wraps the scrollable content. */

  }, {
    key: "scrollable",
    get: function get() {
      return this._userContent || this._content;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this7 = this;

      this._allDrawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(this._allDrawers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroyed)).subscribe(function (drawer) {
        _this7._drawers.reset(drawer.filter(function (item) {
          return !item._container || item._container === _this7;
        }));

        _this7._drawers.notifyOnChanges();
      });

      this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(null)).subscribe(function () {
        _this7._validateDrawers();

        _this7._drawers.forEach(function (drawer) {
          _this7._watchDrawerToggle(drawer);

          _this7._watchDrawerPosition(drawer);

          _this7._watchDrawerMode(drawer);
        });

        if (!_this7._drawers.length || _this7._isDrawerOpen(_this7._start) || _this7._isDrawerOpen(_this7._end)) {
          _this7.updateContentMargins();
        }

        _this7._changeDetectorRef.markForCheck();
      }); // Avoid hitting the NgZone through the debounce timeout.


      this._ngZone.runOutsideAngular(function () {
        _this7._doCheckSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["debounceTime"])(10), // Arbitrary debounce time, less than a frame at 60fps
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(_this7._destroyed)).subscribe(function () {
          return _this7.updateContentMargins();
        });
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._contentMarginChanges.complete();

      this._doCheckSubject.complete();

      this._drawers.destroy();

      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Calls `open` of both start and end drawers */

  }, {
    key: "open",
    value: function open() {
      this._drawers.forEach(function (drawer) {
        return drawer.open();
      });
    }
    /** Calls `close` of both start and end drawers */

  }, {
    key: "close",
    value: function close() {
      this._drawers.forEach(function (drawer) {
        return drawer.close();
      });
    }
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     */

  }, {
    key: "updateContentMargins",
    value: function updateContentMargins() {
      var _this8 = this;

      // 1. For drawers in `over` mode, they don't affect the content.
      // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
      //    left margin (for left drawer) or right margin (for right the drawer).
      // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
      //    adding to the left or right margin and simultaneously subtracting the same amount of
      //    margin from the other side.
      var left = 0;
      var right = 0;

      if (this._left && this._left.opened) {
        if (this._left.mode == 'side') {
          left += this._left._getWidth();
        } else if (this._left.mode == 'push') {
          var width = this._left._getWidth();

          left += width;
          right -= width;
        }
      }

      if (this._right && this._right.opened) {
        if (this._right.mode == 'side') {
          right += this._right._getWidth();
        } else if (this._right.mode == 'push') {
          var _width = this._right._getWidth();

          right += _width;
          left -= _width;
        }
      } // If either `right` or `left` is zero, don't set a style to the element. This
      // allows users to specify a custom size via CSS class in SSR scenarios where the
      // measured widths will always be zero. Note that we reset to `null` here, rather
      // than below, in order to ensure that the types in the `if` below are consistent.


      left = left || null;
      right = right || null;

      if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
        this._contentMargins = {
          left: left,
          right: right
        }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
        // to do it only when something changed, otherwise we can end up hitting the zone too often.

        this._ngZone.run(function () {
          return _this8._contentMarginChanges.next(_this8._contentMargins);
        });
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      var _this9 = this;

      // If users opted into autosizing, do a check every change detection cycle.
      if (this._autosize && this._isPushed()) {
        // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(function () {
          return _this9._doCheckSubject.next();
        });
      }
    }
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */

  }, {
    key: "_watchDrawerToggle",
    value: function _watchDrawerToggle(drawer) {
      var _this10 = this;

      drawer._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (event) {
        return event.fromState !== event.toState;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._drawers.changes)).subscribe(function (event) {
        // Set the transition class on the container so that the animations occur. This should not
        // be set initially because animations should only be triggered via a change in state.
        if (event.toState !== 'open-instant' && _this10._animationMode !== 'NoopAnimations') {
          _this10._element.nativeElement.classList.add('mat-drawer-transition');
        }

        _this10.updateContentMargins();

        _this10._changeDetectorRef.markForCheck();
      });

      if (drawer.mode !== 'side') {
        drawer.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._drawers.changes)).subscribe(function () {
          return _this10._setContainerClass(drawer.opened);
        });
      }
    }
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     */

  }, {
    key: "_watchDrawerPosition",
    value: function _watchDrawerPosition(drawer) {
      var _this11 = this;

      if (!drawer) {
        return;
      } // NOTE: We need to wait for the microtask queue to be empty before validating,
      // since both drawers may be swapping positions at the same time.


      drawer.onPositionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._drawers.changes)).subscribe(function () {
        _this11._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
          _this11._validateDrawers();
        });
      });
    }
    /** Subscribes to changes in drawer mode so we can run change detection. */

  }, {
    key: "_watchDrawerMode",
    value: function _watchDrawerMode(drawer) {
      var _this12 = this;

      if (drawer) {
        drawer._modeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this._drawers.changes, this._destroyed))).subscribe(function () {
          _this12.updateContentMargins();

          _this12._changeDetectorRef.markForCheck();
        });
      }
    }
    /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */

  }, {
    key: "_setContainerClass",
    value: function _setContainerClass(isAdd) {
      var classList = this._element.nativeElement.classList;
      var className = 'mat-drawer-container-has-open';

      if (isAdd) {
        classList.add(className);
      } else {
        classList.remove(className);
      }
    }
    /** Validate the state of the drawer children components. */

  }, {
    key: "_validateDrawers",
    value: function _validateDrawers() {
      var _this13 = this;

      this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

      this._drawers.forEach(function (drawer) {
        if (drawer.position == 'end') {
          if (_this13._end != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDuplicatedDrawerError('end');
          }

          _this13._end = drawer;
        } else {
          if (_this13._start != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDuplicatedDrawerError('start');
          }

          _this13._start = drawer;
        }
      });

      this._right = this._left = null; // Detect if we're LTR or RTL.

      if (this._dir && this._dir.value === 'rtl') {
        this._left = this._end;
        this._right = this._start;
      } else {
        this._left = this._start;
        this._right = this._end;
      }
    }
    /** Whether the container is being pushed to the side by one of the drawers. */

  }, {
    key: "_isPushed",
    value: function _isPushed() {
      return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
    }
  }, {
    key: "_onBackdropClicked",
    value: function _onBackdropClicked() {
      this.backdropClick.emit();

      this._closeModalDrawersViaBackdrop();
    }
  }, {
    key: "_closeModalDrawersViaBackdrop",
    value: function _closeModalDrawersViaBackdrop() {
      var _this14 = this;

      // Close all open drawers where closing is not disabled and the mode is not `side`.
      [this._start, this._end].filter(function (drawer) {
        return drawer && !drawer.disableClose && _this14._canHaveBackdrop(drawer);
      }).forEach(function (drawer) {
        return drawer._closeViaBackdropClick();
      });
    }
  }, {
    key: "_isShowingBackdrop",
    value: function _isShowingBackdrop() {
      return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
    }
  }, {
    key: "_canHaveBackdrop",
    value: function _canHaveBackdrop(drawer) {
      return drawer.mode !== 'side' || !!this._backdropOverride;
    }
  }, {
    key: "_isDrawerOpen",
    value: function _isDrawerOpen(drawer) {
      return drawer != null && drawer.opened;
    }
  }]);

  return MatDrawerContainer;
}();

MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) {
  return new (t || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"], 8));
};

MatDrawerContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatDrawerContainer,
  selectors: [["mat-drawer-container"]],
  contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatDrawer, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
    }
  },
  viewQuery: function MatDrawerContainer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](MatDrawerContent, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
    }
  },
  hostAttrs: [1, "mat-drawer-container"],
  hostVars: 2,
  hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    }
  },
  inputs: {
    autosize: "autosize",
    hasBackdrop: "hasBackdrop"
  },
  outputs: {
    backdropClick: "backdropClick"
  },
  exportAs: ["matDrawerContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: MatDrawerContainer
  }])],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 2,
  consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
  template: function MatDrawerContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx._content);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], MatDrawerContent],
  styles: [_c5],
  encapsulation: 2,
  changeDetection: 0
});

MatDrawerContainer.ctorParameters = function () {
  return [{
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatDrawerContainer.propDecorators = {
  _allDrawers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MatDrawer, {
      // We need to use `descendants: true`, because Ivy will no longer match
      // indirect descendants if it's left as false.
      descendants: true
    }]
  }],
  _content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatDrawerContent]
  }],
  _userContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: [MatDrawerContent]
  }],
  autosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hasBackdrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  backdropClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatDrawerContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-drawer-container',
      exportAs: 'matDrawerContainer',
      template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-drawer\"></ng-content>\n\n<ng-content select=\"mat-drawer-content\">\n</ng-content>\n<mat-drawer-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-drawer-content>\n",
      host: {
        'class': 'mat-drawer-container',
        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    backdropClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    autosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    _allDrawers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: [MatDrawerContent]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatSidenavContent = /*#__PURE__*/function (_MatDrawerContent) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatSidenavContent, _MatDrawerContent);

  var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSidenavContent);

  function MatSidenavContent(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatSidenavContent);

    return _super2.call(this, changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
  }

  return MatSidenavContent;
}(MatDrawerContent);

MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) {
  return new (t || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
    return MatSidenavContainer;
  })), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]));
};

MatSidenavContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatSidenavContent,
  selectors: [["mat-sidenav-content"]],
  hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
  hostVars: 4,
  hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatSidenavContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

MatSidenavContent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: MatSidenavContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
        return MatSidenavContainer;
      })]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatSidenavContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-sidenav-content',
      template: '<ng-content></ng-content>',
      host: {
        'class': 'mat-drawer-content mat-sidenav-content',
        '[style.margin-left.px]': '_container._contentMargins.left',
        '[style.margin-right.px]': '_container._contentMargins.right'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: MatSidenavContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () {
          return MatSidenavContainer;
        })]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }];
  }, null);
})();

var MatSidenav = /*#__PURE__*/function (_MatDrawer) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatSidenav, _MatDrawer);

  var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSidenav);

  function MatSidenav() {
    var _this15;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatSidenav);

    _this15 = _super3.apply(this, arguments);
    _this15._fixedInViewport = false;
    _this15._fixedTopGap = 0;
    _this15._fixedBottomGap = 0;
    return _this15;
  }
  /** Whether the sidenav is fixed in the viewport. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatSidenav, [{
    key: "fixedInViewport",
    get: function get() {
      return this._fixedInViewport;
    },
    set: function set(value) {
      this._fixedInViewport = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
    }
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */

  }, {
    key: "fixedTopGap",
    get: function get() {
      return this._fixedTopGap;
    },
    set: function set(value) {
      this._fixedTopGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);
    }
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */

  }, {
    key: "fixedBottomGap",
    get: function get() {
      return this._fixedBottomGap;
    },
    set: function set(value) {
      this._fixedBottomGap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);
    }
  }]);

  return MatSidenav;
}(MatDrawer);

MatSidenav.ɵfac = function MatSidenav_Factory(t) {
  return ɵMatSidenav_BaseFactory(t || MatSidenav);
};

MatSidenav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatSidenav,
  selectors: [["mat-sidenav"]],
  hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
  hostVars: 17,
  hostBindings: function MatSidenav_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
    }
  },
  inputs: {
    fixedInViewport: "fixedInViewport",
    fixedTopGap: "fixedTopGap",
    fixedBottomGap: "fixedBottomGap"
  },
  exportAs: ["matSidenav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-drawer-inner-container"]],
  template: function MatSidenav_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2,
  data: {
    animation: [matDrawerAnimations.transformDrawer]
  },
  changeDetection: 0
});
MatSidenav.propDecorators = {
  fixedInViewport: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  fixedTopGap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  fixedBottomGap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
var ɵMatSidenav_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatSidenav);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatSidenav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-sidenav',
      exportAs: 'matSidenav',
      template: "<div class=\"mat-drawer-inner-container\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
      animations: [matDrawerAnimations.transformDrawer],
      host: {
        'class': 'mat-drawer mat-sidenav',
        'tabIndex': '-1',
        // must prevent the browser from aligning text based on value
        '[attr.align]': 'null',
        '[class.mat-drawer-end]': 'position === "end"',
        '[class.mat-drawer-over]': 'mode === "over"',
        '[class.mat-drawer-push]': 'mode === "push"',
        '[class.mat-drawer-side]': 'mode === "side"',
        '[class.mat-drawer-opened]': 'opened',
        '[class.mat-sidenav-fixed]': 'fixedInViewport',
        '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
        '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None
    }]
  }], null, {
    fixedInViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    fixedTopGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    fixedBottomGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();

var MatSidenavContainer = /*#__PURE__*/function (_MatDrawerContainer) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatSidenavContainer, _MatDrawerContainer);

  var _super4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSidenavContainer);

  function MatSidenavContainer() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatSidenavContainer);

    return _super4.apply(this, arguments);
  }

  return MatSidenavContainer;
}(MatDrawerContainer);

MatSidenavContainer.ɵfac = function MatSidenavContainer_Factory(t) {
  return ɵMatSidenavContainer_BaseFactory(t || MatSidenavContainer);
};

MatSidenavContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatSidenavContainer,
  selectors: [["mat-sidenav-container"]],
  contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatSidenav, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
    }
  },
  hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
  hostVars: 2,
  hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    }
  },
  exportAs: ["matSidenavContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: MatSidenavContainer
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 2,
  consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], ["cdkScrollable", "", 4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"], ["cdkScrollable", ""]],
  template: function MatSidenavContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx._content);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], MatSidenavContent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollable"]],
  styles: [_c5],
  encapsulation: 2,
  changeDetection: 0
});
MatSidenavContainer.propDecorators = {
  _allDrawers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MatSidenav, {
      // We need to use `descendants: true`, because Ivy will no longer match
      // indirect descendants if it's left as false.
      descendants: true
    }]
  }],
  _content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatSidenavContent]
  }]
};
var ɵMatSidenavContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](MatSidenavContainer);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatSidenavContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-sidenav-container',
      exportAs: 'matSidenavContainer',
      template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-sidenav\"></ng-content>\n\n<ng-content select=\"mat-sidenav-content\">\n</ng-content>\n<mat-sidenav-content *ngIf=\"!_content\" cdkScrollable>\n  <ng-content></ng-content>\n</mat-sidenav-content>\n",
      host: {
        'class': 'mat-drawer-container mat-sidenav-container',
        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }],
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], null, {
    _allDrawers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatSidenavContent]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatSidenavModule = function MatSidenavModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatSidenavModule);
};

MatSidenavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatSidenavModule
});
MatSidenavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatSidenavModule_Factory(t) {
    return new (t || MatSidenavModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatSidenavModule, {
    declarations: function declarations() {
      return [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatSidenavModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      declarations: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "VCnB");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "PI13");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "eMzQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MainModule });
    MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]
            ]] });
    return MainModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
        _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]] }); })();


/***/ }),

/***/ "cH1L":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
  \*****************************************************************/
/*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */


var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */

function DIR_DOCUMENT_FACTORY() {
  return Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */


var Directionality = /*#__PURE__*/function () {
  function Directionality(_document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Directionality);

    /** The current 'ltr' or 'rtl' value. */
    this.value = 'ltr';
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

    if (_document) {
      // TODO: handle 'auto' value -
      // We still need to account for dir="auto".
      // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
      // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
      var bodyDir = _document.body ? _document.body.dir : null;
      var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      var value = bodyDir || htmlDir;
      this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
    }
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Directionality, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.change.complete();
    }
  }]);

  return Directionality;
}();

Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DIR_DOCUMENT, 8));
};

Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function Directionality_Factory() {
    return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(DIR_DOCUMENT, 8));
  },
  token: Directionality,
  providedIn: "root"
});

Directionality.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [DIR_DOCUMENT]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */


var Dir = /*#__PURE__*/function () {
  function Dir() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dir);

    /** Normalized direction that accounts for invalid/unsupported values. */
    this._dir = 'ltr';
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Event emitted when the direction changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
  }
  /** @docs-private */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dir, [{
    key: "dir",
    get: function get() {
      return this._dir;
    },
    set: function set(value) {
      var old = this._dir;
      var normalizedValue = value ? value.toLowerCase() : value;
      this._rawDir = value;
      this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

      if (old !== this._dir && this._isInitialized) {
        this.change.emit(this._dir);
      }
    }
    /** Current layout direction of the element. */

  }, {
    key: "value",
    get: function get() {
      return this.dir;
    }
    /** Initialize once default value has been set. */

  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this._isInitialized = true;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.change.complete();
    }
  }]);

  return Dir;
}();

Dir.ɵfac = function Dir_Factory(t) {
  return new (t || Dir)();
};

Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: Directionality,
    useExisting: Dir
  }])]
});
Dir.propDecorators = {
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
    args: ['dirChange']
  }],
  dir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], function () {
    return [];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var BidiModule = function BidiModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BidiModule);
};

BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: BidiModule
});
BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function BidiModule_Factory(t) {
    return new (t || BidiModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BidiModule, {
    declarations: [Dir],
    exports: [Dir]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "eMzQ":
/*!****************************************************************************!*\
  !*** ./src/app/main/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "content"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "page not found");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  background: #e5e5e5;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 300px;\n  padding: 20px;\n  border: 1px solid #d5d9de;\n  background: #ffffff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "f6nW":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \******************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, STICKY_POSITIONING_LISTENER, StickyStyler, TEXT_COLUMN_OPTIONS, _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function() { return CdkNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function() { return NoDataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_POSITIONING_LISTENER", function() { return STICKY_POSITIONING_LISTENER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_COALESCED_STYLE_SCHEDULER", function() { return _COALESCED_STYLE_SCHEDULER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function() { return _CoalescedStyleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Schedule", function() { return _Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");















var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
var _c1 = ["caption", "colgroup, col"];

function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var data_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */

function mixinHasStickyInput(base) {
  return /*#__PURE__*/function (_base) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, _base);

    var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(_class);

    function _class() {
      var _this;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this._sticky = false;
      /** Whether the sticky input has changed since it was last checked. */

      _this._hasStickyChanged = false;
      return _this;
    }
    /** Whether sticky positioning should be applied. */


    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, [{
      key: "sticky",
      get: function get() {
        return this._sticky;
      },
      set: function set(v) {
        var prevValue = this._sticky;
        this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._sticky;
      }
      /** Whether the sticky value has changed since this was last called. */

    }, {
      key: "hasStickyChanged",
      value: function hasStickyChanged() {
        var hasStickyChanged = this._hasStickyChanged;
        this._hasStickyChanged = false;
        return hasStickyChanged;
      }
      /** Resets the dirty check for cases where the sticky state has been used without checking. */

    }, {
      key: "resetStickyChanged",
      value: function resetStickyChanged() {
        this._hasStickyChanged = false;
      }
    }]);

    return _class;
  }(base);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */


var CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */

var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('text-column-options');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */

var CdkCellDef = function CdkCellDef(
/** @docs-private */
template) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkCellDef);

  this.template = template;
};

CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
  return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]));
};

CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkCellDef,
  selectors: [["", "cdkCellDef", ""]]
});

CdkCellDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkCellDef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }];
  }, null);
})();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */


var CdkHeaderCellDef = function CdkHeaderCellDef(
/** @docs-private */
template) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkHeaderCellDef);

  this.template = template;
};

CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
  return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]));
};

CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkHeaderCellDef,
  selectors: [["", "cdkHeaderCellDef", ""]]
});

CdkHeaderCellDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkHeaderCellDef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }];
  }, null);
})();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */


var CdkFooterCellDef = function CdkFooterCellDef(
/** @docs-private */
template) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkFooterCellDef);

  this.template = template;
};

CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
  return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]));
};

CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkFooterCellDef,
  selectors: [["", "cdkFooterCellDef", ""]]
});

CdkFooterCellDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkFooterCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkFooterCellDef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }];
  }, null);
})(); // Boilerplate for applying mixins to CdkColumnDef.

/** @docs-private */


var CdkColumnDefBase = function CdkColumnDefBase() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkColumnDefBase);
};

var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */


var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkColumnDef, _CdkColumnDefBase2);

  var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkColumnDef);

  function CdkColumnDef(_table) {
    var _this2;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkColumnDef);

    _this2 = _super2.call(this);
    _this2._table = _table;
    _this2._stickyEnd = false;
    return _this2;
  }
  /** Unique name for this column. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkColumnDef, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._setNameInput(name);
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */

  }, {
    key: "stickyEnd",
    get: function get() {
      return this._stickyEnd;
    },
    set: function set(v) {
      var prevValue = this._stickyEnd;
      this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(v);
      this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */

  }, {
    key: "_updateColumnCssClassName",
    value: function _updateColumnCssClassName() {
      this._columnCssClassName = ["cdk-column-".concat(this.cssClassFriendlyName)];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */

  }, {
    key: "_setNameInput",
    value: function _setNameInput(value) {
      // If the directive is set without a name (updated programatically), then this setter will
      // trigger with an empty string and should not overwrite the programatically set value.
      if (value) {
        this._name = value;
        this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');

        this._updateColumnCssClassName();
      }
    }
  }]);

  return CdkColumnDef;
}(_CdkColumnDefBase);

CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
  return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkColumnDef,
  selectors: [["", "cdkColumnDef", ""]],
  contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkCellDef, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    }
  },
  inputs: {
    sticky: "sticky",
    name: ["cdkColumnDef", "name"],
    stickyEnd: "stickyEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([{
    provide: 'MAT_SORT_HEADER_COLUMN_DEF',
    useExisting: CdkColumnDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]]
});

CdkColumnDef.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [CDK_TABLE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

CdkColumnDef.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
    args: ['cdkColumnDef']
  }],
  stickyEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
    args: ['stickyEnd']
  }],
  cell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
    args: [CdkCellDef]
  }],
  headerCell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
    args: [CdkHeaderCellDef]
  }],
  footerCell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
    args: [CdkFooterCellDef]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkColumnDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkColumnDef]',
      inputs: ['sticky'],
      providers: [{
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: CdkColumnDef
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
      args: ['cdkColumnDef']
    }],
    stickyEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"],
      args: ['stickyEnd']
    }],
    cell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
      args: [CdkFooterCellDef]
    }]
  });
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


var BaseCdkCell = function BaseCdkCell(columnDef, elementRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseCdkCell);

  // If IE 11 is dropped before we switch to setting a single class name, change to multi param
  // with destructuring.
  var classList = elementRef.nativeElement.classList;

  var _iterator = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(columnDef._columnCssClassName),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var className = _step.value;
      classList.add(className);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/** Header cell template container that adds the right classes and role. */


var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkHeaderCell, _BaseCdkCell);

  var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkHeaderCell);

  function CdkHeaderCell(columnDef, elementRef) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkHeaderCell);

    return _super3.call(this, columnDef, elementRef);
  }

  return CdkHeaderCell;
}(BaseCdkCell);

CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
  return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkHeaderCell,
  selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]]
});

CdkHeaderCell.ctorParameters = function () {
  return [{
    type: CdkColumnDef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkHeaderCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: 'cdk-header-cell, th[cdk-header-cell]',
      host: {
        'class': 'cdk-header-cell',
        'role': 'columnheader'
      }
    }]
  }], function () {
    return [{
      type: CdkColumnDef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/** Footer cell template container that adds the right classes and role. */


var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkFooterCell, _BaseCdkCell2);

  var _super4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkFooterCell);

  function CdkFooterCell(columnDef, elementRef) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkFooterCell);

    return _super4.call(this, columnDef, elementRef);
  }

  return CdkFooterCell;
}(BaseCdkCell);

CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
  return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkFooterCell,
  selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
  hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]]
});

CdkFooterCell.ctorParameters = function () {
  return [{
    type: CdkColumnDef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkFooterCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: 'cdk-footer-cell, td[cdk-footer-cell]',
      host: {
        'class': 'cdk-footer-cell',
        'role': 'gridcell'
      }
    }]
  }], function () {
    return [{
      type: CdkColumnDef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/** Cell template container that adds the right classes and role. */


var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkCell, _BaseCdkCell3);

  var _super5 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkCell);

  function CdkCell(columnDef, elementRef) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkCell);

    return _super5.call(this, columnDef, elementRef);
  }

  return CdkCell;
}(BaseCdkCell);

CdkCell.ɵfac = function CdkCell_Factory(t) {
  return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkCell,
  selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
  hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]]
});

CdkCell.ctorParameters = function () {
  return [{
    type: CdkColumnDef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: 'cdk-cell, td[cdk-cell]',
      host: {
        'class': 'cdk-cell',
        'role': 'gridcell'
      }
    }]
  }], function () {
    return [{
      type: CdkColumnDef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @docs-private
 */


var _Schedule = function _Schedule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _Schedule);

  this.tasks = [];
  this.endTasks = [];
};
/** Injection token used to provide a coalesced style scheduler. */


var _COALESCED_STYLE_SCHEDULER = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */


var _CoalescedStyleScheduler = /*#__PURE__*/function () {
  function _CoalescedStyleScheduler(_ngZone) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _CoalescedStyleScheduler);

    this._ngZone = _ngZone;
    this._currentSchedule = null;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
  }
  /**
   * Schedules the specified task to run at the end of the current VM turn.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_CoalescedStyleScheduler, [{
    key: "schedule",
    value: function schedule(task) {
      this._createScheduleIfNeeded();

      this._currentSchedule.tasks.push(task);
    }
    /**
     * Schedules the specified task to run after other scheduled tasks at the end of the current
     * VM turn.
     */

  }, {
    key: "scheduleEnd",
    value: function scheduleEnd(task) {
      this._createScheduleIfNeeded();

      this._currentSchedule.endTasks.push(task);
    }
    /** Prevent any further tasks from running. */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
  }, {
    key: "_createScheduleIfNeeded",
    value: function _createScheduleIfNeeded() {
      var _this3 = this;

      if (this._currentSchedule) {
        return;
      }

      this._currentSchedule = new _Schedule();

      this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        while (_this3._currentSchedule.tasks.length || _this3._currentSchedule.endTasks.length) {
          var schedule = _this3._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

          _this3._currentSchedule = new _Schedule();

          var _iterator2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(schedule.tasks),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var task = _step2.value;
              task();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var _iterator3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(schedule.endTasks),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _task = _step3.value;

              _task();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        _this3._currentSchedule = null;
      });
    }
  }, {
    key: "_getScheduleObservable",
    value: function _getScheduleObservable() {
      // Use onStable when in the context of an ongoing change detection cycle so that we
      // do not accidentally trigger additional cycles.
      return this._ngZone.isStable ? Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["from"])(Promise.resolve(undefined)) : this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1));
    }
  }]);

  return _CoalescedStyleScheduler;
}();

_CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
  return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"]));
};

_CoalescedStyleScheduler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: _CoalescedStyleScheduler,
  factory: _CoalescedStyleScheduler.ɵfac
});

_CoalescedStyleScheduler.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](_CoalescedStyleScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */


var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */

var BaseRowDef = /*#__PURE__*/function () {
  function BaseRowDef(
  /** @docs-private */
  template, _differs) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BaseRowDef);

    this.template = template;
    this._differs = _differs;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BaseRowDef, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Create a new columns differ if one does not yet exist. Initialize it based on initial value
      // of the columns property or an empty array if none is provided.
      if (!this._columnsDiffer) {
        var columns = changes['columns'] && changes['columns'].currentValue || [];
        this._columnsDiffer = this._differs.find(columns).create();

        this._columnsDiffer.diff(columns);
      }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */

  }, {
    key: "getColumnsDiff",
    value: function getColumnsDiff() {
      return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */

  }, {
    key: "extractCellTemplate",
    value: function extractCellTemplate(column) {
      if (this instanceof CdkHeaderRowDef) {
        return column.headerCell.template;
      }

      if (this instanceof CdkFooterRowDef) {
        return column.footerCell.template;
      } else {
        return column.cell.template;
      }
    }
  }]);

  return BaseRowDef;
}();

BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
  return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]));
};

BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: BaseRowDef,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]]
});

BaseRowDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](BaseRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }];
  }, null);
})(); // Boilerplate for applying mixins to CdkHeaderRowDef.

/** @docs-private */


var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkHeaderRowDefBase, _BaseRowDef);

  var _super6 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkHeaderRowDefBase);

  function CdkHeaderRowDefBase() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkHeaderRowDefBase);

    return _super6.apply(this, arguments);
  }

  return CdkHeaderRowDefBase;
}(BaseRowDef);

var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */


var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

  var _super7 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkHeaderRowDef);

  function CdkHeaderRowDef(template, _differs, _table) {
    var _this4;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkHeaderRowDef);

    _this4 = _super7.call(this, template, _differs);
    _this4._table = _table;
    return _this4;
  } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkHeaderRowDef, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
    }
  }]);

  return CdkHeaderRowDef;
}(_CdkHeaderRowDefBase);

CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
  return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkHeaderRowDef,
  selectors: [["", "cdkHeaderRowDef", ""]],
  inputs: {
    columns: ["cdkHeaderRowDef", "columns"],
    sticky: ["cdkHeaderRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]]
});

CdkHeaderRowDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [CDK_TABLE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkHeaderRowDef]',
      inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, null);
})(); // Boilerplate for applying mixins to CdkFooterRowDef.

/** @docs-private */


var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkFooterRowDefBase, _BaseRowDef2);

  var _super8 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkFooterRowDefBase);

  function CdkFooterRowDefBase() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkFooterRowDefBase);

    return _super8.apply(this, arguments);
  }

  return CdkFooterRowDefBase;
}(BaseRowDef);

var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */


var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkFooterRowDef, _CdkFooterRowDefBase2);

  var _super9 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkFooterRowDef);

  function CdkFooterRowDef(template, _differs, _table) {
    var _this5;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkFooterRowDef);

    _this5 = _super9.call(this, template, _differs);
    _this5._table = _table;
    return _this5;
  } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkFooterRowDef, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
    }
  }]);

  return CdkFooterRowDef;
}(_CdkFooterRowDefBase);

CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
  return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkFooterRowDef,
  selectors: [["", "cdkFooterRowDef", ""]],
  inputs: {
    columns: ["cdkFooterRowDef", "columns"],
    sticky: ["cdkFooterRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]]
});

CdkFooterRowDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [CDK_TABLE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkFooterRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkFooterRowDef]',
      inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, null);
})();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */


var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CdkRowDef, _BaseRowDef3);

  var _super10 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkRowDef);

  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  function CdkRowDef(template, _differs, _table) {
    var _this6;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkRowDef);

    _this6 = _super10.call(this, template, _differs);
    _this6._table = _table;
    return _this6;
  }

  return CdkRowDef;
}(BaseRowDef);

CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
  return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkRowDef,
  selectors: [["", "cdkRowDef", ""]],
  inputs: {
    columns: ["cdkRowDefColumns", "columns"],
    when: ["cdkRowDefWhen", "when"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]]
});

CdkRowDef.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [CDK_TABLE]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkRowDef]',
      inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, null);
})();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */


var CdkCellOutlet = /*#__PURE__*/function () {
  function CdkCellOutlet(_viewContainer) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkCellOutlet);

    this._viewContainer = _viewContainer;
    CdkCellOutlet.mostRecentCellOutlet = this;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkCellOutlet, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // If this was the last outlet being rendered in the view, remove the reference
      // from the static property after it has been destroyed to avoid leaking memory.
      if (CdkCellOutlet.mostRecentCellOutlet === this) {
        CdkCellOutlet.mostRecentCellOutlet = null;
      }
    }
  }]);

  return CdkCellOutlet;
}();

CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
  return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]));
};

CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkCellOutlet,
  selectors: [["", "cdkCellOutlet", ""]]
});
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */

CdkCellOutlet.mostRecentCellOutlet = null;

CdkCellOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkCellOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[cdkCellOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
    }];
  }, null);
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */


var CdkHeaderRow = function CdkHeaderRow() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkHeaderRow);
};

CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
  return new (t || CdkHeaderRow)();
};

CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CdkHeaderRow,
  selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-header-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkHeaderRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"],
    args: [{
      selector: 'cdk-header-row, tr[cdk-header-row]',
      template: CDK_ROW_TEMPLATE,
      host: {
        'class': 'cdk-header-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None
    }]
  }], null, null);
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */


var CdkFooterRow = function CdkFooterRow() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkFooterRow);
};

CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
  return new (t || CdkFooterRow)();
};

CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CdkFooterRow,
  selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-footer-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkFooterRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"],
    args: [{
      selector: 'cdk-footer-row, tr[cdk-footer-row]',
      template: CDK_ROW_TEMPLATE,
      host: {
        'class': 'cdk-footer-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None
    }]
  }], null, null);
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */


var CdkRow = function CdkRow() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkRow);
};

CdkRow.ɵfac = function CdkRow_Factory(t) {
  return new (t || CdkRow)();
};

CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CdkRow,
  selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"],
    args: [{
      selector: 'cdk-row, tr[cdk-row]',
      template: CDK_ROW_TEMPLATE,
      host: {
        'class': 'cdk-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None
    }]
  }], null, null);
})();
/** Row that can be used to display a message when no data is shown in the table. */


var CdkNoDataRow = function CdkNoDataRow(templateRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkNoDataRow);

  this.templateRef = templateRef;
};

CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
  return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]));
};

CdkNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: CdkNoDataRow,
  selectors: [["ng-template", "cdkNoDataRow", ""]]
});

CdkNoDataRow.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkNoDataRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: 'ng-template[cdkNoDataRow]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["TemplateRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */


var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */

var StickyStyler = /*#__PURE__*/function () {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction,
  /**
   * @deprecated `_coalescedStyleScheduler` parameter to become required.
   * @breaking-change 11.0.0
   */
  _coalescedStyleScheduler) {
    var _isBrowser = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var _needsPositionStickyOnElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    var _positionListener = arguments.length > 6 ? arguments[6] : undefined;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, StickyStyler);

    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      'top': "".concat(_stickCellCss, "-border-elem-top"),
      'bottom': "".concat(_stickCellCss, "-border-elem-bottom"),
      'left': "".concat(_stickCellCss, "-border-elem-left"),
      'right': "".concat(_stickCellCss, "-border-elem-right")
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(StickyStyler, [{
    key: "clearStickyPositioning",
    value: function clearStickyPositioning(rows, stickyDirections) {
      var _this7 = this;

      var elementsToClear = [];

      var _iterator4 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(rows),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var row = _step4.value;

          // If the row isn't an element (e.g. if it's an `ng-container`),
          // it won't have inline styles or `children` so we skip it.
          if (row.nodeType !== row.ELEMENT_NODE) {
            continue;
          }

          elementsToClear.push(row);

          for (var i = 0; i < row.children.length; i++) {
            elementsToClear.push(row.children[i]);
          }
        } // Coalesce with sticky row/column updates (and potentially other changes like column resize).

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this._scheduleStyleChanges(function () {
        var _iterator5 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(elementsToClear),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var element = _step5.value;

            _this7._removeStickyStyle(element, stickyDirections);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
     *     column cell. If `false` cached widths will be used instead.
     */

  }, {
    key: "updateStickyColumns",
    value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
      var _this8 = this;

      var recalculateCellWidths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (!rows.length || !this._isBrowser || !(stickyStartStates.some(function (state) {
        return state;
      }) || stickyEndStates.some(function (state) {
        return state;
      }))) {
        if (this._positionListener) {
          this._positionListener.stickyColumnsUpdated({
            sizes: []
          });

          this._positionListener.stickyEndColumnsUpdated({
            sizes: []
          });
        }

        return;
      }

      var firstRow = rows[0];
      var numCells = firstRow.children.length;

      var cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);

      var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

      var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

      var lastStickyStart = stickyStartStates.lastIndexOf(true);
      var firstStickyEnd = stickyEndStates.indexOf(true); // Coalesce with sticky row updates (and potentially other changes like column resize).

      this._scheduleStyleChanges(function () {
        var isRtl = _this8.direction === 'rtl';
        var start = isRtl ? 'right' : 'left';
        var end = isRtl ? 'left' : 'right';

        var _iterator6 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(rows),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var row = _step6.value;

            for (var i = 0; i < numCells; i++) {
              var cell = row.children[i];

              if (stickyStartStates[i]) {
                _this8._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
              }

              if (stickyEndStates[i]) {
                _this8._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
              }
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        if (_this8._positionListener) {
          _this8._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map(function (width, index) {
              return stickyStartStates[index] ? width : null;
            })
          });

          _this8._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map(function (width, index) {
              return stickyEndStates[index + firstStickyEnd] ? width : null;
            }).reverse()
          });
        }
      });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */

  }, {
    key: "stickRows",
    value: function stickRows(rowsToStick, stickyStates, position) {
      var _this9 = this;

      // Since we can't measure the rows on the server, we can't stick the rows properly.
      if (!this._isBrowser) {
        return;
      } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
      // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
      // sticky states need to be reversed as well.


      var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
      var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

      var stickyOffsets = [];
      var stickyCellHeights = [];
      var elementsToStick = [];

      for (var rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
        stickyOffsets[rowIndex] = stickyOffset;

        if (!states[rowIndex]) {
          continue;
        }

        var row = rows[rowIndex];
        elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
        var height = row.getBoundingClientRect().height;
        stickyOffset += height;
        stickyCellHeights[rowIndex] = height;
      }

      var borderedRowIndex = states.lastIndexOf(true); // Coalesce with other sticky row updates (top/bottom), sticky columns updates
      // (and potentially other changes like column resize).

      this._scheduleStyleChanges(function () {
        var _a, _b;

        for (var _rowIndex = 0; _rowIndex < rows.length; _rowIndex++) {
          if (!states[_rowIndex]) {
            continue;
          }

          var offset = stickyOffsets[_rowIndex];
          var isBorderedRowIndex = _rowIndex === borderedRowIndex;

          var _iterator7 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(elementsToStick[_rowIndex]),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var element = _step7.value;

              _this9._addStickyStyle(element, position, offset, isBorderedRowIndex);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }

        if (position === 'top') {
          (_a = _this9._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            elements: elementsToStick
          });
        } else {
          (_b = _this9._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            elements: elementsToStick
          });
        }
      });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */

  }, {
    key: "updateStickyFooterContainer",
    value: function updateStickyFooterContainer(tableElement, stickyStates) {
      var _this10 = this;

      if (!this._isNativeHtmlTable) {
        return;
      }

      var tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

      this._scheduleStyleChanges(function () {
        if (stickyStates.some(function (state) {
          return !state;
        })) {
          _this10._removeStickyStyle(tfoot, ['bottom']);
        } else {
          _this10._addStickyStyle(tfoot, 'bottom', 0, false);
        }
      });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */

  }, {
    key: "_removeStickyStyle",
    value: function _removeStickyStyle(element, stickyDirections) {
      var _iterator8 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(stickyDirections),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var dir = _step8.value;
          element.style[dir] = '';
          element.classList.remove(this._borderCellCss[dir]);
        } // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.

      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var hasDirection = STICKY_DIRECTIONS.some(function (dir) {
        return stickyDirections.indexOf(dir) === -1 && element.style[dir];
      });

      if (hasDirection) {
        element.style.zIndex = this._getCalculatedZIndex(element);
      } else {
        // When not hasDirection, _getCalculatedZIndex will always return ''.
        element.style.zIndex = '';

        if (this._needsPositionStickyOnElement) {
          element.style.position = '';
        }

        element.classList.remove(this._stickCellCss);
      }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */

  }, {
    key: "_addStickyStyle",
    value: function _addStickyStyle(element, dir, dirValue, isBorderElement) {
      element.classList.add(this._stickCellCss);

      if (isBorderElement) {
        element.classList.add(this._borderCellCss[dir]);
      }

      element.style[dir] = "".concat(dirValue, "px");
      element.style.zIndex = this._getCalculatedZIndex(element);

      if (this._needsPositionStickyOnElement) {
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
      }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */

  }, {
    key: "_getCalculatedZIndex",
    value: function _getCalculatedZIndex(element) {
      var zIndexIncrements = {
        top: 100,
        bottom: 10,
        left: 1,
        right: 1
      };
      var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
      // loses the array generic type in the `for of`. But we *also* have to use `Array` because
      // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

      var _iterator9 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(STICKY_DIRECTIONS),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var dir = _step9.value;

          if (element.style[dir]) {
            zIndex += zIndexIncrements[dir];
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return zIndex ? "".concat(zIndex) : '';
    }
    /** Gets the widths for each cell in the provided row. */

  }, {
    key: "_getCellWidths",
    value: function _getCellWidths(row) {
      var recalculateCellWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!recalculateCellWidths && this._cachedCellWidths.length) {
        return this._cachedCellWidths;
      }

      var cellWidths = [];
      var firstRowCells = row.children;

      for (var i = 0; i < firstRowCells.length; i++) {
        var cell = firstRowCells[i];
        cellWidths.push(cell.getBoundingClientRect().width);
      }

      this._cachedCellWidths = cellWidths;
      return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */

  }, {
    key: "_getStickyStartColumnPositions",
    value: function _getStickyStartColumnPositions(widths, stickyStates) {
      var positions = [];
      var nextPosition = 0;

      for (var i = 0; i < widths.length; i++) {
        if (stickyStates[i]) {
          positions[i] = nextPosition;
          nextPosition += widths[i];
        }
      }

      return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */

  }, {
    key: "_getStickyEndColumnPositions",
    value: function _getStickyEndColumnPositions(widths, stickyStates) {
      var positions = [];
      var nextPosition = 0;

      for (var i = widths.length; i > 0; i--) {
        if (stickyStates[i]) {
          positions[i] = nextPosition;
          nextPosition += widths[i];
        }
      }

      return positions;
    }
    /**
     * Schedules styles to be applied when the style scheduler deems appropriate.
     * @breaking-change 11.0.0 This method can be removed in favor of calling
     * `CoalescedStyleScheduler.schedule` directly once the scheduler is a required parameter.
     */

  }, {
    key: "_scheduleStyleChanges",
    value: function _scheduleStyleChanges(changes) {
      if (this._coalescedStyleScheduler) {
        this._coalescedStyleScheduler.schedule(changes);
      } else {
        changes();
      }
    }
  }]);

  return StickyStyler;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */


function getTableUnknownColumnError(id) {
  return Error("Could not find column with id \"".concat(id, "\"."));
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */


function getTableDuplicateColumnNameError(name) {
  return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */


function getTableMultipleDefaultRowDefsError() {
  return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */


function getTableMissingMatchingRowDefError(data) {
  return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */


function getTableMissingRowDefsError() {
  return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */


function getTableUnknownDataSourceError() {
  return Error("Provided data source did not match an array, Observable, or DataSource");
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */


function getTableTextColumnMissingParentTableError() {
  return Error("Text column could not find a parent table for registration.");
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */


function getTableTextColumnMissingNameError() {
  return Error("Table text column must have a name.");
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the StickyPositioningListener. */


var STICKY_POSITIONING_LISTENER = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["InjectionToken"]('CDK_SPL');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */

var DataRowOutlet = function DataRowOutlet(viewContainer, elementRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DataRowOutlet);

  this.viewContainer = viewContainer;
  this.elementRef = elementRef;
};

DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
  return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: DataRowOutlet,
  selectors: [["", "rowOutlet", ""]]
});

DataRowOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](DataRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[rowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */


var HeaderRowOutlet = function HeaderRowOutlet(viewContainer, elementRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HeaderRowOutlet);

  this.viewContainer = viewContainer;
  this.elementRef = elementRef;
};

HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
  return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: HeaderRowOutlet,
  selectors: [["", "headerRowOutlet", ""]]
});

HeaderRowOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](HeaderRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[headerRowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */


var FooterRowOutlet = function FooterRowOutlet(viewContainer, elementRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, FooterRowOutlet);

  this.viewContainer = viewContainer;
  this.elementRef = elementRef;
};

FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
  return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: FooterRowOutlet,
  selectors: [["", "footerRowOutlet", ""]]
});

FooterRowOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](FooterRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[footerRowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */


var NoDataRowOutlet = function NoDataRowOutlet(viewContainer, elementRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NoDataRowOutlet);

  this.viewContainer = viewContainer;
  this.elementRef = elementRef;
};

NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
  return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]));
};

NoDataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: NoDataRowOutlet,
  selectors: [["", "noDataRowOutlet", ""]]
});

NoDataRowOutlet.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](NoDataRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Directive"],
    args: [{
      selector: '[noDataRowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }];
  }, null);
})();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */


var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
"\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */

var RowViewRef = /*#__PURE__*/function (_EmbeddedViewRef) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RowViewRef, _EmbeddedViewRef);

  var _super11 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(RowViewRef);

  function RowViewRef() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, RowViewRef);

    return _super11.apply(this, arguments);
  }

  return RowViewRef;
}(_angular_core__WEBPACK_IMPORTED_MODULE_11__["EmbeddedViewRef"]);
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */


var CdkTable = /*#__PURE__*/function () {
  function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform,
  /**
   * @deprecated `_coalescedStyleScheduler`, `_viewRepeater` and `_viewportRuler`
   *    parameters to become required.
   * @breaking-change 11.0.0
   */
  _viewRepeater, _coalescedStyleScheduler, _stickyPositioningListener, // Optional for backwards compatibility. The viewport ruler is provided in root. Therefore,
  // this property will never be null.
  // tslint:disable-next-line: lightweight-tokens
  _viewportRuler) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkTable);

    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._platform = _platform;
    this._viewRepeater = _viewRepeater;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._stickyPositioningListener = _stickyPositioningListener;
    this._viewportRuler = _viewportRuler;
    /** Subject that emits when the component has been destroyed. */

    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * Map of all the user's defined columns (header, data, and footer cell template) identified by
     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
     * any custom column definitions added to `_customColumnDefs`.
     */

    this._columnDefsByName = new Map();
    /**
     * Column definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * column definitions as *its* content child.
     */

    this._customColumnDefs = new Set();
    /**
     * Data row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in data rows as *its* content child.
     */

    this._customRowDefs = new Set();
    /**
     * Header row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in header rows as *its* content child.
     */

    this._customHeaderRowDefs = new Set();
    /**
     * Footer row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
     * built-in footer row as *its* content child.
     */

    this._customFooterRowDefs = new Set();
    /**
     * Whether the header row definition has been changed. Triggers an update to the header row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */

    this._headerRowDefChanged = true;
    /**
     * Whether the footer row definition has been changed. Triggers an update to the footer row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */

    this._footerRowDefChanged = true;
    /**
     * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
     * change.
     */

    this._stickyColumnStylesNeedReset = true;
    /**
     * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
     * `false`, cached values will be used instead. This is only applicable to tables with
     * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
     */

    this._forceRecalculateCellWidths = true;
    /**
     * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
     * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
     * the cached `RenderRow` objects when possible, the row identity is preserved when the data
     * and row template matches, which allows the `IterableDiffer` to check rows by reference
     * and understand which rows are added/moved/removed.
     *
     * Implemented as a map of maps where the first key is the `data: T` object and the second is the
     * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
     * contains an array of created pairs. The array is necessary to handle cases where the data
     * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
     * stored.
     */

    this._cachedRenderRowsMap = new Map();
    /**
     * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
     * table subclasses.
     */

    this.stickyCssClass = 'cdk-table-sticky';
    /**
     * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
     * the position is set in a selector associated with the value of stickyCssClass. May be
     * overridden by table subclasses
     */

    this.needsPositionStickyOnElement = true;
    /** Whether the no data row is currently showing anything. */

    this._isShowingNoDataRow = false;
    this._multiTemplateDataRows = false;
    this._fixedLayout = false; // TODO(andrewseguin): Remove max value as the end index
    //   and instead calculate the view on init and scroll.

    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     *
     * @docs-private
     */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_15__["BehaviorSubject"]({
      start: 0,
      end: Number.MAX_VALUE
    });

    if (!role) {
      this._elementRef.nativeElement.setAttribute('role', 'grid');
    }

    this._document = _document;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
  }
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkTable, [{
    key: "trackBy",
    get: function get() {
      return this._trackByFn;
    },
    set: function set(fn) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
        console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
      }

      this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */

  }, {
    key: "dataSource",
    get: function get() {
      return this._dataSource;
    },
    set: function set(dataSource) {
      if (this._dataSource !== dataSource) {
        this._switchDataSource(dataSource);
      }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */

  }, {
    key: "multiTemplateDataRows",
    get: function get() {
      return this._multiTemplateDataRows;
    },
    set: function set(v) {
      this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
      // this setter will be invoked before the row outlet has been defined hence the null check.

      if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
        this._forceRenderDataRows();

        this.updateStickyColumnStyles();
      }
    }
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */

  }, {
    key: "fixedLayout",
    get: function get() {
      return this._fixedLayout;
    },
    set: function set(v) {
      this._fixedLayout = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(v); // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.

      this._forceRecalculateCellWidths = true;
      this._stickyColumnStylesNeedReset = true;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this11 = this;

      this._setupStickyStyler();

      if (this._isNativeHtmlTable) {
        this._applyNativeTableSections();
      } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
      // the user has provided a custom trackBy, return the result of that function as evaluated
      // with the values of the `RenderRow`'s data and index.


      this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
        return _this11.trackBy ? _this11.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
      }); // Table cell dimensions may change after resizing the window. Signal the sticky styler to
      // refresh its cache of cell widths the next time sticky styles are updated.
      // @breaking-change 11.0.0 Remove null check for _viewportRuler once it's a required parameter.

      if (this._viewportRuler) {
        this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._onDestroy)).subscribe(function () {
          _this11._forceRecalculateCellWidths = true;
        });
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
      this._cacheRowDefs();

      this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


      if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingRowDefsError();
      } // Render updates if the list of columns have been changed for the header, row, or footer defs.


      var columnsChanged = this._renderUpdatedColumns();

      var rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // Ensure sticky column styles are reset if set to `true` elsewhere.

      this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
      this._forceRecalculateCellWidths = rowDefsChanged; // If the header row definition has been changed, trigger a render to the header row.

      if (this._headerRowDefChanged) {
        this._forceRenderHeaderRows();

        this._headerRowDefChanged = false;
      } // If the footer row definition has been changed, trigger a render to the footer row.


      if (this._footerRowDefChanged) {
        this._forceRenderFooterRows();

        this._footerRowDefChanged = false;
      } // If there is a data source and row definitions, connect to the data source unless a
      // connection has already been made.


      if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
        this._observeRenderChanges();
      } else if (this._stickyColumnStylesNeedReset) {
        // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
        // called when it row data arrives. Otherwise, we need to call it proactively.
        this.updateStickyColumnStyles();
      }

      this._checkStickyStates();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._rowOutlet.viewContainer.clear();

      this._noDataRowOutlet.viewContainer.clear();

      this._headerRowOutlet.viewContainer.clear();

      this._footerRowOutlet.viewContainer.clear();

      this._cachedRenderRowsMap.clear();

      this._onDestroy.next();

      this._onDestroy.complete();

      if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["isDataSource"])(this.dataSource)) {
        this.dataSource.disconnect(this);
      }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */

  }, {
    key: "renderRows",
    value: function renderRows() {
      var _this12 = this;

      this._renderRows = this._getAllRenderRows();

      var changes = this._dataDiffer.diff(this._renderRows);

      if (!changes) {
        this._updateNoDataRow();

        return;
      }

      var viewContainer = this._rowOutlet.viewContainer; // @breaking-change 11.0.0 Remove null check for `_viewRepeater` and the
      // `else` clause once `_viewRepeater` is turned into a required parameter.

      if (this._viewRepeater) {
        this._viewRepeater.applyChanges(changes, viewContainer, function (record, _adjustedPreviousIndex, currentIndex) {
          return _this12._getEmbeddedViewArgs(record.item, currentIndex);
        }, function (record) {
          return record.item.data;
        }, function (change) {
          if (change.operation === 1
          /* INSERTED */
          && change.context) {
            _this12._renderCellTemplateForItem(change.record.item.rowDef, change.context);
          }
        });
      } else {
        changes.forEachOperation(function (record, prevIndex, currentIndex) {
          if (record.previousIndex == null) {
            var renderRow = record.item;
            var rowDef = renderRow.rowDef;
            var context = {
              $implicit: renderRow.data
            };

            _this12._renderRow(_this12._rowOutlet, rowDef, currentIndex, context);
          } else if (currentIndex == null) {
            viewContainer.remove(prevIndex);
          } else {
            var view = viewContainer.get(prevIndex);
            viewContainer.move(view, currentIndex);
          }
        });
      } // Update the meta context of a row's context data (index, count, first, last, ...)


      this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
      // e.g. if trackBy matched data on some property but the actual data reference changed.


      changes.forEachIdentityChange(function (record) {
        var rowView = viewContainer.get(record.currentIndex);
        rowView.context.$implicit = record.item.data;
      });

      this._updateNoDataRow();

      this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */

  }, {
    key: "addColumnDef",
    value: function addColumnDef(columnDef) {
      this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */

  }, {
    key: "removeColumnDef",
    value: function removeColumnDef(columnDef) {
      this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */

  }, {
    key: "addRowDef",
    value: function addRowDef(rowDef) {
      this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */

  }, {
    key: "removeRowDef",
    value: function removeRowDef(rowDef) {
      this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */

  }, {
    key: "addHeaderRowDef",
    value: function addHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.add(headerRowDef);

      this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */

  }, {
    key: "removeHeaderRowDef",
    value: function removeHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.delete(headerRowDef);

      this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */

  }, {
    key: "addFooterRowDef",
    value: function addFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.add(footerRowDef);

      this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */

  }, {
    key: "removeFooterRowDef",
    value: function removeFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.delete(footerRowDef);

      this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */

  }, {
    key: "setNoDataRow",
    value: function setNoDataRow(noDataRow) {
      this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */

  }, {
    key: "updateStickyHeaderRowStyles",
    value: function updateStickyHeaderRowStyles() {
      var headerRows = this._getRenderedRows(this._headerRowOutlet);

      var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.

      var thead = tableElement.querySelector('thead');

      if (thead) {
        thead.style.display = headerRows.length ? '' : 'none';
      }

      var stickyStates = this._headerRowDefs.map(function (def) {
        return def.sticky;
      });

      this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

      this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


      this._headerRowDefs.forEach(function (def) {
        return def.resetStickyChanged();
      });
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */

  }, {
    key: "updateStickyFooterRowStyles",
    value: function updateStickyFooterRowStyles() {
      var footerRows = this._getRenderedRows(this._footerRowOutlet);

      var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.

      var tfoot = tableElement.querySelector('tfoot');

      if (tfoot) {
        tfoot.style.display = footerRows.length ? '' : 'none';
      }

      var stickyStates = this._footerRowDefs.map(function (def) {
        return def.sticky;
      });

      this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

      this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

      this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


      this._footerRowDefs.forEach(function (def) {
        return def.resetStickyChanged();
      });
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */

  }, {
    key: "updateStickyColumnStyles",
    value: function updateStickyColumnStyles() {
      var _this13 = this;

      var headerRows = this._getRenderedRows(this._headerRowOutlet);

      var dataRows = this._getRenderedRows(this._rowOutlet);

      var footerRows = this._getRenderedRows(this._footerRowOutlet); // For tables not using a fixed layout, the column widths may change when new rows are rendered.
      // In a table using a fixed layout, row content won't affect column width, so sticky styles
      // don't need to be cleared unless either the sticky column config changes or one of the row
      // defs change.


      if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([].concat(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(headerRows), Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dataRows), Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(footerRows)), ['left', 'right']);

        this._stickyColumnStylesNeedReset = false;
      } // Update the sticky styles for each header row depending on the def's sticky state


      headerRows.forEach(function (headerRow, i) {
        _this13._addStickyColumnStyles([headerRow], _this13._headerRowDefs[i]);
      }); // Update the sticky styles for each data row depending on its def's sticky state

      this._rowDefs.forEach(function (rowDef) {
        // Collect all the rows rendered with this row definition.
        var rows = [];

        for (var i = 0; i < dataRows.length; i++) {
          if (_this13._renderRows[i].rowDef === rowDef) {
            rows.push(dataRows[i]);
          }
        }

        _this13._addStickyColumnStyles(rows, rowDef);
      }); // Update the sticky styles for each footer row depending on the def's sticky state


      footerRows.forEach(function (footerRow, i) {
        _this13._addStickyColumnStyles([footerRow], _this13._footerRowDefs[i]);
      }); // Reset the dirty state of the sticky input change since it has been used.

      Array.from(this._columnDefsByName.values()).forEach(function (def) {
        return def.resetStickyChanged();
      });
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */

  }, {
    key: "_getAllRenderRows",
    value: function _getAllRenderRows() {
      var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
      // new cache while unused ones can be picked up by garbage collection.

      var prevCachedRenderRows = this._cachedRenderRowsMap;
      this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
      // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

      for (var i = 0; i < this._data.length; i++) {
        var data = this._data[i];

        var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

        if (!this._cachedRenderRowsMap.has(data)) {
          this._cachedRenderRowsMap.set(data, new WeakMap());
        }

        for (var j = 0; j < renderRowsForData.length; j++) {
          var renderRow = renderRowsForData[j];

          var cache = this._cachedRenderRowsMap.get(renderRow.data);

          if (cache.has(renderRow.rowDef)) {
            cache.get(renderRow.rowDef).push(renderRow);
          } else {
            cache.set(renderRow.rowDef, [renderRow]);
          }

          renderRows.push(renderRow);
        }
      }

      return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */

  }, {
    key: "_getRenderRowsForData",
    value: function _getRenderRowsForData(data, dataIndex, cache) {
      var rowDefs = this._getRowDefs(data, dataIndex);

      return rowDefs.map(function (rowDef) {
        var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

        if (cachedRenderRows.length) {
          var dataRow = cachedRenderRows.shift();
          dataRow.dataIndex = dataIndex;
          return dataRow;
        } else {
          return {
            data: data,
            rowDef: rowDef,
            dataIndex: dataIndex
          };
        }
      });
    }
    /** Update the map containing the content's column definitions. */

  }, {
    key: "_cacheColumnDefs",
    value: function _cacheColumnDefs() {
      var _this14 = this;

      this._columnDefsByName.clear();

      var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
      columnDefs.forEach(function (columnDef) {
        if (_this14._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableDuplicateColumnNameError(columnDef.name);
        }

        _this14._columnDefsByName.set(columnDef.name, columnDef);
      });
    }
    /** Update the list of all available row definitions that can be used. */

  }, {
    key: "_cacheRowDefs",
    value: function _cacheRowDefs() {
      this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
      this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
      this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

      var defaultRowDefs = this._rowDefs.filter(function (def) {
        return !def.when;
      });

      if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMultipleDefaultRowDefsError();
      }

      this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */

  }, {
    key: "_renderUpdatedColumns",
    value: function _renderUpdatedColumns() {
      var columnsDiffReducer = function columnsDiffReducer(acc, def) {
        return acc || !!def.getColumnsDiff();
      }; // Force re-render data rows if the list of column definitions have changed.


      var dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

      if (dataColumnsChanged) {
        this._forceRenderDataRows();
      } // Force re-render header/footer rows if the list of column definitions have changed.


      var headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

      if (headerColumnsChanged) {
        this._forceRenderHeaderRows();
      }

      var footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

      if (footerColumnsChanged) {
        this._forceRenderFooterRows();
      }

      return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */

  }, {
    key: "_switchDataSource",
    value: function _switchDataSource(dataSource) {
      this._data = [];

      if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["isDataSource"])(this.dataSource)) {
        this.dataSource.disconnect(this);
      } // Stop listening for data from the previous data source.


      if (this._renderChangeSubscription) {
        this._renderChangeSubscription.unsubscribe();

        this._renderChangeSubscription = null;
      }

      if (!dataSource) {
        if (this._dataDiffer) {
          this._dataDiffer.diff([]);
        }

        this._rowOutlet.viewContainer.clear();
      }

      this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */

  }, {
    key: "_observeRenderChanges",
    value: function _observeRenderChanges() {
      var _this15 = this;

      // If no data source has been set, there is nothing to observe for changes.
      if (!this.dataSource) {
        return;
      }

      var dataStream;

      if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["isDataSource"])(this.dataSource)) {
        dataStream = this.dataSource.connect(this);
      } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["isObservable"])(this.dataSource)) {
        dataStream = this.dataSource;
      } else if (Array.isArray(this.dataSource)) {
        dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(this.dataSource);
      }

      if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableUnknownDataSourceError();
      }

      this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._onDestroy)).subscribe(function (data) {
        _this15._data = data || [];

        _this15.renderRows();
      });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */

  }, {
    key: "_forceRenderHeaderRows",
    value: function _forceRenderHeaderRows() {
      var _this16 = this;

      // Clear the header row outlet if any content exists.
      if (this._headerRowOutlet.viewContainer.length > 0) {
        this._headerRowOutlet.viewContainer.clear();
      }

      this._headerRowDefs.forEach(function (def, i) {
        return _this16._renderRow(_this16._headerRowOutlet, def, i);
      });

      this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */

  }, {
    key: "_forceRenderFooterRows",
    value: function _forceRenderFooterRows() {
      var _this17 = this;

      // Clear the footer row outlet if any content exists.
      if (this._footerRowOutlet.viewContainer.length > 0) {
        this._footerRowOutlet.viewContainer.clear();
      }

      this._footerRowDefs.forEach(function (def, i) {
        return _this17._renderRow(_this17._footerRowOutlet, def, i);
      });

      this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */

  }, {
    key: "_addStickyColumnStyles",
    value: function _addStickyColumnStyles(rows, rowDef) {
      var _this18 = this;

      var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
        var columnDef = _this18._columnDefsByName.get(columnName);

        if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnName);
        }

        return columnDef;
      });
      var stickyStartStates = columnDefs.map(function (columnDef) {
        return columnDef.sticky;
      });
      var stickyEndStates = columnDefs.map(function (columnDef) {
        return columnDef.stickyEnd;
      });

      this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */

  }, {
    key: "_getRenderedRows",
    value: function _getRenderedRows(rowOutlet) {
      var renderedRows = [];

      for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
        var viewRef = rowOutlet.viewContainer.get(i);
        renderedRows.push(viewRef.rootNodes[0]);
      }

      return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */

  }, {
    key: "_getRowDefs",
    value: function _getRowDefs(data, dataIndex) {
      if (this._rowDefs.length == 1) {
        return [this._rowDefs[0]];
      }

      var rowDefs = [];

      if (this.multiTemplateDataRows) {
        rowDefs = this._rowDefs.filter(function (def) {
          return !def.when || def.when(dataIndex, data);
        });
      } else {
        var rowDef = this._rowDefs.find(function (def) {
          return def.when && def.when(dataIndex, data);
        }) || this._defaultRowDef;

        if (rowDef) {
          rowDefs.push(rowDef);
        }
      }

      if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingMatchingRowDefError(data);
      }

      return rowDefs;
    }
  }, {
    key: "_getEmbeddedViewArgs",
    value: function _getEmbeddedViewArgs(renderRow, index) {
      var rowDef = renderRow.rowDef;
      var context = {
        $implicit: renderRow.data
      };
      return {
        templateRef: rowDef.template,
        context: context,
        index: index
      };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */

  }, {
    key: "_renderRow",
    value: function _renderRow(outlet, rowDef, index) {
      var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
      var view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

      this._renderCellTemplateForItem(rowDef, context);

      return view;
    }
  }, {
    key: "_renderCellTemplateForItem",
    value: function _renderCellTemplateForItem(rowDef, context) {
      var _iterator10 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(this._getCellTemplates(rowDef)),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var cellTemplate = _step10.value;

          if (CdkCellOutlet.mostRecentCellOutlet) {
            CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */

  }, {
    key: "_updateRowIndexContext",
    value: function _updateRowIndexContext() {
      var viewContainer = this._rowOutlet.viewContainer;

      for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
        var viewRef = viewContainer.get(renderIndex);
        var context = viewRef.context;
        context.count = count;
        context.first = renderIndex === 0;
        context.last = renderIndex === count - 1;
        context.even = renderIndex % 2 === 0;
        context.odd = !context.even;

        if (this.multiTemplateDataRows) {
          context.dataIndex = this._renderRows[renderIndex].dataIndex;
          context.renderIndex = renderIndex;
        } else {
          context.index = this._renderRows[renderIndex].dataIndex;
        }
      }
    }
    /** Gets the column definitions for the provided row def. */

  }, {
    key: "_getCellTemplates",
    value: function _getCellTemplates(rowDef) {
      var _this19 = this;

      if (!rowDef || !rowDef.columns) {
        return [];
      }

      return Array.from(rowDef.columns, function (columnId) {
        var column = _this19._columnDefsByName.get(columnId);

        if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnId);
        }

        return rowDef.extractCellTemplate(column);
      });
    }
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

  }, {
    key: "_applyNativeTableSections",
    value: function _applyNativeTableSections() {
      var documentFragment = this._document.createDocumentFragment();

      var sections = [{
        tag: 'thead',
        outlets: [this._headerRowOutlet]
      }, {
        tag: 'tbody',
        outlets: [this._rowOutlet, this._noDataRowOutlet]
      }, {
        tag: 'tfoot',
        outlets: [this._footerRowOutlet]
      }];

      for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
        var section = _sections[_i2];

        var element = this._document.createElement(section.tag);

        element.setAttribute('role', 'rowgroup');

        var _iterator11 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_3__["default"])(section.outlets),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var outlet = _step11.value;
            element.appendChild(outlet.elementRef.nativeElement);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        documentFragment.appendChild(element);
      } // Use a DocumentFragment so we don't hit the DOM on each iteration.


      this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */

  }, {
    key: "_forceRenderDataRows",
    value: function _forceRenderDataRows() {
      this._dataDiffer.diff([]);

      this._rowOutlet.viewContainer.clear();

      this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */

  }, {
    key: "_checkStickyStates",
    value: function _checkStickyStates() {
      var stickyCheckReducer = function stickyCheckReducer(acc, d) {
        return acc || d.hasStickyChanged();
      }; // Note that the check needs to occur for every definition since it notifies the definition
      // that it can reset its dirty state. Using another operator like `some` may short-circuit
      // remaining definitions and leave them in an unchecked state.


      if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyHeaderRowStyles();
      }

      if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyFooterRowStyles();
      }

      if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
        this._stickyColumnStylesNeedReset = true;
        this.updateStickyColumnStyles();
      }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */

  }, {
    key: "_setupStickyStyler",
    value: function _setupStickyStyler() {
      var _this20 = this;

      var direction = this._dir ? this._dir.value : 'ltr';
      this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
      (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._onDestroy)).subscribe(function (value) {
        _this20._stickyStyler.direction = value;

        _this20.updateStickyColumnStyles();
      });
    }
    /** Filters definitions that belong to this table from a QueryList. */

  }, {
    key: "_getOwnDefs",
    value: function _getOwnDefs(items) {
      var _this21 = this;

      return items.filter(function (item) {
        return !item._table || item._table === _this21;
      });
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */

  }, {
    key: "_updateNoDataRow",
    value: function _updateNoDataRow() {
      var noDataRow = this._customNoDataRow || this._noDataRow;

      if (noDataRow) {
        var shouldShow = this._rowOutlet.viewContainer.length === 0;

        if (shouldShow !== this._isShowingNoDataRow) {
          var container = this._noDataRowOutlet.viewContainer;
          shouldShow ? container.createEmbeddedView(noDataRow.templateRef) : container.clear();
          this._isShowingNoDataRow = shouldShow;
        }
      }
    }
  }]);

  return CdkTable;
}();

CdkTable.ɵfac = function CdkTable_Factory(t) {
  return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_VIEW_REPEATER_STRATEGY"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"], 8));
};

CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CdkTable,
  selectors: [["cdk-table"], ["table", "cdk-table", ""]],
  contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkRowDef, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    }
  },
  viewQuery: function CdkTable_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](DataRowOutlet, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](HeaderRowOutlet, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](FooterRowOutlet, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](NoDataRowOutlet, 3);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
    }
  },
  hostAttrs: [1, "cdk-table"],
  hostVars: 2,
  hostBindings: function CdkTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
    }
  },
  inputs: {
    trackBy: "trackBy",
    dataSource: "dataSource",
    multiTemplateDataRows: "multiTemplateDataRows",
    fixedLayout: "fixedLayout"
  },
  exportAs: ["cdkTable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([{
    provide: CDK_TABLE,
    useExisting: CdkTable
  }, {
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_VIEW_REPEATER_STRATEGY"],
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_DisposeViewRepeaterStrategy"]
  }, {
    provide: _COALESCED_STYLE_SCHEDULER,
    useClass: _CoalescedStyleScheduler
  }, // Prevent nested tables from seeing this table's StickyPositioningListener.
  {
    provide: STICKY_POSITIONING_LISTENER,
    useValue: null
  }])],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function CdkTable_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojection"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](2, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](3, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](4, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](5, 3);
    }
  },
  directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
  encapsulation: 2
});

CdkTable.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Attribute"],
      args: ['role']
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_VIEW_REPEATER_STRATEGY"]]
    }]
  }, {
    type: _CoalescedStyleScheduler,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [_COALESCED_STYLE_SCHEDULER]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["SkipSelf"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [STICKY_POSITIONING_LISTENER]
    }]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }];
};

CdkTable.propDecorators = {
  trackBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  dataSource: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  multiTemplateDataRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  fixedLayout: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  _rowOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [DataRowOutlet, {
      static: true
    }]
  }],
  _headerRowOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [HeaderRowOutlet, {
      static: true
    }]
  }],
  _footerRowOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [FooterRowOutlet, {
      static: true
    }]
  }],
  _noDataRowOutlet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [NoDataRowOutlet, {
      static: true
    }]
  }],
  _contentColumnDefs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
    args: [CdkColumnDef, {
      descendants: true
    }]
  }],
  _contentRowDefs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
    args: [CdkRowDef, {
      descendants: true
    }]
  }],
  _contentHeaderRowDefs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
    args: [CdkHeaderRowDef, {
      descendants: true
    }]
  }],
  _contentFooterRowDefs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
    args: [CdkFooterRowDef, {
      descendants: true
    }]
  }],
  _noDataRow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
    args: [CdkNoDataRow]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"],
    args: [{
      selector: 'cdk-table, table[cdk-table]',
      exportAs: 'cdkTable',
      template: CDK_TABLE_TEMPLATE,
      host: {
        'class': 'cdk-table',
        '[class.cdk-table-fixed-layout]': 'fixedLayout'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
      // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
      // The view for `MatTable` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].Default,
      providers: [{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }, {
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_VIEW_REPEATER_STRATEGY"],
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_DisposeViewRepeaterStrategy"]
      }, {
        provide: _COALESCED_STYLE_SCHEDULER,
        useClass: _CoalescedStyleScheduler
      }, // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["IterableDiffers"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ElementRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Attribute"],
        args: ['role']
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DOCUMENT"]]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["_VIEW_REPEATER_STRATEGY"]]
      }]
    }, {
      type: _CoalescedStyleScheduler,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [_COALESCED_STYLE_SCHEDULER]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["SkipSelf"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [STICKY_POSITIONING_LISTENER]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }];
  }, {
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    multiTemplateDataRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    fixedLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    _rowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [DataRowOutlet, {
        static: true
      }]
    }],
    _headerRowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [HeaderRowOutlet, {
        static: true
      }]
    }],
    _footerRowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [FooterRowOutlet, {
        static: true
      }]
    }],
    _noDataRowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [NoDataRowOutlet, {
        static: true
      }]
    }],
    _contentColumnDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChildren"],
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ContentChild"],
      args: [CdkNoDataRow]
    }]
  });
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */


function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */


var CdkTextColumn = /*#__PURE__*/function () {
  function CdkTextColumn( // `CdkTextColumn` is always requiring a table, but we just assert it manually
  // for better error reporting.
  // tslint:disable-next-line: lightweight-tokens
  _table, _options) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkTextColumn);

    this._table = _table;
    this._options = _options;
    /** Alignment of the cell values. */

    this.justify = 'start';
    this._options = _options || {};
  }
  /** Column name that should be used to reference this column. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkTextColumn, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name; // With Ivy, inputs can be initialized before static query results are
      // available. In that case, we defer the synchronization until "ngOnInit" fires.

      this._syncColumnDefName();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._syncColumnDefName();

      if (this.headerText === undefined) {
        this.headerText = this._createDefaultHeaderText();
      }

      if (!this.dataAccessor) {
        this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
          return data[name];
        };
      }

      if (this._table) {
        // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
        // since the columnDef will not pick up its content by the time the table finishes checking
        // its content and initializing the rows.
        this.columnDef.cell = this.cell;
        this.columnDef.headerCell = this.headerCell;

        this._table.addColumnDef(this.columnDef);
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getTableTextColumnMissingParentTableError();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._table) {
        this._table.removeColumnDef(this.columnDef);
      }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */

  }, {
    key: "_createDefaultHeaderText",
    value: function _createDefaultHeaderText() {
      var name = this.name;

      if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableTextColumnMissingNameError();
      }

      if (this._options && this._options.defaultHeaderTextTransform) {
        return this._options.defaultHeaderTextTransform(name);
      }

      return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */

  }, {
    key: "_syncColumnDefName",
    value: function _syncColumnDefName() {
      if (this.columnDef) {
        this.columnDef.name = this.name;
      }
    }
  }]);

  return CdkTextColumn;
}();

CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
  return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
};

CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CdkTextColumn,
  selectors: [["cdk-text-column"]],
  viewQuery: function CdkTextColumn_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](CdkColumnDef, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](CdkCellDef, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](CdkHeaderCellDef, 3);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    }
  },
  inputs: {
    justify: "justify",
    name: "name",
    headerText: "headerText",
    dataAccessor: "dataAccessor"
  },
  decls: 3,
  vars: 0,
  consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
  template: function CdkTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    }
  },
  directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
  encapsulation: 2
});

CdkTextColumn.ctorParameters = function () {
  return [{
    type: CdkTable,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
      args: [TEXT_COLUMN_OPTIONS]
    }]
  }];
};

CdkTextColumn.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  headerText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  dataAccessor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  justify: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
  }],
  columnDef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [CdkColumnDef, {
      static: true
    }]
  }],
  cell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [CdkCellDef, {
      static: true
    }]
  }],
  headerCell: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
    args: [CdkHeaderCellDef, {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTextColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"],
    args: [{
      selector: 'cdk-text-column',
      template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewEncapsulation"].None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ChangeDetectionStrategy"].Default
    }]
  }], function () {
    return [{
      type: CdkTable,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"],
        args: [TEXT_COLUMN_OPTIONS]
      }]
    }];
  }, {
    justify: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    headerText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    dataAccessor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
    }],
    columnDef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"],
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet];

var CdkTableModule = function CdkTableModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CdkTableModule);
};

CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: CdkTableModule
});
CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  factory: function CdkTableModule_Factory(t) {
    return new (t || CdkTableModule)();
  },
  imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CdkTableModule, {
    declarations: function declarations() {
      return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet];
    },
    imports: function imports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"]];
    },
    exports: function exports() {
      return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](CdkTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
    args: [{
      exports: EXPORTED_DECLARATIONS,
      declarations: EXPORTED_DECLARATIONS,
      imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"]]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "nLfN":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
  \*********************************************************************/
/*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function() { return _getShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.


var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687

try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch (_a) {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */


var Platform = function Platform(_platformId) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Platform);

  this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
  // without the navigator, the following checks will fail. This is preferred because
  // sometimes the Document may be shimmed without the user's knowledge or intention

  /** Whether the Angular application is being rendered in the browser. */

  this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
  /** Whether the current browser is Microsoft Edge. */

  this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  /** Whether the current rendering engine is Microsoft Trident. */

  this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

  /** Whether the current rendering engine is Blink. */

  this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
  // ensure that Webkit runs standalone and is not used as another engine's base.

  /** Whether the current rendering engine is WebKit. */

  this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  /** Whether the current platform is Apple iOS. */

  this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
  // them self as Gecko-like browsers and modify the userAgent's according to that.
  // Since we only cover one explicit Firefox case, we can simply check for Firefox
  // instead of having an unstable check for Gecko.

  /** Whether the current browser is Firefox. */

  this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  /** Whether the current platform is Android. */
  // Trident on mobile adds the android platform to the userAgent to trick detections.

  this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
  // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
  // Safari browser should also use Webkit as its layout engine.

  /** Whether the current browser is Safari. */

  this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
};

Platform.ɵfac = function Platform_Factory(t) {
  return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
};

Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
  factory: function Platform_Factory() {
    return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
  },
  token: Platform,
  providedIn: "root"
});

Platform.ctorParameters = function () {
  return [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var PlatformModule = function PlatformModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PlatformModule);
};

PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlatformModule
});
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  factory: function PlatformModule_Factory(t) {
    return new (t || PlatformModule)();
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result Set of input types support by the current browser. */


var supportedInputTypes;
/** Types of `<input>` that *might* be supported. */

var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */

function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  } // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.


  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }

  var featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of whether the user's browser supports passive event listeners. */


var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */

function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: function get() {
          return supportsPassiveEvents = true;
        }
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }

  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */


function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


var rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */

var scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */

function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported.
    if (typeof document !== 'object' || !document) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      var scrollToFunction = Element.prototype.scrollTo;

      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }

  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */


function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return 0
    /* NORMAL */
    ;
  }

  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    var scrollContainer = document.createElement('div');
    var containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    var content = document.createElement('div');
    var contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = 0
    /* NORMAL */
    ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.

    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
      /* NEGATED */
      : 2
      /* INVERTED */
      ;
    }

    scrollContainer.parentNode.removeChild(scrollContainer);
  }

  return rtlScrollAxisType;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */

function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    var head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }

  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.

    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }

  return null;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "u47x":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
  \*****************************************************************/
/*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function() { return ConfigurableFocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function() { return ConfigurableFocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function() { return EventListenerFocusTrapInertStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function() { return FOCUS_MONITOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function() { return FOCUS_TRAP_INERT_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function() { return HighContrastModeDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusableConfig", function() { return IsFocusableConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function() { return LIVE_ANNOUNCER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeTouchstartFromScreenReader", function() { return isFakeTouchstartFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function() { return FocusTrapManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function() { return ConfigurableFocusTrapConfig; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */




var ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  var ids = getAriaReferenceIds(el, attr);

  if (ids.some(function (existingId) {
    return existingId.trim() == id.trim();
  })) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  var ids = getAriaReferenceIds(el, attr);
  var filteredIds = ids.filter(function (val) {
    return val != id.trim();
  });

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** ID used for the body container where all messages are appended. */


var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/** ID prefix used for each created message element. */

var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/** Attribute given to each host element that is described by a message element. */

var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

var nextId = 0;
/** Global map of all registered message elements that have been placed into the document. */

var messageRegistry = new Map();
/** Container for all registered messages. */

var messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

var AriaDescriber = /*#__PURE__*/function () {
  function AriaDescriber(_document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, AriaDescriber);

    this._document = _document;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AriaDescriber, [{
    key: "describe",
    value: function describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }

      var key = getKey(message, role);

      if (typeof message !== 'string') {
        // We need to ensure that the element has an ID.
        setMessageId(message);
        messageRegistry.set(key, {
          messageElement: message,
          referenceCount: 0
        });
      } else if (!messageRegistry.has(key)) {
        this._createMessageElement(message, role);
      }

      if (!this._isElementDescribedByMessage(hostElement, key)) {
        this._addMessageReference(hostElement, key);
      }
    }
  }, {
    key: "removeDescription",
    value: function removeDescription(hostElement, message, role) {
      if (!message || !this._isElementNode(hostElement)) {
        return;
      }

      var key = getKey(message, role);

      if (this._isElementDescribedByMessage(hostElement, key)) {
        this._removeMessageReference(hostElement, key);
      } // If the message is a string, it means that it's one that we created for the
      // consumer so we can remove it safely, otherwise we should leave it in place.


      if (typeof message === 'string') {
        var registeredMessage = messageRegistry.get(key);

        if (registeredMessage && registeredMessage.referenceCount === 0) {
          this._deleteMessageElement(key);
        }
      }

      if (messagesContainer && messagesContainer.childNodes.length === 0) {
        this._deleteMessagesContainer();
      }
    }
    /** Unregisters all created message elements and removes the message container. */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

      for (var i = 0; i < describedElements.length; i++) {
        this._removeCdkDescribedByReferenceIds(describedElements[i]);

        describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }

      if (messagesContainer) {
        this._deleteMessagesContainer();
      }

      messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */

  }, {
    key: "_createMessageElement",
    value: function _createMessageElement(message, role) {
      var messageElement = this._document.createElement('div');

      setMessageId(messageElement);
      messageElement.textContent = message;

      if (role) {
        messageElement.setAttribute('role', role);
      }

      this._createMessagesContainer();

      messagesContainer.appendChild(messageElement);
      messageRegistry.set(getKey(message, role), {
        messageElement: messageElement,
        referenceCount: 0
      });
    }
    /** Deletes the message element from the global messages container. */

  }, {
    key: "_deleteMessageElement",
    value: function _deleteMessageElement(key) {
      var registeredMessage = messageRegistry.get(key);
      var messageElement = registeredMessage && registeredMessage.messageElement;

      if (messagesContainer && messageElement) {
        messagesContainer.removeChild(messageElement);
      }

      messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */

  }, {
    key: "_createMessagesContainer",
    value: function _createMessagesContainer() {
      if (!messagesContainer) {
        var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
        // already a container on the page, but we don't have a reference to it. Clear the
        // old container so we don't get duplicates. Doing this, instead of emptying the previous
        // container, should be slightly faster.


        if (preExistingContainer && preExistingContainer.parentNode) {
          preExistingContainer.parentNode.removeChild(preExistingContainer);
        }

        messagesContainer = this._document.createElement('div');
        messagesContainer.id = MESSAGES_CONTAINER_ID; // We add `visibility: hidden` in order to prevent text in this container from
        // being searchable by the browser's Ctrl + F functionality.
        // Screen-readers will still read the description for elements with aria-describedby even
        // when the description element is not visible.

        messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
        // the description element doesn't impact page layout.

        messagesContainer.classList.add('cdk-visually-hidden');

        this._document.body.appendChild(messagesContainer);
      }
    }
    /** Deletes the global messages container. */

  }, {
    key: "_deleteMessagesContainer",
    value: function _deleteMessagesContainer() {
      if (messagesContainer && messagesContainer.parentNode) {
        messagesContainer.parentNode.removeChild(messagesContainer);
        messagesContainer = null;
      }
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */

  }, {
    key: "_removeCdkDescribedByReferenceIds",
    value: function _removeCdkDescribedByReferenceIds(element) {
      // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
      var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(function (id) {
        return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
      });
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */

  }, {
    key: "_addMessageReference",
    value: function _addMessageReference(element, key) {
      var registeredMessage = messageRegistry.get(key); // Add the aria-describedby reference and set the
      // describedby_host attribute to mark the element.

      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
      registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */

  }, {
    key: "_removeMessageReference",
    value: function _removeMessageReference(element, key) {
      var registeredMessage = messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */

  }, {
    key: "_isElementDescribedByMessage",
    value: function _isElementDescribedByMessage(element, key) {
      var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      var registeredMessage = messageRegistry.get(key);
      var messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */

  }, {
    key: "_canBeDescribed",
    value: function _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }

      if (message && typeof message === 'object') {
        // We'd have to make some assumptions about the description element's text, if the consumer
        // passed in an element. Assume that if an element is passed in, the consumer has verified
        // that it can be used as a description.
        return true;
      }

      var trimmedMessage = message == null ? '' : "".concat(message).trim();
      var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
      // element, because screen readers will end up reading out the same text twice in a row.

      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */

  }, {
    key: "_isElementNode",
    value: function _isElementNode(element) {
      return element.nodeType === this._document.ELEMENT_NODE;
    }
  }]);

  return AriaDescriber;
}();

AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
};

AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function AriaDescriber_Factory() {
    return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
  },
  token: AriaDescriber,
  providedIn: "root"
});

AriaDescriber.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AriaDescriber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? "".concat(role || '', "/").concat(message) : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element) {
  if (!element.id) {
    element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


var ListKeyManager = /*#__PURE__*/function () {
  function ListKeyManager(_items) {
    var _this = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ListKeyManager);

    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = function (item) {
      return item.disabled;
    }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_9__["QueryList"]) {
      _items.changes.subscribe(function (newItems) {
        if (_this._activeItem) {
          var itemArray = newItems.toArray();
          var newIndex = itemArray.indexOf(_this._activeItem);

          if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
            _this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ListKeyManager, [{
    key: "skipPredicate",
    value: function skipPredicate(predicate) {
      this._skipPredicateFn = predicate;
      return this;
    }
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */

  }, {
    key: "withWrap",
    value: function withWrap() {
      var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._wrap = shouldWrap;
      return this;
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */

  }, {
    key: "withVerticalOrientation",
    value: function withVerticalOrientation() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._vertical = enabled;
      return this;
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */

  }, {
    key: "withHorizontalOrientation",
    value: function withHorizontalOrientation(direction) {
      this._horizontal = direction;
      return this;
    }
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     */

  }, {
    key: "withAllowedModifierKeys",
    value: function withAllowedModifierKeys(keys) {
      this._allowedModifierKeys = keys;
      return this;
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */

  }, {
    key: "withTypeAhead",
    value: function withTypeAhead() {
      var _this2 = this;

      var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

      if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(function (item) {
        return typeof item.getLabel !== 'function';
      })) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }

      this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
      // and convert those letters back into a string. Afterwards find the first item that starts
      // with that string and select it.


      this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(function (letter) {
        return _this2._pressedLetters.push(letter);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(function () {
        return _this2._pressedLetters.length > 0;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
        return _this2._pressedLetters.join('');
      })).subscribe(function (inputString) {
        var items = _this2._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
        // following the current active item.


        for (var i = 1; i < items.length + 1; i++) {
          var index = (_this2._activeItemIndex + i) % items.length;
          var item = items[index];

          if (!_this2._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
            _this2.setActiveItem(index);

            break;
          }
        }

        _this2._pressedLetters = [];
      });
      return this;
    }
    /**
     * Configures the key manager to activate the first and last items
     * respectively when the Home or End key is pressed.
     * @param enabled Whether pressing the Home or End key activates the first/last item.
     */

  }, {
    key: "withHomeAndEnd",
    value: function withHomeAndEnd() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._homeAndEnd = enabled;
      return this;
    }
  }, {
    key: "setActiveItem",
    value: function setActiveItem(item) {
      var previousActiveItem = this._activeItem;
      this.updateActiveItem(item);

      if (this._activeItem !== previousActiveItem) {
        this.change.next(this._activeItemIndex);
      }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var _this3 = this;

      var keyCode = event.keyCode;
      var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
      var isModifierAllowed = modifiers.every(function (modifier) {
        return !event[modifier] || _this3._allowedModifierKeys.indexOf(modifier) > -1;
      });

      switch (keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["TAB"]:
          this.tabOut.next();
          return;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
          if (this._vertical && isModifierAllowed) {
            this.setNextItemActive();
            break;
          } else {
            return;
          }

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
          if (this._vertical && isModifierAllowed) {
            this.setPreviousItemActive();
            break;
          } else {
            return;
          }

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
          if (this._horizontal && isModifierAllowed) {
            this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
          } else {
            return;
          }

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
          if (this._horizontal && isModifierAllowed) {
            this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
          } else {
            return;
          }

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
          if (this._homeAndEnd && isModifierAllowed) {
            this.setFirstItemActive();
            break;
          } else {
            return;
          }

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
          if (this._homeAndEnd && isModifierAllowed) {
            this.setLastItemActive();
            break;
          } else {
            return;
          }

        default:
          if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event, 'shiftKey')) {
            // Attempt to use the `event.key` which also maps it to the user's keyboard language,
            // otherwise fall back to resolving alphanumeric characters via the keyCode.
            if (event.key && event.key.length === 1) {
              this._letterKeyStream.next(event.key.toLocaleUpperCase());
            } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["NINE"]) {
              this._letterKeyStream.next(String.fromCharCode(keyCode));
            }
          } // Note that we return here, in order to avoid preventing
          // the default action of non-navigational keys.


          return;
      }

      this._pressedLetters = [];
      event.preventDefault();
    }
    /** Index of the currently active item. */

  }, {
    key: "activeItemIndex",
    get: function get() {
      return this._activeItemIndex;
    }
    /** The active item. */

  }, {
    key: "activeItem",
    get: function get() {
      return this._activeItem;
    }
    /** Gets whether the user is currently typing into the manager using the typeahead feature. */

  }, {
    key: "isTyping",
    value: function isTyping() {
      return this._pressedLetters.length > 0;
    }
    /** Sets the active item to the first enabled item in the list. */

  }, {
    key: "setFirstItemActive",
    value: function setFirstItemActive() {
      this._setActiveItemByIndex(0, 1);
    }
    /** Sets the active item to the last enabled item in the list. */

  }, {
    key: "setLastItemActive",
    value: function setLastItemActive() {
      this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /** Sets the active item to the next enabled item in the list. */

  }, {
    key: "setNextItemActive",
    value: function setNextItemActive() {
      this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /** Sets the active item to a previous enabled item in the list. */

  }, {
    key: "setPreviousItemActive",
    value: function setPreviousItemActive() {
      this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
    }
  }, {
    key: "updateActiveItem",
    value: function updateActiveItem(item) {
      var itemArray = this._getItemsArray();

      var index = typeof item === 'number' ? item : itemArray.indexOf(item);
      var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

      this._activeItem = activeItem == null ? null : activeItem;
      this._activeItemIndex = index;
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */

  }, {
    key: "_setActiveItemByDelta",
    value: function _setActiveItemByDelta(delta) {
      this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */

  }, {
    key: "_setActiveInWrapMode",
    value: function _setActiveInWrapMode(delta) {
      var items = this._getItemsArray();

      for (var i = 1; i <= items.length; i++) {
        var index = (this._activeItemIndex + delta * i + items.length) % items.length;
        var item = items[index];

        if (!this._skipPredicateFn(item)) {
          this.setActiveItem(index);
          return;
        }
      }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */

  }, {
    key: "_setActiveInDefaultMode",
    value: function _setActiveInDefaultMode(delta) {
      this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */

  }, {
    key: "_setActiveItemByIndex",
    value: function _setActiveItemByIndex(index, fallbackDelta) {
      var items = this._getItemsArray();

      if (!items[index]) {
        return;
      }

      while (this._skipPredicateFn(items[index])) {
        index += fallbackDelta;

        if (!items[index]) {
          return;
        }
      }

      this.setActiveItem(index);
    }
    /** Returns the items as an array. */

  }, {
    key: "_getItemsArray",
    value: function _getItemsArray() {
      return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_9__["QueryList"] ? this._items.toArray() : this._items;
    }
  }]);

  return ListKeyManager;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ActiveDescendantKeyManager, _ListKeyManager);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(ActiveDescendantKeyManager);

  function ActiveDescendantKeyManager() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ActiveDescendantKeyManager);

    return _super.apply(this, arguments);
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ActiveDescendantKeyManager, [{
    key: "setActiveItem",
    value: function setActiveItem(index) {
      if (this.activeItem) {
        this.activeItem.setInactiveStyles();
      }

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

      if (this.activeItem) {
        this.activeItem.setActiveStyles();
      }
    }
  }]);

  return ActiveDescendantKeyManager;
}(ListKeyManager);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FocusKeyManager, _ListKeyManager2);

  var _super2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(FocusKeyManager);

  function FocusKeyManager() {
    var _this4;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FocusKeyManager);

    _this4 = _super2.apply(this, arguments);
    _this4._origin = 'program';
    return _this4;
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FocusKeyManager, [{
    key: "setFocusOrigin",
    value: function setFocusOrigin(origin) {
      this._origin = origin;
      return this;
    }
  }, {
    key: "setActiveItem",
    value: function setActiveItem(item) {
      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

      if (this.activeItem) {
        this.activeItem.focus(this._origin);
      }
    }
  }]);

  return FocusKeyManager;
}(ListKeyManager);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for the isFocusable method.
 */


var IsFocusableConfig = function IsFocusableConfig() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, IsFocusableConfig);

  /**
   * Whether to count an element as focusable even if it is not currently visible.
   */
  this.ignoreVisibility = false;
}; // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


var InteractivityChecker = /*#__PURE__*/function () {
  function InteractivityChecker(_platform) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, InteractivityChecker);

    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(InteractivityChecker, [{
    key: "isDisabled",
    value: function isDisabled(element) {
      // This does not capture some cases, such as a non-form control with a disabled attribute or
      // a form control inside of a disabled form, but should capture the most common cases.
      return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */

  }, {
    key: "isVisible",
    value: function isVisible(element) {
      return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */

  }, {
    key: "isTabbable",
    value: function isTabbable(element) {
      // Nothing is tabbable on the server 😎
      if (!this._platform.isBrowser) {
        return false;
      }

      var frameElement = getFrameElement(getWindow(element));

      if (frameElement) {
        // Frame elements inherit their tabindex onto all child elements.
        if (getTabIndexValue(frameElement) === -1) {
          return false;
        } // Browsers disable tabbing to an element inside of an invisible frame.


        if (!this.isVisible(frameElement)) {
          return false;
        }
      }

      var nodeName = element.nodeName.toLowerCase();
      var tabIndexValue = getTabIndexValue(element);

      if (element.hasAttribute('contenteditable')) {
        return tabIndexValue !== -1;
      }

      if (nodeName === 'iframe' || nodeName === 'object') {
        // The frame or object's content may be tabbable depending on the content, but it's
        // not possibly to reliably detect the content of the frames. We always consider such
        // elements as non-tabbable.
        return false;
      } // In iOS, the browser only considers some specific elements as tabbable.


      if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
        return false;
      }

      if (nodeName === 'audio') {
        // Audio elements without controls enabled are never tabbable, regardless
        // of the tabindex attribute explicitly being set.
        if (!element.hasAttribute('controls')) {
          return false;
        } // Audio elements with controls are by default tabbable unless the
        // tabindex attribute is set to `-1` explicitly.


        return tabIndexValue !== -1;
      }

      if (nodeName === 'video') {
        // For all video elements, if the tabindex attribute is set to `-1`, the video
        // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
        // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
        // tabindex attribute is the source of truth here.
        if (tabIndexValue === -1) {
          return false;
        } // If the tabindex is explicitly set, and not `-1` (as per check before), the
        // video element is always tabbable (regardless of whether it has controls or not).


        if (tabIndexValue !== null) {
          return true;
        } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
        // has controls enabled. Firefox is special as videos are always tabbable regardless
        // of whether there are controls or not.


        return this._platform.FIREFOX || element.hasAttribute('controls');
      }

      return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */

  }, {
    key: "isFocusable",
    value: function isFocusable(element, config) {
      // Perform checks in order of left to most expensive.
      // Again, naive approach that does not capture many edge cases and browser quirks.
      return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
    }
  }]);

  return InteractivityChecker;
}();

InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]));
};

InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function InteractivityChecker_Factory() {
    return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]));
  },
  token: InteractivityChecker,
  providedIn: "root"
});

InteractivityChecker.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](InteractivityChecker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }];
  }, null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch (_a) {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  var nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

  if (tabIndex == '-32768') {
    return false;
  }

  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  var nodeName = element.nodeName.toLowerCase();
  var inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to misalign.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */


var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(_element, _checker, _ngZone, _document) {
    var _this5 = this;

    var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FocusTrap);

    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = function () {
      return _this5.focusLastTabbableElement();
    };

    this.endAnchorListener = function () {
      return _this5.focusFirstTabbableElement();
    };

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FocusTrap, [{
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      this._enabled = value;

      if (this._startAnchor && this._endAnchor) {
        this._toggleAnchorTabIndex(value, this._startAnchor);

        this._toggleAnchorTabIndex(value, this._endAnchor);
      }
    }
    /** Destroys the focus trap by cleaning up the anchors. */

  }, {
    key: "destroy",
    value: function destroy() {
      var startAnchor = this._startAnchor;
      var endAnchor = this._endAnchor;

      if (startAnchor) {
        startAnchor.removeEventListener('focus', this.startAnchorListener);

        if (startAnchor.parentNode) {
          startAnchor.parentNode.removeChild(startAnchor);
        }
      }

      if (endAnchor) {
        endAnchor.removeEventListener('focus', this.endAnchorListener);

        if (endAnchor.parentNode) {
          endAnchor.parentNode.removeChild(endAnchor);
        }
      }

      this._startAnchor = this._endAnchor = null;
      this._hasAttached = false;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */

  }, {
    key: "attachAnchors",
    value: function attachAnchors() {
      var _this6 = this;

      // If we're not on the browser, there can be no focus to trap.
      if (this._hasAttached) {
        return true;
      }

      this._ngZone.runOutsideAngular(function () {
        if (!_this6._startAnchor) {
          _this6._startAnchor = _this6._createAnchor();

          _this6._startAnchor.addEventListener('focus', _this6.startAnchorListener);
        }

        if (!_this6._endAnchor) {
          _this6._endAnchor = _this6._createAnchor();

          _this6._endAnchor.addEventListener('focus', _this6.endAnchorListener);
        }
      });

      if (this._element.parentNode) {
        this._element.parentNode.insertBefore(this._startAnchor, this._element);

        this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

        this._hasAttached = true;
      }

      return this._hasAttached;
    }
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */

  }, {
    key: "focusInitialElementWhenReady",
    value: function focusInitialElementWhenReady() {
      var _this7 = this;

      return new Promise(function (resolve) {
        _this7._executeOnStable(function () {
          return resolve(_this7.focusInitialElement());
        });
      });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */

  }, {
    key: "focusFirstTabbableElementWhenReady",
    value: function focusFirstTabbableElementWhenReady() {
      var _this8 = this;

      return new Promise(function (resolve) {
        _this8._executeOnStable(function () {
          return resolve(_this8.focusFirstTabbableElement());
        });
      });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */

  }, {
    key: "focusLastTabbableElementWhenReady",
    value: function focusLastTabbableElementWhenReady() {
      var _this9 = this;

      return new Promise(function (resolve) {
        _this9._executeOnStable(function () {
          return resolve(_this9.focusLastTabbableElement());
        });
      });
    }
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */

  }, {
    key: "_getRegionBoundary",
    value: function _getRegionBoundary(bound) {
      // Contains the deprecated version of selector, for temporary backwards comparability.
      var markers = this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

      for (var i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
          console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
        } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
          console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
        }
      }

      if (bound == 'start') {
        return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
      }

      return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    }
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfully.
     */

  }, {
    key: "focusInitialElement",
    value: function focusInitialElement() {
      // Contains the deprecated version of selector, for temporary backwards comparability.
      var redirectToElement = this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

      if (redirectToElement) {
        // @breaking-change 8.0.0
        if (redirectToElement.hasAttribute("cdk-focus-initial")) {
          console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
        } // Warn the consumer if the element they've pointed to
        // isn't focusable, when not in production mode.


        if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
          console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
        }

        if (!this._checker.isFocusable(redirectToElement)) {
          var focusableChild = this._getFirstTabbableElement(redirectToElement);

          focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus();
          return !!focusableChild;
        }

        redirectToElement.focus();
        return true;
      }

      return this.focusFirstTabbableElement();
    }
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */

  }, {
    key: "focusFirstTabbableElement",
    value: function focusFirstTabbableElement() {
      var redirectToElement = this._getRegionBoundary('start');

      if (redirectToElement) {
        redirectToElement.focus();
      }

      return !!redirectToElement;
    }
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */

  }, {
    key: "focusLastTabbableElement",
    value: function focusLastTabbableElement() {
      var redirectToElement = this._getRegionBoundary('end');

      if (redirectToElement) {
        redirectToElement.focus();
      }

      return !!redirectToElement;
    }
    /**
     * Checks whether the focus trap has successfully been attached.
     */

  }, {
    key: "hasAttached",
    value: function hasAttached() {
      return this._hasAttached;
    }
    /** Get the first tabbable element from a DOM subtree (inclusive). */

  }, {
    key: "_getFirstTabbableElement",
    value: function _getFirstTabbableElement(root) {
      if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
        return root;
      } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
      // back to `childNodes` which includes text nodes, comments etc.


      var children = root.children || root.childNodes;

      for (var i = 0; i < children.length; i++) {
        var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

        if (tabbableChild) {
          return tabbableChild;
        }
      }

      return null;
    }
    /** Get the last tabbable element from a DOM subtree (inclusive). */

  }, {
    key: "_getLastTabbableElement",
    value: function _getLastTabbableElement(root) {
      if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
        return root;
      } // Iterate in reverse DOM order.


      var children = root.children || root.childNodes;

      for (var i = children.length - 1; i >= 0; i--) {
        var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

        if (tabbableChild) {
          return tabbableChild;
        }
      }

      return null;
    }
    /** Creates an anchor element. */

  }, {
    key: "_createAnchor",
    value: function _createAnchor() {
      var anchor = this._document.createElement('div');

      this._toggleAnchorTabIndex(this._enabled, anchor);

      anchor.classList.add('cdk-visually-hidden');
      anchor.classList.add('cdk-focus-trap-anchor');
      anchor.setAttribute('aria-hidden', 'true');
      return anchor;
    }
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */

  }, {
    key: "_toggleAnchorTabIndex",
    value: function _toggleAnchorTabIndex(isEnabled, anchor) {
      // Remove the tabindex completely, rather than setting it to -1, because if the
      // element has a tabindex, the user might still hit it when navigating with the arrow keys.
      isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    }
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @param enabled: Whether the anchors should trap Tab.
     */

  }, {
    key: "toggleAnchors",
    value: function toggleAnchors(enabled) {
      if (this._startAnchor && this._endAnchor) {
        this._toggleAnchorTabIndex(enabled, this._startAnchor);

        this._toggleAnchorTabIndex(enabled, this._endAnchor);
      }
    }
    /** Executes a function when the zone is stable. */

  }, {
    key: "_executeOnStable",
    value: function _executeOnStable(fn) {
      if (this._ngZone.isStable) {
        fn();
      } else {
        this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(fn);
      }
    }
  }]);

  return FocusTrap;
}();
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change for 11.0.0 Remove this class.
 */


var FocusTrapFactory = /*#__PURE__*/function () {
  function FocusTrapFactory(_checker, _ngZone, _document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FocusTrapFactory);

    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FocusTrapFactory, [{
    key: "create",
    value: function create(element) {
      var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    }
  }]);

  return FocusTrapFactory;
}();

FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
};

FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function FocusTrapFactory_Factory() {
    return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
  },
  token: FocusTrapFactory,
  providedIn: "root"
});

FocusTrapFactory.ctorParameters = function () {
  return [{
    type: InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/** Directive for trapping focus within a region. */


var CdkTrapFocus = /*#__PURE__*/function () {
  function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkTrapFocus);

    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */

    this._previouslyFocusedElement = null;
    this._document = _document;
    this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
  }
  /** Whether the focus trap is active. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkTrapFocus, [{
    key: "enabled",
    get: function get() {
      return this.focusTrap.enabled;
    },
    set: function set(value) {
      this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the directive should automatically move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */

  }, {
    key: "autoCapture",
    get: function get() {
      return this._autoCapture;
    },
    set: function set(value) {
      this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
      // element now that the trapped region is being destroyed.

      if (this._previouslyFocusedElement) {
        this._previouslyFocusedElement.focus();

        this._previouslyFocusedElement = null;
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      this.focusTrap.attachAnchors();

      if (this.autoCapture) {
        this._captureFocus();
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (!this.focusTrap.hasAttached()) {
        this.focusTrap.attachAnchors();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var autoCaptureChange = changes['autoCapture'];

      if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
        this._captureFocus();
      }
    }
  }, {
    key: "_captureFocus",
    value: function _captureFocus() {
      this._previouslyFocusedElement = this._document.activeElement;
      this.focusTrap.focusInitialElementWhenReady();
    }
  }]);

  return CdkTrapFocus;
}();

CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
};

CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: ["cdkTrapFocus", "enabled"],
    autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
  },
  exportAs: ["cdkTrapFocus"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});

CdkTrapFocus.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }];
};

CdkTrapFocus.propDecorators = {
  enabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['cdkTrapFocus']
  }],
  autoCapture: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['cdkTrapFocusAutoCapture']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkTrapFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[cdkTrapFocus]',
      exportAs: 'cdkTrapFocus'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }];
  }, {
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['cdkTrapFocus']
    }],
    autoCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['cdkTrapFocusAutoCapture']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ConfigurableFocusTrap, _FocusTrap);

  var _super3 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(ConfigurableFocusTrap);

  function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    var _this10;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ConfigurableFocusTrap);

    _this10 = _super3.call(this, _element, _checker, _ngZone, _document, config.defer);
    _this10._focusTrapManager = _focusTrapManager;
    _this10._inertStrategy = _inertStrategy;

    _this10._focusTrapManager.register(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this10));

    return _this10;
  }
  /** Whether the FocusTrap is enabled. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ConfigurableFocusTrap, [{
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      this._enabled = value;

      if (this._enabled) {
        this._focusTrapManager.register(this);
      } else {
        this._focusTrapManager.deregister(this);
      }
    }
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */

  }, {
    key: "destroy",
    value: function destroy() {
      this._focusTrapManager.deregister(this);

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */

  }, {
    key: "_enable",
    value: function _enable() {
      this._inertStrategy.preventFocus(this);

      this.toggleAnchors(true);
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */

  }, {
    key: "_disable",
    value: function _disable() {
      this._inertStrategy.allowFocus(this);

      this.toggleAnchors(false);
    }
  }]);

  return ConfigurableFocusTrap;
}(FocusTrap);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */


function closest(element, selector) {
  if (!(element instanceof Node)) {
    return null;
  }

  var curr = element;

  while (curr != null && !(curr instanceof Element)) {
    curr = curr.parentNode;
  }

  return curr && (hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
}
/** Polyfill for browsers without Element.closest. */


function polyfillClosest(element, selector) {
  var curr = element;

  while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
    curr = curr.parentNode;
  }

  return curr || null;
}

var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
/** IE 11 compatible matches implementation. */

function matches(element, selector) {
  return element.matches ? element.matches(selector) : element['msMatchesSelector'](selector);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */


var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
  function EventListenerFocusTrapInertStrategy() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, EventListenerFocusTrapInertStrategy);

    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(EventListenerFocusTrapInertStrategy, [{
    key: "preventFocus",
    value: function preventFocus(focusTrap) {
      var _this11 = this;

      // Ensure there's only one listener per document
      if (this._listener) {
        focusTrap._document.removeEventListener('focus', this._listener, true);
      }

      this._listener = function (e) {
        return _this11._trapFocus(focusTrap, e);
      };

      focusTrap._ngZone.runOutsideAngular(function () {
        focusTrap._document.addEventListener('focus', _this11._listener, true);
      });
    }
    /** Removes the event listener added in preventFocus. */

  }, {
    key: "allowFocus",
    value: function allowFocus(focusTrap) {
      if (!this._listener) {
        return;
      }

      focusTrap._document.removeEventListener('focus', this._listener, true);

      this._listener = null;
    }
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     */

  }, {
    key: "_trapFocus",
    value: function _trapFocus(focusTrap, event) {
      var target = event.target;
      var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
      // with an element inside the FocusTrap, ex. mat-select.

      if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
        // Some legacy FocusTrap usages have logic that focuses some element on the page
        // just before FocusTrap is destroyed. For backwards compatibility, wait
        // to be sure FocusTrap is still enabled before refocusing.
        setTimeout(function () {
          // Check whether focus wasn't put back into the focus trap while the timeout was pending.
          if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
            focusTrap.focusFirstTabbableElement();
          }
        });
      }
    }
  }]);

  return EventListenerFocusTrapInertStrategy;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for creating a ConfigurableFocusTrap.
 */


var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ConfigurableFocusTrapConfig);

  /**
   * Whether to defer the creation of FocusTrap elements to be
   * done manually by the user. Default is to create them
   * automatically.
   */
  this.defer = false;
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the inert strategy. */


var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */

var FocusTrapManager = /*#__PURE__*/function () {
  function FocusTrapManager() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FocusTrapManager);

    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FocusTrapManager, [{
    key: "register",
    value: function register(focusTrap) {
      // Dedupe focusTraps that register multiple times.
      this._focusTrapStack = this._focusTrapStack.filter(function (ft) {
        return ft !== focusTrap;
      });
      var stack = this._focusTrapStack;

      if (stack.length) {
        stack[stack.length - 1]._disable();
      }

      stack.push(focusTrap);

      focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */

  }, {
    key: "deregister",
    value: function deregister(focusTrap) {
      focusTrap._disable();

      var stack = this._focusTrapStack;
      var i = stack.indexOf(focusTrap);

      if (i !== -1) {
        stack.splice(i, 1);

        if (stack.length) {
          stack[stack.length - 1]._enable();
        }
      }
    }
  }]);

  return FocusTrapManager;
}();

FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || FocusTrapManager)();
};

FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function FocusTrapManager_Factory() {
    return new FocusTrapManager();
  },
  token: FocusTrapManager,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](FocusTrapManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
  function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ConfigurableFocusTrapFactory);

    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ConfigurableFocusTrapFactory, [{
    key: "create",
    value: function create(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();
      var configObject;

      if (typeof config === 'boolean') {
        configObject = new ConfigurableFocusTrapConfig();
        configObject.defer = config;
      } else {
        configObject = config;
      }

      return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
    }
  }]);

  return ConfigurableFocusTrapFactory;
}();

ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
};

ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function ConfigurableFocusTrapFactory_Factory() {
    return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
  },
  token: ConfigurableFocusTrapFactory,
  providedIn: "root"
});

ConfigurableFocusTrapFactory.ctorParameters = function () {
  return [{
    type: InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: FocusTrapManager
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: FocusTrapManager
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [FOCUS_TRAP_INERT_STRATEGY]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var LiveAnnouncer = /*#__PURE__*/function () {
  function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, LiveAnnouncer);

    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
    // reference browser globals (HTMLElement, Document) on non-browser environments, since having
    // a class decorator causes TypeScript to preserve the constructor signature types.

    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(LiveAnnouncer, [{
    key: "announce",
    value: function announce(message) {
      var _this12 = this;

      var defaultOptions = this._defaultOptions;
      var politeness;
      var duration;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (args.length === 1 && typeof args[0] === 'number') {
        duration = args[0];
      } else {
        politeness = args[0];
        duration = args[1];
      }

      this.clear();
      clearTimeout(this._previousTimeout);

      if (!politeness) {
        politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
      }

      if (duration == null && defaultOptions) {
        duration = defaultOptions.duration;
      } // TODO: ensure changing the politeness works on all environments we support.


      this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
      // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
      // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
      //   second time without clearing and then using a non-zero delay.
      // (using JAWS 17 at time of this writing).


      return this._ngZone.runOutsideAngular(function () {
        return new Promise(function (resolve) {
          clearTimeout(_this12._previousTimeout);
          _this12._previousTimeout = setTimeout(function () {
            _this12._liveElement.textContent = message;
            resolve();

            if (typeof duration === 'number') {
              _this12._previousTimeout = setTimeout(function () {
                return _this12.clear();
              }, duration);
            }
          }, 100);
        });
      });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */

  }, {
    key: "clear",
    value: function clear() {
      if (this._liveElement) {
        this._liveElement.textContent = '';
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      clearTimeout(this._previousTimeout);

      if (this._liveElement && this._liveElement.parentNode) {
        this._liveElement.parentNode.removeChild(this._liveElement);

        this._liveElement = null;
      }
    }
  }, {
    key: "_createLiveElement",
    value: function _createLiveElement() {
      var elementClass = 'cdk-live-announcer-element';

      var previousElements = this._document.getElementsByClassName(elementClass);

      var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


      for (var i = 0; i < previousElements.length; i++) {
        previousElements[i].parentNode.removeChild(previousElements[i]);
      }

      liveEl.classList.add(elementClass);
      liveEl.classList.add('cdk-visually-hidden');
      liveEl.setAttribute('aria-atomic', 'true');
      liveEl.setAttribute('aria-live', 'polite');

      this._document.body.appendChild(liveEl);

      return liveEl;
    }
  }]);

  return LiveAnnouncer;
}();

LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};

LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function LiveAnnouncer_Factory() {
    return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
  },
  token: LiveAnnouncer,
  providedIn: "root"
});

LiveAnnouncer.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](LiveAnnouncer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


var CdkAriaLive = /*#__PURE__*/function () {
  function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkAriaLive);

    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = 'polite';
  }
  /** The aria-live politeness level to use when announcing messages. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkAriaLive, [{
    key: "politeness",
    get: function get() {
      return this._politeness;
    },
    set: function set(value) {
      var _this13 = this;

      this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

      if (this._politeness === 'off') {
        if (this._subscription) {
          this._subscription.unsubscribe();

          this._subscription = null;
        }
      } else if (!this._subscription) {
        this._subscription = this._ngZone.runOutsideAngular(function () {
          return _this13._contentObserver.observe(_this13._elementRef).subscribe(function () {
            // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
            var elementText = _this13._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
            // changes which we don't want to announce.

            if (elementText !== _this13._previousAnnouncedText) {
              _this13._liveAnnouncer.announce(elementText, _this13._politeness);

              _this13._previousAnnouncedText = elementText;
            }
          });
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._subscription) {
        this._subscription.unsubscribe();
      }
    }
  }]);

  return CdkAriaLive;
}();

CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]));
};

CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: ["cdkAriaLive", "politeness"]
  },
  exportAs: ["cdkAriaLive"]
});

CdkAriaLive.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: LiveAnnouncer
  }, {
    type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ContentObserver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }];
};

CdkAriaLive.propDecorators = {
  politeness: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['cdkAriaLive']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkAriaLive, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[cdkAriaLive]',
      exportAs: 'cdkAriaLive'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: LiveAnnouncer
    }, {
      type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ContentObserver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }];
  }, {
    politeness: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['cdkAriaLive']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // We can typically distinguish between these faked mousedown events and real mousedown events
  // using the "buttons" property. While real mousedowns will indicate the mouse button that was
  // pressed (e.g. "1" for the left mouse button), faked mousedowns will usually set the property
  // value to 0.
  return event.buttons === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  var touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.


var TOUCH_BUFFER_MS = 650;
/** InjectionToken for FocusMonitorOptions. */

var FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["normalizePassiveListenerOptions"])({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

var FocusMonitor = /*#__PURE__*/function () {
  function FocusMonitor(_ngZone, _platform,
  /** @breaking-change 11.0.0 make document required */
  document, options) {
    var _this14 = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FocusMonitor);

    this._ngZone = _ngZone;
    this._platform = _platform;
    /** The focus origin that the next focus event is a result of. */

    this._origin = null;
    /** Whether the window has just been focused. */

    this._windowFocused = false;
    /** Map of elements being monitored to their info. */

    this._elementInfo = new Map();
    /** The number of elements currently being monitored. */

    this._monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */

    this._rootNodeFocusListenerCount = new Map();
    /**
     * Event listener for `keydown` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._documentKeydownListener = function () {
      // On keydown record the origin and clear any touch event that may be in progress.
      _this14._lastTouchTarget = null;

      _this14._setOriginForCurrentEventQueue('keyboard');
    };
    /**
     * Event listener for `mousedown` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */


    this._documentMousedownListener = function (event) {
      // On mousedown record the origin only if there is not touch
      // target, since a mousedown can happen as a result of a touch event.
      if (!_this14._lastTouchTarget) {
        // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
        // Resolve the focus source to `keyboard` if we detect one of them.
        var source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';

        _this14._setOriginForCurrentEventQueue(source);
      }
    };
    /**
     * Event listener for `touchstart` events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */


    this._documentTouchstartListener = function (event) {
      // Some screen readers will fire a fake `touchstart` event if an element is activated using
      // the keyboard while on a device with a touchsreen. Consider such events as keyboard focus.
      if (!isFakeTouchstartFromScreenReader(event)) {
        // When the touchstart event fires the focus event is not yet in the event queue. This means
        // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
        // see if a focus happens.
        if (_this14._touchTimeoutId != null) {
          clearTimeout(_this14._touchTimeoutId);
        }

        _this14._lastTouchTarget = getTarget(event);
        _this14._touchTimeoutId = setTimeout(function () {
          return _this14._lastTouchTarget = null;
        }, TOUCH_BUFFER_MS);
      } else if (!_this14._lastTouchTarget) {
        _this14._setOriginForCurrentEventQueue('keyboard');
      }
    };
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */


    this._windowFocusListener = function () {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      _this14._windowFocused = true;
      _this14._windowFocusTimeoutId = setTimeout(function () {
        return _this14._windowFocused = false;
      });
    };
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */


    this._rootNodeFocusAndBlurListener = function (event) {
      var target = getTarget(event);
      var handler = event.type === 'focus' ? _this14._onFocus : _this14._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

      for (var element = target; element; element = element.parentElement) {
        handler.call(_this14, event, element);
      }
    };

    this._document = document;
    this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
    /* IMMEDIATE */
    ;
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FocusMonitor, [{
    key: "monitor",
    value: function monitor(element) {
      var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceElement"])(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
      } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
      // the shadow root, rather than the `document`, because the browser won't emit focus events
      // to the `document`, if focus is moving within the same shadow root.


      var rootNode = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["_getShadowRoot"])(nativeElement) || this._getDocument();

      var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


      if (cachedInfo) {
        if (checkChildren) {
          // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
          // observers into ones that behave as if `checkChildren` was turned on. We need a more
          // robust solution.
          cachedInfo.checkChildren = true;
        }

        return cachedInfo.subject;
      } // Create monitored element info.


      var info = {
        checkChildren: checkChildren,
        subject: new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"](),
        rootNode: rootNode
      };

      this._elementInfo.set(nativeElement, info);

      this._registerGlobalListeners(info);

      return info.subject;
    }
  }, {
    key: "stopMonitoring",
    value: function stopMonitoring(element) {
      var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceElement"])(element);

      var elementInfo = this._elementInfo.get(nativeElement);

      if (elementInfo) {
        elementInfo.subject.complete();

        this._setClasses(nativeElement);

        this._elementInfo.delete(nativeElement);

        this._removeGlobalListeners(elementInfo);
      }
    }
  }, {
    key: "focusVia",
    value: function focusVia(element, origin, options) {
      var _this15 = this;

      var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceElement"])(element);

      var focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
      // which means that the focus classes won't be updated. If that's the case, update the classes
      // directly without waiting for an event.


      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(function (_ref) {
          var _ref2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
              currentElement = _ref2[0],
              info = _ref2[1];

          return _this15._originChanged(currentElement, origin, info);
        });
      } else {
        this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this16 = this;

      this._elementInfo.forEach(function (_info, element) {
        return _this16.stopMonitoring(element);
      });
    }
    /** Access injected document if available or fallback to global document reference */

  }, {
    key: "_getDocument",
    value: function _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      var doc = this._getDocument();

      return doc.defaultView || window;
    }
  }, {
    key: "_toggleClass",
    value: function _toggleClass(element, className, shouldSet) {
      if (shouldSet) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
  }, {
    key: "_getFocusOrigin",
    value: function _getFocusOrigin(event) {
      // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
      // 1) The window has just regained focus, in which case we want to restore the focused state of
      //    the element from before the window blurred.
      // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
      // 3) The element was programmatically focused, in which case we should mark the origin as
      //    'program'.
      if (this._origin) {
        return this._origin;
      }

      if (this._windowFocused && this._lastFocusOrigin) {
        return this._lastFocusOrigin;
      } else if (this._wasCausedByTouch(event)) {
        return 'touch';
      } else {
        return 'program';
      }
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */

  }, {
    key: "_setClasses",
    value: function _setClasses(element, origin) {
      this._toggleClass(element, 'cdk-focused', !!origin);

      this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

      this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

      this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

      this._toggleClass(element, 'cdk-program-focused', origin === 'program');
    }
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * If the detection mode is 'eventual', the origin is never cleared.
     * @param origin The origin to set.
     */

  }, {
    key: "_setOriginForCurrentEventQueue",
    value: function _setOriginForCurrentEventQueue(origin) {
      var _this17 = this;

      this._ngZone.runOutsideAngular(function () {
        _this17._origin = origin;

        if (_this17._detectionMode === 0
        /* IMMEDIATE */
        ) {
            // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.
            _this17._originTimeoutId = setTimeout(function () {
              return _this17._origin = null;
            }, 1);
          }
      });
    }
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param event The focus event to check.
     * @returns Whether the event was caused by a touch.
     */

  }, {
    key: "_wasCausedByTouch",
    value: function _wasCausedByTouch(event) {
      // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
      // Consider the following dom structure:
      //
      // <div #parent tabindex="0" cdkFocusClasses>
      //   <div #child (click)="#parent.focus()"></div>
      // </div>
      //
      // If the user touches the #child element and the #parent is programmatically focused as a
      // result, this code will still consider it to have been caused by the touch event and will
      // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
      // relatively small edge-case that can be worked around by using
      // focusVia(parentEl, 'program') to focus the parent element.
      //
      // If we decide that we absolutely must handle this case correctly, we can do so by listening
      // for the first focus event after the touchstart, and then the first blur event after that
      // focus event. When that blur event fires we know that whatever follows is not a result of the
      // touchstart.
      var focusTarget = getTarget(event);
      return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */

  }, {
    key: "_onFocus",
    value: function _onFocus(event, element) {
      // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
      // focus event affecting the monitored element. If we want to use the origin of the first event
      // instead we should check for the cdk-focused class here and return if the element already has
      // it. (This only matters for elements that have includesChildren = true).
      // If we are not counting child-element-focus as focused, make sure that the event target is the
      // monitored element itself.
      var elementInfo = this._elementInfo.get(element);

      if (!elementInfo || !elementInfo.checkChildren && element !== getTarget(event)) {
        return;
      }

      this._originChanged(element, this._getFocusOrigin(event), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */

  }, {
    key: "_onBlur",
    value: function _onBlur(event, element) {
      // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
      // order to focus another child of the monitored element.
      var elementInfo = this._elementInfo.get(element);

      if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
        return;
      }

      this._setClasses(element);

      this._emitOrigin(elementInfo.subject, null);
    }
  }, {
    key: "_emitOrigin",
    value: function _emitOrigin(subject, origin) {
      this._ngZone.run(function () {
        return subject.next(origin);
      });
    }
  }, {
    key: "_registerGlobalListeners",
    value: function _registerGlobalListeners(elementInfo) {
      var _this18 = this;

      if (!this._platform.isBrowser) {
        return;
      }

      var rootNode = elementInfo.rootNode;
      var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

      if (!rootNodeFocusListeners) {
        this._ngZone.runOutsideAngular(function () {
          rootNode.addEventListener('focus', _this18._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.addEventListener('blur', _this18._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        });
      }

      this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


      if (++this._monitoredElementCount === 1) {
        // Note: we listen to events in the capture phase so we
        // can detect them even if the user stops propagation.
        this._ngZone.runOutsideAngular(function () {
          var document = _this18._getDocument();

          var window = _this18._getWindow();

          document.addEventListener('keydown', _this18._documentKeydownListener, captureEventListenerOptions);
          document.addEventListener('mousedown', _this18._documentMousedownListener, captureEventListenerOptions);
          document.addEventListener('touchstart', _this18._documentTouchstartListener, captureEventListenerOptions);
          window.addEventListener('focus', _this18._windowFocusListener);
        });
      }
    }
  }, {
    key: "_removeGlobalListeners",
    value: function _removeGlobalListeners(elementInfo) {
      var rootNode = elementInfo.rootNode;

      if (this._rootNodeFocusListenerCount.has(rootNode)) {
        var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

        if (rootNodeFocusListeners > 1) {
          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
        } else {
          rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

          this._rootNodeFocusListenerCount.delete(rootNode);
        }
      } // Unregister global listeners when last element is unmonitored.


      if (! --this._monitoredElementCount) {
        var _document2 = this._getDocument();

        var _window = this._getWindow();

        _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

        _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

        _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

        _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._touchTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    /** Updates all the state on an element once its focus origin has changed. */

  }, {
    key: "_originChanged",
    value: function _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);

      this._emitOrigin(elementInfo.subject, origin);

      this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */

  }, {
    key: "_getClosestElementsInfo",
    value: function _getClosestElementsInfo(element) {
      var results = [];

      this._elementInfo.forEach(function (info, currentElement) {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });

      return results;
    }
  }]);

  return FocusMonitor;
}();

FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};

FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function FocusMonitor_Factory() {
    return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
  },
  token: FocusMonitor,
  providedIn: "root"
});

FocusMonitor.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](FocusMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/** Gets the target of an event, accounting for Shadow DOM. */


function getTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


var CdkMonitorFocus = /*#__PURE__*/function () {
  function CdkMonitorFocus(_elementRef, _focusMonitor) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkMonitorFocus);

    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkMonitorFocus, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this19 = this;

      var element = this._elementRef.nativeElement;
      this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(function (origin) {
        return _this19.cdkFocusChange.emit(origin);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);

      if (this._monitorSubscription) {
        this._monitorSubscription.unsubscribe();
      }
    }
  }]);

  return CdkMonitorFocus;
}();

CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](FocusMonitor));
};

CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  }
});

CdkMonitorFocus.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: FocusMonitor
  }];
};

CdkMonitorFocus.propDecorators = {
  cdkFocusChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkMonitorFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: FocusMonitor
    }];
  }, {
    cdkFocusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** CSS class applied to the document body when in black-on-white high-contrast mode. */


var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

var HighContrastModeDetector = /*#__PURE__*/function () {
  function HighContrastModeDetector(_platform, document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, HighContrastModeDetector);

    this._platform = _platform;
    this._document = document;
  }
  /** Gets the current high-contrast-mode for the page. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(HighContrastModeDetector, [{
    key: "getHighContrastMode",
    value: function getHighContrastMode() {
      if (!this._platform.isBrowser) {
        return 0
        /* NONE */
        ;
      } // Create a test element with an arbitrary background-color that is neither black nor
      // white; high-contrast mode will coerce the color to either black or white. Also ensure that
      // appending the test element to the DOM does not affect layout by absolutely positioning it


      var testElement = this._document.createElement('div');

      testElement.style.backgroundColor = 'rgb(1,2,3)';
      testElement.style.position = 'absolute';

      this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
      // browsers. Once we get this color, we no longer need the test element. Access the `window`
      // via the document so we can fake it in tests. Note that we have extra null checks, because
      // this logic will likely run during app bootstrap and throwing can break the entire app.


      var documentWindow = this._document.defaultView || window;
      var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
      var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

      this._document.body.removeChild(testElement);

      switch (computedColor) {
        case 'rgb(0,0,0)':
          return 2
          /* WHITE_ON_BLACK */
          ;

        case 'rgb(255,255,255)':
          return 1
          /* BLACK_ON_WHITE */
          ;
      }

      return 0
      /* NONE */
      ;
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */

  }, {
    key: "_applyBodyHighContrastModeCssClasses",
    value: function _applyBodyHighContrastModeCssClasses() {
      if (this._platform.isBrowser && this._document.body) {
        var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

        bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
        bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
        var mode = this.getHighContrastMode();

        if (mode === 1
        /* BLACK_ON_WHITE */
        ) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
          } else if (mode === 2
        /* WHITE_ON_BLACK */
        ) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
          }
      }
    }
  }]);

  return HighContrastModeDetector;
}();

HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
};

HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function HighContrastModeDetector_Factory() {
    return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]));
  },
  token: HighContrastModeDetector,
  providedIn: "root"
});

HighContrastModeDetector.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](HighContrastModeDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var A11yModule = function A11yModule(highContrastModeDetector) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, A11yModule);

  highContrastModeDetector._applyBodyHighContrastModeCssClasses();
};

A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: A11yModule
});
A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function A11yModule_Factory(t) {
    return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](HighContrastModeDetector));
  },
  imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ObserversModule"]]]
});

A11yModule.ctorParameters = function () {
  return [{
    type: HighContrastModeDetector
  }];
};

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](A11yModule, {
    declarations: function declarations() {
      return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
    },
    imports: function imports() {
      return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ObserversModule"]];
    },
    exports: function exports() {
      return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](A11yModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__["ObserversModule"]],
      declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], function () {
    return [{
      type: HighContrastModeDetector
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "vxfF":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
  \**********************************************************************/
/*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function() { return CdkScrollableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the virtual scrolling strategy. */





var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Virtual scrolling strategy for lists with items of known fixed size. */

var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FixedSizeVirtualScrollStrategy);

    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** @docs-private Implemented as part of VirtualScrollStrategy. */

    this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])());
    /** The attached viewport. */

    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(FixedSizeVirtualScrollStrategy, [{
    key: "attach",
    value: function attach(viewport) {
      this._viewport = viewport;

      this._updateTotalContentSize();

      this._updateRenderedRange();
    }
    /** Detaches this scroll strategy from the currently attached viewport. */

  }, {
    key: "detach",
    value: function detach() {
      this._scrolledIndexChange.complete();

      this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */

  }, {
    key: "updateItemAndBufferSize",
    value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
      if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
      }

      this._itemSize = itemSize;
      this._minBufferPx = minBufferPx;
      this._maxBufferPx = maxBufferPx;

      this._updateTotalContentSize();

      this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */

  }, {
    key: "onContentScrolled",
    value: function onContentScrolled() {
      this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */

  }, {
    key: "onDataLengthChanged",
    value: function onDataLengthChanged() {
      this._updateTotalContentSize();

      this._updateRenderedRange();
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */

  }, {
    key: "onContentRendered",
    value: function onContentRendered() {}
    /** @docs-private Implemented as part of VirtualScrollStrategy. */

  }, {
    key: "onRenderedOffsetChanged",
    value: function onRenderedOffsetChanged() {}
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */

  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index, behavior) {
      if (this._viewport) {
        this._viewport.scrollToOffset(index * this._itemSize, behavior);
      }
    }
    /** Update the viewport's total content size. */

  }, {
    key: "_updateTotalContentSize",
    value: function _updateTotalContentSize() {
      if (!this._viewport) {
        return;
      }

      this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /** Update the viewport's rendered range. */

  }, {
    key: "_updateRenderedRange",
    value: function _updateRenderedRange() {
      if (!this._viewport) {
        return;
      }

      var renderedRange = this._viewport.getRenderedRange();

      var newRange = {
        start: renderedRange.start,
        end: renderedRange.end
      };

      var viewportSize = this._viewport.getViewportSize();

      var dataLength = this._viewport.getDataLength();

      var scrollOffset = this._viewport.measureScrollOffset(); // Prevent NaN as result when dividing by zero.


      var firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0; // If user scrolls to the bottom of the list and data changes to a smaller list

      if (newRange.end > dataLength) {
        // We have to recalculate the first visible index based on new data length and viewport size.
        var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
        var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
        // Current range must also be adjusted to cover the new position (bottom of new list).

        if (firstVisibleIndex != newVisibleIndex) {
          firstVisibleIndex = newVisibleIndex;
          scrollOffset = newVisibleIndex * this._itemSize;
          newRange.start = Math.floor(firstVisibleIndex);
        }

        newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
      }

      var startBuffer = scrollOffset - newRange.start * this._itemSize;

      if (startBuffer < this._minBufferPx && newRange.start != 0) {
        var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
        newRange.start = Math.max(0, newRange.start - expandStart);
        newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
      } else {
        var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

        if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
          var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

          if (expandEnd > 0) {
            newRange.end = Math.min(dataLength, newRange.end + expandEnd);
            newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
          }
        }
      }

      this._viewport.setRenderedRange(newRange);

      this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

      this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
  }]);

  return FixedSizeVirtualScrollStrategy;
}();
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */


function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */


var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
  function CdkFixedSizeVirtualScroll() {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkFixedSizeVirtualScroll);

    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    /** The scroll strategy used by this directive. */

    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkFixedSizeVirtualScroll, [{
    key: "itemSize",
    get: function get() {
      return this._itemSize;
    },
    set: function set(value) {
      this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
    }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */

  }, {
    key: "minBufferPx",
    get: function get() {
      return this._minBufferPx;
    },
    set: function set(value) {
      this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
    }
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     */

  }, {
    key: "maxBufferPx",
    get: function get() {
      return this._maxBufferPx;
    },
    set: function set(value) {
      this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
  }]);

  return CdkFixedSizeVirtualScroll;
}();

CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
  return new (t || CdkFixedSizeVirtualScroll)();
};

CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: CdkFixedSizeVirtualScroll,
  selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
  inputs: {
    itemSize: "itemSize",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: _fixedSizeVirtualScrollStrategyFactory,
    deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
      return CdkFixedSizeVirtualScroll;
    })]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});
CdkFixedSizeVirtualScroll.propDecorators = {
  itemSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  minBufferPx: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  maxBufferPx: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'cdk-virtual-scroll-viewport[itemSize]',
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]
    }]
  }], function () {
    return [];
  }, {
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time in ms to throttle the scrolling events by default. */


var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */

var ScrollDispatcher = /*#__PURE__*/function () {
  function ScrollDispatcher(_ngZone, _platform, document) {
    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ScrollDispatcher);

    this._ngZone = _ngZone;
    this._platform = _platform;
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */

    this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Keeps track of the global `scroll` and `resize` subscriptions. */

    this._globalSubscription = null;
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

    this._scrolledCount = 0;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */

    this.scrollContainers = new Map();
    this._document = document;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ScrollDispatcher, [{
    key: "register",
    value: function register(scrollable) {
      var _this = this;

      if (!this.scrollContainers.has(scrollable)) {
        this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
          return _this._scrolled.next(scrollable);
        }));
      }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */

  }, {
    key: "deregister",
    value: function deregister(scrollable) {
      var scrollableReference = this.scrollContainers.get(scrollable);

      if (scrollableReference) {
        scrollableReference.unsubscribe();
        this.scrollContainers.delete(scrollable);
      }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */

  }, {
    key: "scrolled",
    value: function scrolled() {
      var _this2 = this;

      var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

      if (!this._platform.isBrowser) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
      }

      return new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](function (observer) {
        if (!_this2._globalSubscription) {
          _this2._addGlobalListener();
        } // In the case of a 0ms delay, use an observable without auditTime
        // since it does add a perceptible delay in processing overhead.


        var subscription = auditTimeInMs > 0 ? _this2._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this2._scrolled.subscribe(observer);
        _this2._scrolledCount++;
        return function () {
          subscription.unsubscribe();
          _this2._scrolledCount--;

          if (!_this2._scrolledCount) {
            _this2._removeGlobalListener();
          }
        };
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this3 = this;

      this._removeGlobalListener();

      this.scrollContainers.forEach(function (_, container) {
        return _this3.deregister(container);
      });

      this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementOrElementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */

  }, {
    key: "ancestorScrolled",
    value: function ancestorScrolled(elementOrElementRef, auditTimeInMs) {
      var ancestors = this.getAncestorScrollContainers(elementOrElementRef);
      return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (target) {
        return !target || ancestors.indexOf(target) > -1;
      }));
    }
    /** Returns all registered Scrollables that contain the provided element. */

  }, {
    key: "getAncestorScrollContainers",
    value: function getAncestorScrollContainers(elementOrElementRef) {
      var _this4 = this;

      var scrollingContainers = [];
      this.scrollContainers.forEach(function (_subscription, scrollable) {
        if (_this4._scrollableContainsElement(scrollable, elementOrElementRef)) {
          scrollingContainers.push(scrollable);
        }
      });
      return scrollingContainers;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      return this._document.defaultView || window;
    }
    /** Returns true if the element is contained within the provided Scrollable. */

  }, {
    key: "_scrollableContainsElement",
    value: function _scrollableContainsElement(scrollable, elementOrElementRef) {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceElement"])(elementOrElementRef);
      var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
      // are the scrollable's element.

      do {
        if (element == scrollableElement) {
          return true;
        }
      } while (element = element.parentElement);

      return false;
    }
    /** Sets up the global scroll listeners. */

  }, {
    key: "_addGlobalListener",
    value: function _addGlobalListener() {
      var _this5 = this;

      this._globalSubscription = this._ngZone.runOutsideAngular(function () {
        var window = _this5._getWindow();

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(window.document, 'scroll').subscribe(function () {
          return _this5._scrolled.next();
        });
      });
    }
    /** Cleans up the global scroll listener. */

  }, {
    key: "_removeGlobalListener",
    value: function _removeGlobalListener() {
      if (this._globalSubscription) {
        this._globalSubscription.unsubscribe();

        this._globalSubscription = null;
      }
    }
  }]);

  return ScrollDispatcher;
}();

ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
  return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], 8));
};

ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function ScrollDispatcher_Factory() {
    return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], 8));
  },
  token: ScrollDispatcher,
  providedIn: "root"
});

ScrollDispatcher.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ScrollDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */


var CdkScrollable = /*#__PURE__*/function () {
  function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
    var _this6 = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkScrollable);

    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](function (observer) {
      return _this6.ngZone.runOutsideAngular(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(_this6.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this6._destroyed)).subscribe(observer);
      });
    });
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkScrollable, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.scrollDispatcher.register(this);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.scrollDispatcher.deregister(this);

      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Returns observable that emits when a scroll event is fired on the host element. */

  }, {
    key: "elementScrolled",
    value: function elementScrolled() {
      return this._elementScrolled;
    }
    /** Gets the ElementRef for the viewport. */

  }, {
    key: "getElementRef",
    value: function getElementRef() {
      return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(options) {
      var el = this.elementRef.nativeElement;
      var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

      if (options.left == null) {
        options.left = isRtl ? options.end : options.start;
      }

      if (options.right == null) {
        options.right = isRtl ? options.start : options.end;
      } // Rewrite the bottom offset as a top offset.


      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      } // Rewrite the right offset as a left offset.


      if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() != 0
      /* NORMAL */
      ) {
          if (options.left != null) {
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              options.left = options.right;
            } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              options.left = options.right ? -options.right : options.right;
            }
        } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }

      this._applyScrollToOptions(options);
    }
  }, {
    key: "_applyScrollToOptions",
    value: function _applyScrollToOptions(options) {
      var el = this.elementRef.nativeElement;

      if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["supportsScrollBehavior"])()) {
        el.scrollTo(options);
      } else {
        if (options.top != null) {
          el.scrollTop = options.top;
        }

        if (options.left != null) {
          el.scrollLeft = options.left;
        }
      }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */

  }, {
    key: "measureScrollOffset",
    value: function measureScrollOffset(from) {
      var LEFT = 'left';
      var RIGHT = 'right';
      var el = this.elementRef.nativeElement;

      if (from == 'top') {
        return el.scrollTop;
      }

      if (from == 'bottom') {
        return el.scrollHeight - el.clientHeight - el.scrollTop;
      } // Rewrite start & end as left or right offsets.


      var isRtl = this.dir && this.dir.value == 'rtl';

      if (from == 'start') {
        from = isRtl ? RIGHT : LEFT;
      } else if (from == 'end') {
        from = isRtl ? LEFT : RIGHT;
      }

      if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == 2
      /* INVERTED */
      ) {
          // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
          // 0 when scrolled all the way right.
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["getRtlScrollAxisType"])() == 1
      /* NEGATED */
      ) {
          // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
          // 0 when scrolled all the way right.
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
        // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
        // (scrollWidth - clientWidth) when scrolled all the way right.
        if (from == LEFT) {
          return el.scrollLeft;
        } else {
          return el.scrollWidth - el.clientWidth - el.scrollLeft;
        }
      }
    }
  }]);

  return CdkScrollable;
}();

CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
  return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], 8));
};

CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: CdkScrollable,
  selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
});

CdkScrollable.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkScrollable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[cdk-scrollable], [cdkScrollable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time in ms to throttle the resize events by default. */


var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */

var ViewportRuler = /*#__PURE__*/function () {
  function ViewportRuler(_platform, ngZone, document) {
    var _this7 = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ViewportRuler);

    this._platform = _platform;
    /** Stream of viewport change events. */

    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Event listener that will be used to handle the viewport change events. */

    this._changeListener = function (event) {
      _this7._change.next(event);
    };

    this._document = document;
    ngZone.runOutsideAngular(function () {
      if (_platform.isBrowser) {
        var _window = _this7._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
        // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


        _window.addEventListener('resize', _this7._changeListener);

        _window.addEventListener('orientationchange', _this7._changeListener);
      } // We don't need to keep track of the subscription,
      // because we complete the `change` stream on destroy.


      _this7.change().subscribe(function () {
        return _this7._updateViewportSize();
      });
    });
  }

  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ViewportRuler, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._platform.isBrowser) {
        var _window2 = this._getWindow();

        _window2.removeEventListener('resize', this._changeListener);

        _window2.removeEventListener('orientationchange', this._changeListener);
      }

      this._change.complete();
    }
    /** Returns the viewport's width and height. */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      if (!this._viewportSize) {
        this._updateViewportSize();
      }

      var output = {
        width: this._viewportSize.width,
        height: this._viewportSize.height
      }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

      if (!this._platform.isBrowser) {
        this._viewportSize = null;
      }

      return output;
    }
    /** Gets a ClientRect for the viewport's bounds. */

  }, {
    key: "getViewportRect",
    value: function getViewportRect() {
      // Use the document element's bounding rect rather than the window scroll properties
      // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
      // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
      // conceptual viewports. Under most circumstances these viewports are equivalent, but they
      // can disagree when the page is pinch-zoomed (on devices that support touch).
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
      // We use the documentElement instead of the body because, by default (without a css reset)
      // browsers typically give the document body an 8px margin, which is not included in
      // getBoundingClientRect().
      var scrollPosition = this.getViewportScrollPosition();

      var _this$getViewportSize = this.getViewportSize(),
          width = _this$getViewportSize.width,
          height = _this$getViewportSize.height;

      return {
        top: scrollPosition.top,
        left: scrollPosition.left,
        bottom: scrollPosition.top + height,
        right: scrollPosition.left + width,
        height: height,
        width: width
      };
    }
    /** Gets the (top, left) scroll position of the viewport. */

  }, {
    key: "getViewportScrollPosition",
    value: function getViewportScrollPosition() {
      // While we can get a reference to the fake document
      // during SSR, it doesn't have getBoundingClientRect.
      if (!this._platform.isBrowser) {
        return {
          top: 0,
          left: 0
        };
      } // The top-left-corner of the viewport is determined by the scroll position of the document
      // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
      // whether `document.body` or `document.documentElement` is the scrolled element, so reading
      // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
      // `document.documentElement` works consistently, where the `top` and `left` values will
      // equal negative the scroll position.


      var document = this._document;

      var window = this._getWindow();

      var documentElement = document.documentElement;
      var documentRect = documentElement.getBoundingClientRect();
      var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
      var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
      return {
        top: top,
        left: left
      };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */

  }, {
    key: "change",
    value: function change() {
      var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
      return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(throttleTime)) : this._change;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      return this._document.defaultView || window;
    }
    /** Updates the cached viewport size. */

  }, {
    key: "_updateViewportSize",
    value: function _updateViewportSize() {
      var window = this._getWindow();

      this._viewportSize = this._platform.isBrowser ? {
        width: window.innerWidth,
        height: window.innerHeight
      } : {
        width: 0,
        height: 0
      };
    }
  }]);

  return ViewportRuler;
}();

ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
  return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], 8));
};

ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"])({
  factory: function ViewportRuler_Factory() {
    return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"], 8));
  },
  token: ViewportRuler,
  providedIn: "root"
});

ViewportRuler.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ViewportRuler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Checks if the given ranges are equal. */


function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */


var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_10__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_10__["asapScheduler"];
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CdkVirtualScrollViewport, _CdkScrollable);

  var _super = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(CdkVirtualScrollViewport);

  function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler) {
    var _this8;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkVirtualScrollViewport);

    _this8 = _super.call(this, elementRef, scrollDispatcher, ngZone, dir);
    _this8.elementRef = elementRef;
    _this8._changeDetectorRef = _changeDetectorRef;
    _this8._scrollStrategy = _scrollStrategy;
    /** Emits when the viewport is detached from a CdkVirtualForOf. */

    _this8._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Emits when the rendered range changes. */

    _this8._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    _this8._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
    // depending on how the strategy calculates the scrolled index, it may come at a cost to
    // performance.

    /** Emits when the index of the first element visible in the viewport changes. */

    _this8.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"](function (observer) {
      return _this8._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
        return Promise.resolve().then(function () {
          return _this8.ngZone.run(function () {
            return observer.next(index);
          });
        });
      });
    });
    /** A stream that emits whenever the rendered range changes. */

    _this8.renderedRangeStream = _this8._renderedRangeSubject;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */

    _this8._totalContentSize = 0;
    /** A string representing the `style.width` property value to be used for the spacer element. */

    _this8._totalContentWidth = '';
    /** A string representing the `style.height` property value to be used for the spacer element. */

    _this8._totalContentHeight = '';
    /** The currently rendered range of indices. */

    _this8._renderedRange = {
      start: 0,
      end: 0
    };
    /** The length of the data bound to this viewport (in number of items). */

    _this8._dataLength = 0;
    /** The size of the viewport (in pixels). */

    _this8._viewportSize = 0;
    /** The last rendered content offset that was set. */

    _this8._renderedContentOffset = 0;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */

    _this8._renderedContentOffsetNeedsRewrite = false;
    /** Whether there is a pending change detection cycle. */

    _this8._isChangeDetectionPending = false;
    /** A list of functions to run after the next change detection cycle. */

    _this8._runAfterChangeDetection = [];
    /** Subscription to changes in the viewport size. */

    _this8._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;

    if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }

    _this8._viewportChanges = viewportRuler.change().subscribe(function () {
      _this8.checkViewportSize();
    });
    return _this8;
  }
  /** The direction the viewport scrolls. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkVirtualScrollViewport, [{
    key: "orientation",
    get: function get() {
      return this._orientation;
    },
    set: function set(orientation) {
      if (this._orientation !== orientation) {
        this._orientation = orientation;

        this._calculateSpacerSize();
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this9 = this;

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
      // the Viewport to be rendered with the correct size before we measure. We run this outside the
      // zone to avoid causing more change detection cycles. We handle the change detection loop
      // ourselves instead.


      this.ngZone.runOutsideAngular(function () {
        return Promise.resolve().then(function () {
          _this9._measureViewportSize();

          _this9._scrollStrategy.attach(_this9);

          _this9.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
          // there are multiple scroll events in the same frame we only need to recheck
          // our layout once.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
            return _this9._scrollStrategy.onContentScrolled();
          });

          _this9._markChangeDetectionNeeded();
        });
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.detach();

      this._scrollStrategy.detach(); // Complete all subjects


      this._renderedRangeSubject.complete();

      this._detachedSubject.complete();

      this._viewportChanges.unsubscribe();

      Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
    }
    /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

  }, {
    key: "attach",
    value: function attach(forOf) {
      var _this10 = this;

      if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('CdkVirtualScrollViewport is already attached.');
      } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
      // changes. Run outside the zone to avoid triggering change detection, since we're managing the
      // change detection loop ourselves.


      this.ngZone.runOutsideAngular(function () {
        _this10._forOf = forOf;

        _this10._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this10._detachedSubject)).subscribe(function (data) {
          var newLength = data.length;

          if (newLength !== _this10._dataLength) {
            _this10._dataLength = newLength;

            _this10._scrollStrategy.onDataLengthChanged();
          }

          _this10._doChangeDetection();
        });
      });
    }
    /** Detaches the current `CdkVirtualForOf`. */

  }, {
    key: "detach",
    value: function detach() {
      this._forOf = null;

      this._detachedSubject.next();
    }
    /** Gets the length of the data bound to this viewport (in number of items). */

  }, {
    key: "getDataLength",
    value: function getDataLength() {
      return this._dataLength;
    }
    /** Gets the size of the viewport (in pixels). */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      return this._viewportSize;
    } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

    /** Get the current rendered range of items. */

  }, {
    key: "getRenderedRange",
    value: function getRenderedRange() {
      return this._renderedRange;
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */

  }, {
    key: "setTotalContentSize",
    value: function setTotalContentSize(size) {
      if (this._totalContentSize !== size) {
        this._totalContentSize = size;

        this._calculateSpacerSize();

        this._markChangeDetectionNeeded();
      }
    }
    /** Sets the currently rendered range of indices. */

  }, {
    key: "setRenderedRange",
    value: function setRenderedRange(range) {
      var _this11 = this;

      if (!rangesEqual(this._renderedRange, range)) {
        this._renderedRangeSubject.next(this._renderedRange = range);

        this._markChangeDetectionNeeded(function () {
          return _this11._scrollStrategy.onContentRendered();
        });
      }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */

  }, {
    key: "getOffsetToRenderedContentStart",
    value: function getOffsetToRenderedContentStart() {
      return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */

  }, {
    key: "setRenderedContentOffset",
    value: function setRenderedContentOffset(offset) {
      var _this12 = this;

      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
      // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
      // in the negative direction.
      var isRtl = this.dir && this.dir.value == 'rtl';
      var isHorizontal = this.orientation == 'horizontal';
      var axis = isHorizontal ? 'X' : 'Y';
      var axisDirection = isHorizontal && isRtl ? -1 : 1;
      var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
      this._renderedContentOffset = offset;

      if (to === 'to-end') {
        transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
        // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
        // expand upward).

        this._renderedContentOffsetNeedsRewrite = true;
      }

      if (this._renderedContentTransform != transform) {
        // We know this value is safe because we parse `offset` with `Number()` before passing it
        // into the string.
        this._renderedContentTransform = transform;

        this._markChangeDetectionNeeded(function () {
          if (_this12._renderedContentOffsetNeedsRewrite) {
            _this12._renderedContentOffset -= _this12.measureRenderedContentSize();
            _this12._renderedContentOffsetNeedsRewrite = false;

            _this12.setRenderedContentOffset(_this12._renderedContentOffset);
          } else {
            _this12._scrollStrategy.onRenderedOffsetChanged();
          }
        });
      }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */

  }, {
    key: "scrollToOffset",
    value: function scrollToOffset(offset) {
      var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
      var options = {
        behavior: behavior
      };

      if (this.orientation === 'horizontal') {
        options.start = offset;
      } else {
        options.top = offset;
      }

      this.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */

  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index) {
      var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

      this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */

  }, {
    key: "measureScrollOffset",
    value: function measureScrollOffset(from) {
      return from ? Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
    }
    /** Measure the combined size of all of the rendered items. */

  }, {
    key: "measureRenderedContentSize",
    value: function measureRenderedContentSize() {
      var contentEl = this._contentWrapper.nativeElement;
      return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */

  }, {
    key: "measureRangeSize",
    value: function measureRangeSize(range) {
      if (!this._forOf) {
        return 0;
      }

      return this._forOf.measureRangeSize(range, this.orientation);
    }
    /** Update the viewport dimensions and re-render. */

  }, {
    key: "checkViewportSize",
    value: function checkViewportSize() {
      // TODO: Cleanup later when add logic for handling content resize
      this._measureViewportSize();

      this._scrollStrategy.onDataLengthChanged();
    }
    /** Measure the viewport size. */

  }, {
    key: "_measureViewportSize",
    value: function _measureViewportSize() {
      var viewportEl = this.elementRef.nativeElement;
      this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
    }
    /** Queue up change detection to run. */

  }, {
    key: "_markChangeDetectionNeeded",
    value: function _markChangeDetectionNeeded(runAfter) {
      var _this13 = this;

      if (runAfter) {
        this._runAfterChangeDetection.push(runAfter);
      } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
      // properties sequentially we only have to run `_doChangeDetection` once at the end.


      if (!this._isChangeDetectionPending) {
        this._isChangeDetectionPending = true;
        this.ngZone.runOutsideAngular(function () {
          return Promise.resolve().then(function () {
            _this13._doChangeDetection();
          });
        });
      }
    }
    /** Run change detection. */

  }, {
    key: "_doChangeDetection",
    value: function _doChangeDetection() {
      var _this14 = this;

      this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
      // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
      // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
      // the `Number` function first to coerce it to a numeric value.

      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
      // from the root, since the repeated items are content projected in. Calling `detectChanges`
      // instead does not properly check the projected content.

      this.ngZone.run(function () {
        return _this14._changeDetectorRef.markForCheck();
      });
      var runAfterChangeDetection = this._runAfterChangeDetection;
      this._runAfterChangeDetection = [];

      var _iterator = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(runAfterChangeDetection),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fn = _step.value;
          fn();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /** Calculates the `style.width` and `style.height` for the spacer element. */

  }, {
    key: "_calculateSpacerSize",
    value: function _calculateSpacerSize() {
      this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
      this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
    }
  }]);

  return CdkVirtualScrollViewport;
}(CdkScrollable);

CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
  return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ViewportRuler));
};

CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CdkVirtualScrollViewport,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 3);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    }
  },
  inputs: {
    orientation: "orientation"
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: CdkScrollable,
    useExisting: CdkVirtualScrollViewport
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 4,
  consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
  template: function CdkVirtualScrollViewport_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    }
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

CdkVirtualScrollViewport.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }];
};

CdkVirtualScrollViewport.propDecorators = {
  orientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  scrolledIndexChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  _contentWrapper: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
    args: ['contentWrapper', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'cdk-virtual-scroll-viewport',
      template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
      host: {
        'class': 'cdk-virtual-scroll-viewport',
        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }],
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [VIRTUAL_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }]
    }, {
      type: ScrollDispatcher
    }, {
      type: ViewportRuler
    }];
  }, {
    scrolledIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    _contentWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
      args: ['contentWrapper', {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Helper to extract the offset of a DOM Node in a certain direction. */


function getOffset(orientation, direction, node) {
  var el = node;

  if (!el.getBoundingClientRect) {
    return 0;
  }

  var rect = el.getBoundingClientRect();

  if (orientation === 'horizontal') {
    return direction === 'start' ? rect.left : rect.right;
  }

  return direction === 'start' ? rect.top : rect.bottom;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */


var CdkVirtualForOf = /*#__PURE__*/function () {
  function CdkVirtualForOf(
  /** The view container to add items to. */
  _viewContainerRef,
  /** The template to use when stamping out new items. */
  _template,
  /** The set of available differs. */
  _differs,
  /** The strategy used to render items in the virtual scroll viewport. */
  _viewRepeater,
  /** The virtual scrolling viewport that these items are being rendered in. */
  _viewport, ngZone) {
    var _this15 = this;

    Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkVirtualForOf);

    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    /** Emits when the rendered view of the data changes. */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Subject that emits when a new DataSource instance is given. */

    this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Emits whenever the data in the current DataSource changes. */

    this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (_ref) {
      var _ref2 = Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          prev = _ref2[0],
          cur = _ref2[1];

      return _this15._changeDataSource(prev, cur);
    }), // Replay the last emitted data when someone subscribes.
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["shareReplay"])(1));
    /** The differ used to calculate changes to the data. */

    this._differ = null;
    /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

    this._needsUpdate = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    this.dataStream.subscribe(function (data) {
      _this15._data = data;

      _this15._onRenderedDataChange();
    });

    this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed)).subscribe(function (range) {
      _this15._renderedRange = range;
      ngZone.run(function () {
        return _this15.viewChange.next(_this15._renderedRange);
      });

      _this15._onRenderedDataChange();
    });

    this._viewport.attach(this);
  }
  /** The DataSource to display. */


  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(CdkVirtualForOf, [{
    key: "cdkVirtualForOf",
    get: function get() {
      return this._cdkVirtualForOf;
    },
    set: function set(value) {
      this._cdkVirtualForOf = value;

      if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["isDataSource"])(value)) {
        this._dataSourceChanges.next(value);
      } else {
        // If value is an an NgIterable, convert it to an array.
        this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["isObservable"])(value) ? value : Array.from(value || [])));
      }
    }
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     */

  }, {
    key: "cdkVirtualForTrackBy",
    get: function get() {
      return this._cdkVirtualForTrackBy;
    },
    set: function set(fn) {
      var _this16 = this;

      this._needsUpdate = true;
      this._cdkVirtualForTrackBy = fn ? function (index, item) {
        return fn(index + (_this16._renderedRange ? _this16._renderedRange.start : 0), item);
      } : undefined;
    }
    /** The template used to stamp out new elements. */

  }, {
    key: "cdkVirtualForTemplate",
    set: function set(value) {
      if (value) {
        this._needsUpdate = true;
        this._template = value;
      }
    }
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */

  }, {
    key: "cdkVirtualForTemplateCacheSize",
    get: function get() {
      return this._viewRepeater.viewCacheSize;
    },
    set: function set(size) {
      this._viewRepeater.viewCacheSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(size);
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */

  }, {
    key: "measureRangeSize",
    value: function measureRangeSize(range, orientation) {
      if (range.start >= range.end) {
        return 0;
      }

      if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error("Error: attempted to measure an item that isn't rendered.");
      } // The index into the list of rendered views for the first item in the range.


      var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

      var rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
      // the top of the first node from the bottom of the last one.

      var firstNode;
      var lastNode; // Find the first node by starting from the beginning and going forwards.

      for (var i = 0; i < rangeLen; i++) {
        var view = this._viewContainerRef.get(i + renderedStartIndex);

        if (view && view.rootNodes.length) {
          firstNode = lastNode = view.rootNodes[0];
          break;
        }
      } // Find the last node by starting from the end and going backwards.


      for (var _i = rangeLen - 1; _i > -1; _i--) {
        var _view = this._viewContainerRef.get(_i + renderedStartIndex);

        if (_view && _view.rootNodes.length) {
          lastNode = _view.rootNodes[_view.rootNodes.length - 1];
          break;
        }
      }

      return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this._differ && this._needsUpdate) {
        // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
        // this list being rendered (can use simpler algorithm) vs needs update due to data actually
        // changing (need to do this diff).
        var changes = this._differ.diff(this._renderedItems);

        if (!changes) {
          this._updateContext();
        } else {
          this._applyChanges(changes);
        }

        this._needsUpdate = false;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._viewport.detach();

      this._dataSourceChanges.next(undefined);

      this._dataSourceChanges.complete();

      this.viewChange.complete();

      this._destroyed.next();

      this._destroyed.complete();

      this._viewRepeater.detach();
    }
    /** React to scroll state changes in the viewport. */

  }, {
    key: "_onRenderedDataChange",
    value: function _onRenderedDataChange() {
      var _this17 = this;

      if (!this._renderedRange) {
        return;
      }

      this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

      if (!this._differ) {
        // Use a wrapper function for the `trackBy` so any new values are
        // picked up automatically without having to recreate the differ.
        this._differ = this._differs.find(this._renderedItems).create(function (index, item) {
          return _this17.cdkVirtualForTrackBy ? _this17.cdkVirtualForTrackBy(index, item) : item;
        });
      }

      this._needsUpdate = true;
    }
    /** Swap out one `DataSource` for another. */

  }, {
    key: "_changeDataSource",
    value: function _changeDataSource(oldDs, newDs) {
      if (oldDs) {
        oldDs.disconnect(this);
      }

      this._needsUpdate = true;
      return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])();
    }
    /** Update the `CdkVirtualForOfContext` for all views. */

  }, {
    key: "_updateContext",
    value: function _updateContext() {
      var count = this._data.length;
      var i = this._viewContainerRef.length;

      while (i--) {
        var view = this._viewContainerRef.get(i);

        view.context.index = this._renderedRange.start + i;
        view.context.count = count;

        this._updateComputedContextProperties(view.context);

        view.detectChanges();
      }
    }
    /** Apply changes to the DOM. */

  }, {
    key: "_applyChanges",
    value: function _applyChanges(changes) {
      var _this18 = this;

      this._viewRepeater.applyChanges(changes, this._viewContainerRef, function (record, _adjustedPreviousIndex, currentIndex) {
        return _this18._getEmbeddedViewArgs(record, currentIndex);
      }, function (record) {
        return record.item;
      }); // Update $implicit for any items that had an identity change.


      changes.forEachIdentityChange(function (record) {
        var view = _this18._viewContainerRef.get(record.currentIndex);

        view.context.$implicit = record.item;
      }); // Update the context variables on all items.

      var count = this._data.length;
      var i = this._viewContainerRef.length;

      while (i--) {
        var view = this._viewContainerRef.get(i);

        view.context.index = this._renderedRange.start + i;
        view.context.count = count;

        this._updateComputedContextProperties(view.context);
      }
    }
    /** Update the computed properties on the `CdkVirtualForOfContext`. */

  }, {
    key: "_updateComputedContextProperties",
    value: function _updateComputedContextProperties(context) {
      context.first = context.index === 0;
      context.last = context.index === context.count - 1;
      context.even = context.index % 2 === 0;
      context.odd = !context.even;
    }
  }, {
    key: "_getEmbeddedViewArgs",
    value: function _getEmbeddedViewArgs(record, index) {
      // Note that it's important that we insert the item directly at the proper index,
      // rather than inserting it and the moving it in place, because if there's a directive
      // on the same node that injects the `ViewContainerRef`, Angular will insert another
      // comment node which can throw off the move when it's being repeated for all items.
      return {
        templateRef: this._template,
        context: {
          $implicit: record.item,
          // It's guaranteed that the iterable is not "undefined" or "null" because we only
          // generate views for elements if the "cdkVirtualForOf" iterable has elements.
          cdkVirtualForOf: this._cdkVirtualForOf,
          index: -1,
          count: -1,
          first: false,
          last: false,
          odd: false,
          even: false
        },
        index: index
      };
    }
  }]);

  return CdkVirtualForOf;
}();

CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
  return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_VIEW_REPEATER_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]));
};

CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: CdkVirtualForOf,
  selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
  inputs: {
    cdkVirtualForOf: "cdkVirtualForOf",
    cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
    cdkVirtualForTemplate: "cdkVirtualForTemplate",
    cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_VIEW_REPEATER_STRATEGY"],
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_RecycleViewRepeaterStrategy"]
  }])]
});

CdkVirtualForOf.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["IterableDiffers"]
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_RecycleViewRepeaterStrategy"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_VIEW_REPEATER_STRATEGY"]]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["SkipSelf"]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }];
};

CdkVirtualForOf.propDecorators = {
  cdkVirtualForOf: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  cdkVirtualForTrackBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  cdkVirtualForTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  cdkVirtualForTemplateCacheSize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkVirtualForOf, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: '[cdkVirtualFor][cdkVirtualForOf]',
      providers: [{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_VIEW_REPEATER_STRATEGY"],
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_RecycleViewRepeaterStrategy"]
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["IterableDiffers"]
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_RecycleViewRepeaterStrategy"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["_VIEW_REPEATER_STRATEGY"]]
      }]
    }, {
      type: CdkVirtualScrollViewport,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["SkipSelf"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }];
  }, {
    cdkVirtualForOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    cdkVirtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    cdkVirtualForTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var CdkScrollableModule = function CdkScrollableModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CdkScrollableModule);
};

CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: CdkScrollableModule
});
CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function CdkScrollableModule_Factory(t) {
    return new (t || CdkScrollableModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
    declarations: [CdkScrollable],
    exports: [CdkScrollable]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](CdkScrollableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      exports: [CdkScrollable],
      declarations: [CdkScrollable]
    }]
  }], null, null);
})();
/**
 * @docs-primary-export
 */


var ScrollingModule = function ScrollingModule() {
  Object(C_Projects_safe_t_exam_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ScrollingModule);
};

ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: ScrollingModule
});
ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function ScrollingModule_Factory(t) {
    return new (t || ScrollingModule)();
  },
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], CdkScrollableModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ScrollingModule, {
    declarations: function declarations() {
      return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
    },
    imports: function imports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], CdkScrollableModule];
    },
    exports: function exports() {
      return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ScrollingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"], CdkScrollableModule],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
      declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "VCnB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function MainComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.fold$.next(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.compactSize = 425;
        this.fold$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.compactView$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](window.innerWidth < this.compactSize);
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 9, vars: 7, consts: [[1, "wrapper"], ["class", "mobile-btn-menu", 3, "click", 4, "ngIf"], ["mode", "side", 1, "side-menu", 3, "opened"], [3, "fold$", "compactView"], [3, "click"], [1, "mobile-btn-menu", 3, "click"], ["src", "../../../../assets/icons/UnfoldButton.svg"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainComponent_div_1_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-side-menu", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("compactView", function MainComponent_Template_app_side_menu_compactView_6_listener($event) { return ctx.compactView$.next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-sidenav-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_mat_sidenav_content_click_7_listener() { return ctx.fold$.next(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.compactView$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.compactView$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fold$", ctx.fold$);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .mobile-btn-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  padding: 4px;\n  width: 40px;\n  height: 40px;\n  background-color: #ffffff;\n  border-radius: 0 0 15px 0;\n  border-bottom: 1px solid #95a0ad;\n  border-right: 1px solid #95a0ad;\n  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.07);\n}\n.wrapper[_ngcontent-%COMP%]   .mobile-btn-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(90deg);\n}\n.wrapper[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.wrapper[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2Q0FBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ047QUFHRTtFQUNFLFlBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7QUFETjtBQUdNO0VBQ0UsaUJBQUE7QUFEUiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5tb2JpbGUtYnRuLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NWEwYWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTVhMGFkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLm1hdC1kcmF3ZXIge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICAgIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
    return MainComponent;
}());



/***/ }),

/***/ "xz+E":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
  \***************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of the Angular Component Development Kit. */

var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.3');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map