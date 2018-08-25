# iris-messenger
* Import transpiled IrisMessenger.vue and register it as a component inside your Vue-Wrapper
* Import `IrisMessenger` from __classes.js__:

``import {IrisMessenger} from '../iris-messenger/classes.js'``

* Using IrisMessenger within Vue-Components: 

Create a new data-variable:
```
data(): function() {
    return {
        ...
        'messenger': new IrisMessenger(),
    }
}
```

* Using IrisMessenger in Vanilla JS:
Create a new variable to emit messages:

``
let myMessenger = new IrisMessenger();
`` 

* Display your messages with the `display()`-method:

```
myMessenger.display(
     // Type of message ('success', 'danger', 'confirm', 'info')
    'danger', 
     // Header title
    'Warning',
     // Message
    'Die maximale Anzahl von erlaubten Wörtern pro Text beträgt 750!',
     // Callback-function to execute in a confirm-Message
     myCallbackFunction,
     // selfdestruct-timer for message to fade out (in ms)
     3000);
```