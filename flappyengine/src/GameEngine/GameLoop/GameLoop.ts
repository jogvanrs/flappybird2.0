// Game loop

export class GameLoop {

    interval:any;

    /*
    makes function calls after page is loaded
    */
    init(initfunc: any): void{
        window.onload = initfunc;

    }

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