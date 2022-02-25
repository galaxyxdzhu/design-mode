/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-22 11:36:46
 * @Reference: 输出执行命令
 */

import { fabric } from 'fabric'

import Drawer from './drawer'

const canvas = new fabric.Canvas('canvas')

const drawer = new Drawer(canvas)

class Command {
  drawer = drawer
  constructor(excutor, commandName, params) {
    this.excutor = excutor
    this.commandName = commandName
    this.params = params
  }

  excute() {}
}

class SetBackgroundColor extends Command {
  oldColor
  constructor(excutor, commandName, params) {
    super(excutor, commandName, params)
  }

  excute() {
    if (!this.excutor) return
    this.oldColor = this.excutor.backgroundColor
    this.drawer.setBackgroundColor(this.params)
  }

  undo() {
    this.drawer.setBackgroundColor(this.oldColor)
  }
}

class SetWidth extends Command {
  oldWidth = 0
  constructor(excutor, commandName, params) {
    super(excutor, commandName, params)
  }

  excute() {
    if (!this.excutor) return
    this.oldWidth = this.excutor.width
    this.drawer.setWidth(this.params)
  }

  undo() {
    this.drawer.setWidth(this.oldWidth)
  }
}

export default {
  SetBackgroundColor,
  SetWidth
}
