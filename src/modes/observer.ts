/*
 * @Description: 观察者模式
 * @Author: galaxyxd
 * @Date: 2022-02-18 16:16:27
 * @Reference:
 */

// java - 观察者 和 被观察者

// 观察者
class Observer {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  // 当被观察者发生动作时，更新自己要做的事
  update() {
    console.log(`${this.name} need to do something`)
  }
}

// 被观察者
class Subject {
  private observerLists: Array<Observer> = []
  constructor() {}

  // 维护一个observer数组
  add(observer: Observer) {
    this.observerLists.push(observer)
  }

  // 删除指定的observer
  remove(observer: Observer) {
    const index = this.observerLists.findIndex((item: Observer) => {
      return item === observer
    })
    this.observerLists.splice(index, 1)
  }

  // 通知
  notify() {
    this.observerLists.map((observer: Observer) => {
      observer.update()
    })
  }
}

const o1 = new Observer('galaxyxd')
const o2 = new Observer('tom')

const s1 = new Subject()
s1.add(o1)
s1.add(o2)

s1.notify()

s1.remove(o1)
s1.notify()
