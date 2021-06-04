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
    createTestRectangles(frame);
    const r1 = document.getElementById("R1");
    assert(r1); // We did find r1 ?
    const c1 = new Collider(r1);
    expectNoCollision(c1, c2);
})