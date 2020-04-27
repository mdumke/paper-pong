// shared graphics functionality

const clearCanvas = () => {
  game.canvasCtx.clearRect(0, 0, game.canvas.width, game.canvas.height)
}

const drawText = (text, x, y, color, size, fontFamily) => {
  game.canvasCtx.fillStyle = color
  game.canvasCtx.font = `${size}px ${fontFamily}`
  game.canvasCtx.fillText(text, x, y)
}

const drawRect = (x, y, w, h, color) => {
  game.canvasCtx.globalAlpha = 0.2
  game.canvasCtx.fillStyle = color
  game.canvasCtx.fillRect(x, y, w, h)
  game.canvasCtx.globalAlpha = 1
}

const drawImage = (img, x, y, angle) => {
  game.canvasCtx.save()
  game.canvasCtx.translate(x, y)
  game.canvasCtx.rotate(angle)
  game.canvasCtx.drawImage(img, -img.width/2, -img.height/2)
  game.canvasCtx.restore()
}
