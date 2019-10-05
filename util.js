function create_tile(x, y) {
	return Crafty.e('Tile')
		.attr({x: x * TSIZE_X, y: y * TSIZE_Y, w: TSIZE_X, h: TSIZE_Y})
}

function setupCamera(target) {
	Crafty.viewport.clampToEntities = true;
	Crafty.viewport.scale(1);
	Crafty.one("CameraAnimationDone", function() {
	    Crafty.viewport.follow(target, 0, 0);
	});
	Crafty.viewport.centerOn(target, 0);
}

function checkArrays( arrA, arrB ){

    //check if lengths are different
    if(arrA.length !== arrB.length) return false;


    for(var i=0;i<arrA.length;i++){
    	for (var j = 0; j < arrA[i].length; j++) {
    		if(arrA[i][j]!==arrB[i][j]) return false;
    	}
    }

    return true;

}
