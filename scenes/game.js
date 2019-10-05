Crafty.c("BreakingTile", {
	init : function () {
		this.requires("breakingtile")
	    this.bind("TILES_CONNECTED", function () {
	    	this.solidify()
	    })
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
Crafty.c("Tile", {
	init : function () {
		this.requires("2D, DOM, Collision, BreakingTile")
		this.checkHits('Tile') // check for collisions with entities that have the Solid component in each frame
	    this.bind("HitOn", function(hitData) {
	    	this.trigger("TILES_CONNECTED")
	    })
	}
})
function create_tile(x, y) {
	var tile = Crafty.e('Tile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
		
	return tile
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