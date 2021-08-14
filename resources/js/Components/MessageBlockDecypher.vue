<template>
    <div class="message-container" :class="[{'owner': $props.owner}]">
        <section class="message-section" :class="[{'owner': $props.owner}]">
            <div class="prepend">
                <span :style="'color:' + chatColor " class="username">{{ $props.user }}</span><span class="group">@SecureChat:</span><span
                class="directory">/chat</span>
            </div>
            <text-scramble
                :id="`text-scrambler-${$props.messageId}`"
                :phrase="this.$props.message"
                :time-delay="animateInTimer"
                @unscrambled="scrollToBottom"
            />
        </section>
    </div>
</template>

<script>
import TextScramble from "./TextScramble";
import {globalMixin} from "../Mixins/GlobalMixin";

export default {
    name: "MessageBlockDecypher",
    components: {TextScramble},
    mixins: [ globalMixin ],
    computed: {
        animateInTimer() {
            return this.$store.getters.getMessageTimeOutTime;
        }
    },
    props: {
        message: {
            type: String,
            required: true
        },
        messageId: {
            type: Number,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        chatColor: {
            type: String,
            required: true
        },
        owner: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.message-container {
    display: flex;
    justify-content: flex-start;
    padding: 8px;
    color: #fff;
}
.message-container.owner {
    justify-content: flex-end;
}
.message-section {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    word-break: break-word;
    max-width: 500px;
    background: #313131;
    padding: 8px;
    border-radius: 5px;
    flex-wrap: wrap;

    span {
        font-weight: bold;
    }

    .group {
        color: #9f0000;
    }

    .directory {
        color: #056c05;
    }
    .container {
        display: flex;
        justify-content: flex-start;
        max-width: 500px;
        flex-wrap: wrap;
    }
}
.prepend {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #212121;
}
.message-section.owner {
    justify-content: flex-end;
    .container {
        display: flex;
        justify-content: flex-end;
    }
    .prepend {
        justify-content: flex-end;
    }
}
</style>
