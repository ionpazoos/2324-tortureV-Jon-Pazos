 class Level {
    constructor(data,blockSize,offsety,offsetx){
        this.data     = data
        this.blockSize = blockSize
        this.offsety = offsety
        this.offsetx = offsetx
    }
}

const level1 = [
    ['\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C'],
    ['\u2B1C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\u2B1C'],
    ['\u2B1C', ' ', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', ' ', ' ', ' ', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', ' ', '\u2B1C'],
    ['\u2B1C', ' ', '\u2B1C', ' ', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', ' ', '\u2B1C', ' ', '\u2B1C'],
    ['\u2B1C', ' ', ' ', ' ', ' ', ' ', '\u2B1C', ' ', ' ', ' ', '\u2B1C', ' ', ' ', ' ', ' ', ' ', '\u2B1C'],
    ['\u2B1C', ' ', '\u2B1C', '\u2B1C', ' ', ' ', ' ', ' ', '\u2B1C', ' ', ' ', ' ', ' ', '\u2B1C', '\u2B1C', ' ', '\u2B1C'],
    ['\u2B1C', ' ', '\u2B1C', '\u2B1C', ' ', ' ', ' ', ' ', '\u2B1C', ' ', ' ', ' ', ' ', '\u2B1C', '\u2B1C', ' ', '\u2B1C'],
    ['\u2B1C', ' ', ' ', ' ', ' ', ' ', '\u2B1C', ' ', ' ', ' ', '\u2B1C', ' ', ' ', ' ', ' ', ' ', '\u2B1C'],
    ['\u2B1C', ' ', ' ', '\u2B1C', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', '\u2B1C', ' ', ' ', '\u2B1C'],
    ['\u2B1C', ' ', '\u2B1C', '\u2B1C', ' ', '\u2B1C', ' ', ' ', ' ', ' ', ' ', '\u2B1C', ' ', '\u2B1C', '\u2B1C', ' ', '\u2B1C'],
    ['\u2B1C', ' ', ' ', ' ', ' ', ' ', ' ', '\u2B1C', '\u2B1C', '\u2B1C', ' ', ' ', ' ', ' ', ' ', ' ', '\u2B1C'],
    ['\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C', '\u2B1C']
]

    export {Level, level1}