// pong paddle

class Paddle {
  constructor (centerX, centerY, minY, maxY, auto) {
    this.initialX = centerX
    this.initialY = centerY
    this.automatic = auto,

    // common config
    this.dist_accel_factor = 0.25
    this.speed = 8
    this.width = 98
    this.thickness = 30

    // ai config: 0: nice, 1: mean
    this.ai_niceness = 0.5

    // field delimitation
    this.minY = minY
    this.maxY = maxY

    this.update = auto
      ? this.autoUpdate
      : this.manualUpate

    // initialize
    this.reset()
  }

  reset () {
    this.x = this.initialX
    this.y = this.initialY
  }

  manualUpate (upKeyPressed, downKeyPressed) {
    if (upKeyPressed && this.y > this.minY) {
      this.y -= this.speed
    }
    if (downKeyPressed && this.y < this.maxY) {
      this.y += this.speed
    }
  }

  autoUpdate () {
    const niceness = 0.2 + this.ai_niceness * 0.3
    const moveUp = ball.y < this.y - this.width * niceness
    const moveDown = ball.y > this.y + this.width * niceness
    const isBelowTop = this.y > this.minY
    const isAboveBottom = this.y < this.maxY

    if (moveUp && isBelowTop) {
      this.y -= this.speed
    }
    if (moveDown && isAboveBottom) {
      this.y += this.speed
    }
  }
}
