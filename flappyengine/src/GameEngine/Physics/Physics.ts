import assert from 'assert'

export class Physics{
    x: number;  // Corresponding to a state of a rendered object
    y: number;  // Corresponding to a state of a rendered object
    hVelocity: number;
    vVelocity: number;
    hAcceleration: number;
    vAcceleration: number;

    constructor(x: number, y: number, hVelocity: number, vVelocity: number, hAcceleration: number, vAcceleration: number){
        this.x = x;
        this.y = y;
        this.hAcceleration = hAcceleration;
        this.hVelocity = hVelocity;
        this.vAcceleration = vAcceleration;
        this.vVelocity = vVelocity
    }

    setPosition(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    setHorizontalPosition(x: number){
        this.x = x;
    }
    getHorizontalPosition(){
        return this.x;
    }

    setVerticalPosition(y: number){
        this.y = y;
    }
    getVerticalPosition(){
        // Most likely only needed for testing
        return this.y;
    }

    setHorizontalVelocity(horizontalVelocity: number){
        this.hVelocity = horizontalVelocity;
    }getHorizontalVelocity(){
        // Most likely only needed for testing
        return this.hVelocity;
    }

    setVerticalVelocity(verticalVelocity: number){
        this.vVelocity = verticalVelocity;
    }
    getVerticalVelocity(){
        return this.vVelocity;
    }

    setVerticalAcceleration(vAccelleration: number){
        this.vAcceleration = vAccelleration;
    }
    getVerticalAcceleration(){
        // Most likely only needed for testing
        return this.vAcceleration;
    }

    setHorizontalAcceleration(hAcceleration: number){
        this.hAcceleration = hAcceleration;
    }
    getHorizontalAcceleration(){
        // Most likely only needed for testing
        return this.hAcceleration;
    }

    hyperMove(x:number, y:number){
        // Instant 'hyperspace' move, changing position
        // without changing speed or acceleration.
        this.x += x;
        this.y +=y;
    }

    step(loopInterval:number){
        // Move through one game loop interval, according to Newton's laws.
        console.log("Please implement Physics.step()")
    }


}