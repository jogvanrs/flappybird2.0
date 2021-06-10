import {Physics} from '../Physics/Physics'

export class ObjectManager{

    private gameObject :  HTMLElement;
    private x: number = 0;
    private y: number = 0;
    private hVelocity: number = 0;
    private vVelocity: number = 0;
    private hAcceleration: number = 0;
    private vAcceleration: number = 0;
    private physics: Physics;

    constructor(object:string, hAcceleration: number, hVelocity: number, vAcceleration: number, vVelocity: number){
        //this.gameObject = document.getElementById(object);
        if(object != null || object != undefined){
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

    
    

    

    startmove(){
        this.physics.step((1000/1000)/24);
        this.x = this.physics.getHorizontalPosition();
        console.log('velocity ' + this.physics.getHorizontalVelocity())
        this.gameObject.style.top = this.x + 'px'
        
        console.log('x= ' + this.x)
    }



 
}