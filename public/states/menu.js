
const menu = {
    preload: function() {
        game.load.image("main-menu", 'assets/misc/rainbow.png')
        game.load.spritesheet("playButton", 'assets/misc/dogeStart.png', 400, 370)
    },
    create: function() {
        game.add.image(0,0,"main-menu")
        playButton = this.game.add.button(game.world.centerX, game.world.centerY, "playButton", this.playGame, this, 1,0,2,0)
        playButton.anchor.setTo(0.5,0.5)
    },
    playGame: function() {
        this.game.state.start("Game")
    }
}

