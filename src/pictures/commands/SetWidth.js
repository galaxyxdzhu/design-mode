/*
 * @Description: 设置canvas的宽度
 * @Author: galaxyxd
 * @Date: 2022-02-23 10:54:01
 * @Reference:
 */

import { Command } from './base'

export default class SetWidth extends Command {
  oldWidth = 0
  constructor(commandName, params) {
    super(commandName, params)
  }

  // excute() {
  //   if (!this.excutor) return
  //   this.oldWidth = this.excutor.width
  //   this.drawer.setWidth(this.params)
  // }

  // undo() {
  //   this.drawer.setWidth(this.oldWidth)
  // }
}
