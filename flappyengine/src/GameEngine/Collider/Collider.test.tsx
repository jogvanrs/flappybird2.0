import { Collider } from './Collider';
import assert from "assert";
/*
Mostly taken from previous project:
https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/collision.test.tsx
 */

test('constructor from html and DOmrect ', () => {
    const r = document.createElement("div");
    const collider = new Collider(r);
    assert(collider);
    const domRect = r.getBoundingClientRect();
    const collider2 = new Collider(domRect);
    assert(collider2);
})