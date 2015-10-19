;(function(root, factory){
    if (typeof define === 'function' && define.amd) {
        define(['react', 'underscore'], factory);
    } else if (typeof exports !== 'undefined') {
        var React = require('react'),
            _ = require('underscore');
        module.exports = factory(React, _);
    } else {
        root.DropList = factory(React, _);
    }
})(this, function(React, _){
	var DropList=React.createClass({
		getInitialState:function(){
			return {
				show:0,
				down:0,
				index:0
			}
		},
        downOrUp:function() {
            var self=this,
                lists=this.refs.lists.getDOMNode();
            requestAnimationFrame(function() {
                self.state.down ? (lists.style.transform = 'translateY(0)', self.refs.drop.getDOMNode().style.transform = 'rotate(180deg)') : (lists.style.transform = 'translateY(-100%)', self.refs.drop.getDOMNode().style.transform = 'rotate(0deg)', setTimeout(function() {
                    self.setState({
                        show: 0
                    });
                }, 200));
            })
        },
		handleClick:function(e){
			window.drop=this;
			var lists=this.refs.lists.getDOMNode(),
				self=this,
				ele=e.target;
	            
            switch (ele.dataset.clickid) {
                case 'drop':
                    this.setState({
                        show: 1,
                        down: !this.state.down
                    }, this.downOrUp);
                    break;
                case 'option':
                    this.setState({
                        down: 0,
                        index: ele.dataset.index
                    }, this.downOrUp);
                    break;
            }
		},
        handleBlur:function(e){
            this.setState({down:0},this.downOrUp);
        },
		render:function(){
            var wrapperStyle = _.extend({
                    position: 'relative',
                    width: 112,
                    display: 'inline-block',
                    outline:'none'
                }, this.props.style),
                spanStyle = {
                    display: 'inline-block',
                    border: 'solid 1px #ccc',
                    width: '100%',
                    padding: '5px 8px',
                    boxSizing: 'border-box',
                    cursor: 'pointer'                   
                },
                ulWrapper={
                    display:this.state.show?'block':'none',
                    width:'100%',
                    position:'absolute',
                    zIndex:2,
                    overflow:'hidden',
                    boxSizing:'border-box'
                },
                ulStyle = {
                	padding:'8px 0',
                	border: 'solid 1px #ccc',
                    borderTop: 'none',
                    boxSizing: 'border-box',
                    width: '100%',
                    zIndex: 2,
                    background: '#fff',
                    position: 'relative',
                    transform: 'translateY(-100%)',
                    transition: '.2s ease'
                },
                liStyle = {
                    padding: '6px 8px',
                    cursor: 'pointer'
                };

			return (
                
				<div style={wrapperStyle} className={this.props.className} onClick={this.handleClick} tabIndex={-1} onBlur={this.handleBlur} >
					<span style={spanStyle} data-clickid='drop' >
						<span data-clickid='drop'>{this.props.listDatas[this.state.index]}</span>
						<i data-clickid='drop' ref='drop' className='icon-caret-down' style={{display:'inline-block',float:'right',transform:'rotate(0deg)',transition:'.2s ease'}}></i>
					</span>
					<div style={ulWrapper} >
						<ul style={ulStyle} ref='lists' >
							{
								this.props.listDatas.map(function(data,i){
									return <li style={liStyle} data-index={i} data-clickid='option' key={_.uniqueId('data_')}  >{data}</li>
								},this)
							}
						</ul>
					</div>
				</div>
			);
		}
	});
	
	return DropList;

});