ocean.game = (function() {
    //Initialize variables.
    var dom = ocean.dom, $ = dom.$;

    function init() {
        createBackground();
    }

    //Show active screen and hide inactive.
    function showScreen(screenId) {
        //Initialize the current active screen and the screen being called.
        var activeScreen = $("#game .screen.active")[0], screen = $("#" + screenId)[0];
        //If activeScreen is not empty, disable it before switching.
        if (activeScreen) {
            dom.removeClass(activeScreen, "active");
        }
        // extract screen parameters from arguments
        var args = Array.prototype.slice.call(arguments, 1);
        // run the screen module
        ocean.screens[screenId].run.apply(
            ocean.screens[screenId], args
        );

        // display the screen html
        dom.addClass(screen, "active");
    }

    // create background pattern
    function createBackground() {
        if (!Modernizr.canvas) return;
        var canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d"),
            background = $("#game .background")[0],
            rect = background.getBoundingClientRect(),
            gradient,
            i;

        canvas.width = rect.width;
        canvas.height = rect.height;

        ctx.scale(rect.width, rect.height);

        gradient = ctx.createRadialGradient(
            0.25, 0.15, 0.5,
            0.25, 0.15, 1
        );
        gradient.addColorStop(0, "rgb(55,65,50)");
        gradient.addColorStop(1, "rgb(0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 1);

        ctx.strokeStyle = "rgba(255,255,255,0.02)";
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 0.008;
        ctx.beginPath();
        for (i=0;i<2;i+=0.020) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i - 1, 1);
        }
        ctx.stroke();
        background.appendChild(canvas);
    }

    return {
        init : init,
        showScreen : showScreen
    };

})();