import { stat } from "fs";

export default {
    state: {
        appName: "I like kitty",
        collapse: false,
        themeColor: "#545c64",
        oldThemeColor: "#545c64",
        menuRouteLoaded: false   //菜单和路由是否已经加载
    },
    getters: {
        collapse(state) {
            return collapse;
        }
    },
    mutations: {
        onCollapse(state) {
            state.collapse = !state.collapse;
        },
        themeColor(state,themeColor){
            state.themeColor = themeColor
        },
        oldThemeColor(state,oldThemeColor){
            state.oldThemeColor = oldThemeColor
        },
        menuRouteLoaded(state,menuRouteLoaded){
            state.menuRouteLoaded = menuRouteLoaded
        }
    },
    actions: {
        onThemeChange({commit,state},data) {
            commit('themeColor',data.themeColor)
            commit('oldThemeColor',data.oldThemeColor)
        }
    }
};