<template>
    <div class="empty-shell">
        <alert-component v-if="emptyThread" message="You have no open rooms!"
                         subtitle="Open the contacts page to view start a conversation"
                         :dismissible="false" :slide-in="true"/>
        <section v-else class="chat-page-section">
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
            <div v-if="showThread && loaded && canSubscribe" class="chat-page-section__right">
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
                                       :pictureName="pictureOrDefaultPicture(message.picture)"
                        />
                    </div>
                </div>
                <form action="#" @submit.prevent="submitNewMessage">
                    <input type="text" v-model="newMessage" placeholder="Enter your message here...">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill-rule="evenodd"
                                  d="M1.513 1.96a1.374 1.374 0 011.499-.21l19.335 9.215a1.146 1.146 0 010 2.07L3.012 22.25a1.374 1.374 0 01-1.947-1.46L2.49 12 1.065 3.21a1.374 1.374 0 01.448-1.25zm2.375 10.79l-1.304 8.042L21.031 12 2.584 3.208l1.304 8.042h7.362a.75.75 0 010 1.5H3.888z"></path>
                        </svg>
                    </button>
                </form>
            </div>
            <div v-else-if="showThread && !loaded || !canSubscribe" class="chat-page-section__right">
<!--                            Add some cool loader here...-->
<!--                <message-loader />-->
            </div>
            <div v-else-if="!showThread" class="chat-page-section__right">
                <chat-info-page />
            </div>
        </section>
    </div>
</template>

<script>
import MessageBlock from "../Components/MessageBlock";
import LottieComponent from "../Components/LottieComponent";
import {globalMixin} from "../Mixins/GlobalMixin";
import ContactPill from "../Components/ContactPill";
import MessageLoader from "../Components/MessageLoader";
import ChatInfoPage from "./ChatInfo";
import AlertComponent from "../Components/AlertComponent";
import Echo from "laravel-echo";

