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
    
    constructor(htmlElement: HTMLElement){
        const boundingClientRect = htmlElement.getBoundingClientRect();
        this.left = boundingClientRect.left
        this.top = boundingClientRect.top;
        this.right = boundingClientRect.right;
        this.bottom = boundingClientRect.bottom;

    };
    private left: number;
    private top: number;
    private right: number;
    private bottom: number;

    private getTop(){    
        return this.top;
    };
    private getLeft(){
        return this.left;
    }
    private getRight(){
        return this.right;
    }
    private getBottom() {
        return this.bottom
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

    // Methods to aid collision detection among many Colliders:
    public isClearlyLeftOf(x:number){
        return this.getRight() < x;
    }
    public isClearlyRightOf(x:number){
        return this.getLeft() > x;
    }
    public isClearlyAbove(y: number){
        return this.getBottom() < y;
    }
    public isClearlyBelow(y: number){
        return this.getTop() > y;
    }
    public mayBeLeftOf(x:number){
        return this.getLeft() <= x;
    }
    public mayBeRightOf(x:number){
        return this.getRight() >= x;
    }
    public mayBeAbove(y:number){
        return this.getTop() <= y;
    }
    public mayBeBelow(y:number){
        return this.getBottom() >= y;
    }
}