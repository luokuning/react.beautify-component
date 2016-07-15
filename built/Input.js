(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Input"] = factory();
	else
		root["Input"] = factory();
})(this, function() {
return webpackJsonp_name_([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67);


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(29);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(25)
	  , gOPS     = __webpack_require__(41)
	  , pIE      = __webpack_require__(35)
	  , toObject = __webpack_require__(42)
	  , IObject  = __webpack_require__(47)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(20)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(18);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(33)});

/***/ },

/***/ 54:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(54);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(11);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(12);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(13);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(15);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(14);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(83);

	var Input = function (_Component) {
	  (0, _inherits3.default)(Input, _Component);

	  function Input() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Input);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Input)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {
	      if (!_this.props.disabled && _this.props.onChange) {
	        _this.props.onChange(!_this.props.checked, _this.refs.input);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Input, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var handleText = {
	        cursor: props.cursorAllowed ? 'pointer' : props.disabled ? 'not-allowed' : 'pointer',
	        paddingLeft: 19,
	        height: '1em',
	        lineHeight: '1em'
	      };
	      var children = props.children;
	      var style = props.style;
	      var onMouseDown = props.onMouseDown;
	      var title = props.title;
	      var other = (0, _objectWithoutProperties3.default)(props, ['children', 'style', 'onMouseDown', 'title']);
	      var isRadio = props.type === 'radio';
	      var divStyle = {
	        width: '1em',
	        height: '1em',
	        position: 'absolute',
	        top: -1,
	        left: 1,
	        border: 'solid 1px #ccc',
	        borderColor: props.checked ? 'transparent' : '#ccc',
	        color: '#fff',
	        textAlign: 'center',
	        lineHeight: 1,
	        transition: '.15s',
	        boxSizing: 'border-box',
	        borderRadius: 2,
	        background: props.checked ? '#3a86ff' : '#fff'
	      };

	      var wrapper = (0, _extends3.default)({
	        display: 'inline-block',
	        position: 'relative',
	        marginRight: 5
	      }, props.style);

	      props.style && 'textOverflow' in props.style && (handleText = (0, _extends3.default)({}, handleText, {
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: 'nowrap'
	      }));

	      isRadio && (divStyle.borderRadius = 10);
	      return _react2.default.createElement(
	        'span',
	        {
	          style: wrapper,
	          onMouseDown: props.onMouseDown && props.onMouseDown,
	          title: props.title },
	        _react2.default.createElement('input', (0, _extends3.default)({}, other, {
	          style: { position: 'absolute', top: 0, left: 0, visibility: 'hidden' },
	          ref: 'input' })),
	        _react2.default.createElement(
	          'div',
	          {
	            onClick: this.handleClick,
	            style: handleText },
	          _react2.default.createElement('div', {
	            className: isRadio ? props.checked ? 'lk-react-radio lk-react-input' : 'lk-react-radio' : props.checked ? 'lk-react-checkbox lk-react-input' : 'lk-react-checkbox',
	            style: divStyle }),
	          _react2.default.createElement(
	            'span',
	            {
	              style: { color: props.disabled ? '#ccc' : '#000' },
	              className: props.className },
	            props.children
	          )
	        )
	      );
	    }
	  }]);
	  return Input;
	}(_react.Component);

	Input.defaultProps = {
	  checked: false,
	  disabled: false
	};
	Input.propTypes = {
	  disabled: _react.PropTypes.bool,
	  checked: _react.PropTypes.bool,
	  cursorAllowed: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  onMouseDown: _react.PropTypes.func,
	  title: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  type: _react.PropTypes.string.isRequired,
	  onChange: _react.PropTypes.func.isRequired
	};
	exports.default = Input;

/***/ },

/***/ 83:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;