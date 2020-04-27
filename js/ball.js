// pong ball

const ball = {
  x: null,
  y: null,
  speedX: null,
  speedY: null,
  angle: null,

  config: {
    rotationSpeed: 0.01,
    acceleration: 1.0005,
    speedX: 7,
    initialSpeedY: 1
  },

  reset: () => {
    ball.x = game.canvas.width/2
    ball.y = game.canvas.height/2
    ball.speedX = ball.config.speedX * (Math.random() < 0.5 ? -1 : 1)
    ball.speedY = ball.config.initialSpeedY
    ball.angle = 0
  },

  update: () => {
    if (ball.touches(paddles.left)) {
      ball.bounceOffLeftPaddle()
    } else if (ball.touches(paddles.right)) {
      ball.bounceOffRightPaddle()
    } else if (ball.touchesCeiling()) {
      ball.bounceOffCeiling()
    } else if (ball.touchesBottom()) {
      ball.bounceOffBottom()
    } else if (ball.x < 0) {
      game.player2Scores()
    } else if (ball.x > game.canvas.width) {
      game.player1Scores()
    } else {
      ball.advance()
    }
  },

  touchesBottom: () => {
    return ball.y > game.geometry.borderBottom
  },

  touchesCeiling: () => {
    return ball.y < game.geometry.borderTop
  },

  touches: paddle => (
    ball.x > paddle.x - paddle.thickness / 2 &&
    ball.x < paddle.x + paddle.thickness / 2 &&
    ball.y > paddle.y - paddle.width / 2 &&
    ball.y < paddle.y + paddle.width / 2
  ),

  bounceOffBottom: () => {
    ball.speedY = -Math.abs(ball.speedY)
    ball.advance()
  },

  bounceOffCeiling: () => {
    ball.speedY = Math.abs(ball.speedY)
    ball.advance()
  },

  bounceOffLeftPaddle: () => {
    ball.speedX = Math.abs(ball.speedX)
    ball.speedY = (ball.y - paddles.left.y) * paddles.left.dist_accel_factor
    ball.advance()
    audio.play('leftPaddle')
  },

  bounceOffRightPaddle: () => {
    ball.speedX = -Math.abs(ball.speedX)
    ball.speedY = (ball.y - paddles.right.y) * paddles.right.dist_accel_factor
    ball.advance()
    audio.play('rightPaddle')
  },

  advance: () => {
    ball.angle += ball.config.rotationSpeed
    ball.speedX *= ball.config.acceleration
    ball.x += ball.speedX
    ball.y += ball.speedY
  }
}
