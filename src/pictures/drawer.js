/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-22 10:03:45
 * @Reference:
 */

// const commands = {
//   // 画布
//   canvas: ['add', 'remove', 'setBackground', 'setSize', 'setOrigin'],
//   element: ['move', 'changeColor', 'scale', 'rotate', 'changeSize']
// }

class Drawer {
  constructor(context) {
    this.ctx = context
  }

  /**
   * 添加图片
   * 主体为画布
   * @param {string} src
   */
  canvasAddImage(id, src) {
    const _this = this
    return new Promise((resolve) => {
      fabric.Image.fromURL(src, (oImg) => {
        _this.ctx.add(oImg)
        oImg.elementId = id
        _this.ctx.setActiveObject(oImg)
        _this.ctx.renderAll()
        resolve(oImg)
      })
    })
  }

  addElement(element) {
    this.ctx.add(element)

    this.ctx.setActiveObject(element)
    this.ctx.renderAll()
  }

  removeElement(element) {
    this.ctx.remove(element)
    this.ctx.renderAll()
  }

  hideElement(element) {
    element.visible = false
    this.ctx.discardActiveObject()
    this.ctx.renderAll()
  }

  showElement(element) {
    element.visible = true
    this.ctx.setActiveObject(element)
    this.ctx.renderAll()
  }

  move(pos, element) {
    const { left, top } = pos
    element.left = left
    element.top = top
    this.ctx.renderAll()
  }

  setSize(size, element) {
    const { width, height } = size
    if (element) {
      element.scaleToWidth(width)
      element.scaleToHeight(height)
      this.ctx.setActiveObject(element)
      this.ctx.renderAll()
    }
  }

  setActive(element) {
    this.ctx.setActiveObject(element)
    this.ctx.renderAll()
  }

  setAngle(edge, element) {
    element.rotate(edge)
    this.ctx.renderAll()
  }
  /**
   * 删除元素
   * @param {*} subject
   */
  remove(subject) {
    this.ctx.remove(subject)
  }

  /**
   * 设置背景颜色
   * @param {*} color
   */
  canvasSetBackgroundColor(color) {
    console.log(this.ctx)
    this.ctx.setBackgroundColor(color)
    this.ctx.renderAll()
  }

  canvasSetWidth(width) {
    this.ctx.setWidth(width)
    this.ctx.renderAll()
  }

  canvasSetSize(size) {
    size.width && this.ctx.setWidth(size.width)
    size.height && this.ctx.setHeight(size.height)
    this.ctx.renderAll()
  }

  /**
   * 设置背景图片
   * @param {*} src
   */
  setBackgroundImage(src) {
    return this.ctx.setBackgroundImage(src, this.ctx.renderAll.bind(this.ctx))
  }

  moveTo(subject, pos) {
    if (subject) {
      const subjectItem = new Subject(subject)
      subjectItem.moveTo(pos)
      this.ctx.renderAll()
    }
  }
}

export default Drawer
