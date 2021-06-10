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
             
        </div>
    )
 
}


let gameLoop = new GameLoop();
window.onload = function() {


let playerobject = new ObjectManager('playerSprite' , 1, 1, 1, 1)
gameLoop.platformStart(calledFunctions);

let counter: number = 0;
function calledFunctions() {
    playerobject.startmove();
    console.log("asd");

    counter++;

    console.log(counter);

    if (counter > 4000) {

        gameLoop.platformStop();
    }
}

}



export default Flappybird;