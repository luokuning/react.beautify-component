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
return webpackJsonp_name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(54);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(143);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _getPrototypeOf = __webpack_require__(51);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(52);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(53);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(56);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(55);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(50);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(182);

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
	        paddingTop: 1,
	        height: 18
	      };
	      var children = props.children;
	      var style = props.style;
	      var onMouseDown = props.onMouseDown;
	      var title = props.title;
	      var other = (0, _objectWithoutProperties3.default)(props, ['children', 'style', 'onMouseDown', 'title']);
	      var isRadio = props.type === 'radio';
	      var divStyle = {
	        width: 12,
	        height: 12,
	        position: 'absolute',
	        top: 1,
	        left: 1,
	        border: 'solid 1px #ccc',
	        borderColor: props.checked ? 'transparent' : '#ccc',
	        color: '#fff',
	        textAlign: 'center',
	        fontSize: '8px',
	        lineHeight: 1,
	        transition: '.15s',
	        background: props.checked ? '#2265ec' : '#fff',
	        borderRadius: 3
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
	              className: props.className,
	              'aria-label': props['aria-label'] },
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

/***/ 143:
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

/***/ 182:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;