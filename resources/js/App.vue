<template>
    <div class="homePage">
        <div class="homePage__content-wrapper">
            <div class="homePage__content-wrapper__left">
                <Navbar />
            </div>
            <div class="homePage__content-wrapper__right">
                <router-view />
            </div>
        </div>
</div>
</template>

<script>
import {globalMixin} from "./Mixins/GlobalMixin";
import Navbar from "./Components/Navbar";
import Echo from "laravel-echo";

export default {
    name: "App",
    components: { Navbar },
    mixins: [globalMixin],
    data() {
        return {
            loaded: false,
            canSubscribe: false
        };
    },
    async mounted() {
        this.loaded = false;
        await axios.get("/account-details").then(response => {
            this.$store.dispatch("ACT_ACCOUNT_AUTHED", true);
            this.$store.dispatch("ACT_ACCOUNT_USERNAME", response.data.username);
            this.$store.dispatch("ACT_ACCOUNT_USER_ID", response.data.user_id);
            this.$store.dispatch("ACT_ACCOUNT_THREADS", response.data.threads);
            this.$store.dispatch("ACT_ACCOUNT_EMAIL", response.data.email);
            this.$store.dispatch("ACT_ACCOUNT_CONNECTION_ID", response.data.connection_id);
            this.$store.dispatch("ACT_ACCOUNT_PICTURE", this.pictureOrDefaultPicture(response.data.profile_picture));
            this.loaded = true;
        }).catch(error => {
            console.error(error.response.message)
        });
        // this.testNotificationAnimations();
        await this.checkForNotifications();
    },
    computed: {
        canSubscribeComputed () {
            return this.canSubscribe;
        },
        storeUserId () {
            return this.$store.getters.getUserAccount.user_id
        },
        newConnectionRequestComputed: {
            get() {
                return this.$store.getters.getNewConnectionRequests;
            },
            set(val){
                return val
            }
        }
    },
    watch: {
        newConnectionRequestComputed(val) {
            if (val.length === 0) {
                this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", false);
            }
        },
        storeUserId(val) {
            if (val) {
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
                    .listen('NewMessageEvent', () => {
                        const path = this.$route.name;
                        if (path === "chat-landing" || path === "chat-page") {
                            this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", false);
                        } else {
                            this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", true);
                        }
                    });

                window.Echo.private('connections.' + this.$store.getters.getUserAccount.user_id)
                    .listen('NewConnectionRequestEvent', () => {
                        this.getConnectionRequests();
                    });
                window.Echo.private('connections-accepted.' + this.$store.getters.getUserAccount.user_id)
                    .listen('ConnectionRequestAcceptedEvent', () => {
                        this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", true);
                    });
            }
        }
    },
    methods: {
        async checkForNotifications() {
            // Check message Notifications
            await axios.get("/data/threads").then(response => {
                let hasNewMessage = false;
                response.data.forEach(item => {
                    if (item.newMessage) {
                        hasNewMessage = true;
                    }
                });
                if (hasNewMessage) {
                    this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", true);
                }
            });
            // Check connection Requests


            // Check profile notifications

            // Check Settings notifications
        },
        async getConnectionRequests() {
            await axios.get("/data/connection-requests").then(response => {
                if (response.data.length > 0) {
                    this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", true);
                    this.$store.dispatch("ACT_NEW_CONNECTION_REQUESTS", response.data);
                }
            });
        },
        testNotificationAnimations() {

            setTimeout(() => {
                this.newUnreadMessage()
            }, 1000);
            setTimeout(() => {
                this.newConnectionRequest()
            }, 2000);
            setTimeout(() => {
                this.newSettingsNotification()
            }, 3000);
            // ==================================
            setTimeout(() => {
                this.noNewUnreadMessage()
            }, 4000);
            setTimeout(() => {
                this.noNewConnectionRequest()
            }, 5000);
            setTimeout(() => {
                this.noNewSettingsNotification()
            }, 6000);
            // ==================================
            setTimeout(() => {
                this.newUnreadMessage()
            }, 7000);
            setTimeout(() => {
                this.newConnectionRequest()
            }, 8000);
            setTimeout(() => {
                this.newSettingsNotification()
            }, 9000);
            // ==================================
            setTimeout(() => {
                this.noNewUnreadMessage()
            }, 10000);
            setTimeout(() => {
                this.noNewConnectionRequest()
            }, 11000);
            setTimeout(() => {
                this.noNewSettingsNotification()
            }, 12000);
            // ==================================
        }
    }
}
</script>

<style scoped lang="scss">
body {
    scroll-behavior: smooth;
}
.homePage {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;

    &__content-wrapper {
        display: flex;
        justify-content: space-between;
        height: 100vh;

        &__right {
            width: 100%;
            overflow: auto;
        }
    }
}
</style>
