// pong image loading and maintenance

const images = {
  basePath: 'assets/images',

  list: [
    { name: 'ball', fileName: 'ball.png' },
    { name: 'paddle', fileName: 'paddle.png' },
    { name: 'title', fileName: 'title.png' },
    { name: 'controls', fileName: 'controls.png' },
    { name: 'spacebar', fileName: 'spacebar.png' },
    { name: 'zero', fileName: 'zero.png' },
    { name: 'one', fileName: 'one.png' },
    { name: 'two', fileName: 'two.png' },
    { name: 'player1wins', fileName: 'player1wins.png' },
    { name: 'player2wins', fileName: 'player2wins.png' },
    { name: 'trophy', fileName: 'trophy.png' }
  ],

  load: () => {
    return Promise.all(images.list.map(img =>
      new Promise(resolve => {
        images[img.name] = document.createElement('img')
        images[img.name].onload = resolve
        images[img.name].src = `${images.basePath}/${img.fileName}`
      })
    ))
  }
}
