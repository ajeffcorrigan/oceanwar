ocean.display = (function() {
    var dom = ocean.dom,
        $ = dom.$,
        canvas, ctx, cursor,
        cols, rows, tileSize,
        firstRun = true;

    function init(callback) {
      setup();
      callback();
    }

    function setup() {
        var boardElement = $("#game-screen .game-board")[0];

        cols = ocean.settings.cols;
        rows = ocean.settings.rows;
        tileSize = ocean.settings.tileSize;

        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        dom.addClass(canvas, "board");
        canvas.width = cols * tileSize + cols;
        canvas.height = rows * tileSize + rows;

        //boardElement.appendChild(createBackground());
        boardElement.appendChild(canvas);
    }

    function createBackground() {
        var background = document.createElement("canvas"), bgctx = background.getContext("2d");

        dom.addClass(background, "background");
        background.width = cols * tileSize;
        background.height = rows * tileSize;

        bgctx.fillStyle = "rgba(225,235,255,0.15)";
        for (var x=0;x<cols;x++) {
            for (var y=0;y<cols;y++) {
                if ((x+y) % 2) {
                    bgctx.fillRect(
                        x * tileSize, y * tileSize,
                        tileSize, tileSize
                    );
                }
            }
        }
        return background;
    }
    function redraw(oceanboard, callback) {
        var x, y;
        yourBoard = oceanboard;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for (x = 0; x < cols; x++) {
            for (y = 0; y < rows; y++) {
                drawOcean(yourBoard[x][y], x, y);
                
            }
        }
        callback();
    }
    function drawOcean(tboard, x, y) {
        var asset = ocean.assets['assets/tiles-16.png'];
        ctx.drawImage(asset, tboard * tileSize, 0, tileSize, tileSize, x * tileSize, y * tileSize, tileSize, tileSize);
        ctx.strokeRect(x * tileSize,y * tileSize,tileSize,tileSize); 
    }

  
    return { 
        init : init,
        redraw : redraw
    };

})();