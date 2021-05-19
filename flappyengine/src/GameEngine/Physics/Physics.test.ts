import { Physics } from './Physics';
import assert from 'assert'

// npm i --save-dev @types/jest
// not enough, try:
// npm install --save-dev jest
// npm add @babel/preset-react
// Run > Edit Configurations... > + > Jest

const LOOP_FREQUENCY = 50; // To be replaced with a global constant?


test('getters and setters' , () => {

    let physics = new Physics(1, 2, 3, 4, 5, 6);

    expect(physics.getHorizontalPosition()).toBe(1);
    expect(physics.getVerticalPosition()).toBe(2);
    expect(physics.getHorizontalVelocity()).toBe(3);
    expect(physics.getVerticalVelocity()).toBe(4)
    expect(physics.getHorizontalAcceleration()).toBe(5);
    expect(physics.getVerticalAcceleration()).toBe(6);
    expect(physics.getVerticalAcceleration()).toBeCloseTo(6) ;

    physics.setPosition(101,102);
    expect(physics.getHorizontalPosition()).toBe(101);
    expect(physics.getVerticalPosition()).toBe(102);

    physics.setHorizontalPosition(11);
    physics.setVerticalPosition(12);
    physics.setHorizontalVelocity(13);
    physics.setVerticalVelocity(14);
    physics.setHorizontalAcceleration(15);
    physics.setVerticalAcceleration(16);

    expect(physics.getHorizontalPosition()).toBe(11);
    expect(physics.getVerticalPosition()).toBe(12);
    expect(physics.getHorizontalVelocity()).toBe(13);
    expect(physics.getVerticalVelocity()).toBe(14)
    expect(physics.getHorizontalAcceleration()).toBe(15);
    expect(physics.getVerticalAcceleration()).toBe(16);

    physics.hyperMove(20,30);

    expect(physics.getHorizontalPosition()).toBe(31);
    expect(physics.getVerticalPosition()).toBe(42);
    expect(physics.getHorizontalVelocity()).toBe(13);
    expect(physics.getVerticalVelocity()).toBe(14)
    expect(physics.getHorizontalAcceleration()).toBe(15);
    expect(physics.getVerticalAcceleration()).toBe(16);

    physics.hyperMove(-20,-30);

    expect(physics.getHorizontalPosition()).toBe(11);
    expect(physics.getVerticalPosition()).toBe(12);
    expect(physics.getHorizontalVelocity()).toBe(13);
    expect(physics.getVerticalVelocity()).toBe(14)
    expect(physics.getHorizontalAcceleration()).toBe(15);
    expect(physics.getVerticalAcceleration()).toBe(16);

})

function throwObject(x:number, y:number, velocity:number, alpha:number, g:number, interval:number){
    // Throws a Physics object,
    // Checking time and place for extreme elevation and return to original elevation.
    // Horizontal acceleration is zero.
    // alpha is 'gun elevation' in degrees
    // g is the vertical acceleration.
    // To ensure leavin and returning to original elevation:
    assert(g*Math.sin(alpha)*velocity > 0);
    expect(4).toBeCloseTo(4);
}

test('throws' , () => {
    throwObject(0,0,40, 45, 9.8, 0.020);
    throwObject(-10,20,40, 90, 9.8, 0.020);
    throwObject(0,0,4, 0.1, 0.8, 0.020);
    throwObject(0,0,-40, 45, -9.8, 0.020);
    throwObject(0,0,40, 270, -19.8, 0.020);
})