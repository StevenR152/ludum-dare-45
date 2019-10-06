function movementButtons() {
	var buttonSize = 125;
	Crafty.c("MovementButton", {
		init : function () {
			this.requires("2D, Tween, DOM, Color, Mouse, HUD")
			this.attr({
				x: 200,
				y: 200,
				w: buttonSize,
				h: buttonSize,
				alpha: 1
			})
			this.fixedPosition(GAME_SCREEN_WIDTH - buttonSize - 30, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
			this.color("lightblue")
			Crafty.one("CameraAnimationDone", function() {
		    	this.tween({alpha: 0.2}, 2000)
			}.bind(this));
		},

		direction : function (dir) {
			this.dir - dir;
			return this;
		}
	})
	
	var paddingFromEdge = 30;
	var rightButton = Crafty.e("MovementButton, rightbutton")
		.fixedPosition(GAME_SCREEN_WIDTH - buttonSize - paddingFromEdge, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_RIGHT")
		})

	var leftButton = Crafty.e("MovementButton, leftbutton")
		.fixedPosition(paddingFromEdge, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_LEFT")
		})

	var upButton = Crafty.e("MovementButton, upbutton")
		.fixedPosition(GAME_SCREEN_WIDTH / 2 - buttonSize/2, paddingFromEdge)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_UP")
		})

	var downButton = Crafty.e("MovementButton, downbutton")
		.fixedPosition(GAME_SCREEN_WIDTH / 2 - buttonSize/2, GAME_SCREEN_HEIGHT - paddingFromEdge - buttonSize)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_DOWN")
		})

	var resetButton = Crafty.e("MovementButton, resetbutton")
		.fixedPosition(paddingFromEdge, paddingFromEdge)
		.color("red")
		.attr({w: buttonSize / 4 * 3, h: buttonSize / 4 * 3})
		.bind("Click", function () {
				Crafty.trigger("UserAction", "RESET")
		})
}
