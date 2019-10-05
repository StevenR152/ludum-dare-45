Crafty.c("PatternFormer", {
	_gridSize : 30,
	px : 1,
	py : 1,

	init : function () {
		this._pattern = [],
		this.px = this._gridSize / 2;
		this.py = this._gridSize / 2;
		for (var i = 0; i < this._gridSize; i++) {
			var rows = [];
			for (var k = 0; k < this._gridSize; k++) {
				rows.push(0)
			}
			this._pattern.push(rows);
		}
		this._pattern[this.py][this.px] += 1;
		console.log(this._pattern)
	},	

	recordAction : function (x, y) {
		console.log("pos", {px:this.px, py:this.py}, "action", {x:x, y:y})
		this.px += x; this.py += y;
		this._pattern[this.py][this.px] += 1;
		
		// console.log(this._pattern)
		// console.log(this.simplify())
	},

	simplify : function () {
		return this._simplifyGrid(this._pattern)	
	},

	_simplifyGrid : function (grid) {
		var newArray = [];
		for (var i = 0; i < grid.length; i++) {
			var row = grid[i];
			var newRow = []
			for(let i of row)
   				i && newRow.push(this._process(i));
   			if(newRow.length > 0)
   				newArray.push(newRow)
		}
		return newArray
	},

	checkWin : function () {
		console.log("checking win...")
		console.log(this.simplify())
		console.log(getLevel().map)
		console.log(this._simplifyGrid(getLevel().map))
		var win = checkArrays(this._simplifyGrid(getLevel().map), this.simplify());
		console.log(win)
		return win
	},

	_process : function (number) {
		if(number > 2) return 2;
		return number
	}
})