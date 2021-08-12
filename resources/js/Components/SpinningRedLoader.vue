<template>
    <div class="spinning-loader">
        <div class="ring-1 rotating-2">
            <div class="ring-2 rotating-1-reverse">
                <div class="ring-3 rotating-3">
                    <div class="ring-4 rotating-2-reverse">
                        <div class="word-box">
                            <p class="glow">
                                <text-scramble
                                    ref="wordsScrambling"
                                    id="text-scrambler-loader"
                                    phrase="Decrypting"
                                    :time-delay="50"
                                    @unscrambled="() => {}"
                                    @finished="restartTextAnimation"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextScramble from "./TextScramble";
export default {
    name: "SpinningRedLoader",
    components: { TextScramble },
    methods: {
        restartTextAnimation() {
                setTimeout(() => {
                    this.$refs.wordsScrambling?.scramble()
                }, 2000);
        }
    }
}
</script>

<style scoped lang="scss">
.spinning-loader {
    max-width: 400px;
    max-height: 400px;
    height: 100%;
    width: 100%;
}
.ring-1 {
    align-items: center;
    margin: 25px 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 12px solid transparent;
    background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    background-repeat: no-repeat;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(223deg, #f10500 39%, #ffffff00 20%),
    linear-gradient(110deg, #f10500 33%, #ffffff00 30%),
    linear-gradient(113deg, #f10500 69%, #ffffff00 30%),
    linear-gradient(242deg, #f10500 60%, #ffffff00 22%),
    linear-gradient(75deg, #f1050000 20%, #ffffff00 20%),
    linear-gradient(-13deg, #f10500 16%, #ffffff00 17%),
    linear-gradient(132deg, #f10500 42%, #ffffff00 20%),
    linear-gradient(47deg, #f10500 35%, #ffffff00 4%),
    linear-gradient(253deg, #f10500 73%, #ffffff00 20%);
    background-position: center center, left top, right top, left bottom, right bottom;
    background-origin: content-box, border-box, border-box, border-box, border-box;
    background-clip: content-box, border-box, border-box, border-box, border-box;
    transform: rotate(30deg);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.ring-2 {
    margin: 10px;
    align-items: center;
    width: 95%;
    height: 95%;
    min-width: 95%;
    min-height: 95%;
    border-radius: 50%;
    border: 12px solid transparent;
    background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    background-repeat: no-repeat;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(-2deg, #ffffff00 40%, #f10500 27%),
    linear-gradient(125deg, #ffffff00 40%, #f10500 36%),
    linear-gradient(125deg, #ffffff00 40%, #f10500 36%),
    linear-gradient(246deg, #ffffff00 65%, #f10500 41%);
    background-position: center center, left top, right top, left bottom, right bottom;
    background-origin: content-box, border-box, border-box, border-box, border-box;
    background-clip: content-box, border-box, border-box, border-box, border-box;
    transform: rotate(30deg);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.ring-3 {
    margin: 10px;
    align-items: center;
    width: 92%;
    height: 92%;
    min-width: 92%;
    min-height: 92%;
    border-radius: 50%;
    border: 12px solid transparent;
    background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    background-repeat: no-repeat;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(223deg, #f10500 39%, #ffffff00 20%),
    linear-gradient(110deg, #f10500 33%, #ffffff00 30%),
    linear-gradient(113deg, #f10500 69%, #ffffff00 30%),
    linear-gradient(242deg, #f10500 60%, #ffffff00 22%),
    linear-gradient(75deg, #f1050000 20%, #ffffff00 20%),
    linear-gradient(-13deg, #f10500 16%, #ffffff00 17%),
    linear-gradient(132deg, #f10500 42%, #ffffff00 20%),
    linear-gradient(47deg, #f10500 35%, #ffffff00 4%),
    linear-gradient(253deg, #f10500 73%, #ffffff00 20%);
    background-position: center center, left top, right top, left bottom, right bottom;
    background-origin: content-box, border-box, border-box, border-box, border-box;
    background-clip: content-box, border-box, border-box, border-box, border-box;
    transform: rotate(30deg);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.ring-4 {
    margin: 10px;
    align-items: center;
    width: 90%;
    height: 90%;
    min-width: 90%;
    min-height: 90%;
    border-radius: 50%;
    border: 12px solid transparent;
    background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    background-repeat: no-repeat;
    background-image: linear-gradient(#212121, #212121),
    linear-gradient(-2deg, #ffffff00 40%, #f10500 27%),
    linear-gradient(125deg, #ffffff00 40%, #f10500 36%),
    linear-gradient(125deg, #ffffff00 40%, #f10500 36%),
    linear-gradient(246deg, #ffffff00 65%, #f10500 41%);
    background-position: center center, left top, right top, left bottom, right bottom;
    background-origin: content-box, border-box, border-box, border-box, border-box;
    background-clip: content-box, border-box, border-box, border-box, border-box;
    transform: rotate(30deg);
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.word-box {
    color: #ffffff;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    // Counter the spinning by spinning in opposite direction
    -webkit-animation: rotating 1.5s linear infinite;
    -moz-animation: rotating 1.5s linear infinite;
    -ms-animation: rotating 1.5s linear infinite;
    -o-animation: rotating 1.5s linear infinite;
    animation: rotating 1.5s linear infinite;

    p {
        display: block;
        margin: auto;
    }
}

.glow {
    font-size: 30px;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 10px #f10500;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotating {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotating-reverse {
    from {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    to {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
.rotating-2 {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
}
.rotating-1-reverse {
    -webkit-animation: rotating-reverse 1s linear infinite;
    -moz-animation: rotating-reverse 1s linear infinite;
    -ms-animation: rotating-reverse 1s linear infinite;
    -o-animation: rotating-reverse 1s linear infinite;
    animation: rotating-reverse 1s linear infinite;
}
.rotating-3 {
    -webkit-animation: rotating 3s linear infinite;
    -moz-animation: rotating 3s linear infinite;
    -ms-animation: rotating 3s linear infinite;
    -o-animation: rotating 3s linear infinite;
    animation: rotating 3s linear infinite;
}
.rotating-2-reverse {
    -webkit-animation: rotating-reverse 2s linear infinite;
    -moz-animation: rotating-reverse 2s linear infinite;
    -ms-animation: rotating-reverse 2s linear infinite;
    -o-animation: rotating-reverse 2s linear infinite;
    animation: rotating-reverse 2s linear infinite;
}
</style>
