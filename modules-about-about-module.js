(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-about-about-module"],{

/***/ "Afwt":
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "FtY6");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "w15T");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/product-item/product-item.module */ "UrEr");







class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
            _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_5__["ProductItemModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
        _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_5__["ProductItemModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                    _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_5__["ProductItemModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FtY6":
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "w15T");





const routes = [{ path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w15T":
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/product */ "yHTb");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_product_item_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/product-item/product-item/product-item.component */ "2bCQ");






function AboutComponent_div_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-item", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r3);
} }
class AboutComponent {
    constructor() {
        this.products = [];
        this.slideConfig = {
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            prevArrow: `<svg class="prevBtn" viewBox='0 0 512 512'>
        <use href="../../../assets/icons/home/chevron-back-outline.svg#el"
               x="0"
               y="0" />
</svg>`,
            nextArrow: `<svg class="nextBtn" viewBox='0 0 512 512'>
        <use href="../../../assets/icons/home/chevron-forward-outline.svg#el2"
               x="0"
               y="0" />
               </svg>`,
        };
        this.howConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            arrows: false,
        };
    }
    ngOnInit() {
        for (let i = 0; i < 20; i++) {
            this.products.push(new _models_product__WEBPACK_IMPORTED_MODULE_1__["Product"]({
                category: 'Ключи',
                name: 'Bulletstorm: Full Clip Edition ' + i,
                image: '/src/assets/dev/product.png',
                discount: i % 3 === 2 ? 30 : 0,
                price: 2500,
                isNew: i % 3 === 0,
                isHit: i % 3 === 1
            }));
        }
    }
    removeSlider(event, slider) {
        event.preventDefault();
        event.currentTarget.classList.add('hide');
        slider.unslick();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 318, vars: 3, consts: [[1, "first-screen"], [1, "container"], [1, "left"], [1, "title"], [1, "text"], ["href", "", 1, "button"], [1, "right"], [1, "video"], ["src", "../../../assets/images/about/video.png", "alt", ""], [1, "why"], [1, "wrapper"], [1, "item"], ["src", "../../../assets/icons/about/why/sale.png", "alt", ""], ["href", ""], [1, "something-else"], [1, "subtitle"], ["src", "../../../assets/icons/about/mouse.png", "alt", ""], [1, "promo"], [1, "bg-left"], [1, "bg-right"], ["src", "../../../assets/images/about/prize.png", "alt", ""], [1, "variety"], [1, "inner"], ["src", "../../../assets/icons/about/secure/bitcoin.png", "alt", ""], [1, "how"], [1, "how-carousel", 3, "config"], ["howModal", "slick-carousel"], ["ngxSlickItem", "", 1, "slide"], [1, "slide-content"], [1, "number"], [1, "secure"], ["src", "../../../assets/icons/about/secure/person.png", "alt", "", 1, "person"], [1, "reviews"], [1, "trends"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["href", "", 1, "button", 3, "click"], [1, "cooperate"], [1, "wrapper", "row"], [1, "numbers"], [1, "blog"], [1, "join"], ["view", "Card", "orientation", "Vertical", 3, "product"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043C\u0441\u044F?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041D\u0430\u0448 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u041D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438\u043B\u0438 \u0436\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0439 \u0438\u0433\u0440\u044B. \u041C\u044B \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u043C \u0441\u0430\u043C\u044B\u0435 \u043D\u0438\u0437\u043A\u0438\u0435 \u0446\u0435\u043D\u044B \u0441 \u0431\u044B\u0441\u0442\u0440\u043E\u0439 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u0432 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u043C \u0432\u0438\u0434\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0432 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \uD83D\uDE09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u043E\u0447\u0435\u043C\u0443 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043D\u0430\u0441?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435\n24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443\n\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435\n24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443\n\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435\n24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443\n\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435\n24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443\n\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435\n24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443\n\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u041D\u0430\u0448\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435\n24 \u0447\u0430\u0441\u0430 \u0438 7 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E \u0438 \u0441 \u0440\u0430\u0434\u043E\u0441\u0442\u044C\u044E\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u0442 \u0432\u0430\u043C \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443\n\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u041A\u0440\u0443\u0442\u0438 \u0434\u0430\u043B\u044C\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u044B \u0438 \u0440\u0430\u0437\u044B\u0433\u0440\u044B\u0448\u0438!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u0423\u0447\u0430\u0432\u0441\u0442\u0432\u0443\u0439 \u0432 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0430\u0445, \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430\u0445 \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u0438\u0433\u0440\u0443 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C! \u041C\u0438\u043B\u043B\u0438\u043E\u043D \u043F\u0440\u0438\u0437\u043E\u0432 \u0443\u0436\u0435 \u0436\u0434\u0443\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u044F :-) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u0420\u0430\u0437\u0434\u0430\u0435\u043C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0432\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0441\u044A\u044D\u043A\u043E\u043D\u043E\u043C\u0442\u0435 \u0434\u043E 15%! \u0410 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0434\u044F \u0434\u0440\u0443\u0433\u0430 \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u043F\u0435\u0446\u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u043E\u043C \u043D\u0430 30% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u0411\u043E\u043B\u0435\u0435 5000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u0442\u043D\u043E\u0432\n\u0441 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u041A\u0440\u0443\u0442\u0438 \u0434\u0430\u043B\u044C\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " \u041C\u044B \u0445\u043E\u0442\u0438\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u0430\u0436\u0434\u0443\u044E \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0438 \u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0439 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "ngx-slick-carousel", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\u041C\u044B \u0434\u043E\u0440\u043E\u0436\u0438\u043C \u0441\u0432\u043E\u0435\u0439 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0435\u0439, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0431\u043E\u0440 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430\u043C\u0438. \u0412\u0435\u0441\u044C \u0442\u043E\u0432\u0430\u0440 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0443 \u043D\u0430\u0441, \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0441\u0442\u0440\u043E\u0433\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0434\u0430\u0436\u0435\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442? \u0417\u0430\u043C\u0435\u043D\u0438\u043C! \u041C\u044B \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u043C \u043D\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430. \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\u041C\u044B \u0434\u043E\u0440\u043E\u0436\u0438\u043C \u0441\u0432\u043E\u0435\u0439 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0435\u0439, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0431\u043E\u0440 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430\u043C\u0438. \u0412\u0435\u0441\u044C \u0442\u043E\u0432\u0430\u0440 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0443 \u043D\u0430\u0441, \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0441\u0442\u0440\u043E\u0433\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0434\u0430\u0436\u0435\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442? \u0417\u0430\u043C\u0435\u043D\u0438\u043C! \u041C\u044B \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u043C \u043D\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430. \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\u041C\u044B \u0434\u043E\u0440\u043E\u0436\u0438\u043C \u0441\u0432\u043E\u0435\u0439 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u0435\u0439, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0431\u043E\u0440 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430\u043C\u0438. \u0412\u0435\u0441\u044C \u0442\u043E\u0432\u0430\u0440 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0443 \u043D\u0430\u0441, \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0441\u0442\u0440\u043E\u0433\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0434\u0430\u0436\u0435\u0439.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442? \u0417\u0430\u043C\u0435\u043D\u0438\u043C! \u041C\u044B \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u043C \u043D\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430. \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "\u041F\u043E\u043B\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u0434\u0430\u043D\u043D\u044B\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u0412 \u043D\u0430\u0448\u0435\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432\u0438\u0434 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0442\u043E\u0432\u0430\u0440. \u0412\u0441\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u0442\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\u0418 \u0435\u0449\u0435 \u043A\u043E\u0435-\u0447\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u041C\u043E\u0442\u0430\u0439 \u0432\u043D\u0438\u0437");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u041C\u044B \u0441\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u0442\u0440\u0435\u043D\u0434\u0430\u043C\u0438 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u043C \u0412\u0430\u043C \u0441\u0430\u043C\u0443\u044E \u0441\u0432\u0435\u0436\u0443\u044E \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "\u041E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u043D\u043E\u0432\u0438\u043D\u043E\u043A \u0438 \u0445\u0438\u0442\u043E\u0432 \u0443\u0436\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "ngx-slick-carousel", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](280, AboutComponent_div_280_Template, 2, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_281_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](279); return ctx.removeSlider($event, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u044C \u0447\u0430\u0441\u0442\u044C\u044E \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u041D\u0430\u0447\u043D\u0438 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441! \u0422\u043E\u0432\u0430\u0440\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445 \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445, \u0431\u043B\u043E\u0433\u0430\u0445, \u0432\u0438\u0434\u0435\u043E\u0445\u043E\u0441\u0442\u0438\u043D\u0433\u0430\u0445 \u0438 \u0441\u0442\u0440\u0438\u043C\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "\u0417\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "< 20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\u043D\u0430 \u0432\u0430\u0448\u0438 \u043B\u0438\u0447\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "5% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\u043A\u044D\u0448\u0431\u044D\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "500 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0435\u043D\u0438\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "section", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0412\u044B \u0445\u043E\u0442\u0435\u0442\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0442\u044C \u0441 \u043D\u0430\u043C\u0438?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "\u041D\u0435 \u0442\u0435\u0440\u044F\u0439 \u0432\u0440\u0435\u043C\u044F! \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043D\u0430\u043C, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u043D\u0430 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 :-)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.howConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products.slice(0, 10));
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ui_product_item_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: \"Proxima Nova Rg\", sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n  color: #ffffff;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  color: #ffffff;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  font-size: 16px;\n  font-weight: 300;\n  text-decoration: none;\n  color: #ffffff;\n  padding: 15px 35px;\n  border: solid 1px #ffffff;\n}\n\n.first-screen[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/first_screen/bg-about.png\");\n  background-position: center;\n  padding-top: 163px;\n  padding-bottom: 100px;\n}\n\n.first-screen[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.first-screen[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-right: 90px;\n  width: 45%;\n  color: #ffffff;\n}\n\n.first-screen[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 40px;\n  font-weight: 600;\n  margin-bottom: 37px;\n}\n\n.first-screen[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  margin-bottom: 43px;\n  line-height: 1.56;\n}\n\n.first-screen[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #3faae7;\n  border-color: #3faae7;\n}\n\n.first-screen[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n.cooperate[_ngcontent-%COMP%] {\n  padding: 73px 0;\n  background-image: linear-gradient(-141deg, #214cba 30%, #bf13de 70%);\n}\n\n.cooperate[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 34px auto 0;\n}\n\n.cooperate[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  margin: 80px 0 70px;\n  justify-content: space-around;\n}\n\n.cooperate[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.cooperate[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.cooperate[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 600;\n}\n\n.cooperate[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .numbers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.cooperate[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  background-color: #ffa200;\n  border-color: #ffa200;\n}\n\n.join[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/first_screen/bg-about-join.png\");\n  background-position: center;\n  padding: 73px 0;\n}\n\n.join[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 27px 0;\n}\n\n.join[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  background-color: #3faae7;\n  border-color: #3faae7;\n}\n\n.trends[_ngcontent-%COMP%] {\n  padding: 80px 0 90px;\n  background-color: #1f283f;\n}\n\n.trends[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 33px 0 50px;\n}\n\n.trends[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 50px auto 0;\n}\n\n.trends[_ngcontent-%COMP%]   .button.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.trends[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.trends[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   app-product-item[_ngcontent-%COMP%] {\n  height: 225px;\n  width: 180px;\n}\n\n.trends[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]:not(.slick-slider) {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.trends[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]:not(.slick-slider)   .slide[_ngcontent-%COMP%] {\n  height: unset;\n  width: 190px;\n  padding: 10px 10px;\n}\n\n.secure[_ngcontent-%COMP%] {\n  background-color: #192034;\n  padding: 67px 0;\n  text-align: center;\n}\n\n.secure[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.secure[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 28px 0 34px;\n}\n\n.secure[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  max-width: 808px;\n  margin: 0 auto 74px;\n  line-height: 1.44;\n}\n\n.secure[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.secure[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  padding: 45px 0;\n  filter: grayscale(1);\n  transition: filter 200ms;\n}\n\n.secure[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  filter: grayscale(0);\n}\n\n.secure[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.secure[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.secure[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  line-height: 1;\n  max-width: unset;\n  margin: 10px 0 30px;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.variety[_ngcontent-%COMP%] {\n  background-color: #192034;\n  padding: 100px 0 74px;\n}\n\n.variety[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  max-width: 510px;\n  margin: 0 auto 75px;\n}\n\n.variety[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.variety[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.variety[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  margin: 8px;\n  text-align: center;\n  padding: 45px 27px;\n  border-radius: 5px;\n  border: solid 1px rgba(255, 255, 255, 0.1);\n  color: #ffffff;\n  transition: all 250ms;\n}\n\n.variety[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 30px 0 25px;\n}\n\n.variety[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3faae7;\n}\n\n.variety[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]:hover {\n  background-color: #1f283f;\n  border-color: #1f283f;\n  margin-top: -8px;\n  padding-bottom: 61px;\n}\n\n.variety[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  text-align: center;\n}\n\n.variety[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: unset;\n}\n\n.variety[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 10px 0 30px;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.how[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/about/how-bg.png\");\n  background-position: center;\n  padding: 80px 0 100px;\n}\n\n.how[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0 auto 77px;\n  font-weight: 300;\n  max-width: 500px;\n  line-height: 1.56;\n}\n\n.how[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.how[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.how[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 70px;\n  font-weight: 600;\n  color: #3faae7;\n  margin-top: -7px;\n  margin-right: 30px;\n}\n\n.how[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  line-height: 1.44;\n  color: #ffffff;\n}\n\n.how[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%]    + .slide-content[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n\n.why[_ngcontent-%COMP%] {\n  padding: 65px 0 55px;\n  background-color: #1f283f;\n}\n\n.why[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.why[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  width: calc(100% / 3);\n  padding: 0 40px;\n  margin-top: 70px;\n}\n\n.why[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n\n.why[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.why[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #7a7f87;\n  text-decoration: none;\n}\n\n.why[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #16b267;\n}\n\n.why[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%] {\n  margin-top: 90px;\n  text-align: center;\n}\n\n.why[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.why[_ngcontent-%COMP%]   .something-else[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 10px 0 30px;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.promo[_ngcontent-%COMP%] {\n  padding: 57px 0 78px;\n  position: relative;\n}\n\n.promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n  display: flex;\n}\n\n.promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\n\n.promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n\n.promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 20px auto 35px;\n  color: #ffffff;\n}\n\n.promo[_ngcontent-%COMP%]   .bg-left[_ngcontent-%COMP%], .promo[_ngcontent-%COMP%]   .bg-right[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  top: 0;\n}\n\n.promo[_ngcontent-%COMP%]   .bg-left[_ngcontent-%COMP%] {\n  z-index: 0;\n  left: 0;\n  background-image: linear-gradient(-135deg, #e25f8b, #f76c55);\n}\n\n.promo[_ngcontent-%COMP%]   .bg-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  right: 0;\n  background-image: linear-gradient(-135deg, #214cba, #bf13de);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpRUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtBQUdKOztBQUZJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBSU47O0FBSE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS1I7O0FBSE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBS1I7O0FBSE07RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBS1I7O0FBRkk7RUFDRSxVQUFBO0FBSU47O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esb0VBQUE7QUFFRjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7QUFHSjs7QUFGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSU47O0FBRkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFITTtFQUNFLGVBQUE7QUFLUjs7QUFERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUNBO0VBQ0Usc0VBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFERTtFQUNFLGNBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtBQUVGOztBQURFO0VBQ0UsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUZJO0VBQ0UsYUFBQTtBQUlOOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU1JO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpOOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFRRTtFQUNFLG1CQUFBO0FBTko7O0FBUUU7RUFDRSxtQkFBQTtBQU5KOztBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTko7O0FBUUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQU5KOztBQU9JO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBTE47O0FBTU07RUFDRSxvQkFBQTtBQUpSOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVFJO0VBQ0UsU0FBQTtBQU5OOztBQVFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFOTjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFSRjs7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBUEo7O0FBUUk7RUFDRSxVQUFBO0FBTk47O0FBT007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBUUEscUJBQUE7QUFaUjs7QUFLUTtFQUNFLG1CQUFBO0FBSFY7O0FBS1E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFIVjs7QUFNUTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSlY7O0FBVUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBU0k7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFQTjs7QUFTSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUE47O0FBWUE7RUFDRSx3REFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFURjs7QUFVRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUko7O0FBVUU7RUFDRSxhQUFBO0FBUko7O0FBU0k7RUFDRSxhQUFBO0FBUE47O0FBUU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVFNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFOUjs7QUFRTTtFQUNFLGlCQUFBO0FBTlI7O0FBWUE7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0FBVEY7O0FBVUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVNJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQTjs7QUFRTTtFQUNFLGNBQUE7QUFOUjs7QUFRTTtFQUNFLG1CQUFBO0FBTlI7O0FBUU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFOUjs7QUFPUTtFQUNFLGNBQUE7QUFMVjs7QUFXRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFVSTtFQUNFLFNBQUE7QUFSTjs7QUFVSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUk47O0FBYUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBVkY7O0FBV0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBVEo7O0FBVUk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFSTjs7QUFTTTtFQUNFLGdCQUFBO0FBUFI7O0FBU007RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVBSOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUFUSjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxPQUFBO0VBQ0EsNERBQUE7QUFWSjs7QUFhRTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsNERBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJveGltYSBOb3ZhIFJnXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTVweCAzNXB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5maXJzdC1zY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ZpcnN0X3NjcmVlbi9iZy1hYm91dC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNjNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmxlZnQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0M3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU2O1xyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZmFhZTc7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2ZhYWU3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvb3BlcmF0ZSB7XHJcbiAgcGFkZGluZzogNzNweCAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTQxZGVnLCAjMjE0Y2JhIDMwJSwgI2JmMTNkZSA3MCUpO1xyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gICAgbWFyZ2luOiAzNHB4IGF1dG8gMDtcclxuICB9XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luOiA4MHB4IDAgNzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLm51bWJlcnMge1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMjAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZhMjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmpvaW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ZpcnN0X3NjcmVlbi9iZy1hYm91dC1qb2luLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNzNweCAwO1xyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDI3cHggMDtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmYWFlNztcclxuICAgIGJvcmRlci1jb2xvcjogIzNmYWFlNztcclxuICB9XHJcbn1cclxuXHJcbi50cmVuZHMge1xyXG4gIHBhZGRpbmc6IDgwcHggMCA5MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjI4M2Y7XHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogMzNweCAwIDUwcHg7XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byAwO1xyXG4gICAgJi5oaWRlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlIGFwcC1wcm9kdWN0LWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAyMjVweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcblxyXG4gIC8vLmNhcm91c2VsIHtcclxuICAvLyAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzO1xyXG4gIC8vfTtcclxuXHJcbiAgLmNhcm91c2VsOm5vdCguc2xpY2stc2xpZGVyKSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IDtcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICAgIHdpZHRoOiAxOTBweDsgLy9jYWxjdWxhdGVcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zZWN1cmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTIwMzQ7XHJcbiAgcGFkZGluZzogNjdweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAucGVyc29uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDI4cHggMCAzNHB4O1xyXG4gIH1cclxuICAuc3VidGl0bGUge1xyXG4gICAgbWF4LXdpZHRoOiA4MDhweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDc0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40NDtcclxuICB9XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5pdGVtIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zb21ldGhpbmctZWxzZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52YXJpZXR5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyMDM0O1xyXG4gIHBhZGRpbmc6IDEwMHB4IDAgNzRweDtcclxuICAudGl0bGUge1xyXG4gICAgbWF4LXdpZHRoOiA1MTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDc1cHg7XHJcbiAgfVxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAuaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIC5pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMjdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwIDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjM2ZhYWU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyODNmO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMWYyODNmO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2MXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNvbWV0aGluZy1lbHNlIHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBtYXJnaW46IDEwcHggMCAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaG93IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYm91dC9ob3ctYmcucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4MHB4IDAgMTAwcHg7XHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDc3cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU2O1xyXG4gIH1cclxuICAuc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5zbGlkZS1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMzZmFhZTc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40NDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAmKy5zbGlkZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndoeSB7XHJcbiAgcGFkZGluZzogNjVweCAwIDU1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjgzZjtcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XHJcbiAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICM3YTdmODc7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMxNmIyNjc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc29tZXRoaW5nLWVsc2Uge1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9tbyB7XHJcbiAgcGFkZGluZzogNTdweCAwIDc4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAubGVmdCwgLnJpZ2h0IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIG1heC13aWR0aDogNDQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMzVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYmctbGVmdCwgLmJnLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuYmctbGVmdCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCAjZTI1ZjhiLCAjZjc2YzU1KTtcclxuICB9XHJcblxyXG4gIC5iZy1yaWdodCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgIzIxNGNiYSwgI2JmMTNkZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-about-about-module.js.map