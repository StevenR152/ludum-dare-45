var widthOfImage = 96;
var heightOfImage = 96;

Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.attr({x: -50 * widthOfImage, y: -50 * heightOfImage, w: widthOfImage * 100, h: heightOfImage * 100});
        this.image("assets/images/bg96x96.png", "repeat");
        this.vx -= 1;
    }
});