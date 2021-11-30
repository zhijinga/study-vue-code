import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'
const container = document.getElementById('container')

// const myDom = h('h1', {}, '我正在学习Patch算法')
const myDom = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, [
    h('p', {}, 'C1'),
    h('p', {}, 'C2'),
  ]),
  h('li', {}, 'D'),
])

patch(container, myDom)
