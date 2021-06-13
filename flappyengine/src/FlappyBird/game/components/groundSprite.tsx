import groundSprite from '../../assets/src/baseDupe.png'

// The groundSprite component is reused from previous project found on github : https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/groundSprite.tsx

const Ground = (props:any) => {
  
  return(

    <div id='ground'><img src={groundSprite} alt="null"/></div>
  )
}

export default Ground;