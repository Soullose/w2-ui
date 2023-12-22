import Axios from 'axios';

const CONTENT_TYPE_APPLICATION_JSON = 'application/json;charset=utf-8';
const CONTEXT_TYPE_TEXT_PLAIN = 'text/plain;charset=utf-8';
const CONTENT_TYPE_APPLICATION_FROM_DATA = 'application/form-data;charset=utf-8';
const CONTENT_TYPE_MULTIPART_FORM_DATA = 'multipart/form-data';

var authorizationToken = '';

/**
 * 参数替换正则表达式
 */
const URL_TEMPLATE_OPTIONS = {
    interpolate: /\{(\w+)\}/g
};

var http = Axios.create({
    baseURL: '/' //config.baseURL, 不需要提供，参考在webpack中配置，详见 https://www.jianshu.com/p/f002ae1c046f
});
// 重写库的超时默认值
// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时
http.defaults.timeout = 2500;
// 添加请求拦截器
http.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        console.log('HEADERS:', config.headers);
        let authorizationCode = getToken();
        if (authorizationCode != '') {
            config.headers.Authorization = authorizationCode;
        }
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
http.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        let authorizationCode = getToken();
        if (authorizationCode == '') {
            saveAuthorization(response);
        }
        return response;
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

function saveAuthorization(response) {
    return (authorizationToken = response.headers.authorization);
}

function getToken() {
    var token = authorizationToken;
    return token;
}

export default http;
