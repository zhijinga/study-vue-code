import observe from './observe'
const obj = {
  a: 1,
  b: {
    c: {
      d: {
        e: 1
      }
    }
  },
  m: {
    n: 2
  },
  arr: [11, 22]
}
observe(obj)
obj.b.c.d.e++
obj.arr.push(33)
console.log(obj.m.n)
console.log(obj.arr)