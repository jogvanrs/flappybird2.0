import { Physics } from './Physics';
import assert from 'assert'

// npm i --save-dev @types/jest
// not enough, try:
// npm install --save-dev jest
// npm add @babel/preset-react
// Run > Edit Configurations... > + > Jest

const LOOP_INTERVAL = 0.020; // To be replaced with a global constant?


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
    // To ensure leaving and returning to original elevation:
    assert(g*Math.sin(alpha*Math.PI/180)*velocity > 0);
    assert(interval>0);
    expect(4).toBeCloseTo(4);
    const hVelocity = velocity * Math.cos(alpha*Math.PI/180);
    const vVelocity = (-1) * velocity * Math.sin(alpha*Math.PI/180);
    // Initial velocity must be against gravity, for object to ever return to initial elevation:
    assert(vVelocity * g < 0)
    // To ensure that acceleration is soft enough to wait 5 intervals before reversing direction:
    // assert(false);
    assert(Math.abs(vVelocity) > Math.abs(5 * interval * g));
    let physics = new Physics(x, y, hVelocity, vVelocity, 0, g);
    // timeTopExpected is expected time to reach the extreme elevation of the throw.
    const timeTopExpected = (-1) * vVelocity/g;
    let timeTop: number = -1; // Really: no value given yet.
    assert(timeTopExpected > 0);
    const timeEndExpected = 2 * timeTopExpected;
    const extremeElevationExpected = timeTopExpected * (vVelocity - (g*timeTopExpected)/2);
    const iterationsToEnd = Math.round(timeEndExpected/interval);
    assert(iterationsToEnd > 2);
    assert(iterationsToEnd > 0, "Throw is too short to test");
    // Normal gravity is positive, i.e. down.
    // Under normal gravity, a throw has its extreme elevation above the
    // start elevation.
    const gravityDirection = Math.sign(g);
    let extremeElevation = y;
    for (let iteration = 0; iteration < iterationsToEnd; ++iteration){
        physics.step(interval);
        expect(physics.getHorizontalVelocity()).toBe(hVelocity); // No horizontal speed changes.
        assert(Math.abs(gravityDirection)==1);
        if (gravityDirection == 1){
            assert(gravityDirection == +1);
            // A normal throw
            if (physics.getVerticalPosition() < extremeElevation){
                timeTop = iteration*interval;
                extremeElevation = physics.getVerticalPosition();
            }
        } else {
            assert(gravityDirection == -1);
            // Throwing downwards, subject to upwards gravity
            if (physics.getVerticalPosition() < extremeElevation){
                timeTop = iteration*interval;
                extremeElevation = physics.getVerticalPosition();
            }
        }
    }
    expect(extremeElevation != y);
    assert(Math.sign(g*extremeElevation) == -1);  //TODO should not be here, this should be expect
    expect(Math.sign(g*extremeElevation)).toBeCloseTo(-1);
    assert(timeTop != -1);  //  Internal test logic, not an expectation for the tested object.
    expect(timeTop).toBeCloseTo(timeTopExpected, -2);
    expect(extremeElevation).toBeCloseTo(extremeElevationExpected);
    expect(physics.getVerticalPosition()).toBeCloseTo(y);   // The throw is timed to get back to original elevation.
    expect(physics.getHorizontalVelocity()).toBeCloseTo(-vVelocity);   // What goes up, comes down with the same speed.
}

test('a minimal vertical throw' , () => {
    // throwObject(0,0,10, 90, 9.8, 1);
})

test('throws' , () => {
    // throwObject(0,0,0.0000005, 45, 109.8, 0.020); // This throw is less than one iteration
    throwObject(0,0,40, 45, 0.1, LOOP_INTERVAL);
    throwObject(0,0,40, 45, 9.8, LOOP_INTERVAL);
    throwObject(-10,20,40, 90, 9.8, LOOP_INTERVAL);
    throwObject(0,0,4, 0.1, 0.8, LOOP_INTERVAL);
    throwObject(0,0,-40, 45, -9.8, LOOP_INTERVAL);
    throwObject(0,0,40, -45, -9.8, LOOP_INTERVAL);
    throwObject(0,0,40, 270, -19.8, LOOP_INTERVAL);
})