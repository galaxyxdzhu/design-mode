/*
 * @Description: 设置canvas的尺寸
 * @Author: galaxyxd
 * @Date: 2022-02-23 11:06:25
 * @Reference:
 */

import { Command } from './base'

export default class SetSize extends Command {
  oldSize = {
    width: 0,
    height: 0
  }
  constructor(commandName, params) {
    super(commandName, params)
  }
}
