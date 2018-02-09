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


    destruct (newMessage, selfDestructTimer) {
        setTimeout(() => {
            this.Messages = EditorHelpers.ArrayWithout(newMessage, this.Messages);
        }, selfDestructTimer);
    }


    display (type, title, message, callbackFunction, selfDestructTimer = false) {
        let newMessage = new IrisMessage(type, title, message, callbackFunction)
        if (this.Messages.includes(newMessage) !== true) {
            this.Messages.push(newMessage);
        }
        if (selfDestructTimer !== false) {
            this.destruct(newMessage, selfDestructTimer)
        }
    }
}