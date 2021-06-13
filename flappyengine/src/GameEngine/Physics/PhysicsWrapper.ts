import {Physics} from './Physics'

export class PhysicsWrapper{

    private gameObject :  HTMLElement;
    private x: number = 0;
    private y: number = 0;
    private hVelocity: number = 0;
    private vVelocity: number = 0;
    private hAcceleration: number = 0;
    private vAcceleration: number = 0;
    private physics: Physics;
    private time: number = (1000/1000)/24;

    constructor(object:string, hAcceleration: number, hVelocity: number,
                vAcceleration: number, vVelocity: number) {
        
        if(object !== null && object !== undefined){
           this.gameObject = document.getElementById(object)
           let tmp = this.gameObject.getBoundingClientRect() as DOMRect;
           this.x = tmp.x;
           this.y = tmp.y;
           this.hAcceleration = hAcceleration;
           this.hVelocity = hVelocity;
           this.vAcceleration = vAcceleration;
           this.vVelocity = vVelocity
           this.physics = new Physics(this.x,this.y,this.hVelocity,this.vVelocity,this.hAcceleration,this.vAcceleration)
        }
    }

    moveX(){

        this.physics.step(this.time);
        this.x = this.physics.getHorizontalPosition();
        this.gameObject.style.left = this.x + 'px'
    }

    moveY(){

        this.physics.step(this.time);
        this.y = this.physics.getVerticalPosition();
        this.gameObject.style.top = this.y + 'px'
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
        return this.y;
    }

    getHorizontalPosition(){
        return this.x;
    }

    hyperMove(one: number, two: number){
        this.physics.hyperMove(one, two)
    }
}