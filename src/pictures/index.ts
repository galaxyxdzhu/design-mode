/*
 * @Description: fabric
 * @Author: galaxyxd
 * @Date: 2022-02-21 18:22:38
 * @Reference:
 */
import { fabric } from 'fabric'

import img from '../assets/img/grow.png'

const imageItem = new Image()
imageItem.src = img
imageItem.onload = function () {
  const image = new fabric.Image(imageItem, {
    left: 100, // 图片相对画布的左侧距离
    top: 100, // 图片相对画布的顶部距离
    angle: 30, // 图片旋转角度
    opacity: 0.85, // 图片透明度
    // 这里可以通过scaleX和scaleY来设置图片绘制后的大小，这里为原来大小的一半
    scaleX: 0.5,
    scaleY: 0.5
  })
  canvas.add(image)
}

const canvas = new fabric.Canvas('canvas')

const rect = new fabric.Rect({
  top: 100,
  left: 100,
  width: 60,
  height: 70,
  fill: 'red'
})

canvas.add(rect)

canvas.renderAll()

canvas.on('object:rotating', (e) => {
  console.log(e)
})

console.log(canvas)
