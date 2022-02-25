/*
 * @Description: fabric
 * @Author: galaxyxd
 * @Date: 2022-02-21 18:22:38
 * @Reference:
 */
// import { fabric } from 'fabric'

// import * as c from './drawerCommands'
// console.log(c)

// import img from '../assets/img/grow.png'

import { canvas } from './commands/base'

// const canvas = new fabric.canvas('canvas', {
//   centeredRotation: true
// })

// const react = new React({
//   width: 100,
//   innerHeight
// })

const imgSrc =
  'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp'

import CommandContorl from './commandContorl'

const commandContorl = CommandContorl.getInstance(canvas)

window.commandContorl = commandContorl

commandContorl.excute('Canvas_SetBackgroundColor', 'red')

commandContorl.excute('Canvas_SetWidth', 800)

commandContorl.excute('Canvas_SetSize', { width: 600 })

let a

commandContorl.excute('Canvas_AddImage', imgSrc).then((res) => {
  a = res
})

setTimeout(() => {
  commandContorl.excute('Move', { left: 200, top: 200 })
  setTimeout(() => {
    commandContorl.excute('Canvas_AddImage', imgSrc)
    setTimeout(() => {
      commandContorl.excute('SetSize', { width: 100, height: 100 })
      commandContorl.excute('SetActive', a)
      setTimeout(() => {
        commandContorl.excute('SetAngle', 90)
      }, 1000)
    }, 1000)
  }, 1000)
}, 3000)

// document.addEventListener('click', () => {
//   commandContorl.undo()
// })

document.querySelector('#undo').addEventListener('click', () => {
  commandContorl.undo()
})
document.querySelector('#redo').addEventListener('click', () => {
  commandContorl.redo()
})
