/*
函数模块: 根据当前的状态生成一个新的状态返回
 */
export default function counter(state=1, action) {
  console.log('counter()', state, action)
  switch (action.type) {
    case 'INCREMENT': //增加
      return state + action.number
      break
    case 'DECREMENT': //减少
      return state - action.number
      break
    default:
      return state
  }
}