
import React from 'react';
import { fireEvent} from '@testing-library/react';
import {EventHandler} from './EventHandler'

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
    init();
    const eventHandler = new EventHandler();
    eventHandler.keyPressDown("X", () =>{
        gotSpaceDown = true;
    })
    fireEvent.keyDown(window,"a");
    fireEvent.keyDown(window,'X');
    fireEvent.keyDown(window,"a");
    expect(gotSpaceDown).toBeUndefined();
    expect(gotUppercaseXDown).toBeDefined();
    expect(gotLowercasexDown).toBeUndefined();
    expect(gotSpaceUp).toBeUndefined();
    expect(gotUppercaseXUp).toBeUndefined();
    expect(gotLowercasexUp).toBeUndefined();

    expect(gotUppercaseXDown);
})