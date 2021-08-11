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
        }
    }
};
