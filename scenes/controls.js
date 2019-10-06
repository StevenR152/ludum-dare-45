Crafty.defineScene("Controls", function () {
	Crafty.e("Background")
	Crafty.background("#38353B");
	movementButtons();
	Crafty("MovementButton").each(function () {
		this.w = this.w - 40;
		this.h = this.h - 40;
		this.css("padding", "20px")
		this.alpha = 0.6;
	})

	Crafty.e("2D, DOM, Mouse, Keyboard, Color")
		.attr({
			x: 0, //-0.5* GAME_SCREEN_WIDTH,
		 	y: 0, //-0.5*GAME_SCREEN_HEIGHT,
		 	w: GAME_SCREEN_WIDTH,
		 	h: GAME_SCREEN_HEIGHT
		 })
		.bind("KeyDown", function () {
			Crafty.scene("Game")
		})
		.bind("Click", function () {
			Crafty.scene("Game")
		})

})