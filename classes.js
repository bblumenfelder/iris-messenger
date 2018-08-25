import EditorHelpers from "../hermeneus.editor/js/hermeneus.editor.helpers";



export class IrisMessage {
    constructor (type, title, message, callbackFunction) {
        this.type = type;
        this.title = title;
        this.message = message;
        this.callback = callbackFunction;
    }
}



export class IrisMessenger {
    constructor () {
        this.Messages = [];
    }



    /**
     * Destructs newMessage after selfDestructTimer in ms
     * @param newMessage
     * @param selfDestructTimer
     */
    destruct (newMessage, selfDestructTimer) {
        setTimeout(() => {
            this.Messages = EditorHelpers.ArrayWithout(newMessage, this.Messages);
        }, selfDestructTimer);
    }



    /***
     * Displays a message as given by the parameters
     * @param type (success/info/danger/confirm)
     * @param title
     * @param message
     * @param callbackFunction
     * @param selfDestructTimer (in ms)
     */
    display (type, title, message, callbackFunction, selfDestructTimer = false) {
        let newMessage = new IrisMessage(type, title, message, callbackFunction);
        if (this.Messages.includes(newMessage) !== true) {
            this.Messages.push(newMessage);
        }
        if (selfDestructTimer !== false) {
            this.destruct(newMessage, selfDestructTimer)
        }
    }
}