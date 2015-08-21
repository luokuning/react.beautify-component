;(function(factory){
    if (typeof define === 'function' && define.amd) {
        define(['react', 'underscore'], factory);
    } else if (typeof exports !== 'undefined') {
        var React = require('react'),
            _ = require('underscore');
        factory(React, _, exports);
    } else {
        factory(React, _);
    }
})(function(React, _, exp){
	var DropList=React.createClass({
		getInitialState:function(){
			return {
				show:0,
				down:0,
				index:0
			}
		},

		handleClick:function(e){
			window.drop=this;
			var lists=this.refs.lists.getDOMNode(),
				self=this,
				ele=e.target,
	            downOrUp = function() {
	                requestAnimationFrame(function() {
	                    self.state.down ? (lists.style.transform = 'translateY(0)', self.refs.drop.getDOMNode().style.transform = 'rotate(180deg)') : (lists.style.transform = 'translateY(-100%)', self.refs.drop.getDOMNode().style.transform = 'rotate(0deg)', setTimeout(function() {
	                        self.setState({
	                            show: 0
	                        });
	                    }, 200));
	                })
	            };
			switch(ele.dataset.clickid){
				case 'drop':
					this.setState({
						show:1,
						down:!this.state.down
					},downOrUp);
					break;
				case 'option':
					this.setState({
						down:0,
						index:ele.dataset.index
					},downOrUp);
					break;
			}
		},
		render:function(){

            var wrapperStyle = _.extend({
                    position: 'relative',
                    width: 112,
                    display: 'inline-block'
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

				<div style={wrapperStyle} className={this.props.className} onClick={this.handleClick} >
					<span style={spanStyle} data-clickid='drop'>
						<span data-clickid='drop'>{this.props.listDatas[this.state.index]}</span>
						<i data-clickid='drop' ref='drop' className='icon-caret-down' style={{display:'inline-block',float:'right',transform:'rotate(0deg)',transition:'.2s ease'}}></i>
					</span>
					<div style={ulWrapper} >
						<ul style={ulStyle} ref='lists' >
							{
								this.props.listDatas.map(function(data,i){
									return <li style={liStyle} data-index={i} data-clickid='option' >{data}</li>
								},this)
							}
						</ul>
					</div>
				</div>
			);
		}
	});
	
	if(exp){
		return exp.DropList=DropList;
	}
	return DropList;

});