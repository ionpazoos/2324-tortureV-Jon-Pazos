import globals from "./globals.js"


export default function render(){

     drawGame();

    }


function drawGame(){
    //Erases Screen
    globals.ctx.clearRect(0,0, globals.canvas.width, globals.canvas.height)
    globals.ctxHUD.clearRect(0, 0, globals.canvasHUD.width, globals.canvasHUD.height)

    drawMap();
    drawPlayer();



}

function drawMap(){
    for (let i = 0; i < globals.level.data.length; i++) {
        
        for (let j = 0; j < globals.level.data[i].length; j++) {
            const x = j * globals.level.blockSize;
            const y = i * globals.level.blockSize;
            
            globals.ctx.font = "14px emulogic"
            globals.ctx.fillStyle = "white"
            globals.ctx.fillText(globals.level.data[i][j], x, y);
        }
    }
}

function drawPlayer(){
    const player = globals.characters[0];
    globals.ctx.font = "14px emulogic"
            globals.ctx.fillStyle = "white"
            globals.ctx.fillText(player.text, player.col * globals.level.blockSize,player.fil * globals.level.blockSize);
}

