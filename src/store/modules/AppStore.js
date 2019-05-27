export default {
    state: {
        appName: "I like kitty",
        collapse: false
    },
    getters: {
        collapse(state) {
            return collapse;
        }
    },
    mutations: {
        collapse(state) {
            state.collapse = !state.collapse;
        }
    },
    actions: {
        
    }
};