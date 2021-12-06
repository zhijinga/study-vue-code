import { def } from './util'
const arrayPrototype = Array.prototype

export const arrayMethods = Object.create(arrayPrototype)

const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsNeedChange.forEach(methodName => {
  const original = arrayPrototype[methodName]
  def(arrayMethods, methodName, function () {
    console.log('拦截了数组的一些原生方法')
    original.apply(this, arguments)
  }, false)
})