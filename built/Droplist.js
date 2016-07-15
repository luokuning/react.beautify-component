(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Droplist"] = factory();
	else
		root["Droplist"] = factory();
})(this, function() {
return webpackJsonp_name_([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(66);


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

/***/ 26:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

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

	__webpack_require__(26);
	__webpack_require__(82);

	var Droplist = function (_Component) {
	  (0, _inherits3.default)(Droplist, _Component);

	  function Droplist() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Droplist);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Droplist)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      show: 0,
	      down: 0
	    }, _this.handleClick = function (e) {
	      var lists = _this.refs.lists,
	          self = _this,
	          ele = e.target;

	      switch (ele.dataset.clickid) {
	        case 'drop':
	          _this.setState({
	            show: 1,
	            down: !_this.state.down
	          }, _this.downOrUp());
	          break;
	        case 'option':
	          _this.setState({
	            down: 0
	          }, _this.downOrUp(ele.dataset.data));
	          break;
	      }
	    }, _this.handleBlur = function (e) {
	      _this.setState({
	        down: 0
	      }, _this.downOrUp());
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Droplist, [{
	    key: 'downOrUp',
	    value: function downOrUp(data) {
	      var _this2 = this;

	      return function () {
	        var self = _this2,
	            lists = _this2.refs.lists;

	        // callback
	        data !== undefined && _this2.props.onChange(data, _this2.props.listDatas.indexOf(data));

	        requestAnimationFrame(function () {
	          self.state.down ? (lists.style.transform = 'translateY(0)', self.refs.drop.style.transform = 'rotate(180deg)') : (lists.style.transform = 'translateY(-100%)', self.refs.drop.style.transform = 'rotate(0deg)', setTimeout(function () {
	            self.setState({ show: 0 });
	          }, 200));
	        });
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var wrapperStyle = (0, _extends3.default)({
	        position: 'relative',
	        display: 'inline-block',
	        outline: 'none',
	        width: 120
	      }, this.props.style);
	      var props = this.props;

	      return _react2.default.createElement(
	        'div',
	        { style: wrapperStyle, className: props.className, onClick: this.handleClick, tabIndex: -1, onBlur: this.handleBlur },
	        _react2.default.createElement(
	          'span',
	          { className: 'lk-drop-fr', 'data-clickid': 'drop', style: { borderRadius: props.roundedCorner ? 4 : 0 } },
	          _react2.default.createElement(
	            'span',
	            { 'data-clickid': 'drop' },
	            props.default
	          ),
	          _react2.default.createElement('i', { 'data-clickid': 'drop', ref: 'drop', className: 'icon-down-dir lk-icon-caret' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { display: this.state.show ? 'block' : 'none', marginTop: props.roundedCorner ? 4 : 0 }, className: 'lk-drop-items-wrapper' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'lk-drop-items', ref: 'lists', style: { borderRadius: props.roundedCorner ? 4 : 0, borderTop: props.roundedCorner ? 'solid 1px #ccc' : 'none' } },
	            props.listDatas.map(function (data, i) {
	              return _react2.default.createElement(
	                'li',
	                { className: 'lk-drop-item', 'data-data': data, 'data-clickid': 'option', key: 'data' + i },
	                data
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return Droplist;
	}(_react.Component);

	Droplist.propTypes = {
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  roundedCorner: _react.PropTypes.bool,
	  default: _react.PropTypes.string.isRequired,
	  listDatas: _react.PropTypes.array.isRequired,
	  onChange: _react.PropTypes.func.isRequired
	};
	exports.default = Droplist;

/***/ },

/***/ 82:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;