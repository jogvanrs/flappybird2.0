export class Physics{
    private hPosition: number;  // Corresponding to a state of a rendered object
    private vPosition: number;  // Corresponding to a state of a rendered object
    private hVelocity: number;
    private vVelocity: number;
    private hAcceleration: number;
    private vAcceleration: number;

    constructor(hPosition: number, vPosition: number, hVelocity: number, vVelocity: number, hAcceleration: number, vAcceleration: number){
        this.hPosition = hPosition;
        this.vPosition = vPosition;
        this.hAcceleration = hAcceleration;
        this.hVelocity = hVelocity;
        this.vAcceleration = vAcceleration;
        this.vVelocity = vVelocity
    }

    setPosition(hPosition: number, vPosition: number){
        // Instantly change absolute position
        this.hPosition = hPosition;
        this.vPosition = vPosition;
    }

    relativeHyperMove(horizontalJump:number, verticalJump:number){
        // Instant 'hyperspace' move, changing position
        // without changing speed or acceleration.
        // relative to current position
        this.hPosition += horizontalJump;
        this.vPosition += verticalJump;
    }
    setHorizontalPosition(hPosition: number){
        this.hPosition = hPosition;

    }
    getHorizontalPosition(){
        return this.hPosition;
    }

    setVerticalPosition(vPosition: number){
        this.vPosition = vPosition;
    }
    getVerticalPosition(){
        return this.vPosition;
    }

    setHorizontalVelocity(horizontalVelocity: number){
        this.hVelocity = horizontalVelocity;
    }
    getHorizontalVelocity(){
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

    step(time:number){
        // Move through one game loop interval, according to Newton's laws.
        this.hPosition = this.hPosition + this.hVelocity*time + (this.hAcceleration*time**2)/2;
        this.vPosition = this.vPosition + this.vVelocity*time + (this.vAcceleration*time**2)/2;
        this.hVelocity += this.hAcceleration * time;
        this.vVelocity += this.vAcceleration * time;
    }
}