<template>
    <div :id="cardId" class="contact-card">
        <h3 class="heading">Connection request</h3>
        <div class="contact-card__top">
            <div class="contact-card__top__left">
                <img :src="imageUrl" alt="">
            </div>
            <div class="contact-card__top__right">
                <h3>{{ $props.name }}</h3>
                <p v-if="$props.message">
                    {{ $props.message }}
                </p>
                <p v-else>
                    You have been invited to join {{ $props.name }}'s contact list.
                </p>
            </div>
        </div>
        <div class="contact-card__bottom">
            <button @click="signalSelected" class="chat">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                    <path fill-rule="evenodd"
                          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z"></path>
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
    name: "ConnectionRequestCard",
    mixins: [globalMixin],
    props: {
        requestId: {
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    computed: {
        cardId() {
            return 'contact-card-unique-' + this.$props.requestId;
        },
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

            this.$emit("accepted", data);
        },
        signalBlocked() {
            const data = {
                ...this.$props
            };

            this.$emit("rejected", data);
        }
    }
}
</script>

<style scoped lang="scss">
.contact-card {
    width: 325px;
    background: #ffffff;
    box-shadow: 0 0 58px -48px #000000;
    border-radius: 5px;
    border: 1px solid #d8edf8;
    margin-bottom: 20px;
    min-height: 214px;

    .heading {
        margin: 0;
        font-size: 18px;
        padding: 5px 20px;
        text-align: center;
        display: block;
        border-bottom: 1px solid #f1f1f1;
        color: #2b444e;
        font-weight: 400;
    }

    &__top {
        padding: 16px;
        display: flex;

        &__left {
            min-width: 80px;

            img {
                max-width: 100px;
                max-height: 100px;
                border-radius: 50%;
                width: 100%;
                object-fit: contain;
                display: block;
                margin: auto;
            }
        }
        &__right {
            padding-left: 16px;

            h3 {
                font-weight: 500;
                font-size: 22px;
                color: #2c3e4f;
                width: 100%;
                text-align: left;
                margin: 5px 0;
            }

            p {
                color: #807d7d;
                margin: 0;
                word-break: break-all;
            }
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
.flip-out {
    transition: all 0.5s ease;
    transform: rotateX(90deg);
    overflow: hidden;
    margin: 0;
    box-shadow: unset;
    border: none;
}
.slide-out {
    transition: all 0.3s ease;
    height: 0;
    min-height: 0;
    overflow: hidden;
    margin: 0;
    box-shadow: unset;
    border: none;
}
</style>
