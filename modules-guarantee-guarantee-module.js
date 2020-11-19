(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-guarantee-guarantee-module"],{

/***/ "9h+c":
/*!*******************************************************!*\
  !*** ./src/app/modules/guarantee/guarantee.module.ts ***!
  \*******************************************************/
/*! exports provided: GuaranteeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuaranteeModule", function() { return GuaranteeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _guarantee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guarantee-routing.module */ "gd6b");
/* harmony import */ var _guarantee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guarantee.component */ "F8bx");





class GuaranteeModule {
}
GuaranteeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuaranteeModule });
GuaranteeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuaranteeModule_Factory(t) { return new (t || GuaranteeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _guarantee_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuaranteeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuaranteeModule, { declarations: [_guarantee_component__WEBPACK_IMPORTED_MODULE_3__["GuaranteeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _guarantee_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuaranteeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuaranteeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_guarantee_component__WEBPACK_IMPORTED_MODULE_3__["GuaranteeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _guarantee_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuaranteeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "F8bx":
/*!**********************************************************!*\
  !*** ./src/app/modules/guarantee/guarantee.component.ts ***!
  \**********************************************************/
/*! exports provided: GuaranteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuaranteeComponent", function() { return GuaranteeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GuaranteeComponent {
    constructor() { }
    ngOnInit() {
    }
}
GuaranteeComponent.ɵfac = function GuaranteeComponent_Factory(t) { return new (t || GuaranteeComponent)(); };
GuaranteeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuaranteeComponent, selectors: [["app-guarantee"]], decls: 109, vars: 0, consts: [[1, "first-screen"], [1, "title"], [1, "main"], [1, "container"], [1, "items-container"], [1, "row"], [1, "column", "item"], ["src", "", "alt", "", 1, "icon"], [1, "text"], [1, "stats"], [1, "stats-container", "row"], [1, "stats-item", "blue"], [1, "content"], [1, "stats-item", "orange"], [1, "stats-item", "green"]], template: function GuaranteeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041C\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041D\u0430\u0448\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7 \u043E\u0442\u0435\u0442\u044F\u0442 \u0412\u0430\u043C \u043D\u0430 \u0432\u0441\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u0440\u0430\u0431\u043E\u0442\u043E\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0411\u043E\u043B\u0435\u0435 3000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041C\u044B \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u043C \u043E\u0442\u0437\u044B\u0432\u043E\u043C \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u0443\u0442 \u0436\u0435 \u0432\u043D\u043E\u0441\u0435\u043C \u043F\u0440\u0430\u0432\u043A\u0438, \u0435\u0441\u043B\u0438 \u0412\u0430\u043C \u043D\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0447\u0442\u043E-\u0442\u043E \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043D\u0430\u0448\u0438\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0442\u044C \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0432 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \u043D\u0430 100%! \u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u0412\u044B \u0442\u0443\u0442 \u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043D\u0430 \u0441\u0432\u043E\u0439 e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041B\u0443\u0447\u0448\u0438\u0435 \u0446\u0435\u043D\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u043D\u0430 \u0440\u044B\u043D\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041C\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u044B, \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0446\u0435\u043D\u044B/\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0435\u0449\u0435 \u043D\u0435 \u0431\u044B\u043B\u043E! \u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0439 \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0441\u044F \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0439 \u0446\u0435\u043D\u043E\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u043A\u0438\u0434\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u0438 \u0430\u043A\u0446\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u041D\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u0430\u0442\u0440\u0435\u043B \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0435 \u0430\u043A\u0446\u0438\u0438 \u0438 \u0441\u043A\u0438\u0434\u043A\u0438. \u041D\u0435 \u0443\u0441\u043F\u0443\u0441\u0442\u0438 \u0441\u0432\u043E\u0439 \u0448\u0430\u043D\u0441, \u043F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0431\u0443\u0434\u044C \u0432 \u043A\u0443\u0440\u0441\u0435\u0439 \u043F\u0435\u0440\u0432\u044B\u043C!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B: WebMoney, QIWI, \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0435\u043D\u044C\u0433\u0438, VISA, MasterCard, \u041C\u0422\u0421, \u041C\u0435\u0433\u0430\u0444\u043E\u043D \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u0442\u043E\u0432\u0430\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u041F\u043E\u043A\u0443\u043F\u0430\u044F \u0432 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0442\u044C \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0442\u043E\u0432\u0430\u0440\u0430. \u0412\u0441\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u043F\u043E\u0434\u0430\u0434\u0435\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u043F\u0430\u0440\u0442\u043D\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u041D\u0430\u0434\u0451\u0436\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440 - \u0437\u0430 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430\u0448\u0435\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043D\u0435\u0439 \u043F\u0440\u0438\u043D\u044F\u043B\u043E \u0431\u043E\u043B\u0435\u0435 5000 \u0447\u0435\u043B\u043E\u0432\u0435\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0441\u0430\u0439\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0412\u0430\u0441 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430\u0448\u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "166");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0412\u0441\u0435\u0433\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "35902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u0412\u0441\u0435\u0433\u043E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "603497");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " \u043F\u043E\u043A\u0443\u043F\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  font-family: \"Proxima Nova Rg\", sans-serif;\n}\n\n.first-screen[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/first_screen/bg-guarantee.png\");\n  background-position: center;\n  padding-top: 90px;\n  padding-bottom: 80px;\n  color: #ffffff;\n  text-align: center;\n}\n\n.first-screen[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 80px;\n  margin-bottom: 268px;\n}\n\n.main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-top: -175px;\n}\n\n.main[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  justify-content: space-between;\n}\n\n.main[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 0 30px;\n}\n\n.main[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  max-width: 360px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  padding: 50px 30px;\n  text-align: center;\n  align-items: center;\n}\n\n.main[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: #3faae7;\n}\n\n.main[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.main[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.main[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #11151b;\n  margin: 0;\n}\n\n.main[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  text-align: center;\n  margin: 25px 0 0;\n  color: rgba(17, 21, 27, 0.7);\n}\n\n.stats[_ngcontent-%COMP%] {\n  padding-top: 95px;\n  padding-bottom: 140px;\n}\n\n.stats[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #11151b;\n  text-align: center;\n  margin: 0 0 18px;\n}\n\n.stats[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 300;\n  text-align: center;\n  color: #11151b;\n  max-width: 640px;\n  margin: 0 auto;\n}\n\n.stats[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n\n.stats[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 3px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 360px;\n}\n\n.stats[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]:nth-child(2) {\n  margin: 0 30px;\n}\n\n.stats[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  color: #ffffff;\n  margin: 0;\n}\n\n.stats[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.stats[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: #16b267;\n}\n\n.orange[_ngcontent-%COMP%] {\n  background-color: #ff6101;\n}\n\n.blue[_ngcontent-%COMP%] {\n  background-color: #3faae7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ndWFyYW50ZWUvZ3VhcmFudGVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLHFFQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFNSTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUFKTjs7QUFLTTtFQUNFLGNBQUE7QUFIUjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU1JO0VBQ0UseUJBQUE7QUFKTjs7QUFLTTtFQUNFLGNBQUE7QUFIUjs7QUFLTTtFQUNFLGNBQUE7QUFIUjs7QUFNSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBSk47O0FBTUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFKTjs7QUFVQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFQRjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTko7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTRTtFQUNFLGdCQUFBO0FBUEo7O0FBUUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQU5OOztBQU9NO0VBQ0UsY0FBQTtBQUxSOztBQU9NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUxSOztBQU1RO0VBQ0UsZUFBQTtBQUpWOztBQU9NO0VBQ0Usa0JBQUE7QUFMUjs7QUFXQTtFQUVFLHlCQURRO0FBUlY7O0FBWUE7RUFFRSx5QkFEUTtBQVRWOztBQWFBO0VBRUUseUJBRFE7QUFWViIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3VhcmFudGVlL2d1YXJhbnRlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmb250LWZhbWlseTogXCJQcm94aW1hIE5vdmEgUmdcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZpcnN0LXNjcmVlbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZmlyc3Rfc2NyZWVuL2JnLWd1YXJhbnRlZS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5cclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjY4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTc1cHg7XHJcbiAgfVxyXG4gIC5pdGVtcy1jb250YWluZXIge1xyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLml0ZW0ge1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZmFhZTc7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjMTExNTFiO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDI1cHggMCAwO1xyXG4gICAgICBjb2xvcjogcmdiYSgxNywgMjEsIDI3LCAwLjcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zdGF0cyB7XHJcbiAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE0MHB4O1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxMTE1MWI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAxOHB4O1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxMTE1MWI7XHJcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuc3RhdHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAuc3RhdHMtaXRlbSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdyZWVuIHtcclxuICAkY29sb3I6ICMxNmIyNjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICAkY29sb3I6ICNmZjYxMDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgJGNvbG9yOiAjM2ZhYWU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuaranteeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guarantee',
                templateUrl: './guarantee.component.html',
                styleUrls: ['./guarantee.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gd6b":
/*!***************************************************************!*\
  !*** ./src/app/modules/guarantee/guarantee-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GuaranteeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuaranteeRoutingModule", function() { return GuaranteeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guarantee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guarantee.component */ "F8bx");





const routes = [{ path: '', component: _guarantee_component__WEBPACK_IMPORTED_MODULE_2__["GuaranteeComponent"] }];
class GuaranteeRoutingModule {
}
GuaranteeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuaranteeRoutingModule });
GuaranteeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuaranteeRoutingModule_Factory(t) { return new (t || GuaranteeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuaranteeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuaranteeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-guarantee-guarantee-module.js.map