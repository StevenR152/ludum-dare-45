
Crafty.defineScene("Game", function() {
	var redSquare = create_tile(0, 0);

	var generator = Crafty.e("2D, DOM, Keyboard, PatternFormer")
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
				this.recordAction(-1, 0)
			} else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += TSIZE_X;
				create_tile(x + 1, y)
				this.recordAction(1, 0)
			} else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= TSIZE_Y;
				create_tile(x, y - 1)
				this.recordAction(0, -1)
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += TSIZE_Y;
				create_tile(x, y + 1)
				this.recordAction(0, 1)
		    }
		    this.checkWin()
	  });

	setupCamera(generator);
});