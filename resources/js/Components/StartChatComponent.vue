<template>
    <div class="start-chat">
        <div class="top">
            <div class="heading">Connect with {{ $props.name }}</div>
            <div class="img-container">
                <img :src="imageUrl" alt="">
            </div>
        </div>
        <div class="bottom">
            <form action="#" @submit.prevent="sendMessage">
            <textarea placeholder="Enter your message" v-model="message"></textarea>
            <button type="submit">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "StartChatComponent",
    data() {
        return {
            message: ""
        }
    },
    computed: {
        imageUrl () {
            return this?.$store.getters.getImageStorageUrl + this.$props.image
        }
    },
    methods: {
        async sendMessage() {
            const data = {
                message: this.message,
                new_thread: true,
                recipient: this.$props.connectionId
            };
            await axios.post("/data/messages/new", data).then(response => {
                if (response.status === 201) {
                    this.$router.push({ name: 'chat-page', params: { threadId: response.data.threadId } });
                }
            })
        }
    },
    props: {
        connectionId: {
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            required: true
        },
    }
}
</script>

<style scoped lang="scss">
.start-chat {
    margin: auto;
    width: 100%;
    max-width: 450px;
    background: #ffffff;

    .top {
        .heading {
            font-size: 22px;
            font-weight: 400;
            border-bottom: 1px solid #c8d0d4;
            font-family: 'Lato';
            -webkit-font-smoothing: antialiased;
        }

        .img-container {
            margin: 10px auto;

            img {
                max-width: 140px;
                max-height: 140px;
                border-radius: 50%;
                margin: auto;
                display: block;
            }
        }
    }
    .bottom {
        padding: 10px;
        display: block;

        form {
            display: block;
            width: 100%;

            textarea {
                display: block;
                width: 100%;
                height: 150px;
                background: #f1f1f1;
                outline: none!important;
                -webkit-font-smoothing: antialiased;
                padding: 10px;
            }

            button {
                display: block;
                width: 100%;
                padding: 8px;
                background: #1e344b;
                color: #ffffff;
                -webkit-font-smoothing: antialiased;
            }
        }
    }
}
</style>
