function create_tile(x, y) {
	var tile = Crafty.e('Tile');
	
		Crafty.audio.play("clickbasic", 1, 0.5);
		tile.origin("center")
		tile.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
	return tile;
}

function create_grey_tile(x, y) {
	return Crafty.e('PuzzleTile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
		.origin("center")
}

function setupCamera(target) {
	Crafty.viewport.clampToEntities = false;
	Crafty.viewport.scale(1);
	Crafty.one("CameraAnimationDone", function() {
	    Crafty.viewport.follow(target, 0, 0);
	});
	Crafty.viewport.centerOn(target, 1400);
}

function checkArrays( arrA, arrB ){

    //check if lengths are different
    if(arrA.length !== arrB.length) return false;


    for(var i=0;i<arrA.length || i<arrB.length;i++){
    	for (var j = 0; j < arrA[i].length || j < arrB[i].length; j++) {
    		if(arrA[i][j]!==arrB[i][j]) return false;
    	}
    }

    return true;

}
