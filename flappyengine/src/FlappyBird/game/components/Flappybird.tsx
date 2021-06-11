import Ground from "./groundSprite"
import PlayerSprite from './playerSprite'
import PipesFirst from './pipesFirst'
import PipesSecond from './pipesSecond'
import PipesThird from './pipesThird'
import GameOverScreen from './GameOverScreen'
import ScoreBoard from './ScoreBoard'

import './sprite.css';

import { PhysicsWrapper } from '../../../GameEngine/Physics/PhysicsWrapper'
import { GameLoop } from '../../../GameEngine/GameLoop/GameLoop'
import { Collider } from "../../../GameEngine/Collider/Collider";
import { EventHandler } from '../../../GameEngine/EventHandler/EventHandler'

function Flappybird() {
    return(
        <div id='gameWindow'>
            <PlayerSprite/>
            <PipesFirst />
            <PipesSecond />
            <PipesThird />
            <Ground />
            <ScoreBoard />
        </div>
    )
}

let gameLoop = new GameLoop();
let eventHandler = new EventHandler();


window.onload = function() {

    // Pipe spawnar frá høgru
    function spawnObject(div: string, px: number) {
        let object = document.getElementById(div);
        object.style.left = px + 'px';
    }

    let pipeOne = new spawnObject('pipesBothFirst', 500);
    let pipeTwo = new spawnObject('pipesBothSecond', 800);
    let pipeThree = new spawnObject('pipesBothThird', 1100);

    let run = false;

    let playerobject = new PhysicsWrapper('playerSprite' , 2, 2, 2, 20);
    let firtPipeObject = new PhysicsWrapper('pipesBothFirst', 1, -150, 1, 1);
    let secPipeObject = new PhysicsWrapper('pipesBothSecond', 1, -150, 1, 1);
    let thirdPipeObject = new PhysicsWrapper('pipesBothThird', 1, -150, 1, 1);

    eventHandler.keyPressDown('Space', event => {
        run = false;
        console.log("pressed");
        console.log(run);
        gameLoop.start(calledFunctions);
    });

    let playerdiv = document.getElementById('playerSprite')

    function calledFunctions() {

        playerobject.moveY();
        firtPipeObject.moveX();
        secPipeObject.moveX();
        thirdPipeObject.moveX();

        let playerCollider = new Collider(playerdiv); 
        let groundCollider = new Collider(document.getElementById('ground'));

        let firstLowerPipeCollider = new Collider(document.getElementById('pipeLowerFirst'));
        let firstUpperPipeCollider = new Collider(document.getElementById('pipeUpperFirst'));
        
        let secLowerPipeCollider = new Collider(document.getElementById('pipeLowerSecond'));
        let secUpperPipeCollider = new Collider(document.getElementById('pipeUpperSecond'));
        
        let thirdLowerPipeCollider = new Collider(document.getElementById('pipeLowerThird'));
        let thirdUpperPipeCollider = new Collider(document.getElementById('pipeUpperThird'));

        //playerobject.startmoveX();
      
        console.log('collide with ground ' +  playerCollider.collidesWith(groundCollider));
        console.log('collide with ground ' +  groundCollider.collidesWith(playerCollider));
        console.log('collide first pipe lower ' +  firstLowerPipeCollider.collidesWith(playerCollider));
        console.log('collide first pipe upper ' + firstUpperPipeCollider.collidesWith(playerCollider));
        console.log('collide second pipe lower ' + secLowerPipeCollider.collidesWith(playerCollider));
        console.log('collide second pipe upper ' + secUpperPipeCollider.collidesWith(playerCollider));
        console.log('collide third pipe lower ' + thirdLowerPipeCollider.collidesWith(playerCollider));
        console.log('collide third pipe upper ' + thirdUpperPipeCollider.collidesWith(playerCollider));

        function gameOver(){
            if( playerCollider.collidesWith(groundCollider) ||
                playerCollider.collidesWith(firstLowerPipeCollider) || playerCollider.collidesWith(firstUpperPipeCollider) ||
                playerCollider.collidesWith(secLowerPipeCollider) || playerCollider.collidesWith(secUpperPipeCollider) ||
                playerCollider.collidesWith(thirdLowerPipeCollider) || playerCollider.collidesWith(thirdUpperPipeCollider)) {
                    return true;
        }

    }    
    if(gameOver()){
            gameLoop.stop();
        }
    }
}

export default Flappybird;