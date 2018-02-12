import EditorHelpers from "../hermeneus-editor/hermeneus.editor.helpers";



/**
 *
 */
export class IrisMessenger {
    constructor () {
        this.Messages = [];
    }


    /***
     * Displays a message as given by the parameters
     * @param type (success/info/danger/confirm)
     * @param title
     * @param message
     * @param callbackFunction
     * @param selfDestruct (in ms)
     */
    display (type, title, message, callbackFunction, selfDestruct = false) {
        let newMessage = new IrisMessage(type, title, message, callbackFunction);
        if (this.Messages.includes(newMessage) !== true) {
            this.Messages.push(newMessage);
        }


    }
}



/**
 *
 */
class IrisMessage {
    /**
     *
     * @param type
     * @param title
     * @param message
     * @param callbackFunction
     */
    constructor (type, title, message, callbackFunction) {
        this.type = type;
        this.title = title;
        this.message = message;
        this.callback = callbackFunction;
    }
}



