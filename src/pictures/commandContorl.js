/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-22 14:53:39
 * @Reference:
 */

import commands from './commands/index'

class CammandControl {
  excuteStacks = [] // 执行队列 - 用来记录执行流程
  stateStacks = [] // 状态队列 - 用来存储当前步骤下的画布数据

  undoStacks = [] // 撤销队列
  redoStacks = [] // 恢复队列

  constructor(canvas) {
    this.ctx = canvas
  }

  async excute(commandName, params) {
    const command = new commands[commandName](commandName, params)
    let ret
    if (command) {
      ret = await command.excute()
      this.undoStacks.push(command)
      return ret
    }
  }

  undo() {
    if (this.undoStacks.length) {
      const command = this.undoStacks.pop()
      command.undo()
      this.redoStacks.push(command)
    }
  }

  redo() {
    if (this.redoStacks.length) {
      const command = this.redoStacks.pop()
      command.excute()

      this.undoStacks.push(command)
    }
  }

  addUndo(command) {
    this.undoStacks.push(command)
  }
}

// 获取单例
CammandControl.getInstance = (ctx) => {
  if (!CammandControl.instance) {
    CammandControl.instance = new CammandControl(ctx)
  }
  return CammandControl.instance
}

export default CammandControl
