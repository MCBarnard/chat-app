const account = {
    state: {
        userAccount: {
            authed: false,
            username: undefined,
            user_id: undefined,
            threads: undefined,
            email: undefined,
            profilePicture: undefined,
            connectionId: undefined
        }
    },
    getters: {
        getUserAccount: state => state.userAccount,
    },
    mutations: {
        SET_ACCOUNT_AUTHED (state, authed) {
            state.userAccount.authed = authed;
        },
        SET_ACCOUNT_USERNAME (state, payload) {
            state.userAccount.username = payload;
        },
        SET_ACCOUNT_USER_ID (state, payload) {
            state.userAccount.user_id = payload;
        },
        SET_ACCOUNT_THREADS (state, payload) {
            state.userAccount.threads = payload;
        },
        SET_ACCOUNT_EMAIL (state, payload) {
            state.userAccount.email = payload;
        },
        SET_ACCOUNT_PICTURE (state, payload) {
            state.userAccount.profilePicture = payload;
        },
        SET_ACCOUNT_CONNECTION_ID (state, payload) {
            state.userAccount.connectionId = payload;
        },
    },
    actions: {
        ACT_ACCOUNT_AUTHED (state, authed) {
            state.commit("SET_ACCOUNT_AUTHED", authed);
        },
        ACT_ACCOUNT_USERNAME (state, authed) {
            state.commit("SET_ACCOUNT_USERNAME", authed);
        },
        ACT_ACCOUNT_USER_ID (state, id) {
            state.commit("SET_ACCOUNT_USER_ID", id);
        },
        ACT_ACCOUNT_THREADS (state, authed) {
            state.commit("SET_ACCOUNT_THREADS", authed);
        },
        ACT_ACCOUNT_EMAIL (state, authed) {
            state.commit("SET_ACCOUNT_EMAIL", authed);
        },
        ACT_ACCOUNT_PICTURE (state, picture) {
            state.commit("SET_ACCOUNT_PICTURE", picture);
        },
        ACT_ACCOUNT_CONNECTION_ID (state, number) {
            state.commit("SET_ACCOUNT_CONNECTION_ID", number);
        },
    }
};

export default account;
