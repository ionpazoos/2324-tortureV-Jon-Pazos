import globals from "./globals.js";
import { initLevel,initplayer,initKeyTimer } from "./initialize.js";
import { Characters, Game } from "./constants.js";
import {detectCollisionBetweenPlayerAndMapObstacles} from "./collisions.js"


export default function update() {
    switch (globals.gameState) {
        case Game.LOADING:
            console.log("Loading assets...");
            initLevel();
            initplayer();
            initKeyTimer();
            globals.gameState = Game.PLAYING;
            console.log("Assets loaded!");
            break;
        case Game.PLAYING:
            updateCharacters();
            updateKeyTime();
            break;
        }

}
function updateCharacters() {
    for (let i = 0; i < globals.characters.length; i++) {
        const character = globals.characters[i];
        updateCharacter(character);

    }
}
//Funcion que actualiza el TIME
function updateKeyTime(){

    //Incrementamos el contador de cambio de valor
    globals.keyTime.timeChangeCounter += globals.deltaTime;

    //Si ha pasado el tiempo necesario, cambiamos el valor del timer
    if (globals.keyTime.timeChangeCounter > globals.keyTime.timeChangeValue){

        globals.keyTime.value -= 0.2;
        
        if(globals.keyTime.value <= -1){
            globals.keyTime.value = 0;
        }
        //Reseteamos timeChangeCounter
        globals.keyTime.timeChangeCounter= 0;
    }

}

function updatePlayer(character){
    
if(globals.keyTime.value === 0){
    if (globals.action.moveDown) {
        console.log("Down");
            character.fil++;
            if(detectCollisionBetweenPlayerAndMapObstacles()){
                character.fil--;
            }
            
    }
    else if (globals.action.moveUp) {
        console.log("Up");
            character.fil--;
            if(detectCollisionBetweenPlayerAndMapObstacles()){
                character.fil++;
            }
    }
    else if (globals.action.moveLeft) {
        console.log("Left");
            character.col--;
            if(detectCollisionBetweenPlayerAndMapObstacles()){
                character.col++;
            }
    }
    else if (globals.action.moveRight) {
        console.log("Rigth");
            character.col++;
            if(detectCollisionBetweenPlayerAndMapObstacles()){
                character.col--;
            }
    }
    globals.keyTime.value = 0.2;
}
}
function updateCharacter(character){
   const type = character.id;
    switch(type){
        case Characters.PLAYER:
        
            updatePlayer(character);
            break;
    }
}

