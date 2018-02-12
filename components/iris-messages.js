import HermeneusEditor from "../../hermeneus-editor/editor.class_editor";
import EditorHelpers from "../../hermeneus-editor/hermeneus.editor.helpers";


export let IrisMessages = Vue.component('iris-messages', {
    props: ['messenger'],
    methods: {
        /**
         * Close message (remove from message-array
         * @param clickedMessage
         */
        close (clickedMessage) {
            this.messenger.Messages = EditorHelpers.ArrayWithout(clickedMessage, this.messenger.Messages )
        },
        /**
         * What happens if user presses confirm-button
         * @param message
         */
        confirm (message) {
            // Excecute callback function that was given to the message-object
            message.callback();
            // Then remove message
            this.close(message);
        }
    },
    template:
        `
            <div>
                <transition-group name="fade" >
                    <div class="iris-message" v-for="(message, index) in messages" v-bind:key="index">
                        <div class="iris-message__head">
                            
                            <div class="iris-message__head__title" v-html="message.title"></div>
                            <div class="iris-message__head__close" >
                                <button v-if="message.type !== 'confirm'" @click="close(message)">✖</button>
                            </div>
                        </div>
                        <div class="iris-message__body">
                            <div class="iris-message__body__typeicon icon" :class="'icon-' + message.type"><img :src="'../img/svg/iris-icon-' + message.type + '.svg'" width="15" height="15" alt=""></div>
                            <div class="iris-message__body__message iris-message__body__message-success"  v-if="message.type=='success'" v-html="message.message"></div>
                            <div class="iris-message__body__message iris-message__body__message-info"  v-if="message.type=='info'" v-html="message.message"></div>
                            <div class="iris-message__body__message iris-message__body__message-danger" v-if="message.type=='danger'" v-html="message.message"></div>
                            <div class="iris-message__body__message iris-message__body__message-confirm" v-if="message.type=='confirm'" v-html="message.message"></div>
                            <div class="iris-message__body__buttons-container" v-if="message.type=='confirm'">
                                <button class="button-alt" @click="close(message)">Abbrechen</button>
                                <button class="button-normal" @click="confirm(message)">Ja</button>
                            </div>
                        </div>
                    </div>        
                </transition-group>
            </div>
        `
});
