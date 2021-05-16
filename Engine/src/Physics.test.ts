import { Physics } from './Physics';
// npm i --save-dev @types/jest
// not enough, try:
// npm install --save-dev jest
// npm add @babel/preset-react
// Run > Edit Configurations... > + > Jest

const LOOP_FREQUENCY = 50; // To be replaced with a global constant?

test('a test' , () => {
    let physics = new Physics(1, 2, 0, 0, 0, 0);
    expect(physics.getHorizontalPosition()).toBe(1);
})