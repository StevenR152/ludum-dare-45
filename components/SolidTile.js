Crafty.c("SolidTile", {
	init : function () {
		this.removeComponent("BreakingTile")
		this.removeComponent("breakingtile")
	    this.removeComponent("Collision")
		this.requires("fulltile")
	}
})

Crafty.c("GreySolidTile", {
	init : function () {
		this.requires("greyfulltile")
	}
})