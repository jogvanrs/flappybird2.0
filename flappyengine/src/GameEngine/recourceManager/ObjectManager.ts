

export class ObjectManager{

    private static gameObject : {[object: string]: HTMLDivElement} = {};

    public static loadObject(name: string, id: string){
        if(name != null && id != null){
            ObjectManager.gameObject[name] = document.getElementById(id) as HTMLDivElement;
        }
        
    }

    public static getObject(name:string){
        if(ObjectManager.gameObject[name] !== undefined){
            return ObjectManager.gameObject[name];
        }
         else{
            console.error("object does not exist");
        }
    }

    public static getPosition(name:string){
        console.log(name);
        if(ObjectManager.gameObject[name] !== undefined){
            let y =  ObjectManager.gameObject[name].getBoundingClientRect().left;
            let x = ObjectManager.gameObject[name].getBoundingClientRect().top;
            let pos = {x,y};
            return pos;
        }
        else{
            console.error("object does not exist");
        }

    }
    
}