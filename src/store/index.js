import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {},
	plugins: [createPersistedState({})],
	state: {},
	getters: {},
	mutations: {},
	actions: {},
});
