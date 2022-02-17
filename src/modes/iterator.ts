/*
 * @Description: 迭代器模式 -- 提供一种方法顺序访问一个聚合对象中的各个元素
 * @Author: galaxyxd
 * @Date: 2022-02-17 17:45:19
 * @Reference:
 */

// 外部迭代器

interface IteratorObj {
  next: Function
  isDone: Function
  getCurrentItem: Function
  length: number
}

const iterator = function (obj: Array<number>): IteratorObj {
  let current = 0

  const next = () => {
    current += 1
  }

  const isDone = () => {
    return current >= obj.length
  }

  const getCurrentItem = () => {
    return obj[current]
  }
  return {
    next,
    isDone,
    getCurrentItem,
    length: obj.length
  }
}

const compare = function (iterator1: IteratorObj, iterator2: IteratorObj) {
  if (iterator1.length !== iterator2.length) {
    alert('111')
  }
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
      console.log('222')
      throw new Error('lll')
    }
    iterator1.next()
    iterator2.next()
  }
  return true
}

var a = iterator([1, 2, 3])
var b = iterator([1, 2, 3])

// console.log(a.getCurrentItem(a.next()))

console.log(compare(a, b))
