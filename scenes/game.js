
Crafty.defineScene("Game", function() {
	
	Crafty.e("Background")
	var redSquare = create_tile(0, 0);
	var patternChecker = Crafty.e("PatternFormer");
	var generator = Crafty.e("2D, DOM, Keyboard")
		.attr({
			x: 0,
			y: 0,
			w: TSIZE_X / 5,
			h: TSIZE_Y / 5
		})
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
         		Crafty.scene('ShowPuzzle');
         	}
		    if(patternChecker.checkWin()) {
		    	currentLevel += 1;
         		Crafty.scene('ShowPuzzle');
		    }
	  });

	setupCamera(generator);
});