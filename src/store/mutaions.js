import {
    RECEIVE_LOGIN_INFO
} from './mutaion-types';

export default {
    [RECEIVE_LOGIN_INFO](state, {
        personLoginInfo
    }) {
        state.personLoginInfo = personLoginInfo;
    }
}