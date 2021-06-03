import { Collider } from './Collider';
/*
Mostly taken from previous project:
https://github.com/Slow4life/FlappyBirdReact/blob/main/src/components/collision.test.tsx
 */

test('constructor from html ', () => {
    const r = document.createElement("div");
    const collider = new Collider(r);
})