import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Counter from '../components/Counter'
import * as actionCreators from '../action/index'

// 准备一般属性: count
const mapStateToProps = (state) => ({count: state})


// 定义创建action对象的函数
const incrementCreator = (number) => ({type: 'INCREMENT', number})
const decrementCreator = (number)  => ({type: 'DECREMENT', number})

// 准备函数属性: increment decrement
/*const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(incrementCreator(number)),
  decrement: (number) => dispatch(decrementCreator(number)),
})*/
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)