import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import {EventHandler} from './EventHandler'
import assert from "assert";
import  Flappybird  from '../../FlappyBird/game/components/Flappybird';

/*
Rewrite when EventHandler is changed from looking at KeyboardEvent.code to .key
Change "keyX" to "X", "Space" to "Space Bar"2 etc. in the EventHandler calls
 */

let gotSpaceDown: boolean | undefined;
let gotUppercaseXDown: boolean | undefined;
let gotLowercasexDown: boolean | undefined;
let gotSpaceUp: boolean | undefined;
let gotUppercaseXUp: boolean | undefined;
let gotLowercasexUp: boolean | undefined;
let gotArrowLeftUp: boolean | undefined;
let gotArrowRightUp: boolean | undefined;
let gotArrowLeftDown: boolean | undefined;
let gotArrowRightDown: boolean | undefined;

function init(){
    gotSpaceDown = undefined;
    gotUppercaseXDown = undefined;
    gotLowercasexDown = undefined;
    gotSpaceUp = undefined;
    gotUppercaseXUp = undefined;
    gotLowercasexUp = undefined;
    gotArrowLeftUp = undefined;
    gotArrowRightUp = undefined;
    gotArrowLeftDown = undefined;
    gotArrowRightDown = undefined;
}


test("no reaction to no event", ()=>{
    render(<Flappybird />);
    assert(window);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("Space", () =>{
        gotSpaceDown = true;
    })
    expect(gotSpaceDown).toBeUndefined();
    expect(gotUppercaseXDown).toBeUndefined();
    expect(gotLowercasexDown).toBeUndefined();
    expect(gotSpaceUp).toBeUndefined();
    expect(gotUppercaseXUp).toBeUndefined();
    expect(gotLowercasexUp).toBeUndefined();

    expect(! gotSpaceDown);
})
test("Reaction to space", ()=>{
    render(<Flappybird />);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("Space", () =>{
        gotSpaceDown = true;
    })
    fireEvent.keyDown(window, { key: 'Space Bar', code: 'Space' });
    expect(gotSpaceDown).toBeDefined();
    expect(gotUppercaseXDown).toBeUndefined();
    expect(gotLowercasexDown).toBeUndefined();
    expect(gotSpaceUp).toBeUndefined();
    expect(gotUppercaseXUp).toBeUndefined();
    expect(gotLowercasexUp).toBeUndefined();

    expect(gotSpaceDown);
})

/*
When EventHandler is re-written to test key, rather than code,
upper- and lowercase x will be seen as different events.
Uppercase X: key: X code: KeyX
lowercase x: key: x code: KeyX
 */
test("Reaction to X", ()=>{
    render(<Flappybird />);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("KeyX", () =>{
        gotUppercaseXDown = true;
        gotLowercasexDown = true; // Note: same code as uppercase
    })
    fireEvent.keyDown(window, { key: 'A', code: 'KeyA' });
    fireEvent.keyDown(window,{ key: 'X', code: 'KeyX' });
    fireEvent.keyDown(window,{ key: 'a', code: 'KeyA' }); // Note that code is the same for upper- and lower case.
    expect(gotSpaceDown).toBeUndefined();
    expect(gotUppercaseXDown).toBeDefined();
    expect(gotLowercasexDown).toBeDefined();
    expect(gotSpaceUp).toBeUndefined();
    expect(gotUppercaseXUp).toBeUndefined();
    expect(gotLowercasexUp).toBeUndefined();

    expect(gotUppercaseXDown);
    expect(gotLowercasexUp);
})