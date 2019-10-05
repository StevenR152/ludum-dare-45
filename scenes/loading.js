Crafty.defineScene("Loading", function() {
    Crafty.background("#38353B");
    Crafty.e("Background")

  
    Crafty.e("2D, DOM, Text")
          .attr({ w: 0, h: 50, x: 270, y: 220 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111");
 	
    // Game Assets would be a list of images, but this tutorial doesn't use them.
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
         Crafty.scene('Game');
       }, 1000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  })