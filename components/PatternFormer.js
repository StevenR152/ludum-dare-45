Crafty.c("PatternFormer", {
	_pattern : [[1]],
	px : 0,
	py : 0,

	recordAction : function (x, y) {
		console.log("pos", {px:this.px, py:this.py}, "action", {x:x, y:y})
		this.px += x; this.py += y;

		if(y == -1 && this.py < 0 && Math.abs(this.py) <= this._pattern.length) {
			// Up, but off the top of the array, to expand it.
			this._pattern.unshift([1])
			this.py = 0;
		} else if(y == 1 && this.py >= this._pattern.length) {
			// Down but off the end of the array so expand it.
			this._pattern.push([1])
			this.py += 1;
		} else if(this.py >= 0 && this.py < this._pattern.length) {
			// A movement within the bounds of the array, set counter to 2 because now its solid tile.
			this._pattern[this.py][this.px] = 2;
		}

		console.log(this._pattern)
	}
})