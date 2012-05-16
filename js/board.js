ocean.board = (function() {
    //Initialize the variables.
    var settings, cols, rows, isleSize, yourBoard;

    //Initialization function.
    function init(callback) {
        settings = ocean.settings;
        cols = settings.cols;
        rows = settings.rows;
        isleSize = settings.isleSize;
        console.log('Testing');
        createBoard();
        callback();
    }

    //Create the starting coordinates for an island.
    function createIsland(){
        var x, y;

        //Determine initial island location.
        x = Math.floor(Math.random() * (cols - isleSize));
        y = Math.floor(Math.random() * (rows - isleSize));
        //Return island locs.   
        return {
            'startx' : x,
            'starty' : y
        };
    }

    //Print the board.
    function print() {
        var str = "";
        for (var y = 0; y < rows; y++) {
            for (var x = 0; x < cols; x++) {
                str += yourBoard[x][y] + " ";
            }
            str += "\r\n";
        }
        console.log(str);
    }
    //Create the layout for your board.
    function createBoard() {
        var isleLoc, x, y;
        yourBoard = [];
        isleLoc = createIsland();
        for (x = 0; x < cols; x++) {
            yourBoard[x] = [];
            for (y = 0; y < rows; y++) {
                if(x == isleLoc.startx && y == isleLoc.starty) {
                    yourBoard[x][y] = 1;
                } else {
                    yourBoard[x][y] = 0;
                }
            }
        }
        //Add remaining island parts.
        for (x = 0; x < isleSize; x++) {
            for (y = 0; y < isleSize; y++) {
                yourBoard[isleLoc.startx + x][isleLoc.starty + y] = 1;
            }
        }
        //Add some random single islands.
        var n = (Math.floor(Math.random() * 10)) + 1;
        for(var i = 0; i < n; i++) {
            x = Math.floor(Math.random() * cols);
            y = Math.floor(Math.random() * rows);
            if(yourBoard[x][y] != 1) {
                yourBoard[x][y] = 1;
            }
        }
    }
    //Create a copy of the ocean board.
    function getBoard() {
        var copy = [],x;
        for (x = 0; x < cols; x++) {
            copy[x] = yourBoard[x].slice(0);
        }
        return copy;
    }

    return {
        init : init,
        print : print,
        getBoard : getBoard
    };
})();