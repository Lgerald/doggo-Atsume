const game = new Phaser.Game(470, 470, Phaser.AUTO, "game");
let dogs,
  player,
  player2,
  allDogs,
  cursors2,
  cursors,
  scoreText,
  scoreText2,
  doghorde,
  welcome,
  wordColor,
  playButton,
  wasd;
let score = 0;
let score2 = 0;

game.state.add("Game", Game);
game.state.add("menu", menu)
game.state.start("menu");