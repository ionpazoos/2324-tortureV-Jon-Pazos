import { Characters, Game } from "./constants.js";
import globals from "./globals.js"
import { initDineroAleatorio } from "./initialize.js";



function detectCollisions() {
    for (let i = 1; i < globals.characters.length; i++) {
        const character = globals.characters[i];
        detectCollisionBetweenPlayerAndCharacters(character);
    }
   
}

function detectCollisionBetweencharacterAndMapObstacles(character){
    const player = character;
    const level = globals.level.data;

    if(level[player.fil][player.col] != ' '){
        return true;
    }
    else{
        return false;
    }

}
function detectCollisionBetweenPlayerAndCharacters(character){
    const player = globals.characters[0];
    const level = globals.level.data;

    
    if(player.fil === character.fil && character.col === player.col){
        switch(character.id){
            case Characters.DINERO:
                globals.score += 100;
                const indexSpriteRemove1 = globals.characters.indexOf(character);
                globals.characters.splice(indexSpriteRemove1, 1);
                 initDineroAleatorio();
                break;
                case Characters.SPIDER:
                    globals.life--;
                    globals.characters = [];
                    globals.gameState = Game.LOADING;
                    break;
            default:
                break;
        }
    }

}
export {detectCollisionBetweencharacterAndMapObstacles,detectCollisions}