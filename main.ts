let Player = game.createSprite(2, 4)
while (true) {
    if (input.acceleration(Dimension.X) > 200) {
        Player.move(1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) > -1000) {
        Player.move(-1)
        basic.pause(100)
    }
}
basic.forever(function () {
	
})
