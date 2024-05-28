import {createProxyMiddleware} from 'http-proxy-middleware';

module.exports = function (app: any) {
    app.use(
        'oauth2/authorization/naver',
        createProxyMiddleware({
            target: 'https://perfume-bside.site/',  // 서버 url 설정
            changeOrigin: true,
        })
    );
};