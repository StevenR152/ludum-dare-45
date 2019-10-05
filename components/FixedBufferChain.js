Crafty.e("FixedBufferChain", {
	bufferSizes : [3, 2, 1],
	buffers : [[],[],[]],
	evictionAction : null,

	setBufferSizes : function (sizesArray) {
		bufferSizes = sizesArray;
		for (var i = 0; i < sizesArray.length; i++) {
			buffers.push([])
		}
	},

	setActionOnEviction : function (action) {
		
	},

	addItem : function (item) {
		for (var bufferIndex = 0; bufferIndex < buffersSizes.length; bufferIndex++) {
			var bufferMaxSize = buffersSizes[bufferIndex];
			if(buffers[bufferIndex].length < bufferMaxSize) {
				buffers.unshift(item)
			} else {
				
			}
		}
	}
})