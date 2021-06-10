import React from 'react';
import { strict as assert } from 'assert'; // from https://tinyurl.com/393vux8e
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