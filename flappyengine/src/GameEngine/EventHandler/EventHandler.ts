/*
 * These functions are used to handle whether a key has been pressed or is not beeing pressed anymore.
 * To be used with player actions
 */

export class EventHandler{
    /*
    The event types "keydown" and "keyup" implies keyboard events only
    A future development will be handling other events, like mouse clicks.
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