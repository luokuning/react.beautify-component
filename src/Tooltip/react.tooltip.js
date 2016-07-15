import React, {Component, PropTypes} from 'react'

require('./react.tooltip.css')

class Tooltip extends Component {
	state = {
		content:'',
		target: null
	}

	handleMouse = (e) => {
		if(e.target.dataset && e.target.dataset.tip){
			if(e.type === 'mouseover'){
				this.setState({
					content: e.target.dataset.tip,
					target: e.target
				});
			}else{
				this.setState({
					content: '',
					target: null
				});
			}
		}
	}

	getOffset(element) {
		let offset = {
			left: 0,
			top: 0
		}
		let getter = (element) => {
			if(element.offsetParent !== null){
				offset.left += element.offsetLeft
				offset.top += element.offsetTop
				getter(element.offsetParent)
			}
		}
		getter(element)
		return offset
	}
	componentDidMount() {
		document.addEventListener('mouseover', this.handleMouse, false)
		document.addEventListener('mouseout', this.handleMouse, false)
	}
	componentWillUnmount() {
		document.removeEventListener('mouseover', this.handleMouse, false)
		document.addEventListener('mouseout', this.handleMouse, false)
	}
	render() {
		var state = this.state,
			target = state.target,
			offset = target ? this.getOffset(state.target) : {},
			show = {
				left: offset.left,
				top: offset.top,
				width: target && target.offsetWidth,
				height: target && target.offsetHeight
			};
		return (
			<div className={state.content === ''?'tooltip-disappear':'tooltip-wrapper'}
			  aria-label={state.content}
			  style={state.content === ''?{}:show}>
			</div>
		)
	}
}

export default Tooltip
