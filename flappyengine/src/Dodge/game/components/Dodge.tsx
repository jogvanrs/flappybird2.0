import PlayerSprite from './playerSprite';
import BlockFirst from './blockFirst';
import BlockSecond from './blockSecond';
import BlockThird from './blockThird';
import ScoreBoard from './ScoreBoard'

import './sprite.css';

import { PhysicsWrapper } from '../../../GameEngine/Physics/PhysicsWrapper'
import { GameLoop } from '../../../GameEngine/GameLoop/GameLoop'
import { Collider } from "../../../GameEngine/Collider/Collider";
import { EventHandler } from '../../../GameEngine/EventHandler/EventHandler'

const windowWidth = 399;
const windowHeight = 399;

function Dodge() {
    return(
        <div id='gameWindow' style={{width: windowWidth, height: windowHeight}}>

                <PlayerSprite/>
                <BlockFirst />
                <BlockSecond />
                <BlockThird />
                <ScoreBoard />
        </div>
    )
}

let gameLoop = new GameLoop();

gameLoop.init(init);

function init() {

    let run = true;
    let scoreCounter:number = 0; 

    let eventHandler = new EventHandler();
    
    let playerObject = new PhysicsWrapper('playerSprite', 0, 0, 0, 0);
    let blockFirstObject = new PhysicsWrapper('blockFirst', 0, 0, 3, 30);
    let blockSecondObject = new PhysicsWrapper('blockSecond', 0, 0, 3, 30);
    let blockThirdObject = new PhysicsWrapper('blockThird', 0, 0, 3, 30);
    
    let player = document.getElementById('playerSprite');
    let blockFirst = document.getElementById('blockFirst');
    let blockSecond = document.getElementById('blockSecond'); 
    let blockThird = document.getElementById('blockThird');
    let scoreBoardDiv = document.getElementById('scoreBoard')
    player.style.display='none'
    blockFirst.style.display='none'
    blockSecond.style.display='none'
    blockThird.style.display='none'
    
    // Inital positions

    function initialState() {

        player.style.left = 200 + 'px';
        player.style.top = 375 + 'px';
        blockFirst.style.left = 100 + 'px';
        blockFirst.style.top = -32 + 'px';
        blockSecond.style.left = 100 + 'px';
        blockSecond.style.top = -32 + 'px';
        blockThird.style.left = 100 + 'px';
        blockThird.style.top = -32 + 'px';

        player.style.display='block'
        blockFirst.style.display='block'
        blockSecond.style.display='block'
        blockThird.style.display='block'

        blockSecondObject.setVerticalVelocity(30);
        blockThirdObject.setVerticalVelocity(30);
        blockFirstObject.setVerticalVelocity(30);

        scoreCounter = 0;
    }


    eventHandler.keyPressDown('Space', event => {
    
        if(run) {

            start();
            gameLoop.start(calledFunctions, 1000/24);
            run = false;

            initialState();
        }
    });

    function start() {

        playerObject.setPosition(199, 375);

        blockFirstObject.setPosition(Math.floor(Math.random()*(windowWidth - 13) + 1), -16);
        blockSecondObject.setPosition(Math.floor(Math.random()*(windowWidth - 13) + 1), -149);
        blockThirdObject.setPosition(Math.floor(Math.random()*(windowWidth - 13) + 1), -282);
    }

    // Runs with each Game Loop
    function calledFunctions() {

        playerObject.moveX();
        playerObject.moveY();

        blockFirstObject.moveY(); 
        blockFirstObject.moveX();
        blockSecondObject.moveY(); 
        blockSecondObject.moveX();
        blockThirdObject.moveY();
        blockThirdObject.moveX();

        let playerCollider = new Collider(player); 
        let blockFirstCollider = new Collider(blockFirst);
        let blockSecondCollider = new Collider(blockSecond);
        let blockThirdCollider = new Collider(blockThird);

        // Player move left
        eventHandler.keyPressDown('ArrowLeft', event => {

                playerObject.setHorizontalVelocity(-40);
        })

        eventHandler.keyPressUp('ArrowLeft', event => {

            playerObject.setHorizontalVelocity(0);
        })

        // Player move right
        eventHandler.keyPressDown('ArrowRight', event => {

            playerObject.setHorizontalVelocity(40);
        })

        eventHandler.keyPressUp('ArrowRight', event => {

            playerObject.setHorizontalVelocity(0);
        })
        
        // Relocates blocks if ground is touched
        if (blockFirstObject.getVerticalPosition() > windowHeight) {

            let randomX = Math.floor(Math.random()*(windowWidth - 13) + 1);

            blockFirstObject.setPosition(randomX, -16);

            scoreCounter++;
        }

        if (blockSecondObject.getVerticalPosition() > windowHeight) {

            let randomX = Math.floor(Math.random()*(windowWidth - 13) + 1);

            blockSecondObject.setPosition(randomX, -16);

            scoreCounter++;
        }

        if (blockThirdObject.getVerticalPosition() > windowHeight) {

            let randomX = Math.floor(Math.random()*(windowWidth - 13) + 1);

            blockThirdObject.setPosition(randomX, -16);

            scoreCounter++;
        }

        // Moves player to opposite side of wall is touched
        if (playerObject.getHorizontalPosition() < 1) {

            playerObject.setPosition(windowWidth - 25, playerObject.getVerticalPosition())
        }

        if (playerObject.getHorizontalPosition() + 24 > windowWidth - 1) {

            playerObject.setPosition(1, playerObject.getVerticalPosition())
        }

        scoreBoardDiv.innerHTML = 'Score: ' + scoreCounter;  

        function gameOver() {

            if(playerCollider.collidesWith(blockFirstCollider) ||
               playerCollider.collidesWith(blockSecondCollider) ||
               playerCollider.collidesWith(blockThirdCollider)) {

                return true;
            }
        }    

        if(gameOver()){

            gameLoop.stop();
            run = true;
        }
    }
}

export default Dodge;