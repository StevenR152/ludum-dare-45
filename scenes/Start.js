Crafty.defineScene("Start", function () {
	Crafty.background("#38353B");
    Crafty.e("StartBackground")
    Crafty.viewport.scale(0.6)
  
    Crafty.e("2D, DOM, Text")
          .attr({ w: 0, h: 50, x: 270, y: 120 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111");
 	
    // Game Assets would be a list of images, but this tutorial doesn't use them.
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
         Crafty.scene('Game');
       }, 2000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
})
