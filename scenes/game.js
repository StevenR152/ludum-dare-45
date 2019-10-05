Crafty.c("BreakingTile", {
	init : function () {
		this.requires("breakingtile")
	},

	fade : function () {
		this.removeComponent("breakingtile")
		this.addComponent("fadingtile")
	},

	solidify : function () {
		this.removeComponent("breakingtile")
		this.removeComponent("BreakingTile")
		this.addComponent("SolidTile")
	}
})

Crafty.c("SolidTile", {
	init : function () {
		this.removeComponent("BreakingTile")
		this.removeComponent("breakingtile")
	    this.removeComponent("Collision")
		this.requires("fulltile")
	}
})

function create_tile(x, y) {
	var tile = Crafty.e('Tile, 2D, DOM, Color, Collision, BreakingTile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
		.checkHits('Tile') // check for collisions with entities that have the Solid component in each frame
	    .bind("HitOn", function(hitData) {
	    	this.trigger("TILES_CONNECTED")
	    })
	    .bind("TILES_CONNECTED", function () {
	    	this.solidify()
	    	Crafty.trigger("TILES_PROMOTED")
	    })
	Crafty.trigger("CREATED_TILE", tile);
	return tile
}

var trail = [];
var trailMax = 6
Crafty.bind("CREATED_TILE", function (tile) {
	trail.unshift(tile);
	if(trail.length > trailMax) {
		var e = trail.pop();
		e.fade();
	}
})
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

Crafty.viewport.clampToEntities = false;
Crafty.viewport.scale(0.7);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(generator, 0, 0);
});
Crafty.viewport.centerOn(generator, 0);
});