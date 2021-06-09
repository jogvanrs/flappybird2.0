import React from 'react'


//from https://css-tricks.com/using-requestanimationframe-with-react-hooks/
export class GameLoop{

     useAnimationFrame = callback => {
        // Use useRef for mutable variables that we want to persist
        // without triggering a re-render on their change
        const requestRef = useRef();
        const previousTimeRef = useRef();
        
        const animate = time => {
          if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime)
          }
          previousTimeRef.current = time;
          requestRef.current = requestAnimationFrame(animate);
        }
        
        useEffect(() => {
          requestRef.current = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(requestRef.current);
        }, []); // Make sure the effect runs only once
      }
      
          

}