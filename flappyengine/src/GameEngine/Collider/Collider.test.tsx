/**
 * @jest-environment jsdom
 */

import { Collider } from './Collider';
import { createTestRectangles } from './CreateTestRectangles';
import assert from "assert";
/*
Mostly taken from previous project:
https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/collision.test.tsx
 */

test('constructor from html', () => {
    const r = document.createElement("div");
    const collider = new Collider(r);
    assert(collider);
    const domRect = r.getBoundingClientRect();
})

function expectCollision(c1:Collider, c2:Collider){
    expect(c1.collidesWith(c2));
    expect(c2.collidesWith(c1));
}
function expectNoCollision(c1:Collider, c2:Collider){
    expect(! c1.collidesWith(c2));
    expect(! c2.collidesWith(c1));
}

test('Collisions', () => {
    const frame = document.createElement("div");
    assert(frame); // we did create some element?
    assert(document.body);

    createTestRectangles(frame);
    document.body.appendChild(frame);

    const  c0 = new Collider(document.getElementById( "R0"));
    const  c1 = new Collider(document.getElementById( "R1"));
    const  c2 = new Collider(document.getElementById( "R2"));
    const  c3 = new Collider(document.getElementById( "R3"));
    const  c4 = new Collider(document.getElementById( "R4"));
    const  c5 = new Collider(document.getElementById( "R5"));
    const  c6 = new Collider(document.getElementById( "R6"));
    const  c7 = new Collider(document.getElementById( "R7"));
    const  c8 = new Collider(document.getElementById( "R8"));
    const  c9 = new Collider(document.getElementById( "R9"));
    const c10 = new Collider(document.getElementById("R10"));
    const c11 = new Collider(document.getElementById("R11"));
    const c12 = new Collider(document.getElementById("R12"));
    const c13 = new Collider(document.getElementById("R13"));
    const c14 = new Collider(document.getElementById("R14"));
    const c15 = new Collider(document.getElementById("R15"));
    const c16 = new Collider(document.getElementById("R16"));
    const c17 = new Collider(document.getElementById("R17"));
    const c18 = new Collider(document.getElementById("R18"));
    const c19 = new Collider(document.getElementById("R19"));
    const c20 = new Collider(document.getElementById("R20"));
    assert(c0);
    assert(c1);
    expectNoCollision(c0, c1);
})