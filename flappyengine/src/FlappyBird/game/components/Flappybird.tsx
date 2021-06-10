import Ground from "./groundSprite";
import PlayerSprite from './playerSprite';
import PipesFirst from './pipesFirst';
import PipesSecond from './pipesSecond';
import PipesThird from './pipesThird';
import GameOverScreen from './GameOverScreen'
import ScoreBoard from './ScoreBoard'
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

export default Flappybird;