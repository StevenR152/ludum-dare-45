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