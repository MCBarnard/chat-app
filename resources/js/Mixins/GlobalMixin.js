"use strict";

export const globalMixin = {
    methods: {
        scrollToBottom() {
            const inner = document.querySelector('.homePage__content-wrapper__right');
            inner.scrollTop = inner.scrollHeight;
        },
        logout() {
            axios.get("/logout").then(() => {
                console.log("logging-out")
            });
            window.location = "/login";
        },
        newUnreadMessage() {
            this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", true);
        },
        noNewUnreadMessage() {
            this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", false);
        },
    }
};
