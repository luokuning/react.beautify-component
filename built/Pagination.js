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
return webpackJsonp_name_([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(54);

	var _extends3 = _interopRequireDefault(_extends2);

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

	__webpack_require__(71);
	__webpack_require__(183);

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
	        _this.props.onChange(page);
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
	      var current = nextProps.current;
	      var countPerPage = nextProps.countPerPage;

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
	        { className: 'lk-pagination clearfix' },
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
	  onChange: _react.PropTypes.func.isRequired

	};
	exports.default = Pagination;

/***/ },

/***/ 71:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 183:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;