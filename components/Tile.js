Crafty.c("Tile", {
	init : function () {
		this.requires("2D, DOM, Collision, BreakingTile")
		this.z = 10
		this.checkHits('Tile') // check for collisions with entities that have the Solid component in each frame
	    this.bind("HitOn", function(hitData) {
	    	this.trigger("TILES_CONNECTED")
	    })
	}
})

Crafty.c("PuzzleTile", {
	init : function () {
		this.requires("2D, DOM, GreyBreakingTile")
		this.z = 5;
	}
})