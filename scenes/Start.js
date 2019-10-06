Crafty.defineScene("Start", function () {
	  Crafty.background("#38353B");
    Crafty.e("StartBackground") 
  
    // Game Assets would be a list of images, but this tutorial doesn't use them.
  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
        Crafty.audio.play("ambient-background-slow", -1, 1);
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
