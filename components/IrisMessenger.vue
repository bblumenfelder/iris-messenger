<template>
    <div>
        <transition-group name="fade">
            <div class="iris-message" v-for="(message, index) in messenger.Messages" v-bind:key="index">
                <div class="iris-message__head">

                    <div class="iris-message__head__title" v-html="message.title"></div>
                    <div class="iris-message__head__close">
                        <button v-if="message.type !== 'confirm'" @click="close(message)">✖</button>
                    </div>
                </div>
                <div class="iris-message__body">
                    <div class="iris-message__body__typeicon icon" :class="'icon-' + message.type"><img
                            :src="'../img/svg/iris-icon-' + message.type + '.svg'" width="15" height="15" alt=""></div>
                    <div class="iris-message__body__message iris-message__body__message-success"
                         v-if="message.type==='success'" v-html="message.message"></div>
                    <div class="iris-message__body__message iris-message__body__message-info"
                         v-if="message.type==='info'" v-html="message.message"></div>
                    <div class="iris-message__body__message iris-message__body__message-danger"
                         v-if="message.type==='danger'" v-html="message.message"></div>
                    <div class="iris-message__body__message iris-message__body__message-confirm"
                         v-if="message.type==='confirm'" v-html="message.message"></div>
                    <div class="iris-message__body__buttons-container" v-if="message.type==='confirm'">
                        <button class="button-alt" @click="close(message)">Abbrechen</button>
                        <button class="button-normal" @click="confirm(message)">Ja</button>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>


    export default {
        name: "iris-messenger",

        props: ['messenger'],
        methods: {
            /**
             * Close message (remove from message-array
             * @param clickedMessage
             */
            close (clickedMessage) {
                this.messenger.Messages = this.messenger.Messages.filter(Item => {
                    return Item !== clickedMessage;
                })
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
    }
</script>

<style scoped>
    .iris-message {
        width: 50%;
        border: 1px solid #ddd;
        margin: 0 auto 0.25rem auto;
        border-radius: 3px;
        font-size: 0.85rem;
    }

    .iris-message__head {
        height: 1.5rem;
        padding: 0.25rem;
        background: #ddd;
        display: flex;
        justify-content: space-between;
    }

    .iris-message__head__title {
        font-size: 0.8rem;
        color: #fff;
    }

    .iris-message__head__close button {
        border-radius: 3px;
        font-size: 1rem;
        padding: 0;
        height: 1rem;
        width: 1rem;
        line-height: 1rem;
        background: none;
        color: #75868a;
    }

    .iris-message__body {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0.5rem;
    }

    .iris-message__body .icon {
        padding: 0;
    }

    .iris-message__body__message {
        margin-left: 1rem;
        max-width: 80%;
    }

    .iris-message__body__buttons-container {
        flex-basis: 100%;
        text-align: right;
    }
</style>