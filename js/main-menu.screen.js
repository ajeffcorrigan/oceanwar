ocean.screens['main-menu'] = (function(){
    var game = ocean.game, dom = ocean.dom, $ = dom.$;

    function run() {
        var ship1 = new WarShip("Battleship",5);
        ship1.setShipLoc(11,8,1);
        console.log(ship1.getShipLoc());
        dom.bind("#main-menu ul.menu", "click", function(e) {
            if (e.target.nodeName.toLowerCase() === "button") {
                var action = e.target.getAttribute("name");
                game.showScreen(action);
            }
        });
    }
    return {
        run : run
    };

})();