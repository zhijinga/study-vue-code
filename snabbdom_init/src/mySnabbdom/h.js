import vNode from './vNode'

export default function (sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error('对不起，h函数必须是3个参数')
  }

  // 检查参数C的类型
  if (typeof c === 'string' || typeof c === 'number') {
    return vNode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    let children = []
    for (let i = 0; i < c.length; i++) {
      const item = c[i];
      if (!(typeof item === 'object' && item.hasOwnProperty('sel'))) {
        throw new Error('传入的数组中有一项不是vNode')
      }
      //这里不用执行C[i]  因为测试语句已经开始执行
      // 此时只需要收集
      children.push(item)
    }
    // 循环表示children循环完了
    return vNode(sel, data, children, undefined, undefined)
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    let children = [c]
    return vNode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('传入的第三个参数类型不对')
  }
}