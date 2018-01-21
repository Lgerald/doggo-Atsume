const game = new Phaser.Game(470, 470, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  //background
  let which = Math.ceil(Math.random()*12)
  switch (which) {
    case 1:
      game.load.image("original", "assets/background/bassethound.png")
      wordColor = "#000"
      break
    case 2:
      game.load.image("original", "assets/background/bulldog.png");
      wordColor = "#FFF"
      break
    case 3:
      game.load.image("original", "assets/background/chihaha.png");
      wordColor = "#000"
      break
    case 4:
      game.load.image("original", "assets/background/corgikayak.png");
      wordColor = "#000"
      break
    case 5:
      game.load.image("original", "assets/background/hotdog.png");
      wordColor = "#FFF"
      break
    case 6:
      game.load.image("original", "assets/background/scottiPJ.png");
      wordColor = "#000"
      break
    case 7:
      game.load.image("original", "assets/background/sheltie.png");
      wordColor = "#000"
      break
    case 8:
      game.load.image("original", "assets/background/shitzu.png");
      wordColor = "#000"
      break
    case 9:
      game.load.image("original", "assets/background/stbernard.png");
      wordColor = "#FFF"
      break
    case 10:
      game.load.image("original", "assets/background/valentine.png");
      wordColor = "#FFF"
      break
    case 11:
      game.load.image("original", "assets/background/wirecoffee.png");
      wordColor = "#000"
      break
    default:
      game.load.image("original", "assets/background/pugdonut.png");
      wordColor = "#000"
      break
  }
  //player
  game.load.spritesheet("person", "assets/person.png", 31, 32.5);
  //the horde
  game.load.spritesheet("dogHorde", 'assets/misc/doghorde.png', 362, 74)
  //bandana
  for (let i = 1; i <= 8; i++) {
    game.load.spritesheet(`bandana${i}`, `assets/bandana/bandana${i}.png`, 48.3, 45.75);
  }
  //corgi
  for (let i = 1; i <= 8; i++) {
    game.load.spritesheet(`corgi${i}`, `assets/corgi/corgi${i}.png`, 48, 45);
  }
  //pomeranians
  for (let i = 1; i <= 8; i++) {
    game.load.spritesheet(`pom${i}`, `assets/pomeranian/pom${i}.png`, 43.3, 45);
  }
  //retreivers
  for (let i = 1; i <= 8; i++) {
    game.load.spritesheet(`retreiver${i}`, `assets/retriever/retriever${i}.png`, 46, 48.67);
  }
  //schnauzers
  for (let i = 1; i <= 8; i++) {
    game.load.spritesheet(`schauz${i}`, `assets/schnauzer/schauz${i}.png`, 47, 44.5);
  }
  //stBernard
  for (let i = 1; i <= 8; i++) {
    game.load.spritesheet(`stbernard${i}`, `assets/stBernard/stbernard${i}.png`, 48, 48);
  }
}
let dogs, player, allDogs, cursors, scoreText, inputName, dogNameList, doghorde, welcome, wordColor
let score = 0
function create() {
  
  game.physics.startSystem(Phaser.Physics.ARCADE);
  //set game board
  game.add.sprite(0, 0, "original");
  doghorde = game.add.sprite(-500, game.world.randomY, 'dogHorde')
  doghorde.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47], 10, true)
  //add dog groups
  dogs = game.add.group();
  dogs.enableBody = true
  //add player (but find a new one)
  player = game.add.sprite(32, game.world.height - 150, "person");
  //enable physics for player and dogs
  game.physics.enable(doghorde)
  game.physics.arcade.enable(player);
  game.physics.arcade.enable(dogs);
  player.body.collideWorldBounds = true;


  //dogs.map(dog => dog.body.collideWorldBounds = true);
  //add animations for each dog
  player.animations.add("left", [5, 6, 7, 8, 9], 10, true);
  player.animations.add("up", [10, 11, 12, 13, 14], 10, true);
  player.animations.add("right", [15, 16, 17, 18, 19], 10, true);
  player.animations.add("down", [0, 1, 2, 3, 4], 10, true);

  //random dog generator - generates all dogs on doggo spritesheet
  function randomDogGenerator(name) {
   let dog = dogs.create(game.world.randomX, game.world.randomY, name, 1);
    //dog.animations.add("down", [0, 1, 2], 10, true);
    dog.animations.add("left", [3, 4, 5], 10, true);
    dog.animations.add("right", [6, 7, 8], 10, true);
    //dog.animations.add("up", [9, 10, 11], 10, true);
    return dog
  }
  //generate all the dogs (please say this is possible)
  //dogNameList = ["",'bandana', 'corgi', 'pom', 'retreiver', 'schnauz', 'stbernard']
  let bandana1 = randomDogGenerator("bandana1")
  let bandana2 = randomDogGenerator("bandana2");
  let bandana3 = randomDogGenerator("bandana3");
  let bandana4 = randomDogGenerator("bandana4");
  let bandana5 = randomDogGenerator("bandana5");
  let bandana6 = randomDogGenerator("bandana6");
  let bandana7 = randomDogGenerator("bandana7");
  let bandana8 = randomDogGenerator("bandana8");

  let corgi1 = randomDogGenerator("corgi1");
  let corgi2 = randomDogGenerator("corgi2");
  let corgi3 = randomDogGenerator("corgi3");
  let corgi4 = randomDogGenerator("corgi4");
  let corgi5 = randomDogGenerator("corgi5");
  let corgi6 = randomDogGenerator("corgi6");
  let corgi7 = randomDogGenerator("corgi7");
  let corgi8 = randomDogGenerator("corgi8");

  let pom1 = randomDogGenerator("pom1");
  let pom2 = randomDogGenerator("pom2");
  let pom3 = randomDogGenerator("pom3");
  let pom4 = randomDogGenerator("pom4");
  let pom5 = randomDogGenerator("pom5");
  let pom6 = randomDogGenerator("pom6");
  let pom7 = randomDogGenerator("pom7");
  let pom8 = randomDogGenerator("pom8");

  let retreiver1 = randomDogGenerator("retreiver1");
  let retreiver2 = randomDogGenerator("retreiver2");
  let retreiver3 = randomDogGenerator("retreiver3");
  let retreiver4 = randomDogGenerator("retreiver4");
  let retreiver5 = randomDogGenerator("retreiver5");
  let retreiver6 = randomDogGenerator("retreiver6");
  let retreiver7 = randomDogGenerator("retreiver7");
  let retreiver8 = randomDogGenerator("retreiver8");

  let schauz1 = randomDogGenerator("schauz1");
  let schauz2 = randomDogGenerator("schauz2");
  let schauz3 = randomDogGenerator("schauz3");
  let schauz4 = randomDogGenerator("schauz4");
  let schauz5 = randomDogGenerator("schauz5");
  let schauz6 = randomDogGenerator("schauz6");
  let schauz7 = randomDogGenerator("schauz7");
  let schauz8 = randomDogGenerator("schauz8");
  
  let stbernard1 = randomDogGenerator("stbernard1");
  let stbernard2 = randomDogGenerator("stbernard2");
  let stbernard3 = randomDogGenerator("stbernard3");
  let stbernard4 = randomDogGenerator("stbernard4");
  let stbernard5 = randomDogGenerator("stbernard5");
  let stbernard6 = randomDogGenerator("stbernard6");
  let stbernard7 = randomDogGenerator("stbernard7");
  let stbernard8 = randomDogGenerator("stbernard8");

  allDogs = [stbernard1, stbernard2, stbernard3, stbernard4, stbernard5, stbernard6, stbernard7, stbernard8, schauz1, schauz2, schauz3, schauz4, schauz5, schauz6, schauz7, schauz8, retreiver1, retreiver2, retreiver3, retreiver4, retreiver5, retreiver6, retreiver7, retreiver8, pom1, pom2, pom3, pom4, pom5, pom6, pom7, pom8, corgi1, corgi2, corgi3, corgi4, corgi5, corgi6, corgi7, corgi8, bandana1, bandana2, bandana3, bandana4, bandana5, bandana6, bandana7, bandana8];


  scoreText = game.add.text(16,16, `Doggos: ${score}`, { fontSize: '32px', fill: wordColor })
  welcome = game.add.text(doghorde.x - 30, doghorde.y, "COLLECT ALL THE DOGS", {
    fontSize: "32px",
    fill: "#FFF"
  });
  //the player can move
  cursors = game.input.keyboard.createCursorKeys();


}
function collectDoggo(player, doggo) {
  if (!player.hasOverlapped && !doggo.hasOverlapped) {
    player.hasOverlapped = doggo.hasOverlapped = true;
    doggo.kill();
    //updates score
    score += 1;
    scoreText.text = `${player.name} Score: ${score}`;
  } else {
    player.hasOverlapped = doggo.hasOverlapped = false;
  }
}


function update() {
   //Reset the players velocity (movement)

    doghorde.x += 2
    doghorde.body.velocity = 0
    doghorde.animations.play('right', 10, true)
    

  allDogs.map((dog,i) => {

    if (dog.alive === false) {
      dog.revive()
      dog.x = game.world.randomX
      dog.y = game.world.randomY
    }
    if (i%2===0) {
      dog.x -= 2;
      dog.body.velocity = 0
      dog.animations.play("left", 10, true);
      //game.physics.arcade.collide(dog, player);
      if (dog.x <= 0) {
        dog.x = game.world.width;
        dog.y = game.world.randomY
      }

    } else {

      dog.x += 2;
      dog.body.velocity = 0;
      dog.animations.play("right", 10, true);
      //game.physics.arcade.collide(dog, player);
      if (dog.x >= game.world.width) {
        dog.x = 1;
        dog.y = game.world.randomY
      }
    }
  })

  game.physics.arcade.overlap(player, dogs, collectDoggo, null, this)

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


