var currentLevel = 1;
var levels = [
	[
		[0, 1, 0],
		[1, 2, 1],
		[0, 1, 0],
	],
	[
		[1, 1, 1, 1],
		[1, 2, 0, 1],
		[1, 2, 2, 1],
		[1, 1, 1, 1]
	]
]


function getLevel() {
	return levels[currentLevel - 1];
}