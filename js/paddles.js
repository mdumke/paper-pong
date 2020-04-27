// pong paddles

const paddles = {
  left: null,
  right: null,

  init: (leftAuto, rightAuto, game) => {
    paddles.left = new Paddle(
      193,
      game.canvas.height/2,
      game.geometry.borderTop,
      game.geometry.borderBottom,
      leftAuto
    )

    paddles.right = new Paddle(
      960,
      game.canvas.height/2,
      game.geometry.borderTop,
      game.geometry.borderBottom,
      rightAuto)
  },

  update: () => {
    paddles.left.update(game.upArrowPressed, game.downArrowPressed)
    paddles.right.update()
  },

  reset: () => {
    paddles.left.reset()
    paddles.right.reset()
  }
}
