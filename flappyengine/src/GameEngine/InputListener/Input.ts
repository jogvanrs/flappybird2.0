/*
 * These functions are used to handle whether a key has been pressed or is not beeing pressed anymore.
 * To be used with player actions
 */

export class EventHandler{

    

    public keyPressDown(keycode : string, method: any) {

        window.addEventListener("keydown", event => {
            event.preventDefault();

            if (event.isComposing || event.code === keycode) {
                method();
            }
        });
    }

    public keyPressUp(keycode : string, method: any) {

        window.addEventListener("keyup", event => {
            event.preventDefault();

            if (event.isComposing || event.code === keycode) {
                method();
            }
        });
    }
}
