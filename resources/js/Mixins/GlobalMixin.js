"use strict";

export const globalMixin = {
    data() {
        return {
            alert: {
                show: "",
                message: "",
                subtitle: "",
                variant: "",
                dismissible: false,
                slideIn: false
            }
        }
    },
    methods: {
        useAlert(show, message, subtitle, variant = "info", dismissible = false, slideIn = false) {
            this.alert.show = show;
            this.alert.message = message;
            this.alert.subtitle = subtitle;
            this.alert.variant = variant;
            this.alert.dismissible = dismissible;
            this.alert.slideIn = slideIn;
        },
        pictureOrDefaultPicture(imageSlot) {
            if (typeof imageSlot !== "undefined" && imageSlot !== null && imageSlot !== "") {
                return imageSlot;
            }
            return this.$store.getters.getDefaultProfilePicture;
        },
        scrollToBottom() {
            const inner = document.querySelector('.chat-page-section__right__messages');
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
        newConnectionRequest() {
            this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", true);
        },
        noNewConnectionRequest() {
            this.$store.dispatch("ACT_NEW_CONNECTION_REQUEST", false);
        },
        newSettingsNotification() {
            this.$store.dispatch("ACT_NEW_SETTINGS_NOTIFICATION", true);
        },
        noNewSettingsNotification() {
            this.$store.dispatch("ACT_NEW_SETTINGS_NOTIFICATION", false);
        },
    }
};
