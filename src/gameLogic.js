import globals from "./globals.js";
import { initLevel,initplayer } from "./initialize.js";
import { Characters, Game } from "./constants.js";


export default function update() {
    switch (globals.gameState) {
        case Game.LOADING:
            console.log("Loading assets...");
            initLevel();
            initplayer();
            globals.gameState = Game.PLAYING;
            console.log("Assets loaded!");
            break;
        case Game.PLAYING:
            updateCharacters();
            break;
        }

}
function updateCharacters() {
    for (let i = 0; i < globals.characters.length; i++) {
        const character = globals.characters[i];
        updateCharacter(character);

    }
}

function updatePlayer(character){
    console.log(globals.action.moveDown);

    if (globals.action.moveDown) {
        console.log("down");
            character.fil++;
    }
    else if (globals.action.moveUp) {
        console.log("Up");
            character.fil--;
    }
    else if (globals.action.moveLeft) {
        console.log("Left");
            character.col--;
    }
    else if (globals.action.moveRight) {
        console.log("Rigth");
            character.col++;
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

