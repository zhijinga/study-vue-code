import h from './mySnabbdom/h'


const myDom = h('div', {}, [
  h('span', {}, '水果'),
  h('span', {}, '蔬菜'),
  h('span', {}, '药店'),
  h('span', {}, '明星'),
])
console.log(myDom)