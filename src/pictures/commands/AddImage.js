/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-23 11:23:21
 * @Reference:
 */

import { Command } from './base'

export default class AddImage extends Command {
  element
  constructor(excutor, commandName, params) {
    super(excutor, commandName, params)
  }

  async do() {
    if (this.elementId) {
      this.element = this.elementCache[this.elementId]
      await this.drawer.addElement(this.element)
      return this.element
    } else {
      this.elementId = Command.elementId++
      this.element = await this.drawer[this.getExcutorName()](this.elementId, this.params)
      this.elementCache[this.elementId] = this.element
      return this.element
    }
  }

  undo() {
    this.drawer.removeElement(this.element)
  }
}
