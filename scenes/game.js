function create_tile(x, y) {
	return Crafty.e('Tile, 2D, DOM, Color, Collision, maintile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
		.checkHits('Tile') // check for collisions with entities that have the Solid component in each frame
	    .bind("HitOn", function(hitData) {
	    	Crafty.trigger("TILES_CONNECTED")
	    	this.trigger("TILES_CONNECTED")
	        Crafty.log("Collision with Solid entity occurred for the first time.");
	    })
	    .bind("TILES_CONNECTED", function () {
	    	Crafty.log("remove component")
	    	this.removeComponent("maintile")
	    	this.addComponent("fulltile")
	    })
}

var map = [];

Crafty.defineScene("Game", function() {
	for (var i = 0; i < GAME_SCREEN_WIDTH_IN_TILES; i++) {
		var rows = []
		for (var j = 0; j < GAME_SCREEN_HEIGHT_IN_TILES; j++) {
			rows.push(0)
		}
		map.push(rows)
	}
	map[GAME_SCREEN_X_MIDDLE_IN_TILES][GAME_SCREEN_Y_MIDDLE_IN_TILES] = 1

	console.log(map)
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
		   		map[y][x - 1] = 1;
			} else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += TSIZE_X;
				create_tile(x + 1, y)
				map[y][x + 1] = 1;
			} else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= TSIZE_Y;
				create_tile(x, y - 1)
		   		map[y - 1][x] = 1;
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += TSIZE_Y;
				create_tile(x, y + 1)
		   		map[y + 1][x] = 1;
		    }
			console.log(map)
	  });
});