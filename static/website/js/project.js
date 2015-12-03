/* Project specific Javascript goes here. */
var tpj=jQuery;
tpj.noConflict();
tpj(document).ready(function() {
if (tpj.fn.cssOriginal!=undefined)
    tpj.fn.css = tpj.fn.cssOriginal;
    var api= tpj('.revolution').revolution({
        delay:9000,
        startheight:380,
        startwidth:960,
        hideThumbs:200,
        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,
        navigationType:"bullet",
        navigationArrows:"verticalcentered",
        navigationStyle:"square",
        touchenabled:"on",
        onHoverStop:"on",
        navOffsetHorizontal:0,
        navOffsetVertical:20,
        shadow:0
    });
});
AA_CONFIG.easingFunction = 'easeOutBounce';
