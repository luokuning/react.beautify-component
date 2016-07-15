import React, {Component, PropTypes} from 'react'

require('../../font/css/fontello.css')
require('./react.pagination.css')

class Pagination extends Component {
  static propTypes = {
    totoal: PropTypes.number,
    current: PropTypes.number,
    countPerPage: PropTypes.number,
    center: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  }
  state = {
    total: this.props.total || 0,
    current: this.props.current || 1,
    countPerPage: this.props.countPerPage || 5
  }
  handleChangePage = (e) => {
    var page = e.target.dataset.page;
    if (!isNaN(page - 0) && this.state.current != page) {
      this.props.onChange(page);
    }
  }
  _next = () => {
    if (this.state.current < Math.ceil(this.state.total / this.state.countPerPage)) {
      this.props.onChange(++this.state.current);
    }
  }
  _prev = () => {
    if (this.state.current > 1) {
      this.props.onChange(--this.state.current);
    }
  }
  componentWillReceiveProps(nextProps) {
    let {total, current, countPerPage} = nextProps
    this.state = {
      ...this.state,
      total,
      current,
      countPerPage
    }
  }
  render() {
    var state = this.state,
        props = this.props,
        pageLists = [],
        i = 0,
        pageCounts = Math.ceil(state.total / state.countPerPage);

    // get no data
    if (pageCounts === 0) {
      pageLists.push('暂无数据')
    } else if (0 < pageCounts && pageCounts < 7) {
      for (; i < pageCounts; i++) {
        pageLists.push(i + 1)
      }
    } else {
      if (state.current < 4) { // 前3页
        for (; i < 5; i++) {
            pageLists.push(i + 1)
        }
        pageLists.push('...')
        pageLists.push(pageCounts)
      } else if (pageCounts - state.current < 3) { // 后3页
        for (; i < 5; i++) {
            pageLists.push(pageCounts - i);
        }
        pageLists.push('...')
        pageLists.push(1)
        pageLists.reverse()
      } else {
        pageLists.push(1)
        if (state.current != 4) {
            pageLists.push('...')
        }
        for (; i < 5; i++) {
            pageLists.push(i + (state.current - 0) - 2)
        }
        if (state.current != pageCounts - 3) {
            pageLists.push('...')
        }
        pageLists.push(pageCounts)
      }
    }

    return (
      <div className='lk-pagination clearfix' style={{textAlign: props.center?'center':'inherit'}}>
        <ul onClick={this.handleChangePage} >
          <li
            onClick={this._prev}
            className={props.current == 1 || state.total ===0 ? 'lk-pg-not-allowed tooltipped-pg' : 'tooltipped-pg'}
            aria-label='上一页' >

            <i className='icon-left-open-big'>
            </i>

          </li>
          {
            pageLists.map((page, i) => {
              return (
                <li
                  key={'page' + i}
                  data-page={!isNaN(page-0)?page-0:'...'}
                  className={isNaN(page-0)&&page !== '...' ? 'lk-pg-no-data' : (props.current==page && 'lk-pg-current')}
                  style={{cursor:!isNaN(page-0)?'pointer':'default'}} >
                  {page}
                </li>
              );
            })
          }
          <li
            onClick={this._next}
            className={state.current == pageCounts || state.total ===0 ? 'lk-pg-not-allowed tooltipped-pg' : 'tooltipped-pg'}
            aria-label='下一页' >
            <i className='icon-right-open-big'>
            </i>
          </li>

        </ul>

      </div>
    );
  }

}

export default Pagination
