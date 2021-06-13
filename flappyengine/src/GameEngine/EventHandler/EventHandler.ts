/*
    These functions are used to handle whether a key has been pressed or is not beeing pressed anymore.
    To be used with player actions

    Inspirated by: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
*/

export class EventHandler{
    /*
        The event types "keydown" and "keyup" implies keyboard events only
        A future development will be handling other events, like mouse clicks.
    
        To allow for local keyboards, we should really have tested on
        KeyboardEvent.key, not .code, to handle local keybards correctly.
        This implies testing for 'Space Bar' rather than 'Space'
        As of 2021-06-12, Jan Egil could not make that work.
    */

    keyPressDown(keycode : string, method: any) {

        window.addEventListener("keydown", (event: KeyboardEvent) => {
            event.preventDefault();

            if (event.isComposing || event.code === keycode) {
                method();
            }
        });
    }

    keyPressUp(keycode : string, method: any) {

        window.addEventListener("keyup", (event:KeyboardEvent) => {
            event.preventDefault();

            if (event.isComposing || event.code === keycode) {
                method();
            }
        });
    }
}