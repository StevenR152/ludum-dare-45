function create_tile(x, y) {
	return Crafty.e('Tile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
}

Crafty.defineScene("Game", function() {
	var redSquare = create_tile(GAME_SCREEN_X_MIDDLE_IN_TILES, GAME_SCREEN_Y_MIDDLE_IN_TILES);

	var generator = Crafty.e("2D, DOM, Keyboard")
		.attr({
			x: GAME_SCREEN_X_MIDDLE_IN_TILES * TSIZE_X,
			y: GAME_SCREEN_Y_MIDDLE_IN_TILES * TSIZE_Y,
			w: TSIZE_X / 5,
			h: TSIZE_Y / 5
		})
		.bind('KeyDown', function(e) {
			var x = this.x / TSIZE_X;
			var y = this.y / TSIZE_Y;

			if (e.key == Crafty.keys.LEFT_ARROW) {
				this.x -= TSIZE_X;
				create_tile(x - 1, y)
			} else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += TSIZE_X;
				create_tile(x + 1, y)
			} else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= TSIZE_Y;
				create_tile(x, y - 1)
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += TSIZE_Y;
				create_tile(x, y + 1)
		    }

	  });

	Crafty.viewport.clampToEntities = false;
	Crafty.viewport.scale(0.7);
	Crafty.one("CameraAnimationDone", function() {
	    Crafty.viewport.follow(generator, 0, 0);
	});
	Crafty.viewport.centerOn(generator, 0);
});