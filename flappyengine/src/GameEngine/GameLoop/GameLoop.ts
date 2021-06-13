// Game loop

export class GameLoop {

    interval:NodeJS.Timeout;

    /*
    makes function calls after page is loaded
    */
    init(initfunc: any): void{
        window.onload = initfunc;

    }

    /*
    Platformer functions
    */
    start(functions:any, interval:number):void {

        this.interval = setInterval(functions, interval)
    }

    stop():void {

        clearInterval(this.interval)
    }
}