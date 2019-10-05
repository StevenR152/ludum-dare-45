function create_tile(x, y) {
	return Crafty.e('2D, DOM, Color, maintile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
		.color('#F00');
}

Crafty.defineScene("Game", function() {
	var redSquare = create_tile(GAME_SCREEN_X_MIDDLE_IN_TILES, GAME_SCREEN_Y_MIDDLE_IN_TILES);

	var generator = Crafty.e("2D, DOM, Color, Keyboard")
		.attr({
			x: GAME_SCREEN_X_MIDDLE_IN_TILES * TSIZE_X + TSIZE_X / 2 - (TSIZE_X / 6 / 2),
			y: GAME_SCREEN_Y_MIDDLE_IN_TILES * TSIZE_Y + TSIZE_Y / 2 - (TSIZE_Y / 4 / 2),
			w: TSIZE_X / 5,
			h: TSIZE_Y / 5
		})
		.color("red")
		.bind('KeyDown', function(e) {
			if (e.key == Crafty.keys.LEFT_ARROW) {
				this.x -= TSIZE_X;
				create_tile(this.x / TSIZE_X, this.y / TSIZE_Y)
			} else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += TSIZE_X;
				create_tile(this.x / TSIZE_X, this.y / TSIZE_Y)
			} else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= TSIZE_Y;
				create_tile(this.x / TSIZE_X, this.y / TSIZE_Y)
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += TSIZE_Y;
				create_tile(this.x / TSIZE_X, this.y / TSIZE_Y)
		    }
	  });
});