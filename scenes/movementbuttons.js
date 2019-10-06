function movementButtons() {
	var buttonSize = 125;
	Crafty.c("MovementButton", {
		init : function () {
			this.requires("2D, Text, Tween, DOM, Color, Mouse, HUD")
			this.attr({
				x: 200,
				y: 200,
				w: buttonSize,
				h: buttonSize,
				alpha: 0.1
			})
			this.textFont({ size: '20px', weight: 'bold' });
			this.unselectable();
			this.textAlign("center")
			this.fixedPosition(GAME_SCREEN_WIDTH - buttonSize - 30, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
			this.color("lightblue")
			Crafty.one("CameraAnimationDone", function() {
		    	this.tween({alpha: 0.00}, 2000)
			}.bind(this));
		},

		direction : function (dir) {
			this.dir - dir;
			return this;
		}
	})
	var paddingFromEdge = 30;
	var rightButton = Crafty.e("MovementButton")
		.fixedPosition(GAME_SCREEN_WIDTH - buttonSize - paddingFromEdge, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
		.text("Right")
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_RIGHT")
		})

	var leftButton = Crafty.e("MovementButton")
		.fixedPosition(paddingFromEdge, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
		.text("Left")
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_LEFT")
		})


	var upButton = Crafty.e("MovementButton")
		.fixedPosition(GAME_SCREEN_WIDTH / 2 - buttonSize/2, paddingFromEdge)
		.text("Up")
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_UP")
		})


	var downButton = Crafty.e("MovementButton")
		.fixedPosition(GAME_SCREEN_WIDTH / 2 - buttonSize/2, GAME_SCREEN_HEIGHT - paddingFromEdge - buttonSize)
		.text("Down")
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_DOWN")
		})

	var resetButton = Crafty.e("MovementButton")
		.fixedPosition(paddingFromEdge, paddingFromEdge)
		.text("Reset")
		.color("red")
		.attr({w: buttonSize / 4 * 3, h: buttonSize / 4 * 3})
		.bind("Click", function () {
				Crafty.trigger("UserAction", "RESET")
		})
}
