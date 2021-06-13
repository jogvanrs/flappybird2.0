import birdPng from '../../assets/src/bluebird-midflap.png';

import './sprite.css';

// The PlayerSprite component is reused from previous project found on github : https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/PlayerSprite.tsx

const PlayerSprite = (props:any) => {

  let bird = <div id='playerSprite'><img src={birdPng} alt='PlayerSprite'/></div>

  return bird
}

export default PlayerSprite;