(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pagination"] = factory();
	else
		root["Pagination"] = factory();
})(this, function() {
return webpackJsonp_name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(68);


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

/***/ 68:
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
	__webpack_require__(84);

	var Pagination = function (_Component) {
	  (0, _inherits3.default)(Pagination, _Component);

	  function Pagination() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    (0, _classCallCheck3.default)(this, Pagination);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Pagination)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      total: _this.props.total || 0,
	      current: _this.props.current || 1,
	      countPerPage: _this.props.countPerPage || 5
	    }, _this.handleChangePage = function (e) {
	      var page = e.target.dataset.page;
	      if (!isNaN(page - 0) && _this.state.current != page) {
	        _this.props.onChange(page - 0);
	      }
	    }, _this._next = function () {
	      if (_this.state.current < Math.ceil(_this.state.total / _this.state.countPerPage)) {
	        _this.props.onChange(++_this.state.current);
	      }
	    }, _this._prev = function () {
	      if (_this.state.current > 1) {
	        _this.props.onChange(--_this.state.current);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }

	  (0, _createClass3.default)(Pagination, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var total = nextProps.total;
	      var _nextProps$current = nextProps.current;
	      var current = _nextProps$current === undefined ? 1 : _nextProps$current;
	      var _nextProps$countPerPa = nextProps.countPerPage;
	      var countPerPage = _nextProps$countPerPa === undefined ? 5 : _nextProps$countPerPa;

	      this.state = (0, _extends3.default)({}, this.state, {
	        total: total,
	        current: current,
	        countPerPage: countPerPage
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.state,
	          props = this.props,
	          pageLists = [],
	          i = 0,
	          pageCounts = Math.ceil(state.total / state.countPerPage);

	      // get no data
	      if (pageCounts === 0) {
	        pageLists.push('暂无数据');
	      } else if (0 < pageCounts && pageCounts < 7) {
	        for (; i < pageCounts; i++) {
	          pageLists.push(i + 1);
	        }
	      } else {
	        if (state.current < 4) {
	          // 前3页
	          for (; i < 5; i++) {
	            pageLists.push(i + 1);
	          }
	          pageLists.push('...');
	          pageLists.push(pageCounts);
	        } else if (pageCounts - state.current < 3) {
	          // 后3页
	          for (; i < 5; i++) {
	            pageLists.push(pageCounts - i);
	          }
	          pageLists.push('...');
	          pageLists.push(1);
	          pageLists.reverse();
	        } else {
	          pageLists.push(1);
	          if (state.current != 4) {
	            pageLists.push('...');
	          }
	          for (; i < 5; i++) {
	            pageLists.push(i + (state.current - 0) - 2);
	          }
	          if (state.current != pageCounts - 3) {
	            pageLists.push('...');
	          }
	          pageLists.push(pageCounts);
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'lk-pagination clearfix', style: { textAlign: props.center ? 'center' : 'inherit' } },
	        _react2.default.createElement(
	          'ul',
	          { onClick: this.handleChangePage },
	          _react2.default.createElement(
	            'li',
	            {
	              onClick: this._prev,
	              className: props.current == 1 || state.total === 0 ? 'lk-pg-not-allowed tooltipped-pg' : 'tooltipped-pg',
	              'aria-label': '上一页' },
	            _react2.default.createElement('i', { className: 'icon-left-open-big' })
	          ),
	          pageLists.map(function (page, i) {
	            return _react2.default.createElement(
	              'li',
	              {
	                key: 'page' + i,
	                'data-page': !isNaN(page - 0) ? page - 0 : '...',
	                className: isNaN(page - 0) && page !== '...' ? 'lk-pg-no-data' : props.current == page && 'lk-pg-current',
	                style: { cursor: !isNaN(page - 0) ? 'pointer' : 'default' } },
	              page
	            );
	          }),
	          _react2.default.createElement(
	            'li',
	            {
	              onClick: this._next,
	              className: state.current == pageCounts || state.total === 0 ? 'lk-pg-not-allowed tooltipped-pg' : 'tooltipped-pg',
	              'aria-label': '下一页' },
	            _react2.default.createElement('i', { className: 'icon-right-open-big' })
	          )
	        )
	      );
	    }
	  }]);
	  return Pagination;
	}(_react.Component);

	Pagination.propTypes = {
	  totoal: _react.PropTypes.number,
	  current: _react.PropTypes.number,
	  countPerPage: _react.PropTypes.number,
	  center: _react.PropTypes.bool,
	  onChange: _react.PropTypes.func.isRequired
	};
	exports.default = Pagination;

/***/ },

/***/ 84:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;