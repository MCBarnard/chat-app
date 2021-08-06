<template>
<div class="homePage">
    <message-block :message-id="Math.floor(Math.random() * 10000)" message="Hello there"/>
    <message-block :message-id="Math.floor(Math.random() * 10000)" v-if="showSecond" message="Hi..."/>
</div>
</template>

<script>
import MessageBlock from "../Components/MessageBlock";

export default {
    name: "Home",
    components: { MessageBlock },
    data() {
        return {
            showSecond: false
        };
    },
    async mounted() {
        setTimeout(() => {
            this.showSecond = true;
        }, 5000);
    },
    methods: {
        async sendMessage() {
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
.homePage {
    font-family: 'Inconsolata', monospace;
    background: #212121;
    height: 100%;
    min-height: calc(100vh - 23.33px);
    width: 100%;
    color: #fafafa;
}
.container {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
}
.text {
    font-weight: 100;
    font-size: 28px;
    color: #fafafa;
}
</style>
