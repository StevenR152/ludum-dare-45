Crafty.defineScene("GameMode", function () {
  Crafty.e("Background")
	Crafty.background("#38353B");
  
    Crafty.e("2D, DOM, Mouse, Color, Text")
          .attr({ w: 150, h: 30, x: 90, y: 70 })
          .color("#fff")
          .text("Fill Mode")
          .unselectable()
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .css("padding", "20px")
          .bind("Click", function () {
            Crafty.scene('Fill');
          })
 	
    Crafty.e("2D, DOM, Mouse, Color, Text")
          .attr({ w: 150, h: 30, x: 200, y: 200 })
          .color("#fff")
          .text("Finish Mode")
          .unselectable()
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .css("padding", "20px")
          .bind("Click", function () {
            Crafty.scene('Finish');
          })

    Crafty.e("2D, DOM, Mouse, Color, Text")
          .attr({ w: 150, h: 30, x: 310, y: 330 })
          .color("#fff")
          .text("Place Mode")
          .unselectable()
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .css("padding", "20px")
          .bind("Click", function () {
            Crafty.scene('Place');
          })
  
})
