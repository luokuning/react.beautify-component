import React, {Component, PropTypes} from 'react'

require('../../font/css/fontello.css')
require('./react.droplist.css')

class Droplist extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    default: PropTypes.string.isRequired,
    listDatas: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  state = {
    show:0,
    down:0
  }
  handleClick = (e) => {
    var lists = this.refs.lists,
        self = this,
        ele = e.target;

    switch (ele.dataset.clickid) {
      case 'drop':
        this.setState({
          show: 1,
          down: !this.state.down
        }, this.downOrUp());
        break;
      case 'option':
        this.setState({
          down: 0
        }, this.downOrUp(ele.dataset.data));
        break;
    }
  }
  handleBlur = (e) => {
    this.setState({
      down: 0
    }, this.downOrUp())
  }
  downOrUp(data) {
    return () => {
      var self = this,
          lists = this.refs.lists;

      // callback
      data !== undefined && this.props.onChange(data, this.props.listDatas.indexOf(data));

      requestAnimationFrame(function() {
        self.state.down
          ? (lists.style.transform = 'translateY(0)', self.refs.drop.style.transform = 'rotate(180deg)')
          : (lists.style.transform = 'translateY(-100%)', self.refs.drop.style.transform = 'rotate(0deg)', setTimeout(function() {
            self.setState({show: 0})
          }, 200));
      })
    }
  }
  render() {
    let wrapperStyle = {
        position: 'relative',
        display: 'inline-block',
        outline: 'none',
        ...this.props.style
    }
    let props = this.props


    return (

      <div style={wrapperStyle} className={props.className} onClick={this.handleClick} tabIndex={-1} onBlur={this.handleBlur} >
        <span className='lk-drop-fr' data-clickid='drop' >
          <span data-clickid='drop'>{props.default}</span>
          <i data-clickid='drop' ref='drop' className='icon-down-dir lk-icon-caret'></i>
        </span>
        <div style={{display: this.state.show?'block':'none'}} className='lk-drop-items-wrapper' >
          <ul className='lk-drop-items' ref='lists' >
            {
              props.listDatas.map((data,i) => {
                return <li className='lk-drop-item' data-data={data} data-clickid='option' key={'data' + i} >{data}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }

}

export default Droplist
