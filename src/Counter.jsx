import React, {Component} from 'react'

export default class Counter extends Component {

  /*constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      count: 0
    }
  }*/
  // 给组件对象添加属性
  state = {
    count: 0
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.state.count + number
    this.setState({count})
  }

  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.state.count - number
    this.setState({count})
  }
  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    let count = this.state.count
    if(count%2===1) {
      count += number
      this.setState({count})
    }

  }
  incrementAsync = () => {
    setTimeout(() => {
      const number = this.refs.numberSelect.value * 1
      const count = this.state.count + number
      this.setState({count})
    }, 1000)
  }


  render () {
    const {count} = this.state

    return (
      <div>
        <span>Clicked: {count} times</span>{' '}
        <select ref="numberSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{' '}
        <button onClick={this.increment}>+</button>{' '}
        <button onClick={this.decrement}>-</button>{' '}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{' '}
        <button onClick={this.incrementAsync}>increment async</button>{' '}
      </div>
    )
  }
}