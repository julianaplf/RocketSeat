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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// criei classe somente para testar o extends\nvar List =\n/*#__PURE__*/\nfunction () {\n  // construtor da classe\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  } // metodo da classe\n\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n    }\n  }, {\n    key: \"renderTodos\",\n    value: function renderTodos() {\n      var listEl = document.querySelector('#list');\n      listEl.innerHTML = '';\n      var todos = this.data;\n      /* for(var i=0; i<todos.length; i++){\r\n          var liEl = document.createElement('li');\r\n          liEl.appendChild(document.createTextNode(todos[i]));\r\n          listEl.appendChild(liEl);\r\n      } */\n\n      /* todos.map(function (item) {\r\n          var liEl = document.createElement('li');\r\n          liEl.appendChild(document.createTextNode(item));\r\n          listEl.appendChild(liEl);\r\n      }) */\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var todo = _step.value;\n          var liEl = document.createElement('li');\n          liEl.appendChild(document.createTextNode(todo));\n          listEl.appendChild(liEl);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(TodoList, _List);\n\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TodoList).apply(this, arguments));\n  }\n\n  return TodoList;\n}(List); // devo primeiro declarar a classe para somente depois chamar o construtor dela\n//pois com JS não tem Hoisting (colocar no topo funcoes e variaveis)\n\n\nvar MinhaLista = new TodoList();\n\ndocument.getElementById('novotodo').onclick = function () {\n  var inputEl = document.querySelector('#inputTodo');\n  MinhaLista.add(inputEl.value);\n  inputEl.value = '';\n  MinhaLista.renderTodos();\n}; // testando reduce pra validações, como fazemos em tela com o sf:\n\n/* var allValid = cmp.find('field').reduce(function (validSoFar, inputCmp) {\r\n    inputCmp.showHelpMessageIfInvalid();\r\n    return validSoFar && inputCmp.get('v.validity').valid;\r\n }, true); */\n\n\nvar arr = ['oi', 2, 0, undefined];\nvar resultado = arr.reduce(function (validSoFar, next) {\n  if (!next) {\n    validSoFar = false;\n  }\n\n  return validSoFar;\n}, true); //if(!resultado) alert('o array possui valores falsy')\n// testando filter pra somente retornar os valores q nao sao \"falsy\"\n\nvar filter = arr.filter(function (item) {\n  return item ? item : '';\n});\nconsole.log(filter); //arrow function\n\nvar newArr = arr.map(function (item) {\n  return item * 2;\n});\nconsole.log(newArr); //desestruturação\n\nvar usuario = {\n  nome: 'juliana',\n  idade: '33',\n  endereco: {\n    cidade: \"Recife\"\n  }\n};\nvar nome = usuario.nome,\n    cidade = usuario.endereco.cidade;\nconsole.log(nome + ' ' + cidade); //testando webpack\n\n\nconsole.log('soma: ' + Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });