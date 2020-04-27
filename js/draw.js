// managing pong graphics

const draw = {
  loadingMessage: () => {
    drawText('Loading...', 300, 300, '#444', 20, 'monospace')
  },

  ball: () => {
    drawImage(images.ball, ball.x, ball.y, ball.angle)
  },

  leftPaddle: () => {
    drawImage(images.paddle, paddles.left.x, paddles.left.y, 0)
  },

  rightPaddle: () => {
    drawImage(images.paddle, paddles.right.x, paddles.right.y, 0)
  },

  score: (score, x, y) => {
    if (score === 0) drawImage(images.zero, x, y, 0)
    if (score === 1) drawImage(images.one, x, y, 0)
    if (score === 2) drawImage(images.two, x, y, 0)
  },

  scores: () => {
    draw.score(game.player1Score, 480, 100)
    draw.score(game.player2Score, 700, 100)
  },

  titlePage: () => {
    clearCanvas()
    drawImage(images.title, 600, 200, 0)
    drawImage(images.controls, 600, 450, 0)
    drawImage(images.spacebar, 600, 720, 0)
  },

  gameOverPage: () => {
    clearCanvas()

    if (game.player1Score === game.winningScore) {
      drawImage(images.player1wins, 400, 400, 0)
      drawImage(images.trophy, 800, 400, 0)
    } else {
      drawImage(images.player2wins, 800, 400, 0)
      drawImage(images.trophy, 400, 400, 0)
    }

    drawImage(images.spacebar, 600, 720, 0)
  },

  game: () => {
    clearCanvas()
    draw.leftPaddle()
    draw.rightPaddle()
    draw.ball()
    draw.scores()
  }
}

