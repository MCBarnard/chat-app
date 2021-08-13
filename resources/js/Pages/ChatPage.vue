<template>
    <section class="chat-page-section">
        <div class="chat-page-section__left">
            <form action="#" @submit.prevent="searchForContact">
                <input type="text" class="searchbar-input" v-model="searchInput" placeholder="Search">
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                        <path fill-rule="evenodd"
                              d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                    </svg>
                </button>
            </form>
            <contact-pill v-for="(thread, index) in threads"
                          :key="index"
                          :has-notification="thread.hasNotification"
                          :thread-id="thread.threadId"
                          :last-message="thread.lastMessage"
                          :name="thread.name"
                          :active="thread.active"
                          @threadSelected="threadSelected($event)" />
        </div>
        <div v-if="showThread && loaded" class="chat-page-section__right">
            <div class="active-thread-user">
                {{ activeChatName }}
            </div>
            <div class="chat-page-section__right__messages">
                <div class="chatPage">
                    <message-block v-for="(message, index) in messages" :key="index"
                                   :message-id="message.id"
                                   :message="message.message"
                                   :user="message.username"
                                   :owner="message.owner"
                    />
                </div>
            </div>
            <form action="#" @submit.prevent="submitNewMessage">
                <input type="text" v-model="newMessage">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill-rule="evenodd"
                              d="M1.513 1.96a1.374 1.374 0 011.499-.21l19.335 9.215a1.146 1.146 0 010 2.07L3.012 22.25a1.374 1.374 0 01-1.947-1.46L2.49 12 1.065 3.21a1.374 1.374 0 01.448-1.25zm2.375 10.79l-1.304 8.042L21.031 12 2.584 3.208l1.304 8.042h7.362a.75.75 0 010 1.5H3.888z"></path>
                    </svg>
                </button>
            </form>
        </div>
        <div v-else-if="showThread && !loaded" class="chat-page-section__right">
<!--            Add some cool loader here...-->
            <message-loader />
<!--                        <div class="loading-container">-->
<!--                            <div class="loading-container__wrapper">-->
<!--                                <lottie-component speed="2" json-url="https://assets10.lottiefiles.com/packages/lf20_me1uv4m6.json"/>-->
<!--                            </div>-->
<!--                        </div>-->
        </div>
        <div v-else-if="!showThread" class="chat-page-section__right">
            Implement cool design that speaks to users here!
        </div>
    </section>
</template>

<script>
import MessageBlock from "../Components/MessageBlock";
import LottieComponent from "../Components/LottieComponent";
import {globalMixin} from "../Mixins/GlobalMixin";
import SpinningRedLoader from "../Components/SpinningRedLoader";
import ContactPill from "../Components/ContactPill";
import MessageLoader from "../Components/MessageLoader";

export default {
    name: "ChatPage",
    components: {
        MessageBlock,
        LottieComponent,
        SpinningRedLoader,
        ContactPill,
        MessageLoader
    },
    mixins: [globalMixin],
    data() {
        return {
            loaded: false,
            newMessage: "",
            searchInput: "",
            activeChatName: "",
            threads: [],
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
                }
            ]
        };
    },
    computed: {
        showThread() {
            return typeof this.$route.params.threadId !== "undefined";
        }
    },
    async mounted() {
        this.threads = await this.fetchThreads(parseInt(this.$route.params.threadId)).then((response) => response);
        if (this.showThread) {
            this.setActiveThread(parseInt(this.$route.params.threadId));
            await this.fetchThreadMessages(this.$route.params.threadId);
        }
    },
    methods: {
        setActiveThread(id) {
            this.threads.forEach(item => {
                if (item.threadId === id) {
                    this.activeChatName = item.name;
                    item.active = true;
                } else {
                    item.active = false;
                }
            });
        },
        async fetchThreads() {
            return new Promise(resolve => {
                let data;
                setTimeout(async () => {
                        data = [
                            {
                                name: "Test",
                                lastMessage: "blah dlah kla salaaaah",
                                threadId: 1,
                                hasNotification: true,
                                active: false
                            },
                            {
                                name: "User",
                                lastMessage: "blah dlah kla salaaaahblah dlah kla salaaaahblah dlah kla salaaaahblah dlah kla salaaaahblah dlah kla salaaaahblah dlah kla salaaaah",
                                threadId: 2,
                                active: false
                            },
                            {
                                name: "Jerald McBoing boing boing boing boing",
                                lastMessage: "blah dlah kla salaaaah",
                                threadId: 3,
                                hasNotification: true,
                                active: false
                            },
                        ];
                        resolve(data);
                    }, 500);
            });

        },
        threadSelected(id) {
            if (parseInt(this.$route.params.threadId) !== id) {
                this.setActiveThread(id)
                this.$router.push({ name: 'chat-page', params: { threadId: id } });
                this.fetchThreadMessages(id);
            }
        },
        searchForContact() {
            console.log(this.searchInput);
        },
        async fetchThreadMessages(id) {
            this.loaded = false;
            setTimeout(() => {
                this.loaded = true;
            }, 2500);
        },
        submitNewMessage() {
            const message = {
                id: Math.floor(Math.random() * 5000),
                message: this.newMessage,
                username: this.$store.getters.getUserAccount.username,
                owner: true
            }
            this.pushNewMessage(message);
            this.newMessage = "";
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
    background: #f1f1f1;
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

.chat-page-section {
    display: flex;
    height: 100vh;

    &__left {
        width: 100%;
        max-width: 250px;
        background: #23232bfc;

        form {
            display: flex;
            padding: 20px 7px;
            margin-bottom: 2rem;

            input {
                width: 100%;
                padding: 5px;
                border-radius: 11px 0 0 11px;
                background: #d6d6d6;
                color: #a1a1a1;
                outline: none!important;

                &:focus, &:active {
                    color: #000000;
                }
            }

            button {
                background: #d6d6d6;
                border-radius: 0 11px 11px 0;
                padding: 10px;
                outline: none!important;
                cursor: pointer;
                svg {
                    fill: #a1a1a1;
                }
            }
        }
    }

    &__right {
        width: 100%;
        overflow: hidden;
        position: relative;

        .active-thread-user {
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            box-shadow: 0 0 20px -12px #000000;
            z-index: 2;
            position: relative;
        }

        &__messages {
            width: 100%;
            height: calc(100% - 30px);
            overflow: auto;
            position: relative;
        }

        .chatPage {
            min-height: 100%;
            position: relative;
            z-index: 1;
        }

        form {
            display: flex;
            position: sticky;
            bottom: 0;
            left: 0;
            width: 100%;
            box-shadow: 0 0 20px -12px #000000;
            z-index: 2;

            input {
                width: 100%;
                outline: none !important;
            }

            button {
                background: #ffffff;
                border: 2px solid #f1f1f1;
                outline: none !important;

                svg {

                }
            }
        }

        .loading-container {
            background: #f1f1f1;
            height: 100vh;
            display: flex;
            justify-content: center;
            flex-direction: column;

            &__wrapper {
                margin: auto;
                width: 400px;
                height: 400px;
            }
        }
    }
}
</style>
