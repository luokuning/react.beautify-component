import React, {Component} from 'react'
import {render} from 'react-dom'
import Input from '../src/Input/react.input'
import Droplist from '../src/Droplist/react.droplist'
import Pagination from '../src/Pagination/react.pagination'
import Tooltip from '../src/Tooltip/react.tooltip'
import registerLanguage from './registerLanguage'

var hljs = require('highlight/highlight.pack')

require('../node_modules/highlight/styles/default.css')
require('./index.css')


class Header extends Component {
  render() {
    return (
      <header>
        <a href='https://github.com/luokuning/react.beautify-component#readme'>React Beautify Components</a>
      </header>
    )
  }
}


class Intro extends Component {
  render() {
    return (
      <div>
        <div className='clearfix field-wrapper' style={{margin: '40px 0'}}>
          <p className='intro-text'>一套简洁美观的 React 组件，且容易在现有基础上进行二次开发满足实际需求.</p>
          <p className='intro-text'>现有大而全的 ui 框架体积巨大，而且很多组件其实并不会用到. 另一方面，如果当设计稿与 ui 框架相去甚远，大型 ui 框架并不方便随意更改样式.</p>
          <p className='intro-text'>而 React beautify-component</p>
          <p className='intro-text'>包含关键组件，每个组件均可独自作为依赖引入，高可定制，源码简单，当需要遵循设计稿开发页面时，可方便的更改样式和功能.</p>
        </div>
      </div>
    )
  }
}

class RadioField extends Component {
  state = {
    checked_0: true,
    checked_1: {
      a: true,
      b: false,
      c: false
    }
  }
  onChange = (checked, element) => {
    this.setState({
      checked_0: checked
    })
  }
  onChangeGroup = (checked, element) => {
    this.setState(() => {
      return {
        checked_1: {
          a: false,
          b: false,
          c: false,
          ...{
            [element.value]: checked
          }
        }
      }
    })
  }
  render() {
    let state = this.state
    return (
      <div>
        <h2 className='field-head'>Radio</h2>

        <div className='clearfix field-wrapper'>
          <div className='left-content'>
            想让 radio 在所有浏览器上看起来都一样？
          </div>
          <div className='right-demo'>
            <Input type='radio' value="I'm a radio button." name="radio" checked={state.checked_0} onChange={this.onChange} >Radio</Input>
            <pre>
              <code>
                {
                  `<Input type="radio" value="radio" name="radio" onChange={this.onChange} >Radio</Input>`
                }
              </code>
            </pre>
          </div>

          <div className='left-content mt20'>
            想要一组跟上面一样的 radio？
          </div>
          <div className='right-demo mt20'>
            <Input type='radio' value="a" name="radioGroup" checked={state.checked_1.a} onChange={this.onChangeGroup} >A</Input>
            <Input type='radio' value="b" name="radioGroup" checked={state.checked_1.b} onChange={this.onChangeGroup} style={{margin:"0 15px"}} >B</Input>
            <Input type='radio' value="c" name="radioGroup" checked={state.checked_1.c} onChange={this.onChangeGroup} >C</Input>
            <pre>
              <code>
                {
                  `<Input type='radio' value="a" name="rg" checked={state.checked_1} onChange={this.onChangeGroup} >A</Input>

<Input type='radio' value="b" name="rg" checked={state.checked_1} onChange={this.onChangeGroup} style={{margin:"0 10px"}}>B</Input>

<Input type='radio' value="c" name="rg" checked={state.checked_1} onChange={this.onChangeGroup} >C</Input>`
                }
              </code>
            </pre>
          </div>

        </div>
      </div>
    )
  }
}

