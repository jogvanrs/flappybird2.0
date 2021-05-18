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
        // Not implemented yet
        assert(false);
    }

    setHorizontalPosition(x: number){
        // Not implemented yet
        assert(false);
    }
    getHorizontalPosition(){
        return this.x;
    }

    setVerticalPosition(y: number){
        // Not implemented yet
        assert(false);
    }
    getVerticalPosition(){
        // Most likely only needed for testing
        return this.y;
    }

    setHorizontalVelocity(horizontalVelocity: number){
        // Not implemented yet
        assert(false);
    }getHorizontalVelocity(){
        // Most likely only needed for testing
        return this.hVelocity;
    }

    setVerticalVelocity(verticalVelocity: number){
        // Not implemented yet
        assert(false);
    }
    getVerticalVelocity(){
        return this.vVelocity;
    }

    setVerticalAcceleration(vAccelleration: number){
        // Not implemented yet
        assert(false);
    }
    getVerticalAcceleration(){
        // Most likely only needed for testing
        return this.vAcceleration;
    }

    setHorizontalAcceleration(hAcceleration: number){
        // Not implemented yet
        assert(false);
    }
    getHorizontalAcceleration(){
        // Most likely only needed for testing
        return this.hAcceleration;
    }
}