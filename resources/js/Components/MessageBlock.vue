<template>
<div class="message-container">
    <text-scramble
        :id="`text-scrambler-${$props.messageId}`"
        :phrases="arrayOfOneMessage"
        :time-delay="animateInTimer"/>
</div>
</template>

<script>
import TextScramble from "./TextScramble";

export default {
    name: "MessageBlock",
    components: { TextScramble },
    computed: {
        animateInTimer() {
            return this.$store.getters.getMessageAnimationTime;
        },
        arrayOfOneMessage() {
            return [this.$props.message];
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
        }
    }
}
</script>

<style scoped>

</style>
