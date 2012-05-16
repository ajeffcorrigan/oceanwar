//global game object
var ocean = {
    screens : {},
    settings : {
        rows : 26,
        cols : 26,
        isleSize : 3,
        tileSize : 16,
        numIsles : -1
    },
    assets : {}
};

// extend yepnope with preloading
yepnope.addPrefix("preload", function(resource) {
    resource.noexec = true;
    return resource;
});
var numPreload = 0, numLoaded = 0;
yepnope.addPrefix("loader", function(resource) {
    console.log("Loading: " + resource.url)
    var isImage = /.+\.(jpg|png|gif)$/i.test(resource.url);
    resource.noexec = isImage;

    numPreload++;
    resource.autoCallback = function(e) {
        console.log("Finished loading: " + resource.url)
        numLoaded++;
        if (isImage) {
            var image = new Image();
            image.src = resource.url;
            ocean.assets[resource.url] = image;
        }
    };
    return resource;
});

//Check loading process.
function getLoadProgress() {
    if (numPreload > 0) {
        return numLoaded / numPreload;
    } else {
        return 0;
    }
}

// Modernizr load stage 1
Modernizr.load([
    { 
        load: [
            'js/sizzle.js','js/dom.js','js/game.js',
            'js/intro-screen.screen.js'
        ],
        complete: function() {
            ocean.game.init();
            ocean.game.showScreen('intro-screen');
        }
    }
]);
//Modernizr load stage 2
Modernizr.load([
    { 
        load: [
            'loader!js/main-menu.screen.js','loader!js/board.js','loader!assets/tiles.png',
            'loader!js/game-screen.screen.js','loader!js/hiscore.screen.js','loader!js/display.js',
            'loader!assets/tiles-16.png', 'loader!js/ship.js'
        ]
    }
]);