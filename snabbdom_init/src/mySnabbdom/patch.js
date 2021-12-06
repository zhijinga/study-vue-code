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
  Object.defineProperty
  // 在判断oldNode 和newNode是不是同一个节点
  if (oldNode.key === newNode.key && oldNode.sel === newNode.sel) {
    console.log('是同一个节点')

    if (oldNode === newNode) return
    if (newNode.text && newNode.text !== '' && (!newNode.children || newNode.children.length === 0)) {
      if (newNode.text !== oldNode.text) {
        oldNode.elm.innerText = newNode.text
      }
    } else {
      // 新node没有text 意味着有children 
      if (oldNode.children && oldNode.children.length > 0) {
        // 证明oldNode 有children
        // diff算法 
        // 新前和旧前
        // 新后和旧后
        // 新后和旧前
        // 新前和旧后
      } else {
        oldNode.elm.innerHTML = ''
        for (let i = 0; i < newNode.children.length; i++) {
          const item = newNode.children[i];
          let newVnodeElm = createElement(item)
          oldNode.elm.appendChild(newVnodeElm)
        }
      }
    }
  } else {
    console.log('不是同一个节点，暴力插入新的，删除旧的')
    let newVnodeElm = createElement(newNode)
    if (newVnodeElm && oldNode.elm) {
      oldNode.elm.parentNode.insertBefore(newVnodeElm, oldNode.elm)
    }
    oldNode.elm.parentNode.removeChild(oldNode.elm)
  }
}