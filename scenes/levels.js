var currentLevel = 1;
var levels = [
	{
		"map" : [
			[0, 1, 0],
			[1, 2, 1],
			[0, 1, 0],
		],
		"start" : { x:1 , y:1 } 
	},
	{
		"map" : [
			[1, 1, 1, 1],
			[1, 2, 0, 1],
			[1, 2, 2, 1],
			[1, 1, 1, 1]
		],
		"start" : { x:1 , y:1 }  
	},
	{
		"map" : [
			[1, 1, 2, 1, 1],
			[1, 0, 2, 0, 1],
			[1, 1, 2, 1, 1],
			[1, 0, 0, 0, 1],
			[1, 1, 1, 1, 1]
		],
		"start" : { x:2 , y:2 } 
	},
]


function getLevel() {
	return levels[currentLevel - 1];
}