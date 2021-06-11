import { strict as assert } from 'assert';
import {Physics} from "../Physics/Physics"; // from https://tinyurl.com/393vux8e
/*
Colliders can be used to check if their corresponding gameObjects collide.
Can also be used to detect collisions with ground of ceiling,
whether or not those are considered gameObjects.
 */
export class Collider{
    private left: number;
    private top: number;
    private width: number;
    private height: number;
    
    constructor(htmlElement: HTMLElement){
        let domRect = htmlElement.getBoundingClientRect();
        assert(domRect);
        this.left = domRect.left;
        this.top = domRect.top;
        this.width = domRect.width;
        this.height = domRect.height;
    };
    /*
    The collider does not move on its own.
    Please update its position from a Physics object.
     */
    public setPosition(physics: Physics){
        this.left = physics.getHorizontalPosition();
        this.top  = physics.getVerticalPosition();
    }
    public setLeft(left: number) {
        this.left = left;
    }
    public setTop(top: number) {
        this.top = top;
    }
    public updatePosition(htmlElement: HTMLElement) {
        let domRect = htmlElement.getBoundingClientRect();
        assert(domRect);
        this.left = domRect.left;
        this.top = domRect.top;
    }

    /*
    In case the size changes
     */
    public setSize(htmlElement: HTMLElement) {
        let domRect = htmlElement.getBoundingClientRect();
        assert(domRect);
        this.width = domRect.width;
        this.height = domRect.height;
    }

    private getTop(){
        return this.top;
    };
    private getLeft(){
        return this.left;
    }
    private getRight(){
        return this.left + this.width;
    }
    private getBottom() {
        return this.top + this.height;
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





}