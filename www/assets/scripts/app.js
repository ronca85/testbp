(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/svg4everybody/dist/svg4everybody.js
  var require_svg4everybody = __commonJS({
    "node_modules/svg4everybody/dist/svg4everybody.js"(exports, module) {
      !function(root, factory) {
        "function" == typeof define && define.amd ? (
          // AMD. Register as an anonymous module unless amdModuleId is set
          define([], function() {
            return root.svg4everybody = factory();
          })
        ) : "object" == typeof module && module.exports ? (
          // Node. Does not work with strict CommonJS, but
          // only CommonJS-like environments that support module.exports,
          // like Node.
          module.exports = factory()
        ) : root.svg4everybody = factory();
      }(exports, function() {
        function embed(parent, svg, target) {
          if (target) {
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            viewBox && svg.setAttribute("viewBox", viewBox);
            for (var clone = target.cloneNode(true); clone.childNodes.length; ) {
              fragment.appendChild(clone.firstChild);
            }
            parent.appendChild(fragment);
          }
        }
        function loadreadystatechange(xhr) {
          xhr.onreadystatechange = function() {
            if (4 === xhr.readyState) {
              var cachedDocument = xhr._cachedDocument;
              cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
              xhr._embeds.splice(0).map(function(item) {
                var target = xhr._cachedTarget[item.id];
                target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), // embed the target into the svg
                embed(item.parent, item.svg, target);
              });
            }
          }, // test the ready state change immediately
          xhr.onreadystatechange();
        }
        function svg4everybody2(rawopts) {
          function oninterval() {
            for (var index = 0; index < uses.length; ) {
              var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
              if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), svg && src) {
                if (polyfill) {
                  if (!opts.validate || opts.validate(src, svg, use)) {
                    parent.removeChild(use);
                    var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                    if (url.length) {
                      var xhr = requests[url];
                      xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                      xhr._embeds.push({
                        parent,
                        svg,
                        id
                      }), // prepare the xhr ready state change event
                      loadreadystatechange(xhr);
                    } else {
                      embed(parent, svg, document.getElementById(id));
                    }
                  } else {
                    ++index, ++numberOfSvgUseElementsToBypass;
                  }
                }
              } else {
                ++index;
              }
            }
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame2(oninterval, 67);
          }
          var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
          polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
          var requests = {}, requestAnimationFrame2 = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
          polyfill && oninterval();
        }
        function getSVGAncestor(node) {
          for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {
          }
          return svg;
        }
        return svg4everybody2;
      });
    }
  });

  // assets/scripts/utils/grid-helper.js
  var grid_helper_exports = {};
  __export(grid_helper_exports, {
    gridHelper: () => gridHelper
  });
  function gridHelper({
    gutterCssVar = GRID_HELPER_GUTTER_CSS_VAR,
    marginCssVar = GRID_HELPER_MARGIN_CSS_VAR,
    rgbaColor = GRID_HELPER_RGBA_COLOR
  } = {}) {
    const $gridContainer = document.createElement("div");
    document.body.append($gridContainer);
    setGridHelperColumns($gridContainer, rgbaColor);
    setGridHelperStyles($gridContainer, gutterCssVar, marginCssVar);
    setGridEvents($gridContainer, rgbaColor);
  }
  function setGridHelperStyles($container, gutterCssVar, marginCssVar) {
    const elStyles = $container.style;
    elStyles.zIndex = "10000";
    elStyles.position = "fixed";
    elStyles.top = "0";
    elStyles.left = "0";
    elStyles.display = "flex";
    elStyles.width = "100%";
    elStyles.height = "100%";
    elStyles.columnGap = `var(${gutterCssVar}, 0)`;
    elStyles.paddingLeft = `var(${marginCssVar}, 0)`;
    elStyles.paddingRight = `var(${marginCssVar}, 0)`;
    elStyles.pointerEvents = "none";
    elStyles.visibility = "hidden";
  }
  function setGridHelperColumns($container, rgbaColor) {
    $container.innerHTML = "";
    const columns = Number(
      window.getComputedStyle($container).getPropertyValue("--grid-columns")
    );
    let $col;
    for (var i2 = 0; i2 < columns; i2++) {
      $col = document.createElement("div");
      $col.style.flex = "1 1 0";
      $col.style.backgroundColor = rgbaColor;
      $container.appendChild($col);
    }
  }
  function setGridEvents($container, rgbaColor) {
    window.addEventListener(
      "resize",
      setGridHelperColumns($container, rgbaColor)
    );
    let ctrlDown = false;
    let isActive = false;
    document.addEventListener("keydown", (e) => {
      if (e.key == "Control") {
        ctrlDown = true;
      } else {
        if (ctrlDown && e.key == "g") {
          if (isActive) {
            $container.style.visibility = "hidden";
          } else {
            $container.style.visibility = "visible";
          }
          isActive = !isActive;
        }
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key == "Control") {
        ctrlDown = false;
      }
    });
  }
  var GRID_HELPER_GUTTER_CSS_VAR, GRID_HELPER_MARGIN_CSS_VAR, GRID_HELPER_RGBA_COLOR;
  var init_grid_helper = __esm({
    "assets/scripts/utils/grid-helper.js"() {
      GRID_HELPER_GUTTER_CSS_VAR = "--grid-gutter";
      GRID_HELPER_MARGIN_CSS_VAR = "--grid-margin";
      GRID_HELPER_RGBA_COLOR = "rgba(255, 0, 0, .1)";
    }
  });

  // node_modules/modujs/dist/main.esm.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _default = /* @__PURE__ */ function() {
    function _default4(options) {
      _classCallCheck(this, _default4);
      this.mAttr = "data-" + options.dataName;
      this.mCaptureEvents = ["mouseenter", "mouseleave"];
      this.el = options.el;
    }
    _createClass(_default4, [{
      key: "mInit",
      value: function mInit(modules) {
        var _this = this;
        this.modules = modules;
        this.mCheckEventTarget = this.mCheckEventTarget.bind(this);
        if (this.events) {
          Object.keys(this.events).forEach(function(event) {
            return _this.mAddEvent(event);
          });
        }
      }
    }, {
      key: "mUpdate",
      value: function mUpdate(modules) {
        this.modules = modules;
      }
    }, {
      key: "mDestroy",
      value: function mDestroy() {
        var _this2 = this;
        if (this.events) {
          Object.keys(this.events).forEach(function(event) {
            return _this2.mRemoveEvent(event);
          });
        }
      }
    }, {
      key: "mAddEvent",
      value: function mAddEvent(event) {
        var capture = this.mCaptureEvents.includes(event) ? true : false;
        this.el.addEventListener(event, this.mCheckEventTarget, capture);
      }
    }, {
      key: "mRemoveEvent",
      value: function mRemoveEvent(event) {
        var capture = this.mCaptureEvents.includes(event) ? true : false;
        this.el.removeEventListener(event, this.mCheckEventTarget, capture);
      }
    }, {
      key: "mCheckEventTarget",
      value: function mCheckEventTarget(e) {
        var event = this.events[e.type];
        if (typeof event === "string") {
          this[event](e);
        } else {
          var data = "[" + this.mAttr + "]";
          var target = e.target;
          if (this.mCaptureEvents.includes(e.type)) {
            if (target.matches(data)) {
              this.mCallEventMethod(e, event, target);
            }
          } else {
            while (target && target !== document) {
              if (target.matches(data)) {
                if (this.mCallEventMethod(e, event, target) != "undefined") {
                  break;
                }
              }
              target = target.parentNode;
            }
          }
        }
      }
    }, {
      key: "mCallEventMethod",
      value: function mCallEventMethod(e, event, target) {
        var name = target.getAttribute(this.mAttr);
        if (event.hasOwnProperty(name)) {
          var method = event[name];
          if (!e.hasOwnProperty("currentTarget")) {
            Object.defineProperty(e, "currentTarget", {
              value: target
            });
          }
          if (!e.hasOwnProperty("curTarget")) {
            Object.defineProperty(e, "curTarget", {
              value: target
            });
          }
          this[method](e);
        }
      }
    }, {
      key: "$",
      value: function $(query, context) {
        var classIndex = query.indexOf(".");
        var idIndex = query.indexOf("#");
        var attrIndex = query.indexOf("[");
        var indexes = [classIndex, idIndex, attrIndex].filter(function(index2) {
          return index2 != -1;
        });
        var index = false;
        var name = query;
        var more = "";
        var parent = this.el;
        if (indexes.length) {
          index = Math.min.apply(Math, _toConsumableArray(indexes));
          name = query.slice(0, index);
          more = query.slice(index);
        }
        if (_typeof(context) == "object") {
          parent = context;
        }
        return parent.querySelectorAll("[" + this.mAttr + "=" + name + "]" + more);
      }
    }, {
      key: "parent",
      value: function parent(query, context) {
        var data = "[" + this.mAttr + "=" + query + "]";
        var parent2 = context.parentNode;
        while (parent2 && parent2 !== document) {
          if (parent2.matches(data)) {
            return parent2;
          }
          parent2 = parent2.parentNode;
        }
      }
    }, {
      key: "getData",
      value: function getData(name, context) {
        var target = context || this.el;
        return target.getAttribute(this.mAttr + "-" + name);
      }
    }, {
      key: "setData",
      value: function setData(name, value, context) {
        var target = context || this.el;
        return target.setAttribute(this.mAttr + "-" + name, value);
      }
    }, {
      key: "call",
      value: function call(func, args, mod, id) {
        var _this3 = this;
        if (args && !mod) {
          mod = args;
          args = false;
        }
        if (this.modules[mod]) {
          if (id) {
            if (this.modules[mod][id]) {
              this.modules[mod][id][func](args);
            }
          } else {
            Object.keys(this.modules[mod]).forEach(function(id2) {
              _this3.modules[mod][id2][func](args);
            });
          }
        }
      }
    }, {
      key: "on",
      value: function on(e, mod, func, id) {
        var _this4 = this;
        if (this.modules[mod]) {
          if (id) {
            this.modules[mod][id].el.addEventListener(e, function(o2) {
              return func(o2);
            });
          } else {
            Object.keys(this.modules[mod]).forEach(function(i2) {
              _this4.modules[mod][i2].el.addEventListener(e, function(o2) {
                return func(o2);
              });
            });
          }
        }
      }
    }, {
      key: "init",
      value: function init2() {
      }
    }, {
      key: "destroy",
      value: function destroy() {
      }
    }]);
    return _default4;
  }();
  var _default$1 = /* @__PURE__ */ function() {
    function _default4(options) {
      _classCallCheck(this, _default4);
      this.app;
      this.modules = options.modules;
      this.currentModules = {};
      this.activeModules = {};
      this.newModules = {};
      this.moduleId = 0;
    }
    _createClass(_default4, [{
      key: "init",
      value: function init2(app2, scope) {
        var _this = this;
        var container = scope || document;
        var elements = container.querySelectorAll("*");
        if (app2 && !this.app) {
          this.app = app2;
        }
        this.activeModules["app"] = {
          "app": this.app
        };
        elements.forEach(function(el) {
          Array.from(el.attributes).forEach(function(i2) {
            if (i2.name.startsWith("data-module")) {
              var moduleExists = false;
              var dataName = i2.name.split("-").splice(2);
              var moduleName = _this.toCamel(dataName);
              if (_this.modules[moduleName]) {
                moduleExists = true;
              } else if (_this.modules[_this.toUpper(moduleName)]) {
                moduleName = _this.toUpper(moduleName);
                moduleExists = true;
              }
              if (moduleExists) {
                var options = {
                  el,
                  name: moduleName,
                  dataName: dataName.join("-")
                };
                var module = new _this.modules[moduleName](options);
                var id = i2.value;
                if (!id) {
                  _this.moduleId++;
                  id = "m" + _this.moduleId;
                  el.setAttribute(i2.name, id);
                }
                _this.addActiveModule(moduleName, id, module);
                var moduleId = moduleName + "-" + id;
                if (scope) {
                  _this.newModules[moduleId] = module;
                } else {
                  _this.currentModules[moduleId] = module;
                }
              }
            }
          });
        });
        Object.entries(this.currentModules).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], module = _ref2[1];
          if (scope) {
            var split = id.split("-");
            var moduleName = split.shift();
            var moduleId = split.pop();
            _this.addActiveModule(moduleName, moduleId, module);
          } else {
            _this.initModule(module);
          }
        });
      }
    }, {
      key: "initModule",
      value: function initModule(module) {
        module.mInit(this.activeModules);
        module.init();
      }
    }, {
      key: "addActiveModule",
      value: function addActiveModule(name, id, module) {
        if (this.activeModules[name]) {
          Object.assign(this.activeModules[name], _defineProperty({}, id, module));
        } else {
          this.activeModules[name] = _defineProperty({}, id, module);
        }
      }
    }, {
      key: "update",
      value: function update(scope) {
        var _this2 = this;
        this.init(this.app, scope);
        Object.entries(this.currentModules).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], module = _ref4[1];
          module.mUpdate(_this2.activeModules);
        });
        Object.entries(this.newModules).forEach(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), id = _ref6[0], module = _ref6[1];
          _this2.initModule(module);
        });
        Object.assign(this.currentModules, this.newModules);
      }
    }, {
      key: "destroy",
      value: function destroy(scope) {
        if (scope) {
          this.destroyScope(scope);
        } else {
          this.destroyModules();
        }
      }
    }, {
      key: "destroyScope",
      value: function destroyScope(scope) {
        var _this3 = this;
        var elements = scope.querySelectorAll("*");
        elements.forEach(function(el) {
          Array.from(el.attributes).forEach(function(i2) {
            if (i2.name.startsWith("data-module")) {
              var id = i2.value;
              var dataName = i2.name.split("-").splice(2);
              var moduleName = _this3.toCamel(dataName) + "-" + id;
              var moduleExists = false;
              if (_this3.currentModules[moduleName]) {
                moduleExists = true;
              } else if (_this3.currentModules[_this3.toUpper(moduleName)]) {
                moduleName = _this3.toUpper(moduleName);
                moduleExists = true;
              }
              if (moduleExists) {
                _this3.destroyModule(_this3.currentModules[moduleName]);
                delete _this3.currentModules[moduleName];
              }
            }
          });
        });
        this.activeModules = {};
        this.newModules = {};
      }
    }, {
      key: "destroyModules",
      value: function destroyModules() {
        var _this4 = this;
        Object.entries(this.currentModules).forEach(function(_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2), id = _ref8[0], module = _ref8[1];
          _this4.destroyModule(module);
        });
        this.currentModules = [];
      }
    }, {
      key: "destroyModule",
      value: function destroyModule(module) {
        module.mDestroy();
        module.destroy();
      }
    }, {
      key: "toCamel",
      value: function toCamel(arr) {
        var _this5 = this;
        return arr.reduce(function(a, b) {
          return a + _this5.toUpper(b);
        });
      }
    }, {
      key: "toUpper",
      value: function toUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }]);
    return _default4;
  }();
  var main_esm_default = _default$1;

  // assets/scripts/modules.js
  var modules_exports = {};
  __export(modules_exports, {
    Example: () => Example_default,
    Load: () => Load_default,
    Scroll: () => Scroll_default
  });

  // assets/scripts/modules/Example.js
  var Example_default = class extends _default {
    constructor(m) {
      super(m);
    }
    init() {
    }
    onFontsLoaded(fonts) {
    }
  };

  // node_modules/modularload/dist/main.esm.js
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _slicedToArray2(arr, i2) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit2(arr, i2) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray2(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray2(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray2(o2, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _default2 = /* @__PURE__ */ function() {
    function _default4(options) {
      _classCallCheck2(this, _default4);
      this.defaults = {
        name: "load",
        loadingClass: "is-loading",
        loadedClass: "is-loaded",
        readyClass: "is-ready",
        transitionsPrefix: "is-",
        transitionsHistory: true,
        enterDelay: 0,
        exitDelay: 0,
        loadedDelay: 0,
        isLoaded: false,
        isEntered: false,
        isUrl: false,
        transitionContainer: null,
        popstateIgnore: false
      };
      Object.assign(this, this.defaults, options);
      this.options = options;
      this.namespace = "modular";
      this.html = document.documentElement;
      this.href = window.location.href;
      this.container = "data-" + this.name + "-container";
      this.subContainer = false;
      this.prevTransition = null;
      this.loadAttributes = ["src", "srcset", "style", "href"];
      this.isInserted = false;
      this.isLoading = false;
      this.enterTimeout = false;
      this.controller = new AbortController();
      this.classContainer = this.html;
      this.isChrome = navigator.userAgent.indexOf("Chrome") != -1 ? true : false;
      this.init();
    }
    _createClass2(_default4, [{
      key: "init",
      value: function init2() {
        var _this = this;
        window.addEventListener("popstate", function(e) {
          return _this.checkState(e);
        }, false);
        this.html.addEventListener("click", function(e) {
          return _this.checkClick(e);
        }, false);
        this.loadEls(document);
      }
    }, {
      key: "checkClick",
      value: function checkClick(e) {
        if (!e.ctrlKey && !e.metaKey) {
          var target = e.target;
          while (target && target !== document) {
            if (target.matches("a") && target.getAttribute("download") == null) {
              var href = target.getAttribute("href");
              if (!href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
                e.preventDefault();
                this.reset();
                this.getClickOptions(target);
              }
              break;
            }
            target = target.parentNode;
          }
        }
      }
    }, {
      key: "checkState",
      value: function checkState() {
        if (typeof this.popstateIgnore === "string" && window.location.href.indexOf(this.popstateIgnore) > -1) {
          return;
        }
        this.reset();
        this.getStateOptions();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.isLoading) {
          this.controller.abort();
          this.isLoading = false;
          this.controller = new AbortController();
        }
        window.clearTimeout(this.enterTimeout);
        if (this.isInserted) {
          this.removeContainer();
        }
        this.classContainer = this.html;
        Object.assign(this, this.defaults, this.options);
      }
    }, {
      key: "getClickOptions",
      value: function getClickOptions(link) {
        this.transition = link.getAttribute("data-" + this.name);
        this.isUrl = link.getAttribute("data-" + this.name + "-url");
        var href = link.getAttribute("href");
        var target = link.getAttribute("target");
        if (target == "_blank") {
          window.open(href, "_blank");
          return;
        }
        if (this.transition == "false") {
          window.location = href;
          return;
        }
        this.setOptions(href, true);
      }
    }, {
      key: "getStateOptions",
      value: function getStateOptions() {
        if (this.transitionsHistory) {
          this.transition = history.state;
        } else {
          this.transition = false;
        }
        var href = window.location.href;
        this.setOptions(href);
      }
    }, {
      key: "goTo",
      value: function goTo(href, transition, isUrl) {
        this.reset();
        this.transition = transition;
        this.isUrl = isUrl;
        this.setOptions(href, true);
      }
    }, {
      key: "setOptions",
      value: function setOptions(href, push) {
        var container = "[" + this.container + "]";
        var oldContainer;
        if (this.transition && this.transition != "true") {
          this.transitionContainer = "[" + this.container + '="' + this.transition + '"]';
          this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass;
          this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass;
          this.readyClass = this.transitions[this.transition].readyClass || this.readyClass;
          this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix;
          this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay;
          this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay;
          this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay;
          oldContainer = document.querySelector(this.transitionContainer);
        }
        if (oldContainer) {
          container = this.transitionContainer;
          this.oldContainer = oldContainer;
          this.classContainer = this.oldContainer.parentNode;
          if (!this.subContainer) {
            history.replaceState(this.transition, null, this.href);
          }
          this.subContainer = true;
        } else {
          this.oldContainer = document.querySelector(container);
          if (this.subContainer) {
            history.replaceState(this.prevTransition, null, this.href);
          }
          this.subContainer = false;
        }
        this.href = href;
        this.parentContainer = this.oldContainer.parentNode;
        if (this.isUrl === "" || this.isUrl != null && this.isUrl != "false" && this.isUrl != false) {
          history.pushState(this.transition, null, href);
        } else {
          this.oldContainer.classList.add("is-old");
          this.setLoading();
          this.startEnterDelay();
          this.loadHref(href, container, push);
        }
      }
    }, {
      key: "setLoading",
      value: function setLoading() {
        this.classContainer.classList.remove(this.loadedClass, this.readyClass);
        this.classContainer.classList.add(this.loadingClass);
        this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition);
        if (this.transition) {
          this.classContainer.classList.add(this.transitionsPrefix + this.transition);
        }
        if (!this.subContainer) {
          this.prevTransition = this.transition;
        }
        var loadingEvent = new Event(this.namespace + "loading");
        window.dispatchEvent(loadingEvent);
      }
    }, {
      key: "startEnterDelay",
      value: function startEnterDelay() {
        var _this2 = this;
        this.enterTimeout = window.setTimeout(function() {
          _this2.isEntered = true;
          if (_this2.isLoaded) {
            _this2.transitionContainers();
          }
        }, this.enterDelay);
      }
    }, {
      key: "loadHref",
      value: function loadHref(href, container, push) {
        var _this3 = this;
        this.isLoading = true;
        var signal = this.controller.signal;
        fetch(href, {
          signal
        }).then(function(response) {
          return response.text();
        }).then(function(data) {
          if (push) {
            history.pushState(_this3.transition, null, href);
          }
          var parser = new DOMParser();
          _this3.data = parser.parseFromString(data, "text/html");
          _this3.newContainer = _this3.data.querySelector(container);
          _this3.newContainer.classList.add("is-new");
          _this3.parentNewContainer = _this3.newContainer.parentNode;
          _this3.hideContainer();
          _this3.parentContainer.insertBefore(_this3.newContainer, _this3.oldContainer);
          _this3.isInserted = true;
          _this3.setSvgs();
          _this3.isLoaded = true;
          if (_this3.isEntered) {
            _this3.transitionContainers();
          }
          _this3.loadEls(_this3.newContainer);
          _this3.isLoading = false;
        })["catch"](function(err) {
          window.location = href;
        });
      }
    }, {
      key: "transitionContainers",
      value: function transitionContainers() {
        var _this4 = this;
        this.setAttributes();
        this.showContainer();
        this.setLoaded();
        setTimeout(function() {
          _this4.removeContainer();
          _this4.setReady();
        }, this.exitDelay);
      }
    }, {
      key: "setSvgs",
      value: function setSvgs() {
        if (this.isChrome) {
          var svgs = this.newContainer.querySelectorAll("use");
          if (svgs.length) {
            svgs.forEach(function(svg) {
              var xhref = svg.getAttribute("xlink:href");
              if (xhref) {
                svg.parentNode.innerHTML = '<use xlink:href="' + xhref + '"></use>';
              } else {
                var href = svg.getAttribute("href");
                if (href)
                  svg.parentNode.innerHTML = '<use href="' + href + '"></use>';
              }
            });
          }
        }
      }
    }, {
      key: "setAttributes",
      value: function setAttributes() {
        var _this5 = this;
        var title = this.data.getElementsByTagName("title")[0];
        var newDesc = this.data.head.querySelector('meta[name="description"]');
        var oldDesc = document.head.querySelector('meta[name="description"]');
        var container;
        var newContainer;
        if (this.subContainer) {
          newContainer = this.parentNewContainer;
          container = document.querySelector(this.transitionContainer).parentNode;
        } else {
          newContainer = this.data.querySelector("html");
          container = document.querySelector("html");
        }
        var datas = Object.assign({}, newContainer.dataset);
        if (title)
          document.title = title.innerText;
        if (oldDesc && newDesc)
          oldDesc.setAttribute("content", newDesc.getAttribute("content"));
        if (datas) {
          Object.entries(datas).forEach(function(_ref) {
            var _ref2 = _slicedToArray2(_ref, 2), key = _ref2[0], val = _ref2[1];
            container.setAttribute("data-" + _this5.toDash(key), val);
          });
        }
      }
    }, {
      key: "toDash",
      value: function toDash(str) {
        return str.split(/(?=[A-Z])/).join("-").toLowerCase();
      }
    }, {
      key: "hideContainer",
      value: function hideContainer() {
        this.newContainer.style.visibility = "hidden";
        this.newContainer.style.height = 0;
        this.newContainer.style.overflow = "hidden";
      }
    }, {
      key: "showContainer",
      value: function showContainer() {
        this.newContainer.style.visibility = "";
        this.newContainer.style.height = "";
        this.newContainer.style.overflow = "";
      }
    }, {
      key: "loadEls",
      value: function loadEls(container) {
        var _this6 = this;
        var promises = [];
        this.loadAttributes.forEach(function(attr) {
          var data = "data-" + _this6.name + "-" + attr;
          var els = container.querySelectorAll("[" + data + "]");
          if (els.length) {
            els.forEach(function(el) {
              var elData = el.getAttribute(data);
              el.setAttribute(attr, elData);
              if (attr == "src" || attr == "srcset") {
                var promise = new Promise(function(resolve) {
                  el.onload = function() {
                    return resolve(el);
                  };
                });
                promises.push(promise);
              }
            });
          }
        });
        Promise.all(promises).then(function(val) {
          var imagesEvent = new Event(_this6.namespace + "images");
          window.dispatchEvent(imagesEvent);
        });
      }
    }, {
      key: "setLoaded",
      value: function setLoaded() {
        var _this7 = this;
        this.classContainer.classList.remove(this.loadingClass);
        setTimeout(function() {
          _this7.classContainer.classList.add(_this7.loadedClass);
        }, this.loadedDelay);
        var loadedEvent = new Event(this.namespace + "loaded");
        window.dispatchEvent(loadedEvent);
      }
    }, {
      key: "removeContainer",
      value: function removeContainer() {
        this.parentContainer.removeChild(this.oldContainer);
        this.newContainer.classList.remove("is-new");
        this.isInserted = false;
      }
    }, {
      key: "setReady",
      value: function setReady() {
        this.classContainer.classList.add(this.readyClass);
        var readyEvent = new Event(this.namespace + "ready");
        window.dispatchEvent(readyEvent);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        var _this8 = this;
        window.addEventListener(this.namespace + event, function() {
          switch (event) {
            case "loading":
              return func(_this8.transition, _this8.oldContainer);
            case "loaded":
              return func(_this8.transition, _this8.oldContainer, _this8.newContainer);
            case "ready":
              return func(_this8.transition, _this8.newContainer);
            default:
              return func();
          }
        }, false);
      }
    }]);
    return _default4;
  }();
  var main_esm_default2 = _default2;

  // assets/scripts/modules/Load.js
  var Load_default = class extends _default {
    constructor(m) {
      super(m);
    }
    init() {
      const load = new main_esm_default2({
        enterDelay: 0,
        transitions: {
          customTransition: {}
        }
      });
      load.on("loaded", (transition, oldContainer, newContainer) => {
        this.call("destroy", oldContainer, "app");
        this.call("update", newContainer, "app");
      });
    }
  };

  // node_modules/loconative-scroll/dist/loconative-scroll.esm.js
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  function _setPrototypeOf(o2, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p2) {
      o3.__proto__ = p2;
      return o3;
    };
    return _setPrototypeOf(o2, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target2, property2, receiver2) {
        var base = _superPropBase(target2, property2);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.get) {
          return desc.get.call(receiver2);
        }
        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
  function _slicedToArray3(arr, i2) {
    return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i2) || _unsupportedIterableToArray3(arr, i2) || _nonIterableRest3();
  }
  function _arrayWithHoles3(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit3(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray3(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray3(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray3(o2, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var defaults = {
    el: document.querySelector("body"),
    wrapper: window,
    name: "scroll",
    offset: [0, 0],
    repeat: false,
    smooth: true,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: "vertical",
    gestureDirection: "vertical",
    reloadOnContextChange: true,
    "class": "is-inview",
    scrollingClass: "has-scroll-scrolling",
    smoothClass: "has-scroll-smooth",
    initClass: "has-scroll-init",
    duration: 1.2,
    easing: function easing(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    // https://easings.net
    scrollFromAnywhere: false,
    touchMultiplier: 3,
    resetNativeScroll: true,
    tablet: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "horizontal",
      breakpoint: 1024
    },
    smartphone: {
      smooth: false,
      direction: "vertical",
      gestureDirection: "vertical"
    }
  };
  var _default3 = /* @__PURE__ */ function() {
    function _default4() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck3(this, _default4);
      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && window.innerWidth >= this.tablet.breakpoint;
      if (this.isMobile) {
        this.smooth = this.smartphone.smooth;
      }
      if (this.isTablet) {
        this.smooth = this.tablet.smooth;
      }
      this.namespace = "locomotive";
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.onScroll = this.onScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        delta: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };
      if (this.isMobile) {
        if (this.isTablet) {
          this.context = "tablet";
        } else {
          this.context = "smartphone";
        }
      } else {
        this.context = "desktop";
      }
      if (this.isMobile)
        this.direction = this[this.context].direction;
      if (this.isMobile)
        this.gestureDirection = this[this.context].gestureDirection;
      if (this.direction === "horizontal") {
        this.directionAxis = "x";
      } else {
        this.directionAxis = "y";
      }
      this.instance.direction = null;
      this.instance.speed = 0;
      this.html.classList.add(this.initClass);
      window.addEventListener("resize", this.checkResize, false);
    }
    _createClass3(_default4, [{
      key: "init",
      value: function init2() {
        this.initEvents();
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;
        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function() {
            _this.resize();
            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {
      }
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange)
          return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;
        if (this.isMobile) {
          if (this.isTablet) {
            this.context = "tablet";
          } else {
            this.context = "smartphone";
          }
        } else {
          this.context = "desktop";
        }
        if (oldContext != this.context) {
          var oldSmooth = oldContext == "desktop" ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == "desktop" ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth)
            window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;
        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function(el) {
          el.addEventListener("click", _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute("href"), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {
      }
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;
        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function(_ref) {
          var _ref2 = _slicedToArray3(_ref, 2), i2 = _ref2[0], el = _ref2[1];
          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === "horizontal") {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i2);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i2);
              }
            }
          }
          if (el && el.inView) {
            if (_this3.direction === "horizontal") {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i2);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i2);
              }
            }
          }
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i2) {
        this.els[i2].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i2] = current;
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "enter");
          if (!current.repeat) {
            this.els[i2].call = false;
          }
        }
      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i2) {
        var _this4 = this;
        this.els[i2].inView = false;
        Object.keys(this.currentElements).forEach(function(el) {
          el === i2 && delete _this4.currentElements[el];
        });
        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, "exit");
        }
        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(",").map(function(item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1)
          this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + "call");
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + "scroll");
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }
        var list = this.listeners[event];
        list.push(func);
        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }
        if (event === "call") {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event])
          return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0)
          return;
        list.splice(index, 1);
        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;
        var name = event.type.replace(this.namespace, "");
        var list = this.listeners[name];
        if (!list || list.length === 0)
          return;
        list.forEach(function(func) {
          switch (name) {
            case "scroll":
              return func(_this5.instance);
            case "call":
              return func(_this5.callValue, _this5.callWay, _this5.callObj);
            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;
        window.removeEventListener("resize", this.checkResize, false);
        Object.keys(this.listeners).forEach(function(event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function(el) {
          el.removeEventListener("click", _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);
    return _default4;
  }();
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
      function polyfill() {
        var w = window;
        var d = document;
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        }
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        };
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
          return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        function shouldBailOut(firstArg) {
          if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
            return true;
          }
          if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
            return false;
          }
          throw new TypeError(
            "behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior."
          );
        }
        function hasScrollableSpace(el, axis) {
          if (axis === "Y") {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }
          if (axis === "X") {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
          return overflowValue === "auto" || overflowValue === "scroll";
        }
        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
          var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
          return isScrollableY || isScrollableX;
        }
        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }
          return el;
        }
        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME;
          elapsed = elapsed > 1 ? 1 : elapsed;
          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY);
          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now();
          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          }
          step({
            scrollable,
            method,
            startTime,
            startX,
            startY,
            x,
            y
          });
        }
        w.scroll = w.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
              w,
              arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset,
              // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset
            );
            return;
          }
          smoothScroll.call(
            w,
            d.body,
            arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset,
            arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset
          );
        };
        w.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
              w,
              arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0,
              arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0
            );
            return;
          }
          smoothScroll.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
          );
        };
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === "number" && arguments[1] === void 0) {
              throw new SyntaxError("Value could not be converted");
            }
            original.elementScroll.call(
              this,
              // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft,
              // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop
            );
            return;
          }
          var left = arguments[0].left;
          var top = arguments[0].top;
          smoothScroll.call(
            this,
            this,
            typeof left === "undefined" ? this.scrollLeft : ~~left,
            typeof top === "undefined" ? this.scrollTop : ~~top
          );
        };
        Element.prototype.scrollBy = function() {
          if (arguments[0] === void 0) {
            return;
          }
          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
              this,
              arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
              arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
            );
            return;
          }
          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        };
        Element.prototype.scrollIntoView = function() {
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
              this,
              arguments[0] === void 0 ? true : arguments[0]
            );
            return;
          }
          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();
          if (scrollableParent !== d.body) {
            smoothScroll.call(
              this,
              scrollableParent,
              scrollableParent.scrollLeft + clientRects.left - parentRects.left,
              scrollableParent.scrollTop + clientRects.top - parentRects.top
            );
            if (w.getComputedStyle(scrollableParent).position !== "fixed") {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: "smooth"
              });
            }
          } else {
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: "smooth"
            });
          }
        };
      }
      {
        module.exports = { polyfill };
      }
    })();
  });
  var smoothscroll_1 = smoothscroll.polyfill;
  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle)
      return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
    }
    return translate;
  }
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }
  function E() {
  }
  E.prototype = {
    on: function(name, callback, ctx) {
      var e = this.e || (this.e = {});
      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx
      });
      return this;
    },
    once: function(name, callback, ctx) {
      var self2 = this;
      function listener() {
        self2.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },
    emit: function(name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i2 = 0;
      var len = evtArr.length;
      for (i2; i2 < len; i2++) {
        evtArr[i2].fn.apply(evtArr[i2].ctx, data);
      }
      return this;
    },
    off: function(name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];
      if (evts && callback) {
        for (var i2 = 0, len = evts.length; i2 < len; i2++) {
          if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
            liveEvents.push(evts[i2]);
        }
      }
      liveEvents.length ? e[name] = liveEvents : delete e[name];
      return this;
    }
  };
  var tinyEmitter = E;
  var TinyEmitter = E;
  tinyEmitter.TinyEmitter = TinyEmitter;
  var virtualscroll = createCommonjsModule(function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(commonjsGlobal, function() {
      var e = 0;
      function t(t2) {
        return "__private_" + e++ + "_" + t2;
      }
      function i2(e2, t2) {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new TypeError("attempted to use private field on non-instance");
        return e2;
      }
      function n2() {
      }
      n2.prototype = { on: function(e2, t2, i3) {
        var n3 = this.e || (this.e = {});
        return (n3[e2] || (n3[e2] = [])).push({ fn: t2, ctx: i3 }), this;
      }, once: function(e2, t2, i3) {
        var n3 = this;
        function o3() {
          n3.off(e2, o3), t2.apply(i3, arguments);
        }
        return o3._ = t2, this.on(e2, o3, i3);
      }, emit: function(e2) {
        for (var t2 = [].slice.call(arguments, 1), i3 = ((this.e || (this.e = {}))[e2] || []).slice(), n3 = 0, o3 = i3.length; n3 < o3; n3++)
          i3[n3].fn.apply(i3[n3].ctx, t2);
        return this;
      }, off: function(e2, t2) {
        var i3 = this.e || (this.e = {}), n3 = i3[e2], o3 = [];
        if (n3 && t2)
          for (var s3 = 0, h2 = n3.length; s3 < h2; s3++)
            n3[s3].fn !== t2 && n3[s3].fn._ !== t2 && o3.push(n3[s3]);
        return o3.length ? i3[e2] = o3 : delete i3[e2], this;
      } };
      var o2 = n2;
      o2.TinyEmitter = n2;
      var s2, h = "virtualscroll", r2 = t("options"), a = t("el"), l2 = t("emitter"), u = t("event"), c2 = t("touchStart"), d = t("bodyTouchAction");
      return function() {
        function e2(e3) {
          var t3 = this;
          Object.defineProperty(this, r2, { writable: true, value: void 0 }), Object.defineProperty(this, a, { writable: true, value: void 0 }), Object.defineProperty(this, l2, { writable: true, value: void 0 }), Object.defineProperty(this, u, { writable: true, value: void 0 }), Object.defineProperty(this, c2, { writable: true, value: void 0 }), Object.defineProperty(this, d, { writable: true, value: void 0 }), this._onWheel = function(e4) {
            var n3 = i2(t3, r2)[r2], o3 = i2(t3, u)[u];
            o3.deltaX = e4.wheelDeltaX || -1 * e4.deltaX, o3.deltaY = e4.wheelDeltaY || -1 * e4.deltaY, s2.isFirefox && 1 === e4.deltaMode && (o3.deltaX *= n3.firefoxMultiplier, o3.deltaY *= n3.firefoxMultiplier), o3.deltaX *= n3.mouseMultiplier, o3.deltaY *= n3.mouseMultiplier, t3._notify(e4);
          }, this._onMouseWheel = function(e4) {
            var n3 = i2(t3, u)[u];
            n3.deltaX = e4.wheelDeltaX ? e4.wheelDeltaX : 0, n3.deltaY = e4.wheelDeltaY ? e4.wheelDeltaY : e4.wheelDelta, t3._notify(e4);
          }, this._onTouchStart = function(e4) {
            var n3 = e4.targetTouches ? e4.targetTouches[0] : e4;
            i2(t3, c2)[c2].x = n3.pageX, i2(t3, c2)[c2].y = n3.pageY;
          }, this._onTouchMove = function(e4) {
            var n3 = i2(t3, r2)[r2];
            n3.preventTouch && !e4.target.classList.contains(n3.unpreventTouchClass) && e4.preventDefault();
            var o3 = i2(t3, u)[u], s3 = e4.targetTouches ? e4.targetTouches[0] : e4;
            o3.deltaX = (s3.pageX - i2(t3, c2)[c2].x) * n3.touchMultiplier, o3.deltaY = (s3.pageY - i2(t3, c2)[c2].y) * n3.touchMultiplier, i2(t3, c2)[c2].x = s3.pageX, i2(t3, c2)[c2].y = s3.pageY, t3._notify(e4);
          }, this._onKeyDown = function(e4) {
            var n3 = i2(t3, u)[u];
            n3.deltaX = n3.deltaY = 0;
            var o3 = window.innerHeight - 40;
            switch (e4.keyCode) {
              case 37:
              case 38:
                n3.deltaY = i2(t3, r2)[r2].keyStep;
                break;
              case 39:
              case 40:
                n3.deltaY = -i2(t3, r2)[r2].keyStep;
                break;
              case 32:
                n3.deltaY = o3 * (e4.shiftKey ? 1 : -1);
                break;
              default:
                return;
            }
            t3._notify(e4);
          }, i2(this, a)[a] = window, e3 && e3.el && (i2(this, a)[a] = e3.el, delete e3.el), s2 || (s2 = { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 }), i2(this, r2)[r2] = Object.assign({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: false, unpreventTouchClass: "vs-touchmove-allowed", useKeyboard: true, useTouch: true }, e3), i2(this, l2)[l2] = new o2(), i2(this, u)[u] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, i2(this, c2)[c2] = { x: null, y: null }, i2(this, d)[d] = null, void 0 !== i2(this, r2)[r2].passive && (this.listenerOptions = { passive: i2(this, r2)[r2].passive });
        }
        var t2 = e2.prototype;
        return t2._notify = function(e3) {
          var t3 = i2(this, u)[u];
          t3.x += t3.deltaX, t3.y += t3.deltaY, i2(this, l2)[l2].emit(h, { x: t3.x, y: t3.y, deltaX: t3.deltaX, deltaY: t3.deltaY, originalEvent: e3 });
        }, t2._bind = function() {
          s2.hasWheelEvent && i2(this, a)[a].addEventListener("wheel", this._onWheel, this.listenerOptions), s2.hasMouseWheelEvent && i2(this, a)[a].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s2.hasTouch && i2(this, r2)[r2].useTouch && (i2(this, a)[a].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i2(this, a)[a].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s2.hasPointer && s2.hasTouchWin && (i2(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i2(this, a)[a].addEventListener("MSPointerDown", this._onTouchStart, true), i2(this, a)[a].addEventListener("MSPointerMove", this._onTouchMove, true)), s2.hasKeyDown && i2(this, r2)[r2].useKeyboard && document.addEventListener("keydown", this._onKeyDown);
        }, t2._unbind = function() {
          s2.hasWheelEvent && i2(this, a)[a].removeEventListener("wheel", this._onWheel), s2.hasMouseWheelEvent && i2(this, a)[a].removeEventListener("mousewheel", this._onMouseWheel), s2.hasTouch && (i2(this, a)[a].removeEventListener("touchstart", this._onTouchStart), i2(this, a)[a].removeEventListener("touchmove", this._onTouchMove)), s2.hasPointer && s2.hasTouchWin && (document.body.style.msTouchAction = i2(this, d)[d], i2(this, a)[a].removeEventListener("MSPointerDown", this._onTouchStart, true), i2(this, a)[a].removeEventListener("MSPointerMove", this._onTouchMove, true)), s2.hasKeyDown && i2(this, r2)[r2].useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
        }, t2.on = function(e3, t3) {
          i2(this, l2)[l2].on(h, e3, t3);
          var n3 = i2(this, l2)[l2].e;
          n3 && n3[h] && 1 === n3[h].length && this._bind();
        }, t2.off = function(e3, t3) {
          i2(this, l2)[l2].off(h, e3, t3);
          var n3 = i2(this, l2)[l2].e;
          (!n3[h] || n3[h].length <= 0) && this._unbind();
        }, t2.destroy = function() {
          i2(this, l2)[l2].off(), this._unbind();
        }, e2;
      }();
    });
  });
  function o(t, e) {
    for (var o2 = 0; o2 < e.length; o2++) {
      var i2 = e[o2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t, i2.key, i2);
    }
  }
  function i(t, e, i2) {
    return e && o(t.prototype, e), i2 && o(t, i2), Object.defineProperty(t, "prototype", { writable: false }), t;
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o2 = arguments[e];
        for (var i2 in o2)
          Object.prototype.hasOwnProperty.call(o2, i2) && (t[i2] = o2[i2]);
      }
      return t;
    }, r.apply(this, arguments);
  }
  function n(t, e) {
    return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, n(t, e);
  }
  var s = ["duration", "easing"];
  var l = /* @__PURE__ */ function() {
    function t() {
    }
    var e = t.prototype;
    return e.to = function(t2, e2) {
      var o2 = this, i2 = void 0 === e2 ? {} : e2, n2 = i2.duration, l2 = void 0 === n2 ? 1 : n2, c2 = i2.easing, a = void 0 === c2 ? function(t3) {
        return t3;
      } : c2, h = function(t3, e3) {
        if (null == t3)
          return {};
        var o3, i3, r2 = {}, n3 = Object.keys(t3);
        for (i3 = 0; i3 < n3.length; i3++)
          e3.indexOf(o3 = n3[i3]) >= 0 || (r2[o3] = t3[o3]);
        return r2;
      }(i2, s);
      this.target = t2, this.fromKeys = r({}, h), this.toKeys = r({}, h), this.keys = Object.keys(r({}, h)), this.keys.forEach(function(e3) {
        o2.fromKeys[e3] = t2[e3];
      }), this.duration = l2, this.easing = a, this.currentTime = 0, this.isRunning = true;
    }, e.stop = function() {
      this.isRunning = false;
    }, e.raf = function(t2) {
      var e2 = this;
      if (this.isRunning) {
        this.currentTime = Math.min(this.currentTime + 1e-3 * t2, this.duration);
        var o2 = this.easing(this.progress);
        this.keys.forEach(function(t3) {
          var i2 = e2.fromKeys[t3];
          e2.target[t3] = i2 + (e2.toKeys[t3] - i2) * o2;
        }), 1 === o2 && (this.isRunning = false);
      }
    }, i(t, [{ key: "progress", get: function() {
      return this.currentTime / this.duration;
    } }]), t;
  }();
  var c = /* @__PURE__ */ function(t) {
    var o2, r2;
    function s2(o3) {
      var i2, r3, n2, s3, c3 = void 0 === o3 ? {} : o3, a = c3.duration, h = void 0 === a ? 1.2 : a, p = c3.easing, u = void 0 === p ? function(t2) {
        return 1 === t2 ? 1 : 1 - Math.pow(2, -10 * t2);
      } : p, d = c3.smooth, f = void 0 === d || d, v = c3.smoothTouch, g = void 0 !== v && v, w = c3.touchMultiplier, m = void 0 === w ? 2 : w, y = c3.direction, b = void 0 === y ? "vertical" : y, S = c3.gestureDirection, N = void 0 === S ? "vertical" : S, O = c3.wrapper, z = void 0 === O ? window : O, R = c3.content, W = void 0 === R ? document.body : R;
      (s3 = t.call(this) || this).onWindowResize = function() {
        s3.wrapperWidth = window.innerWidth, s3.wrapperHeight = window.innerHeight;
      }, s3.onWrapperResize = function(t2) {
        var e = t2[0];
        if (e) {
          var o4 = e.contentRect;
          s3.wrapperWidth = o4.width, s3.wrapperHeight = o4.height;
        }
      }, s3.onContentResize = function(t2) {
        var e = t2[0];
        if (e) {
          var o4 = e.contentRect;
          s3.contentWidth = o4.width, s3.contentHeight = o4.height;
        }
      }, s3.onVirtualScroll = function(t2) {
        var e = t2.deltaY, o4 = t2.deltaX, i3 = t2.originalEvent;
        i3.ctrlKey || (s3.smooth = i3.changedTouches ? s3.smoothTouch : s3.options.smooth, s3.stopped ? i3.preventDefault() : s3.smooth && 4 !== i3.buttons && (s3.smooth && i3.preventDefault(), s3.targetScroll -= "both" === s3.gestureDirection ? o4 + e : "horizontal" === s3.gestureDirection ? o4 : e, s3.targetScroll = Math.max(0, Math.min(s3.targetScroll, s3.limit)), s3.scrollTo(s3.targetScroll)));
      }, s3.onScroll = function(t2) {
        s3.isScrolling && s3.smooth || (s3.targetScroll = s3.scroll = s3.lastScroll = s3.wrapperNode[s3.scrollProperty], s3.notify());
      }, window.lenisVersion = "0.2.9", s3.options = { duration: h, easing: u, smooth: f, smoothTouch: g, touchMultiplier: m, direction: b, gestureDirection: N, wrapper: z, content: W }, s3.duration = h, s3.easing = u, s3.smooth = f, s3.smoothTouch = g, s3.touchMultiplier = m, s3.direction = b, s3.gestureDirection = N, s3.wrapperNode = z, s3.contentNode = W, s3.wrapperNode.addEventListener("scroll", s3.onScroll), s3.wrapperNode === window ? (s3.wrapperNode.addEventListener("resize", s3.onWindowResize), s3.onWindowResize()) : (s3.wrapperHeight = s3.wrapperNode.offsetHeight, s3.wrapperWidth = s3.wrapperNode.offsetWidth, s3.wrapperObserver = new ResizeObserver(s3.onWrapperResize), s3.wrapperObserver.observe(s3.wrapperNode)), s3.contentHeight = s3.contentNode.offsetHeight, s3.contentWidth = s3.contentNode.offsetWidth, s3.contentObserver = new ResizeObserver(s3.onContentResize), s3.contentObserver.observe(s3.contentNode), s3.targetScroll = s3.scroll = s3.lastScroll = s3.wrapperNode[s3.scrollProperty], s3.animate = new l();
      var T = (null == (i2 = navigator) || null == (r3 = i2.userAgentData) ? void 0 : r3.platform) || (null == (n2 = navigator) ? void 0 : n2.platform) || "unknown";
      return s3.virtualScroll = new virtualscroll({ el: s3.wrapperNode, firefoxMultiplier: 50, mouseMultiplier: T.includes("Win") ? 1 : 0.4, useKeyboard: false, touchMultiplier: s3.touchMultiplier, useTouch: true, passive: false }), s3.virtualScroll.on(s3.onVirtualScroll), s3;
    }
    r2 = t, (o2 = s2).prototype = Object.create(r2.prototype), o2.prototype.constructor = o2, n(o2, r2);
    var c2 = s2.prototype;
    return c2.start = function() {
      this.stopped = false;
    }, c2.stop = function() {
      this.stopped = true, this.animate.stop();
    }, c2.destroy = function() {
      var t2;
      this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (t2 = this.wrapperObserver) || t2.disconnect(), this.contentObserver.disconnect();
    }, c2.raf = function(t2) {
      var e = t2 - (this.now || 0);
      this.now = t2, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(e), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll);
    }, c2.setScroll = function(t2) {
      "horizontal" === this.direction ? this.wrapperNode.scrollTo(t2, 0) : this.wrapperNode.scrollTo(0, t2);
    }, c2.notify = function() {
      this.emit("scroll", { scroll: this.scroll, limit: this.limit, velocity: this.velocity, direction: this.direction, progress: this.scroll / this.limit });
    }, c2.scrollTo = function(t2, e) {
      var o3 = void 0 === e ? {} : e, i2 = o3.offset, r3 = void 0 === i2 ? 0 : i2, n2 = o3.immediate, s3 = void 0 !== n2 && n2, l2 = o3.duration, c3 = void 0 === l2 ? this.duration : l2, a = o3.easing, h = void 0 === a ? this.easing : a;
      if (null != t2) {
        var p;
        if ("number" == typeof t2)
          p = t2;
        else if ("top" === t2 || "#top" === t2)
          p = 0;
        else if ("bottom" === t2)
          p = this.limit;
        else {
          var u;
          if ("string" == typeof t2)
            u = document.querySelector(t2);
          else {
            if (null == t2 || !t2.nodeType)
              return;
            u = t2;
          }
          if (!u)
            return;
          var d = 0;
          if (this.wrapperNode !== window) {
            var f = this.wrapperNode.getBoundingClientRect();
            d = "horizontal" === this.direction ? f.left : f.top;
          }
          var v = u.getBoundingClientRect();
          p = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - d;
        }
        this.targetScroll = p += r3, !this.smooth || s3 ? this.setScroll(this.targetScroll) : this.animate.to(this, { duration: c3, easing: h, scroll: this.targetScroll });
      }
    }, i(s2, [{ key: "scrollProperty", get: function() {
      return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop";
    } }, { key: "limit", get: function() {
      return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight;
    } }, { key: "velocity", get: function() {
      return this.scroll - this.lastScroll;
    } }]), s2;
  }(tinyEmitter);
  var _default$12 = /* @__PURE__ */ function(_Core) {
    _inherits(_default4, _Core);
    var _super = _createSuper(_default4);
    function _default4() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck3(this, _default4);
      _this = _super.call(this, options);
      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
      }
      if (window.smoothscrollPolyfill === void 0) {
        window.smoothscrollPolyfill = smoothscroll;
        window.smoothscrollPolyfill.polyfill();
      }
      return _this;
    }
    _createClass3(_default4, [{
      key: "init",
      value: function init2() {
        if (this.smooth) {
          this.html.classList.add(this.smoothClass);
          this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        }
        this.addElements();
        this.detectElements();
        this.transformElements(true, true);
        this.initContainerSize();
        this.lenis = new c({
          wrapper: this.wrapper,
          content: this.el,
          duration: this.duration,
          easing: this.easing,
          direction: this.direction,
          gestureDirection: this.gestureDirection,
          smooth: this.smooth,
          smoothTouch: this.smooth,
          touchMultiplier: this.touchMultiplier
        });
        this.bindOnScroll = this.onScroll.bind(this);
        this.lenis.on("scroll", this.bindOnScroll);
        this.lenis.on("scroll", function(_ref) {
          var scroll = _ref.scroll, limit = _ref.limit, velocity = _ref.velocity, direction = _ref.direction, progress = _ref.progress;
        });
        this.raf(0);
        _get(_getPrototypeOf(_default4.prototype), "init", this).call(this);
      }
    }, {
      key: "raf",
      value: function raf(time) {
        var _this2 = this;
        this.lenis.raf(time);
        this.rafInstance = requestAnimationFrame(function() {
          return _this2.raf(Date.now());
        });
      }
    }, {
      key: "onScroll",
      value: function onScroll(_ref2) {
        var _this3 = this;
        var scroll = _ref2.scroll, velocity = _ref2.velocity;
        if (scroll > this.instance.scroll[this.directionAxis]) {
          if (this.instance.direction !== "down") {
            this.instance.direction = "down";
          }
        } else if (scroll < this.instance.scroll[this.directionAxis]) {
          if (this.instance.direction !== "up") {
            this.instance.direction = "up";
          }
        }
        this.instance.scroll[this.directionAxis] = scroll;
        this.instance.speed = velocity;
        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function() {
              _this3.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }
        _get(_getPrototypeOf(_default4.prototype), "onScroll", this).call(this);
        this.transformElements();
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.checkContext();
        this.initContainerSize();
        if (Object.entries(this.els).length) {
          this.update();
        }
      }
    }, {
      key: "initContainerSize",
      value: function initContainerSize() {
        if (this.direction === "horizontal") {
          var elWidth = 0;
          for (var childIndex = 0; childIndex < this.el.children.length; childIndex++) {
            var child = this.el.children[childIndex];
            elWidth += child.getBoundingClientRect().width;
          }
          this.el.style.setProperty("--scrollContainerWidth", elWidth + "px");
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this4 = this;
        this.els = {};
        this.parallaxElements = {};
        var els = this.el.querySelectorAll("[data-" + this.name + "]");
        els.forEach(function(el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this4.name + "Class"] || _this4["class"];
          var id = typeof el.dataset[_this4.name + "Id"] === "string" ? el.dataset[_this4.name + "Id"] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this4.name + "Offset"] === "string" ? el.dataset[_this4.name + "Offset"].split(",") : _this4.offset;
          var repeat = el.dataset[_this4.name + "Repeat"];
          var call = el.dataset[_this4.name + "Call"];
          var position = el.dataset[_this4.name + "Position"];
          var delay = el.dataset[_this4.name + "Delay"];
          var direction = el.dataset[_this4.name + "Direction"];
          var sticky = typeof el.dataset[_this4.name + "Sticky"] === "string";
          if (sticky) {
            console.warn("You use data-scroll-sticky, it's not recommended for performances. Please adapt your code and play with position:sticky.");
          }
          var target = el.dataset[_this4.name + "Target"];
          var targetEl;
          if (target !== void 0) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }
          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this4.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this4.instance.scroll.x - getTranslate(targetEl).x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this4.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this4.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }
          if (repeat == "false") {
            repeat = false;
          } else if (repeat != void 0) {
            repeat = true;
          } else {
            repeat = _this4.repeat;
          }
          var speed = el.dataset[_this4.name + "Speed"] ? parseFloat(el.dataset[_this4.name + "Speed"]) / 10 : false;
          if (speed) {
            offset = 0;
          }
          var relativeOffset = [0, 0];
          if (offset) {
            if (_this4.direction === "horizontal") {
              for (var i2 = 0; i2 < offset.length; i2++) {
                if (typeof offset[i2] == "string") {
                  if (offset[i2].includes("%")) {
                    relativeOffset[i2] = parseInt(offset[i2].replace("%", "") * _this4.windowWidth / 100);
                  } else {
                    relativeOffset[i2] = parseInt(offset[i2]);
                  }
                } else {
                  relativeOffset[i2] = offset[i2];
                }
              }
              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i2 = 0; i2 < offset.length; i2++) {
                if (typeof offset[i2] == "string") {
                  if (offset[i2].includes("%")) {
                    relativeOffset[i2] = parseInt(offset[i2].replace("%", "") * _this4.windowHeight / 100);
                  } else {
                    relativeOffset[i2] = parseInt(offset[i2]);
                  }
                } else {
                  relativeOffset[i2] = offset[i2];
                }
              }
              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }
          var mappedEl = {
            el,
            targetEl,
            id,
            "class": cl,
            top,
            bottom,
            middle,
            left,
            right,
            position,
            delay,
            direction,
            offset,
            progress: 0,
            repeat,
            inView: false,
            call,
            speed,
            sticky
          };
          _this4.els[id] = mappedEl;
          if (el.classList.contains(cl)) {
            _this4.setInView(_this4.els[id], id);
          }
          if (speed !== false || sticky) {
            _this4.parallaxElements[id] = mappedEl;
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this5 = this;
        Object.entries(this.els).forEach(function(_ref3) {
          var _ref4 = _slicedToArray3(_ref3, 2), i2 = _ref4[0], el = _ref4[1];
          var top = el.targetEl.getBoundingClientRect().top + _this5.instance.scroll.y;
          var bottom = top + el.targetEl.offsetHeight;
          var relativeOffset = _this5.getRelativeOffset(el.offset);
          _this5.els[i2].top = top + relativeOffset[0];
          _this5.els[i2].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform2;
        if (!delay) {
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
        } else {
          var start = getTranslate(element);
          var lerpX = lerp(start.x, x, delay);
          var lerpY = lerp(start.y, y, delay);
          transform2 = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
        }
        element.style.webkitTransform = transform2;
        element.style.msTransform = transform2;
        element.style.transform = transform2;
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this6 = this;
        var setAllElements = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!this.smooth)
          return;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function(_ref5) {
          var _ref6 = _slicedToArray3(_ref5, 2), i2 = _ref6[0], current = _ref6[1];
          var transformDistance = false;
          if (isForced) {
            transformDistance = 0;
          }
          if (current.inView || setAllElements) {
            switch (current.position) {
              case "top":
                transformDistance = _this6.instance.scroll[_this6.directionAxis] * -current.speed;
                break;
              case "elementTop":
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;
              case "bottom":
                transformDistance = (_this6.instance.limit[_this6.directionAxis] - scrollBottom + _this6.windowHeight) * current.speed;
                break;
              case "left":
                transformDistance = _this6.instance.scroll[_this6.directionAxis] * -current.speed;
                break;
              case "elementLeft":
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;
              case "right":
                transformDistance = (_this6.instance.limit[_this6.directionAxis] - scrollRight + _this6.windowHeight) * current.speed;
                break;
              default:
                transformDistance = (scrollMiddle[_this6.directionAxis] - current.middle[_this6.directionAxis]) * -current.speed;
                break;
            }
          }
          if (current.sticky) {
            if (current.inView) {
              if (_this6.direction === "horizontal") {
                transformDistance = _this6.instance.scroll.x - current.left + _this6.windowWidth;
              } else {
                transformDistance = _this6.instance.scroll.y - current.top + _this6.windowHeight;
              }
            } else {
              if (_this6.direction === "horizontal") {
                if (_this6.instance.scroll.x < current.left - _this6.windowWidth && _this6.instance.scroll.x < current.left - _this6.windowWidth / 2) {
                  transformDistance = 0;
                } else if (_this6.instance.scroll.x > current.right && _this6.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + _this6.windowWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this6.instance.scroll.y < current.top - _this6.windowHeight && _this6.instance.scroll.y < current.top - _this6.windowHeight / 2) {
                  transformDistance = 0;
                } else if (_this6.instance.scroll.y > current.bottom && _this6.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + _this6.windowHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }
          if (transformDistance !== false) {
            if (current.direction === "horizontal" || _this6.direction === "horizontal" && current.direction !== "vertical") {
              _this6.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this6.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];
        if (offset) {
          for (var i2 = 0; i2 < offset.length; i2++) {
            if (typeof offset[i2] == "string") {
              if (offset[i2].includes("%")) {
                relativeOffset[i2] = parseInt(offset[i2].replace("%", "") * this.windowHeight / 100);
              } else {
                relativeOffset[i2] = parseInt(offset[i2]);
              }
            } else {
              relativeOffset[i2] = offset[i2];
            }
          }
        }
        return relativeOffset;
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target - node, string, "top", "bottom", int - The DOM element we want to scroll to
       *          options {object} - Options object for additional settings.
       * @return {void}
       */
    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var offset = parseInt(options.offset) || 0;
        var duration = options.duration || 1;
        this.lenis.scrollTo(target, {
          offset,
          immediate: options.immediate,
          duration
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
        this.transformElements(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        if (this.lenis != void 0) {
          this.lenis.start();
        }
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        if (this.lenis != void 0) {
          this.lenis.stop();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default4.prototype), "destroy", this).call(this);
        cancelAnimationFrame(this.rafInstance);
      }
    }]);
    return _default4;
  }(_default3);
  var Main = /* @__PURE__ */ function() {
    function Main2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck3(this, Main2);
      this.options = options;
      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone)
        Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet)
        Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible");
      if (!this.tablet.smooth && this.tablet.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)");
      if (!this.smartphone.smooth && this.smartphone.direction == "horizontal")
        console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)");
      this.init();
    }
    _createClass3(Main2, [{
      key: "init",
      value: function init2() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.smooth = true;
        } else {
          this.smooth = false;
        }
        this.scroll = new _default$12(this.options);
        this.scroll.init();
        if (window.location.hash) {
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id);
          if (target)
            this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);
    return Main2;
  }();
  var loconative_scroll_esm_default = Main;

  // assets/scripts/modules/Scroll.js
  var Scroll_default = class extends _default {
    constructor(m) {
      super(m);
    }
    init() {
      this.scroll = new loconative_scroll_esm_default({
        el: this.el,
        mouseMultiplier: 0.5,
        duration: 1.2
      });
      this.scroll.on("scroll", (args) => {
        if (typeof args.currentElements["scene"] === "object") {
          let currentElement = args.currentElements["scene"];
          this.call("onScroll", {
            currentElement,
            speed: args.speed,
            direction: args.direction,
            scrollY: args.scroll.y
          }, "Scene");
        }
        let currentElementsKeys = Object.keys(args.currentElements);
        currentElementsKeys.forEach((key) => {
          let element = args.currentElements[key];
          if (element.el.getAttribute("data-module-timeline")) {
            let progress = element.progress;
            this.call("setProgress", progress, "Timeline", key);
          }
        });
      });
    }
    /**
     * Lazy load the related image.
     *
     * @see ../utils/image.js
     *
     * It is recommended to wrap your `<img>` into an element with the
     * CSS class name `.c-lazy`. The CSS class name modifier `.-lazy-loaded`
     * will be applied on both the image and the parent wrapper.
     *
     * ```html
     * <div class="c-lazy o-ratio u-4:3">
     *     <img data-scroll data-scroll-call="lazyLoad, Scroll, main" data-src="http://picsum.photos/640/480?v=1" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
     * </div>
     * ```
     *
     * @param {LocomotiveScroll} args - The Locomotive Scroll instance.
     */
    // lazyLoad(args) {
    //     lazyLoadImage(args.obj.el, null, () => {
    //         //callback
    //     })
    // }
    destroy() {
      this.scroll.destroy();
    }
  };

  // assets/scripts/globals.js
  var import_svg4everybody = __toESM(require_svg4everybody(), 1);

  // assets/scripts/config.js
  var env = "development";
  var config_default = config = Object.freeze({
    // Environments
    ENV: env,
    IS_PROD: env === "production",
    IS_DEV: env === "development",
    // CSS class names
    CSS_CLASS: {
      LOADING: "is-loading",
      READY: "is-ready",
      LOADED: "is-loaded"
    }
  });

  // assets/scripts/globals.js
  var gridHelper2;
  (() => __async(void 0, null, function* () {
    if (config_default.IS_DEV) {
      const gridHelperModule = yield Promise.resolve().then(() => (init_grid_helper(), grid_helper_exports));
      gridHelper2 = gridHelperModule == null ? void 0 : gridHelperModule.gridHelper;
    }
  }))();
  function globals_default() {
    (0, import_svg4everybody.default)();
    gridHelper2 == null ? void 0 : gridHelper2();
  }

  // assets/scripts/utils/environment.js
  var html = document.documentElement;
  var body = document.body;
  var isDebug = html.hasAttribute("data-debug");

  // assets/scripts/app.js
  var app = new main_esm_default({
    modules: modules_exports
  });
  window.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (window.isMobile) {
    html.classList.add("is-mobile");
  } else {
    html.classList.add("is-desktop");
  }
  window.isWindows = navigator.platform.indexOf("Win") > -1;
  if (window.isWindows) {
    html.classList.add("is-windows");
  }
  window.isIos = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (window.isIos) {
    html.classList.add("is-ios");
  }
  window.onload = (event) => {
    const $style = document.getElementById("main-css");
    if ($style) {
      if ($style.isLoaded) {
        init();
      } else {
        $style.addEventListener("load", (event2) => {
          init();
        });
      }
    } else {
      console.warn('The "main-css" stylesheet not found');
    }
  };
  function init() {
    globals_default();
    app.init(app);
    html.classList.add("is-loaded");
    html.classList.add("is-ready");
    html.classList.remove("is-loading");
    setTimeout(() => {
      html.classList.add("has-dom-ready");
      setTimeout(() => {
        html.classList.add("has-dom-animated");
      }, 2e3);
    }, 1e3);
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      var args = ["\n %c Developed by Quentin Hocd\xE9 \xA9 https://quentinhocde.com \n", "background: #1d1d1d; padding:10px 0;color: #ffffff;"];
      window.console.log.apply(console, args);
    } else if (window.console) {
      window.console.log("Developed by Quentin Hocd\xE9 - https://quentinhocde.com");
    }
  }
})();
/*! Bundled license information:

svg4everybody/dist/svg4everybody.js:
  (*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody *)
*/
//# sourceMappingURL=app.js.map
