import React, {Component, PropTypes} from 'react'

require('./react.input.css')

class Input extends Component {
  static defaultProps = {
    checked:false,
    disabled:false
  }
  static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    cursorAllowed: PropTypes.string,
    style: PropTypes.object,
    onMouseDown: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  handleClick = () => {
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(!this.props.checked, this.refs.input);
    }
  }
  render() {
    var props = this.props,
        handleText = {
          cursor: props.cursorAllowed ? 'pointer' : (props.disabled ? 'not-allowed' : 'pointer'),
          paddingLeft: 19,
          height: '1em',
          lineHeight: '1em'
        },
        {
          children, style, onMouseDown, title, ...other
        } = props,
        isRadio = props.type === 'radio',
        divStyle = {
          width: '1em',
          height: '1em',
          position: 'absolute',
          top: -1,
          left: 1,
          border: 'solid 1px #ccc',
          borderColor: props.checked ? 'transparent' : '#ccc',
          color: '#fff',
          textAlign: 'center',
          lineHeight: 1,
          transition:'.15s',
          boxSizing: 'border-box',
          borderRadius: 2,
          background: props.checked ? '#3a86ff' : '#fff'
        },

        wrapper = {
          display: 'inline-block',
          position: 'relative',
          marginRight: 5,
          ...props.style
        };

        props.style && 'textOverflow' in props.style && (
          handleText = {
            ...handleText,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }
        );

        isRadio && (divStyle.borderRadius = 10);
    return (
      <span
        style={wrapper}
        onMouseDown={props.onMouseDown && props.onMouseDown}
        title={props.title}  >
        <input
          {...other}
          style={{position:'absolute', top:0, left:0, visibility:'hidden'}}
          ref='input' />
        <div
          onClick={this.handleClick}
          style={handleText} >
          <div
            className={isRadio?(props.checked?'lk-react-radio lk-react-input':'lk-react-radio'):(props.checked?'lk-react-checkbox lk-react-input':'lk-react-checkbox')}
            style={divStyle}  >
          </div>
          <span
            style={{color: props.disabled ? '#ccc' : '#000'}}
            className={props.className}>
            {props.children}
          </span>
        </div>
      </span>
    );
  }
}

export default Input
