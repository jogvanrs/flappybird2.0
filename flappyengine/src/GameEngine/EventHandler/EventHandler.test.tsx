import React from 'react';
import assert from "assert";
import { render, fireEvent} from '@testing-library/react';
import {EventHandler} from './EventHandler'
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
According to https://keycode.info/ ,
lower case x has
key: x
but
code: KeyX
Coding the test accordingly
 */
test("Reaction to x", ()=>{
    render(<Flappybird />);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("KeyX", () =>{
        gotUppercaseXDown = true;
    })
    fireEvent.keyDown(window, { key: 'A', code: 'KeyA' });
    fireEvent.keyDown(window,{ key: 'X', code: 'KeyX' });
    fireEvent.keyDown(window,{ key: 'a', code: 'KeyA' });
    expect(gotSpaceDown).toBeUndefined();
    expect(gotUppercaseXDown).toBeDefined();
    expect(gotLowercasexDown).toBeUndefined();
    expect(gotSpaceUp).toBeUndefined();
    expect(gotUppercaseXUp).toBeUndefined();
    expect(gotLowercasexUp).toBeUndefined();

    expect(gotUppercaseXDown);
})

test("Spaces and arrows, up and down", ()=>{
    render(<Flappybird />);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("Space", () =>{
        gotSpaceDown = true;
    })
    eventHandler.keyPressUp("Space", () =>{
        gotSpaceUp = true;
    })
    eventHandler.keyPressDown("ArrowLeft", () =>{
        gotArrowLeftDown = true;
    })
    eventHandler.keyPressUp("ArrowLeft", () =>{
        gotArrowLeftUp = true;
    })
    eventHandler.keyPressDown("ArrowRight", () =>{
        gotArrowRightDown = true;
    })
    eventHandler.keyPressUp("ArrowRight", () =>{
        gotArrowRightUp = true;
    })

    // Firing up before down, just for the Hell of it.

    fireEvent.keyUp(window, { key: 'Space Bar', code: 'Space' });
    expect(gotSpaceUp).toBeDefined();
    expect(gotSpaceUp);

    fireEvent.keyDown(window, { key: 'Space Bar', code: 'Space' });
    expect(gotSpaceDown).toBeDefined();
    expect(gotSpaceDown);

    fireEvent.keyUp(window, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(gotArrowLeftUp).toBeDefined();
    expect(gotArrowLeftUp);

    fireEvent.keyDown(window, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(gotArrowLeftUp).toBeDefined();
    expect(gotArrowLeftUp);

    fireEvent.keyUp(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(gotArrowRightUp).toBeDefined();
    expect(gotArrowRightUp);

    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(gotArrowRightDown).toBeDefined();
    expect(gotArrowRightDown);
})