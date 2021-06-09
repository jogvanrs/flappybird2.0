
export class Position{

    public getPosition(object: HTMLDivElement){
        if(object != null || object != undefined){
            let x = object.getBoundingClientRect().x;
            let y = object.getBoundingClientRect().y;
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