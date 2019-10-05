Crafty.defineScene("Game", function() {
	var level = getLevel();
	Crafty.e("Background")
	var lx = 1;
	var ly = 1;

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

	var redSquare = create_tile(0, 0)
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
		.bind('KeyDown', function(e) {
			var x = this.x / TSIZE_X;
			var y = this.y / TSIZE_Y;

			if (e.key == Crafty.keys.LEFT_ARROW) {
				this.x -= TSIZE_X;
				create_tile(x - 1, y)
				patternChecker.recordAction(-1, 0)
			} else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += TSIZE_X;
				create_tile(x + 1, y)
				patternChecker.recordAction(1, 0)
			} else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= TSIZE_Y;
				create_tile(x, y - 1)
				patternChecker.recordAction(0, -1)
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += TSIZE_Y;
				create_tile(x, y + 1)
				patternChecker.recordAction(0, 1)
		    } else if(e.key == Crafty.keys.SPACE) {
         		Crafty.scene('Game');
         	}
		    if(patternChecker.checkWin()) {
		    	currentLevel += 1;
		    	if(currentLevel <= levels.length) {
		    		console.log("Next level loading...")
         			Crafty.scene('Game');
		    	} else {
		    		console.log("End of Game")
		    		Crafty.scene('End');
		    	}
		    }
	  });

	setupCamera(generator);
});