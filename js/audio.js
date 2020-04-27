// pong audio handling

const audio = {
  soundOn: true,

  init: () => {
    audio.sounds.background.loop = true
  },

  play: sound => {
    if (audio.soundOn) {
      audio.sounds[sound].play()
    }
  },

  pause: sound => {
    audio.sounds[sound].pause()
  },

  sounds: {
    start: document.querySelector('#start-audio'),
    end: document.querySelector('#end-audio'),
    leftPaddle: document.querySelector('#left-paddle-audio'),
    rightPaddle: document.querySelector('#right-paddle-audio'),
    ballLost: document.querySelector('#ball-lost-audio'),
    background: document.querySelector('#background-audio')
  }
}
