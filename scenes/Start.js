Crafty.defineScene("Start", function () {
	Crafty.background("#38353B");
    Crafty.e("StartBackground") 
  
    // Game Assets would be a list of images, but this tutorial doesn't use them.
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
        if(Crafty.mobile) {
          Crafty.scene('InstructionsMobile');
        } else {
          Crafty.scene('InstructionsDesktop')
        }
       }, 2000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
})
