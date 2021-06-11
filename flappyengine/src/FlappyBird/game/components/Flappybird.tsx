import Ground from "./groundSprite";
import PlayerSprite from './playerSprite';
import PipesFirst from './pipesFirst';
import PipesSecond from './pipesSecond';
import PipesThird from './pipesThird';
import GameOverScreen from './GameOverScreen'
import ScoreBoard from './ScoreBoard'
import { ObjectManager } from '../../../GameEngine/recourceManager/ObjectManager'
import { GameLoop } from '../../../GameEngine/GameLoop/GameLoop'
import './sprite.css';
import { Collider } from "../../../GameEngine/Collider/Collider";
import { EventHandler } from '../../../GameEngine/EventHandler/EventHandler'

function Flappybird() {
    return(
        <div id='gameWindow'>

                <PlayerSprite/>
                <PipesFirst />
                <Ground></Ground>
        </div>
    )
}


let gameLoop = new GameLoop();
let eventHandler = new EventHandler();


window.onload = function() {

// Pipe spawnar frá høgru
let test = document.getElementById('pipesBothFirst');
test.style.left = 500 + 'px';
let run = false;
 
let playerobject = new ObjectManager('playerSprite' , 2, 2, 2, 20);
let pipeObject = new ObjectManager('pipesBothFirst', 1, -150, 1, 1);

  eventHandler.keyPressDown('Space', event => {
        run = false;
        console.log("pressed")
        console.log(run)
        gameLoop.start(calledFunctions);
    });

    let playerdiv = document.getElementById('playerSprite')

function calledFunctions() {

    playerobject.moveY();
    pipeObject.moveX();


let playerCollider = new Collider(playerdiv); 
let pipe1Collider = new Collider(document.getElementById('pipeLowerFirst'));
let groundCollider = new Collider(document.getElementById('ground'));
let pipe1uppCollider = new Collider(document.getElementById('pipeUpperFirst'))
    //playerobject.startmoveX();

        //playerobject.startmoveX();
    console.log('collide ' +  playerCollider.collidesWith(groundCollider))
    console.log('collide ' +  groundCollider.collidesWith(playerCollider))
    console.log('collide2 ' +  pipe1Collider.collidesWith(playerCollider))

    function gameOver(){
    if(playerCollider.collidesWith(pipe1Collider) || 
    playerCollider.collidesWith(groundCollider) || 
    playerCollider.collidesWith(pipe1uppCollider)){
       return true;
    
    }
   }    
   if(gameOver()){
        gameLoop.stop();
    }
}
}

export default Flappybird;