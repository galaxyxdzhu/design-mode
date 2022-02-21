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

console.log(rect)


canvas.renderAll()


const newRect = new fabric.Rect(rect.toJSON())

canvas.add(newRect)
canvas.renderAll()
// console.log(rect.toJSON())



canvas.on('object:rotating', (e) => {
  console.log(e)
})

console.log(canvas)

function addRect(data: Object) {
  const defaultOptions = {
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red'
  }

  const options = data || defaultOptions;

  const rect = new fabric.Rect(options)

  canvas.add(rect)

  canvas.renderAll()

  return rect;
}


// https://gitchat.csdn.net/activity/61ed420a70105b0fe48ffb15?utm_medium=distribute.pc_aggpage_search_result.none-task-gitchat_activities-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-2-61ed420a70105b0fe48ffb15.pc_agg_new_rank&utm_term=fabricjs%E8%AE%BE%E5%AE%9A%E9%80%89%E4%B8%AD&spm=1000.2123.3001.4430#undefined
