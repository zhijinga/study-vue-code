import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'
const container = document.getElementById('container')
const btn = document.getElementById('btn')
// const myDom = h('h1', {}, '我正在学习Patch算法')
const myDom = h('section', {}, '哈哈哈')

patch(container, myDom)

const myDom2 = h('section', {}, [
  h('p', {}, 'A'),
  h('p', {}, 'B'),
  h('p', {}, 'C'),
  h('p', {}, 'D'),
])
btn.onclick = function () {
  patch(myDom, myDom2)
}