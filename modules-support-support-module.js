(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-support-support-module"],{

/***/ "1/91":
/*!***********************************************************!*\
  !*** ./src/app/modules/support/support-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SupportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function() { return SupportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component */ "zrcn");





const routes = [{ path: '', component: _support_component__WEBPACK_IMPORTED_MODULE_2__["SupportComponent"] }];
class SupportRoutingModule {
}
SupportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SupportRoutingModule });
SupportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SupportRoutingModule_Factory(t) { return new (t || SupportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vQh5":
/*!***************************************************!*\
  !*** ./src/app/modules/support/support.module.ts ***!
  \***************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-routing.module */ "1/91");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.component */ "zrcn");





class SupportModule {
}
SupportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SupportModule });
SupportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SupportModule_Factory(t) { return new (t || SupportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_2__["SupportRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupportModule, { declarations: [_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _support_routing_module__WEBPACK_IMPORTED_MODULE_2__["SupportRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _support_routing_module__WEBPACK_IMPORTED_MODULE_2__["SupportRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zrcn":
/*!******************************************************!*\
  !*** ./src/app/modules/support/support.component.ts ***!
  \******************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SupportComponent_details_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.answer, " ");
} }
class SupportComponent {
    constructor() {
        this.questions = new Array(10).fill({
            question: 'Question',
            answer: 'Answer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend, mi vitae elementum tincidunt, felis orci eleifend nibh, ac aliquam erat ex ac nunc. Curabitur fermentum, ipsum eget venenatis placerat.'
        });
    }
    ngOnInit() {
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 11, vars: 1, consts: [[1, "first_screen"], [1, "container"], [1, "text"], [1, "title"], [1, "popular-questions"], [4, "ngFor", "ngForOf"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041D\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 24 \u0447\u0430\u0441\u0430 \u0432 \u0441\u0443\u0442\u043A\u0438, 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E. \u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0442 \u0438 \u043D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442 \u0412\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 2\u0445 \u0447\u0430\u0441\u043E\u0432. \u041C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0434\u044B \u043F\u043E\u043C\u043E\u0447\u044C \uD83D\uDE09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u0443\u044E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SupportComponent_details_10_Template, 4, 2, "details", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  font-family: \"Proxima Nova Rg\", sans-serif;\n}\n\n.first_screen[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/first_screen/bg-support.png\");\n  background-position: center;\n  padding-top: 90px;\n  height: 500px;\n}\n\n.first_screen[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .first_screen[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 500;\n}\n\n.first_screen[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  max-width: 80%;\n  line-height: 1.8;\n  margin-top: 100px;\n}\n\n.first_screen[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\nsummary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  padding: 20px;\n}\n\nsummary[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nsummary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n\nsummary[_ngcontent-%COMP%]::before {\n  content: \"+\";\n  padding-right: 0.5em;\n}\n\ndetails[_ngcontent-%COMP%] {\n  cursor: default;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\ndetails[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\ndetails[open][_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 20px 20px 20px 20px;\n  background-color: #16b267;\n}\n\ndetails[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {\n  background-color: #16b267;\n  padding: 0 0 20px 0;\n}\n\ndetails[open][_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%]::before {\n  content: \"-\";\n}\n\n.popular-questions[_ngcontent-%COMP%] {\n  padding-bottom: 200px;\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUlFO0VBQ0UsYUFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBSko7O0FBU0E7RUFDRSxlQUFBO0VBQ0Esd0NBQUE7QUFORjs7QUFPRTtFQUNFLDJDQUFBO0FBTEo7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQU5GOztBQU9FO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU1JO0VBQ0UsWUFBQTtBQUpOOztBQVNBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQU5GIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJveGltYSBOb3ZhIFJnXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5maXJzdF9zY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ZpcnN0X3NjcmVlbi9iZy1zdXBwb3J0LnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbiAgLnRleHQsIC50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbnN1bW1hcnkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LWRldGFpbHMtbWFya2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJysnO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZGV0YWlscyB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSlcclxuICB9XHJcbn1cclxuXHJcbmRldGFpbHNbb3Blbl0ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2YjI2NztcclxuICAmPnN1bW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZiMjY3O1xyXG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICctJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wb3B1bGFyLXF1ZXN0aW9ucyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support',
                templateUrl: './support.component.html',
                styleUrls: ['./support.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-support-support-module.js.map