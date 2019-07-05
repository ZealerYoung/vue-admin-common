import ajax from "./ajax";
const baseUrl = 'https://www.wuxunkj.com:8089/api'; //后台请求地址

/**
 * 1.业务请求
 */

/**
 * 1) 登录请求
 * @param {*} name 
 * @param {*} pass 
 * @param {*} checkCode 
 * @param {*} rememberMe 
 */
export const login = (name, pass, checkCode, rememberMe) => ajax(`${baseUrl}/LoginApi/login`, {
    name,
    pass,
    checkCode,
    rememberMe
}, 'form');