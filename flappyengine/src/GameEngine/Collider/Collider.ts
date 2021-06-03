import React from 'react';
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
    };

}