/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _milligram = __webpack_require__(1);

	var _milligram2 = _interopRequireDefault(_milligram);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./milligram.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./milligram.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Milligram v1.2.0\n * http://milligram.github.io\n *\n * Copyright (c) 2016 CJ Patoilo\n * Licensed under the MIT license\n*/\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\nbody {\n  color: #606c76;\n  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  font-size: 1.6em;\n  font-weight: 300;\n  letter-spacing: .01em;\n  line-height: 1.6;\n}\n\n*,\n*:after,\n*:before {\n  box-sizing: inherit;\n}\n\nblockquote {\n  border-left: 0.3rem solid #d1d1d1;\n  margin-left: 0;\n  margin-right: 0;\n  padding: 1rem 1.5rem;\n}\n\nblockquote *:last-child {\n  margin-bottom: 0;\n}\n\n.button,\nbutton,\ninput[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  background-color: #9b4dca;\n  border: 0.1rem solid #9b4dca;\n  border-radius: .4rem;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.1rem;\n  font-weight: 700;\n  height: 3.8rem;\n  letter-spacing: .1rem;\n  line-height: 3.8rem;\n  padding: 0 3.0rem;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.button:focus, .button:hover,\nbutton:focus,\nbutton:hover,\ninput[type='button']:focus,\ninput[type='button']:hover,\ninput[type='reset']:focus,\ninput[type='reset']:hover,\ninput[type='submit']:focus,\ninput[type='submit']:hover {\n  background-color: #606c76;\n  border-color: #606c76;\n  color: #fff;\n  outline: 0;\n}\n\n.button[disabled],\nbutton[disabled],\ninput[type='button'][disabled],\ninput[type='reset'][disabled],\ninput[type='submit'][disabled] {\n  cursor: default;\n  opacity: .5;\n}\n\n.button[disabled]:focus, .button[disabled]:hover,\nbutton[disabled]:focus,\nbutton[disabled]:hover,\ninput[type='button'][disabled]:focus,\ninput[type='button'][disabled]:hover,\ninput[type='reset'][disabled]:focus,\ninput[type='reset'][disabled]:hover,\ninput[type='submit'][disabled]:focus,\ninput[type='submit'][disabled]:hover {\n  background-color: #9b4dca;\n  border-color: #9b4dca;\n}\n\n.button.button-outline,\nbutton.button-outline,\ninput[type='button'].button-outline,\ninput[type='reset'].button-outline,\ninput[type='submit'].button-outline {\n  background-color: transparent;\n  color: #9b4dca;\n}\n\n.button.button-outline:focus, .button.button-outline:hover,\nbutton.button-outline:focus,\nbutton.button-outline:hover,\ninput[type='button'].button-outline:focus,\ninput[type='button'].button-outline:hover,\ninput[type='reset'].button-outline:focus,\ninput[type='reset'].button-outline:hover,\ninput[type='submit'].button-outline:focus,\ninput[type='submit'].button-outline:hover {\n  background-color: transparent;\n  border-color: #606c76;\n  color: #606c76;\n}\n\n.button.button-outline[disabled]:focus, .button.button-outline[disabled]:hover,\nbutton.button-outline[disabled]:focus,\nbutton.button-outline[disabled]:hover,\ninput[type='button'].button-outline[disabled]:focus,\ninput[type='button'].button-outline[disabled]:hover,\ninput[type='reset'].button-outline[disabled]:focus,\ninput[type='reset'].button-outline[disabled]:hover,\ninput[type='submit'].button-outline[disabled]:focus,\ninput[type='submit'].button-outline[disabled]:hover {\n  border-color: inherit;\n  color: #9b4dca;\n}\n\n.button.button-clear,\nbutton.button-clear,\ninput[type='button'].button-clear,\ninput[type='reset'].button-clear,\ninput[type='submit'].button-clear {\n  background-color: transparent;\n  border-color: transparent;\n  color: #9b4dca;\n}\n\n.button.button-clear:focus, .button.button-clear:hover,\nbutton.button-clear:focus,\nbutton.button-clear:hover,\ninput[type='button'].button-clear:focus,\ninput[type='button'].button-clear:hover,\ninput[type='reset'].button-clear:focus,\ninput[type='reset'].button-clear:hover,\ninput[type='submit'].button-clear:focus,\ninput[type='submit'].button-clear:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: #606c76;\n}\n\n.button.button-clear[disabled]:focus, .button.button-clear[disabled]:hover,\nbutton.button-clear[disabled]:focus,\nbutton.button-clear[disabled]:hover,\ninput[type='button'].button-clear[disabled]:focus,\ninput[type='button'].button-clear[disabled]:hover,\ninput[type='reset'].button-clear[disabled]:focus,\ninput[type='reset'].button-clear[disabled]:hover,\ninput[type='submit'].button-clear[disabled]:focus,\ninput[type='submit'].button-clear[disabled]:hover {\n  color: #9b4dca;\n}\n\ncode {\n  background: #f4f5f6;\n  border-radius: .4rem;\n  font-size: 86%;\n  margin: 0 .2rem;\n  padding: .2rem .5rem;\n  white-space: nowrap;\n}\n\npre {\n  background: #f4f5f6;\n  border-left: 0.3rem solid #9b4dca;\n}\n\npre > code {\n  border-radius: 0;\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre;\n}\n\nhr {\n  border: 0;\n  border-top: 0.1rem solid #f4f5f6;\n  margin: 3.0rem 0;\n}\n\ninput[type='email'],\ninput[type='number'],\ninput[type='password'],\ninput[type='search'],\ninput[type='tel'],\ninput[type='text'],\ninput[type='url'],\ntextarea,\nselect {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border: 0.1rem solid #d1d1d1;\n  border-radius: .4rem;\n  box-shadow: none;\n  box-sizing: inherit;\n  height: 3.8rem;\n  padding: .6rem 1.0rem;\n  width: 100%;\n}\n\ninput[type='email']:focus,\ninput[type='number']:focus,\ninput[type='password']:focus,\ninput[type='search']:focus,\ninput[type='tel']:focus,\ninput[type='text']:focus,\ninput[type='url']:focus,\ntextarea:focus,\nselect:focus {\n  border-color: #9b4dca;\n  outline: 0;\n}\n\nselect {\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#d1d1d1\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>') center right no-repeat;\n  padding-right: 3.0rem;\n}\n\nselect:focus {\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#9b4dca\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>');\n}\n\ntextarea {\n  min-height: 6.5rem;\n}\n\nlabel,\nlegend {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: .5rem;\n}\n\nfieldset {\n  border-width: 0;\n  padding: 0;\n}\n\ninput[type='checkbox'],\ninput[type='radio'] {\n  display: inline;\n}\n\n.label-inline {\n  display: inline-block;\n  font-weight: normal;\n  margin-left: .5rem;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 112.0rem;\n  padding: 0 2.0rem;\n  position: relative;\n  width: 100%;\n}\n\n.row {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  width: 100%;\n}\n\n.row.row-no-padding {\n  padding: 0;\n}\n\n.row.row-no-padding > .column {\n  padding: 0;\n}\n\n.row.row-wrap {\n  flex-wrap: wrap;\n}\n\n.row.row-top {\n  align-items: flex-start;\n}\n\n.row.row-bottom {\n  align-items: flex-end;\n}\n\n.row.row-center {\n  align-items: center;\n}\n\n.row.row-stretch {\n  align-items: stretch;\n}\n\n.row.row-baseline {\n  align-items: baseline;\n}\n\n.row .column {\n  display: block;\n  flex: 1;\n  margin-left: 0;\n  max-width: 100%;\n  width: 100%;\n}\n\n.row .column.column-offset-10 {\n  margin-left: 10%;\n}\n\n.row .column.column-offset-20 {\n  margin-left: 20%;\n}\n\n.row .column.column-offset-25 {\n  margin-left: 25%;\n}\n\n.row .column.column-offset-33, .row .column.column-offset-34 {\n  margin-left: 33.3333%;\n}\n\n.row .column.column-offset-50 {\n  margin-left: 50%;\n}\n\n.row .column.column-offset-66, .row .column.column-offset-67 {\n  margin-left: 66.6666%;\n}\n\n.row .column.column-offset-75 {\n  margin-left: 75%;\n}\n\n.row .column.column-offset-80 {\n  margin-left: 80%;\n}\n\n.row .column.column-offset-90 {\n  margin-left: 90%;\n}\n\n.row .column.column-10 {\n  flex: 0 0 10%;\n  max-width: 10%;\n}\n\n.row .column.column-20 {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row .column.column-25 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row .column.column-33, .row .column.column-34 {\n  flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n}\n\n.row .column.column-40 {\n  flex: 0 0 40%;\n  max-width: 40%;\n}\n\n.row .column.column-50 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row .column.column-60 {\n  flex: 0 0 60%;\n  max-width: 60%;\n}\n\n.row .column.column-66, .row .column.column-67 {\n  flex: 0 0 66.6666%;\n  max-width: 66.6666%;\n}\n\n.row .column.column-75 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.row .column.column-80 {\n  flex: 0 0 80%;\n  max-width: 80%;\n}\n\n.row .column.column-90 {\n  flex: 0 0 90%;\n  max-width: 90%;\n}\n\n.row .column .column-top {\n  align-self: flex-start;\n}\n\n.row .column .column-bottom {\n  align-self: flex-end;\n}\n\n.row .column .column-center {\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n\n@media (min-width: 40rem) {\n  .row {\n    flex-direction: row;\n    margin-left: -1.0rem;\n    width: calc(100% + 2.0rem);\n  }\n  .row .column {\n    margin-bottom: inherit;\n    padding: 0 1.0rem;\n  }\n}\n\na {\n  color: #9b4dca;\n  text-decoration: none;\n}\n\na:focus, a:hover {\n  color: #606c76;\n}\n\ndl,\nol,\nul {\n  list-style: none;\n  margin-top: 0;\n  padding-left: 0;\n}\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nol ol,\nol ul,\nul dl,\nul ol,\nul ul {\n  font-size: 90%;\n  margin: 1.5rem 0 1.5rem 3.0rem;\n}\n\nol {\n  list-style: decimal inside;\n}\n\nul {\n  list-style: circle inside;\n}\n\n.button,\nbutton,\ndd,\ndt,\nli {\n  margin-bottom: 1.0rem;\n}\n\nfieldset,\ninput,\nselect,\ntextarea {\n  margin-bottom: 1.5rem;\n}\n\nblockquote,\ndl,\nfigure,\nform,\nol,\np,\npre,\ntable,\nul {\n  margin-bottom: 2.5rem;\n}\n\ntable {\n  width: 100%;\n}\n\ntd,\nth {\n  border-bottom: 0.1rem solid #e1e1e1;\n  padding: 1.2rem 1.5rem;\n  text-align: left;\n}\n\ntd:first-child,\nth:first-child {\n  padding-left: 0;\n}\n\ntd:last-child,\nth:last-child {\n  padding-right: 0;\n}\n\np {\n  margin-top: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 300;\n  letter-spacing: -.1rem;\n  margin-bottom: 2.0rem;\n  margin-top: 0;\n}\n\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n}\n\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n}\n\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n}\n\nh4 {\n  font-size: 2.4rem;\n  letter-spacing: -.08rem;\n  line-height: 1.35;\n}\n\nh5 {\n  font-size: 1.8rem;\n  letter-spacing: -.05rem;\n  line-height: 1.5;\n}\n\nh6 {\n  font-size: 1.6rem;\n  letter-spacing: 0;\n  line-height: 1.4;\n}\n\n@media (min-width: 40rem) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\n\nimg {\n  max-width: 100%;\n}\n\n.clearfix:after {\n  clear: both;\n  content: ' ';\n  display: table;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n/*# sourceMappingURL=milligram.css.map */", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);