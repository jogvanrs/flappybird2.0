import pipeN from '../../assets/src/pipeN.png'
import pipeS from '../../assets/src/pipeS.png'

import './sprite.css';

// The pipesFirst component is reused from previous project found on github : https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/pipesFirst.tsx

const PipesFirst = (props:any) => {

    let gap = 350;
    let bottomY = Math.random() * 150;

    return(
            <div id='pipesBothFirst'>
    
            <div id='pipeUpperFirst' style={{
            width: 60,
            overflow: 'hidden',
            height: 200,
            bottom: bottomY + gap // Bottom pipe y + gap
            
            }}><img src={pipeN} alt="null" style={{
                  width: '100%',
                  height: '100%'
            }}/></div>
    
            <div id='pipeLowerFirst' style={{
            width: 60,
            height: 200,
            bottom: bottomY
            }}><img src={pipeS} alt="null"/></div>

            </div>
      )
}

export default PipesFirst;