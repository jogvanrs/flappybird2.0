
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import {EventHandler} from './EventHandler'
import assert from "assert";
import  Flappybird  from '../../FlappyBird/game/components/Flappybird';

let gotSpaceDown: boolean | undefined;
let gotUppercaseXDown: boolean | undefined;
let gotLowercasexDown: boolean | undefined;
let gotSpaceUp: boolean | undefined;
let gotUppercaseXUp: boolean | undefined;
let gotLowercasexUp: boolean | undefined;

function init(){
    gotSpaceDown = undefined;
    gotUppercaseXDown = undefined;
    gotLowercasexDown = undefined;
    gotSpaceUp = undefined;
    gotUppercaseXUp = undefined;
    gotLowercasexUp = undefined;
}

test("no reaction to no event", ()=>{
    render(<Flappybird />);
    assert(window);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown(" ", () =>{
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
test("Reaction to X", ()=>{
    render(<Flappybird />);
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("X", () =>{
        gotUppercaseXDown = true;
    })
    fireEvent.keyDown(window,"a");
    fireEvent.keyDown(window,"X");
    fireEvent.keyDown(window,"a");
    expect(gotSpaceDown).toBeUndefined();
    expect(gotUppercaseXDown).toBeDefined();
    expect(gotLowercasexDown).toBeUndefined();
    expect(gotSpaceUp).toBeUndefined();
    expect(gotUppercaseXUp).toBeUndefined();
    expect(gotLowercasexUp).toBeUndefined();

    expect(gotUppercaseXDown);
})