# FlappyEngine 2.0

## How to use

This game engine consists of several classes. In order for your game to utilize any needed functions, the game has to directly import the appropriate classes containing said functions. The engine consists of the following classes: Collider, EventHandler, GameLoop, Physics, PhysicsWrapper and Sound.

The GameLoop class holds three functions, all of which are essential for the game to run. Through init(), the game creator decides which elements need to be initialized on window load. The other two functions start and stop the game loop. Inside the game, the game creator passes all needed functions as an argument to the start() function, after which the game loop runs until stop() is called. Thus, with every update, the game loop (update frequency is decided by the game creator) calls all desired functions, resulting in a loop, within which the game is played.

Example:

**let gameLoop = new GameLoop();**

**gameLoop.init(initGame);** // initGame is the name of the function that holds all variables and/or constants needed for the game to run.

**gameLoop.start(calledFunctions, 1000/24);** // calledFunctions is the name of the function that holds all function to be called inside the game loop.

If the game needs collision, a Collider object is instantiated. It's constructor takes an HTMLElement as an argument.

Example: **let playerCollider = new Collider(player);**

The EventHandler class contains two functions, keyPressUp() and keyPressDown(), both of which take any given key (string type) as an argument, after which, for the rest of the game, eventListeners listen for said key input.

Example:

**let eventHandler = new EventHandler();**

**eventHandler.keyPressDown('ArrowLeft', () => { playerObject.setHorizontalVelocity(-40); })**

The Physics class contains functions needed in order to update an object's physics. None of it's functions are in direct relation with the game, instead, the PhysicsWrapper class is used.

PhysicsWrapper, which takes object velocity and acceleration as arguments, allows the game creator to instantiate and update the physics of any given game object, using the functions provided in the Physics class. It acts as a wrapper for the Physics class.

Example of how to use PhysicsWrapper:

**let playerObject = new PhysicsWrapper('playerSprite', 0, 0, 0, 0);** (Note: The four zeroes indicate the horizontal and vertical velocity and acceleration of the HTMLElement).

The Sound class takes audio file name, audio volume and loop boolean as arguments. In order for the audio file to be played, the game creator has to initialize a Sound object. Example: **let fallSound = new Sound(process.env.PUBLIC_URL + './sound/fall.wav', 1, false);**. Any audio that's to be played has to be stored inside the project's **public** directory.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
