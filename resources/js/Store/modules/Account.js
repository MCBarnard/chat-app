const account = {
    state: {
        userAccount: {
            authed: false,
            username: undefined,
            user_id: undefined,
            threads: undefined,
            email: undefined
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
    },
    actions: {
        ACT_ACCOUNT_AUTHED (state, authed) {
            state.commit("SET_ACCOUNT_AUTHED", authed);
        },
        ACT_ACCOUNT_USERNAME (state, authed) {
            state.commit("SET_ACCOUNT_USERNAME", authed);
        },
        ACT_ACCOUNT_USER_ID (state, authed) {
            state.commit("SET_ACCOUNT_USER_ID", authed);
        },
        ACT_ACCOUNT_THREADS (state, authed) {
            state.commit("SET_ACCOUNT_THREADS", authed);
        },
        ACT_ACCOUNT_EMAIL (state, authed) {
            state.commit("SET_ACCOUNT_EMAIL", authed);
        },
    }
};

export default account;
