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

    // Variables for resetting pipes
    let pipeOne = new spawnObject('pipesBothFirst', 500);
    let pipeTwo = new spawnObject('pipesBothSecond', 800);
    let pipeThree = new spawnObject('pipesBothThird', 1100);

    // Object instances with parameter for horizontal/vertical acceleration and velocity
    let playerobject = new PhysicsWrapper('playerSprite' , 2, 2, 2, 20);
    let firstPipeObject = new PhysicsWrapper('pipesBothFirst', 0, -100, 0, 1);
    let secPipeObject = new PhysicsWrapper('pipesBothSecond', 0, -100, 0, 1);
    let thirdPipeObject = new PhysicsWrapper('pipesBothThird', 0, -100, 0, 1);
    
    let run: boolean = true; // Boolean for running functionality once
    let scoreCounter: number = 0; // Counter for when bird passes pillar

    // Input handler for jumping
    eventHandler.keyPressDown('Space', event => {
        
        // Starts all functionality when 'space' is entered first time, runs once
        if(run) {
            gameLoop.start(calledFunctions);
            run = false;
        }
        // Update position of bird
        playerobject.setPosition(playerobject.getHorizontalPosition() + 0, playerobject.getVerticalPosition() - 35)
        console.log("pressed");
        console.log(run);
        
    });

    let playerdiv = document.getElementById('playerSprite');
    playerdiv.style.top = '35%';
    
    // Functions for moving, checking collision and game over screen
    function calledFunctions() {

        playerobject.moveY();
        firstPipeObject.moveX();
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
      
        console.log('collide with ground ' +  playerCollider.collidesWith(groundCollider));
        console.log('collide with ground ' +  groundCollider.collidesWith(playerCollider));
        console.log('collide first pipe lower ' +  firstLowerPipeCollider.collidesWith(playerCollider));
        console.log('collide first pipe upper ' + firstUpperPipeCollider.collidesWith(playerCollider));
        console.log('collide second pipe lower ' + secLowerPipeCollider.collidesWith(playerCollider));
        console.log('collide second pipe upper ' + secUpperPipeCollider.collidesWith(playerCollider));
        console.log('collide third pipe lower ' + thirdLowerPipeCollider.collidesWith(playerCollider));
        console.log('collide third pipe upper ' + thirdUpperPipeCollider.collidesWith(playerCollider));

        let pipeOneLowerDiv = document.getElementById('pipeLowerFirst')
        let pipeOneUpperDiv = document.getElementById('pipeUpperFirst')
        let pipeTwoLowerDiv = document.getElementById('pipeLowerSecond')
        let pipeTwoUpperDiv = document.getElementById('pipeUpperSecond')
        let pipeThreeLowerDiv = document.getElementById('pipeLowerThird')
        let pipeThreeUpperDiv = document.getElementById('pipeUpperThird')

        let scoreBoardDiv = document.getElementById('scoreBoard')

        // Resets pipes according to which pillar is infront of itself for a consistent look
        if(firstPipeObject.getHorizontalPosition() < -60) {
                
            scoreCounter++;
            firstPipeObject.setPosition(thirdPipeObject.getHorizontalPosition() + 300, thirdPipeObject.getVerticalPosition());
            let rand= Math.random() * 150 ;
            pipeOneLowerDiv.style.bottom = rand+ 'px'
            pipeOneUpperDiv.style.bottom = rand + 350 + 'px';
        }

        if(secPipeObject.getHorizontalPosition() < -60) {
                
            scoreCounter++;
            secPipeObject.setPosition(firstPipeObject.getHorizontalPosition() + 300, firstPipeObject.getVerticalPosition());
            let rand= Math.random() * 150;
            pipeTwoLowerDiv.style.bottom = rand + 'px'
            pipeTwoUpperDiv.style.bottom = rand + 350 + 'px';
        }

        if(thirdPipeObject.getHorizontalPosition() < -60) {
            
            scoreCounter++;
            thirdPipeObject.setPosition(secPipeObject.getHorizontalPosition() + 300, secPipeObject.getVerticalPosition());
            let rand= Math.random() * 150;
            pipeThreeLowerDiv.style.bottom = rand + 'px'
            pipeThreeUpperDiv.style.bottom = rand + 350 + 'px';
            
        }   
        scoreBoardDiv.innerHTML = 'Score: ' + scoreCounter;     

    function gameOver(){
        if( playerCollider.collidesWith(groundCollider) ||
            playerCollider.collidesWith(firstLowerPipeCollider) || playerCollider.collidesWith(firstUpperPipeCollider) ||
            playerCollider.collidesWith(secLowerPipeCollider) || playerCollider.collidesWith(secUpperPipeCollider) ||
            playerCollider.collidesWith(thirdLowerPipeCollider) || playerCollider.collidesWith(thirdUpperPipeCollider)) 
            {
                return true;
        }
    }  

    if(gameOver()){
            gameLoop.stop();
        }
}
}

export default Flappybird;