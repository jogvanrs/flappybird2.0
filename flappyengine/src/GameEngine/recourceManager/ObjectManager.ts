import {Physics} from '../Physics/Physics'

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

    constructor(object:string, hAcceleration: number, hVelocity: number, vAcceleration: number, vVelocity: number){
        //this.gameObject = document.getElementById(object);
        if(object !== null || object !== undefined){
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
        console.log(this.gameObject);
        console.log('vacc ' + this.hVelocity)
        console.log()
    }

    moveX(){

        this.physics.step(this.time);
        this.x = this.physics.getHorizontalPosition();
        //console.log('velocity ' + this.physics.getHorizontalVelocity())
        this.gameObject.style.left = this.x + 'px'
    }

    moveY(){

        this.physics.step(this.time);
        this.y = this.physics.getVerticalPosition();
       // console.log('velocity ' + this.physics.getVerticalVelocity())
        this.gameObject.style.top = this.y + 'px'
    }

    setPosition(xCoord: number, yCoord: number){
        this.physics.setPosition(xCoord, yCoord);
        this.x = xCoord;
        this.y = yCoord;
    }

    setHorizontalAcceleration(hAcceleration: number){
        this.physics.setHorizontalAcceleration(hAcceleration);
    }

    setVerticalAcceleration(vAccelleration: number){
        this.physics.setVerticalAcceleration(vAccelleration);
    }

    getVerticalPosition(){
        return this.y;
    }

    getHorizontalPosition(){
        return this.x;
    }
}