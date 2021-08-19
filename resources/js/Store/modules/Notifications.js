const notifications = {
    state: {
        messages: {
            newUnreadMessage: false,
            newMessages: []
        },
        contacts: {
            newConnectionRequest: false,
            newRequests: []
        },
        settings: {
            newSettingsNotification: false,
            newNotifications: []
        }
    },
    getters: {
        getNewUnreadMessage: state => state.messages.newUnreadMessage,
        getNewUnreadMessages: state => state.messages.newMessages,
        getNewConnectionRequest: state => state.contacts.newConnectionRequest,
        getNewConnectionRequests: state => state.contacts.newRequests,
        getNewSettingsNotification: state => state.settings.newSettingsNotification,
        getNewSettingsNotifications: state => state.settings.newNotifications,
    },
    mutations: {
        SET_NEW_UNREAD_MESSAGE (state, payload) {
            state.messages.newUnreadMessage = payload;
        },
        SET_NEW_UNREAD_MESSAGES (state, payload) {
            state.messages.newMessages = payload;
        },
        SET_NEW_CONNECTION_REQUEST (state, payload) {
            state.contacts.newConnectionRequest = payload;
        },
        SET_NEW_CONNECTION_REQUESTS (state, payload) {
            state.contacts.newRequests = payload;
        },
        SET_NEW_SETTINGS_NOTIFICATION (state, payload) {
            state.settings.newSettingsNotification = payload;
        },
        SET_NEW_SETTINGS_NOTIFICATIONS (state, payload) {
            state.settings.newNotifications = payload;
        }
    },
    actions: {
        ACT_NEW_UNREAD_MESSAGE (state, payload) {
            state.commit("SET_NEW_UNREAD_MESSAGE", payload);
        },
        ACT_NEW_UNREAD_MESSAGES (state, payload) {
            state.commit("SET_NEW_UNREAD_MESSAGES", payload);
        },
        ACT_NEW_CONNECTION_REQUEST (state, payload) {
            state.commit("SET_NEW_CONNECTION_REQUEST", payload);
        },
        ACT_NEW_CONNECTION_REQUESTS (state, payload) {
            state.commit("SET_NEW_CONNECTION_REQUESTS", payload);
        },
        ACT_NEW_SETTINGS_NOTIFICATION (state, payload) {
            state.commit("SET_NEW_SETTINGS_NOTIFICATION", payload);
        },
        ACT_NEW_SETTINGS_NOTIFICATIONS (state, payload) {
            state.commit("SET_NEW_SETTINGS_NOTIFICATIONS", payload);
        },
    }
};

export default notifications;
