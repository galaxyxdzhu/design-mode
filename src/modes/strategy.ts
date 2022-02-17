/*
 * @Description: 策略模式
 * @Author: galaxyxd
 * @Date: 2022-02-17 15:36:58
 * @Reference:
 */

// 奖金计算
// var calculateBonus = (level: string, salary: number): number => {
//   if (level === 'S') {
//     return salary * 4
//   }

//   if (level === 'A') {
//     return salary * 3
//   }

//   if (level === 'B') {
//     return salary * 2
//   }
// }

// const bonus = calculateBonus('S', 2000)
// console.log(bonus)

//

enum level {
  S = 5,
  A = 4,
  B = 3
}

class StuffPerformance {
  public performanceLevel: level
  constructor(level: level) {
    this.performanceLevel = level
  }
  public calculate(salary: number): number {
    return this.performanceLevel * salary
  }
}

class VipStuffPerformance extends StuffPerformance {
  constructor(level: level) {
    super(level)
  }
  public calculate(salary: number): number {
    return salary * this.performanceLevel + 10000
  }
}

const calculateBonus = (performance: StuffPerformance, salary: number): number => {
  return performance.calculate(salary)
}

// const bonus = calculateBonus(new StuffPerformance(level.S), 2000)

// console.log(bonus)

// const vipBonus = calculateBonus(new VipStuffPerformance(level.S), 3000)

// console.log(vipBonus)

class Bouns {
  public performance: StuffPerformance
  public salary: number
  constructor() {}

  public setSalary(salary: number) {
    this.salary = salary
  }

  public setPerformance(performance: StuffPerformance) {
    this.performance = performance
  }

  public calculateBonus(): number {
    return this.performance.calculate(this.salary)
  }
}

// const bounsA = new Bouns()
// bounsA.setPerformance(new StuffPerformance(level.B))
// bounsA.setSalary(3000)
// console.log(bounsA.calculateBonus())

// 策略模式校验表单

interface Strategies {
  [k: string]: Function
}

const strategies: Strategies = {
  isNoEmpty: (value: string, errorMsg: string): string | null => {
    if (value) {
      return errorMsg
    }
  },
  minLength: (value: string, length: number, errorMsg: string): string | null => {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile: (value: string, errorMsg: string): string | null => {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errorMsg
    }
  }
}

class Validator {
  private cache: Function[] = []
  constructor() {}
  add(dom: string, rule: string, errorMsg: string): void {
    const ary = rule.split(':')
    const name = ary.shift()
    const fn = () => {
      return strategies[name].apply(null, [dom, errorMsg])
    }
    this.cache.push(fn)
  }
  start(): string | null {
    for (let i = 0; i < this.cache.length; i++) {
      const msg = this.cache[i]()
      if (msg) {
        return msg
      }
    }
  }
}

// const validatorA = new Validator()

// validatorA.add('hhahah', 'isNoEmpty', 'buzhidao')

// console.log(validatorA.start())
