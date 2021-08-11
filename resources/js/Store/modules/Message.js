const message = {
    state: {
        messages: {
            newUnreadMessage: false
        }
    },
    getters: {
        getNewUnreadMessage: state => state.messages.newUnreadMessage,
    },
    mutations: {
        SET_NEW_UNREAD_MESSAGE (state, payload) {
            state.messages.newUnreadMessage = payload;
        }
    },
    actions: {
        ACT_NEW_UNREAD_MESSAGE (state, payload) {
            state.commit("SET_NEW_UNREAD_MESSAGE", payload);
        },
    }
};

export default message;
