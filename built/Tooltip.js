(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tooltip"] = factory();
	else
		root["Tooltip"] = factory();
})(this, function() {
return webpackJsonp_name_([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(69);


/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

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

	__webpack_require__(85);

	var Tooltip = function (_Component) {
		(0, _inherits3.default)(Tooltip, _Component);

		function Tooltip() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, Tooltip);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				content: '',
				target: null
			}, _this.handleMouse = function (e) {
				if (e.target.dataset && e.target.dataset.tip) {
					if (e.type === 'mouseover') {
						_this.setState({
							content: e.target.dataset.tip,
							target: e.target
						});
					} else {
						_this.setState({
							content: '',
							target: null
						});
					}
				}
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(Tooltip, [{
			key: 'getOffset',
			value: function getOffset(element) {
				var offset = {
					left: 0,
					top: 0
				};
				var getter = function getter(element) {
					if (element.offsetParent !== null) {
						offset.left += element.offsetLeft;
						offset.top += element.offsetTop;
						getter(element.offsetParent);
					}
				};
				getter(element);
				return offset;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				document.addEventListener('mouseover', this.handleMouse, false);
				document.addEventListener('mouseout', this.handleMouse, false);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				document.removeEventListener('mouseover', this.handleMouse, false);
				document.addEventListener('mouseout', this.handleMouse, false);
			}
		}, {
			key: 'render',
			value: function render() {
				var state = this.state,
				    target = state.target,
				    offset = target ? this.getOffset(state.target) : {},
				    show = {
					left: offset.left,
					top: offset.top,
					width: target && target.offsetWidth,
					height: target && target.offsetHeight
				};
				return _react2.default.createElement('div', { className: state.content === '' ? 'tooltip-disappear' : 'tooltip-wrapper',
					'aria-label': state.content,
					style: state.content === '' ? {} : show });
			}
		}]);
		return Tooltip;
	}(_react.Component);

	exports.default = Tooltip;

/***/ },

/***/ 85:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;