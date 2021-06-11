// Game loop

export class GameLoop {

    interval:any;

    /*
    Platformer functions
    */
    start(functions:any):void {

        this.interval = setInterval(functions, 24)
    }

    stop():void {

        clearInterval(this.interval)
    }
}