var tileStack = [];
var maxTiles = 8;
var turn = 0;
var MOVE_TURN = 2;

function create_tile(x, y) {
	var tile = Crafty.e('2D, DOM, Color, maintile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
	if(tileStack.length > maxTiles) {
		tileStack.pop().destroy()
	}
	tileStack.unshift(tile);
	return tile;
}

Crafty.defineScene("Game", function() {
	var redSquare = create_tile(GAME_SCREEN_X_MIDDLE_IN_TILES, GAME_SCREEN_Y_MIDDLE_IN_TILES);
	// var symmetryLine = Crafty.e('2D, DOM, Color')
	// 	.color("green")
	// 	.attr({x: GAME_SCREEN_WIDTH / 2 - (TSIZE_X / 7 / 2), y: 0, w: TSIZE_X / 7, h: TSIZE_Y * 1000})


	var player = Crafty.e("2D, DOM, Color, Keyboard")
		.attr({
			x: GAME_SCREEN_X_MIDDLE_IN_TILES * TSIZE_X + TSIZE_X / 2 - TSIZE_X / 2,
			y: GAME_SCREEN_Y_MIDDLE_IN_TILES * TSIZE_Y + TSIZE_Y / 2 - TSIZE_Y / 2,
			w: TSIZE_X,
			h: TSIZE_Y
		})
		.color("blue")

	var generator = Crafty.e("2D, DOM, Keyboard")
		.attr({
			x: GAME_SCREEN_X_MIDDLE_IN_TILES * TSIZE_X,
			y: GAME_SCREEN_Y_MIDDLE_IN_TILES * TSIZE_Y,
			w: TSIZE_X / 5,
			h: TSIZE_Y / 5
		})
		.bind('KeyDown', function(e) {
			if(turn % MOVE_TURN == 0) {
				if (e.key == Crafty.keys.LEFT_ARROW) {
					create_tile((this.x - TSIZE_X )/ TSIZE_X , this.y / TSIZE_Y)
				} else if (e.key == Crafty.keys.RIGHT_ARROW) {
					create_tile((this.x + TSIZE_X ) / TSIZE_X, this.y / TSIZE_Y)
				} else if (e.key == Crafty.keys.UP_ARROW) {
					create_tile(this.x / TSIZE_X,( this.y - TSIZE_Y) / TSIZE_Y)
			    } else if (e.key == Crafty.keys.DOWN_ARROW) {
					create_tile(this.x / TSIZE_X, (this.y + TSIZE_Y ) / TSIZE_Y)
		   		 } else {
		   		 	turn -= 1;
		   		 }
	   		}
			if (e.key == Crafty.keys.LEFT_ARROW) {
				this.x -= TSIZE_X;
				player.x -= TSIZE_X;
			} else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.x += TSIZE_X;
				player.x += TSIZE_X;
			} else if (e.key == Crafty.keys.UP_ARROW) {
				this.y -= TSIZE_Y;
				player.y -= TSIZE_Y;
		    } else if (e.key == Crafty.keys.DOWN_ARROW) {
				this.y += TSIZE_Y;
				player.y += TSIZE_Y;
	   		} else {
	   		 	turn -= 1;
	   		}
		
			turn += 1;
			
	  });
});