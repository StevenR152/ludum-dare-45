
Crafty.defineScene("Game", function() {
	
	var redSquare = Crafty.e('2D, DOM, Color, maintile')
		.attr({x: GAME_SCREEN_X_MIDDLE_IN_TILES * TSIZE_X, y: GAME_SCREEN_Y_MIDDLE_IN_TILES * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
		.color('#F00');

});