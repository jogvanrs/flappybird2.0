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

function Flappybird() {
    return(
        <div id='gameWindow'>

                <PlayerSprite/>
                <PipesFirst />
        </div>
    )
 
}


let gameLoop = new GameLoop();
window.onload = function() {
    let test = document.getElementById('pipesBothFirst');
    test.style.left = 400 + 'px';

let playerobject = new ObjectManager('playerSprite' , 2, 2, 2, 2)
let pipeObject = new ObjectManager('pipesBothFirst', 0, -25, 0, 0)
gameLoop.platformStart(calledFunctions);

let counter: number = 0;
function calledFunctions() {
    
    //playerobject.startmoveX();
    playerobject.moveY();
    pipeObject.moveX();

    console.log("asd");

    counter++;

    console.log(counter);

    if (counter > 4000) {

        gameLoop.platformStop();
    }
}

}



export default Flappybird;