//函数的功能特别简单，就是把传入的对象返回
// elm 上树的节点
export default function (sel, data, children, text, elm) {
  return {
    sel, data, children, text, elm
  }
}