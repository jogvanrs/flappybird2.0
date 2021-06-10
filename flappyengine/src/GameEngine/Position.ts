
export class Position{

    public getPosition(object: HTMLDivElement){
        if(object != null || object != undefined){
            let x: number = object.getBoundingClientRect().x;
            let y: number = object.getBoundingClientRect().y;
        
            let pos = {x,y};
            return pos;
        }
        else{
            console.error("object does not exist");
        }
    }

    public setPosition(object: HTMLDivElement, xCoord: number, yCoord: number){
        object.style.left = yCoord + 'px';
        object.style.top = xCoord + 'px';

    }
}