<template>
<div class="chatPage">
    <message-block v-for="(message, index) in messages" :key="index"
        :message-id="message.id"
        :message="message.message"
        :user="message.username"
        :chat-color="message.owner === true ? ownerColor : recipientColor"
        :owner="message.owner"
    />
</div>
</template>

<script>
import MessageBlock from "../Components/MessageBlock";
import {globalMixin} from "../Mixins/GlobalMixin";

export default {
    name: "ChatPage",
    components: {MessageBlock},
    mixins: [globalMixin],
    data() {
        return {
            colors: [],
            messages: [
                {
                    id: Math.floor(Math.random() * 10000),
                    message: "Hello there",
                    username: "User1",
                    owner: true
                },
                {
                    id: Math.floor(Math.random() * 10000),
                    message: "Hi...",
                    username: "Fred",
                    owner: false
                },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "How do you do..?",
                //     username: "User1",
                //     owner: true
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "I be marvelous, how about you..?",
                //     username: "Fred",
                //     owner: false
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "I wanted to get in touch with you about our peculiar situation. it seems to have gotten a bit out of hand and we now need you to step in and take charge.",
                //     username: "User1",
                //     owner: true
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "What seems to be the problem? I suspected that we solved the issue years ago?",
                //     username: "Fred",
                //     owner: false
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "After the rise of the dark one, the alliance has withered. We have been left to face the demons our ancestors left and I am afraid until the chosen has been found... We do not stand a chance. Please, they need our protection, we cannot expect the wives and children to defend our town against these menacing beings.",
                //     username: "User1",
                //     owner: true
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "However, dire the situation seems, there will always be one who rises to the occasion. Our people have been doing this for centuries and they will continue to do so for centuries more. Have faith and you will see. You might find your chosen after all.",
                //     username: "Fred",
                //     owner: false
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "Is it trust in our people you have or trust in yourself you lack? Whichever it may be, there are only a handful of men left, 2 of which can still channel their aura into the elements but they both lack any formal training. If you do not heed these words, you will not have a home to return to.",
                //     username: "User1",
                //     owner: true
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "I be marvelous, how about you..?",
                //     username: "Fred",
                //     owner: false
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "I wanted to get in touch with you about our peculiar situation. it seems to have gotten a bit out of hand and we now need you to step in and take charge.",
                //     username: "User1",
                //     owner: true
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "What seems to be the problem? I suspected that we solved the issue years ago?",
                //     username: "Fred",
                //     owner: false
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "After the rise of the dark one, the alliance has withered. We have been left to face the demons our ancestors left and I am afraid until the chosen has been found... We do not stand a chance. Please, they need our protection, we cannot expect the wives and children to defend our town against these menacing beings.",
                //     username: "User1",
                //     owner: true
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "However, dire the situation seems, there will always be one who rises to the occasion. Our people have been doing this for centuries and they will continue to do so for centuries more. Have faith and you will see. You might find your chosen after all.",
                //     username: "Fred",
                //     owner: false
                // },
                // {
                //     id: Math.floor(Math.random() * 10000),
                //     message: "Is it trust in our people you have or trust in yourself you lack? Whichever it may be, there are only a handful of men left, 2 of which can still channel their aura into the elements but they both lack any formal training. If you do not heed these words, you will not have a home to return to.",
                //     username: "User1",
                //     owner: true
                // }
            ]
        };
    },
    computed: {
        recipientColor() {
            return this.colors.length !== 0 ? this.colors[0] : "#ffffff";
        },
        ownerColor() {
            return this.colors.length !== 0 ? this.colors[1] : "#ffffff";
        }
    },
    async mounted() {
        this.populateUserColors();
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "How do you do..?",
                username: "User1",
                owner: true
            });
        }, 2000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "I be marvelous, how about you..?",
                username: "Fred",
                owner: false
            });
        }, 4000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "I wanted to get in touch with you about our peculiar situation. it seems to have gotten a bit out of hand and we now need you to step in and take charge.",
                username: "User1",
                owner: true
            });
        }, 6000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "What seems to be the problem? I suspected that we solved the issue years ago?",
                username: "Fred",
                owner: false
            });
        }, 8000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "After the rise of the dark one, the alliance has withered. We have been left to face the demons our ancestors left and I am afraid until the chosen has been found... We do not stand a chance. Please, they need our protection, we cannot expect the wives and children to defend our town against these menacing beings.",
                username: "User1",
                owner: true
            });
        }, 10000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "However, dire the situation seems, there will always be one who rises to the occasion. Our people have been doing this for centuries and they will continue to do so for centuries more. Have faith and you will see. You might find your chosen after all.",
                username: "Fred",
                owner: false
            });
        }, 12000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "Is it trust in our people you have or trust in yourself you lack? Whichever it may be, there are only a handful of men left, 2 of which can still channel their aura into the elements but they both lack any formal training. If you do not heed these words, you will not have a home to return to.",
                username: "User1",
                owner: true
            });
        }, 14000);
        setTimeout(() => {
            this.pushNewMessage({
                id: Math.floor(Math.random() * 10000),
                message: "Is it trust in our people you have or trust in yourself you lack? Whichever it may be, there are only a handful of men left, 2 of which can still channel their aura into the elements but they both lack any formal training. If you do not heed these words, you will not have a home to return to.",
                username: "Fred",
                owner: false
            });
        }, 16000);
    },
    methods: {
        randomColor() {
            let col
            while (typeof col === "undefined") {
                const hex = "rgb(" + Math.floor(Math.random() * 255) + ", 100, 50)";
                if (hex !== "#9f0000" || hex !== "#141419" || hex !== "#909196" || hex !== "#313131") {
                    col = hex;
                }
            }
            return col;
        },
        populateUserColors() {
            this.colors = [this.randomColor(), this.randomColor()];
        },
        pushNewMessage(item) {
            this.messages.push({
                id: item.id,
                message: item.message,
                username: item.username,
                owner: item.owner
            });
        },
        async postMessageThrough() {
            const data = {
                message: "blah blah message",
                recipient: 1
            };
            await axios.post("/messages/new", data).then(response => {
                if (response.status === 201) {
                    console.log(response.data);
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');
.chatPage {
    font-family: 'Inconsolata', monospace;
    background: #212121;
    min-height: 100%;
    width: 100%;
    color: #fafafa;
}
.container {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 500px;
    flex-wrap: wrap;
}
.text {
    font-weight: 100;
    font-size: 28px;
    color: #fafafa;
}
</style>

<style scoped>

</style>
