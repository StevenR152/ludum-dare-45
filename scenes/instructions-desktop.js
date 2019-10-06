Crafty.defineScene("InstructionsDesktop", function () {
	Crafty.e("DesktopInstructions")
	Crafty.background("#38353B");

	movementButtons();
	Crafty("MovementButton").each(function () {
		this.w = this.w;
		this.h = this.h;
		this.alpha = 1;
	})

	Crafty.e("2D, DOM, Mouse, Keyboard, Color")
		.attr({
			x: 0,
		 	y: 0,
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