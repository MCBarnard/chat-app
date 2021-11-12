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
            if (inner) {
                inner.scrollTop = inner?.scrollHeight;
            }
        },
        logout() {
            axios.get("/logout").then(() => {
                console.log("logging-out")
            });
            window.location = "/login";
        },
        copyStringToClipboard (str) {
            // Create new element
            const el = document.createElement('textarea');
            // Set value (string to be copied)
            el.value = str;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '');
            el.style = {position: 'absolute', left: '-9999px'};
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand('copy');
            // Remove temporary element
            document.body.removeChild(el);
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
