// paper pong

const game = {
  canvas: null,
  canvasCtx: null,
  winningScore: 3,
  player1Score: null,
  player2Score: null,
  upArrowPressed: false,
  downArrowPressed: false,

  // 0: start, 1: play, 2: game over
  screen: null,

  geometry: {
    borderTop: 180,
    borderBottom: 752
  },

  player1Scores: () => {
    game.player1Score += 1

    if (game.player1Score == game.winningScore) {
      game.over()
    } else {
      audio.play('ballLost')
      ball.reset()
    }
  },

  player2Scores: () => {
    game.player2Score += 1

    if (game.player2Score == game.winningScore) {
      game.over()
    } else {
      audio.play('ballLost')
      ball.reset()
    }
  },

  switchScreen: () => {
    if (game.screen === 0) {
      game.screen = 1
      audio.play('background')
    } else if (game.screen === 1) {
      game.screen = 2
    } else if (game.screen === 2) {
      game.screen = 0
      game.reset()
    }
  },

  handleKeyUp: e => {
    if (e.code === 'ArrowUp') {
      e.preventDefault()
      game.upArrowPressed = false
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault()
      game.downArrowPressed = false
    }
  },

  handleKeyDown: e => {
    if (e.code === 'ArrowUp') {
      e.preventDefault()
      game.upArrowPressed = true
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault()
      game.downArrowPressed = true
    }
    if (e.code === 'Space') {
      e.preventDefault()

      if (game.screen !== 1) {
        game.switchScreen()
      }
    }
  },

  over: () => {
    audio.play('end')
    audio.pause('background')
    game.switchScreen()
  },

  animate: () => {
    requestAnimationFrame(game.animate)

    if (game.screen === 0) {
      draw.titlePage()
    }

    if (game.screen === 1) {
      game.update()
      draw.game()
    }

    if (game.screen === 2) {
      draw.gameOverPage()
    }
  },

  registerListeners: () => {
    document.addEventListener('keydown', game.handleKeyDown)
    document.addEventListener('keyup', game.handleKeyUp)
  },

  update: () => {
    ball.update()
    paddles.update()
  },

  reset: () => {
    audio.play('start')
    ball.reset()
    paddles.reset()
    game.player1Score = 0
    game.player2Score = 0
    game.screen = 0
  },

  init: async () => {
    game.canvas = document.querySelector('#canvas')
    game.canvasCtx = game.canvas.getContext('2d')
    game.registerListeners()
    audio.init()
    paddles.init(false, true, game)
    draw.loadingMessage()
    await images.load()
  },

  main: async () => {
    await game.init()
    game.reset()
    game.animate()
  }
}
