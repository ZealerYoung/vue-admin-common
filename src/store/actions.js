import {
    RECEIVE_LOGIN_INFO
} from './mutaion-types';

import {
    login
} from '../api'

export default {
    /**
     * 获取用户登录信息
     */
    async getLoginInfo({
        commit,
        state
    }) {
        const {
            name,
            pass,
            checkCode,
            rememberMe
        } = state.personParas;
        const result = await login(
            name,
            pass,
            checkCode,
            rememberMe);
        if (result.data == 0) {
            const personLoginInfo = result.data;
            commit(RECEIVE_LOGIN_INFO, {
                personLoginInfo
            })
        }
    }
}