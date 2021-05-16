import assert from "assert";  // npm install @types/node --save-dev

export class Physics{
    x: number;  // Corresponding to a state of a rendered object
    y: number;  // Corresponding to a state of a rendered object
    hVelocity: number;
    vVelocity: number;
    hAcceleration: number;
    vAcceleration: number;

    constructor(x: number, y: number, hVelocity: number, vVelocity: number, hAcceleration: number, vAcceleration: number){
        this.x = x;
    }

    setPosition(x: number, y: number){
        // Not implemented yet
        assert(false);
    }
    getPosition(){
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
        // Not implemented yet
        assert(false);
    }

    setHorizontalVelocity(horizontalVelocity: number){
        // Not implemented yet
        assert(false);
    }getHorizontalVelocity(){
        // Not implemented yet
        assert(false);
    }

    setVerticalVelocity(verticalVelocity: number){
        // Not implemented yet
        assert(false);
    }

    setVerticalAcceleration(vAccelleration: number){
        // Not implemented yet
        assert(false);
    }

    setHorizontalAcceleration(hAcceleration: number){
        // Not implemented yet
        assert(false);
    }
}