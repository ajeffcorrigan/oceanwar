function WarShip(n,s){
    this.name = n;
    this.size = s;
    this.isSunk = false;
    var startx, starty, endx, endy, dir;

    this.setShipLoc = function(x,y,d) {
        startx = x;
        starty = y;
        dir = d;
        switch(d) {
            case 1:
                endx = startx;
                endy = starty + s;
                break;
            case 2:
                endy = starty;
                endx = startx - s;
                break;
            case 3:
                endx = startx;
                endy = starty - s;
                break;
            case 4:
                endy = starty;
                endx = startx + s;
                break;
        }
    }

    this.getShipLoc = function(){
        return {
            startx : startx,
            starty : starty,
            endx : endx,
            endy : endy
        }
    }

    this.isShipHit = function(x,y) {
      if (d == 1 || d == 3) {
          if(d==1) {
              for(i=starty, i<=endy, i++) {
                  if(i == y) return true;
              }             
          } else {
          }    
      } else {
          if(d==2) {
          } else {
          }
      }
    }
    
    registerHit = function(i) {
    }    

}