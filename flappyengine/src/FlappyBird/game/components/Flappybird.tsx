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
                <Ground/>
                <PlayerSprite/>
                <PipesFirst/>
                <PipesSecond/>
                <PipesThird/>
                <GameOverScreen/>
                <ScoreBoard/>
        </div>
    )
 
}



ObjectManager.loadObject('game', 'gameover')
ObjectManager.loadObject('ground', 'ground')
ObjectManager.loadObject('game', 'pipesBothFirst')
ObjectManager.loadObject('game', 'pipesBothSecond')
ObjectManager.loadObject('game', 'pipesBothThird')
ObjectManager.loadObject('game', 'playerSprite')
ObjectManager.loadObject('game', 'scoreBoard')



ObjectManager.getObject("ground")

let gameLoop = new GameLoop();

let counter: number = 0;

gameLoop.platformStart(calledFunctions);

function calledFunctions() {

    console.log("asd");

    counter++;

    console.log(counter);

    if (counter > 40) {

        gameLoop.platformStop();
    }
}


export default Flappybird;