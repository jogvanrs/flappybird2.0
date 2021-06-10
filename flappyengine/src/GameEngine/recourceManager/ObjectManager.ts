

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
}