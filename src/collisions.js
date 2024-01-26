import globals from "./globals.js"



function detectCollisions() {
    for (let i = 1; i < globals.sprites.length; i++) {

    }
   
}

function detectCollisionBetweenPlayerAndMapObstacles(){
    const player = globals.characters[0];
    const level = globals.level.data;

    if(level[player.fil][player.col] != ' '){
        return true;
    }
    else{
        return false;
    }

}
export {detectCollisionBetweenPlayerAndMapObstacles,detectCollisions}