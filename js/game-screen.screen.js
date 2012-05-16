ocean.screens["game-screen"] = (function() {

    var board = ocean.board, display = ocean.display;
    var getstarted = ocean.getstarted;

    function run() {
        //start game menu
        getstarted.init();
        //game details
        board.init(function() {
            ocean.display.init(function(){
                ocean.display.redraw(board.getBoard(), function() {
                });
            });
        });
    }

    function setup() {
        //init
    }

    return {
        run : run
    };

})();