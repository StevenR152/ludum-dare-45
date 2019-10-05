Crafty.defineScene("ShowPuzzle", function () {
	var level = getLevel();

	for (var i = 0; i < level.length; i++) {
		var row = level[i];
		for (var j = 0; j < row.length; j++) {
			var col = row[j];

			if(level[i][j] != 0)
				var tile = create_tile(j, i);
			if(level[i][j] == 2) 
				tile.solidify()
			if(i == Math.floor(level.length/2) && j == Math.floor(row.length/2)) {
				setupCamera(tile);
			}
		}
	}

	Crafty.e("Delay").delay(function () {
        Crafty.scene('Game');
	}, 400)

})