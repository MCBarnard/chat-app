<template>
<div class="contact-card">
    <div class="contact-card__top">
        <img :src="imageUrl" alt="">
        <h3>{{ $props.name }}</h3>
    </div>
    <div class="contact-card__bottom">
        <button @click="signalSelected" class="chat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                <path fill-rule="evenodd"
                      d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"></path>
            </svg>
        </button>
        <button @click="signalBlocked" class="block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
                <path fill-rule="evenodd"
                      d="M1.5 8a6.5 6.5 0 0110.535-5.096l-9.131 9.131A6.472 6.472 0 011.5 8zm2.465 5.096a6.5 6.5 0 009.131-9.131l-9.131 9.131zM8 0a8 8 0 100 16A8 8 0 008 0z"></path>
            </svg>
        </button>
    </div>
</div>
</template>

<script>
import {globalMixin} from "../Mixins/GlobalMixin";

export default {
    name: "ContactCard",
    mixins: [globalMixin],
    props: {
        connectionId: {
            required: true
        },
        threadId: {
            required: false
        },
        name: {
            type: String,
            required: true
        },
        image: {
            required: true
        }
    },
    computed: {
        showThread() {
            return typeof this.$route.params.threadId !== "undefined";
        },
        imageUrl () {
            return this?.$store.getters.getImageStorageUrl + this.$props.image
        }
    },
    methods: {
        signalSelected() {
            const data = {
                ...this.$props
            };
            if (this.$props.threadId === null || typeof this.$props.threadId === "undefined") {
                this.$emit("start-thread", data);
            } else {
                this.$emit("go-to-thread", this.$props.threadId);
            }
        },
        signalBlocked() {
            const data = {
                connectionId: this.$props.connectionId,
                threadId: this.$props.threadId
            };
            this.$emit("block-thread", data);
        }
    }
}
</script>

<style scoped lang="scss">
.contact-card {
    max-width: 300px;
    min-height: 248px;
    background: #ffffff;
    box-shadow: 0 0 58px -48px #000000;
    border-radius: 5px;
    border: 1px solid #d8edf8;
    width: 100%;
    margin-right: 20px;
    margin-bottom: 20px;

    &__top {
        padding: 25px;

        img {
            max-width: 100px;
            max-height: 100px;
            border-radius: 50%;
            width: 100%;
            object-fit: contain;
            display: block;
            margin: auto;
        }

        h3 {
            font-weight: 500;
            font-size: 22px;
            color: #2c3e4f;
            width: 100%;
            text-align: center;
            margin: 5px 0;
        }
    }

    &__bottom {
        display: flex;
        justify-content: space-evenly;
        border-top: 1px solid #f1f1f1;
        padding: 0;

        button {
            background: #ffffff;
            width: 100%;
            text-align: center;
            cursor: pointer;

            svg {
                fill: #909fb5;
                width: 20px;
                margin: auto;
            }

            &.chat:hover {
                background: #f6f6f6;

                svg {
                    fill: #00d25b;
                }
            }

            &.block:hover {
                background: #f6f6f6;

                svg {
                    fill: #d90808;
                }
            }
        }
    }
}
</style>
