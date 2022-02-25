/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-23 11:46:47
 * @Reference:
 */

import { Command } from './base'

export default class RemoveElement extends Command {
  element
  constructor(commandName, params) {
    super(commandName, params)
  }

  do() {
    if (this.excutor) {
      this.elementId = this.excutor.elementId
      this.elementCache[this.elementId] = this.excutor
      this.drawer.removeElement(this.excutor)
    }
    return this.excutor
  }

  undo() {
    const element = this.elementCache[this.elementId]
    if (element) {
      this.drawer.addElement(element)
    }
  }
}
