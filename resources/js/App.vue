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

export default {
    name: "App",
    components: { Navbar },
    mixins: [globalMixin],
    data() {
        return {
            loaded: false
        };
    },
    async beforeCreate() {
        this.loaded = false;
        await axios.get("/account-details").then(response => {
            this.$store.dispatch("ACT_ACCOUNT_AUTHED", true);
            this.$store.dispatch("ACT_ACCOUNT_USERNAME", response.data.username);
            this.$store.dispatch("ACT_ACCOUNT_USER_ID", response.data.user_id);
            this.$store.dispatch("ACT_ACCOUNT_THREADS", response.data.threads);
            this.$store.dispatch("ACT_ACCOUNT_EMAIL", response.data.email);
            // this.loaded = true;
        }).catch(error => {
            console.error(error.response.message)
        });
    },
    async mounted() {
        // this.testNotificationAnimations();
        await this.checkForNotifications();
    },
    computed: {
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
        }
    },
    methods: {
        async checkForNotifications() {
            // Check message Notifications

            // Check connection Requests
            await axios.get("/data/connection-requests").then(response => {
                if (response.data.length > 0) {
                    this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", true);
                    this.$store.dispatch("ACT_NEW_CONNECTION_REQUESTS", response.data);
                }
            });

            // Check profile notifications

            // Check Settings notifications
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
