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
import { Sound } from '../../../GameEngine/SoundManager/Sound'

// Parts of the Flappybird component is reused from previous project found on github : https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/Flappybird.tsx
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

let gameLoop = new GameLoop();
let eventHandler = new EventHandler();

gameLoop.init(FlappyBirdGame);

function FlappyBirdGame() {

    let wingSound = new Sound(process.env.PUBLIC_URL + './sound/wing.wav', 1, false);
    let dieSound = new Sound(process.env.PUBLIC_URL + './sound/die.wav', 1, false);
    let pointSound = new Sound(process.env.PUBLIC_URL + './sound/point.wav', 1, false);

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
    let playerObject = new PhysicsWrapper('playerSprite' , 2, 2, 60, 20);
    let firstPipeObject = new PhysicsWrapper('pipesBothFirst', 0, -100, 0, 1);
    let secPipeObject = new PhysicsWrapper('pipesBothSecond', 0, -100, 0, 1);
    let thirdPipeObject = new PhysicsWrapper('pipesBothThird', 0, -100, 0, 1);

    playerObject.setPosition(0,250);

    let playerdiv = document.getElementById('playerSprite');
    
    function initialState(){  
        // Variables for setting pipes

        firstPipeObject.setPosition(500,firstPipeObject.getHorizontalPosition());
        secPipeObject.setPosition(800, secPipeObject.getHorizontalPosition());
        thirdPipeObject.setPosition(1100, thirdPipeObject.getHorizontalPosition());
        playerObject.setPosition(0,250);
        gameOverScreen.style.display = "none";
        run = true;
        wingSound.setVolume(1);

        scoreCounter = 0;
    }

    function movePlayer(player: PhysicsWrapper){
        player.setVerticalVelocity(-100)
        wingSound.play();
    }
    
    let run = true; // Boolean for running functionality once
    let scoreCounter = 0; // Counter for when bird passes pillar

    // Input handler for jumping
    eventHandler.keyPressDown('Space', event => {
        
        // Starts all functionality when 'space' is entered first time, runs once
        if(run) {
            gameLoop.start(calledFunctions, 1000/60);
            run = false;
        }

        // Update position of bird
        movePlayer(playerObject);
    });

    // Functions for moving, checking collision and game over screen
    function calledFunctions() {

        playerObject.moveY();
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

        //set the gap between pipes
        let gap = 350;

        // used to randomize where on y-axis the pipes will 'respawn'
        let randBuffer = 150;

        //when the pipes position is 60 px of the screen from the left hand side, they should be moved
        let outOfBoundsLeft = -60;

        //space between pipes
        let pipeSpace = 300;

        // Resets pipes according to which pillar is infront of itself for a consistent look
        if(firstPipeObject.getHorizontalPosition() < outOfBoundsLeft) {
                
            scoreCounter++;
            pointSound.play();
            firstPipeObject.setPosition(thirdPipeObject.getHorizontalPosition() + pipeSpace, thirdPipeObject.getVerticalPosition());
            let rand= Math.random() * randBuffer ;
            pipeOneLowerDiv.style.bottom = rand + 'px'
            pipeOneUpperDiv.style.bottom = rand + gap + 'px';
        }

        if(secPipeObject.getHorizontalPosition() < outOfBoundsLeft) {
                
            scoreCounter++;
            pointSound.play();
            secPipeObject.setPosition(firstPipeObject.getHorizontalPosition() + pipeSpace, firstPipeObject.getVerticalPosition());
            let rand= Math.random() * randBuffer;
            pipeTwoLowerDiv.style.bottom = rand + 'px'
            pipeTwoUpperDiv.style.bottom = rand + gap + 'px';
        }

        if(thirdPipeObject.getHorizontalPosition() < outOfBoundsLeft) {
            
            scoreCounter++;
            pointSound.play();
            thirdPipeObject.setPosition(secPipeObject.getHorizontalPosition() + pipeSpace, secPipeObject.getVerticalPosition());
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
                    wingSound.setVolume(0);
                    dieSound.play();
                    return true; 
            }
        }  

        if(gameOver()){
            gameOverScreen.style.display = "block";
            let gameDeathScore = document.getElementById('deathScore');
            
            gameDeathScore.innerHTML = 'Score: ' + scoreCounter;

            gameLoop.stop();
            document.getElementById('playAgain').addEventListener('click', function() {
                        initialState();
            });
        }
    }
}

export default Flappybird;