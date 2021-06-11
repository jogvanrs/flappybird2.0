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
            <GameOverScreen />
        </div>
    )
}

function movePlayer(player: PhysicsWrapper){
    player.setVerticalVelocity(-100)
}
        
let gameLoop = new GameLoop();
let eventHandler = new EventHandler();

window.onload = function() {
    let gameOverScreen = document.getElementById("gameover")
    gameOverScreen.style.display = "none"
    
    // Pipe spawnar frá høgru
    function spawnObject(div: string, px: number) {
        let object = document.getElementById(div);
        object.style.left = px + 'px';
    }

    // Variables for setting pipes
    spawnObject('pipesBothFirst', 500);
    spawnObject('pipesBothSecond', 800);
    spawnObject('pipesBothThird', 1100);

    // Object instances with parameter for horizontal/vertical acceleration and velocity
    let playerobject = new PhysicsWrapper('playerSprite' , 2, 2, 60, 20);
    let firstPipeObject = new PhysicsWrapper('pipesBothFirst', 0, -100, 0, 1);
    let secPipeObject = new PhysicsWrapper('pipesBothSecond', 0, -100, 0, 1);
    let thirdPipeObject = new PhysicsWrapper('pipesBothThird', 0, -100, 0, 1);

    playerobject.setPosition(0,250);
    
    let run = true; // Boolean for running functionality once
    let scoreCounter = 0; // Counter for when bird passes pillar

    // Input handler for jumping
    eventHandler.keyPressDown('Space', event => {
        
        // Starts all functionality when 'space' is entered first time, runs once
        if(run) {
            gameLoop.start(calledFunctions);
            run = false;
        }

        // Update position of bird
        movePlayer(playerobject);
    });

    let playerdiv = document.getElementById('playerSprite');
    playerdiv.style.top = '35%';
    
    // Functions for moving, checking collision and game over screen
    function calledFunctions() {

        playerobject.moveY();
        firstPipeObject.moveX();
        secPipeObject.moveX();
        thirdPipeObject.moveX();

        let pipeOneLowerDiv = document.getElementById('pipeLowerFirst');
        let pipeOneUpperDiv = document.getElementById('pipeUpperFirst');
        let pipeTwoLowerDiv = document.getElementById('pipeLowerSecond');
        let pipeTwoUpperDiv = document.getElementById('pipeUpperSecond');
        let pipeThreeLowerDiv = document.getElementById('pipeLowerThird');
        let pipeThreeUpperDiv = document.getElementById('pipeUpperThird');
        let scoreBoardDiv = document.getElementById('scoreBoard');
        let groundDiv = document.getElementById('ground');

        let playerCollider = new Collider(playerdiv); 
        let groundCollider = new Collider(groundDiv);

        let firstLowerPipeCollider = new Collider(pipeOneLowerDiv);
        let firstUpperPipeCollider = new Collider(pipeOneUpperDiv);
        
        let secLowerPipeCollider = new Collider(pipeTwoLowerDiv);
        let secUpperPipeCollider = new Collider(pipeTwoUpperDiv);
        
        let thirdLowerPipeCollider = new Collider(pipeThreeLowerDiv);
        let thirdUpperPipeCollider = new Collider(pipeThreeUpperDiv);

        let gap = 350;
        let randBuffer = 150;

        // Resets pipes according to which pillar is infront of itself for a consistent look
        if(firstPipeObject.getHorizontalPosition() < -60) {
                
            scoreCounter++;
            firstPipeObject.setPosition(thirdPipeObject.getHorizontalPosition() + 300, thirdPipeObject.getVerticalPosition());
            let rand= Math.random() * randBuffer ;
            pipeOneLowerDiv.style.bottom = rand + 'px'
            pipeOneUpperDiv.style.bottom = rand + gap + 'px';
        }

        if(secPipeObject.getHorizontalPosition() < -60) {
                
            scoreCounter++;
            secPipeObject.setPosition(firstPipeObject.getHorizontalPosition() + 300, firstPipeObject.getVerticalPosition());
            let rand= Math.random() * randBuffer;
            pipeTwoLowerDiv.style.bottom = rand + 'px'
            pipeTwoUpperDiv.style.bottom = rand + gap + 'px';
        }

        if(thirdPipeObject.getHorizontalPosition() < -60) {
            
            scoreCounter++;
            thirdPipeObject.setPosition(secPipeObject.getHorizontalPosition() + 300, secPipeObject.getVerticalPosition());
            let rand= Math.random() * randBuffer;
            pipeThreeLowerDiv.style.bottom = rand + 'px'
            pipeThreeUpperDiv.style.bottom = rand + gap + 'px';
            
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
        gameOverScreen.style.display = "block";
        let gameDeathScore = document.getElementById('deathScore');
        let gameHighScore = document.getElementById('highScore');

        gameDeathScore.innerHTML = 'Score: ' + scoreCounter;

        if (gameDeathScore.innerHTML > gameHighScore.innerHTML){
             gameHighScore.innerHTML = 'HighScore: ' + scoreCounter;
        }
            gameLoop.stop();
        }
}
}

export default Flappybird;