/*
 * @Description: 单例模式
 * @Author: galaxyxd
 * @Date: 2022-02-17 11:18:37
 * @Reference:
 */

// 惰性单例 -- 在需要的时候才会创建实例

// var createDiv = (() => {
//   var iDiv: Element
//   return function () {
//     if (!iDiv) {
//       // 对象实现
//       iDiv = document.createElement('div')
//       iDiv.innerHTML = 'hhhh'
//       document.body.appendChild(iDiv)
//     }
//     return iDiv
//   }
// })()

// createDiv()

var createDiv = () => {
  var iDiv = document.createElement('div')
  iDiv.innerHTML = 'mmm'
  document.body.appendChild(iDiv)
}

// 创建单例
var getSingle = (fn: Function): Function => {
  var result: Function
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

// const singleCreateDiv = getSingle(createDiv)

// singleCreateDiv()

// 类

class Singleton {
  private static instance: Singleton = null

  public count: number = 0

  constructor() {}

  public greeting() {
    this.count++
    console.log(this.count)
  }

  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance
  }
}
