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

function expectCollision(c1:Collider, c2:Collidec){
    expect(c1.collidesWith(c2));
    expect(c2.collidesWith(c1));
}
function expectNoCollision(c1:Collider, c2:Collidec){
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
    const c10 = new Collider(document.getElementById("c10"));
    const c11 = new Collider(document.getElementById("c11"));
    const c12 = new Collider(document.getElementById("c12"));
    const c13 = new Collider(document.getElementById("c13"));
    const c14 = new Collider(document.getElementById("c14"));
    const c15 = new Collider(document.getElementById("c15"));
    const c16 = new Collider(document.getElementById("c16"));
    const c17 = new Collider(document.getElementById("c17"));
    const c18 = new Collider(document.getElementById("c18"));
    const c19 = new Collider(document.getElementById("c19"));
    const c20 = new Collider(document.getElementById("R20"));
    assert(c0);
    assert(c1);
    expectNoCollision(c0, c0);
    expectNoCollision(c0, c1);
    expectNoCollision(c0, c2);
    expectNoCollision(c0, c3);
    expectNoCollision(c0, c4);
    expectNoCollision(c0, c5);
    expectNoCollision(c0, c6);
    expectNoCollision(c0, c7);
    expectNoCollision(c0, c8);
    expectNoCollision(c0, c9);
    expectNoCollision(c0, c10);
    expectCollision(c0, c11);
    expectNoCollision(c0, c12);
    expectNoCollision(c0, c13);
    expectNoCollision(c0, c14);
    expectNoCollision(c0, c15);
    expectNoCollision(c0, c16);
    expectNoCollision(c0, c17);
    expectNoCollision(c0, c18);
    expectNoCollision(c0, c19);
    expectCollision(c0, c20); // One common pixel
    expectNoCollision(c1, c2);
    expectNoCollision(c1, c3);
    expectNoCollision(c1, r4);
    expectNoCollision(c1, r5);
    expectNoCollision(c1, r6);
    expectNoCollision(c1, r7);
    expectNoCollision(c1, r8);
    expectNoCollision(c1, r9);
    expectNoCollision(c1, c10);
    expectCollision(c1, c11);
    expectNoCollision(c1, c12);
    expectNoCollision(c1, c13);
    expectNoCollision(c1, c14);
    expectNoCollision(c1, c15);
    expectNoCollision(c1, c16);
    expectNoCollision(c1, c17);
    expectNoCollision(c1, c18);
    expectNoCollision(c1, c19);
    expectNoCollision(c1, c20);
    expectCollision(c2, c2);
    expectNoCollision(c2, c3);
    expectNoCollision(c2, c4);
    expectNoCollision(c2, c5);
    expectNoCollision(c2, c6);
    expectNoCollision(c2, c7);
    expectNoCollision(c2, c8);
    expectCollision(c2, c9);
    expectNoCollision(c2, c10);
    expectCollision(c2, c11);
    expectNoCollision(c2, c12);
    expectNoCollision(c2, c13);
    expectNoCollision(c2, c14);
    expectNoCollision(c2, c15);
    expectNoCollision(c2, c16);
    expectNoCollision(c2, c17);
    expectNoCollision(c2, c18);
    expectNoCollision(c2, c19);
    expectNoCollision(c2, c20);
    expectCollision(c3, c3); // Collides with itself
    expectNoCollision(c3, c4);
    expectNoCollision(c3, c5);
    expectNoCollision(c3, c6);
    expectNoCollision(c3, c7);
    expectNoCollision(c3, c8);
    expectNoCollision(c3, c9);
    expectNoCollision(c3, c10);
    expectCollision(c3, c11);
    expectNoCollision(c3, c12);
    expectNoCollision(c3, c13);
    expectNoCollision(c3, c14);
    expectNoCollision(c3, c15);
    expectNoCollision(c3, c16);
    expectNoCollision(c3, c17);
    expectNoCollision(c3, c18);
    expectNoCollision(c3, c19);
    expectNoCollision(c3, c20);
    expectCollision(c4, c4);
    expectNoCollision(c4, c5);
    expectNoCollision(c4, c6);
    expectNoCollision(c4, c7);
    expectNoCollision(c4, c8);
    expectNoCollision(c4, c9);
    expectNoCollision(c4, c10);
    expectCollision(c4, c11);
    expectNoCollision(c4, c12);
    expectNoCollision(c4, c13);
    expectNoCollision(c4, c14);
    expectNoCollision(c4, c15);
    expectNoCollision(c4, c16);
    expectNoCollision(c4, c17);
    expectNoCollision(c4, c18);
    expectNoCollision(c4, c19);
    expectNoCollision(c4, c20);
    expectCollision(c5, c5);
    expectNoCollision(c5, c6);
    expectNoCollision(c5, c7);
    expectNoCollision(c5, c8);
    expectNoCollision(c5, c9);
    expectNoCollision(c5, c10);
    expectCollision(c5, c11);
    expectNoCollision(c5, c12);
    expectNoCollision(c5, c13);
    expectNoCollision(c5, c14);
    expectNoCollision(c5, c15);
    expectNoCollision(c5, c16);
    expectNoCollision(c5, c17);
    expectNoCollision(c5, c18);
    expectNoCollision(c5, c19);
    expectNoCollision(c5, c20);

    expectCollision(c6, c6);
    expectNoCollision(c6, c7);
    expectNoCollision(c6, c8);
    expectNoCollision(c6, c9);
    expectNoCollision(c6, c10);
    expectCollision(c6, c11);
    expectNoCollision(c6, c12);
    expectNoCollision(c6, c13);
    expectNoCollision(c6, c14);
    expectNoCollision(c6, c15);
    expectNoCollision(c6, c16);
    expectNoCollision(c6, c17);
    expectNoCollision(c6, c18);
    expectCollision(c6, c19);
    expectNoCollision(c6, c20);
    expectCollision(c7, c7);
    expectNoCollision(c7, c8);
    expectNoCollision(c7, c9);
    expectNoCollision(c7, c10);
    expectCollision(c7, c11);
    expectNoCollision(c7, c12);
    expectNoCollision(c7, c13);
    expectNoCollision(c7, c14);
    expectNoCollision(c7, c15);
    expectNoCollision(c7, c16);
    expectNoCollision(c7, c17);
    expectNoCollision(c7, c18);
    expectNoCollision(c7, c19);
    expectNoCollision(c7, c20);

    expectCollision(c8, c8);
    expectNoCollision(c8, c6);
    expectNoCollision(c8, c7);
    expectNoCollision(c8, c8);
    expectNoCollision(c8, c9);
    expectCollision(c8, c10);
    expectCollision(c8, c11);
    expectNoCollision(c8, c12);
    expectNoCollision(c8, c13);
    expectNoCollision(c8, c14);
    expectNoCollision(c8, c15);
    expectNoCollision(c8, c16);
    expectNoCollision(c8, c17);
    expectNoCollision(c8, c18);
    expectNoCollision(c8, c19);
    expectNoCollision(c8, c20);
    expectCollision(c9, c9);
    expectNoCollision(c9, c10);
    expectnoCollision(c9, c11);
    expectNoCollision(c9, c12);
    expectNoCollision(c9, c13);
    expectNoCollision(c9, c14);
    expectNoCollision(c9, c15);
    expectNoCollision(c9, c16);
    expectNoCollision(c9, c17);
    expectNoCollision(c9, c18);
    expectNoCollision(c9, c19);
    expectNoCollision(c9, c20);


    expectCollision(c10, c10);
    expectNoCollision(c10, c11);
    expectNoCollision(c10, c12);
    expectNoCollision(c10, c13);
    expectNoCollision(c10, c14);
    expectNoCollision(c10, c15);
    expectNoCollision(c10, c16);
    expectNoCollision(c10, c17);
    expectNoCollision(c10, c18);
    expectNoCollision(c10, c19);
    expectNoCollision(c10, c20);

    expectCollision(c11, c11);
    expectNoCollision(c11, c12);
    expectNoCollision(c11, c13);
    expectNoCollision(c11, c14);
    expectNoCollision(c11, c15);
    expectNoCollision(c11, c16);
    expectNoCollision(c11, c17);
    expectNoCollision(c11, c18);
    expectNoCollision(c11, c19);
    expectNoCollision(c11, c20);
    expectCollision(c12, c12);
    expectCollision(c12, c13);
    expectCollision(c12, c14);
    expectCollision(c12, c15);
    expectCollision(c12, c16);
    expectCollision(c12, c17);
    expectCollision(c12, c18);
    expectNoCollision(c12, c19);
    expectNoCollision(c12, c20);

    expectCollision(c13, c13);
    expectCollision(c13, c14);
    expectCollision(c13, c15);
    expectCollision(c13, c16);
    expectCollision(c13, c17);
    expectCollision(c13, c18);
    expectNoCollision(c13, c19);
    expectNoCollision(c13, c20);

    expectCollision(c14, c14);
    expectNoCollision(c14, c15);
    expectNoCollision(c14, c16);
    expectNoCollision(c14, c17);
    expectCollision(c14, c18);
    expectNoCollision(c14, c19);
    expectNoCollision(c14, c20);

    expectCollision(c15, c15);
    expectNoCollision(c15, c16);
    expectNoCollision(c15, c17);
    expectCollision(c15, c18);
    expectNoCollision(c15, c19);
    expectNoCollision(c15, c20);

    expectCollision(c16, c16);
    expectNoCollision(c16, c17);
    expectCollision(c16, c18);
    expectNoCollision(c16, c19);
    expectNoCollision(c16, c20);

    expectCollision(c17, c17);
    expectCollision(c17, c18);
    expectNoCollision(c17, c19);
    expectNoCollision(c17, c20);

    expectCollision(c18, c18);
    expectNoCollision(c18, c19);
    expectNoCollision(c18, c20);


})