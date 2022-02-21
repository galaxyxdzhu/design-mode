/*
 * @Description: 观察者模式
 * @Author: galaxyxd
 * @Date: 2022-02-18 16:36:07
 * @Reference:
 */

// 建立一个Event事件中心，有Event来管理观察者和被观察者

interface Listener {
  [k: string]: Array<Function>
}

class Events {
  private _listener: Listener = {}

  public add(key: string, fn: Function) {
    if (!this._listener[key]) {
      this._listener[key] = [fn]
    } else {
      this._listener[key].push(fn)
    }
  }

  public remove(key: string, fn: Function) {
    const fns = this._listener[key]
    const fnIndex = fns.findIndex((item: Function) => {
      return item === fn
    })
    fns.splice(fnIndex, 1)
  }

  public notify(...args: any[]) {
    const key = args.shift()
    const fns = this._listener[key]
    if (fns && fns.length) {
      for (let i = 0; i < fns.length; i++) {
        const fn = fns[i]
        fn.apply(this, args)
      }
    }
  }
}

const event1 = new Events()

const sayHi = function (str: string) {
  console.log(str)
}

event1.add('hello', sayHi)

event1.notify('hello', 'galaxyxd')
