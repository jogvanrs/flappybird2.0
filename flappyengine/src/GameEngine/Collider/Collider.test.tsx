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
    const noOfRectangles = frame.childNodes.length;
    const noOfBodyElements = document.body.childNodes.length;
    const R0 = document.getElementById("R1");  // Somehow does not work.
    assert(R0);
    assert(R0.id == "R0");
    //const r0 = frame.childNodes[0];
    //assert(r0); // We did find r1 ?
    //assert(r0.id == "R0");
    const c1 = new Collider(r1);
    expectNoCollision(c1, c2);
})