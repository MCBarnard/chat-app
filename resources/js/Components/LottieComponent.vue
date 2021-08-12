<template>
    <div>
        <lottie-player
            :src="$props.jsonUrl"
            :background="$props.background"
            :speed="$props.speed"
            :loop="$props.loop"
            :controls="$props.controls"
            :autoplay="$props.autoplay"
        ></lottie-player>
    </div>
</template>

<script>

export default {
    name: "LottieComponent",
    data() {
        return {

        };
    },
    props: {
        jsonUrl: {
            type: String,
            required: true
        },
        background: {
            type: String,
            default: "transparent"
        },
        speed: {
            type: String
        },
        loop: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        controls: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
