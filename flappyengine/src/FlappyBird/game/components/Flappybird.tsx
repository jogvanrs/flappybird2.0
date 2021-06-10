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
        </div>
    )
}


let gameLoop = new GameLoop();
let eventHandler = new EventHandler();
let run = false;

window.onload = function() {

    eventHandler.keyPressDown('Space', event => {
        run = true;
    
    });
        while (run) {
        gameLoop.platformStart(calledFunctions());
    }
    // Pipe spawnar frá høgru
    let test = document.getElementById('pipesBothFirst');

    test.style.left = 500 + 'px';

    let playerobject = new ObjectManager('playerSprite' , 2, 2, 2, 2);
    let pipeObject = new ObjectManager('pipesBothFirst', 0, -45, 0, 0);

    function calledFunctions() {

        //playerobject.startmoveX();

        playerobject.moveY();
        pipeObject.moveX();
        
        let playerCollider = new Collider(document.getElementById('playerSprite')) 
        let pipe1Collider = new Collider(document.getElementById('pipeLowerFirst'))

        playerCollider.collidesWith(pipe1Collider)
        console.log('collide ' +  playerCollider.collidesWith(pipe1Collider))
        console.log('collide2 ' +  pipe1Collider.collidesWith(playerCollider))
    
        if (pipe1Collider.collidesWith(playerCollider) ) {

                gameLoop.platformStop();
        }
    }
}

export default Flappybird;