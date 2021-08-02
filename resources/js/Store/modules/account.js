const account = {
    state: {
        userAccount: {
            authed: false
        }
    },
    getters: {
        getUserAccount: state => state.userAccount,
    },
    mutations: {
        SET_ACCOUNT_AUTHED (state, authed) {
            state.userAccount.authed = authed;
        }
    },
    actions: {
        ACT_ACCOUNT_AUTHED (state, authed) {
            state.commit("SET_ACCOUNT_AUTHED", authed);
        },
    }
};

export default account;
