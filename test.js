/*
 * @Description:
 * @Author: galaxyxd
 * @Date: 2022-02-24 18:32:39
 * @Reference:
 */

import { fabric } from 'fabric'
;(function () {
  var canvas = new fabric.Canvas('canvas', {
    centeredRotation: true
  })
  fabric.Object.prototype.transparentCorners = false

  var rect = new fabric.Rect({
    left: 100,
    top: 50,
    width: 100,
    height: 100,
    fill: 'green',
    padding: 10
  })
  var rect1 = new fabric.Rect({
    left: 100,
    top: 50,
    width: 100,
    height: 100,
    fill: 'red',
    padding: 10
  })
  canvas.add(rect1)
  canvas.add(rect)

  rect.rotate(30)

  // fabric.loadSVGFromURL('../assets/15.svg', function (objects, options) {
  //   var shape = fabric.util.groupSVGElements(objects, options)
  //   canvas.add(shape.scale(0.6))
  //   shape.set({ left: 200, top: 100 }).setCoords()
  //   canvas.renderAll()

  //   canvas.forEachObject(function (obj) {
  //     var setCoords = obj.setCoords.bind(obj)
  //     obj.on({
  //       moving: setCoords,
  //       scaling: setCoords,
  //       rotating: setCoords
  //     })
  //   })
  // })

  canvas.on('after:render', function () {
    canvas.contextContainer.strokeStyle = '#555'

    canvas.forEachObject(function (obj) {
      var bound = obj.getBoundingRect()

      canvas.contextContainer.strokeRect(bound.left + 0.5, bound.top + 0.5, bound.width, bound.height)
    })
  })
})()
