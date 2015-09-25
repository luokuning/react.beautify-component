;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['react', 'underscore'], factory);
    } else if (typeof exports !== 'undefined') {
        var React = require('react'),
            _ = require('underscore');
        module.exports=factory(React, _);
    } else {
        root.Input = factory(React, _);
    }
})(this, function(React, _) {
	var Input=React.createClass({
		getDefaultProps:function(){
			return {
				checked:false,
				disabled:false
			}
		},
		handleClick:function(){
			if(!this.props.disabled&&this.props.onChange){
				this.props.onChange(!this.props.checked,this.refs.input.getDOMNode());
			}
		},
		render:function(){
			var props=this.props,
				handleText={
					cursor:props.cursorAllowed?'pointer':(props.disabled?'not-allowed':'pointer'),
					paddingLeft:19,
					paddingTop:1,
					height:18
				},
				{ children,style,onMouseDown, ...other }=props,
				isRadio=props.type==='radio',
				divStyle={
					width:12,
					height:12,
					position:'absolute',
					top:1,
					left:1,
					border:'solid 1px #ccc',
					color:'#fff',
					textAlign:'center',
					fontSize:'8px',
					lineHeight:1,
					background:props.checked?'#2265ec':'#fff'
				},
				
				wrapper={
					display:'inline-block',
					position:'relative',
					marginRight:5
				};
			_.extend(wrapper,props.style);
			props.style&&'textOverflow' in props.style&&_.extend(handleText,{
					overflow: 'hidden',
					textOverflow:'ellipsis',
					whiteSpace: 'nowrap'
			});
			
			isRadio&&(divStyle.borderRadius=10);
			return (
				<span style={wrapper} onMouseDown={props.onMouseDown&&props.onMouseDown} >
					<input {...other} style={{position:'absolute',top:0,left:0,visibility:'hidden'}} ref='input' />
					<div onClick={this.handleClick} style={handleText} >
						<div style={divStyle}  >
							<i className={isRadio?'icon-circle absolute-middle':'icon-ok absolute-middle'} style={{left:isRadio?0:-1, top:isRadio?0:1,transform:props.checked?(isRadio?'scale(.45)':'scale(.8)'):'scale(0)',transition:'.1s'}} ></i>
						</div>
						<span style={{color:this.props.disabled?'#ccc':'#333'}} >{this.props.children}</span>
					</div>
				</span>
			);
		}
	});

	return Input;

});