import React from "react";

/*
These test rectangles are copied from MockRect.tsx in the previous project,
https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/MockRect.tsx

 */

declare var MockRect: any

export class CollidingRectangles extends React.Component{
    // To actually see these rectangles, and which of them collide:
    // Have e.g. App.tsx render CollidingRectangles
    static readonly r0 = new MockRect({ id:"R0", height:100, width:100, left:0, top:0})
    static readonly r1 = new MockRect({ id:"R1", height:10, width:200, left:-50, top:-50})
    static readonly r2 = new MockRect({ id:"R2", height:10, width:200, left:-50, top:130})
    static readonly r3 = new MockRect({ id:"R3", height:180, width:10, left:-30, top:-70})
    static readonly r4 = new MockRect({ id:"R4", height:180, width:10, left:130, top:-20})
    static readonly r5 = new MockRect({ id:"R5", height:50, width:50, left:25, top:25})
    static readonly r6 = new MockRect({ id:"R6", height:20, width:20, left:90, top:-10})
    static readonly r7 = new MockRect({ id:"R7", height:20, width:20, left:90, top:50})
    static readonly r8 = new MockRect({ id:"R8", height:20, width:20, left:90, top:90})
    static readonly r =
        <div style={{position: "absolute",height:250,width:100,left:75,top:300,border:"none"}}>
            {CollidingRectangles.r0.render()}
            {CollidingRectangles.r1.render()}
            {CollidingRectangles.r2.render()}
            {CollidingRectangles.r3.render()}
            {CollidingRectangles.r4.render()}
            {CollidingRectangles.r5.render()}
            {CollidingRectangles.r6.render()}
            {CollidingRectangles.r7.render()}
            {CollidingRectangles.r8.render()}
        </div>
    render(){
        let result =
            <div>
                <p>If you see this page, but want to play FlappyBird,
                    have someone edit <i>App.tsx</i> like this:<br/>
                    <code>return ( &lt;Flappybird&gt;&lt;/Flappybird&gt; )<br/>
                        &#47;&#47; return ( &lt;CollidingRectangles/&gt; )</code>
                </p>
                <p>Otherwise, these are the rectangles defined
                    in <i>MockRect.tsx</i> and used to test
                    <code>GameEngine.dOMRectCollision()</code> in <i>gameEngine/game.ts</i></p>
                <p>If it is important to test if an exact touch is a collision, more cases should be added.</p>
                {CollidingRectangles.r}
            </div>
        //result.appendChild(<div>a child</div>)
        return(result)
    }
}