export class Sound {

    private Sound: HTMLAudioElement;

    constructor(audioPath: string, volume: number, loop: boolean){
        this.Sound = new Audio(audioPath);

        this.Sound.volume = volume;
        this.Sound.loop = loop;
    }

    getLoop(): boolean{
        return this.Sound.loop;
    }

    setLoop(loop: boolean){
        this.Sound.loop = loop;
    } 

    getVolume(){
        return this.Sound.volume;
    }

    setVolume(volume: number){
        this.Sound.volume = volume;
    }

    play(){

        this.stop();
        this.Sound.play()
    }

    stop(){
        
        this.Sound.pause();
        this.Sound.currentTime = 0;
    }
}