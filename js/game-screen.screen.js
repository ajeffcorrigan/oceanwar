ocean.screens["game-screen"] = (function() {

    var board = ocean.board, display = ocean.display;

    function run() {
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