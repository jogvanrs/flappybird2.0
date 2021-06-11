
import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import {EventHandler} from './EventHandler'

test("reacts to space down when listening for space down", ()=>{
    const eventHandler = new EventHandler();
    let gotSpaceDown = false;
    let gotXDown = false;
    eventHandler.keyPressDown(" ", () =>{
        gotSpaceDown = true;
    })
    expect(gotSpaceDown);
})