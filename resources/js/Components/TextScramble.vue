<template>
    <div :id="$props.id" class="container">
        <div class="text"></div>
    </div>
</template>

<script>
class TextScramble {
    constructor(el, timeDelay, scrollDown) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
        this.timeDelay = timeDelay;
        this.scrollDown = scrollDown;
    }
    async setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * this.timeDelay);
            const end = start + Math.floor(Math.random() * this.timeDelay);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            }else if (this.frame >= start) {
                this.scrollDown();
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}
export default {
    name: "TextScramble",
    mounted() {
        const el = document.querySelector(`#${this.$props.id}`);
        const fx = new TextScramble(el, this.$store.getters.getScrambleAnimationTime, this.signalScroll);
        fx.setText(this.$props.phrase).then(() => {
            this.signalScroll();
        });
    },
    methods: {
        signalScroll() {
            this.$emit('unscrambled')
        }
    },
    props: {
        phrase: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        timeDelay: {
            type: Number,
            default: 1000
        }
    }
}
</script>

<style scoped>
</style>
