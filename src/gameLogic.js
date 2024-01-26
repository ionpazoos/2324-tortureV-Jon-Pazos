import globals from "./globals.js";
import { initLevel,initplayer,initKeyTimer,initDineroAleatorio,initArañaEsquina} from "./initialize.js";
import { Characters, Game } from "./constants.js";
import {detectCollisionBetweencharacterAndMapObstacles, detectCollisions} from "./collisions.js"


export default function update() {
    switch (globals.gameState) {
        case Game.LOADING:
            console.log("Loading assets...");
            initLevel();
            initplayer();
            initKeyTimer();
            initDineroAleatorio();
            initArañaEsquina();
            globals.gameState = Game.PLAYING;
            console.log("Assets loaded!");
            break;
        case Game.PLAYING:
            updateCharacters();
            updateKeyTime();
            updatespiderTime();
            detectCollisions();
            updatelife();
            break;
        case Game.GAMEOVER:
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
function updatespiderTime(){

    //Incrementamos el contador de cambio de valor
    globals.spiderTime.timeChangeCounter += globals.deltaTime;

    //Si ha pasado el tiempo necesario, cambiamos el valor del timer
    if (globals.spiderTime.timeChangeCounter > globals.spiderTime.timeChangeValue){

        globals.spiderTime.value -= 0.2;
        
        if(globals.spiderTime.value <= -1){
            globals.spiderTime.value = 0;
        }
        //Reseteamos timeChangeCounter
        globals.spiderTime.timeChangeCounter= 0;
    }

}

function updatePlayer(character){
    
if(globals.keyTime.value === 0){
    if (globals.action.moveDown) {
        console.log("Down");
            character.fil++;
            if(detectCollisionBetweencharacterAndMapObstacles(character)){
                character.fil--;
            }
            
    }
    else if (globals.action.moveUp) {
        console.log("Up");
            character.fil--;
            if(detectCollisionBetweencharacterAndMapObstacles(character)){
                character.fil++;
            }
    }
    else if (globals.action.moveLeft) {
        console.log("Left");
            character.col--;
            if(detectCollisionBetweencharacterAndMapObstacles(character)){
                character.col++;
            }
    }
    else if (globals.action.moveRight) {
        console.log("Rigth");
            character.col++;
            if(detectCollisionBetweencharacterAndMapObstacles(character)){
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
        case Characters.SPIDER:
        
            updateAraña(character);
            break;
    }
}
function updatelife(){
    if(globals.life === 0){
        globals.gameState = Game.GAMEOVER;
    }
}
function updateAraña(character){
if(globals.spiderTime.value === 0){
    let movimiento = false;
    do{
    let direction = Math.floor(Math.random() * 5) ;
    console.log(direction);
    if(direction === 1){
        character.fil++;
        if(detectCollisionBetweencharacterAndMapObstacles(character)){
            character.fil--;
        }
        else{
            movimiento = true;
        }
    }
    else if(direction === 2){
        character.fil--;
        if(detectCollisionBetweencharacterAndMapObstacles(character)){
            character.fil++;
        }
        else{
            movimiento = true;
        }
    }
    else if(direction === 3){
        character.col--;
        if(detectCollisionBetweencharacterAndMapObstacles(character)){
            character.col++;
        }
        else{
            movimiento = true;
        }
        
    }
    else if(direction === 4){
        character.col++;
        if(detectCollisionBetweencharacterAndMapObstacles(character)){
            character.fil--;
        }
        else{
            movimiento = true;
        }
    }}while(movimiento === false)
    }
    globals.spiderTime.value = 0.2;
}

    


