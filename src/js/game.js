/* global Phaser */
const {innerWidth, innerHeight} = window

const preload = () => {
  game.load.image('sky', 'assets/sky.png')
  game.load.image('ground', 'assets/platform.png')
  game.load.image('star', 'assets/star.png')
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48)
}

const create = () => {
  const star = game.add.sprite(game.world.centerX, game.world.centerY, 'star')
  star.anchor.setTo(0.5, 0.5)
}

const game = new Phaser.Game(innerWidth, innerHeight, Phaser.AUTO, '', {preload, create})
