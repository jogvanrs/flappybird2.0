// Game loop

export class GameLoop {

    platformInterval:any;

    /*
    Platformer functions
    */
    platformStart(functions:any):void {

        this.platformInterval = setInterval(functions, 24)
    }

    platformStop():void {

        clearInterval(this.platformInterval)
    }
}