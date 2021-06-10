import pipeN from '../../assets/src/pipeN.png'
import pipeS from '../../assets/src/pipeS.png'

import './sprite.css';

const PipesSecond = (props:any) => {

      let gap = 350;
      let bottomY = Math.random() * 150;
  

    return(
            <div id='pipesBothSecond'>
    
            <div id='pipeUpperSecond' style={{
            width: 60,
            overflow: 'hidden',
            height: 200,
            bottom: bottomY + gap // Bottom pipe y + gap
            }}><img src={pipeN} alt="null" style={{
                  width: '100%',
                  height: '100%'
            }}/></div>
    
            <div id='pipeLowerSecond' style={{
            width: 60,
            height: 200,
            bottom: bottomY
            }}><img src={pipeS} alt="null"/></div>

            </div>
      )
}

export default PipesSecond;