class CheckboxField extends Component {
  state ={
    checked_0: true,
    checked_1: {
      a: false,
      b: true,
      c: false
    }
  }
  onChange = (checked, element) => {
    this.setState({
      checked_0: checked
    })
  }
  onChangeGroup = (checked, element) => {
    this.setState(() => {
      return {
        checked_1: {
          ...this.state.checked_1,
          [element.value]: checked
        }
      }
    })
  }
  render() {
    let state = this.state
    return (
      <div>
        <h2 className='field-head'>Checkbox</h2>

        <div className='clearfix field-wrapper'>
          <div className='left-content'>想要 checkbox ？只需改变 type !</div>
          <div className='right-demo'>
            <Input type='checkbox' value="I'm a checkbox button." checked={state.checked_0} onChange={this.onChange} >Checkbox</Input>
            <pre>
              <code>
                {
                  `<Input type='checkbox' value="checkbox" checked={state.checked_0} onChange={this.onChange} >Checkbox</Input>`
                }
              </code>
            </pre>
          </div>

          <div className='left-content mt20'>
            想要一组 checkbox ？
          </div>
          <div className='right-demo mt20'>
            <Input type='checkbox' value="a"  checked={state.checked_1.a} onChange={this.onChangeGroup} >A</Input>
            <Input type='checkbox' value="b"  checked={state.checked_1.b} onChange={this.onChangeGroup} style={{margin:"0 15px"}} >B</Input>
            <Input type='checkbox' value="c"  checked={state.checked_1.c} onChange={this.onChangeGroup} >C</Input>
            <pre>
              <code>
                {
                  `<Input type='checkbox' value="a" checked={state.checked_1.a} onChange={this.onChangeGroup} >A</Input>

<Input type='checkbox' value="b" checked={state.checked_1.b} onChange={this.onChangeGroup} style={{margin:"0 15px"}} >B</Input>

<Input type='checkbox' value="c" checked={state.checked_1.c} onChange={this.onChangeGroup} >C</Input>`
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

class DroplistField extends Component {
  state = {
    a: 'Nginx',
    b: 'Linux'
  }
  onChangeA = (data, index) => {
    this.setState({
      a: data
    })
  }
  onChangeB = (data, index) => {
    this.setState({
      b: data
    })
  }
  render() {
    let state = this.state
    return (
      <div>
        <h2 className='field-head'>Droplist</h2>

        <div className='clearfix field-wrapper'>
          <div className='left-content'>想要一个看起来不错的下拉菜单？</div>
          <div className='right-demo'>
            <Droplist listDatas={['Nginx', 'Tomcat', 'Apache', 'lighttpd']} default={state.a} onChange={this.onChangeA} />
            <pre>
              <code>
                {
                  `<Droplist listDatas={['Nginx', 'Tomcat', 'Apache', 'lighttpd']} default={state.a} onChange={this.onChangeA} />`
                }
              </code>
            </pre>
          </div>

          <div className='left-content mt20'>
            觉得直角太生硬 ？
          </div>
          <div className='right-demo mt20'>
            <Droplist roundedCorner={true} listDatas={['Linux', 'Windows', 'Solaris', 'macOS']} default={state.b} onChange={this.onChangeB} />
            <pre>
              <code>
                {
                  `<Droplist roundedCorner={true} listDatas={['Linux', 'Windows', 'Solaris', 'macOS']} default={state.b} onChange={this.onChangeB} />`
                }
              </code>
            </pre>
          </div>
        </div>

      </div>
    )
  }
}

class PaginationField extends Component {
  state = {
    total: 238,
    currentA: 1,
    currentB: 20,
    currentC: 1
  }
  onChangeA = (page) => {
    this.setState({
      currentA: page
    })
  }
  onChangeB = (page) => {
    this.setState({
      currentB: page
    })
  }
  onChangeC = (page) => {
    this.setState({
      currentC: page
    })
  }
  render() {
    let state = this.state

    return (
      <div>
        <h2 className='field-head'>Pagination</h2>

        <div className='clearfix field-wrapper'>
          <div className='left-content'>在找分页控件？</div>
          <div className='right-demo'>
            <Pagination total={state.total} current={state.currentA} countPerPage={6} onChange={this.onChangeA} />
            <pre>
              <code>
                {
                  `<Pagination total={state.total} current={state.currentA} countPerPage='6' onChange={this.onChangeA} />`
                }
              </code>
            </pre>
          </div>

          <div className='left-content mt20'>
            想居中显示？
          </div>
          <div className='right-demo mt20'>
            <Pagination center={true} total={state.total} current={state.currentB} countPerPage={6} onChange={this.onChangeB} />
            <pre>
              <code>
                {
                  `<Pagination center={true} total={state.total} current={state.currentB} countPerPage='6' onChange={this.onChangeB} />`
                }
              </code>
            </pre>
          </div>

          <div className='left-content mt20'>
            担心无数据会导致显示不正常？
          </div>
          <div className='right-demo mt20'>
            <Pagination total={0} onChange={this.onChangeC} />
            <pre>
              <code>
                {
                  `<Pagination total=0 onChange={this.onChangeC} />`
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

class TooltipField extends Component {
  render() {
    return (
      <div>
        <Tooltip />
        <h2 className='field-head'>Tooltip</h2>

        <div className='clearfix field-wrapper'>
          <div className='left-content'>还差一个 tooltip？</div>
          <div className='right-demo'>
            <span data-tip='I am Nginx' style={{color: '#3a86ff', cursor: 'pointer'}}>Nginx</span>
            <pre>
              <code>
                {
                  `<Tooltip />
                  {/* ... */}
<span data-tip='I am Nginx'>Nginx</span>`
                }
              </code>
            </pre>
          </div>


        </div>
      </div>
    )
  }
}

class Sortable extends Component {
  render() {
    return (
      <div>
        <h2 className='field-head'>Sortable</h2>

        <div className='clearfix field-wrapper'>
          coming soon ...
        </div>
      </div>
    )
  }
}

class Container extends Component {
  componentDidMount() {
    registerLanguage()
    hljs.initHighlightingOnLoad()
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{width:1200,margin:'auto'}}>
          <Intro />
          <RadioField />
          <CheckboxField />
          <DroplistField />
          <PaginationField />
          <TooltipField />
          <Sortable />
        </div>
      </div>
    )
  }
}

// render(<Input type='checkbox' checked={true} onChange={func} >hello world ＝ 你好世界</Input>, container)
// render(<Droplist listDatas={['hello world', 'happy go', 'uhhhhhh']} default='hello world' onChange={func} />, container)
// render(<Pagination current={1} total={1000} onChange={func} />, container)

render(<Container />, document.getElementById('container'))
