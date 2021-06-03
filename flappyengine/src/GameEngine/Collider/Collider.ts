import React from 'react';
import { strict as assert } from 'assert'; // from https://tinyurl.com/393vux8e
export class Collider{
    left: number;
    top:number;
    width: number;
    height: number;
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
        this.height = domRect.height
;    };

}