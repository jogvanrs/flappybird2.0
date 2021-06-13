import {Physics} from './Physics'

export class PhysicsWrapper{

    private gameObject :  HTMLElement;
    private hPosition: number = 0;
    private vPosition: number = 0;
    private hVelocity: number = 0;
    private vVelocity: number = 0;
    private hAcceleration: number = 0;
    private vAcceleration: number = 0;
    private physics: Physics;
    private time: number = (1000/1000)/24;

    constructor(object:string, hAcceleration: number, hVelocity: number,
                vAcceleration: number, vVelocity: number) {
        
        if(object !== null || object !== undefined){
           this.gameObject = document.getElementById(object)
           let tmp = this.gameObject.getBoundingClientRect() as DOMRect;
           this.hPosition = tmp.x;
           this.vPosition = tmp.y;
           this.hAcceleration = hAcceleration;
           this.hVelocity = hVelocity;
           this.vAcceleration = vAcceleration;
           this.vVelocity = vVelocity
           this.physics = new Physics(this.hPosition,this.vPosition,this.hVelocity,this.vVelocity,this.hAcceleration,this.vAcceleration)
        }
    }

    moveHorizontal(){

        this.physics.step(this.time);
        this.hPosition = this.physics.getHorizontalPosition();
        this.gameObject.style.left = this.hPosition + 'px'
    }

    moveVertical(){

        this.physics.step(this.time);
        this.vPosition = this.physics.getVerticalPosition();
        this.gameObject.style.top = this.vPosition + 'px'
    }

    setPosition(xCoord: number, yCoord: number){
        this.physics.setPosition(xCoord, yCoord);
    }

    setHorizontalAcceleration(hAcceleration: number){
        this.physics.setHorizontalAcceleration(hAcceleration);
    }

    setVerticalAcceleration(vAccelleration: number){
        this.physics.setVerticalAcceleration(vAccelleration);
    }

    setVerticalVelocity(speed: number){
        this.physics.setVerticalVelocity(speed)
    }

    setHorizontalVelocity(speed: number){
        this.physics.setHorizontalVelocity(speed)
    }


    getVerticalPosition(){
        return this.vPosition;
    }

    getHorizontalPosition(){
        return this.hPosition;
    }

    hyperMove(deltaX: number, deltaY: number){
        this.physics.relativeHyperMove(deltaX, deltaY)
    }
}