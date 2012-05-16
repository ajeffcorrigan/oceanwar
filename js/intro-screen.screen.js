ocean.screens['intro-screen'] = (function(){
    var game = ocean.game, dom = ocean.dom, $ = dom.$;

    function setup(getLoadProcess) {
        var scr = $("#intro-screen")[0];

        function checkProgress() {
            var p = getLoadProgress() * 100;
            $(".indicator",scr)[0].style.width = p + "%";
            if (p == 100) {
                $(".continue",scr)[0].style.display = "block";
                dom.bind(scr, "click", function() {
                    ocean.game.showScreen("main-menu");
                });
            } else {
                setTimeout(checkProgress, 30);
            }
        }
        checkProgress();
    }
    function run(getLoadProgress) {
        setup(getLoadProgress);
    }

    return {
        run : run
    };

})();