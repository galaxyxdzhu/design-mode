/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-23 10:49:41
 * @Reference:
 */

import { fabric } from 'fabric'

import Drawer from '../drawer'

export const canvas = new fabric.Canvas('canvas', {
  centeredRotation: true
})

fabric.Object.prototype.transparentCorners = false

export const drawer = new Drawer(canvas)

function updateObjectValue(obj, targetObj) {
  const newObj = {}
  for (let key in obj) {
    newObj[key] = targetObj[key]
  }
  return newObj
}

export class Command {
  drawer = drawer
  ctx = canvas

  oldValue
  elementCache = {}
  constructor(commandName, params) {
    this.commandName = commandName
    console.log(this.ctx, 888)
    this.params = params
  }

  getExcutorName() {
    // 根据指令名称来判断具体命令的执行者, 包含Canvas为画布，不包含是Element
    const str = this.commandName.split('_').join('')
    // 转驼峰
    return str.substring(0, 1).toLocaleLowerCase() + str.substring(1)
  }

  async excute() {
    this.excutor = this.commandName.indexOf('_') !== -1 ? this.ctx : canvas.getActiveObject()
    if (this.excutor) {
      this.oldValue =
        typeof this.params === 'object' ? updateObjectValue(this.params, this.excutor) : this.excutor[this.params]
      return await this.do()
    }
  }

  do() {
    this.drawer[this.getExcutorName()](this.params, this.excutor)
  }

  undo() {
    this.drawer[this.getExcutorName()](this.oldValue, this.excutor)
  }
}

Command.elementId = 1

export default {
  drawer,
  Command,
  canvas
}
