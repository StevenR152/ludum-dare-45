var currentLevel = 4;
var levels = [
	{
		"map" : [
			[0, 1, 1, 1, 0],
			[1, 1, 2, 1, 1],
			[1, 2, 1, 2, 1],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
		],
		"start" : { x : 2 , y : 4 }, 
		"moves" : 2 // ?
	},


	{
		"map" : [
			[1, 1, 1, 1, 1],
			[1, 2, 1, 2, 1],
			[1, 1, 1, 1, 1],
			[1, 2, 1, 2, 1],
			[2, 1, 1, 1, 2],
			[1, 0, 0, 0, 1],
		],
		"start" : { x : 2 , y : 2 }, 
		"moves" : 2
	},

]


function getLevel() {
	return levels[currentLevel - 1];
}
