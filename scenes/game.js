function createGreyTiles(levelObject) {
	var level = levelObject.map;
	var levelStart = levelObject.start

	var lx = levelStart.x;
	var ly = levelStart.y;

	for (var i = 0; i < level.length; i++) {
		var row = level[i];
		for (var j = 0; j < row.length; j++) {
			var col = row[j];

			if(level[i][j] != 0)
				var tile = create_grey_tile(j - lx, i - ly);
			
			if(level[i][j] == 2) 
				tile.solidify()
		}
	}
}

function user_input_to_action_mapper_listener() {
	Crafty.bind('KeyDown', function(e) {
		if (e.key == Crafty.keys.LEFT_ARROW) {
			Crafty.trigger("UserAction", "MOVE_LEFT")
		} else if (e.key == Crafty.keys.RIGHT_ARROW) {
			Crafty.trigger("UserAction", "MOVE_RIGHT")
		} else if (e.key == Crafty.keys.UP_ARROW) {
			Crafty.trigger("UserAction", "MOVE_UP")
	    } else if (e.key == Crafty.keys.DOWN_ARROW) {
			Crafty.trigger("UserAction", "MOVE_DOWN")
	    } else if(e.key == Crafty.keys.SPACE) {
			Crafty.trigger("UserAction", "RESET")
	 	}
	});
}

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
				alpha: 0.0
			})
			this.fixedPosition(GAME_SCREEN_WIDTH - buttonSize - 30, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
			this.color("blue")
			Crafty.one("CameraAnimationDone", function() {
		    	this.tween({alpha: 0.08}, 2000)
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
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_RIGHT")
		})

	var leftButton = Crafty.e("MovementButton")
		.fixedPosition(paddingFromEdge, GAME_SCREEN_HEIGHT/2 - buttonSize/2)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_LEFT")
		})


	var upButton = Crafty.e("MovementButton")
		.fixedPosition(GAME_SCREEN_WIDTH / 2 - buttonSize/2, paddingFromEdge)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_UP")
		})


	var downButton = Crafty.e("MovementButton")
		.fixedPosition(GAME_SCREEN_WIDTH / 2 - buttonSize/2, GAME_SCREEN_HEIGHT - paddingFromEdge - buttonSize)
		.bind("Click", function () {
				Crafty.trigger("UserAction", "MOVE_DOWN")
		})


}

Crafty.defineScene("Game", function() {
	Crafty.e("Background")
	// Crafty.e("TouchZones")
	movementButtons()
	createGreyTiles(getLevel())
 	var redSquare = create_tile(0, 0)
		redSquare.alpha = 0;
		redSquare.trigger("Spawn")


	var patternChecker = Crafty.e("PatternFormer");
	var generator = Crafty.e("2D, DOM, Keyboard, Color")
		// .color("red")
		.attr({
			x: 0,
			y: 0,
			w: 48, 
			h: 48
		})
		.origin("center")
	Crafty.bind("UserAction", function (action) {
			var x = generator.x / TSIZE_X;
			var y = generator.y / TSIZE_Y;

			if (action == "MOVE_LEFT") {
				generator.x -= TSIZE_X;
				create_tile(x - 1, y)
				patternChecker.recordAction(-1, 0)
			} else if (action == "MOVE_RIGHT") {
				generator.x += TSIZE_X;
				create_tile(x + 1, y)
				patternChecker.recordAction(1, 0)
			} else if (action == "MOVE_UP") {
				generator.y -= TSIZE_Y;
				create_tile(x, y - 1)
				patternChecker.recordAction(0, -1)
		    } else if (action == "MOVE_DOWN") {
				generator.y += TSIZE_Y;
				create_tile(x, y + 1)
				patternChecker.recordAction(0, 1)
		    } else if(action == "RESET") {
         		Crafty.scene('Game');
         	}
		    if(patternChecker.checkWin()) {
		    	currentLevel += 1;
		    	if(currentLevel <= levels.length) {
		    		Crafty.log("Next level loading...")
         			Crafty.scene('Game');
		    	} else {
		    		Crafty.log("End of Game")
		    		Crafty.scene('End');
		    	}
		    }
		})

	user_input_to_action_mapper_listener();
	setupCamera(generator);
});