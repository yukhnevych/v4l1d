"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _core=require("./core"),rules=_interopRequireWildcard(require("./rules")),utils=_interopRequireWildcard(require("./utils"));function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var V4l1d=/*#__PURE__*/function(){function a(){_classCallCheck(this,a),this._rules=Object.assign({},rules),this.validate=_core.validate}return _createClass(a,[{key:"addRule",value:function d(a,b,c){this._rules[a]=function(a,d){return function(e){return b(e,a)||d||c}}}},{key:"rules",get:function a(){return this._rules}},{key:"utils",get:function a(){return utils}}]),a}(),_default=new V4l1d;exports.default=_default;