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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    init_import_shim();
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = z && a[z] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (b != null)
        for (d in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (g === 1)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          c[d] === void 0 && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return typeof a === "object" && a !== null && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if (k === "undefined" || k === "boolean")
        a = null;
      var h = false;
      if (a === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = d === "" ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), typeof f === "function")
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if (k === "object")
        throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (a == null)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (a._status === -1) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (a._status === 0 || a._status === -1)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (a._status === 0 || a._status === -1)
            a._status = 2, a._result = b2;
        });
        a._status === -1 && (a._status = 0, a._result = b);
      }
      if (a._status === 1)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (a === null || a === void 0)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = K.current);
        b.key !== void 0 && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: b === void 0 ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
    "use strict";
    init_import_shim();
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// util/import-shim.js
var React;
var init_import_shim = __esm({
  "util/import-shim.js"() {
    React = __toESM(require_react());
  }
});

// node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js
var require_react_dom_server_legacy_browser_production_min = __commonJS({
  "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js"(exports) {
    "use strict";
    init_import_shim();
    var aa = require_react();
    function l(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var p = Object.prototype.hasOwnProperty;
    var fa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ha = {};
    var ia = {};
    function ja(a) {
      if (p.call(ia, a))
        return true;
      if (p.call(ha, a))
        return false;
      if (fa.test(a))
        return ia[a] = true;
      ha[a] = true;
      return false;
    }
    function r(a, b, c, d, f, e, g) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var t = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      t[a] = new r(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      t[b] = new r(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      t[a] = new r(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      t[a] = new r(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      t[a] = new r(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      t[a] = new r(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      t[a] = new r(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      t[a] = new r(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      t[a] = new r(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ka = /[\-:]([a-z])/g;
    function la(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(ka, la);
      t[b] = new r(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ka, la);
      t[b] = new r(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ka, la);
      t[b] = new r(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      t[a] = new r(a, 1, false, a.toLowerCase(), null, false, false);
    });
    t.xlinkHref = new r("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      t[a] = new r(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var u = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ma = ["Webkit", "ms", "Moz", "O"];
    Object.keys(u).forEach(function(a) {
      ma.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        u[b] = u[a];
      });
    });
    var na = /["'&<>]/;
    function v(a) {
      if (typeof a === "boolean" || typeof a === "number")
        return "" + a;
      a = "" + a;
      var b = na.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var oa = /([A-Z])/g;
    var pa = /^ms-/;
    var qa = Array.isArray;
    function w(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ra(a, b, c) {
      switch (b) {
        case "select":
          return w(1, c.value != null ? c.value : c.defaultValue);
        case "svg":
          return w(2, null);
        case "math":
          return w(3, null);
        case "foreignObject":
          return w(1, null);
        case "table":
          return w(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return w(5, null);
        case "colgroup":
          return w(7, null);
        case "tr":
          return w(6, null);
      }
      return 4 <= a.insertionMode || a.insertionMode === 0 ? w(1, null) : a;
    }
    var sa = /* @__PURE__ */ new Map();
    function ta(a, b, c) {
      if (typeof c !== "object")
        throw Error(l(62));
      b = true;
      for (var d in c)
        if (p.call(c, d)) {
          var f = c[d];
          if (f != null && typeof f !== "boolean" && f !== "") {
            if (d.indexOf("--") === 0) {
              var e = v(d);
              f = v(("" + f).trim());
            } else {
              e = d;
              var g = sa.get(e);
              g !== void 0 ? e = g : (g = v(e.replace(oa, "-$1").toLowerCase().replace(pa, "-ms-")), sa.set(e, g), e = g);
              f = typeof f === "number" ? f === 0 || p.call(u, d) ? "" + f : f + "px" : v(("" + f).trim());
            }
            b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
          }
        }
      b || a.push('"');
    }
    function x(a, b, c, d) {
      switch (c) {
        case "style":
          ta(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || c[0] !== "o" && c[0] !== "O" || c[1] !== "n" && c[1] !== "N") {
        if (b = t.hasOwnProperty(c) ? t[c] : null, b !== null) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans)
                return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              d === true ? a.push(" ", c, '=""') : d !== false && a.push(" ", c, '="', v(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', v(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', v(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', v(d), '"');
          }
        } else if (ja(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), b !== "data-" && b !== "aria-")
                return;
          }
          a.push(" ", c, '="', v(d), '"');
        }
      }
    }
    function y(a, b, c) {
      if (b != null) {
        if (c != null)
          throw Error(l(60));
        if (typeof b !== "object" || !("__html" in b))
          throw Error(l(61));
        b = b.__html;
        b !== null && b !== void 0 && a.push("" + b);
      }
    }
    function ua(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    function va(a, b, c, d) {
      a.push(A(c));
      var f = c = null, e;
      for (e in b)
        if (p.call(b, e)) {
          var g = b[e];
          if (g != null)
            switch (e) {
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              default:
                x(a, d, e, g);
            }
        }
      a.push(">");
      y(a, f, c);
      return typeof c === "string" ? (a.push(v(c)), null) : c;
    }
    var wa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var xa = /* @__PURE__ */ new Map();
    function A(a) {
      var b = xa.get(a);
      if (b === void 0) {
        if (!wa.test(a))
          throw Error(l(65, a));
        b = "<" + a;
        xa.set(a, b);
      }
      return b;
    }
    function ya(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(A("select"));
          var e = null, g = null;
          for (n in c)
            if (p.call(c, n)) {
              var h = c[n];
              if (h != null)
                switch (n) {
                  case "children":
                    e = h;
                    break;
                  case "dangerouslySetInnerHTML":
                    g = h;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    x(a, d, n, h);
                }
            }
          a.push(">");
          y(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(A("option"));
          var k = h = null, m = null;
          var n = null;
          for (e in c)
            if (p.call(c, e)) {
              var q = c[e];
              if (q != null)
                switch (e) {
                  case "children":
                    h = q;
                    break;
                  case "selected":
                    m = q;
                    break;
                  case "dangerouslySetInnerHTML":
                    n = q;
                    break;
                  case "value":
                    k = q;
                  default:
                    x(a, d, e, q);
                }
            }
          if (g != null)
            if (c = k !== null ? "" + k : ua(h), qa(g))
              for (d = 0; d < g.length; d++) {
                if ("" + g[d] === c) {
                  a.push(' selected=""');
                  break;
                }
              }
            else
              "" + g === c && a.push(' selected=""');
          else
            m && a.push(' selected=""');
          a.push(">");
          y(a, n, h);
          return h;
        case "textarea":
          a.push(A("textarea"));
          n = g = e = null;
          for (h in c)
            if (p.call(c, h) && (k = c[h], k != null))
              switch (h) {
                case "children":
                  n = k;
                  break;
                case "value":
                  e = k;
                  break;
                case "defaultValue":
                  g = k;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(l(91));
                default:
                  x(a, d, h, k);
              }
          e === null && g !== null && (e = g);
          a.push(">");
          if (n != null) {
            if (e != null)
              throw Error(l(92));
            if (qa(n) && 1 < n.length)
              throw Error(l(93));
            e = "" + n;
          }
          typeof e === "string" && e[0] === "\n" && a.push("\n");
          e !== null && a.push(v("" + e));
          return null;
        case "input":
          a.push(A("input"));
          k = n = h = e = null;
          for (g in c)
            if (p.call(c, g) && (m = c[g], m != null))
              switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(399, "input"));
                case "defaultChecked":
                  k = m;
                  break;
                case "defaultValue":
                  h = m;
                  break;
                case "checked":
                  n = m;
                  break;
                case "value":
                  e = m;
                  break;
                default:
                  x(a, d, g, m);
              }
          n !== null ? x(a, d, "checked", n) : k !== null && x(a, d, "checked", k);
          e !== null ? x(a, d, "value", e) : h !== null && x(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(A("menuitem"));
          for (var C in c)
            if (p.call(c, C) && (e = c[C], e != null))
              switch (C) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(400));
                default:
                  x(a, d, C, e);
              }
          a.push(">");
          return null;
        case "title":
          a.push(A("title"));
          e = null;
          for (q in c)
            if (p.call(c, q) && (g = c[q], g != null))
              switch (q) {
                case "children":
                  e = g;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(l(434));
                default:
                  x(a, d, q, g);
              }
          a.push(">");
          return e;
        case "listing":
        case "pre":
          a.push(A(b));
          g = e = null;
          for (k in c)
            if (p.call(c, k) && (h = c[k], h != null))
              switch (k) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                default:
                  x(a, d, k, h);
              }
          a.push(">");
          if (g != null) {
            if (e != null)
              throw Error(l(60));
            if (typeof g !== "object" || !("__html" in g))
              throw Error(l(61));
            c = g.__html;
            c !== null && c !== void 0 && (typeof c === "string" && 0 < c.length && c[0] === "\n" ? a.push("\n", c) : a.push("" + c));
          }
          typeof e === "string" && e[0] === "\n" && a.push("\n");
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(A(b));
          for (var D in c)
            if (p.call(c, D) && (e = c[D], e != null))
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(399, b));
                default:
                  x(a, d, D, e);
              }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return va(a, c, b, d);
        case "html":
          return f.insertionMode === 0 && a.push("<!DOCTYPE html>"), va(a, c, b, d);
        default:
          if (b.indexOf("-") === -1 && typeof c.is !== "string")
            return va(a, c, b, d);
          a.push(A(b));
          g = e = null;
          for (m in c)
            if (p.call(c, m) && (h = c[m], h != null))
              switch (m) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                case "style":
                  ta(a, d, h);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  ja(m) && typeof h !== "function" && typeof h !== "symbol" && a.push(" ", m, '="', v(h), '"');
              }
          a.push(">");
          y(a, g, e);
          return e;
      }
    }
    function za(a, b, c) {
      a.push('<!--$?--><template id="');
      if (c === null)
        throw Error(l(395));
      a.push(c);
      return a.push('"></template>');
    }
    function Aa(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
          throw Error(l(397));
      }
    }
    function Ba(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error(l(397));
      }
    }
    var Ca = /[<\u2028\u2029]/g;
    function Da(a) {
      return JSON.stringify(a).replace(Ca, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Ea(a, b) {
      b = b === void 0 ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Fa(a, b, c, d) {
      if (c.generateStaticMarkup)
        return a.push(v(b)), false;
      b === "" ? a = d : (d && a.push("<!-- -->"), a.push(v(b)), a = true);
      return a;
    }
    var B = Object.assign;
    var Ga = Symbol.for("react.element");
    var Ha = Symbol.for("react.portal");
    var Ia = Symbol.for("react.fragment");
    var Ja = Symbol.for("react.strict_mode");
    var Ka = Symbol.for("react.profiler");
    var La = Symbol.for("react.provider");
    var Ma = Symbol.for("react.context");
    var Na = Symbol.for("react.forward_ref");
    var Oa = Symbol.for("react.suspense");
    var Pa = Symbol.for("react.suspense_list");
    var Qa = Symbol.for("react.memo");
    var Ra = Symbol.for("react.lazy");
    var Sa = Symbol.for("react.scope");
    var Ta = Symbol.for("react.debug_trace_mode");
    var Ua = Symbol.for("react.legacy_hidden");
    var Va = Symbol.for("react.default_value");
    var Wa = Symbol.iterator;
    function Xa(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case Ia:
          return "Fragment";
        case Ha:
          return "Portal";
        case Ka:
          return "Profiler";
        case Ja:
          return "StrictMode";
        case Oa:
          return "Suspense";
        case Pa:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case Ma:
            return (a.displayName || "Context") + ".Consumer";
          case La:
            return (a._context.displayName || "Context") + ".Provider";
          case Na:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Qa:
            return b = a.displayName || null, b !== null ? b : Xa(a.type) || "Memo";
          case Ra:
            b = a._payload;
            a = a._init;
            try {
              return Xa(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    var Ya = {};
    function Za(a, b) {
      a = a.contextTypes;
      if (!a)
        return Ya;
      var c = {}, d;
      for (d in a)
        c[d] = b[d];
      return c;
    }
    var E = null;
    function F(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (a === null) {
          if (c !== null)
            throw Error(l(401));
        } else {
          if (c === null)
            throw Error(l(401));
          F(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function $a(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      a !== null && $a(a);
    }
    function ab(a) {
      var b = a.parent;
      b !== null && ab(b);
      a.context._currentValue2 = a.value;
    }
    function bb(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (a === null)
        throw Error(l(402));
      a.depth === b.depth ? F(a, b) : bb(a, b);
    }
    function cb(a, b) {
      var c = b.parent;
      if (c === null)
        throw Error(l(402));
      a.depth === c.depth ? F(a, c) : cb(a, c);
      b.context._currentValue2 = b.value;
    }
    function G(a) {
      var b = E;
      b !== a && (b === null ? ab(a) : a === null ? $a(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? bb(b, a) : cb(b, a), E = a);
    }
    var db = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      a.queue !== null && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function eb(a, b, c, d) {
      var f = a.state !== void 0 ? a.state : null;
      a.updater = db;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = typeof g === "object" && g !== null ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      typeof g === "function" && (g = g(c, f), f = g === null || g === void 0 ? f : B({}, f, g), a.state = f);
      if (typeof b.getDerivedStateFromProps !== "function" && typeof a.getSnapshotBeforeUpdate !== "function" && (typeof a.UNSAFE_componentWillMount === "function" || typeof a.componentWillMount === "function"))
        if (b = a.state, typeof a.componentWillMount === "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount === "function" && a.UNSAFE_componentWillMount(), b !== a.state && db.enqueueReplaceState(a, a.state, null), e.queue !== null && 0 < e.queue.length)
          if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && b.length === 1)
            a.state = b[0];
          else {
            e = g ? b[0] : a.state;
            f = true;
            for (g = g ? 1 : 0; g < b.length; g++) {
              var h = b[g];
              h = typeof h === "function" ? h.call(a, e, c, d) : h;
              h != null && (f ? (f = false, e = B({}, e, h)) : B(e, h));
            }
            a.state = e;
          }
        else
          e.queue = null;
    }
    var fb = { id: 1, overflow: "" };
    function gb(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - H(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - H(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - H(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var H = Math.clz32 ? Math.clz32 : hb;
    var ib = Math.log;
    var jb = Math.LN2;
    function hb(a) {
      a >>>= 0;
      return a === 0 ? 32 : 31 - (ib(a) / jb | 0) | 0;
    }
    function kb(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var lb = typeof Object.is === "function" ? Object.is : kb;
    var I = null;
    var ob = null;
    var J = null;
    var K = null;
    var L = false;
    var M = false;
    var N = 0;
    var O = null;
    var P = 0;
    function Q() {
      if (I === null)
        throw Error(l(321));
      return I;
    }
    function pb() {
      if (0 < P)
        throw Error(l(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function qb() {
      K === null ? J === null ? (L = false, J = K = pb()) : (L = true, K = J) : K.next === null ? (L = false, K = K.next = pb()) : (L = true, K = K.next);
      return K;
    }
    function rb() {
      ob = I = null;
      M = false;
      J = null;
      P = 0;
      K = O = null;
    }
    function sb(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function tb(a, b, c) {
      I = Q();
      K = qb();
      if (L) {
        var d = K.queue;
        b = d.dispatch;
        if (O !== null && (c = O.get(d), c !== void 0)) {
          O.delete(d);
          d = K.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (c !== null);
          K.memoizedState = d;
          return [d, b];
        }
        return [K.memoizedState, b];
      }
      a = a === sb ? typeof b === "function" ? b() : b : c !== void 0 ? c(b) : b;
      K.memoizedState = a;
      a = K.queue = { last: null, dispatch: null };
      a = a.dispatch = ub.bind(null, I, a);
      return [K.memoizedState, a];
    }
    function vb(a, b) {
      I = Q();
      K = qb();
      b = b === void 0 ? null : b;
      if (K !== null) {
        var c = K.memoizedState;
        if (c !== null && b !== null) {
          var d = c[1];
          a:
            if (d === null)
              d = false;
            else {
              for (var f = 0; f < d.length && f < b.length; f++)
                if (!lb(b[f], d[f])) {
                  d = false;
                  break a;
                }
              d = true;
            }
          if (d)
            return c[0];
        }
      }
      a = a();
      K.memoizedState = [a, b];
      return a;
    }
    function ub(a, b, c) {
      if (25 <= P)
        throw Error(l(301));
      if (a === I)
        if (M = true, a = { action: c, next: null }, O === null && (O = /* @__PURE__ */ new Map()), c = O.get(b), c === void 0)
          O.set(b, a);
        else {
          for (b = c; b.next !== null; )
            b = b.next;
          b.next = a;
        }
    }
    function wb() {
      throw Error(l(394));
    }
    function R() {
    }
    var xb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      Q();
      return a._currentValue2;
    }, useMemo: vb, useReducer: tb, useRef: function(a) {
      I = Q();
      K = qb();
      var b = K.memoizedState;
      return b === null ? (a = { current: a }, K.memoizedState = a) : b;
    }, useState: function(a) {
      return tb(sb, a);
    }, useInsertionEffect: R, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return vb(function() {
        return a;
      }, b);
    }, useImperativeHandle: R, useEffect: R, useDebugValue: R, useDeferredValue: function(a) {
      Q();
      return a;
    }, useTransition: function() {
      Q();
      return [
        false,
        wb
      ];
    }, useId: function() {
      var a = ob.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - H(a) - 1)).toString(32) + b;
      var c = S;
      if (c === null)
        throw Error(l(404));
      b = N++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      Q();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (c === void 0)
        throw Error(l(407));
      return c();
    } };
    var S = null;
    var yb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function zb(a) {
      console.error(a);
      return null;
    }
    function T() {
    }
    function Ab(a, b, c, d, f, e, g, h, k) {
      var m = [], n = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: d === void 0 ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: n, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? zb : f, onAllReady: e === void 0 ? T : e, onShellReady: g === void 0 ? T : g, onShellError: h === void 0 ? T : h, onFatalError: k === void 0 ? T : k };
      c = U(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Bb(b, a, null, c, n, Ya, null, fb);
      m.push(a);
      return b;
    }
    function Bb(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      c === null ? a.pendingRootTasks++ : c.pendingTasks++;
      var k = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(k);
        b2.length === 1 && Cb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(k);
      return k;
    }
    function U(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function V(a, b) {
      a = a.onError(b);
      if (a != null && typeof a !== "string")
        throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function W(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      a.destination !== null ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Db(a, b, c, d, f) {
      I = {};
      ob = b;
      N = 0;
      for (a = c(d, f); M; )
        M = false, N = 0, P += 1, K = null, a = c(d, f);
      rb();
      return a;
    }
    function Eb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (e !== null && e !== void 0) {
        var g = b.legacyContext;
        if (typeof c.getChildContext !== "function")
          d = g;
        else {
          c = c.getChildContext();
          for (var h in c)
            if (!(h in e))
              throw Error(l(108, Xa(d) || "Unknown", h));
          d = B({}, g, c);
        }
        b.legacyContext = d;
        X(a, b, f);
        b.legacyContext = g;
      } else
        X(a, b, f);
    }
    function Fb(a, b) {
      if (a && a.defaultProps) {
        b = B({}, b);
        a = a.defaultProps;
        for (var c in a)
          b[c] === void 0 && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Gb(a, b, c, d, f) {
      if (typeof c === "function")
        if (c.prototype && c.prototype.isReactComponent) {
          f = Za(c, b.legacyContext);
          var e = c.contextType;
          e = new c(d, typeof e === "object" && e !== null ? e._currentValue2 : f);
          eb(e, c, d, f);
          Eb(a, b, e, c);
        } else {
          e = Za(c, b.legacyContext);
          f = Db(a, b, c, d, e);
          var g = N !== 0;
          if (typeof f === "object" && f !== null && typeof f.render === "function" && f.$$typeof === void 0)
            eb(f, c, d, e), Eb(a, b, f, c);
          else if (g) {
            d = b.treeContext;
            b.treeContext = gb(d, 1, 0);
            try {
              X(a, b, f);
            } finally {
              b.treeContext = d;
            }
          } else
            X(a, b, f);
        }
      else if (typeof c === "string") {
        f = b.blockedSegment;
        e = ya(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ra(g, c, d);
        Hb(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case Ua:
          case Ta:
          case Ja:
          case Ka:
          case Ia:
            X(a, b, d.children);
            return;
          case Pa:
            X(a, b, d.children);
            return;
          case Sa:
            throw Error(l(343));
          case Oa:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = U(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(k);
              f.lastPushedText = false;
              var m = U(a, 0, null, f.formatContext, false, false);
              m.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = m;
              try {
                if (Hb(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, Y(h, m), h.pendingTasks === 0)
                  break a;
              } catch (n) {
                m.status = 4, h.forceClientRender = true, h.errorDigest = V(a, n);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Bb(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if (typeof c === "object" && c !== null)
          switch (c.$$typeof) {
            case Na:
              d = Db(a, b, c.render, d, f);
              if (N !== 0) {
                c = b.treeContext;
                b.treeContext = gb(c, 1, 0);
                try {
                  X(a, b, d);
                } finally {
                  b.treeContext = c;
                }
              } else
                X(a, b, d);
              return;
            case Qa:
              c = c.type;
              d = Fb(c, d);
              Gb(a, b, c, d, f);
              return;
            case La:
              f = d.children;
              c = c._context;
              d = d.value;
              e = c._currentValue2;
              c._currentValue2 = d;
              g = E;
              E = d = { parent: g, depth: g === null ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
              b.context = d;
              X(a, b, f);
              a = E;
              if (a === null)
                throw Error(l(403));
              d = a.parentValue;
              a.context._currentValue2 = d === Va ? a.context._defaultValue : d;
              a = E = a.parent;
              b.context = a;
              return;
            case Ma:
              d = d.children;
              d = d(c._currentValue2);
              X(a, b, d);
              return;
            case Ra:
              f = c._init;
              c = f(c._payload);
              d = Fb(c, d);
              Gb(a, b, c, d, void 0);
              return;
          }
        throw Error(l(130, c == null ? c : typeof c, ""));
      }
    }
    function X(a, b, c) {
      b.node = c;
      if (typeof c === "object" && c !== null) {
        switch (c.$$typeof) {
          case Ga:
            Gb(a, b, c.type, c.props, c.ref);
            return;
          case Ha:
            throw Error(l(257));
          case Ra:
            var d = c._init;
            c = d(c._payload);
            X(a, b, c);
            return;
        }
        if (qa(c)) {
          Ib(a, b, c);
          return;
        }
        c === null || typeof c !== "object" ? d = null : (d = Wa && c[Wa] || c["@@iterator"], d = typeof d === "function" ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Ib(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error(l(31, a === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : a));
      }
      typeof c === "string" ? (d = b.blockedSegment, d.lastPushedText = Fa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : typeof c === "number" && (d = b.blockedSegment, d.lastPushedText = Fa(b.blockedSegment.chunks, "" + c, a.responseState, d.lastPushedText));
    }
    function Ib(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = gb(e, d, f);
        try {
          Hb(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Hb(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return X(a, b, c);
      } catch (k) {
        if (rb(), typeof k === "object" && k !== null && typeof k.then === "function") {
          c = k;
          var g = b.blockedSegment, h = U(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Bb(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          G(e);
        } else
          throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, G(e), k;
      }
    }
    function Jb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Kb(this, b, a);
    }
    function Lb(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      d === null ? (b.allPendingTasks--, b.status !== 2 && (b.status = 2, b.destination !== null && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, a = c === void 0 ? Error(l(432)) : c, d.errorDigest = b.onError(a), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Lb(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, b.allPendingTasks === 0 && (d = b.onAllReady, d()));
    }
    function Y(a, b) {
      if (b.chunks.length === 0 && b.children.length === 1 && b.children[0].boundary === null) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        c.status === 1 && Y(a, c);
      } else
        a.completedSegments.push(b);
    }
    function Kb(a, b, c) {
      if (b === null) {
        if (c.parentFlushed) {
          if (a.completedRootSegment !== null)
            throw Error(l(389));
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        a.pendingRootTasks === 0 && (a.onShellError = T, b = a.onShellReady, b());
      } else
        b.pendingTasks--, b.forceClientRender || (b.pendingTasks === 0 ? (c.parentFlushed && c.status === 1 && Y(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Jb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && c.status === 1 && (Y(b, c), b.completedSegments.length === 1 && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      a.allPendingTasks === 0 && (a = a.onAllReady, a());
    }
    function Cb(a) {
      if (a.status !== 2) {
        var b = E, c = yb.current;
        yb.current = xb;
        var d = S;
        S = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, k = g.blockedSegment;
            if (k.status === 0) {
              G(g.context);
              try {
                X(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Kb(h, g.blockedBoundary, k);
              } catch (z) {
                if (rb(), typeof z === "object" && z !== null && typeof z.then === "function") {
                  var m = g.ping;
                  z.then(m, m);
                } else {
                  g.abortSet.delete(g);
                  k.status = 4;
                  var n = g.blockedBoundary, q = z, C = V(h, q);
                  n === null ? W(h, q) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = true, n.errorDigest = C, n.parentFlushed && h.clientRenderedBoundaries.push(n)));
                  h.allPendingTasks--;
                  if (h.allPendingTasks === 0) {
                    var D = h.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          a.destination !== null && Mb(a, a.destination);
        } catch (z) {
          V(a, z), W(a, z);
        } finally {
          S = d, yb.current = c, c === xb && G(b);
        }
      }
    }
    function Z(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          b.push('<template id="');
          b.push(a.placeholderPrefix);
          a = d.toString(16);
          b.push(a);
          return b.push('"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++)
              b.push(d[e]);
            f = Nb(a, b, f);
          }
          for (; e < d.length - 1; e++)
            b.push(d[e]);
          e < d.length && (f = b.push(d[e]));
          return f;
        default:
          throw Error(l(390));
      }
    }
    function Nb(a, b, c) {
      var d = c.boundary;
      if (d === null)
        return Z(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender)
        return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = v(d), b.push(d), b.push('"')), b.push("></template>")), Z(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        za(b, a.responseState, d);
        Z(a, b, c);
        return b.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize)
        return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), za(b, a.responseState, d.id), Z(a, b, c), b.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b.push("<!--$-->");
      c = d.completedSegments;
      if (c.length !== 1)
        throw Error(l(391));
      Nb(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
      return a;
    }
    function Ob(a, b, c) {
      Aa(b, a.responseState, c.formatContext, c.id);
      Nb(a, b, c);
      return Ba(b, c.formatContext);
    }
    function Pb(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++)
        Qb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      b.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (d === null)
        throw Error(l(395));
      c = c.toString(16);
      b.push(d);
      b.push('","');
      b.push(a.segmentPrefix);
      b.push(c);
      return b.push('")<\/script>');
    }
    function Qb(a, b, c, d) {
      if (d.status === 2)
        return true;
      var f = d.id;
      if (f === -1) {
        if ((d.id = c.rootSegmentID) === -1)
          throw Error(l(392));
        return Ob(a, b, d);
      }
      Ob(a, b, d);
      a = a.responseState;
      b.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b.push(a.segmentPrefix);
      f = f.toString(16);
      b.push(f);
      b.push('","');
      b.push(a.placeholderPrefix);
      b.push(f);
      return b.push('")<\/script>');
    }
    function Mb(a, b) {
      try {
        var c = a.completedRootSegment;
        if (c !== null && a.pendingRootTasks === 0) {
          Nb(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++)
            b.push(d[c]);
          c < d.length && b.push(d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, k = g.id, m = g.errorDigest, n = g.errorMessage, q = g.errorComponentStack;
          d.push(h.startInlineScript);
          h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (k === null)
            throw Error(l(395));
          d.push(k);
          d.push('"');
          if (m || n || q) {
            d.push(",");
            var C = Da(m || "");
            d.push(C);
          }
          if (n || q) {
            d.push(",");
            var D = Da(n || "");
            d.push(D);
          }
          if (q) {
            d.push(",");
            var z = Da(q);
            d.push(z);
          }
          if (!d.push(")<\/script>")) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var ba = a.completedBoundaries;
        for (e = 0; e < ba.length; e++)
          if (!Pb(a, b, ba[e])) {
            a.destination = null;
            e++;
            ba.splice(0, e);
            return;
          }
        ba.splice(0, e);
        var ca = a.partialBoundaries;
        for (e = 0; e < ca.length; e++) {
          var mb = ca[e];
          a: {
            f = a;
            g = b;
            var da = mb.completedSegments;
            for (h = 0; h < da.length; h++)
              if (!Qb(f, g, mb, da[h])) {
                h++;
                da.splice(0, h);
                var nb = false;
                break a;
              }
            da.splice(0, h);
            nb = true;
          }
          if (!nb) {
            a.destination = null;
            e++;
            ca.splice(0, e);
            return;
          }
        }
        ca.splice(0, e);
        var ea = a.completedBoundaries;
        for (e = 0; e < ea.length; e++)
          if (!Pb(a, b, ea[e])) {
            a.destination = null;
            e++;
            ea.splice(0, e);
            return;
          }
        ea.splice(0, e);
      } finally {
        a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && b.push(null);
      }
    }
    function Rb(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return Lb(c2, a, b);
        });
        c.clear();
        a.destination !== null && Mb(a, a.destination);
      } catch (d) {
        V(a, d), W(a, d);
      }
    }
    function Sb() {
    }
    function Tb(a, b, c, d) {
      var f = false, e = null, g = "", h = { push: function(a2) {
        a2 !== null && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e = a2;
      } }, k = false;
      a = Ab(a, Ea(c, b ? b.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, Infinity, Sb, void 0, function() {
        k = true;
      }, void 0, void 0);
      Cb(a);
      Rb(a, d);
      if (a.status === 1)
        a.status = 2, h.destroy(a.fatalError);
      else if (a.status !== 2 && a.destination === null) {
        a.destination = h;
        try {
          Mb(a, h);
        } catch (m) {
          V(a, m), W(a, m);
        }
      }
      if (f)
        throw e;
      if (!k)
        throw Error(l(426));
      return g;
    }
    exports.renderToNodeStream = function() {
      throw Error(l(207));
    };
    exports.renderToStaticMarkup = function(a, b) {
      return Tb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.renderToStaticNodeStream = function() {
      throw Error(l(208));
    };
    exports.renderToString = function(a, b) {
      return Tb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.version = "18.2.0";
  }
});

// node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js
var require_react_dom_server_browser_production_min = __commonJS({
  "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports) {
    "use strict";
    init_import_shim();
    var aa = require_react();
    function k(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l = null;
    var n = 0;
    function p(a, b) {
      if (b.length !== 0)
        if (512 < b.length)
          0 < n && (a.enqueue(new Uint8Array(l.buffer, 0, n)), l = new Uint8Array(512), n = 0), a.enqueue(b);
        else {
          var c = l.length - n;
          c < b.length && (c === 0 ? a.enqueue(l) : (l.set(b.subarray(0, c), n), a.enqueue(l), b = b.subarray(c)), l = new Uint8Array(512), n = 0);
          l.set(b, n);
          n += b.length;
        }
    }
    function t(a, b) {
      p(a, b);
      return true;
    }
    function ba(a) {
      l && 0 < n && (a.enqueue(new Uint8Array(l.buffer, 0, n)), l = null, n = 0);
    }
    var ca = new TextEncoder();
    function u(a) {
      return ca.encode(a);
    }
    function w(a) {
      return ca.encode(a);
    }
    function da(a, b) {
      typeof a.error === "function" ? a.error(b) : a.close();
    }
    var x = Object.prototype.hasOwnProperty;
    var ea = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var fa = {};
    var ha = {};
    function ia(a) {
      if (x.call(ha, a))
        return true;
      if (x.call(fa, a))
        return false;
      if (ea.test(a))
        return ha[a] = true;
      fa[a] = true;
      return false;
    }
    function y(a, b, c, d, f, e, g) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new y(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new y(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new y(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new y(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new y(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new y(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new y(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new y(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new y(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ja = /[\-:]([a-z])/g;
    function ka(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(ja, ka);
      z[b] = new y(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ja, ka);
      z[b] = new y(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ja, ka);
      z[b] = new y(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new y(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new y("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new y(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var la = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a) {
      la.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        B[b] = B[a];
      });
    });
    var oa = /["'&<>]/;
    function C(a) {
      if (typeof a === "boolean" || typeof a === "number")
        return "" + a;
      a = "" + a;
      var b = oa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var pa = /([A-Z])/g;
    var qa = /^ms-/;
    var ra = Array.isArray;
    var sa = w("<script>");
    var ta = w("<\/script>");
    var ua = w('<script src="');
    var va = w('<script type="module" src="');
    var wa = w('" async=""><\/script>');
    var xa = /(<\/|<)(s)(cript)/gi;
    function ya(a, b, c, d) {
      return "" + b + (c === "s" ? "\\u0073" : "\\u0053") + d;
    }
    function za(a, b, c, d, f) {
      a = a === void 0 ? "" : a;
      b = b === void 0 ? sa : w('<script nonce="' + C(b) + '">');
      var e = [];
      c !== void 0 && e.push(b, u(("" + c).replace(xa, ya)), ta);
      if (d !== void 0)
        for (c = 0; c < d.length; c++)
          e.push(ua, u(C(d[c])), wa);
      if (f !== void 0)
        for (d = 0; d < f.length; d++)
          e.push(va, u(C(f[d])), wa);
      return { bootstrapChunks: e, startInlineScript: b, placeholderPrefix: w(a + "P:"), segmentPrefix: w(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
    }
    function D(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function Aa(a) {
      return D(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
    }
    function Ba(a, b, c) {
      switch (b) {
        case "select":
          return D(1, c.value != null ? c.value : c.defaultValue);
        case "svg":
          return D(2, null);
        case "math":
          return D(3, null);
        case "foreignObject":
          return D(1, null);
        case "table":
          return D(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return D(5, null);
        case "colgroup":
          return D(7, null);
        case "tr":
          return D(6, null);
      }
      return 4 <= a.insertionMode || a.insertionMode === 0 ? D(1, null) : a;
    }
    var Ca = w("<!-- -->");
    function Da(a, b, c, d) {
      if (b === "")
        return d;
      d && a.push(Ca);
      a.push(u(C(b)));
      return true;
    }
    var Ea = /* @__PURE__ */ new Map();
    var Fa = w(' style="');
    var Ga = w(":");
    var Ha = w(";");
    function Ia(a, b, c) {
      if (typeof c !== "object")
        throw Error(k(62));
      b = true;
      for (var d in c)
        if (x.call(c, d)) {
          var f = c[d];
          if (f != null && typeof f !== "boolean" && f !== "") {
            if (d.indexOf("--") === 0) {
              var e = u(C(d));
              f = u(C(("" + f).trim()));
            } else {
              e = d;
              var g = Ea.get(e);
              g !== void 0 ? e = g : (g = w(C(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-"))), Ea.set(e, g), e = g);
              f = typeof f === "number" ? f === 0 || x.call(B, d) ? u("" + f) : u(f + "px") : u(C(("" + f).trim()));
            }
            b ? (b = false, a.push(Fa, e, Ga, f)) : a.push(Ha, e, Ga, f);
          }
        }
      b || a.push(E);
    }
    var H = w(" ");
    var I = w('="');
    var E = w('"');
    var Ja = w('=""');
    function J(a, b, c, d) {
      switch (c) {
        case "style":
          Ia(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || c[0] !== "o" && c[0] !== "O" || c[1] !== "n" && c[1] !== "N") {
        if (b = z.hasOwnProperty(c) ? z[c] : null, b !== null) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans)
                return;
          }
          c = u(b.attributeName);
          switch (b.type) {
            case 3:
              d && a.push(H, c, Ja);
              break;
            case 4:
              d === true ? a.push(H, c, Ja) : d !== false && a.push(H, c, I, u(C(d)), E);
              break;
            case 5:
              isNaN(d) || a.push(H, c, I, u(C(d)), E);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(H, c, I, u(C(d)), E);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(H, c, I, u(C(d)), E);
          }
        } else if (ia(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), b !== "data-" && b !== "aria-")
                return;
          }
          a.push(H, u(c), I, u(C(d)), E);
        }
      }
    }
    var K = w(">");
    var Ka = w("/>");
    function L(a, b, c) {
      if (b != null) {
        if (c != null)
          throw Error(k(60));
        if (typeof b !== "object" || !("__html" in b))
          throw Error(k(61));
        b = b.__html;
        b !== null && b !== void 0 && a.push(u("" + b));
      }
    }
    function La(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    var Ma = w(' selected=""');
    function Na(a, b, c, d) {
      a.push(M(c));
      var f = c = null, e;
      for (e in b)
        if (x.call(b, e)) {
          var g = b[e];
          if (g != null)
            switch (e) {
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              default:
                J(a, d, e, g);
            }
        }
      a.push(K);
      L(a, f, c);
      return typeof c === "string" ? (a.push(u(C(c))), null) : c;
    }
    var Oa = w("\n");
    var Pa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Qa = /* @__PURE__ */ new Map();
    function M(a) {
      var b = Qa.get(a);
      if (b === void 0) {
        if (!Pa.test(a))
          throw Error(k(65, a));
        b = w("<" + a);
        Qa.set(a, b);
      }
      return b;
    }
    var Ra = w("<!DOCTYPE html>");
    function Sa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(M("select"));
          var e = null, g = null;
          for (r in c)
            if (x.call(c, r)) {
              var h = c[r];
              if (h != null)
                switch (r) {
                  case "children":
                    e = h;
                    break;
                  case "dangerouslySetInnerHTML":
                    g = h;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    J(a, d, r, h);
                }
            }
          a.push(K);
          L(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(M("option"));
          var m = h = null, q = null;
          var r = null;
          for (e in c)
            if (x.call(c, e)) {
              var v = c[e];
              if (v != null)
                switch (e) {
                  case "children":
                    h = v;
                    break;
                  case "selected":
                    q = v;
                    break;
                  case "dangerouslySetInnerHTML":
                    r = v;
                    break;
                  case "value":
                    m = v;
                  default:
                    J(a, d, e, v);
                }
            }
          if (g != null)
            if (c = m !== null ? "" + m : La(h), ra(g))
              for (d = 0; d < g.length; d++) {
                if ("" + g[d] === c) {
                  a.push(Ma);
                  break;
                }
              }
            else
              "" + g === c && a.push(Ma);
          else
            q && a.push(Ma);
          a.push(K);
          L(a, r, h);
          return h;
        case "textarea":
          a.push(M("textarea"));
          r = g = e = null;
          for (h in c)
            if (x.call(c, h) && (m = c[h], m != null))
              switch (h) {
                case "children":
                  r = m;
                  break;
                case "value":
                  e = m;
                  break;
                case "defaultValue":
                  g = m;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k(91));
                default:
                  J(a, d, h, m);
              }
          e === null && g !== null && (e = g);
          a.push(K);
          if (r != null) {
            if (e != null)
              throw Error(k(92));
            if (ra(r) && 1 < r.length)
              throw Error(k(93));
            e = "" + r;
          }
          typeof e === "string" && e[0] === "\n" && a.push(Oa);
          e !== null && a.push(u(C("" + e)));
          return null;
        case "input":
          a.push(M("input"));
          m = r = h = e = null;
          for (g in c)
            if (x.call(c, g) && (q = c[g], q != null))
              switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, "input"));
                case "defaultChecked":
                  m = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "checked":
                  r = q;
                  break;
                case "value":
                  e = q;
                  break;
                default:
                  J(a, d, g, q);
              }
          r !== null ? J(a, d, "checked", r) : m !== null && J(a, d, "checked", m);
          e !== null ? J(a, d, "value", e) : h !== null && J(a, d, "value", h);
          a.push(Ka);
          return null;
        case "menuitem":
          a.push(M("menuitem"));
          for (var A in c)
            if (x.call(c, A) && (e = c[A], e != null))
              switch (A) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(400));
                default:
                  J(a, d, A, e);
              }
          a.push(K);
          return null;
        case "title":
          a.push(M("title"));
          e = null;
          for (v in c)
            if (x.call(c, v) && (g = c[v], g != null))
              switch (v) {
                case "children":
                  e = g;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k(434));
                default:
                  J(a, d, v, g);
              }
          a.push(K);
          return e;
        case "listing":
        case "pre":
          a.push(M(b));
          g = e = null;
          for (m in c)
            if (x.call(c, m) && (h = c[m], h != null))
              switch (m) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                default:
                  J(a, d, m, h);
              }
          a.push(K);
          if (g != null) {
            if (e != null)
              throw Error(k(60));
            if (typeof g !== "object" || !("__html" in g))
              throw Error(k(61));
            c = g.__html;
            c !== null && c !== void 0 && (typeof c === "string" && 0 < c.length && c[0] === "\n" ? a.push(Oa, u(c)) : a.push(u("" + c)));
          }
          typeof e === "string" && e[0] === "\n" && a.push(Oa);
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(M(b));
          for (var F in c)
            if (x.call(c, F) && (e = c[F], e != null))
              switch (F) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, b));
                default:
                  J(a, d, F, e);
              }
          a.push(Ka);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Na(a, c, b, d);
        case "html":
          return f.insertionMode === 0 && a.push(Ra), Na(a, c, b, d);
        default:
          if (b.indexOf("-") === -1 && typeof c.is !== "string")
            return Na(a, c, b, d);
          a.push(M(b));
          g = e = null;
          for (q in c)
            if (x.call(c, q) && (h = c[q], h != null))
              switch (q) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                case "style":
                  Ia(a, d, h);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  ia(q) && typeof h !== "function" && typeof h !== "symbol" && a.push(H, u(q), I, u(C(h)), E);
              }
          a.push(K);
          L(a, g, e);
          return e;
      }
    }
    var Ta = w("</");
    var Ua = w(">");
    var Va = w('<template id="');
    var Wa = w('"></template>');
    var Xa = w("<!--$-->");
    var Ya = w('<!--$?--><template id="');
    var Za = w('"></template>');
    var $a = w("<!--$!-->");
    var ab = w("<!--/$-->");
    var bb = w("<template");
    var cb = w('"');
    var db = w(' data-dgst="');
    w(' data-msg="');
    w(' data-stck="');
    var eb = w("></template>");
    function fb(a, b, c) {
      p(a, Ya);
      if (c === null)
        throw Error(k(395));
      p(a, c);
      return t(a, Za);
    }
    var gb = w('<div hidden id="');
    var hb = w('">');
    var ib = w("</div>");
    var jb = w('<svg aria-hidden="true" style="display:none" id="');
    var kb = w('">');
    var lb = w("</svg>");
    var mb = w('<math aria-hidden="true" style="display:none" id="');
    var nb = w('">');
    var ob = w("</math>");
    var pb = w('<table hidden id="');
    var qb = w('">');
    var rb = w("</table>");
    var sb = w('<table hidden><tbody id="');
    var tb = w('">');
    var ub = w("</tbody></table>");
    var vb = w('<table hidden><tr id="');
    var wb = w('">');
    var xb = w("</tr></table>");
    var yb = w('<table hidden><colgroup id="');
    var zb = w('">');
    var Ab = w("</colgroup></table>");
    function Bb(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return p(a, gb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, hb);
        case 2:
          return p(a, jb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, kb);
        case 3:
          return p(a, mb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, nb);
        case 4:
          return p(a, pb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, qb);
        case 5:
          return p(a, sb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, tb);
        case 6:
          return p(a, vb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, wb);
        case 7:
          return p(a, yb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, zb);
        default:
          throw Error(k(397));
      }
    }
    function Cb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return t(a, ib);
        case 2:
          return t(a, lb);
        case 3:
          return t(a, ob);
        case 4:
          return t(a, rb);
        case 5:
          return t(a, ub);
        case 6:
          return t(a, xb);
        case 7:
          return t(a, Ab);
        default:
          throw Error(k(397));
      }
    }
    var Db = w('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Eb = w('$RS("');
    var Gb = w('","');
    var Hb = w('")<\/script>');
    var Ib = w('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Jb = w('$RC("');
    var Kb = w('","');
    var Lb = w('")<\/script>');
    var Mb = w('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Nb = w('$RX("');
    var Ob = w('"');
    var Pb = w(")<\/script>");
    var Qb = w(",");
    var Rb = /[<\u2028\u2029]/g;
    function Sb(a) {
      return JSON.stringify(a).replace(Rb, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var N = Object.assign;
    var Tb = Symbol.for("react.element");
    var Ub = Symbol.for("react.portal");
    var Vb = Symbol.for("react.fragment");
    var Wb = Symbol.for("react.strict_mode");
    var Xb = Symbol.for("react.profiler");
    var Yb = Symbol.for("react.provider");
    var Zb = Symbol.for("react.context");
    var $b = Symbol.for("react.forward_ref");
    var ac = Symbol.for("react.suspense");
    var bc = Symbol.for("react.suspense_list");
    var cc = Symbol.for("react.memo");
    var dc = Symbol.for("react.lazy");
    var ec = Symbol.for("react.scope");
    var fc = Symbol.for("react.debug_trace_mode");
    var gc = Symbol.for("react.legacy_hidden");
    var hc = Symbol.for("react.default_value");
    var ic = Symbol.iterator;
    function jc(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case Vb:
          return "Fragment";
        case Ub:
          return "Portal";
        case Xb:
          return "Profiler";
        case Wb:
          return "StrictMode";
        case ac:
          return "Suspense";
        case bc:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case Zb:
            return (a.displayName || "Context") + ".Consumer";
          case Yb:
            return (a._context.displayName || "Context") + ".Provider";
          case $b:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case cc:
            return b = a.displayName || null, b !== null ? b : jc(a.type) || "Memo";
          case dc:
            b = a._payload;
            a = a._init;
            try {
              return jc(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    var kc = {};
    function lc(a, b) {
      a = a.contextTypes;
      if (!a)
        return kc;
      var c = {}, d;
      for (d in a)
        c[d] = b[d];
      return c;
    }
    var O = null;
    function P(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (a === null) {
          if (c !== null)
            throw Error(k(401));
        } else {
          if (c === null)
            throw Error(k(401));
          P(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function mc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      a !== null && mc(a);
    }
    function nc(a) {
      var b = a.parent;
      b !== null && nc(b);
      a.context._currentValue = a.value;
    }
    function oc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (a === null)
        throw Error(k(402));
      a.depth === b.depth ? P(a, b) : oc(a, b);
    }
    function pc(a, b) {
      var c = b.parent;
      if (c === null)
        throw Error(k(402));
      a.depth === c.depth ? P(a, c) : pc(a, c);
      b.context._currentValue = b.value;
    }
    function Q(a) {
      var b = O;
      b !== a && (b === null ? nc(a) : a === null ? mc(b) : b.depth === a.depth ? P(b, a) : b.depth > a.depth ? oc(b, a) : pc(b, a), O = a);
    }
    var qc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      a.queue !== null && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function rc(a, b, c, d) {
      var f = a.state !== void 0 ? a.state : null;
      a.updater = qc;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = typeof g === "object" && g !== null ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      typeof g === "function" && (g = g(c, f), f = g === null || g === void 0 ? f : N({}, f, g), a.state = f);
      if (typeof b.getDerivedStateFromProps !== "function" && typeof a.getSnapshotBeforeUpdate !== "function" && (typeof a.UNSAFE_componentWillMount === "function" || typeof a.componentWillMount === "function"))
        if (b = a.state, typeof a.componentWillMount === "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount === "function" && a.UNSAFE_componentWillMount(), b !== a.state && qc.enqueueReplaceState(a, a.state, null), e.queue !== null && 0 < e.queue.length)
          if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && b.length === 1)
            a.state = b[0];
          else {
            e = g ? b[0] : a.state;
            f = true;
            for (g = g ? 1 : 0; g < b.length; g++) {
              var h = b[g];
              h = typeof h === "function" ? h.call(a, e, c, d) : h;
              h != null && (f ? (f = false, e = N({}, e, h)) : N(e, h));
            }
            a.state = e;
          }
        else
          e.queue = null;
    }
    var sc = { id: 1, overflow: "" };
    function tc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - uc(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - uc(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - uc(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var uc = Math.clz32 ? Math.clz32 : vc;
    var wc = Math.log;
    var xc = Math.LN2;
    function vc(a) {
      a >>>= 0;
      return a === 0 ? 32 : 31 - (wc(a) / xc | 0) | 0;
    }
    function yc(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var zc = typeof Object.is === "function" ? Object.is : yc;
    var R = null;
    var Ac = null;
    var Bc = null;
    var S = null;
    var T = false;
    var Cc = false;
    var U = 0;
    var V = null;
    var Dc = 0;
    function W() {
      if (R === null)
        throw Error(k(321));
      return R;
    }
    function Ec() {
      if (0 < Dc)
        throw Error(k(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Fc() {
      S === null ? Bc === null ? (T = false, Bc = S = Ec()) : (T = true, S = Bc) : S.next === null ? (T = false, S = S.next = Ec()) : (T = true, S = S.next);
      return S;
    }
    function Gc() {
      Ac = R = null;
      Cc = false;
      Bc = null;
      Dc = 0;
      S = V = null;
    }
    function Hc(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function Ic(a, b, c) {
      R = W();
      S = Fc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (V !== null && (c = V.get(d), c !== void 0)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (c !== null);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === Hc ? typeof b === "function" ? b() : b : c !== void 0 ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = Jc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function Kc(a, b) {
      R = W();
      S = Fc();
      b = b === void 0 ? null : b;
      if (S !== null) {
        var c = S.memoizedState;
        if (c !== null && b !== null) {
          var d = c[1];
          a:
            if (d === null)
              d = false;
            else {
              for (var f = 0; f < d.length && f < b.length; f++)
                if (!zc(b[f], d[f])) {
                  d = false;
                  break a;
                }
              d = true;
            }
          if (d)
            return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function Jc(a, b, c) {
      if (25 <= Dc)
        throw Error(k(301));
      if (a === R)
        if (Cc = true, a = { action: c, next: null }, V === null && (V = /* @__PURE__ */ new Map()), c = V.get(b), c === void 0)
          V.set(b, a);
        else {
          for (b = c; b.next !== null; )
            b = b.next;
          b.next = a;
        }
    }
    function Lc() {
      throw Error(k(394));
    }
    function Mc() {
    }
    var Oc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: Kc, useReducer: Ic, useRef: function(a) {
      R = W();
      S = Fc();
      var b = S.memoizedState;
      return b === null ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return Ic(Hc, a);
    }, useInsertionEffect: Mc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Kc(function() {
        return a;
      }, b);
    }, useImperativeHandle: Mc, useEffect: Mc, useDebugValue: Mc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, Lc];
    }, useId: function() {
      var a = Ac.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - uc(a) - 1)).toString(32) + b;
      var c = Nc;
      if (c === null)
        throw Error(k(404));
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (c === void 0)
        throw Error(k(407));
      return c();
    } };
    var Nc = null;
    var Pc = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Qc(a) {
      console.error(a);
      return null;
    }
    function X() {
    }
    function Rc(a, b, c, d, f, e, g, h, m) {
      var q = [], r = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: d === void 0 ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: r, pingedTasks: q, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Qc : f, onAllReady: e === void 0 ? X : e, onShellReady: g === void 0 ? X : g, onShellError: h === void 0 ? X : h, onFatalError: m === void 0 ? X : m };
      c = Sc(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Tc(b, a, null, c, r, kc, null, sc);
      q.push(a);
      return b;
    }
    function Tc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      c === null ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(m);
        b2.length === 1 && Uc(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Sc(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function Y(a, b) {
      a = a.onError(b);
      if (a != null && typeof a !== "string")
        throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Vc(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      a.destination !== null ? (a.status = 2, da(a.destination, b)) : (a.status = 1, a.fatalError = b);
    }
    function Wc(a, b, c, d, f) {
      R = {};
      Ac = b;
      U = 0;
      for (a = c(d, f); Cc; )
        Cc = false, U = 0, Dc += 1, S = null, a = c(d, f);
      Gc();
      return a;
    }
    function Xc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (e !== null && e !== void 0) {
        var g = b.legacyContext;
        if (typeof c.getChildContext !== "function")
          d = g;
        else {
          c = c.getChildContext();
          for (var h in c)
            if (!(h in e))
              throw Error(k(108, jc(d) || "Unknown", h));
          d = N({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else
        Z(a, b, f);
    }
    function Yc(a, b) {
      if (a && a.defaultProps) {
        b = N({}, b);
        a = a.defaultProps;
        for (var c in a)
          b[c] === void 0 && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Zc(a, b, c, d, f) {
      if (typeof c === "function")
        if (c.prototype && c.prototype.isReactComponent) {
          f = lc(c, b.legacyContext);
          var e = c.contextType;
          e = new c(d, typeof e === "object" && e !== null ? e._currentValue : f);
          rc(e, c, d, f);
          Xc(a, b, e, c);
        } else {
          e = lc(c, b.legacyContext);
          f = Wc(a, b, c, d, e);
          var g = U !== 0;
          if (typeof f === "object" && f !== null && typeof f.render === "function" && f.$$typeof === void 0)
            rc(f, c, d, e), Xc(a, b, f, c);
          else if (g) {
            d = b.treeContext;
            b.treeContext = tc(d, 1, 0);
            try {
              Z(a, b, f);
            } finally {
              b.treeContext = d;
            }
          } else
            Z(a, b, f);
        }
      else if (typeof c === "string") {
        f = b.blockedSegment;
        e = Sa(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = Ba(g, c, d);
        $c(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Ta, u(c), Ua);
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case gc:
          case fc:
          case Wb:
          case Xb:
          case Vb:
            Z(a, b, d.children);
            return;
          case bc:
            Z(a, b, d.children);
            return;
          case ec:
            throw Error(k(343));
          case ac:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(m);
              f.lastPushedText = false;
              var q = Sc(a, 0, null, f.formatContext, false, false);
              q.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = q;
              try {
                if ($c(a, b, d), q.lastPushedText && q.textEmbedded && q.chunks.push(Ca), q.status = 1, ad(h, q), h.pendingTasks === 0)
                  break a;
              } catch (r) {
                q.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, r);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Tc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if (typeof c === "object" && c !== null)
          switch (c.$$typeof) {
            case $b:
              d = Wc(a, b, c.render, d, f);
              if (U !== 0) {
                c = b.treeContext;
                b.treeContext = tc(c, 1, 0);
                try {
                  Z(a, b, d);
                } finally {
                  b.treeContext = c;
                }
              } else
                Z(a, b, d);
              return;
            case cc:
              c = c.type;
              d = Yc(c, d);
              Zc(a, b, c, d, f);
              return;
            case Yb:
              f = d.children;
              c = c._context;
              d = d.value;
              e = c._currentValue;
              c._currentValue = d;
              g = O;
              O = d = { parent: g, depth: g === null ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
              b.context = d;
              Z(a, b, f);
              a = O;
              if (a === null)
                throw Error(k(403));
              d = a.parentValue;
              a.context._currentValue = d === hc ? a.context._defaultValue : d;
              a = O = a.parent;
              b.context = a;
              return;
            case Zb:
              d = d.children;
              d = d(c._currentValue);
              Z(a, b, d);
              return;
            case dc:
              f = c._init;
              c = f(c._payload);
              d = Yc(c, d);
              Zc(a, b, c, d, void 0);
              return;
          }
        throw Error(k(130, c == null ? c : typeof c, ""));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if (typeof c === "object" && c !== null) {
        switch (c.$$typeof) {
          case Tb:
            Zc(a, b, c.type, c.props, c.ref);
            return;
          case Ub:
            throw Error(k(257));
          case dc:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (ra(c)) {
          bd(a, b, c);
          return;
        }
        c === null || typeof c !== "object" ? d = null : (d = ic && c[ic] || c["@@iterator"], d = typeof d === "function" ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            bd(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error(k(31, a === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : a));
      }
      typeof c === "string" ? (d = b.blockedSegment, d.lastPushedText = Da(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : typeof c === "number" && (d = b.blockedSegment, d.lastPushedText = Da(b.blockedSegment.chunks, "" + c, a.responseState, d.lastPushedText));
    }
    function bd(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = tc(e, d, f);
        try {
          $c(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function $c(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (Gc(), typeof m === "object" && m !== null && typeof m.then === "function") {
          c = m;
          var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Tc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          Q(e);
        } else
          throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, Q(e), m;
      }
    }
    function cd(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      dd(this, b, a);
    }
    function ed(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      d === null ? (b.allPendingTasks--, b.status !== 2 && (b.status = 2, b.destination !== null && b.destination.close())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, a = c === void 0 ? Error(k(432)) : c, d.errorDigest = b.onError(a), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return ed(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, b.allPendingTasks === 0 && (d = b.onAllReady, d()));
    }
    function ad(a, b) {
      if (b.chunks.length === 0 && b.children.length === 1 && b.children[0].boundary === null) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        c.status === 1 && ad(a, c);
      } else
        a.completedSegments.push(b);
    }
    function dd(a, b, c) {
      if (b === null) {
        if (c.parentFlushed) {
          if (a.completedRootSegment !== null)
            throw Error(k(389));
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        a.pendingRootTasks === 0 && (a.onShellError = X, b = a.onShellReady, b());
      } else
        b.pendingTasks--, b.forceClientRender || (b.pendingTasks === 0 ? (c.parentFlushed && c.status === 1 && ad(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(cd, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && c.status === 1 && (ad(b, c), b.completedSegments.length === 1 && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      a.allPendingTasks === 0 && (a = a.onAllReady, a());
    }
    function Uc(a) {
      if (a.status !== 2) {
        var b = O, c = Pc.current;
        Pc.current = Oc;
        var d = Nc;
        Nc = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (m.status === 0) {
              Q(g.context);
              try {
                Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(Ca), g.abortSet.delete(g), m.status = 1, dd(h, g.blockedBoundary, m);
              } catch (G) {
                if (Gc(), typeof G === "object" && G !== null && typeof G.then === "function") {
                  var q = g.ping;
                  G.then(q, q);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var r = g.blockedBoundary, v = G, A = Y(h, v);
                  r === null ? Vc(h, v) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = true, r.errorDigest = A, r.parentFlushed && h.clientRenderedBoundaries.push(r)));
                  h.allPendingTasks--;
                  if (h.allPendingTasks === 0) {
                    var F = h.onAllReady;
                    F();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          a.destination !== null && fd(a, a.destination);
        } catch (G) {
          Y(a, G), Vc(a, G);
        } finally {
          Nc = d, Pc.current = c, c === Oc && Q(b);
        }
      }
    }
    function gd(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          p(b, Va);
          p(b, a.placeholderPrefix);
          a = u(d.toString(16));
          p(b, a);
          return t(b, Wa);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++)
              p(b, d[e]);
            f = hd(a, b, f);
          }
          for (; e < d.length - 1; e++)
            p(b, d[e]);
          e < d.length && (f = t(b, d[e]));
          return f;
        default:
          throw Error(k(390));
      }
    }
    function hd(a, b, c) {
      var d = c.boundary;
      if (d === null)
        return gd(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender)
        d = d.errorDigest, t(b, $a), p(b, bb), d && (p(b, db), p(b, u(C(d))), p(b, cb)), t(b, eb), gd(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = w(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        fb(b, a.responseState, d);
        gd(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize)
        d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), fb(b, a.responseState, d.id), gd(a, b, c);
      else {
        t(b, Xa);
        c = d.completedSegments;
        if (c.length !== 1)
          throw Error(k(391));
        hd(a, b, c[0]);
      }
      return t(b, ab);
    }
    function id(a, b, c) {
      Bb(b, a.responseState, c.formatContext, c.id);
      hd(a, b, c);
      return Cb(b, c.formatContext);
    }
    function jd(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++)
        kd(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      p(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? p(b, Jb) : (a.sentCompleteBoundaryFunction = true, p(b, Ib));
      if (d === null)
        throw Error(k(395));
      c = u(c.toString(16));
      p(b, d);
      p(b, Kb);
      p(b, a.segmentPrefix);
      p(b, c);
      return t(b, Lb);
    }
    function kd(a, b, c, d) {
      if (d.status === 2)
        return true;
      var f = d.id;
      if (f === -1) {
        if ((d.id = c.rootSegmentID) === -1)
          throw Error(k(392));
        return id(a, b, d);
      }
      id(a, b, d);
      a = a.responseState;
      p(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? p(b, Eb) : (a.sentCompleteSegmentFunction = true, p(b, Db));
      p(b, a.segmentPrefix);
      f = u(f.toString(16));
      p(b, f);
      p(b, Gb);
      p(b, a.placeholderPrefix);
      p(b, f);
      return t(b, Hb);
    }
    function fd(a, b) {
      l = new Uint8Array(512);
      n = 0;
      try {
        var c = a.completedRootSegment;
        if (c !== null && a.pendingRootTasks === 0) {
          hd(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++)
            p(b, d[c]);
          c < d.length && t(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, m = g.id, q = g.errorDigest, r = g.errorMessage, v = g.errorComponentStack;
          p(d, h.startInlineScript);
          h.sentClientRenderFunction ? p(d, Nb) : (h.sentClientRenderFunction = true, p(d, Mb));
          if (m === null)
            throw Error(k(395));
          p(d, m);
          p(d, Ob);
          if (q || r || v)
            p(d, Qb), p(d, u(Sb(q || "")));
          if (r || v)
            p(d, Qb), p(d, u(Sb(r || "")));
          v && (p(d, Qb), p(d, u(Sb(v))));
          if (!t(d, Pb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var A = a.completedBoundaries;
        for (e = 0; e < A.length; e++)
          if (!jd(a, b, A[e])) {
            a.destination = null;
            e++;
            A.splice(0, e);
            return;
          }
        A.splice(0, e);
        ba(b);
        l = new Uint8Array(512);
        n = 0;
        var F = a.partialBoundaries;
        for (e = 0; e < F.length; e++) {
          var G = F[e];
          a: {
            f = a;
            g = b;
            var ma = G.completedSegments;
            for (h = 0; h < ma.length; h++)
              if (!kd(f, g, G, ma[h])) {
                h++;
                ma.splice(0, h);
                var Fb = false;
                break a;
              }
            ma.splice(0, h);
            Fb = true;
          }
          if (!Fb) {
            a.destination = null;
            e++;
            F.splice(0, e);
            return;
          }
        }
        F.splice(0, e);
        var na = a.completedBoundaries;
        for (e = 0; e < na.length; e++)
          if (!jd(a, b, na[e])) {
            a.destination = null;
            e++;
            na.splice(0, e);
            return;
          }
        na.splice(0, e);
      } finally {
        ba(b), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && b.close();
      }
    }
    function ld(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return ed(c2, a, b);
        });
        c.clear();
        a.destination !== null && fd(a, a.destination);
      } catch (d) {
        Y(a, d), Vc(a, d);
      }
    }
    exports.renderToReadableStream = function(a, b) {
      return new Promise(function(c, d) {
        var f, e, g = new Promise(function(a2, b2) {
          e = a2;
          f = b2;
        }), h = Rc(a, za(b ? b.identifierPrefix : void 0, b ? b.nonce : void 0, b ? b.bootstrapScriptContent : void 0, b ? b.bootstrapScripts : void 0, b ? b.bootstrapModules : void 0), Aa(b ? b.namespaceURI : void 0), b ? b.progressiveChunkSize : void 0, b ? b.onError : void 0, e, function() {
          var a2 = new ReadableStream({ type: "bytes", pull: function(a3) {
            if (h.status === 1)
              h.status = 2, da(a3, h.fatalError);
            else if (h.status !== 2 && h.destination === null) {
              h.destination = a3;
              try {
                fd(h, a3);
              } catch (A) {
                Y(h, A), Vc(h, A);
              }
            }
          }, cancel: function() {
            ld(h);
          } }, { highWaterMark: 0 });
          a2.allReady = g;
          c(a2);
        }, function(a2) {
          g.catch(function() {
          });
          d(a2);
        }, f);
        if (b && b.signal) {
          var m = b.signal, q = function() {
            ld(h, m.reason);
            m.removeEventListener("abort", q);
          };
          m.addEventListener("abort", q);
        }
        Uc(h);
      });
    };
    exports.version = "18.2.0";
  }
});

// node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    init_import_shim();
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_browser_production_min();
      s = require_react_dom_server_browser_production_min();
    } else {
      l = null;
      s = null;
    }
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToNodeStream = l.renderToNodeStream;
    exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports.renderToReadableStream = s.renderToReadableStream;
  }
});

// util/handler.tsx
init_import_shim();

// src/app.tsx
init_import_shim();
function App({ req, isCold: isCold2 }) {
  const parsedCity = decodeURIComponent(req.headers.get("x-vercel-ip-city"));
  const city = parsedCity === "null" ? null : parsedCity;
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement(Head, null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    style: { height: "100%" }
  }, /* @__PURE__ */ React.createElement(Card, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", null, "Hello from the edge!")), /* @__PURE__ */ React.createElement("div", {
    class: "info"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "block"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "contents"
  }, /* @__PURE__ */ React.createElement("span", null, "Your city"), /* @__PURE__ */ React.createElement("strong", {
    title: city === null ? "GeoIP information could not be derived from your IP" : null,
    class: city === null ? "na" : null
  }, city === null ? "N/A" : city))), /* @__PURE__ */ React.createElement("div", {
    class: "block"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "contents"
  }, /* @__PURE__ */ React.createElement("span", null, "Your IP address"), /* @__PURE__ */ React.createElement("strong", null, ip))))), /* @__PURE__ */ React.createElement("div", {
    class: "debug"
  }, "Generated at ", new Date().toISOString(), " (", isCold2 ? "cold" : "hot", ")")), /* @__PURE__ */ React.createElement(Footer, null)));
}
function Head() {
  return /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "React on the edge"), /* @__PURE__ */ React.createElement("meta", {
    charset: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/static/favicon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "/static/app.css"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: "HTML, dynamically rendered in a city near you"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:site",
    content: "@vercel"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:creator",
    content: "@vercel"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:title",
    content: "React on the edge"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:description",
    content: "HTML, dynamically rendered in a city near you"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:image",
    content: "/static/og/card.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "twitter:image:alt",
    content: "The Vercel and React logos"
  }));
}
function Card() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "card",
    viewBox: "0 50 840 440",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-1",
    gradientUnits: "userSpaceOnUse",
    x1: 420,
    y1: 275,
    x2: 420,
    y2: 167,
    gradientTransform: "matrix(1 0 0 -1 0 442)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.464,
    style: {
      stopOpacity: 0.2
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.9,
    style: {
      stopOpacity: 0
    }
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-2",
    gradientUnits: "userSpaceOnUse",
    x1: 420,
    y1: 325,
    x2: 420,
    y2: 117.001,
    gradientTransform: "matrix(1 0 0 -1 0 442)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.464,
    style: {
      stopOpacity: 0.2
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 1,
    style: {
      stopOpacity: 0
    }
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-3",
    gradientUnits: "userSpaceOnUse",
    x1: 420,
    y1: 382,
    x2: 420,
    y2: 60.001,
    gradientTransform: "matrix(1 0 0 -1 0 442)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.464,
    style: {
      stopOpacity: 0.16
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.9,
    style: {
      stopOpacity: 0
    }
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-4",
    gradientUnits: "userSpaceOnUse",
    x1: 420,
    y1: 488.788,
    x2: 420,
    y2: -46.967,
    gradientTransform: "matrix(1 0 0 -1 0 442)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.089,
    style: {
      stopOpacity: 0.1
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.464,
    style: {
      stopOpacity: 0.27
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.896,
    style: {
      stopOpacity: 0
    }
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-5",
    gradientUnits: "userSpaceOnUse",
    x1: 420,
    y1: 610,
    x2: 420,
    y2: -168.179,
    gradientTransform: "matrix(1 0 0 -1 0 442)"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.172,
    style: {
      stopOpacity: 0
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.464,
    style: {
      stopOpacity: 0.21
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.771,
    style: {
      stopOpacity: 0
    }
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-vercel",
    gradientUnits: "objectBoundingBox",
    x1: 0,
    y1: 0,
    x2: 1.5,
    y2: 1
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.3,
    style: {
      stopColor: "var(--g1)"
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.5,
    style: {
      stopColor: "var(--g2)"
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.8,
    style: {
      stopColor: "var(--g1)"
    }
  })), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "gradient-react",
    gradientUnits: "objectBoundingBox",
    x1: 0,
    y1: 0,
    x2: 1.1,
    y2: 1
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: 0.3,
    style: {
      stopColor: "var(--react)"
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.5,
    style: {
      stopColor: "#BBF0FF"
    }
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: 0.8,
    style: {
      stopColor: "var(--react)"
    }
  })), /* @__PURE__ */ React.createElement("symbol", {
    id: "react-logo",
    viewBox: "-11.5 -10.23174 23 20.46348"
  }, /* @__PURE__ */ React.createElement("circle", {
    r: 2.05,
    fill: "#61dafb"
  }), /* @__PURE__ */ React.createElement("g", {
    stroke: "var(--react)",
    fill: "none"
  }, /* @__PURE__ */ React.createElement("ellipse", {
    rx: 11,
    ry: 4.2
  }), /* @__PURE__ */ React.createElement("ellipse", {
    rx: 11,
    ry: 4.2,
    transform: "rotate(60)"
  }), /* @__PURE__ */ React.createElement("ellipse", {
    rx: 11,
    ry: 4.2,
    transform: "rotate(120)"
  }))), /* @__PURE__ */ React.createElement("linearGradient", {
    id: "#mask-gradient"
  }, /* @__PURE__ */ React.createElement("stop", {
    offset: "0",
    "stop-color": "black"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    "stop-color": "white"
  })), /* @__PURE__ */ React.createElement("mask", {
    id: "mask"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "0",
    width: "200",
    height: "200",
    fill: "url(#mask-gradient)"
  }))), /* @__PURE__ */ React.createElement("g", {
    className: "orbits",
    transform: "translate(420, 220)"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    className: "orbit",
    style: {
      stroke: "url(#gradient-1)",
      animationDelay: 0
    },
    r: 53.4
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    className: "orbit",
    style: {
      stroke: "url(#gradient-2)",
      animationDelay: "0.03s"
    },
    r: 103.4
  }), /* @__PURE__ */ React.createElement("circle", {
    className: "gray satellite",
    style: {
      animationDelay: "0.9s"
    },
    cx: -69.6,
    cy: -76,
    r: 5.8
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    className: "orbit",
    style: {
      stroke: "url(#gradient-3)",
      animationDelay: "0.06s"
    },
    r: 160.4
  }), /* @__PURE__ */ React.createElement("circle", {
    className: "orange satellite",
    style: {
      animationDelay: "0.8s"
    },
    cx: 102.4,
    cy: -123,
    r: 5.8
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    className: "orbit",
    style: {
      stroke: "url(#gradient-4)",
      animationDelay: "0.09s"
    },
    r: 267.3
  }), /* @__PURE__ */ React.createElement("circle", {
    className: "orange satellite",
    style: {
      animationDelay: "0.6s"
    },
    cx: -243.6,
    cy: 111.4,
    r: 5.8
  }), /* @__PURE__ */ React.createElement("circle", {
    className: "gray satellite",
    style: {
      animationDelay: "1s"
    },
    cx: 250,
    cy: 94.4,
    r: 5.8
  }), /* @__PURE__ */ React.createElement("circle", {
    className: "orange satellite",
    style: {
      animationDelay: "0.7s"
    },
    cx: -236.6,
    cy: -123.6,
    r: 5.8
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("circle", {
    className: "orbit",
    style: {
      stroke: "url(#gradient-5)",
      animationDelay: "0.12s"
    },
    r: 388.5
  }))), /* @__PURE__ */ React.createElement("path", {
    id: "vercel-logo",
    d: "m336.4 261-46.2-80-46.2 80h92.4z",
    style: {
      fill: "url(#gradient-vercel)"
    }
  }), /* @__PURE__ */ React.createElement("g", {
    id: "center"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M420 202 v36 M 402 220h36",
    style: {
      strokeWidth: 3.5625,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: "#999",
      fill: "none"
    }
  })), /* @__PURE__ */ React.createElement("use", {
    href: "#react-logo",
    width: 98,
    x: 500
  }), /* @__PURE__ */ React.createElement("use", {
    href: "#react-logo",
    width: 98,
    x: 500,
    mask: "url(#mask)"
  }));
}
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", {
    class: "company"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://vercel.com",
    "aria-label": "Vercel"
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 4438 1000",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z",
    fill: "var(--fg)"
  })))), /* @__PURE__ */ React.createElement("p", {
    class: "details"
  }, "Built with", " ", /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://nextjs.org"
  }, "React"), " ", "on", " ", /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://vercel.com"
  }, "Vercel")), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://github.com/vercel-labs/react-on-the-edge",
    class: "source"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z",
    fill: "var(--fg)"
  })), "Source"));
}

// util/handler.tsx
var import_server = __toESM(require_server_browser());
var isCold = true;
async function Handler(req) {
  const wasCold = isCold;
  let html;
  isCold = false;
  try {
    html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(App, {
      req,
      isCold: wasCold
    }));
  } catch (err) {
    console.error("Render error:", err.stack);
    return new Response(`<!doctype html><h1>Internal application error</h1>
      <p>The app failed to render. Check your Edge Function logs.</p>`, {
      status: 500,
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      }
    });
  }
  return new Response(`<!doctype html>` + html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "x-is-cold": wasCold ? "true" : "false"
    }
  });
}
export {
  Handler as default
};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
