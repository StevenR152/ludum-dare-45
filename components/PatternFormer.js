Crafty.c("PatternFormer", {
	_gridSize : 30,
	_pattern : [],
	px : 0,
	py : 0,

	init : function () {
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
		
		console.log(this._pattern)
		console.log(this.simplify())
	},

	simplify : function () {
		var newArray = [];
		for (var i = 0; i < this._pattern.length; i++) {
			var row = this._pattern[i];
			var newRow = []
			for(let i of row)
   				i && newRow.push(i);
   			if(newRow.length > 0)
   				newArray.push(newRow)
		}
		return newArray
	}
})