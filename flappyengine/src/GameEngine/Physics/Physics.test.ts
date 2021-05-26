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

function expectedPosition(x:number ,velocity:number , acceleration:number , time:number ){
    return x + (velocity * time) + (acceleration * time*time)/2;
}
function expectedVelocity(v:number,acceleration:number, time:number){
    return v + (acceleration*time);
}

function throwObject(x:number, y:number, velocity:number, alpha:number, a:number, g:number, interval:number, maxIterations:number = 500){
    // Throws a Physics object, and steps it through the iteratons.
    // Checks that terminal speed and position is as expected
    // Throw in a check for constant accelerations, for the heck of it.
    // If the throw should change direction, time and position of those events are checked.
    // If the throw should return to original elevation or position, time to those events are checked.

    assert(interval > 0);
    assert(maxIterations > 0);
    assert(interval < Infinity);
    assert(maxIterations < Infinity);

    const initialHorizontalVelocity = Math.cos(alpha*Math.PI/180) * velocity;
    const initialVerticalVelocity = - Math.sin(alpha*Math.PI/180) * velocity;
    let iterationsToHorizontalExtreme = Infinity;
    let expectedHorizontalExtreme = NaN;
    if(initialHorizontalVelocity * a < 0){
        assert(a != 0);
        iterationsToHorizontalExtreme = - initialHorizontalVelocity / a;
        assert(iterationsToHorizontalExtreme > 0);
        expectedHorizontalExtreme = x - (1/2) * a * (interval * iterationsToHorizontalExtreme)**2;
    }
    let iterationsToVerticalExtreme = Infinity;
    let expectedVerticalExtreme = NaN;
    if(initialVerticalVelocity * g < 0){
        assert(g != 0);
        iterationsToVerticalExtreme = - initialVerticalVelocity / g;
        assert(iterationsToVerticalExtreme > 0);
        expectedVerticalExtreme = y - (1/2) * g * (interval * iterationsToVerticalExtreme)**2;
    }
    const totalIterations = Math.min(maxIterations, Math.max(iterationsToHorizontalExtreme, iterationsToVerticalExtreme));
    assert(totalIterations > 5) // Or is the acceleration way too strong in this test?
    assert(totalIterations <= maxIterations);

    let maxPosition  = x;
    let minPosition  = x;
    let maxElevation = y;
    let minElevation = y;

    let physics = new Physics(x, y, initialHorizontalVelocity, initialVerticalVelocity, a, g);
    for(let iteration = 1;iteration <= totalIterations; ++iteration){
        physics.step(interval);
        const steppedHorizontalPosition = physics.getHorizontalPosition();
        const targetHorizontalPosition = expectedPosition(x,initialHorizontalVelocity, a , interval*iteration);
        expect(steppedHorizontalPosition).toBeCloseTo(targetHorizontalPosition,2);
        // noinspection JSSuspiciousNameCombination
        expect(physics.getVerticalPosition()).toBeCloseTo(expectedPosition(y,initialVerticalVelocity,g , interval*iteration));
        const steppedHorizontalVelocity = physics.getHorizontalVelocity();
        const targetHorizontalVelocity = expectedVelocity(initialHorizontalVelocity, a , interval*iteration);
        expect(steppedHorizontalVelocity).toBeCloseTo(targetHorizontalVelocity,0);
        expect(physics.getVerticalVelocity()).toBeCloseTo(expectedVelocity(initialVerticalVelocity,g , interval*iteration));
        maxPosition  = Math.max(maxPosition, physics.getHorizontalPosition());
        minPosition  = Math.min(minPosition, physics.getHorizontalPosition());
        maxElevation = Math.max(maxElevation, physics.getVerticalPosition());
        minElevation = Math.min(minElevation, physics.getVerticalPosition());
        if(iteration == iterationsToHorizontalExtreme){
            expect(physics.getHorizontalPosition()).toBeCloseTo(expectedHorizontalExtreme,0);
        }
        if(iteration == iterationsToVerticalExtreme){
            expect(physics.getVerticalPosition()).toBeCloseTo(expectedVerticalExtreme, 0);
        }
        if(iteration == 2 * iterationsToHorizontalExtreme){
            expect(physics.getHorizontalPosition()).toBeCloseTo(x,0);
        }
        if(iteration == 2 * iterationsToVerticalExtreme){
            expect(physics.getVerticalPosition()).toBeCloseTo(y, 0);
        }
    }
}



test('vertical throw ' , () => {
    throwObject(3,4,1, 90, 0, 0.1, LOOP_INTERVAL);
})
test('horizontal throw ' , () => {
    throwObject(3,4,-1, 0, 0.1, 0, LOOP_INTERVAL);
})
test('one way vertical throw ' , () => {
    throwObject(3,4,-1, 90, 0, 0.1, LOOP_INTERVAL);
})
test('one way horizontal throw ' , () => {
    throwObject(3,4,1, 0, 0.1, 0, LOOP_INTERVAL);
})
test('throw 1' , () => {
    // assert(false); // Save for later - running too slow.
    throwObject(0,0,40, 45, 0,  0.1, LOOP_INTERVAL);
})
test('throw 1.1' , () => {
    // assert(false); // Save for later - running too slow.
    throwObject(0,0,40, 45, 0.1,  0.1, LOOP_INTERVAL);
})
test('throw 2' , () => {
    throwObject(0,0,40, 45, 0,  9.8, LOOP_INTERVAL);
})
test('throw 3' , () => {
    throwObject(0,0,4, 0.1,  0, 0.8, LOOP_INTERVAL);
})
test('throw 4' , () => {
    throwObject(0,0,-40, 45,  0, -9.8, LOOP_INTERVAL);
})
test('throw 5' , () => {
    throwObject(0,0,40, -45, 0,  -9.8, LOOP_INTERVAL);
})
test('throw 6' , () => {
    throwObject(0,0,40, 270, 0,  -19.8, LOOP_INTERVAL);
})