import { def } from './util'
import { arrayMethods } from './array'
import defineReactive from './defineReactive'
export default class Observer {
  constructor(value) {
    // 给实例(this,一定要注意，构造器中的this不是表示类本身，而是表示实例)添加了__ob__属性，值是这次new的实例
    def(value, '__ob__', this, false)
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods)
    } else {
      this.walk(value)
    }
  }
  walk(value) {
    for (const key in value) {
      defineReactive(value, key)
    }
  }
}