export default {
    name: "ChatPage",
    components: {
        ChatInfoPage,
        MessageBlock,
        LottieComponent,
        ContactPill,
        MessageLoader,
        AlertComponent,
    },
    mixins: [globalMixin],
    data() {
        return {
            loaded: false,
            newMessage: "",
            searchInput: "",
            activeChatName: "",
            threads: [],
            messages: [],
            activeThreadId: "",
            canSubscribe: false
        };
    },
    watch: {
        storeUserId(val) {
            if (typeof val !== "undefined" && parseInt(val) > 0) {
                this.canSubscribe = true;
            }
        },
        canSubscribe (val) {
            if (val) {
                window.Echo = new Echo({
                    broadcaster: 'pusher',
                    key: '89e04b143c11e803ee52',
                    cluster: 'ap2',
                    useTLS: true,
                    csrfToken: window.options.csrfToken
                })

                window.Echo.private('messages.' + this.$store.getters.getUserAccount.user_id)
                    .listen('NewMessageEvent', data => {
                        this.threads.forEach(item => {
                            if (data.thread === parseInt(item.threadId)) {
                                item.lastMessage = data.message;
                            }
                        })
                        if (parseInt(data.thread) === parseInt(this.activeThreadId)) {
                            this.pushNewMessage({
                                messageId: parseInt(data.id),
                                message: data.message,
                                user: data.username,
                                owner: false,
                                picture: data.picture
                            });
                            // Remove notification
                            if (!this.$store.getters.getNewUnreadMessages) {
                                this.$store.dispatch("ACT_NEW_UNREAD_MESSAGES", false);
                            }
                            this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", false);
                        } else {
                            this.threads.forEach(item => {
                                if (data.thread === parseInt(item.threadId)) {
                                    item.hasNotification = true;
                                }
                            })
                        }
                    });
            }
        },
        threadId() {
            this.activeThreadId = this.$route.params.threadId;
        },
        threads(val) {
            let hasNotification = false;
            val.forEach(item => {
                if (item.hasNotification) {
                    hasNotification = true;
                }
            });
            if (!hasNotification) {
                this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", false);
            }
        }
    },
    computed: {
        storeUserId () {
            return this.$store.getters.getUserAccount.user_id
        },
        showThread() {
            return typeof this.activeThreadId !== "undefined";
        },
        activeThread() {
            return parseInt(this.activeThreadId);
        },
        cleanThread() {
            return false;
        },
        emptyThread() {
            return this.threads.length === 0;
        }
    },
    async mounted() {
        this.activeThreadId = this.$route.params.threadId;
        await this.fetchThreads(parseInt(this.activeThreadId));
        if (this.showThread) {
            this.setActiveThread(parseInt(this.activeThreadId));
            await this.fetchThreadMessages();
            setTimeout(() => {
                this.scrollToBottom();
            }, 300);
        }
        if (this.storeUserId) {
            this.canSubscribe = true;
        }
    },
    methods: {
        setActiveThread(id) {
            this.threads.forEach(item => {
                if (parseInt(item.threadId) === parseInt(id)) {
                    this.activeChatName = item.name;
                    item.active = true;
                } else {
                    item.active = false;
                }
            });
        },
        async fetchThreads() {
            await axios.get("/data/threads").then(response => {
                const freshThreads = [];
                response.data.forEach(item => {
                    freshThreads.push({
                        name: item.name,
                        lastMessage: item.last_message,
                        threadId: item.thread_id,
                        hasNotification: item.newMessage,
                        active: false
                    });
                });
                this.threads = freshThreads;
            });
        },
        threadSelected(id) {
            if (parseInt(this.activeThreadId) !== id) {
                this.setActiveThread(id)
                this.$router.push({ name: 'chat-page', params: { threadId: id } });
                this.activeThreadId = id;
                this.fetchThreadMessages();
                setTimeout(() => {
                    this.scrollToBottom();
                    this.removeMessageNotification(id);
                    this.setThreadMessagesRead();
                }, 300);
            }
        },
        removeMessageNotification (id) {
            this.threads.forEach(item => {
                if (item.threadId === id) {
                    item.hasNotification = false;
                }
            })
        },
        searchForContact() {
            console.log(this.searchInput);
        },
        async setThreadMessagesRead() {
            await axios.get(`/data/messages/${this.activeThreadId}/read`);
        },
        async fetchThreadMessages() {
            this.loaded = false;
            await axios.get(`/data/messages/${this.activeThreadId}`)
                .then(response => {
                    if(response.status === 200) {
                        this.messages = response.data.messages;
                        this.hasUnread = response.data.hasUnread;
                        this.loaded = true;
                    }
                }).catch(error => {
                    this.useAlert(true, error.response, "danger");
                });
        },
        async submitNewMessage() {
            const message = {
                message: this.newMessage,
                recipient: this.activeThread,
                new_thread: this.cleanThread,
                owner: true,
                picture: this.$store.getters.getUserAccount.profilePicture,
                user: this.$store.getters.getUserAccount.username
            }
            await axios.post("/data/messages/new", message).then(response => {
                if (response.status === 201) {
                    const data = {
                        ...message,
                        messageId: response.data.id
                    };
                    this.pushNewMessage(data);
                    this.newMessage = "";
                }
            });
        },
        pushNewMessage(item) {
            this.messages.push({
                id: item.messageId,
                message: item.message,
                username: item.user,
                owner: item.owner,
                picture: item.picture
            });
            setTimeout(() => {
                this.scrollToBottom();
            }, 300);
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap');

.empty-shell {
    height: 100vh;
    background: #eff3ff;
}

.chatPage {
    font-family: 'Inconsolata', monospace;
    background: #eff3ff;
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
                background: #eff3ff;
                color: #a1a1a1;
                outline: none!important;

                &:focus, &:active {
                    color: #000000;
                }
            }

            button {
                background: #eff3ff;
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
            background: #ffffff;
        }

        &__messages {
            width: 100%;
            height: calc(100% - 80px);
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
                padding: 5px;
                border-radius: 11px 0 0 11px;
                background: #f1f1f1;
                color: #a1a1a1;
                outline: none!important;
                transition: all 0.3s ease;
                border-right: 1px solid #dedede;

                &:focus, &:active {
                    color: #000000;
                    background: #ffffff;

                    &+ {
                        background: #ffffff;
                    }
                }
            }

            button {
                background: #f1f1f1;
                border: 2px solid #f1f1f1;
                outline: none !important;
                padding: 5px 10px;
                transition: all 0.3s ease;

                svg {
                    transform: rotate(-45deg);
                    max-width: 20px;
                }
            }

            input:focus + button, input:active + button {
                background: #ffffff;
                border: 2px solid #ffffff;
            }
        }

        .loading-container {
            background: #eff3ff;
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
