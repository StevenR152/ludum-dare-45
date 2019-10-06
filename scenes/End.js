Crafty.defineScene("End", function () {
	Crafty.background("#38353B");
    Crafty.e("EndBackground")

	Crafty.e("2D, DOM, Mouse, Keyboard, Color")
		.attr({
			x: 0, //-0.5* GAME_SCREEN_WIDTH,
		 	y: 0, //-0.5*GAME_SCREEN_HEIGHT,
		 	w: GAME_SCREEN_WIDTH,
		 	h: GAME_SCREEN_HEIGHT
		 })
		.bind("KeyDown", function () {
			Crafty.scene("GameMode")
		})
		.bind("Click", function () {
			Crafty.scene("GameMode")
		})
})