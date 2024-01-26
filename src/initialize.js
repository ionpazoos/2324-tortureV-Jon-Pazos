import globals from "./globals.js"
import {Game, FPS,Tile,Characters,CharactersRepresentation} from "./constants.js"
import {Level,level1} from "./Level.js"
import Character from "./characters.js"
import { keydownHandler, keyupHandler } from "./events.js";
import Timer from "./Timer.js";

function initHTMLelements(){
    //Canvas
    globals.canvas = document.getElementById('gameScreen');

    //Context
    globals.ctx = globals.canvas.getContext('2d');

    //Canvas HUD
    globals.canvasHUD = document.getElementById('gameHUD');

    //Context HUD
    globals.ctxHUD = globals.canvasHUD.getContext('2d');

    //Anti-Aliasing Removal
    globals.ctx.imageSmoothingEnabled = false;

    //Debugger Text Box
    globals.txtPruebas = document.getElementById('txtPruebas');

}

function initVars() {

    //Inits Game Time Management Variables
    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS;

    //Inits Game State
    globals.gameState = Game.LOADING;

    globals.action = {
        moveLeft:   false,
        moveRight:  false,
        fire:       false,
        jump:       false
    }
    
}

function initLevel() {

    //Makes & Saves Level
    globals.level = new Level(level1, Tile.SIZE_16,30,30)
  
}

function initplayer() {

    //Makes & Saves Level
   const player = new Character(Characters.PLAYER,8,7,CharactersRepresentation.PLAYER)
   globals.characters.push(player);
  
}
function initDinero(fil,col) {

    //Makes & Saves Level
   const dinero = new Character(Characters.DINERO,fil,col,CharactersRepresentation.DINERO)
   globals.characters.push(dinero);
  
}
function initAraña(fil,col) {

    //Makes & Saves Level
   const dinero = new Character(Characters.SPIDER,fil,col,CharactersRepresentation.SPIDER)
   globals.characters.push(dinero);
  
}
function initArañaEsquina(){
    let esquina1 = [1,1];
    let esquina2 = [15,1];
    let esquina3 = [1,10];
    let esquina4 = [15,10];

    let esquinas = [esquina1,esquina2,esquina3,esquina4];
    let esquinasel = [0,0];
    esquinasel = esquinas[Math.floor(Math.random() * esquinas.length)];
    initAraña(esquinasel[0],esquinasel[1]);

}
function initKeyTimer(){
    globals.keyTime = new Timer(0.2, 0.2);
    globals.spiderTime = new Timer(0.2, 0.2)


}
function initDineroAleatorio(){
    let randomFil, randomCol;
    const level = globals.level.data;
    do {
        randomFil = Math.floor(Math.random() * level.length) ;
        randomCol = Math.floor(Math.random() * level[0].length ) ;
    } while (level[randomFil][randomCol] != ' ');
     initDinero(randomCol,randomFil);
}
export function initEvents(){

    //Add the keyboard event listeners
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
}

export{initHTMLelements,initVars,initLevel,initplayer,initKeyTimer,initDineroAleatorio,initArañaEsquina}