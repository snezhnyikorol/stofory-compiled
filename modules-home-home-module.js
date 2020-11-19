(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "0Pcf":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/product */ "yHTb");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_ad_banner_ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/ad-banner/ad-banner/ad-banner.component */ "jX9x");
/* harmony import */ var _ui_product_item_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/product-item/product-item/product-item.component */ "2bCQ");







function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r8);
} }
function HomeComponent_div_20_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 24);
} if (rf & 2) {
    const index_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r10.products[index_r11]);
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_20_app_product_item_1_Template, 1, 1, "app-product-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.range(ctx_r2.popular.width, row_r9 * ctx_r2.popular.width));
} }
function HomeComponent_div_22_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 24);
} if (rf & 2) {
    const index_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r13.products[index_r14]);
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_22_app_product_item_1_Template, 1, 1, "app-product-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.range(ctx_r3.popular.width, row_r12 * ctx_r3.popular.width));
} }
function HomeComponent_div_23_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 24);
} if (rf & 2) {
    const index_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r15.products[index_r16]);
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_23_app_product_item_1_Template, 1, 1, "app-product-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.range(ctx_r4.products.length - ctx_r4.floor(ctx_r4.products.length / ctx_r4.popular.width) * ctx_r4.popular.width, ctx_r4.floor(ctx_r4.products.length / ctx_r4.popular.width) * ctx_r4.popular.width));
} }
function HomeComponent_div_48_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 24);
} if (rf & 2) {
    const index_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r18.products[index_r19]);
} }
function HomeComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_48_app_product_item_1_Template, 1, 1, "app-product-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.range(ctx_r5.hits.width, row_r17 * ctx_r5.hits.width));
} }
function HomeComponent_div_50_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 24);
} if (rf & 2) {
    const index_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r21.products[index_r22]);
} }
function HomeComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_50_app_product_item_1_Template, 1, 1, "app-product-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.range(ctx_r6.hits.width, row_r20 * ctx_r6.hits.width));
} }
function HomeComponent_div_51_app_product_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-item", 24);
} if (rf & 2) {
    const index_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r23.products[index_r24]);
} }
function HomeComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_51_app_product_item_1_Template, 1, 1, "app-product-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.range(ctx_r7.products.length - ctx_r7.floor(ctx_r7.products.length / ctx_r7.hits.width) * ctx_r7.hits.width, ctx_r7.floor(ctx_r7.products.length / ctx_r7.hits.width) * ctx_r7.hits.width));
} }
const _c0 = function () { return { display: "none" }; };
const _c1 = function () { return {}; };
class HomeComponent {
    constructor() {
        this.popular = {
            width: 4,
            height: 4,
            open: false,
        };
        this.hits = {
            width: 5,
            height: 1,
            open: false,
        };
        this.items = Array(5).fill(0);
        this.products = [];
        this.slideConfig = {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
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
    }
    ngOnInit() {
        for (let i = 0; i < 50; i++) {
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
    range(n, startFrom) {
        return [...Array(n).keys()].map(i => i + startFrom);
    }
    floor(n) {
        return Math.floor(n);
    }
    openPopular(event) {
        event.preventDefault();
        this.popular.open = true;
    }
    openHits(event) {
        event.preventDefault();
        this.hits.open = true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 55, vars: 22, consts: [[1, "first_screen"], [1, "container"], [1, "carousel", 3, "config"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], [2, "margin-top", "44px", "display", "block", 3, "adNumber"], [1, "popular"], [1, "header"], [1, "filter"], ["href", "", 1, "btn", "active"], ["href", "", 1, "btn"], [1, "dropdown"], [1, "body"], [1, "visible"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "hidden"], ["class", "row", 4, "ngIf"], [1, "more"], ["href", "#", 3, "click"], [2, "margin-top", "95px", "display", "block", 3, "adNumber"], [1, "hits"], [1, "header", "row"], [1, "title"], ["ngxSlickItem", "", 1, "slide"], ["view", "Card", "orientation", "Vertical", 3, "product"], [1, "row"], ["view", "Card", "orientation", "Vertical", 3, "product", 4, "ngFor", "ngForOf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-slick-carousel", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-ad-banner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041D\u043E\u0432\u043E\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0414\u0440\u0443\u0433\u043E\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_25_listener($event) { return ctx.openPopular($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-ad-banner", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0425\u0438\u0442\u044B \u041F\u0440\u043E\u0434\u0430\u0436 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041A\u043B\u044E\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0418\u0433\u0440\u043E\u0432\u044B\u0435 \u0432\u0435\u0449\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Microsoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041F\u0440\u043E\u0447\u0435\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_div_48_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HomeComponent_div_50_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HomeComponent_div_51_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_53_listener($event) { return ctx.openHits($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products.slice(0, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adNumber", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range(ctx.popular.height, 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.popular.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range(ctx.floor(ctx.products.length / ctx.popular.width) - ctx.popular.height, ctx.popular.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length - ctx.floor(ctx.products.length / ctx.popular.width) * ctx.popular.width > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.popular.open ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adNumber", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range(ctx.hits.height, 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.hits.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range(ctx.floor(ctx.products.length / ctx.hits.width) - ctx.hits.height, ctx.hits.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length - ctx.floor(ctx.products.length / ctx.hits.width) * ctx.hits.width > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hits.open ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
    } }, directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ui_ad_banner_ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_4__["AdBannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickItemDirective"], _ui_product_item_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductItemComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: \"Proxima Nova Rg\", sans-serif;\n}\n\n.first_screen[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/first_screen/bg.png\");\n  background-position: center;\n  padding-top: 90px;\n  height: 761px;\n}\n\n.popular[_ngcontent-%COMP%] {\n  margin-top: 45px;\n}\n\n.popular[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 351px;\n  margin: 0;\n  margin-left: -8px;\n  margin-right: -8px;\n  justify-content: space-between;\n}\n\n.popular[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child {\n  justify-content: flex-start;\n}\n\n.popular[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 5s ease-out;\n}\n\n.popular[_ngcontent-%COMP%]   .hidden.open[_ngcontent-%COMP%] {\n  max-height: 20000px;\n}\n\n.popular[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n  justify-content: space-between;\n}\n\n.popular[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #193161;\n  font-size: 12px;\n  padding: 15px 38px;\n  color: #ffffff;\n}\n\n.popular[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 15px 38px;\n}\n\n.hits[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.hits[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.hits[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 7px 10px;\n}\n\n.hits[_ngcontent-%COMP%]   .visible[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .hits[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 275px;\n  margin: 0;\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\n.hits[_ngcontent-%COMP%]   .visible[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child, .hits[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child {\n  justify-content: flex-start;\n}\n\n.hits[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 5s ease-out;\n}\n\n.hits[_ngcontent-%COMP%]   .hidden.open[_ngcontent-%COMP%] {\n  max-height: 20000px;\n}\n\napp-product-item[_ngcontent-%COMP%] {\n  max-width: 273px;\n  margin: 8px;\n}\n\n.more[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 20px;\n}\n\n.more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Proxima Nova Rg\", serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #11151b;\n  text-decoration: none;\n}\n\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #aeb7c8;\n  color: #ffffff;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.filter[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #16b267;\n}\n\n.filter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.slide[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.slide[_ngcontent-%COMP%]   app-product-item[_ngcontent-%COMP%] {\n  height: 350px;\n  transition: height 200ms ease-in-out;\n}\n\n.slide.slick-current[_ngcontent-%COMP%]    + .slide.slick-active[_ngcontent-%COMP%]   app-product-item[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUlBO0VBQ0UsMkRBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUVGLDhCQUFBO0FBREo7O0FBSUU7RUFDRSwyQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFISjs7QUFNRTtFQUNFLG1CQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFVSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVJOOztBQWFBO0VBQ0UsaUJBQUE7QUFWRjs7QUFXRTtFQUNFLDhCQUFBO0FBVEo7O0FBYUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFYTjs7QUFnQkk7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFkUjs7QUFnQk07RUFDRSwyQkFBQTtBQWRSOztBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBbEJKOztBQXFCRTtFQUNFLG1CQUFBO0FBbkJKOztBQXVCQTtFQUVFLGdCQUFBO0VBQ0EsV0FqR29CO0FBNEV0Qjs7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBckJGOztBQXNCRTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBckJGOztBQXNCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBcEJKOztBQXVCRTtFQUNFLHlCQUFBO0FBckJKOztBQXdCRTtFQUNFLGdCQUFBO0FBdEJKOztBQTBCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0FBdkJGOztBQTBCQTtFQUNFLGFBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsZ0JBQUE7QUF2QkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmb250LWZhbWlseTogXCJQcm94aW1hIE5vdmEgUmdcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuJHByb2R1Y3QtaXRlbS1tYXJnaW46IDhweDtcclxuXHJcbi5maXJzdF9zY3JlZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ZpcnN0X3NjcmVlbi9iZy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIGhlaWdodDogNzYxcHg7XHJcbn1cclxuXHJcbi5wb3B1bGFyIHtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIC5yb3cge1xyXG4gICAgaGVpZ2h0OiAzNTFweDtcclxuICAgIG1hcmdpbjogMCB7XHJcbiAgICAgIGxlZnQ6IC0kcHJvZHVjdC1pdGVtLW1hcmdpbjtcclxuICAgICAgcmlnaHQ6IC0kcHJvZHVjdC1pdGVtLW1hcmdpbjtcclxuICAgIH1cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuaGlkZGVuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA1cyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5oaWRkZW4ub3BlbiB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTMxNjE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDM4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5maWx0ZXIge1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTVweCAzOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpdHMge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIC5oZWFkZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlciB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC52aXNpYmxlLCAuaGlkZGVuIHtcclxuICAgIC5yb3cge1xyXG4gICAgICBoZWlnaHQ6IDI3NXB4O1xyXG4gICAgICBtYXJnaW46IDAge1xyXG4gICAgICAgIGxlZnQ6IC0kcHJvZHVjdC1pdGVtLW1hcmdpbjtcclxuICAgICAgICByaWdodDogLSRwcm9kdWN0LWl0ZW0tbWFyZ2luO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmhpZGRlbiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgNXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuaGlkZGVuLm9wZW4ge1xyXG4gICAgbWF4LWhlaWdodDogMjAwMDBweDtcclxuICB9XHJcbn1cclxuXHJcbmFwcC1wcm9kdWN0LWl0ZW0ge1xyXG4gIC8vbWF4LWhlaWdodDogMzUxcHg7XHJcbiAgbWF4LXdpZHRoOiAyNzNweDtcclxuICBtYXJnaW46ICRwcm9kdWN0LWl0ZW0tbWFyZ2luO1xyXG59XHJcblxyXG4ubW9yZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWEgTm92YSBSZycsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMTExNTFiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlYjdjODtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZiMjY3O1xyXG4gIH1cclxuXHJcbiAgLmJ0biArIC5idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGUgYXBwLXByb2R1Y3QtaXRlbSB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zbGlkZS5zbGljay1jdXJyZW50ICsgLnNsaWRlLnNsaWNrLWFjdGl2ZSBhcHAtcHJvZHVjdC1pdGVtIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3Clk":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0Pcf");





const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KwVW":
/*!**************************************************!*\
  !*** ./src/app/ui/ad-banner/ad-banner.module.ts ***!
  \**************************************************/
/*! exports provided: AdBannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdBannerModule", function() { return AdBannerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ad-banner/ad-banner.component */ "jX9x");




class AdBannerModule {
}
AdBannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdBannerModule });
AdBannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdBannerModule_Factory(t) { return new (t || AdBannerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdBannerModule, { declarations: [_ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_2__["AdBannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_2__["AdBannerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdBannerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_2__["AdBannerComponent"]],
                exports: [
                    _ad_banner_ad_banner_component__WEBPACK_IMPORTED_MODULE_2__["AdBannerComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "a31r":
/*!********************************************************!*\
  !*** ./src/app/ui/carousel/carousel-item.directive.ts ***!
  \********************************************************/
/*! exports provided: CarouselItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function() { return CarouselItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ "yGaK");



class CarouselItemDirective {
    constructor(el, carousel) {
        this.el = el;
        this.carousel = carousel;
        this.className = 'carousel-item';
    }
    ngOnInit() {
        this.carousel.addSlide(this);
    }
}
CarouselItemDirective.ɵfac = function CarouselItemDirective_Factory(t) { return new (t || CarouselItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], 1)); };
CarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CarouselItemDirective, selectors: [["", "appCarouselItem", ""]], hostVars: 2, hostBindings: function CarouselItemDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCarouselItem]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }] }]; }, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "iydT":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "3Clk");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "0Pcf");
/* harmony import */ var _ui_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/carousel/carousel.module */ "je4a");
/* harmony import */ var _ui_ad_banner_ad_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ad-banner/ad-banner.module */ "KwVW");
/* harmony import */ var _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/product-item/product-item.module */ "UrEr");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _ui_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            _ui_ad_banner_ad_banner_module__WEBPACK_IMPORTED_MODULE_5__["AdBannerModule"],
            _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_6__["ProductItemModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _ui_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
        _ui_ad_banner_ad_banner_module__WEBPACK_IMPORTED_MODULE_5__["AdBannerModule"],
        _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_6__["ProductItemModule"],
        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _ui_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                    _ui_ad_banner_ad_banner_module__WEBPACK_IMPORTED_MODULE_5__["AdBannerModule"],
                    _ui_product_item_product_item_module__WEBPACK_IMPORTED_MODULE_6__["ProductItemModule"],
                    ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jX9x":
/*!***************************************************************!*\
  !*** ./src/app/ui/ad-banner/ad-banner/ad-banner.component.ts ***!
  \***************************************************************/
/*! exports provided: AdBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdBannerComponent", function() { return AdBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AdBannerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.adNumber);
} }
function AdBannerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.adNumber);
} }
class AdBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdBannerComponent.ɵfac = function AdBannerComponent_Factory(t) { return new (t || AdBannerComponent)(); };
AdBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdBannerComponent, selectors: [["app-ad-banner"]], inputs: { adNumber: "adNumber" }, decls: 3, vars: 2, consts: [[1, "container"], [4, "ngIf"], ["src", "/assets/images/ads/ad1.png", 3, "alt"], ["src", "/assets/images/ads/ad2.png", 3, "alt"]], template: function AdBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdBannerComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdBannerComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adNumber == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adNumber == 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYWQtYmFubmVyL2FkLWJhbm5lci9hZC1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91aS9hZC1iYW5uZXIvYWQtYmFubmVyL2FkLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ad-banner',
                templateUrl: './ad-banner.component.html',
                styleUrls: ['./ad-banner.component.scss']
            }]
    }], function () { return []; }, { adNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "je4a":
/*!************************************************!*\
  !*** ./src/app/ui/carousel/carousel.module.ts ***!
  \************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/carousel.component */ "yGaK");
/* harmony import */ var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-item.directive */ "a31r");





class CarouselModule {
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"],
        _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"],
                    _carousel_item_directive__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "yGaK":
/*!************************************************************!*\
  !*** ./src/app/ui/carousel/carousel/carousel.component.ts ***!
  \************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["wrapper"];
const _c1 = ["carousel"];
const _c2 = ["*"];
class CarouselComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.slides = [];
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.slides.forEach((slide, index, array) => {
            const wrapperWidth = this.wrapper.nativeElement.offsetWidth;
            this.renderer.addClass(slide.el.nativeElement, '1');
            if (index === Math.floor(array.length / 2)) {
                this.renderer.addClass(slide.el.nativeElement, 'carousel-center');
            }
            if (slide.el.nativeElement.offsetLeft >= 0 && slide.el.nativeElement.offsetLeft <= wrapperWidth) {
                this.renderer.addClass(slide.el.nativeElement, 'carousel-active');
            }
        });
    }
    addSlide(carouselItem) {
        this.slides.push(carouselItem);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, ngContentSelectors: _c2, decls: 5, vars: 0, consts: [[1, "carousel-wrapper"], ["wrapper", ""], [1, "carousel"], ["carousel", ""]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  width: 6000px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWkvY2Fyb3VzZWwvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcm91c2VsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA2MDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcblxyXG59XHJcblxyXG4uY2Fyb3VzZWwtYWN0aXZlIHtcclxuXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jZW50ZXIge1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper']
        }], carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-home-home-module.js.map