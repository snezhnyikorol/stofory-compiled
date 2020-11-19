(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n/* This stylesheet generated by Transfonter (https://transfonter.org) on June 21, 2017 9:51 AM */\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-LightIt.eot');\n\tsrc: local('Proxima Nova Condensed Light Italic'), local('ProximaNovaCond-LightIt'),\n\t\turl('ProximaNovaCond-LightIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-LightIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-LightIt.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-LightIt.eot');\n\tsrc: local('Proxima Nova Light Italic'), local('ProximaNova-LightIt'),\n\t\turl('ProximaNova-LightIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-LightIt.woff') format('woff'),\n\t\turl('ProximaNova-LightIt.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-Regular.eot');\n\tsrc: local('Proxima Nova Condensed Regular'), local('ProximaNovaCond-Regular'),\n\t\turl('ProximaNovaCond-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Regular.woff') format('woff'),\n\t\turl('ProximaNovaCond-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNova-Extrabld.eot');\n\tsrc: local('Proxima Nova Extrabold'), local('ProximaNova-Extrabld'),\n\t\turl('ProximaNova-Extrabld.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Extrabld.woff') format('woff'),\n\t\turl('ProximaNova-Extrabld.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Bl';\n\tsrc: url('ProximaNovaCond-Black.eot');\n\tsrc: local('Proxima Nova Condensed Black'), local('ProximaNovaCond-Black'),\n\t\turl('ProximaNovaCond-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Black.woff') format('woff'),\n\t\turl('ProximaNovaCond-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-ExtrabldIt.eot');\n\tsrc: local('Proxima Nova Condensed Extrabold Italic'), local('ProximaNovaCond-ExtrabldIt'),\n\t\turl('ProximaNovaCond-ExtrabldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-ExtrabldIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-ExtrabldIt.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-Regular.eot');\n\tsrc: local('Proxima Nova Regular'), local('ProximaNova-Regular'),\n\t\turl('ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Regular.woff') format('woff'),\n\t\turl('ProximaNova-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-Semibold.eot');\n\tsrc: local('Proxima Nova Semibold'), local('ProximaNova-Semibold'),\n\t\turl('ProximaNova-Semibold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Semibold.woff') format('woff'),\n\t\turl('ProximaNova-Semibold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-Thin.eot');\n\tsrc: local('Proxima Nova Extra Condensed Thin'), local('ProximaNovaExCn-Thin'),\n\t\turl('ProximaNovaExCn-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Thin.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-Semibold.eot');\n\tsrc: local('Proxima Nova Condensed Semibold'), local('ProximaNovaCond-Semibold'),\n\t\turl('ProximaNovaCond-Semibold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Semibold.woff') format('woff'),\n\t\turl('ProximaNovaCond-Semibold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-SemiboldIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Semibold Italic'), local('ProximaNovaExCn-SemiboldIt'),\n\t\turl('ProximaNovaExCn-SemiboldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-SemiboldIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-SemiboldIt.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-Semibold.eot');\n\tsrc: local('Proxima Nova Extra Condensed Semibold'), local('ProximaNovaExCn-Semibold'),\n\t\turl('ProximaNovaExCn-Semibold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Semibold.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Semibold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNova-ThinIt.eot');\n\tsrc: local('Proxima Nova Thin Italic'), local('ProximaNova-ThinIt'),\n\t\turl('ProximaNova-ThinIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-ThinIt.woff') format('woff'),\n\t\turl('ProximaNova-ThinIt.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-Thin.eot');\n\tsrc: local('Proxima Nova Condensed Thin'), local('ProximaNovaCond-Thin'),\n\t\turl('ProximaNovaCond-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Thin.woff') format('woff'),\n\t\turl('ProximaNovaCond-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-RegularIt.eot');\n\tsrc: local('Proxima Nova Condensed Regular Italic'), local('ProximaNovaCond-RegularIt'),\n\t\turl('ProximaNovaCond-RegularIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-RegularIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-RegularIt.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-ThinIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Thin Italic'), local('ProximaNovaExCn-ThinIt'),\n\t\turl('ProximaNovaExCn-ThinIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-ThinIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-ThinIt.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-SemiboldIt.eot');\n\tsrc: local('Proxima Nova Semibold Italic'), local('ProximaNova-SemiboldIt'),\n\t\turl('ProximaNova-SemiboldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-SemiboldIt.woff') format('woff'),\n\t\turl('ProximaNova-SemiboldIt.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-RegularIt.eot');\n\tsrc: local('Proxima Nova Regular Italic'), local('ProximaNova-RegularIt'),\n\t\turl('ProximaNova-RegularIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-RegularIt.woff') format('woff'),\n\t\turl('ProximaNova-RegularIt.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-Extrabld.eot');\n\tsrc: local('Proxima Nova Condensed Extrabold'), local('ProximaNovaCond-Extrabld'),\n\t\turl('ProximaNovaCond-Extrabld.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Extrabld.woff') format('woff'),\n\t\turl('ProximaNovaCond-Extrabld.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-ExtrabldIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Extrabold Italic'), local('ProximaNovaExCn-ExtrabldIt'),\n\t\turl('ProximaNovaExCn-ExtrabldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-ExtrabldIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-ExtrabldIt.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Bl';\n\tsrc: url('ProximaNovaExCn-BlackIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Black Italic'), local('ProximaNovaExCn-BlackIt'),\n\t\turl('ProximaNovaExCn-BlackIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-BlackIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-BlackIt.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-LightIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Light Italic'), local('ProximaNovaExCn-LightIt'),\n\t\turl('ProximaNovaExCn-LightIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-LightIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-LightIt.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-ThinIt.eot');\n\tsrc: local('Proxima Nova Condensed Thin Italic'), local('ProximaNovaCond-ThinIt'),\n\t\turl('ProximaNovaCond-ThinIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-ThinIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-ThinIt.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-Light.eot');\n\tsrc: local('Proxima Nova Extra Condensed Light'), local('ProximaNovaExCn-Light'),\n\t\turl('ProximaNovaExCn-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Light.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-BoldIt.eot');\n\tsrc: local('Proxima Nova Condensed Bold Italic'), local('ProximaNovaCond-BoldIt'),\n\t\turl('ProximaNovaCond-BoldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-BoldIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-BoldIt.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-Extrabld.eot');\n\tsrc: local('Proxima Nova Extra Condensed Extrabold'), local('ProximaNovaExCn-Extrabld'),\n\t\turl('ProximaNovaExCn-Extrabld.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Extrabld.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Extrabld.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-BoldIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Bold Italic'), local('ProximaNovaExCn-BoldIt'),\n\t\turl('ProximaNovaExCn-BoldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-BoldIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-BoldIt.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Bl';\n\tsrc: url('ProximaNova-Black.eot');\n\tsrc: local('Proxima Nova Black'), local('ProximaNova-Black'),\n\t\turl('ProximaNova-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Black.woff') format('woff'),\n\t\turl('ProximaNova-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-Bold.eot');\n\tsrc: local('Proxima Nova Bold'), local('ProximaNova-Bold'),\n\t\turl('ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Bold.woff') format('woff'),\n\t\turl('ProximaNova-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-Bold.eot');\n\tsrc: local('Proxima Nova Extra Condensed Bold'), local('ProximaNovaExCn-Bold'),\n\t\turl('ProximaNovaExCn-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Bold.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNovaT-Thin.eot');\n\tsrc: local('Proxima Nova Thin'), local('ProximaNovaT-Thin'),\n\t\turl('ProximaNovaT-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaT-Thin.woff') format('woff'),\n\t\turl('ProximaNovaT-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-BoldIt.eot');\n\tsrc: local('Proxima Nova Bold Italic'), local('ProximaNova-BoldIt'),\n\t\turl('ProximaNova-BoldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-BoldIt.woff') format('woff'),\n\t\turl('ProximaNova-BoldIt.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-Bold.eot');\n\tsrc: local('Proxima Nova Condensed Bold'), local('ProximaNovaCond-Bold'),\n\t\turl('ProximaNovaCond-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Bold.woff') format('woff'),\n\t\turl('ProximaNovaCond-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Bl';\n\tsrc: url('ProximaNovaExCn-Black.eot');\n\tsrc: local('Proxima Nova Extra Condensed Black'), local('ProximaNovaExCn-Black'),\n\t\turl('ProximaNovaExCn-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Black.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-RegularIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Regular Italic'), local('ProximaNovaExCn-RegularIt'),\n\t\turl('ProximaNovaExCn-RegularIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-RegularIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-RegularIt.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-Light.eot');\n\tsrc: local('Proxima Nova Condensed Light'), local('ProximaNovaCond-Light'),\n\t\turl('ProximaNovaCond-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Light.woff') format('woff'),\n\t\turl('ProximaNovaCond-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNova-ExtrabldIt.eot');\n\tsrc: local('Proxima Nova Extrabold Italic'), local('ProximaNova-ExtrabldIt'),\n\t\turl('ProximaNova-ExtrabldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-ExtrabldIt.woff') format('woff'),\n\t\turl('ProximaNova-ExtrabldIt.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Bl';\n\tsrc: url('ProximaNovaCond-BlackIt.eot');\n\tsrc: local('Proxima Nova Condensed Black Italic'), local('ProximaNovaCond-BlackIt'),\n\t\turl('ProximaNovaCond-BlackIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-BlackIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-BlackIt.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-Regular.eot');\n\tsrc: local('Proxima Nova Extra Condensed Regular'), local('ProximaNovaExCn-Regular'),\n\t\turl('ProximaNovaExCn-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Regular.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-Light.eot');\n\tsrc: local('Proxima Nova Light'), local('ProximaNova-Light'),\n\t\turl('ProximaNova-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Light.woff') format('woff'),\n\t\turl('ProximaNova-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-SemiboldIt.eot');\n\tsrc: local('Proxima Nova Condensed Semibold Italic'), local('ProximaNovaCond-SemiboldIt'),\n\t\turl('ProximaNovaCond-SemiboldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-SemiboldIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-SemiboldIt.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n@font-face {\n\tfont-family: 'Proxima Nova Bl';\n\tsrc: url('ProximaNova-BlackIt.eot');\n\tsrc: local('Proxima Nova Black Italic'), local('ProximaNova-BlackIt'),\n\t\turl('ProximaNova-BlackIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-BlackIt.woff') format('woff'),\n\t\turl('ProximaNova-BlackIt.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n@font-face {\n  font-family: \"Ruble\";\n  src: local(Arial);\n  unicode-range: U+20BD;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.container {\n  max-width: 1140px;\n  margin: 0 auto;\n  width: 100%;\n}\n.row {\n  display: flex;\n}\n.row--wrap {\n  flex-wrap: wrap;\n}\n.column {\n  display: flex;\n  flex-direction: column;\n}\n@font-face {\n  font-family: \"slick\";\n  font-weight: normal;\n  font-style: normal;\n  src: url('slick.eot');\n  src: url('slick.eot') format(\"embedded-opentype\"), url('slick.woff') format(\"woff\"), url('slick.ttf') format(\"truetype\"), url('slick.svg') format(\"svg\");\n}\napp-home .first_screen {\n  /* Arrows */\n  /* Dots */\n}\napp-home .first_screen .slick-prev,\napp-home .first_screen .slick-next {\n  font-size: 0;\n  line-height: 0;\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  transform: translate(0, -50%);\n  cursor: pointer;\n  color: transparent;\n  border: none;\n  outline: none;\n  background: transparent;\n}\napp-home .first_screen .slick-prev:hover,\napp-home .first_screen .slick-prev:focus,\napp-home .first_screen .slick-next:hover,\napp-home .first_screen .slick-next:focus {\n  color: transparent;\n  outline: none;\n  background: transparent;\n}\napp-home .first_screen .slick-prev:hover:before,\napp-home .first_screen .slick-prev:focus:before,\napp-home .first_screen .slick-next:hover:before,\napp-home .first_screen .slick-next:focus:before {\n  opacity: 1;\n}\napp-home .first_screen .slick-prev.slick-disabled:before,\napp-home .first_screen .slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\napp-home .first_screen .slick-prev:before,\napp-home .first_screen .slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  opacity: 0.75;\n  color: white;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\napp-home .first_screen .slick-prev {\n  left: -25px;\n}\napp-home .first_screen [dir=rtl] .slick-prev {\n  right: -25px;\n  left: auto;\n}\napp-home .first_screen .slick-prev:before {\n  content: \"←\";\n}\napp-home .first_screen [dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\napp-home .first_screen .slick-next {\n  right: -25px;\n}\napp-home .first_screen [dir=rtl] .slick-next {\n  right: auto;\n  left: -25px;\n}\napp-home .first_screen .slick-next:before {\n  content: \"→\";\n}\napp-home .first_screen [dir=rtl] .slick-next:before {\n  content: \"←\";\n}\napp-home .first_screen .slick-dotted.slick-slider {\n  margin-bottom: 40px;\n}\napp-home .first_screen .slick-dots {\n  position: absolute;\n  bottom: -40px;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\napp-home .first_screen .slick-dots li {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\napp-home .first_screen .slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\napp-home .first_screen .slick-dots li button:hover,\napp-home .first_screen .slick-dots li button:focus {\n  outline: none;\n}\napp-home .first_screen .slick-dots li button:hover:before,\napp-home .first_screen .slick-dots li button:focus:before {\n  opacity: 1;\n}\napp-home .first_screen .slick-dots li button:before {\n  font-family: \"slick\";\n  font-size: 14px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: \"•\";\n  text-align: center;\n  opacity: 0.4;\n  color: #ffffff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\napp-home .first_screen .slick-dots li.slick-active button:before {\n  opacity: 1;\n  color: #ffffff;\n}\napp-home .first_screen .prevBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  left: -25px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\napp-home .first_screen .nextBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  right: -25px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\napp-about .trends .prevBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  left: -50px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\napp-about .trends .nextBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  right: -50px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\napp-about .how .slick-dotted.slick-slider {\n  margin-bottom: 40px;\n}\napp-about .how .slick-dots {\n  position: absolute;\n  bottom: -40px;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\napp-about .how .slick-dots li {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\napp-about .how .slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\napp-about .how .slick-dots li button:hover,\napp-about .how .slick-dots li button:focus {\n  outline: none;\n}\napp-about .how .slick-dots li button:hover:before,\napp-about .how .slick-dots li button:focus:before {\n  opacity: 0.5;\n  color: #16b267;\n}\napp-about .how .slick-dots li button:before {\n  font-family: \"slick\";\n  font-size: 14px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: \"•\";\n  text-align: center;\n  opacity: 0.4;\n  color: #ffffff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\napp-about .how .slick-dots li.slick-active button:before {\n  opacity: 1;\n  color: #16b267;\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://node_modules/normalize.css/normalize.css","webpack://src/assets/fonts/ProximaNova/stylesheet.css","webpack://src/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import \"~normalize.css\";\n@import url(\"./assets/fonts/ProximaNova/stylesheet.css\");\n@font-face {\n  font-family: \"Ruble\";\n  src: local(Arial);\n  unicode-range: U+20BD;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  max-width: 1140px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.row {\n  display: flex;\n}\n\n.row--wrap {\n  flex-wrap: wrap;\n}\n\n.column {\n  display: flex;\n  flex-direction: column;\n}\n\n@font-face {\n  font-family: \"slick\";\n  font-weight: normal;\n  font-style: normal;\n  src: url(\"./assets/fonts/slick/fonts/slick.eot\");\n  src: url(\"./assets/fonts/slick/fonts/slick.eot?#iefix\") format(\"embedded-opentype\"), url(\"./assets/fonts/slick/fonts/slick.woff\") format(\"woff\"), url(\"./assets/fonts/slick/fonts/slick.ttf\") format(\"truetype\"), url(\"./assets/fonts/slick/fonts/slick.svg#slick\") format(\"svg\");\n}\napp-home .first_screen {\n  /* Arrows */\n  /* Dots */\n}\napp-home .first_screen .slick-prev,\napp-home .first_screen .slick-next {\n  font-size: 0;\n  line-height: 0;\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  cursor: pointer;\n  color: transparent;\n  border: none;\n  outline: none;\n  background: transparent;\n}\napp-home .first_screen .slick-prev:hover,\napp-home .first_screen .slick-prev:focus,\napp-home .first_screen .slick-next:hover,\napp-home .first_screen .slick-next:focus {\n  color: transparent;\n  outline: none;\n  background: transparent;\n}\napp-home .first_screen .slick-prev:hover:before,\napp-home .first_screen .slick-prev:focus:before,\napp-home .first_screen .slick-next:hover:before,\napp-home .first_screen .slick-next:focus:before {\n  opacity: 1;\n}\napp-home .first_screen .slick-prev.slick-disabled:before,\napp-home .first_screen .slick-next.slick-disabled:before {\n  opacity: 0.25;\n}\napp-home .first_screen .slick-prev:before,\napp-home .first_screen .slick-next:before {\n  font-family: \"slick\";\n  font-size: 20px;\n  line-height: 1;\n  opacity: 0.75;\n  color: white;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\napp-home .first_screen .slick-prev {\n  left: -25px;\n}\napp-home .first_screen [dir=rtl] .slick-prev {\n  right: -25px;\n  left: auto;\n}\napp-home .first_screen .slick-prev:before {\n  content: \"←\";\n}\napp-home .first_screen [dir=rtl] .slick-prev:before {\n  content: \"→\";\n}\napp-home .first_screen .slick-next {\n  right: -25px;\n}\napp-home .first_screen [dir=rtl] .slick-next {\n  right: auto;\n  left: -25px;\n}\napp-home .first_screen .slick-next:before {\n  content: \"→\";\n}\napp-home .first_screen [dir=rtl] .slick-next:before {\n  content: \"←\";\n}\napp-home .first_screen .slick-dotted.slick-slider {\n  margin-bottom: 40px;\n}\napp-home .first_screen .slick-dots {\n  position: absolute;\n  bottom: -40px;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\napp-home .first_screen .slick-dots li {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\napp-home .first_screen .slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\napp-home .first_screen .slick-dots li button:hover,\napp-home .first_screen .slick-dots li button:focus {\n  outline: none;\n}\napp-home .first_screen .slick-dots li button:hover:before,\napp-home .first_screen .slick-dots li button:focus:before {\n  opacity: 1;\n}\napp-home .first_screen .slick-dots li button:before {\n  font-family: \"slick\";\n  font-size: 14px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: \"•\";\n  text-align: center;\n  opacity: 0.4;\n  color: #ffffff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\napp-home .first_screen .slick-dots li.slick-active button:before {\n  opacity: 1;\n  color: #ffffff;\n}\napp-home .first_screen .prevBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  left: -25px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\napp-home .first_screen .nextBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  right: -25px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\n\napp-about .trends .prevBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  left: -50px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\napp-about .trends .nextBtn {\n  height: 50px;\n  opacity: 0.5;\n  color: rgba(255, 255, 255, 0.5);\n  right: -50px;\n  top: calc(50% - 25px);\n  cursor: pointer;\n  position: absolute;\n  z-index: 1000;\n}\n\napp-about .how .slick-dotted.slick-slider {\n  margin-bottom: 40px;\n}\napp-about .how .slick-dots {\n  position: absolute;\n  bottom: -40px;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n}\napp-about .how .slick-dots li {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\napp-about .how .slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  width: 20px;\n  height: 20px;\n  padding: 5px;\n  cursor: pointer;\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent;\n}\napp-about .how .slick-dots li button:hover,\napp-about .how .slick-dots li button:focus {\n  outline: none;\n}\napp-about .how .slick-dots li button:hover:before,\napp-about .how .slick-dots li button:focus:before {\n  opacity: 0.5;\n  color: #16b267;\n}\napp-about .how .slick-dots li button:before {\n  font-family: \"slick\";\n  font-size: 14px;\n  line-height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  content: \"•\";\n  text-align: center;\n  opacity: 0.4;\n  color: #ffffff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\napp-about .how .slick-dots li.slick-active button:before {\n  opacity: 1;\n  color: #16b267;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","/* This stylesheet generated by Transfonter (https://transfonter.org) on June 21, 2017 9:51 AM */\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-LightIt.eot');\n\tsrc: local('Proxima Nova Condensed Light Italic'), local('ProximaNovaCond-LightIt'),\n\t\turl('ProximaNovaCond-LightIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-LightIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-LightIt.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-LightIt.eot');\n\tsrc: local('Proxima Nova Light Italic'), local('ProximaNova-LightIt'),\n\t\turl('ProximaNova-LightIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-LightIt.woff') format('woff'),\n\t\turl('ProximaNova-LightIt.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-Regular.eot');\n\tsrc: local('Proxima Nova Condensed Regular'), local('ProximaNovaCond-Regular'),\n\t\turl('ProximaNovaCond-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Regular.woff') format('woff'),\n\t\turl('ProximaNovaCond-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNova-Extrabld.eot');\n\tsrc: local('Proxima Nova Extrabold'), local('ProximaNova-Extrabld'),\n\t\turl('ProximaNova-Extrabld.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Extrabld.woff') format('woff'),\n\t\turl('ProximaNova-Extrabld.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Bl';\n\tsrc: url('ProximaNovaCond-Black.eot');\n\tsrc: local('Proxima Nova Condensed Black'), local('ProximaNovaCond-Black'),\n\t\turl('ProximaNovaCond-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Black.woff') format('woff'),\n\t\turl('ProximaNovaCond-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-ExtrabldIt.eot');\n\tsrc: local('Proxima Nova Condensed Extrabold Italic'), local('ProximaNovaCond-ExtrabldIt'),\n\t\turl('ProximaNovaCond-ExtrabldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-ExtrabldIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-ExtrabldIt.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-Regular.eot');\n\tsrc: local('Proxima Nova Regular'), local('ProximaNova-Regular'),\n\t\turl('ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Regular.woff') format('woff'),\n\t\turl('ProximaNova-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-Semibold.eot');\n\tsrc: local('Proxima Nova Semibold'), local('ProximaNova-Semibold'),\n\t\turl('ProximaNova-Semibold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Semibold.woff') format('woff'),\n\t\turl('ProximaNova-Semibold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-Thin.eot');\n\tsrc: local('Proxima Nova Extra Condensed Thin'), local('ProximaNovaExCn-Thin'),\n\t\turl('ProximaNovaExCn-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Thin.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-Semibold.eot');\n\tsrc: local('Proxima Nova Condensed Semibold'), local('ProximaNovaCond-Semibold'),\n\t\turl('ProximaNovaCond-Semibold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Semibold.woff') format('woff'),\n\t\turl('ProximaNovaCond-Semibold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-SemiboldIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Semibold Italic'), local('ProximaNovaExCn-SemiboldIt'),\n\t\turl('ProximaNovaExCn-SemiboldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-SemiboldIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-SemiboldIt.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-Semibold.eot');\n\tsrc: local('Proxima Nova Extra Condensed Semibold'), local('ProximaNovaExCn-Semibold'),\n\t\turl('ProximaNovaExCn-Semibold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Semibold.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Semibold.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNova-ThinIt.eot');\n\tsrc: local('Proxima Nova Thin Italic'), local('ProximaNova-ThinIt'),\n\t\turl('ProximaNova-ThinIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-ThinIt.woff') format('woff'),\n\t\turl('ProximaNova-ThinIt.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-Thin.eot');\n\tsrc: local('Proxima Nova Condensed Thin'), local('ProximaNovaCond-Thin'),\n\t\turl('ProximaNovaCond-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Thin.woff') format('woff'),\n\t\turl('ProximaNovaCond-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-RegularIt.eot');\n\tsrc: local('Proxima Nova Condensed Regular Italic'), local('ProximaNovaCond-RegularIt'),\n\t\turl('ProximaNovaCond-RegularIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-RegularIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-RegularIt.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-ThinIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Thin Italic'), local('ProximaNovaExCn-ThinIt'),\n\t\turl('ProximaNovaExCn-ThinIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-ThinIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-ThinIt.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-SemiboldIt.eot');\n\tsrc: local('Proxima Nova Semibold Italic'), local('ProximaNova-SemiboldIt'),\n\t\turl('ProximaNova-SemiboldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-SemiboldIt.woff') format('woff'),\n\t\turl('ProximaNova-SemiboldIt.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-RegularIt.eot');\n\tsrc: local('Proxima Nova Regular Italic'), local('ProximaNova-RegularIt'),\n\t\turl('ProximaNova-RegularIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-RegularIt.woff') format('woff'),\n\t\turl('ProximaNova-RegularIt.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-Extrabld.eot');\n\tsrc: local('Proxima Nova Condensed Extrabold'), local('ProximaNovaCond-Extrabld'),\n\t\turl('ProximaNovaCond-Extrabld.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Extrabld.woff') format('woff'),\n\t\turl('ProximaNovaCond-Extrabld.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-ExtrabldIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Extrabold Italic'), local('ProximaNovaExCn-ExtrabldIt'),\n\t\turl('ProximaNovaExCn-ExtrabldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-ExtrabldIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-ExtrabldIt.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Bl';\n\tsrc: url('ProximaNovaExCn-BlackIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Black Italic'), local('ProximaNovaExCn-BlackIt'),\n\t\turl('ProximaNovaExCn-BlackIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-BlackIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-BlackIt.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-LightIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Light Italic'), local('ProximaNovaExCn-LightIt'),\n\t\turl('ProximaNovaExCn-LightIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-LightIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-LightIt.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Th';\n\tsrc: url('ProximaNovaCond-ThinIt.eot');\n\tsrc: local('Proxima Nova Condensed Thin Italic'), local('ProximaNovaCond-ThinIt'),\n\t\turl('ProximaNovaCond-ThinIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-ThinIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-ThinIt.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Lt';\n\tsrc: url('ProximaNovaExCn-Light.eot');\n\tsrc: local('Proxima Nova Extra Condensed Light'), local('ProximaNovaExCn-Light'),\n\t\turl('ProximaNovaExCn-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Light.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-BoldIt.eot');\n\tsrc: local('Proxima Nova Condensed Bold Italic'), local('ProximaNovaCond-BoldIt'),\n\t\turl('ProximaNovaCond-BoldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-BoldIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-BoldIt.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Th';\n\tsrc: url('ProximaNovaExCn-Extrabld.eot');\n\tsrc: local('Proxima Nova Extra Condensed Extrabold'), local('ProximaNovaExCn-Extrabld'),\n\t\turl('ProximaNovaExCn-Extrabld.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Extrabld.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Extrabld.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-BoldIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Bold Italic'), local('ProximaNovaExCn-BoldIt'),\n\t\turl('ProximaNovaExCn-BoldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-BoldIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-BoldIt.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Bl';\n\tsrc: url('ProximaNova-Black.eot');\n\tsrc: local('Proxima Nova Black'), local('ProximaNova-Black'),\n\t\turl('ProximaNova-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Black.woff') format('woff'),\n\t\turl('ProximaNova-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-Bold.eot');\n\tsrc: local('Proxima Nova Bold'), local('ProximaNova-Bold'),\n\t\turl('ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Bold.woff') format('woff'),\n\t\turl('ProximaNova-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-Bold.eot');\n\tsrc: local('Proxima Nova Extra Condensed Bold'), local('ProximaNovaExCn-Bold'),\n\t\turl('ProximaNovaExCn-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Bold.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNovaT-Thin.eot');\n\tsrc: local('Proxima Nova Thin'), local('ProximaNovaT-Thin'),\n\t\turl('ProximaNovaT-Thin.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaT-Thin.woff') format('woff'),\n\t\turl('ProximaNovaT-Thin.ttf') format('truetype');\n\tfont-weight: 100;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Rg';\n\tsrc: url('ProximaNova-BoldIt.eot');\n\tsrc: local('Proxima Nova Bold Italic'), local('ProximaNova-BoldIt'),\n\t\turl('ProximaNova-BoldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-BoldIt.woff') format('woff'),\n\t\turl('ProximaNova-BoldIt.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Rg';\n\tsrc: url('ProximaNovaCond-Bold.eot');\n\tsrc: local('Proxima Nova Condensed Bold'), local('ProximaNovaCond-Bold'),\n\t\turl('ProximaNovaCond-Bold.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Bold.woff') format('woff'),\n\t\turl('ProximaNovaCond-Bold.ttf') format('truetype');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Bl';\n\tsrc: url('ProximaNovaExCn-Black.eot');\n\tsrc: local('Proxima Nova Extra Condensed Black'), local('ProximaNovaExCn-Black'),\n\t\turl('ProximaNovaExCn-Black.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Black.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Black.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-RegularIt.eot');\n\tsrc: local('Proxima Nova Extra Condensed Regular Italic'), local('ProximaNovaExCn-RegularIt'),\n\t\turl('ProximaNovaExCn-RegularIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-RegularIt.woff') format('woff'),\n\t\turl('ProximaNovaExCn-RegularIt.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-Light.eot');\n\tsrc: local('Proxima Nova Condensed Light'), local('ProximaNovaCond-Light'),\n\t\turl('ProximaNovaCond-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-Light.woff') format('woff'),\n\t\turl('ProximaNovaCond-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Th';\n\tsrc: url('ProximaNova-ExtrabldIt.eot');\n\tsrc: local('Proxima Nova Extrabold Italic'), local('ProximaNova-ExtrabldIt'),\n\t\turl('ProximaNova-ExtrabldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-ExtrabldIt.woff') format('woff'),\n\t\turl('ProximaNova-ExtrabldIt.ttf') format('truetype');\n\tfont-weight: 800;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Bl';\n\tsrc: url('ProximaNovaCond-BlackIt.eot');\n\tsrc: local('Proxima Nova Condensed Black Italic'), local('ProximaNovaCond-BlackIt'),\n\t\turl('ProximaNovaCond-BlackIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-BlackIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-BlackIt.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova ExCn Rg';\n\tsrc: url('ProximaNovaExCn-Regular.eot');\n\tsrc: local('Proxima Nova Extra Condensed Regular'), local('ProximaNovaExCn-Regular'),\n\t\turl('ProximaNovaExCn-Regular.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaExCn-Regular.woff') format('woff'),\n\t\turl('ProximaNovaExCn-Regular.ttf') format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Lt';\n\tsrc: url('ProximaNova-Light.eot');\n\tsrc: local('Proxima Nova Light'), local('ProximaNova-Light'),\n\t\turl('ProximaNova-Light.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-Light.woff') format('woff'),\n\t\turl('ProximaNova-Light.ttf') format('truetype');\n\tfont-weight: 300;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Cn Lt';\n\tsrc: url('ProximaNovaCond-SemiboldIt.eot');\n\tsrc: local('Proxima Nova Condensed Semibold Italic'), local('ProximaNovaCond-SemiboldIt'),\n\t\turl('ProximaNovaCond-SemiboldIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNovaCond-SemiboldIt.woff') format('woff'),\n\t\turl('ProximaNovaCond-SemiboldIt.ttf') format('truetype');\n\tfont-weight: 600;\n\tfont-style: italic;\n}\n\n@font-face {\n\tfont-family: 'Proxima Nova Bl';\n\tsrc: url('ProximaNova-BlackIt.eot');\n\tsrc: local('Proxima Nova Black Italic'), local('ProximaNova-BlackIt'),\n\t\turl('ProximaNova-BlackIt.eot?#iefix') format('embedded-opentype'),\n\t\turl('ProximaNova-BlackIt.woff') format('woff'),\n\t\turl('ProximaNova-BlackIt.ttf') format('truetype');\n\tfont-weight: 900;\n\tfont-style: italic;\n}\n","$site-background: #ECECEC;\r\n$container-width: 1140px;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!******************************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/slick-carousel/slick/slick.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\raket\WebstormProjects\stofory-client\src\styles.scss */"+EN/");
module.exports = __webpack_require__(/*! C:\Users\raket\WebstormProjects\stofory-client\node_modules\slick-carousel\slick\slick.scss */"r7B0");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "r7B0":
/*!******************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--13-1!../../postcss-loader/src??embedded!../../resolve-url-loader??ref--13-3!../../sass-loader/dist/cjs.js??ref--13-4!./slick.scss */ "vlMY");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "vlMY":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./node_modules/slick-carousel/slick/slick.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n.slick-list:focus {\n  outline: none;\n}\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track:before, .slick-track:after {\n  content: \"\";\n  display: table;\n}\n.slick-track:after {\n  clear: both;\n}\n.slick-loading .slick-track {\n  visibility: hidden;\n}\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none;\n}\n[dir=rtl] .slick-slide {\n  float: right;\n}\n.slick-slide img {\n  display: block;\n}\n.slick-slide.slick-loading img {\n  display: none;\n}\n.slick-slide.dragging img {\n  pointer-events: none;\n}\n.slick-initialized .slick-slide {\n  display: block;\n}\n.slick-loading .slick-slide {\n  visibility: hidden;\n}\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://node_modules/slick-carousel/slick/slick.scss"],"names":[],"mappings":"AAAA,WAAA;AAEA;EACI,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,2BAAA;EACA,yBAAA;EAIA,iBAAA;EAEA,mBAAA;EACA,wCAAA;AAAJ;AAEA;EACI,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,SAAA;EACA,UAAA;AACJ;AACI;EACI,aAAA;AACR;AAEI;EACI,eAAA;EACA,YAAA;AAAR;AAGA;;EAMI,+BAAA;AAAJ;AAGA;EACI,kBAAA;EACA,OAAA;EACA,MAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;AAEI;EAEI,WAAA;EACA,cAAA;AADR;AAII;EACI,WAAA;AAFR;AAKI;EACI,kBAAA;AAHR;AAMA;EACI,WAAA;EACA,YAAA;EACA,eAAA;EAWA,aAAA;AAbJ;AAGI;EACI,YAAA;AADR;AAGI;EACI,cAAA;AADR;AAGI;EACI,aAAA;AADR;AAMI;EACI,oBAAA;AAJR;AAOI;EACI,cAAA;AALR;AAQI;EACI,kBAAA;AANR;AASI;EACI,cAAA;EACA,YAAA;EACA,6BAAA;AAPR;AAUA;EACI,aAAA;AAPJ","sourcesContent":["/* Slider */\n\n.slick-slider {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-list {\n    position: relative;\n    overflow: hidden;\n    display: block;\n    margin: 0;\n    padding: 0;\n\n    &:focus {\n        outline: none;\n    }\n\n    &.dragging {\n        cursor: pointer;\n        cursor: hand;\n    }\n}\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track {\n    position: relative;\n    left: 0;\n    top: 0;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n\n    &:before,\n    &:after {\n        content: \"\";\n        display: table;\n    }\n\n    &:after {\n        clear: both;\n    }\n\n    .slick-loading & {\n        visibility: hidden;\n    }\n}\n.slick-slide {\n    float: left;\n    height: 100%;\n    min-height: 1px;\n    [dir=\"rtl\"] & {\n        float: right;\n    }\n    img {\n        display: block;\n    }\n    &.slick-loading img {\n        display: none;\n    }\n\n    display: none;\n\n    &.dragging img {\n        pointer-events: none;\n    }\n\n    .slick-initialized & {\n        display: block;\n    }\n\n    .slick-loading & {\n        visibility: hidden;\n    }\n\n    .slick-vertical & {\n        display: block;\n        height: auto;\n        border: 1px solid transparent;\n    }\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map