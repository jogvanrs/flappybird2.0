import { strict as assert } from 'assert';
import {Physics} from "../Physics/Physics"; // from https://tinyurl.com/393vux8e
/*
Colliders can be used to check if their corresponding gameObjects collide.
Can also be used to detect collisions with ground of ceiling,
whether or not those are considered gameObjects.

Note that any Collider collides with itself!
This is unavoidable, as two different object occupying the same space
should obviously collide.

So : Make sure to handle situations where objects
might be tested for collision with itself.
Testing for object equality between Collider objects is no solution.
Two separate Collider object might represent the same game object
 */
export class Collider{

    private HTMLElement: HTMLElement;
    
    constructor(htmlElement: HTMLElement){
        this.HTMLElement = htmlElement;

    };

    private getTop(){    
        return this.HTMLElement.getBoundingClientRect().top;
    };
    private getLeft(){
        return this.HTMLElement.getBoundingClientRect().left;
    }
    private getRight(){
        return this.HTMLElement.getBoundingClientRect().left + this.HTMLElement.getBoundingClientRect().width;
    }
    private getBottom() {
        return this.HTMLElement.getBoundingClientRect().top + this.HTMLElement.getBoundingClientRect().height
    }


    private mayCollideWith(otherCollider: Collider){

        /*
        Return true if the bounding rectangles of
        this and otherCollider overlap.
         */
        if (this.getTop() > otherCollider.getBottom()){
            return false;
        }
        if (this.getBottom() < otherCollider.getTop()){
            return false;
        }
        if (this.getLeft() > otherCollider.getRight()){
            return false;
        }
        if (this.getRight() < otherCollider.getLeft()){
            // Can be 'simplified', but easier to read in this form.
            return false;
        }
        return true;
    }

    public collidesWith(otherCollider: Collider) {
        /*
        May be more elaborate in subclasses.
         */
        return this.mayCollideWith(otherCollider);
    }
    public static collides(c1:Collider, c2:Collider){
        return c1.collidesWith(c2);
    }





}