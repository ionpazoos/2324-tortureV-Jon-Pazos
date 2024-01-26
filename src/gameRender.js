import { Game } from "./constants.js";
import globals from "./globals.js"


export default function render(){
    switch(globals.gameState){
        case Game.LOADING:
            break;
        case Game.PLAYING:
            drawGame();
                break;
        case Game.GAMEOVER:
            drawGameOver();
                break;
    }


    

    }


function drawGame(){
    //Erases Screen
    globals.ctx.clearRect(0,0, globals.canvas.width, globals.canvas.height)
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height)

    drawMap();
    drawCharacters();
    drawHud();
   



}

function drawMap(){
    for (let i = 0; i < globals.level.data.length; i++) {
        
        for (let j = 0; j < globals.level.data[i].length; j++) {
            const x = j * globals.level.blockSize + globals.level.offsetx ;
            const y = i * globals.level.blockSize + globals.level.offsety;
            
            globals.ctx.font = "14px emulogic"
            globals.ctx.fillStyle = "white"
            globals.ctx.fillText(globals.level.data[i][j], x, y);
        }
    }
}

function drawCharacters(){
    for(let i = 0;i< globals.characters.length;i++){
        const character = globals.characters[i];
        globals.ctx.font = "14px emulogic"
        
       globals.ctx.fillText(character.text, character.col * globals.level.blockSize + globals.level.offsety,character.fil * globals.level.blockSize + globals.level.offsetx);
    }
   
}

function drawHud(){
  
    globals.ctxHUD.font = "16px emulogic"
    globals.ctxHUD.fillStyle = "white"
    globals.ctxHUD.fillText("SCORE",30,globals.canvasHUD.height/2);
    globals.ctxHUD.fillText(globals.score,globals.canvasHUD.width/2,globals.canvasHUD.height/2);

    drawlife();

}

function drawlife(){

    globals.ctxHUD.font = "16px emulogic"
    globals.ctxHUD.fillStyle = "white"
    let offset = 0;
    for(let i = 0;i<globals.life;i++){
        globals.ctxHUD.fillText("\u{1F49A}", 180 + offset,globals.canvasHUD.height/2);
        offset += 20;
    }

}
function drawGameOver(){
    globals.ctx.font = "16px emulogic"
    globals.ctx.fillStyle = "RED"
    globals.ctx.fillText("GAME OVER",(globals.canvas.width/2) - 50,globals.canvas.height/2);
}
