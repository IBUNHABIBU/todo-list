/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bg.jpg */ \"./src/images/bg.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_bg_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n  display: flex;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n}\\r\\n\\r\\n.project-create-btn {\\r\\n  background: #008cba;\\r\\n  color: #fff;\\r\\n  font-size: 1rem;\\r\\n  border-radius: 1.6rem;\\r\\n  border: none;\\r\\n  padding: 0.6rem;\\r\\n}\\r\\n\\r\\n.create-btn {\\r\\n  padding-right: 1rem;\\r\\n}\\r\\n\\r\\n.fa-plus { margin-right: 1rem; }\\r\\n\\r\\nmain {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  width: 90%;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.new-project-input {\\r\\n  border-radius: 6px;\\r\\n  height: 2rem;\\r\\n  background: #efefef;\\r\\n  width: 100%;\\r\\n  position: relative;\\r\\n  top: 2rem;\\r\\n  border: 1px solid#efefef;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  position: relative;\\r\\n  top: 8rem;\\r\\n  left: 8rem;\\r\\n  width: 30%;\\r\\n  height: 8rem;\\r\\n  background: white;\\r\\n  border-radius: 6px;\\r\\n  padding: 8rem;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.new-project-btns button {\\r\\n  width: 49%;\\r\\n  height: 50%;\\r\\n  position: relative;\\r\\n  top: 4rem;\\r\\n  border: none;\\r\\n  background: white;\\r\\n  border-right: 2px solid #efefef;\\r\\n  text-transform: uppercase;\\r\\n  box-shadow: 1px 1px gray;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.new-project-btns button:hover {\\r\\n  background: #efefef;\\r\\n}\\r\\n\\r\\n.task.completed {\\r\\n  text-decoration: line-through;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.task.completed span {\\r\\n  text-decoration: line-through;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\naside {\\r\\n  padding: 4rem;\\r\\n  background: white;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  position: relative;\\r\\n  top: 4rem;\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\n.form-container {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  border: 1px solid  #efefef;\\r\\n  background: rgb(240, 240, 240);\\r\\n  height: 2.2rem;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#datetime {\\r\\n  width: 8rem;\\r\\n}\\r\\n\\r\\ninput[type='date']::before {\\r\\n  content: attr(placeholder);\\r\\n}\\r\\n\\r\\n.task {\\r\\n  background: rgb(250, 250, 250);\\r\\n}\\r\\n\\r\\nli {\\r\\n  border-top: 1px solid #efefef;\\r\\n  padding: 1rem;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.btn-trash {\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.fa-trash {\\r\\n  float: right;\\r\\n  position: relative;\\r\\n  right: 0;\\r\\n  color: #9c9c9c;\\r\\n}\\r\\n\\r\\n.new.list {\\r\\n  width: 70%;\\r\\n  font-size: 1.1rem;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.btn.create {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 900;\\r\\n  margin-right: 0.25em;\\r\\n  transition: opacity 250ms ease-in;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.btn.create:hover {\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.new {\\r\\n  background: transparent;\\r\\n  border: 0;\\r\\n  color: inherit;\\r\\n  border-bottom: 1px solid currentColor;\\r\\n  font-size: inherit;\\r\\n  outline: none;\\r\\n  padding: 0.25em;\\r\\n  transition: border-bottom 150ms ease-in;\\r\\n  order: 2;\\r\\n}\\r\\n\\r\\n.new::placeholder {\\r\\n  opacity: 0.4;\\r\\n}\\r\\n\\r\\n.new:focus {\\r\\n  border-bottom-width: 3px;\\r\\n}\\r\\n\\r\\n.project-list li:hover {\\r\\n  cursor: pointer;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  font-weight: bolder;\\r\\n  color: rgb(197, 5, 5);\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.project-title-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"62de172c161bdab4e4c4245222262c20.jpg\");\n\n//# sourceURL=webpack:///./src/images/bg.jpg?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction Tasker() {\r\n  const taskInput = document.getElementById('title');\r\n  const taskDescription = document.getElementById('description');\r\n  const taskDate = document.getElementById('datetime');\r\n  const taskList = document.getElementById('tasks');\r\n  const projectList = document.querySelector('.project-list');\r\n  const deleteProjectBtn = document.querySelector('[data-delete-project]');\r\n  const projectTitle = document.querySelector('.project-title');\r\n  const aside = document.querySelector('aside');\r\n  const LOCAL_STORAGE_LIST_KEY = 'task.lists';\r\n  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';\r\n  const newProject = document.querySelector('[data-new-project]');\r\n  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\r\n  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\r\n  const taskListChildren = taskList.children;\r\n  const addButton = document.getElementById('add-task-btn');\r\n  function save() {\r\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\r\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\r\n  }\r\n\r\n  function clearPrevious(projectList) {\r\n    while (projectList.firstChild) {\r\n      projectList.removeChild(projectList.firstChild);\r\n    }\r\n  }\r\n\r\n  function renderTasks(selectedProject) {\r\n    selectedProject.tasks.forEach(task => {\r\n      const taskListItem = document.createElement('li');\r\n      taskListItem.setAttribute('class', 'task');\r\n      const taskCheckBox = document.createElement('input');\r\n      taskCheckBox.setAttribute('type', 'checkbox');\r\n      const taskElement = document.createElement('span');\r\n      const descriptionElement = document.createElement('span');\r\n      const dateElement = document.createElement('span');\r\n      const taskButton = document.createElement('button');\r\n      const taskTrash = document.createElement('i');\r\n      taskButton.className = 'btn-trash';\r\n      taskTrash.setAttribute('class', 'fa fa-trash');\r\n      const priorityElement = document.createElement('span');\r\n      descriptionElement.innerHTML = task.description;\r\n      priorityElement.innerHTML = task.priority;\r\n      dateElement.innerHTML = task.date;\r\n      taskElement.innerHTML = task.title;\r\n      taskListItem.appendChild(taskCheckBox);\r\n      taskListItem.appendChild(taskElement);\r\n      taskListItem.appendChild(descriptionElement);\r\n      taskButton.appendChild(taskTrash);\r\n      taskListItem.appendChild(dateElement);\r\n      taskListItem.appendChild(priorityElement);\r\n      taskListItem.appendChild(taskButton);\r\n      taskList.appendChild(taskListItem);\r\n    });\r\n  }\r\n\r\n  function renderProject() {\r\n    lists.forEach(list => {\r\n      const li = document.createElement('li');\r\n      li.dataset.listId = list.id;\r\n      li.innerText = list.name;\r\n      projectList.appendChild(li);\r\n      if (list.id === selectedListId) {\r\n        li.classList.add('selected');\r\n        projectTitle.innerText = list.name;\r\n      }\r\n    });\r\n  }\r\n\r\n  function addProject() {\r\n    clearPrevious(projectList);\r\n    renderProject();\r\n    const selectedProject = lists.find(list => list.id === selectedListId);\r\n    if (selectedListId === null) {\r\n      aside.style.display = 'none';\r\n    } else {\r\n      aside.style.display = 'block';\r\n      clearPrevious(taskList);\r\n      renderTasks(selectedProject);\r\n    }\r\n    save();\r\n  }\r\n\r\n  deleteProjectBtn.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    lists = lists.filter(list => list.id !== selectedListId);\r\n    selectedListId = null;\r\n    save();\r\n    addProject();\r\n  });\r\n\r\n  function createTask(title, description, date, priority) {\r\n    return {\r\n      title, description, date, priority,\r\n    };\r\n  }\r\n\r\n  function buildTask() {\r\n    const taskValue = taskInput.value;\r\n    const descriptionValue = taskDescription.value;\r\n    const dateValue = taskDate.value;\r\n    const priority = document.querySelector('input[name=\"priority\"]:checked').value;\r\n    const task = createTask(taskValue, descriptionValue, dateValue, priority);\r\n    const selectedList = lists.find(list => list.id === selectedListId);\r\n    selectedList.tasks.push(task);\r\n  }\r\n\r\n  function markCompleted(e) {\r\n    if (e.target.checked) {\r\n      e.target.parentElement.classList.add('completed');\r\n    } else {\r\n      e.target.parentElement.classList.remove('completed');\r\n    }\r\n  }\r\n\r\n  function deleteTasks(e) {\r\n    const child = e.target.parentElement.parentElement;\r\n    taskList.removeChild(child);\r\n    save();\r\n  }\r\n  function scanTaskList() {\r\n    for (let i = 0; i < taskListChildren.length; i += 1) {\r\n      const taskListItem = taskListChildren[i];\r\n      const checkBox = taskListItem.getElementsByTagName('input')[0];\r\n      const deleteButton = taskListItem.getElementsByTagName('button')[0];\r\n      checkBox.addEventListener('click', markCompleted);\r\n      deleteButton.addEventListener('click', deleteTasks);\r\n    }\r\n  }\r\n\r\n  function addTask() {\r\n    buildTask();\r\n    taskInput.value = '';\r\n    scanTaskList();\r\n  }\r\n\r\n  function enterKey(e) {\r\n    if (e.keyCode === 13) {\r\n      addTask();\r\n    }\r\n  }\r\n\r\n  function bindEvent() {\r\n    addButton.onclick = addTask.bind();\r\n    taskInput.onkeypress = enterKey.bind(this);\r\n  }\r\n\r\n  projectList.addEventListener('click', e => {\r\n    if (e.target.tagName.toLowerCase() === 'li') {\r\n      selectedListId = e.target.dataset.listId;\r\n    }\r\n    save();\r\n    addProject();\r\n  });\r\n\r\n  function createProject(projectName) {\r\n    return { id: Date.now().toString(), name: projectName, tasks: [] };\r\n  }\r\n\r\n  function makeNewProject(e) {\r\n    e.preventDefault();\r\n    const projectInput = document.querySelector('[data-new-input]');\r\n    const inputValue = projectInput.value;\r\n    if (inputValue === null || inputValue === '') return;\r\n    const list = createProject(inputValue);\r\n    projectInput.value = null;\r\n    lists.push(list);\r\n    addProject();\r\n    save();\r\n  }\r\n  newProject.addEventListener('submit', makeNewProject);\r\n\r\n  addProject();\r\n\r\n  function construct() {\r\n    bindEvent();\r\n    scanTaskList();\r\n  }\r\n  return { construct };\r\n}\r\nconst todo = Tasker();\r\ntodo.construct();\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ })

/******/ });