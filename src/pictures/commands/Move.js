/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-23 14:28:08
 * @Reference:
 */

import { Command } from './base'

export default class Move extends Command {
  oldPos = {}
  constructor(commandName, params) {
    super(commandName, params)
  }

  // async excute() {
  //   if (!this.excutor) return
  //   this.oldPos.left = this.excutor.left
  //   this.oldPos.top = this.excutor.top
  //   this.drawer.move(this.excutor, this.params)
  // }

  // undo() {
  //   if (this.excutor) {
  //     this.drawer.move(this.excutor, this.oldPos)
  //   }
  // }
}
