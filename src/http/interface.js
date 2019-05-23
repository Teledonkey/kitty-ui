import axios from './axios'

export const login = () => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}

export const getUser = () => {
    return axios({
        url: '/user',
        method: 'get'
    })
}

export const getMenu = data => {
    return axios({
        url: '/menu',
        method: 'post',
        data
    })
}

export default {
    login,
    getUser,
    getMenu
}