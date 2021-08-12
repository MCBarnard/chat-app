const notifications = {
    state: {
        messages: {
            newUnreadMessage: false
        },
        contacts: {
            newConnectionRequest: false
        },
        settings: {
            newSettingsNotification: false
        }
    },
    getters: {
        getNewUnreadMessage: state => state.messages.newUnreadMessage,
        getNewConnectionRequest: state => state.contacts.newConnectionRequest,
        getNewSettingsNotification: state => state.settings.newSettingsNotification,
    },
    mutations: {
        SET_NEW_UNREAD_MESSAGE (state, payload) {
            state.messages.newUnreadMessage = payload;
        },
        SET_NEW_CONNECTION_REQUEST (state, payload) {
            state.contacts.newConnectionRequest = payload;
        },
        SET_NEW_SETTINGS_NOTIFICATION (state, payload) {
            state.settings.newSettingsNotification = payload;
        }
    },
    actions: {
        ACT_NEW_UNREAD_MESSAGE (state, payload) {
            state.commit("SET_NEW_UNREAD_MESSAGE", payload);
        },
        ACT_NEW_CONNECTION_REQUEST (state, payload) {
            state.commit("SET_NEW_CONNECTION_REQUEST", payload);
        },
        ACT_NEW_SETTINGS_NOTIFICATION (state, payload) {
            state.commit("SET_NEW_SETTINGS_NOTIFICATION", payload);
        },
    }
};

export default notifications;
