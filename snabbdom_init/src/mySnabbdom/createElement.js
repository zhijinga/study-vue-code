export default function createElement(vnode) {
  const { sel, text, children } = vnode
  var dom = document.createElement(sel)
  console.log(children)
  if (!!text && (!children || children.length === 0)) {
    // 他是内部文字
    dom.innerText = text

  } else {
    for (let i = 0; i < children.length; i++) {
      // 得到当前这个children
      const ch = children[i];
      // 创建出它的dom 
      const chDOM = createElement(ch)
      dom.appendChild(chDOM)
    }
  }
  vnode.elm = dom
  return vnode.elm
}