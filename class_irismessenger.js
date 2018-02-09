import EditorHelpers from "../hermeneus-editor/hermeneus.editor.helpers";



/**
 *
 */
export class IrisMessenger {
    constructor () {
        this.Messages = [];
    }


    /***
     *
     * @param type
     * @param title
     * @param message
     * @param callbackFunction
     * @param selfDestruct
     */
    display (type, title, message, callbackFunction, selfDestruct = false) {
        let newMessage = new IrisMessage(type, title, message, callbackFunction);
        if (this.Messages.includes(newMessage) !== true) {
            this.Messages.push(newMessage);
            console.log('hit');
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



