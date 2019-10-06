Crafty.c("TouchZones", {
	init : function () {
		this.requires("2D, DOM, Color, Mouse")
		this.attr({
			x: -1* GAME_SCREEN_WIDTH * 5, 
			y: -1 * GAME_SCREEN_HEIGHT * 5, 
			w: GAME_SCREEN_WIDTH * 10, 
			h: GAME_SCREEN_HEIGHT * 10, 
			a: 0.1
		})
		// this.color("yellow")
		this.z = 1000;
		this.bind('Click', function(MouseEvent){
			console.log('clicked', MouseEvent.clientX, MouseEvent.clientY);
			var xdiff = MouseEvent.clientX - 1100;
			var ydiff = MouseEvent.clientY - 240;
			console.log('diff', xdiff, ydiff)
			var dir;

			if(Math.abs(xdiff) > Math.abs(ydiff)) {
				if(xdiff < 0) {	
					Crafty.trigger("UserAction", "MOVE_LEFT")
				} else {
					Crafty.trigger("UserAction", "MOVE_RIGHT")
				}
			} else {
				if(ydiff < 0) {
					Crafty.trigger("UserAction", "MOVE_UP")
				} else {
					Crafty.trigger("UserAction", "MOVE_DOWN")
				}
			}

		});
	}
})