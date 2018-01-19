

const game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  game.load.image("original", "assets/original-style.png");
  game.load.spritesheet("person", "assets/person.png", 31, 32.5);
  game.load.spritesheet("brown", "assets/brownDogg.png", 47, 44.5);
  game.load.spritesheet("choco", "assets/chocoDogg.png", 47, 44.5);
  game.load.spritesheet("black", "assets/blackDogg.png", 47, 44.5);
  game.load.spritesheet("drkbrown", "assets/drkbrownDogg.png", 47, 44.5);
  game.load.spritesheet("grey", "assets/greyDogg.png", 47, 44.5);
  game.load.spritesheet("lt", "assets/ltgreyDogg.png", 47, 44.5);
  game.load.spritesheet("tan", "assets/tanDogg.png", 47, 44.5);
  game.load.spritesheet("white", "assets/whiteDogg.png", 47, 44.5);
}
let dogs, player, allDogs, cursors
function create() {
  //set game board
  game.add.sprite(0, 0, "original");

  //add dog groups
  dogs = game.add.group();
  //add player (but find a new one)
  player = game.add.sprite(32, game.world.height - 150, "person");
  //enable physics for player and dogs
  game.physics.enable(player);
  game.physics.enable(dogs);

  //random dog generator - generates all dogs on doggo spritesheet
  function randomDogGenerator(name) {
    let dog = dogs.game.add.sprite(game.world.randomX, game.world.randomY, name, 1);
    dog.animations.add("down", [0, 1, 2], 10, true);
    dog.animations.add("left", [3, 4, 5], 10, true);
    dog.animations.add("right", [6, 7, 8], 10, true);
    dog.animations.add("up", [9, 10, 11], 10, true);
    return dog;
  }
  let choco = randomDogGenerator("choco");
  let brown = randomDogGenerator("brown");
  let black = randomDogGenerator("black");
  let drkbrown = randomDogGenerator("drkbrown");
  let grey = randomDogGenerator("grey");
  let ltgrey = randomDogGenerator("lt");
  let tan = randomDogGenerator("tan");
  let white = randomDogGenerator("white");
  allDogs = [choco, brown, black, drkbrown, grey, ltgrey, tan, white];

  //add animations to random dog generations (but make them run on a loop?)
  player.body.collideWorldBounds = true;
  //console.log(choco);
  console.log("example?");
  //dogs.map(dog => dog.body.collideWorldBounds = true);
  //add animations for each dog
  player.animations.add("left", [5, 6, 7, 8, 9], 10, true);
  player.animations.add("up", [10, 11, 12, 13, 14], 10, true);
  player.animations.add("right", [15, 16, 17, 18, 19], 10, true);
  player.animations.add("down", [0, 1, 2, 3, 4], 10, true);
  //random dog animations
  allDogs.map(dog => dog.animations.play("left", 10, true));

  //the player can move
  cursors = game.input.keyboard.createCursorKeys();


}

function update() {
   //Reset the players velocity (movement)
  allDogs.map(dog => {
    dog.x -= 2;
    if (dog.x < dog.width) {
      dog.x = game.world.width;
    }
  });

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  if (cursors.left.isDown) {
    //  Move to the left
    player.body.velocity.x = -150;
    player.animations.play("left");
  } else if (cursors.right.isDown) {
    //  Move to the right
    player.body.velocity.x = 150;
    player.animations.play("right");
  } else if (cursors.up.isDown) {
    //move up
    player.body.velocity.y = -150;
    player.animations.play("up");
  } else if (cursors.down.isDown) {
    //move down
    player.body.velocity.y = 150;
    player.animations.play("down");
  } else {
    //  Stand still
    player.animations.stop();
    player.frame = 1;
  }
}