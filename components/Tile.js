Crafty.c("Tile", {
	init : function () {
		this.requires("2D, DOM, Collision, Tween, BreakingTile")
		this.z = 10
		this.checkHits('Tile') // check for collisions with entities that have the Solid component in each frame
	    this.bind("HitOn", function(hitData) {
			Crafty.audio.play("clickfull", 1, 0.5);
	    	this.trigger("TILES_CONNECTED")
	    })
	    this.bind("Spawn", function() {
	    	this.tween({alpha: 1}, 2000)
		}.bind(this));
	}
})

Crafty.c("PuzzleTile", {
	init : function () {
		this.requires("2D, DOM, Tween, GreyBreakingTile")
		this.z = 5;
		this.alpha = 0
		Crafty.one("CameraAnimationDone", function() {
	    	this.tween({alpha: 1}, 3000)
		}.bind(this));
   		
	}
})