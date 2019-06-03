import Vue from 'vue'
import vuex from 'vuex'
import AppStore from './modules/AppStore'
import Menu from './modules/Menu'

Vue.use(vuex);

const store = new vuex.Store({
    modules: {
        app: AppStore,
        menu:Menu
    }
});

export default store;