(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray2(val) {
        return toString.call(val) === "[object Array]";
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return typeof FormData !== "undefined" && val instanceof FormData;
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject2(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction2(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject2(val) && isFunction2(val.pipe);
      }
      function isURLSearchParams(val) {
        return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray2(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray2(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray: isArray2,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject: isObject2,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction: isFunction2,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url2, params, paramsSerializer) {
        if (!params) {
          return url2;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url2.indexOf("#");
          if (hashmarkIndex !== -1) {
            url2 = url2.slice(0, hashmarkIndex);
          }
          url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url2;
      };
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      module.exports = function enhanceError(error, config2, code, request2, response) {
        error.config = config2;
        if (code) {
          error.code = code;
        }
        error.request = request2;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
          };
        };
        return error;
      };
    }
  });

  // node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config2, code, request2, response) {
        var error = new Error(message);
        return enhanceError(error, config2, code, request2, response);
      };
    }
  });

  // node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError(
            "Request failed with status code " + response.status,
            response.config,
            null,
            response.request,
            response
          ));
        }
      };
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? (
        // Standard browser envs support document.cookie
        /* @__PURE__ */ function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }()
      ) : (
        // Non standard browser env (web workers, react-native) lack needed support.
        /* @__PURE__ */ function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }()
      );
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url2) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url2);
      };
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement("a");
          var originURL;
          function resolveURL(url2) {
            var href = url2;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin(requestURL) {
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        /* @__PURE__ */ function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }()
      );
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      module.exports = function xhrAdapter(config2) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config2.data;
          var requestHeaders = config2.headers;
          var responseType = config2.responseType;
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request2 = new XMLHttpRequest();
          if (config2.auth) {
            var username = config2.auth.username || "";
            var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config2.baseURL, config2.url);
          request2.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
          request2.timeout = config2.timeout;
          function onloadend() {
            if (!request2) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders(request2.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
            var response = {
              data: responseData,
              status: request2.status,
              statusText: request2.statusText,
              headers: responseHeaders,
              config: config2,
              request: request2
            };
            settle(resolve, reject, response);
            request2 = null;
          }
          if ("onloadend" in request2) {
            request2.onloadend = onloadend;
          } else {
            request2.onreadystatechange = function handleLoad() {
              if (!request2 || request2.readyState !== 4) {
                return;
              }
              if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request2.onabort = function handleAbort() {
            if (!request2) {
              return;
            }
            reject(createError("Request aborted", config2, "ECONNABORTED", request2));
            request2 = null;
          };
          request2.onerror = function handleError() {
            reject(createError("Network Error", config2, null, request2));
            request2 = null;
          };
          request2.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = "timeout of " + config2.timeout + "ms exceeded";
            if (config2.timeoutErrorMessage) {
              timeoutErrorMessage = config2.timeoutErrorMessage;
            }
            reject(createError(
              timeoutErrorMessage,
              config2,
              config2.transitional && config2.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
              request2
            ));
            request2 = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config2.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request2) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request2.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config2.withCredentials)) {
            request2.withCredentials = !!config2.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request2.responseType = config2.responseType;
          }
          if (typeof config2.onDownloadProgress === "function") {
            request2.addEventListener("progress", config2.onDownloadProgress);
          }
          if (typeof config2.onUploadProgress === "function" && request2.upload) {
            request2.upload.addEventListener("progress", config2.onUploadProgress);
          }
          if (config2.cancelToken) {
            config2.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request2) {
                return;
              }
              request2.abort();
              reject(cancel);
              request2 = null;
            });
          }
          if (!requestData) {
            requestData = null;
          }
          request2.send(requestData);
        });
      };
    }
  });

  // node_modules/axios/lib/defaults.js
  var require_defaults = __commonJS({
    "node_modules/axios/lib/defaults.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data2, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data2) || utils.isArrayBuffer(data2) || utils.isBuffer(data2) || utils.isStream(data2) || utils.isFile(data2) || utils.isBlob(data2)) {
            return data2;
          }
          if (utils.isArrayBufferView(data2)) {
            return data2.buffer;
          }
          if (utils.isURLSearchParams(data2)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data2.toString();
          }
          if (utils.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data2);
          }
          return data2;
        }],
        transformResponse: [function transformResponse(data2) {
          var transitional = this.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data2) && data2.length) {
            try {
              return JSON.parse(data2);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw enhanceError(e, this, "E_JSON_PARSE");
                }
                throw e;
              }
            }
          }
          return data2;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
      };
      defaults.headers = {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data2, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data2 = fn.call(context, data2, headers);
        });
        return data2;
      };
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      function throwIfCancellationRequested(config2) {
        if (config2.cancelToken) {
          config2.cancelToken.throwIfRequested();
        }
      }
      module.exports = function dispatchRequest(config2) {
        throwIfCancellationRequested(config2);
        config2.headers = config2.headers || {};
        config2.data = transformData.call(
          config2,
          config2.data,
          config2.headers,
          config2.transformRequest
        );
        config2.headers = utils.merge(
          config2.headers.common || {},
          config2.headers[config2.method] || {},
          config2.headers
        );
        utils.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function cleanHeaderConfig(method) {
            delete config2.headers[method];
          }
        );
        var adapter = config2.adapter || defaults.adapter;
        return adapter(config2).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config2);
          response.data = transformData.call(
            config2,
            response.data,
            response.headers,
            config2.transformResponse
          );
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config2);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config2,
                reason.response.data,
                reason.response.headers,
                config2.transformResponse
              );
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config3 = {};
        var valueFromConfig2Keys = ["url", "method", "data"];
        var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
        var defaultToConfig2Keys = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding"
        ];
        var directMergeKeys = ["validateStatus"];
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config3[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config3[prop] = getMergedValue(void 0, config1[prop]);
          }
        }
        utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config3[prop] = getMergedValue(void 0, config2[prop]);
          }
        });
        utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
        utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            config3[prop] = getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            config3[prop] = getMergedValue(void 0, config1[prop]);
          }
        });
        utils.forEach(directMergeKeys, function merge(prop) {
          if (prop in config2) {
            config3[prop] = getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            config3[prop] = getMergedValue(void 0, config1[prop]);
          }
        });
        var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
        var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });
        utils.forEach(otherKeys, mergeDeepProperties);
        return config3;
      };
    }
  });

  // node_modules/axios/package.json
  var require_package = __commonJS({
    "node_modules/axios/package.json"(exports, module) {
      module.exports = {
        name: "axios",
        version: "0.21.4",
        description: "Promise based HTTP client for the browser and node.js",
        main: "index.js",
        scripts: {
          test: "grunt test",
          start: "node ./sandbox/server.js",
          build: "NODE_ENV=production grunt build",
          preversion: "npm test",
          version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
          postversion: "git push && git push --tags",
          examples: "node ./examples/server.js",
          coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
          fix: "eslint --fix lib/**/*.js"
        },
        repository: {
          type: "git",
          url: "https://github.com/axios/axios.git"
        },
        keywords: [
          "xhr",
          "http",
          "ajax",
          "promise",
          "node"
        ],
        author: "Matt Zabriskie",
        license: "MIT",
        bugs: {
          url: "https://github.com/axios/axios/issues"
        },
        homepage: "https://axios-http.com",
        devDependencies: {
          coveralls: "^3.0.0",
          "es6-promise": "^4.2.4",
          grunt: "^1.3.0",
          "grunt-banner": "^0.6.0",
          "grunt-cli": "^1.2.0",
          "grunt-contrib-clean": "^1.1.0",
          "grunt-contrib-watch": "^1.0.0",
          "grunt-eslint": "^23.0.0",
          "grunt-karma": "^4.0.0",
          "grunt-mocha-test": "^0.13.3",
          "grunt-ts": "^6.0.0-beta.19",
          "grunt-webpack": "^4.0.2",
          "istanbul-instrumenter-loader": "^1.0.0",
          "jasmine-core": "^2.4.1",
          karma: "^6.3.2",
          "karma-chrome-launcher": "^3.1.0",
          "karma-firefox-launcher": "^2.1.0",
          "karma-jasmine": "^1.1.1",
          "karma-jasmine-ajax": "^0.1.13",
          "karma-safari-launcher": "^1.0.0",
          "karma-sauce-launcher": "^4.3.6",
          "karma-sinon": "^1.0.5",
          "karma-sourcemap-loader": "^0.3.8",
          "karma-webpack": "^4.0.2",
          "load-grunt-tasks": "^3.5.2",
          minimist: "^1.2.0",
          mocha: "^8.2.1",
          sinon: "^4.5.0",
          "terser-webpack-plugin": "^4.2.3",
          typescript: "^4.0.5",
          "url-search-params": "^0.10.0",
          webpack: "^4.44.2",
          "webpack-dev-server": "^3.11.0"
        },
        browser: {
          "./lib/adapters/http.js": "./lib/adapters/xhr.js"
        },
        jsdelivr: "dist/axios.min.js",
        unpkg: "dist/axios.min.js",
        typings: "./index.d.ts",
        dependencies: {
          "follow-redirects": "^1.14.0"
        },
        bundlesize: [
          {
            path: "./dist/axios.min.js",
            threshold: "5kB"
          }
        ]
      };
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var pkg = require_package();
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      var currentVerArr = pkg.version.split(".");
      function isOlderVersion(version, thanVersion) {
        var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
        var destVer = version.split(".");
        for (var i = 0; i < 3; i++) {
          if (pkgVersionArr[i] > destVer[i]) {
            return true;
          } else if (pkgVersionArr[i] < destVer[i]) {
            return false;
          }
        }
        return false;
      }
      validators.transitional = function transitional(validator, version, message) {
        var isDeprecated = version && isOlderVersion(version);
        function formatMessage(opt, desc) {
          return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed in " + version));
          }
          if (isDeprecated && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys2 = Object.keys(options);
        var i = keys2.length;
        while (i-- > 0) {
          var opt = keys2[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        isOlderVersion,
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request2(config2) {
        if (typeof config2 === "string") {
          config2 = arguments[1] || {};
          config2.url = arguments[0];
        } else {
          config2 = config2 || {};
        }
        config2 = mergeConfig(this.defaults, config2);
        if (config2.method) {
          config2.method = config2.method.toLowerCase();
        } else if (this.defaults.method) {
          config2.method = this.defaults.method.toLowerCase();
        } else {
          config2.method = "get";
        }
        var transitional = config2.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
            forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
            clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config2);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config2;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config2) {
        config2 = mergeConfig(this.defaults, config2);
        return buildURL(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url2, config2) {
          return this.request(mergeConfig(config2 || {}, {
            method,
            url: url2,
            data: (config2 || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url2, data2, config2) {
          return this.request(mergeConfig(config2 || {}, {
            method,
            url: url2,
            data: data2
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      module.exports = function isAxiosError(payload) {
        return typeof payload === "object" && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.create = function create(instanceConfig) {
        return createInstance(mergeConfig(axios.defaults, instanceConfig));
      };
      axios.Cancel = require_Cancel();
      axios.CancelToken = require_CancelToken();
      axios.isCancel = require_isCancel();
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = require_spread();
      axios.isAxiosError = require_isAxiosError();
      module.exports = axios;
      module.exports.default = axios;
    }
  });

  // node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // node_modules/ws/browser.js
  var require_browser = __commonJS({
    "node_modules/ws/browser.js"(exports, module) {
      "use strict";
      module.exports = function() {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    }
  });

  // node_modules/@spica-devkit/bucket/dist/index.mjs
  var import_axios = __toESM(require_axios2(), 1);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function createCommonjsModule(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function(path, base) {
        return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }
  function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }
  var request = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Axios = exports.logWarning = void 0;
    function logWarning(response) {
      const warning = response.headers["warning"];
      if (warning) {
        console.warn(warning);
      }
    }
    exports.logWarning = logWarning;
    class Axios {
      constructor(config2) {
        this.interceptors = {
          request: {
            onFulfilled: (request2) => {
              request2.maxBodyLength = Number.MAX_SAFE_INTEGER;
              request2.maxContentLength = Number.MAX_SAFE_INTEGER;
              if (!request2.headers["Authorization"]) {
                throw new Error("You should call initialize method with a valid apikey or identity token.");
              }
              return request2;
            },
            onRejected: (error) => {
              return Promise.reject(error);
            }
          },
          response: {
            onFulfilled: (response) => {
              logWarning(response);
              return response.data;
            },
            onRejected: (error) => {
              return Promise.reject(error.response ? error.response.data : error);
            }
          }
        };
        this.instance = import_axios.default.default.create(config2);
        this.instance.interceptors.request.use(this.interceptors.request.onFulfilled, this.interceptors.request.onRejected);
        this.instance.interceptors.response.use(this.interceptors.response.onFulfilled, this.interceptors.response.onRejected);
        this.baseUrl = this.instance.defaults.baseURL;
      }
      setBaseUrl(url2) {
        this.instance.defaults.baseURL = url2;
      }
      setWriteDefaults(writeDefaults) {
        for (const [header, value] of Object.entries(writeDefaults.headers)) {
          this.instance.defaults.headers.post[header] = value;
          this.instance.defaults.headers.put[header] = value;
        }
      }
      setAuthorization(authorization2) {
        this.instance.defaults.headers["Authorization"] = authorization2;
      }
      get(url2, config2) {
        return this.instance.get(url2, config2);
      }
      post(url2, body, config2) {
        return this.instance.post(url2, body, config2);
      }
      put(url2, body, config2) {
        return this.instance.put(url2, body, config2);
      }
      patch(url2, body, config2) {
        return this.instance.patch(url2, body, config2);
      }
      delete(url2, config2) {
        return this.instance.delete(url2, config2);
      }
      request(config2) {
        return this.instance.request(config2);
      }
    }
    exports.Axios = Axios;
  });
  var initialize_1 = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPlatformBrowser = exports.checkInitialized = exports.initialize = void 0;
    let service2;
    function initialize2(options) {
      let authorization2;
      if ("apikey" in options) {
        authorization2 = `APIKEY ${options.apikey}`;
      } else if ("identity" in options) {
        authorization2 = `IDENTITY ${options.identity}`;
      }
      checkInitialized(authorization2);
      const publicUrl2 = options.publicUrl || getPublicUrl();
      if (!publicUrl2) {
        throw new Error("Public url must be provided.");
      }
      if (!service2) {
        service2 = new request.Axios({ baseURL: publicUrl2, headers: { Authorization: authorization2 } });
      } else {
        service2.setBaseUrl(publicUrl2);
        service2.setAuthorization(authorization2);
      }
      return { authorization: authorization2, publicUrl: publicUrl2, service: service2 };
    }
    exports.initialize = initialize2;
    function checkInitialized(authorization2) {
      if (!authorization2) {
        throw new Error("You should call initialize method with a valid apikey or identity token.");
      }
    }
    exports.checkInitialized = checkInitialized;
    function getPublicUrl() {
      return isPlatformBrowser() ? void 0 : process.env.__INTERNAL__SPICA__PUBLIC_URL__;
    }
    function isPlatformBrowser() {
      return typeof window !== "undefined";
    }
    exports.isPlatformBrowser = isPlatformBrowser;
  });
  var _interface = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  });
  var url = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildUrl = void 0;
    function buildUrl(baseUrl, queryParams = {}) {
      const url2 = new URL(baseUrl);
      for (let [key, value] of Object.entries(queryParams)) {
        if (typeof value != "string") {
          value = JSON.stringify(value);
        }
        url2.searchParams.set(key, value);
      }
      return url2;
    }
    exports.buildUrl = buildUrl;
  });
  var src = createCommonjsModule(function(module, exports) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(initialize_1, exports);
    __exportStar(_interface, exports);
    __exportStar(request, exports);
    __exportStar(url, exports);
  });
  var internal_common = createCommonjsModule(function(module, exports) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(src, exports);
  });
  var realtime = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SequenceKind = exports.ChunkKind = void 0;
    var ChunkKind;
    (function(ChunkKind2) {
      ChunkKind2[ChunkKind2["Error"] = -1] = "Error";
      ChunkKind2[ChunkKind2["Initial"] = 0] = "Initial";
      ChunkKind2[ChunkKind2["EndOfInitial"] = 1] = "EndOfInitial";
      ChunkKind2[ChunkKind2["Insert"] = 2] = "Insert";
      ChunkKind2[ChunkKind2["Delete"] = 3] = "Delete";
      ChunkKind2[ChunkKind2["Expunge"] = 4] = "Expunge";
      ChunkKind2[ChunkKind2["Update"] = 5] = "Update";
      ChunkKind2[ChunkKind2["Replace"] = 6] = "Replace";
      ChunkKind2[ChunkKind2["Order"] = 7] = "Order";
      ChunkKind2[ChunkKind2["Response"] = 8] = "Response";
    })(ChunkKind = exports.ChunkKind || (exports.ChunkKind = {}));
    var SequenceKind;
    (function(SequenceKind2) {
      SequenceKind2[SequenceKind2["Delete"] = 0] = "Delete";
      SequenceKind2[SequenceKind2["Substitute"] = 1] = "Substitute";
      SequenceKind2[SequenceKind2["Insert"] = 2] = "Insert";
    })(SequenceKind = exports.SequenceKind || (exports.SequenceKind = {}));
  });
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function isFunction(x) {
    return typeof x === "function";
  }
  var _enable_super_gross_mode_that_will_cause_bad_things = false;
  var config = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(value) {
      if (value) {
        var error = /* @__PURE__ */ new Error();
        /* @__PURE__ */ console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
      }
      _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
      return _enable_super_gross_mode_that_will_cause_bad_things;
    }
  };
  function hostReportError(err) {
    setTimeout(function() {
      throw err;
    }, 0);
  }
  var empty = {
    closed: true,
    next: function(value) {
    },
    error: function(err) {
      if (config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError(err);
      }
    },
    complete: function() {
    }
  };
  var isArray = /* @__PURE__ */ function() {
    return Array.isArray || function(x) {
      return x && typeof x.length === "number";
    };
  }();
  function isObject(x) {
    return x !== null && typeof x === "object";
  }
  var UnsubscriptionErrorImpl = /* @__PURE__ */ function() {
    function UnsubscriptionErrorImpl2(errors) {
      Error.call(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
      return this;
    }
    UnsubscriptionErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl2;
  }();
  var UnsubscriptionError = UnsubscriptionErrorImpl;
  var Subscription = /* @__PURE__ */ function() {
    function Subscription2(unsubscribe) {
      this.closed = false;
      this._parentOrParents = null;
      this._subscriptions = null;
      if (unsubscribe) {
        this._ctorUnsubscribe = true;
        this._unsubscribe = unsubscribe;
      }
    }
    Subscription2.prototype.unsubscribe = function() {
      var errors;
      if (this.closed) {
        return;
      }
      var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
      this.closed = true;
      this._parentOrParents = null;
      this._subscriptions = null;
      if (_parentOrParents instanceof Subscription2) {
        _parentOrParents.remove(this);
      } else if (_parentOrParents !== null) {
        for (var index = 0; index < _parentOrParents.length; ++index) {
          var parent_1 = _parentOrParents[index];
          parent_1.remove(this);
        }
      }
      if (isFunction(_unsubscribe)) {
        if (_ctorUnsubscribe) {
          this._unsubscribe = void 0;
        }
        try {
          _unsubscribe.call(this);
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
        }
      }
      if (isArray(_subscriptions)) {
        var index = -1;
        var len = _subscriptions.length;
        while (++index < len) {
          var sub = _subscriptions[index];
          if (isObject(sub)) {
            try {
              sub.unsubscribe();
            } catch (e) {
              errors = errors || [];
              if (e instanceof UnsubscriptionError) {
                errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
              } else {
                errors.push(e);
              }
            }
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var subscription = teardown;
      if (!teardown) {
        return Subscription2.EMPTY;
      }
      switch (typeof teardown) {
        case "function":
          subscription = new Subscription2(teardown);
        case "object":
          if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
            return subscription;
          } else if (this.closed) {
            subscription.unsubscribe();
            return subscription;
          } else if (!(subscription instanceof Subscription2)) {
            var tmp = subscription;
            subscription = new Subscription2();
            subscription._subscriptions = [tmp];
          }
          break;
        default: {
          throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
        }
      }
      var _parentOrParents = subscription._parentOrParents;
      if (_parentOrParents === null) {
        subscription._parentOrParents = this;
      } else if (_parentOrParents instanceof Subscription2) {
        if (_parentOrParents === this) {
          return subscription;
        }
        subscription._parentOrParents = [_parentOrParents, this];
      } else if (_parentOrParents.indexOf(this) === -1) {
        _parentOrParents.push(this);
      } else {
        return subscription;
      }
      var subscriptions = this._subscriptions;
      if (subscriptions === null) {
        this._subscriptions = [subscription];
      } else {
        subscriptions.push(subscription);
      }
      return subscription;
    };
    Subscription2.prototype.remove = function(subscription) {
      var subscriptions = this._subscriptions;
      if (subscriptions) {
        var subscriptionIndex = subscriptions.indexOf(subscription);
        if (subscriptionIndex !== -1) {
          subscriptions.splice(subscriptionIndex, 1);
        }
      }
    };
    Subscription2.EMPTY = function(empty2) {
      empty2.closed = true;
      return empty2;
    }(new Subscription2());
    return Subscription2;
  }();
  function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function(errs, err) {
      return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
    }, []);
  }
  var rxSubscriber = /* @__PURE__ */ function() {
    return typeof Symbol === "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
  }();
  var Subscriber = /* @__PURE__ */ function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destinationOrNext, error, complete) {
      var _this = _super.call(this) || this;
      _this.syncErrorValue = null;
      _this.syncErrorThrown = false;
      _this.syncErrorThrowable = false;
      _this.isStopped = false;
      switch (arguments.length) {
        case 0:
          _this.destination = empty;
          break;
        case 1:
          if (!destinationOrNext) {
            _this.destination = empty;
            break;
          }
          if (typeof destinationOrNext === "object") {
            if (destinationOrNext instanceof Subscriber2) {
              _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
              _this.destination = destinationOrNext;
              destinationOrNext.add(_this);
            } else {
              _this.syncErrorThrowable = true;
              _this.destination = new SafeSubscriber(_this, destinationOrNext);
            }
            break;
          }
        default:
          _this.syncErrorThrowable = true;
          _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
          break;
      }
      return _this;
    }
    Subscriber2.prototype[rxSubscriber] = function() {
      return this;
    };
    Subscriber2.create = function(next, error, complete) {
      var subscriber = new Subscriber2(next, error, complete);
      subscriber.syncErrorThrowable = false;
      return subscriber;
    };
    Subscriber2.prototype.next = function(value) {
      if (!this.isStopped) {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (!this.isStopped) {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (!this.isStopped) {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (this.closed) {
        return;
      }
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      this.destination.error(err);
      this.unsubscribe();
    };
    Subscriber2.prototype._complete = function() {
      this.destination.complete();
      this.unsubscribe();
    };
    Subscriber2.prototype._unsubscribeAndRecycle = function() {
      var _parentOrParents = this._parentOrParents;
      this._parentOrParents = null;
      this.unsubscribe();
      this.closed = false;
      this.isStopped = false;
      this._parentOrParents = _parentOrParents;
      return this;
    };
    return Subscriber2;
  }(Subscription);
  var SafeSubscriber = /* @__PURE__ */ function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      _this._parentSubscriber = _parentSubscriber;
      var next;
      var context = _this;
      if (isFunction(observerOrNext)) {
        next = observerOrNext;
      } else if (observerOrNext) {
        next = observerOrNext.next;
        error = observerOrNext.error;
        complete = observerOrNext.complete;
        if (observerOrNext !== empty) {
          context = Object.create(observerOrNext);
          if (isFunction(context.unsubscribe)) {
            _this.add(context.unsubscribe.bind(context));
          }
          context.unsubscribe = _this.unsubscribe.bind(_this);
        }
      }
      _this._context = context;
      _this._next = next;
      _this._error = error;
      _this._complete = complete;
      return _this;
    }
    SafeSubscriber2.prototype.next = function(value) {
      if (!this.isStopped && this._next) {
        var _parentSubscriber = this._parentSubscriber;
        if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._next, value);
        } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber2.prototype.error = function(err) {
      if (!this.isStopped) {
        var _parentSubscriber = this._parentSubscriber;
        var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
        if (this._error) {
          if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._error, err);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parentSubscriber, this._error, err);
            this.unsubscribe();
          }
        } else if (!_parentSubscriber.syncErrorThrowable) {
          this.unsubscribe();
          if (useDeprecatedSynchronousErrorHandling) {
            throw err;
          }
          hostReportError(err);
        } else {
          if (useDeprecatedSynchronousErrorHandling) {
            _parentSubscriber.syncErrorValue = err;
            _parentSubscriber.syncErrorThrown = true;
          } else {
            hostReportError(err);
          }
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber2.prototype.complete = function() {
      var _this = this;
      if (!this.isStopped) {
        var _parentSubscriber = this._parentSubscriber;
        if (this._complete) {
          var wrappedComplete = function() {
            return _this._complete.call(_this._context);
          };
          if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(wrappedComplete);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parentSubscriber, wrappedComplete);
            this.unsubscribe();
          }
        } else {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        this.unsubscribe();
        if (config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError(err);
        }
      }
    };
    SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
      if (!config.useDeprecatedSynchronousErrorHandling) {
        throw new Error("bad call");
      }
      try {
        fn.call(this._context, value);
      } catch (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          parent.syncErrorValue = err;
          parent.syncErrorThrown = true;
          return true;
        } else {
          hostReportError(err);
          return true;
        }
      }
      return false;
    };
    SafeSubscriber2.prototype._unsubscribe = function() {
      var _parentSubscriber = this._parentSubscriber;
      this._context = null;
      this._parentSubscriber = null;
      _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber2;
  }(Subscriber);
  function canReportError(observer) {
    while (observer) {
      var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
      if (closed_1 || isStopped) {
        return false;
      } else if (destination && destination instanceof Subscriber) {
        observer = destination;
      } else {
        observer = null;
      }
    }
    return true;
  }
  function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
      if (nextOrObserver instanceof Subscriber) {
        return nextOrObserver;
      }
      if (nextOrObserver[rxSubscriber]) {
        return nextOrObserver[rxSubscriber]();
      }
    }
    if (!nextOrObserver && !error && !complete) {
      return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
  }
  var observable = /* @__PURE__ */ function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();
  function identity(x) {
    return x;
  }
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }
  var Observable = /* @__PURE__ */ function() {
    function Observable2(subscribe) {
      this._isScalar = false;
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable2.prototype.lift = function(operator) {
      var observable2 = new Observable2();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
      var operator = this.operator;
      var sink = toSubscriber(observerOrNext, error, complete);
      if (operator) {
        sink.add(operator.call(sink, this.source));
      } else {
        sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
      }
      if (config.useDeprecatedSynchronousErrorHandling) {
        if (sink.syncErrorThrowable) {
          sink.syncErrorThrowable = false;
          if (sink.syncErrorThrown) {
            throw sink.syncErrorValue;
          }
        }
      }
      return sink;
    };
    Observable2.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          sink.syncErrorThrown = true;
          sink.syncErrorValue = err;
        }
        if (canReportError(sink)) {
          sink.error(err);
        } else {
          console.warn(err);
        }
      }
    };
    Observable2.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscription;
        subscription = _this.subscribe(function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            if (subscription) {
              subscription.unsubscribe();
            }
          }
        }, reject, resolve);
      });
    };
    Observable2.prototype._subscribe = function(subscriber) {
      var source = this.source;
      return source && source.subscribe(subscriber);
    };
    Observable2.prototype[observable] = function() {
      return this;
    };
    Observable2.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      if (operations.length === 0) {
        return this;
      }
      return pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable2.create = function(subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  }();
  function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
      promiseCtor = Promise;
    }
    if (!promiseCtor) {
      throw new Error("no Promise impl found");
    }
    return promiseCtor;
  }
  var subscribeToArray = function(array) {
    return function(subscriber) {
      for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    };
  };
  var subscribeToPromise = function(promise) {
    return function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, hostReportError);
      return subscriber;
    };
  };
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = /* @__PURE__ */ getSymbolIterator();
  var subscribeToIterable = function(iterable) {
    return function(subscriber) {
      var iterator$1 = iterable[iterator]();
      do {
        var item = void 0;
        try {
          item = iterator$1.next();
        } catch (err) {
          subscriber.error(err);
          return subscriber;
        }
        if (item.done) {
          subscriber.complete();
          break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
          break;
        }
      } while (true);
      if (typeof iterator$1.return === "function") {
        subscriber.add(function() {
          if (iterator$1.return) {
            iterator$1.return();
          }
        });
      }
      return subscriber;
    };
  };
  var subscribeToObservable = function(obj) {
    return function(subscriber) {
      var obs = obj[observable]();
      if (typeof obs.subscribe !== "function") {
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      } else {
        return obs.subscribe(subscriber);
      }
    };
  };
  var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };
  function isPromise(value) {
    return !!value && typeof value.subscribe !== "function" && typeof value.then === "function";
  }
  var subscribeTo = function(result) {
    if (!!result && typeof result[observable] === "function") {
      return subscribeToObservable(result);
    } else if (isArrayLike(result)) {
      return subscribeToArray(result);
    } else if (isPromise(result)) {
      return subscribeToPromise(result);
    } else if (!!result && typeof result[iterator] === "function") {
      return subscribeToIterable(result);
    } else {
      var value = isObject(result) ? "an invalid object" : "'" + result + "'";
      var msg = "You provided " + value + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
      throw new TypeError(msg);
    }
  };
  var SimpleInnerSubscriber = /* @__PURE__ */ function(_super) {
    __extends(SimpleInnerSubscriber2, _super);
    function SimpleInnerSubscriber2(parent) {
      var _this = _super.call(this) || this;
      _this.parent = parent;
      return _this;
    }
    SimpleInnerSubscriber2.prototype._next = function(value) {
      this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber2.prototype._error = function(error) {
      this.parent.notifyError(error);
      this.unsubscribe();
    };
    SimpleInnerSubscriber2.prototype._complete = function() {
      this.parent.notifyComplete();
      this.unsubscribe();
    };
    return SimpleInnerSubscriber2;
  }(Subscriber);
  var SimpleOuterSubscriber = /* @__PURE__ */ function(_super) {
    __extends(SimpleOuterSubscriber2, _super);
    function SimpleOuterSubscriber2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber2.prototype.notifyNext = function(innerValue) {
      this.destination.next(innerValue);
    };
    SimpleOuterSubscriber2.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    SimpleOuterSubscriber2.prototype.notifyComplete = function() {
      this.destination.complete();
    };
    return SimpleOuterSubscriber2;
  }(Subscriber);
  function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
      return void 0;
    }
    if (result instanceof Observable) {
      return result.subscribe(innerSubscriber);
    }
    return subscribeTo(result)(innerSubscriber);
  }
  var Action = /* @__PURE__ */ function(_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
      return _super.call(this) || this;
    }
    Action2.prototype.schedule = function(state, delay) {
      return this;
    };
    return Action2;
  }(Subscription);
  var AsyncAction = /* @__PURE__ */ function(_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      _this.pending = false;
      return _this;
    }
    AsyncAction2.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (this.closed) {
        return this;
      }
      this.state = state;
      var id = this.id;
      var scheduler = this.scheduler;
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, delay);
      }
      this.pending = true;
      this.delay = delay;
      this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
      return this;
    };
    AsyncAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && this.delay === delay && this.pending === false) {
        return id;
      }
      clearInterval(id);
      return void 0;
    };
    AsyncAction2.prototype.execute = function(state, delay) {
      if (this.closed) {
        return new Error("executing a cancelled action");
      }
      this.pending = false;
      var error = this._execute(state, delay);
      if (error) {
        return error;
      } else if (this.pending === false && this.id != null) {
        this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }
    };
    AsyncAction2.prototype._execute = function(state, delay) {
      var errored = false;
      var errorValue = void 0;
      try {
        this.work(state);
      } catch (e) {
        errored = true;
        errorValue = !!e && e || new Error(e);
      }
      if (errored) {
        this.unsubscribe();
        return errorValue;
      }
    };
    AsyncAction2.prototype._unsubscribe = function() {
      var id = this.id;
      var scheduler = this.scheduler;
      var actions = scheduler.actions;
      var index = actions.indexOf(this);
      this.work = null;
      this.state = null;
      this.pending = false;
      this.scheduler = null;
      if (index !== -1) {
        actions.splice(index, 1);
      }
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
    };
    return AsyncAction2;
  }(Action);
  var Scheduler = /* @__PURE__ */ function() {
    function Scheduler2(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler2.now;
      }
      this.SchedulerAction = SchedulerAction;
      this.now = now;
    }
    Scheduler2.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler2.now = function() {
      return Date.now();
    };
    return Scheduler2;
  }();
  var AsyncScheduler = /* @__PURE__ */ function(_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
      if (now === void 0) {
        now = Scheduler.now;
      }
      var _this = _super.call(this, SchedulerAction, function() {
        if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== _this) {
          return AsyncScheduler2.delegate.now();
        } else {
          return now();
        }
      }) || this;
      _this.actions = [];
      _this.active = false;
      _this.scheduled = void 0;
      return _this;
    }
    AsyncScheduler2.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== this) {
        return AsyncScheduler2.delegate.schedule(work, delay, state);
      } else {
        return _super.prototype.schedule.call(this, work, delay, state);
      }
    };
    AsyncScheduler2.prototype.flush = function(action) {
      var actions = this.actions;
      if (this.active) {
        actions.push(action);
        return;
      }
      var error;
      this.active = true;
      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (action = actions.shift());
      this.active = false;
      if (error) {
        while (action = actions.shift()) {
          action.unsubscribe();
        }
        throw error;
      }
    };
    return AsyncScheduler2;
  }(Scheduler);
  var asyncScheduler = /* @__PURE__ */ new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;
  function isNumeric(val) {
    return !isArray(val) && val - parseFloat(val) + 1 >= 0;
  }
  function isScheduler(value) {
    return value && typeof value.schedule === "function";
  }
  function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
      dueTime = 0;
    }
    var period = -1;
    if (isNumeric(periodOrScheduler)) {
      period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    } else if (isScheduler(periodOrScheduler)) {
      scheduler = periodOrScheduler;
    }
    if (!isScheduler(scheduler)) {
      scheduler = async;
    }
    return new Observable(function(subscriber) {
      var due = isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
      return scheduler.schedule(dispatch, due, {
        index: 0,
        period,
        subscriber
      });
    });
  }
  function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
      return;
    } else if (period === -1) {
      return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
  }
  var InnerSubscriber = /* @__PURE__ */ function(_super) {
    __extends(InnerSubscriber2, _super);
    function InnerSubscriber2(parent, outerValue, outerIndex) {
      var _this = _super.call(this) || this;
      _this.parent = parent;
      _this.outerValue = outerValue;
      _this.outerIndex = outerIndex;
      _this.index = 0;
      return _this;
    }
    InnerSubscriber2.prototype._next = function(value) {
      this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber2.prototype._error = function(error) {
      this.parent.notifyError(error, this);
      this.unsubscribe();
    };
    InnerSubscriber2.prototype._complete = function() {
      this.parent.notifyComplete(this);
      this.unsubscribe();
    };
    return InnerSubscriber2;
  }(Subscriber);
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) {
      innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    }
    if (innerSubscriber.closed) {
      return void 0;
    }
    if (result instanceof Observable) {
      return result.subscribe(innerSubscriber);
    }
    return subscribeTo(result)(innerSubscriber);
  }
  var OuterSubscriber = /* @__PURE__ */ function(_super) {
    __extends(OuterSubscriber2, _super);
    function OuterSubscriber2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    OuterSubscriber2.prototype.notifyError = function(error, innerSub) {
      this.destination.error(error);
    };
    OuterSubscriber2.prototype.notifyComplete = function(innerSub) {
      this.destination.complete();
    };
    return OuterSubscriber2;
  }(Subscriber);
  function scheduleArray(input, scheduler) {
    return new Observable(function(subscriber) {
      var sub = new Subscription();
      var i = 0;
      sub.add(scheduler.schedule(function() {
        if (i === input.length) {
          subscriber.complete();
          return;
        }
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          sub.add(this.schedule());
        }
      }));
      return sub;
    });
  }
  function fromArray(input, scheduler) {
    if (!scheduler) {
      return new Observable(subscribeToArray(input));
    } else {
      return scheduleArray(input, scheduler);
    }
  }
  function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler(scheduler)) {
      args.pop();
      return scheduleArray(args, scheduler);
    } else {
      return fromArray(args);
    }
  }
  function map(project, thisArg) {
    return function mapOperation(source) {
      if (typeof project !== "function") {
        throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
      }
      return source.lift(new MapOperator(project, thisArg));
    };
  }
  var MapOperator = /* @__PURE__ */ function() {
    function MapOperator2(project, thisArg) {
      this.project = project;
      this.thisArg = thisArg;
    }
    MapOperator2.prototype.call = function(subscriber, source) {
      return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator2;
  }();
  var MapSubscriber = /* @__PURE__ */ function(_super) {
    __extends(MapSubscriber2, _super);
    function MapSubscriber2(destination, project, thisArg) {
      var _this = _super.call(this, destination) || this;
      _this.project = project;
      _this.count = 0;
      _this.thisArg = thisArg || _this;
      return _this;
    }
    MapSubscriber2.prototype._next = function(value) {
      var result;
      try {
        result = this.project.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return MapSubscriber2;
  }(Subscriber);
  function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
      scheduler = async;
    }
    return function(source) {
      return source.lift(new DebounceTimeOperator(dueTime, scheduler));
    };
  }
  var DebounceTimeOperator = /* @__PURE__ */ function() {
    function DebounceTimeOperator2(dueTime, scheduler) {
      this.dueTime = dueTime;
      this.scheduler = scheduler;
    }
    DebounceTimeOperator2.prototype.call = function(subscriber, source) {
      return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator2;
  }();
  var DebounceTimeSubscriber = /* @__PURE__ */ function(_super) {
    __extends(DebounceTimeSubscriber2, _super);
    function DebounceTimeSubscriber2(destination, dueTime, scheduler) {
      var _this = _super.call(this, destination) || this;
      _this.dueTime = dueTime;
      _this.scheduler = scheduler;
      _this.debouncedSubscription = null;
      _this.lastValue = null;
      _this.hasValue = false;
      return _this;
    }
    DebounceTimeSubscriber2.prototype._next = function(value) {
      this.clearDebounce();
      this.lastValue = value;
      this.hasValue = true;
      this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber2.prototype._complete = function() {
      this.debouncedNext();
      this.destination.complete();
    };
    DebounceTimeSubscriber2.prototype.debouncedNext = function() {
      this.clearDebounce();
      if (this.hasValue) {
        var lastValue = this.lastValue;
        this.lastValue = null;
        this.hasValue = false;
        this.destination.next(lastValue);
      }
    };
    DebounceTimeSubscriber2.prototype.clearDebounce = function() {
      var debouncedSubscription = this.debouncedSubscription;
      if (debouncedSubscription !== null) {
        this.remove(debouncedSubscription);
        debouncedSubscription.unsubscribe();
        this.debouncedSubscription = null;
      }
    };
    return DebounceTimeSubscriber2;
  }(Subscriber);
  function dispatchNext(subscriber) {
    subscriber.debouncedNext();
  }
  var EMPTY = /* @__PURE__ */ new Observable(function(subscriber) {
    return subscriber.complete();
  });
  function empty$1(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
  }
  function emptyScheduled(scheduler) {
    return new Observable(function(subscriber) {
      return scheduler.schedule(function() {
        return subscriber.complete();
      });
    });
  }
  function throwError(error, scheduler) {
    if (!scheduler) {
      return new Observable(function(subscriber) {
        return subscriber.error(error);
      });
    } else {
      return new Observable(function(subscriber) {
        return scheduler.schedule(dispatch$1, 0, { error, subscriber });
      });
    }
  }
  function dispatch$1(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
  }
  var Notification = /* @__PURE__ */ function() {
    function Notification2(kind, value, error) {
      this.kind = kind;
      this.value = value;
      this.error = error;
      this.hasValue = kind === "N";
    }
    Notification2.prototype.observe = function(observer) {
      switch (this.kind) {
        case "N":
          return observer.next && observer.next(this.value);
        case "E":
          return observer.error && observer.error(this.error);
        case "C":
          return observer.complete && observer.complete();
      }
    };
    Notification2.prototype.do = function(next, error, complete) {
      var kind = this.kind;
      switch (kind) {
        case "N":
          return next && next(this.value);
        case "E":
          return error && error(this.error);
        case "C":
          return complete && complete();
      }
    };
    Notification2.prototype.accept = function(nextOrObserver, error, complete) {
      if (nextOrObserver && typeof nextOrObserver.next === "function") {
        return this.observe(nextOrObserver);
      } else {
        return this.do(nextOrObserver, error, complete);
      }
    };
    Notification2.prototype.toObservable = function() {
      var kind = this.kind;
      switch (kind) {
        case "N":
          return of(this.value);
        case "E":
          return throwError(this.error);
        case "C":
          return empty$1();
      }
      throw new Error("unexpected notification kind value");
    };
    Notification2.createNext = function(value) {
      if (typeof value !== "undefined") {
        return new Notification2("N", value);
      }
      return Notification2.undefinedValueNotification;
    };
    Notification2.createError = function(err) {
      return new Notification2("E", void 0, err);
    };
    Notification2.createComplete = function() {
      return Notification2.completeNotification;
    };
    Notification2.completeNotification = new Notification2("C");
    Notification2.undefinedValueNotification = new Notification2("N", void 0);
    return Notification2;
  }();
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
      return function(source) {
        return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
      };
    }
    return function(source) {
      return source.lift(new DelayWhenOperator(delayDurationSelector));
    };
  }
  var DelayWhenOperator = /* @__PURE__ */ function() {
    function DelayWhenOperator2(delayDurationSelector) {
      this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator2.prototype.call = function(subscriber, source) {
      return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator2;
  }();
  var DelayWhenSubscriber = /* @__PURE__ */ function(_super) {
    __extends(DelayWhenSubscriber2, _super);
    function DelayWhenSubscriber2(destination, delayDurationSelector) {
      var _this = _super.call(this, destination) || this;
      _this.delayDurationSelector = delayDurationSelector;
      _this.completed = false;
      _this.delayNotifierSubscriptions = [];
      _this.index = 0;
      return _this;
    }
    DelayWhenSubscriber2.prototype.notifyNext = function(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
      this.destination.next(outerValue);
      this.removeSubscription(innerSub);
      this.tryComplete();
    };
    DelayWhenSubscriber2.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    DelayWhenSubscriber2.prototype.notifyComplete = function(innerSub) {
      var value = this.removeSubscription(innerSub);
      if (value) {
        this.destination.next(value);
      }
      this.tryComplete();
    };
    DelayWhenSubscriber2.prototype._next = function(value) {
      var index = this.index++;
      try {
        var delayNotifier = this.delayDurationSelector(value, index);
        if (delayNotifier) {
          this.tryDelay(delayNotifier, value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DelayWhenSubscriber2.prototype._complete = function() {
      this.completed = true;
      this.tryComplete();
      this.unsubscribe();
    };
    DelayWhenSubscriber2.prototype.removeSubscription = function(subscription) {
      subscription.unsubscribe();
      var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
      if (subscriptionIdx !== -1) {
        this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
      }
      return subscription.outerValue;
    };
    DelayWhenSubscriber2.prototype.tryDelay = function(delayNotifier, value) {
      var notifierSubscription = subscribeToResult(this, delayNotifier, value);
      if (notifierSubscription && !notifierSubscription.closed) {
        var destination = this.destination;
        destination.add(notifierSubscription);
        this.delayNotifierSubscriptions.push(notifierSubscription);
      }
    };
    DelayWhenSubscriber2.prototype.tryComplete = function() {
      if (this.completed && this.delayNotifierSubscriptions.length === 0) {
        this.destination.complete();
      }
    };
    return DelayWhenSubscriber2;
  }(OuterSubscriber);
  var SubscriptionDelayObservable = /* @__PURE__ */ function(_super) {
    __extends(SubscriptionDelayObservable2, _super);
    function SubscriptionDelayObservable2(source, subscriptionDelay) {
      var _this = _super.call(this) || this;
      _this.source = source;
      _this.subscriptionDelay = subscriptionDelay;
      return _this;
    }
    SubscriptionDelayObservable2.prototype._subscribe = function(subscriber) {
      this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable2;
  }(Observable);
  var SubscriptionDelaySubscriber = /* @__PURE__ */ function(_super) {
    __extends(SubscriptionDelaySubscriber2, _super);
    function SubscriptionDelaySubscriber2(parent, source) {
      var _this = _super.call(this) || this;
      _this.parent = parent;
      _this.source = source;
      _this.sourceSubscribed = false;
      return _this;
    }
    SubscriptionDelaySubscriber2.prototype._next = function(unused) {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber2.prototype._error = function(err) {
      this.unsubscribe();
      this.parent.error(err);
    };
    SubscriptionDelaySubscriber2.prototype._complete = function() {
      this.unsubscribe();
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber2.prototype.subscribeToSource = function() {
      if (!this.sourceSubscribed) {
        this.sourceSubscribed = true;
        this.unsubscribe();
        this.source.subscribe(this.parent);
      }
    };
    return SubscriptionDelaySubscriber2;
  }(Subscriber);
  function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
      return source.lift(new FilterOperator(predicate, thisArg));
    };
  }
  var FilterOperator = /* @__PURE__ */ function() {
    function FilterOperator2(predicate, thisArg) {
      this.predicate = predicate;
      this.thisArg = thisArg;
    }
    FilterOperator2.prototype.call = function(subscriber, source) {
      return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator2;
  }();
  var FilterSubscriber = /* @__PURE__ */ function(_super) {
    __extends(FilterSubscriber2, _super);
    function FilterSubscriber2(destination, predicate, thisArg) {
      var _this = _super.call(this, destination) || this;
      _this.predicate = predicate;
      _this.thisArg = thisArg;
      _this.count = 0;
      return _this;
    }
    FilterSubscriber2.prototype._next = function(value) {
      var result;
      try {
        result = this.predicate.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.destination.next(value);
      }
    };
    return FilterSubscriber2;
  }(Subscriber);
  var ObjectUnsubscribedErrorImpl = /* @__PURE__ */ function() {
    function ObjectUnsubscribedErrorImpl2() {
      Error.call(this);
      this.message = "object unsubscribed";
      this.name = "ObjectUnsubscribedError";
      return this;
    }
    ObjectUnsubscribedErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl2;
  }();
  var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
  var SubjectSubscription = /* @__PURE__ */ function(_super) {
    __extends(SubjectSubscription2, _super);
    function SubjectSubscription2(subject, subscriber) {
      var _this = _super.call(this) || this;
      _this.subject = subject;
      _this.subscriber = subscriber;
      _this.closed = false;
      return _this;
    }
    SubjectSubscription2.prototype.unsubscribe = function() {
      if (this.closed) {
        return;
      }
      this.closed = true;
      var subject = this.subject;
      var observers = subject.observers;
      this.subject = null;
      if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
        return;
      }
      var subscriberIndex = observers.indexOf(this.subscriber);
      if (subscriberIndex !== -1) {
        observers.splice(subscriberIndex, 1);
      }
    };
    return SubjectSubscription2;
  }(Subscription);
  var SubjectSubscriber = /* @__PURE__ */ function(_super) {
    __extends(SubjectSubscriber2, _super);
    function SubjectSubscriber2(destination) {
      var _this = _super.call(this, destination) || this;
      _this.destination = destination;
      return _this;
    }
    return SubjectSubscriber2;
  }(Subscriber);
  var Subject = /* @__PURE__ */ function(_super) {
    __extends(Subject2, _super);
    function Subject2() {
      var _this = _super.call(this) || this;
      _this.observers = [];
      _this.closed = false;
      _this.isStopped = false;
      _this.hasError = false;
      _this.thrownError = null;
      return _this;
    }
    Subject2.prototype[rxSubscriber] = function() {
      return new SubjectSubscriber(this);
    };
    Subject2.prototype.lift = function(operator) {
      var subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    };
    Subject2.prototype.next = function(value) {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
      if (!this.isStopped) {
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].next(value);
        }
      }
    };
    Subject2.prototype.error = function(err) {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
      this.hasError = true;
      this.thrownError = err;
      this.isStopped = true;
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].error(err);
      }
      this.observers.length = 0;
    };
    Subject2.prototype.complete = function() {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
      this.isStopped = true;
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].complete();
      }
      this.observers.length = 0;
    };
    Subject2.prototype.unsubscribe = function() {
      this.isStopped = true;
      this.closed = true;
      this.observers = null;
    };
    Subject2.prototype._trySubscribe = function(subscriber) {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      } else {
        return _super.prototype._trySubscribe.call(this, subscriber);
      }
    };
    Subject2.prototype._subscribe = function(subscriber) {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      } else if (this.hasError) {
        subscriber.error(this.thrownError);
        return Subscription.EMPTY;
      } else if (this.isStopped) {
        subscriber.complete();
        return Subscription.EMPTY;
      } else {
        this.observers.push(subscriber);
        return new SubjectSubscription(this, subscriber);
      }
    };
    Subject2.prototype.asObservable = function() {
      var observable2 = new Observable();
      observable2.source = this;
      return observable2;
    };
    Subject2.create = function(destination, source) {
      return new AnonymousSubject(destination, source);
    };
    return Subject2;
  }(Observable);
  var AnonymousSubject = /* @__PURE__ */ function(_super) {
    __extends(AnonymousSubject2, _super);
    function AnonymousSubject2(destination, source) {
      var _this = _super.call(this) || this;
      _this.destination = destination;
      _this.source = source;
      return _this;
    }
    AnonymousSubject2.prototype.next = function(value) {
      var destination = this.destination;
      if (destination && destination.next) {
        destination.next(value);
      }
    };
    AnonymousSubject2.prototype.error = function(err) {
      var destination = this.destination;
      if (destination && destination.error) {
        this.destination.error(err);
      }
    };
    AnonymousSubject2.prototype.complete = function() {
      var destination = this.destination;
      if (destination && destination.complete) {
        this.destination.complete();
      }
    };
    AnonymousSubject2.prototype._subscribe = function(subscriber) {
      var source = this.source;
      if (source) {
        return this.source.subscribe(subscriber);
      } else {
        return Subscription.EMPTY;
      }
    };
    return AnonymousSubject2;
  }(Subject);
  var ObserveOnSubscriber = /* @__PURE__ */ function(_super) {
    __extends(ObserveOnSubscriber2, _super);
    function ObserveOnSubscriber2(destination, scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      var _this = _super.call(this, destination) || this;
      _this.scheduler = scheduler;
      _this.delay = delay;
      return _this;
    }
    ObserveOnSubscriber2.dispatch = function(arg) {
      var notification = arg.notification, destination = arg.destination;
      notification.observe(destination);
      this.unsubscribe();
    };
    ObserveOnSubscriber2.prototype.scheduleMessage = function(notification) {
      var destination = this.destination;
      destination.add(this.scheduler.schedule(ObserveOnSubscriber2.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber2.prototype._next = function(value) {
      this.scheduleMessage(Notification.createNext(value));
    };
    ObserveOnSubscriber2.prototype._error = function(err) {
      this.scheduleMessage(Notification.createError(err));
      this.unsubscribe();
    };
    ObserveOnSubscriber2.prototype._complete = function() {
      this.scheduleMessage(Notification.createComplete());
      this.unsubscribe();
    };
    return ObserveOnSubscriber2;
  }(Subscriber);
  var ObserveOnMessage = /* @__PURE__ */ function() {
    function ObserveOnMessage2(notification, destination) {
      this.notification = notification;
      this.destination = destination;
    }
    return ObserveOnMessage2;
  }();
  var QueueAction = /* @__PURE__ */ function(_super) {
    __extends(QueueAction2, _super);
    function QueueAction2(scheduler, work) {
      var _this = _super.call(this, scheduler, work) || this;
      _this.scheduler = scheduler;
      _this.work = work;
      return _this;
    }
    QueueAction2.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype.schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      this.scheduler.flush(this);
      return this;
    };
    QueueAction2.prototype.execute = function(state, delay) {
      return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
        return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
      }
      return scheduler.flush(this);
    };
    return QueueAction2;
  }(AsyncAction);
  var QueueScheduler = /* @__PURE__ */ function(_super) {
    __extends(QueueScheduler2, _super);
    function QueueScheduler2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler2;
  }(AsyncScheduler);
  var queueScheduler = /* @__PURE__ */ new QueueScheduler(QueueAction);
  var queue = queueScheduler;
  var ReplaySubject = /* @__PURE__ */ function(_super) {
    __extends(ReplaySubject2, _super);
    function ReplaySubject2(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) {
        bufferSize = Number.POSITIVE_INFINITY;
      }
      if (windowTime === void 0) {
        windowTime = Number.POSITIVE_INFINITY;
      }
      var _this = _super.call(this) || this;
      _this.scheduler = scheduler;
      _this._events = [];
      _this._infiniteTimeWindow = false;
      _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
      _this._windowTime = windowTime < 1 ? 1 : windowTime;
      if (windowTime === Number.POSITIVE_INFINITY) {
        _this._infiniteTimeWindow = true;
        _this.next = _this.nextInfiniteTimeWindow;
      } else {
        _this.next = _this.nextTimeWindow;
      }
      return _this;
    }
    ReplaySubject2.prototype.nextInfiniteTimeWindow = function(value) {
      if (!this.isStopped) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
          _events.shift();
        }
      }
      _super.prototype.next.call(this, value);
    };
    ReplaySubject2.prototype.nextTimeWindow = function(value) {
      if (!this.isStopped) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
      }
      _super.prototype.next.call(this, value);
    };
    ReplaySubject2.prototype._subscribe = function(subscriber) {
      var _infiniteTimeWindow = this._infiniteTimeWindow;
      var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
      var scheduler = this.scheduler;
      var len = _events.length;
      var subscription;
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      } else if (this.isStopped || this.hasError) {
        subscription = Subscription.EMPTY;
      } else {
        this.observers.push(subscriber);
        subscription = new SubjectSubscription(this, subscriber);
      }
      if (scheduler) {
        subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
      }
      if (_infiniteTimeWindow) {
        for (var i = 0; i < len && !subscriber.closed; i++) {
          subscriber.next(_events[i]);
        }
      } else {
        for (var i = 0; i < len && !subscriber.closed; i++) {
          subscriber.next(_events[i].value);
        }
      }
      if (this.hasError) {
        subscriber.error(this.thrownError);
      } else if (this.isStopped) {
        subscriber.complete();
      }
      return subscription;
    };
    ReplaySubject2.prototype._getNow = function() {
      return (this.scheduler || queue).now();
    };
    ReplaySubject2.prototype._trimBufferThenGetEvents = function() {
      var now = this._getNow();
      var _bufferSize = this._bufferSize;
      var _windowTime = this._windowTime;
      var _events = this._events;
      var eventsCount = _events.length;
      var spliceCount = 0;
      while (spliceCount < eventsCount) {
        if (now - _events[spliceCount].time < _windowTime) {
          break;
        }
        spliceCount++;
      }
      if (eventsCount > _bufferSize) {
        spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
      }
      if (spliceCount > 0) {
        _events.splice(0, spliceCount);
      }
      return _events;
    };
    return ReplaySubject2;
  }(Subject);
  var ReplayEvent = /* @__PURE__ */ function() {
    function ReplayEvent2(time, value) {
      this.time = time;
      this.value = value;
    }
    return ReplayEvent2;
  }();
  function retryWhen(notifier) {
    return function(source) {
      return source.lift(new RetryWhenOperator(notifier, source));
    };
  }
  var RetryWhenOperator = /* @__PURE__ */ function() {
    function RetryWhenOperator2(notifier, source) {
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenOperator2.prototype.call = function(subscriber, source) {
      return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator2;
  }();
  var RetryWhenSubscriber = /* @__PURE__ */ function(_super) {
    __extends(RetryWhenSubscriber2, _super);
    function RetryWhenSubscriber2(destination, notifier, source) {
      var _this = _super.call(this, destination) || this;
      _this.notifier = notifier;
      _this.source = source;
      return _this;
    }
    RetryWhenSubscriber2.prototype.error = function(err) {
      if (!this.isStopped) {
        var errors = this.errors;
        var retries = this.retries;
        var retriesSubscription = this.retriesSubscription;
        if (!retries) {
          errors = new Subject();
          try {
            var notifier = this.notifier;
            retries = notifier(errors);
          } catch (e) {
            return _super.prototype.error.call(this, e);
          }
          retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
        } else {
          this.errors = void 0;
          this.retriesSubscription = void 0;
        }
        this._unsubscribeAndRecycle();
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        errors.next(err);
      }
    };
    RetryWhenSubscriber2.prototype._unsubscribe = function() {
      var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
      if (errors) {
        errors.unsubscribe();
        this.errors = void 0;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = void 0;
      }
      this.retries = void 0;
    };
    RetryWhenSubscriber2.prototype.notifyNext = function() {
      var _unsubscribe = this._unsubscribe;
      this._unsubscribe = null;
      this._unsubscribeAndRecycle();
      this._unsubscribe = _unsubscribe;
      this.source.subscribe(this);
    };
    return RetryWhenSubscriber2;
  }(SimpleOuterSubscriber);
  function noop() {
  }
  function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
      return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
  }
  var DoOperator = /* @__PURE__ */ function() {
    function DoOperator2(nextOrObserver, error, complete) {
      this.nextOrObserver = nextOrObserver;
      this.error = error;
      this.complete = complete;
    }
    DoOperator2.prototype.call = function(subscriber, source) {
      return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator2;
  }();
  var TapSubscriber = /* @__PURE__ */ function(_super) {
    __extends(TapSubscriber2, _super);
    function TapSubscriber2(destination, observerOrNext, error, complete) {
      var _this = _super.call(this, destination) || this;
      _this._tapNext = noop;
      _this._tapError = noop;
      _this._tapComplete = noop;
      _this._tapError = error || noop;
      _this._tapComplete = complete || noop;
      if (isFunction(observerOrNext)) {
        _this._context = _this;
        _this._tapNext = observerOrNext;
      } else if (observerOrNext) {
        _this._context = observerOrNext;
        _this._tapNext = observerOrNext.next || noop;
        _this._tapError = observerOrNext.error || noop;
        _this._tapComplete = observerOrNext.complete || noop;
      }
      return _this;
    }
    TapSubscriber2.prototype._next = function(value) {
      try {
        this._tapNext.call(this._context, value);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(value);
    };
    TapSubscriber2.prototype._error = function(err) {
      try {
        this._tapError.call(this._context, err);
      } catch (err2) {
        this.destination.error(err2);
        return;
      }
      this.destination.error(err);
    };
    TapSubscriber2.prototype._complete = function() {
      try {
        this._tapComplete.call(this._context);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      return this.destination.complete();
    };
    return TapSubscriber2;
  }(Subscriber);
  var DEFAULT_WEBSOCKET_CONFIG = {
    url: "",
    deserializer: function(e) {
      return JSON.parse(e.data);
    },
    serializer: function(value) {
      return JSON.stringify(value);
    }
  };
  var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }";
  var WebSocketSubject = /* @__PURE__ */ function(_super) {
    __extends(WebSocketSubject2, _super);
    function WebSocketSubject2(urlConfigOrSource, destination) {
      var _this = _super.call(this) || this;
      if (urlConfigOrSource instanceof Observable) {
        _this.destination = destination;
        _this.source = urlConfigOrSource;
      } else {
        var config2 = _this._config = __assign({}, DEFAULT_WEBSOCKET_CONFIG);
        _this._output = new Subject();
        if (typeof urlConfigOrSource === "string") {
          config2.url = urlConfigOrSource;
        } else {
          for (var key in urlConfigOrSource) {
            if (urlConfigOrSource.hasOwnProperty(key)) {
              config2[key] = urlConfigOrSource[key];
            }
          }
        }
        if (!config2.WebSocketCtor && WebSocket) {
          config2.WebSocketCtor = WebSocket;
        } else if (!config2.WebSocketCtor) {
          throw new Error("no WebSocket constructor can be found");
        }
        _this.destination = new ReplaySubject();
      }
      return _this;
    }
    WebSocketSubject2.prototype.lift = function(operator) {
      var sock = new WebSocketSubject2(this._config, this.destination);
      sock.operator = operator;
      sock.source = this;
      return sock;
    };
    WebSocketSubject2.prototype._resetState = function() {
      this._socket = null;
      if (!this.source) {
        this.destination = new ReplaySubject();
      }
      this._output = new Subject();
    };
    WebSocketSubject2.prototype.multiplex = function(subMsg, unsubMsg, messageFilter) {
      var self2 = this;
      return new Observable(function(observer) {
        try {
          self2.next(subMsg());
        } catch (err) {
          observer.error(err);
        }
        var subscription = self2.subscribe(function(x) {
          try {
            if (messageFilter(x)) {
              observer.next(x);
            }
          } catch (err) {
            observer.error(err);
          }
        }, function(err) {
          return observer.error(err);
        }, function() {
          return observer.complete();
        });
        return function() {
          try {
            self2.next(unsubMsg());
          } catch (err) {
            observer.error(err);
          }
          subscription.unsubscribe();
        };
      });
    };
    WebSocketSubject2.prototype._connectSocket = function() {
      var _this = this;
      var _a = this._config, WebSocketCtor = _a.WebSocketCtor, protocol = _a.protocol, url2 = _a.url, binaryType = _a.binaryType;
      var observer = this._output;
      var socket = null;
      try {
        socket = protocol ? new WebSocketCtor(url2, protocol) : new WebSocketCtor(url2);
        this._socket = socket;
        if (binaryType) {
          this._socket.binaryType = binaryType;
        }
      } catch (e) {
        observer.error(e);
        return;
      }
      var subscription = new Subscription(function() {
        _this._socket = null;
        if (socket && socket.readyState === 1) {
          socket.close();
        }
      });
      socket.onopen = function(e) {
        var _socket = _this._socket;
        if (!_socket) {
          socket.close();
          _this._resetState();
          return;
        }
        var openObserver = _this._config.openObserver;
        if (openObserver) {
          openObserver.next(e);
        }
        var queue2 = _this.destination;
        _this.destination = Subscriber.create(function(x) {
          if (socket.readyState === 1) {
            try {
              var serializer = _this._config.serializer;
              socket.send(serializer(x));
            } catch (e2) {
              _this.destination.error(e2);
            }
          }
        }, function(e2) {
          var closingObserver = _this._config.closingObserver;
          if (closingObserver) {
            closingObserver.next(void 0);
          }
          if (e2 && e2.code) {
            socket.close(e2.code, e2.reason);
          } else {
            observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
          }
          _this._resetState();
        }, function() {
          var closingObserver = _this._config.closingObserver;
          if (closingObserver) {
            closingObserver.next(void 0);
          }
          socket.close();
          _this._resetState();
        });
        if (queue2 && queue2 instanceof ReplaySubject) {
          subscription.add(queue2.subscribe(_this.destination));
        }
      };
      socket.onerror = function(e) {
        _this._resetState();
        observer.error(e);
      };
      socket.onclose = function(e) {
        _this._resetState();
        var closeObserver = _this._config.closeObserver;
        if (closeObserver) {
          closeObserver.next(e);
        }
        if (e.wasClean) {
          observer.complete();
        } else {
          observer.error(e);
        }
      };
      socket.onmessage = function(e) {
        try {
          var deserializer = _this._config.deserializer;
          observer.next(deserializer(e));
        } catch (err) {
          observer.error(err);
        }
      };
    };
    WebSocketSubject2.prototype._subscribe = function(subscriber) {
      var _this = this;
      var source = this.source;
      if (source) {
        return source.subscribe(subscriber);
      }
      if (!this._socket) {
        this._connectSocket();
      }
      this._output.subscribe(subscriber);
      subscriber.add(function() {
        var _socket = _this._socket;
        if (_this._output.observers.length === 0) {
          if (_socket && _socket.readyState === 1) {
            _socket.close();
          }
          _this._resetState();
        }
      });
      return subscriber;
    };
    WebSocketSubject2.prototype.unsubscribe = function() {
      var _socket = this._socket;
      if (_socket && _socket.readyState === 1) {
        _socket.close();
      }
      this._resetState();
      _super.prototype.unsubscribe.call(this);
    };
    return WebSocketSubject2;
  }(AnonymousSubject);
  function webSocket(urlConfigOrSource) {
    return new WebSocketSubject(urlConfigOrSource);
  }
  var IterableSet = class {
    constructor() {
      this.ids = new Array();
      this.dataset = /* @__PURE__ */ new Map();
    }
    order(sequences) {
      if (sequences) {
        const deletedIds = /* @__PURE__ */ new Set();
        for (const sequence of sequences) {
          switch (sequence.kind) {
            case realtime.SequenceKind.Substitute:
              this.ids[sequence.at] = sequence.with;
              break;
            case realtime.SequenceKind.Insert:
              this.ids.splice(sequence.at, 0, sequence.item);
              break;
            case realtime.SequenceKind.Delete:
              this.ids.splice(sequence.at, 1);
              deletedIds.add(sequence.item);
              break;
          }
        }
        deletedIds.forEach((id) => {
          if (this.ids.indexOf(id) == -1) {
            this.dataset.delete(id);
          }
        });
      }
    }
    set(id, value) {
      if (!this.dataset.has(id)) {
        this.ids.push(id);
      }
      this.dataset.set(id, value);
    }
    delete(id, index) {
      index = index || this.ids.indexOf(id);
      this.dataset.delete(id);
      this.ids.splice(index, 1);
    }
    [Symbol.iterator]() {
      let i = 0;
      return {
        next: () => {
          let value;
          if (i < this.ids.length) {
            value = this.dataset.get(this.ids[i]);
          }
          return {
            value,
            done: (i += 1) > this.ids.length
          };
        }
      };
    }
  };
  function getWsObs(url2, sort, targetDocumentId, messageCallback = (res) => {
    if (res.status >= 400 && res.status < 600) {
      return console.error(res.message);
    }
  }) {
    let data2 = new IterableSet();
    let urlConfigOrSource = url2;
    if (!internal_common.isPlatformBrowser()) {
      const wsCtor = require_browser();
      urlConfigOrSource = {
        url: url2,
        WebSocketCtor: wsCtor
      };
    }
    const subject = webSocket(urlConfigOrSource);
    const observable2 = subject.pipe(tap((chunk) => {
      if (chunk.kind == realtime.ChunkKind.Response) {
        messageCallback({ status: chunk.status, message: chunk.message });
      }
    }), filter((chunk) => chunk.kind != realtime.ChunkKind.Response), retryWhen((errors) => errors.pipe(filter((error) => error.code == 1006))), tap((chunk) => {
      switch (chunk.kind) {
        case realtime.ChunkKind.Initial:
        case realtime.ChunkKind.Insert:
        case realtime.ChunkKind.Replace:
        case realtime.ChunkKind.Update:
          data2.set(chunk.document._id, chunk.document);
          break;
        case realtime.ChunkKind.Expunge:
        case realtime.ChunkKind.Delete:
          data2.delete(chunk.document._id);
          break;
        case realtime.ChunkKind.Order:
          data2.order(chunk.sequence);
          break;
        case realtime.ChunkKind.Error:
          delete chunk.kind;
          throw new Error(JSON.stringify(chunk));
      }
    }), delayWhen((chunk) => {
      if (sort && chunk.kind == realtime.ChunkKind.Insert) {
        return timer(2);
      }
      return of(null);
    }), debounceTime(1), map(() => targetDocumentId ? Array.from(data2)[0] : Array.from(data2)));
    const insert = (document2) => subject.next({ event: "insert", data: document2 });
    observable2["insert"] = insert;
    const replace = (document2) => subject.next({ event: "replace", data: document2 });
    const replaceTargetDocument = (document2) => {
      document2._id = targetDocumentId;
      subject.next({ event: "replace", data: document2 });
    };
    observable2["replace"] = targetDocumentId ? replaceTargetDocument : replace;
    const patch = (document2) => subject.next({ event: "patch", data: document2 });
    const patchTargetDocument = (document2) => {
      document2._id = targetDocumentId;
      subject.next({ event: "patch", data: document2 });
    };
    observable2["patch"] = targetDocumentId ? patchTargetDocument : patch;
    const remove = (document2) => subject.next({ event: "delete", data: document2 });
    const removeTargetDocument = () => subject.next({ event: "delete", data: { _id: targetDocumentId } });
    observable2["remove"] = targetDocumentId ? removeTargetDocument : remove;
    return observable2;
  }
  var authorization;
  var wsUrl;
  var service;
  function initialize(options) {
    const { authorization: _authorization, publicUrl: publicUrl2, service: _service } = internal_common.initialize(options);
    authorization = _authorization;
    service = _service;
    wsUrl = (publicUrl2 + "/bucket").replace("http", "ws");
    service.setWriteDefaults({
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  var data;
  (function(data2) {
    function get(bucketId, documentId, options = {}) {
      internal_common.checkInitialized(authorization);
      return service.get(`bucket/${bucketId}/data/${documentId}`, {
        params: options.queryParams,
        headers: options.headers
      });
    }
    data2.get = get;
    function getAll(bucketId, options = {}) {
      internal_common.checkInitialized(authorization);
      return service.get(`bucket/${bucketId}/data`, {
        params: options.queryParams,
        headers: options.headers
      });
    }
    data2.getAll = getAll;
    function insert(bucketId, document2) {
      internal_common.checkInitialized(authorization);
      return service.post(`bucket/${bucketId}/data`, document2);
    }
    data2.insert = insert;
    function update(bucketId, documentId, document2) {
      internal_common.checkInitialized(authorization);
      return service.put(`bucket/${bucketId}/data/${documentId}`, document2);
    }
    data2.update = update;
    function patch(bucketId, documentId, document2) {
      internal_common.checkInitialized(authorization);
      return service.patch(`bucket/${bucketId}/data/${documentId}`, document2);
    }
    data2.patch = patch;
    function remove(bucketId, documentId) {
      internal_common.checkInitialized(authorization);
      return service.delete(`bucket/${bucketId}/data/${documentId}`);
    }
    data2.remove = remove;
    let realtime2;
    (function(realtime3) {
      function get2(bucketId, documentId, messageCallback) {
        internal_common.checkInitialized(authorization);
        const fullUrl = internal_common.buildUrl(`${wsUrl}/${bucketId}/data`, {
          filter: `document._id=="${documentId}"`,
          Authorization: authorization
        });
        return getWsObs(fullUrl.toString(), void 0, documentId, messageCallback);
      }
      realtime3.get = get2;
      function getAll2(bucketId, queryParams = {}, messageCallback) {
        internal_common.checkInitialized(authorization);
        const sort = queryParams["sort"];
        const fullUrl = internal_common.buildUrl(`${wsUrl}/${bucketId}/data`, {
          ...queryParams,
          Authorization: authorization
        });
        return getWsObs(fullUrl.toString(), sort, void 0, messageCallback);
      }
      realtime3.getAll = getAll2;
    })(realtime2 = data2.realtime || (data2.realtime = {}));
  })(data || (data = {}));

  // scripts/database.js
  var apikey = "465e18lyoj8x26";
  var publicUrl = "https://mava-test-79ed5.hq.spicaengine.com/api";
  function initializeDB() {
    initialize({ apikey, publicUrl });
  }
  function getData(req, res) {
    initialize({ apikey, publicUrl });
    return data.realtime.getAll("6696887f13d82e002ccb8aa6");
  }

  // scripts/rectangle.js
  var coordinates = {
    blueRectX: 50,
    blueRectY: 50,
    redRectX: 900,
    redRectY: 400,
    greenRectX: 400,
    greenRectY: 200
  };
  var coordinateNames = {
    blueRectX: "blueRectX",
    blueRectY: "blueRectY",
    redRectX: "redRectX",
    redRectY: "redRectY",
    greenRectX: "greenRectX",
    greenRectY: "greenRectY"
  };
  var blueRectSpeed = 6;
  var redRectSpeed = 5;
  var greenRectSpeed = 4;
  var rectWidth = 200;
  var rectHeight = 100;
  function addRectXY(coordinate, value) {
    coordinates[coordinate] += value;
  }
  function setRectXY(coordinate, value) {
    coordinates[coordinate] = value;
  }
  function preventOutOfBounds(rectX, rectY) {
    if (rectX < 0) rectX = 0;
    if (rectY < 0) rectY = 0;
    if (rectX + rectWidth > window.innerWidth) rectX = window.innerWidth - rectWidth;
    if (rectY + rectHeight > window.innerHeight) rectY = window.innerHeight - rectHeight;
    return { rectX, rectY };
  }
  function moveRectangle(keys2) {
    if (keys2["ArrowRight"]) addRectXY(coordinateNames.blueRectX, blueRectSpeed);
    if (keys2["ArrowLeft"]) addRectXY(coordinateNames.blueRectX, -blueRectSpeed);
    if (keys2["ArrowUp"]) addRectXY(coordinateNames.blueRectY, -blueRectSpeed);
    if (keys2["ArrowDown"]) addRectXY(coordinateNames.blueRectY, blueRectSpeed);
    if (keys2["d"]) addRectXY(coordinateNames.redRectX, redRectSpeed);
    if (keys2["a"]) addRectXY(coordinateNames.redRectX, -redRectSpeed);
    if (keys2["w"]) addRectXY(coordinateNames.redRectY, -redRectSpeed);
    if (keys2["s"]) addRectXY(coordinateNames.redRectY, redRectSpeed);
    if (keys2["l"]) addRectXY(coordinateNames.greenRectX, greenRectSpeed);
    if (keys2["j"]) addRectXY(coordinateNames.greenRectX, -greenRectSpeed);
    if (keys2["i"]) addRectXY(coordinateNames.greenRectY, -greenRectSpeed);
    if (keys2["k"]) addRectXY(coordinateNames.greenRectY, greenRectSpeed);
    const blueRect = preventOutOfBounds(coordinates.blueRectX, coordinates.blueRectY);
    setRectXY(coordinateNames.blueRectX, blueRect.rectX);
    setRectXY(coordinateNames.blueRectY, blueRect.rectY);
    const redRect = preventOutOfBounds(coordinates.redRectX, coordinates.redRectY);
    setRectXY(coordinateNames.redRectX, redRect.rectX);
    setRectXY(coordinateNames.redRectY, redRect.rectY);
    const greenRect = preventOutOfBounds(coordinates.greenRectX, coordinates.greenRectY);
    setRectXY(coordinateNames.greenRectX, greenRect.rectX);
    setRectXY(coordinateNames.greenRectY, greenRect.rectY);
  }
  function drawBlueRect(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(coordinates.blueRectX, coordinates.blueRectY, rectWidth, rectHeight);
  }
  function drawRedRect(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(coordinates.redRectX, coordinates.redRectY, rectWidth, rectHeight);
  }
  function drawGreenRect(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(coordinates.greenRectX, coordinates.greenRectY, rectWidth, rectHeight);
  }

  // scripts/index.js
  var keys = {};
  function draw(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlueRect(ctx);
    drawRedRect(ctx);
    drawGreenRect(ctx);
    moveRectangle(keys);
  }
  function resizeCanvas(canvas, ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(canvas, ctx);
  }
  function addResizeEventListener(canvas, ctx) {
    window.addEventListener("resize", () => resizeCanvas(canvas, ctx));
  }
  function addKeyboardEventListeners() {
    window.addEventListener("keydown", (event) => {
      keys[event.key] = true;
    });
    window.addEventListener("keyup", (event) => {
      keys[event.key] = false;
    });
  }
  function animate(canvas, ctx) {
    draw(canvas, ctx);
    requestAnimationFrame(() => animate(canvas, ctx));
  }
  function main() {
    console.log("Game Started!");
    initializeDB();
    const data2 = getData();
    console.log(data2);
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    resizeCanvas(canvas, ctx);
    addResizeEventListener(canvas, ctx);
    addKeyboardEventListeners();
    animate(canvas, ctx);
  }
  main();
})();
/*! Bundled license information:

@spica-devkit/bucket/dist/index.mjs:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=bundle.js.map
