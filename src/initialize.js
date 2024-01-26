import globals from "./globals.js"
import {Game, FPS,Tile,Characters,CharactersRepresentation} from "./constants.js"
import {Level,level1} from "./Level.js"
import Character from "./characters.js"
import { keydownHandler, keyupHandler } from "./events.js";

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
    globals.level = new Level(level1, Tile.SIZE_16)
  
}

function initplayer() {

    //Makes & Saves Level
   const player = new Character(Characters.PLAYER,8,7,CharactersRepresentation.PLAYER)
   globals.characters.push(player);
  
}
export function initEvents(){

    //Add the keyboard event listeners
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
}
export{initHTMLelements,initVars,initLevel,initplayer}