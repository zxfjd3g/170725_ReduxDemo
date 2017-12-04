import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import Counter from './components/Counter'
import counter from './reducers'

// 生成store对象
const store = createStore(counter)

// 定义创建action对象的函数
const incrementCreator = (number) => ({type: 'INCREMENT', number})
const decrementCreator = (number)  => ({type: 'DECREMENT', number})

// 调用store产生新状态的函数
const increment = number => store.dispatch(incrementCreator(number))
const decrement = number => store.dispatch(decrementCreator(number))

// 渲染组件标签
function render () {
  ReactDOM.render(
    <Counter count={store.getState()} increment={increment} decrement={decrement}/>,
    document.getElementById('root')
  )
}
// 初始化渲染
render()

// 订阅监听(当产生新的状态时调用, 重新渲染组件标签)
store.subscribe(render)