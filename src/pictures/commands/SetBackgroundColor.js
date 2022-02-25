/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-23 10:48:18
 * @Reference:
 */

import { Command } from './base'

export default class SetBackgroundColor extends Command {
  oldColor
  constructor(excutor, commandName, params) {
    super(excutor, commandName, params)
  }

  // excute() {
  //   this.oldColor = this.excutor.backgroundColor
  //   this.drawer[this.getExcutorName()](this.params)
  // }

  // undo() {
  //   this.drawer[this.getExcutorName()](this.oldColor)
  // }
}
