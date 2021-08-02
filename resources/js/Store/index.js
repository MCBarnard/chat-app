import Vue from 'vue';
import Vuex from 'vuex';

import account from "./modules/account";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        options: window.options
    },
    getters: {
        options: state => state.options
    },
    mutations: {
        // ERROR_TRIGGERED (state, response) {
        //     state.error_response = response;
        //     state.error_open = true;
        // }
    },
    actions: {
        // TRIGGER_ERROR ({ commit }, response) {
        //     commit("ERROR_TRIGGERED", response);
        // }
    },
    modules: {
        account
    }
});

export default store;
