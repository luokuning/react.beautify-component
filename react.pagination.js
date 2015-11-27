;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['react', 'underscore'], factory);
    } else if (typeof exports !== 'undefined') {
        var React = require('react'),
            _ = require('underscore');
        module.exports = factory(React, _);
    } else {
        root.Input = factory(React, _);
    }
})(this, function(React, _) {
   
    var Pagination = React.createClass({
    	getInitialState:function(){
    		var props=this.props;
    		return {
    			total:props.total || 0,
    			current:props.current || 1,
    			countPerPage: props.countPerPage || 5
    		}
    	},
    	componentDidMount:function(){
    		window.lkpage=this; //debug   		
    	},
    	componentWillReceiveProps:function(nextProps){
    		_.extend(this.state, _.pick(nextProps, 'total', 'current', 'countPerPage'));
    		// console.log(_.extend(this.state, _.pick(nextProps, 'total', 'current', 'countPerPage')))
    	},
    	handleChangePage:function(e){
    		var page=e.target.dataset.page;
    		if(!isNaN(page-0)&&this.state.current!=page){
    			this.props.onChange(page);
    		}
    	},
    	_next:function(){
    		if(this.state.current<Math.ceil(this.state.total/this.state.countPerPage)){
    			this.props.onChange(++this.state.current);
    		}
    	},
    	_prev:function(){
    		if(this.state.current>1){
    			this.props.onChange(--this.state.current);
    		}  
    	},
        render: function() {
            var state = this.state,
                props = this.props,
                pageLists = [],
                i = 0,
                pageCounts = Math.ceil(state.total / state.countPerPage);
            
            // got no data
            if(pageCounts === 0){
                pageLists.push('暂无数据');
            }else if (0<pageCounts && pageCounts < 7) {
                for (; i < pageCounts; i++) {
                    pageLists.push(i + 1);
                }
            } else {
                if(state.current<4){// 前3页
                    for(;i<5;i++){
                        pageLists.push(i+1)
                    }
                    pageLists.push('...');
                    pageLists.push(pageCounts);
                }else if(pageCounts-state.current<3){ // 后3页
                    for(;i<5;i++){
                        pageLists.push(pageCounts-i);
                    }
                    pageLists.push('...');
                    pageLists.push(1);
                    pageLists.reverse();
                }else{
                    pageLists.push(1);
                    if(state.current!=4){
                        pageLists.push('...');
                    }                   
                    for(;i<5;i++){
                        pageLists.push(i+(state.current-0)-2);
                    }
                    if(state.current!=pageCounts-3){
                        pageLists.push('...');
                    }
                    pageLists.push(pageCounts);
                }
            }

        	return (
        		<div className='lk-pagination clearfix' >
        			<ul onClick={this.handleChangePage} >
        				<li onClick={this._prev} className={props.current == 1 || state.total ===0 ? 'lk-pg-not-allowed tooltipped' : 'tooltipped'} aria-label='上一页' >
        					<i className='icon-angle-left'></i>
        				</li>
        				{
        					pageLists.map(function(page, i){
        						return (
                                    <li 
                                        data-page={!isNaN(page-0)?page-0:'...'} 
                                        className={isNaN(page-0)&&page !== '...' ? 'lk-pg-no-data' : (props.current==page && 'lk-pg-current')}
                                        style={{cursor:!isNaN(page-0)?'pointer':'default'}}
                                    >
                                        {page}
                                    </li>
                                );
        					})
        				}
        				<li onClick={this._next} className={state.current == pageCounts || state.total ===0 ? 'lk-pg-not-allowed tooltipped' : 'tooltipped'} aria-label='下一页' >
        					<i className='icon-angle-right'></i>
        				</li>
        			</ul>
        		</div>
        	);
        }
    });

    return Pagination;
});