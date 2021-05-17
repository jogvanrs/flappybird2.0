/*
 * These functions are used to handle whether a key has been pressed or is not beeing pressed anymore.
 * To be used with player actions
 */

export function keyPressDown(keycode : string, method) {

    window.addEventListener("keydown", event => {
        event.preventDefault();

        if (event.isComposing || event.code === keycode) {
            method();
        }
    });
}

export function keyPressUp(keycode : string, method) {

    window.addEventListener("keyup", event => {
        event.preventDefault();

        if (event.isComposing || event.code === keycode) {
            method();
        }
    });
}