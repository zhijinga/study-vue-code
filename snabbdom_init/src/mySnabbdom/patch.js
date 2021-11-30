import vNode from './vNode'
import createElement from './createElement'

export default function (oldNode, newNode) {
  console.log(oldNode, newNode)
  console.log(oldNode.sel)
  // 判断旧的节点是不是个虚拟节点
  if (oldNode.sel === '' || oldNode.sel === undefined) {
    // 把旧的节点改成虚拟节点
    oldNode = vNode(oldNode.tagName.toLowerCase(), {}, [], undefined, oldNode)
  }
  console.log(oldNode)
  // 在判断oldNode 和newNode是不是同一个节点
  if (oldNode.key === newNode.key && oldNode.sel === newNode.sel) {
    console.log('是同一个节点')
  } else {
    console.log('不是同一个节点，暴力插入新的，删除旧的')
    let newVnodeElm = createElement(newNode)
    if (newVnodeElm && oldNode.elm) {
      oldNode.elm.parentNode.insertBefore(newVnodeElm, oldNode.elm)
    }
    oldNode.elm.parentNode.removeChild(oldNode.elm)
  }
}