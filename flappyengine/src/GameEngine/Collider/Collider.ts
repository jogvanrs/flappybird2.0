import React from 'react';
import { strict as assert } from 'assert'; // from https://tinyurl.com/393vux8e
export class Collider{
    private left: number;
    private top:number;
    private width: number;
    private height: number;
    constructor(htmlElement: HTMLElement|DOMRect){
        let domRect: DOMRect;
        if (htmlElement instanceof HTMLElement){
            domRect = htmlElement.getBoundingClientRect();
        } else {
            domRect = htmlElement;
        }
        assert(domRect);
        this.left = domRect.left;
        this.top = domRect.top;
        this.width = domRect.width;
        this.height = domRect.height;
    };

    private mayCollideWith(otherCollider: Collider){
        /*
        Return true if the bounding rectangles of
        this and otherCollider overlap.
         */
        assert(false);
        return false;
    }

    public collidesWith(mayCollideWith: Collider) {
    /*
    May be more elaborate in subclasses.
     */
    return this.mayCollideWith(otherCollider);
    }





}