
//Estados
const Game = {
    INVALID:        -1,
    LOADING:         0,
    PLAYING:         1,
    GAMEOVER:        2,

}

//Frames Per Second
const FPS = 30;



//Keyboard key codes
const Key = {
    LEFT: 37,
    UP:   38,
    RIGHT:39,
    DOWN: 40,
}



const Tile = {
    SIZE_16: 16, 

}

const Collision = {
    NO_COLLISION: 0,
    UP: 1,
    DOWN: 2,
    LEFT:3,
    RIGHT:4
}

const Obstacle = {
    BLOCK:                  '\u2B1C',

}
const CharactersRepresentation = {
    PLAYER:                    '\u{1F474}',
    SPIDER:                    '\u{1F577}',
    DINERO:                    '\u{1F4B5}',    
}
const Characters = {
    PLAYER:                    1,
    SPIDER:                    2, 
    DINERO:                    3,   
}




 
export {Game, FPS, Key, Tile,  Collision, Obstacle,Characters,CharactersRepresentation}