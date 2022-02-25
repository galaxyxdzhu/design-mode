/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-24 10:47:03
 * @Reference:
 */
import { Command } from './base'

export default class Clip extends Command {
  clipPath = {
    type: 'Rect',
    width: 100,
    height: 100
  }
  constructor(excutor, commandName, params) {
    super(excutor, commandName, params)
  }

  async excute() {
    if (!this.excutor) return
    clipSize = this.drawer.clip(this.excutor, Object.assign(this.clipPath, this.params))
  }

  undo() {
    if (this.excutor) {
      // this.drawer.move(this.excutor, this.oldPos)
    }
  }
}
