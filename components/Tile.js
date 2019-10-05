Crafty.c("Tile", {
	init : function () {
		this.requires("2D, DOM, Collision, BreakingTile")
		this.checkHits('Tile') // check for collisions with entities that have the Solid component in each frame
	    this.bind("HitOn", function(hitData) {
	    	this.trigger("TILES_CONNECTED")
	    })
	}
})