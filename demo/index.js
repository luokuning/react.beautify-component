import React from 'react'
import {render} from 'react-dom'
import Input from '../src/Input/react.input'
import Droplist from '../src/Droplist/react.droplist'
import Pagination from '../src/Pagination/react.pagination'

let container = document.getElementById('container')
let func = function(){
  console.log(...arguments)
}

// render(<Input type='checkbox' checked={true} onChange={func} >hello world ＝ 你好世界</Input>, container)
// render(<Droplist listDatas={['hello world', 'happy go', 'uhhhhhh']} default='hello world' onChange={func} />, container)
render(<Pagination current={1} total={1000} onChange={func} />, container)
