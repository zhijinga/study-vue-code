import observe from './observe'
export default function (obj, key, val) {
  if (arguments.length === 2) {
    val = obj[key]
  }
  // 子元素要进行ovserve，至此形成了递归
  let childOb = observe(val)
  console.log('defineProperty', childOb)
  Object.defineProperty(obj, key, {
    enumerable: true, //可枚举的
    configurable: true, //是否可配置
    get() {
      console.log(`你试图访问${key}属性`)
      return val
    },
    set(newVal) {
      console.log(`你试图修改${key}属性的值为${newVal}`)
      if (val === newVal) return
      val = newVal
      childOb = observe(newVal)
    }
  })
}