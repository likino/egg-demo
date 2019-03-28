'use strict';

module.exports = app => {
    const {router, controller } = app;
    router.get('/', controller.home.indexPage);
    router.get('/cctv', controller.home.cctvPage);
    router.get('/login', controller.home.loginPage);
    router.post('/login', controller.home.login);
    router.get('/logout', controller.home.logout);
    router.get('/hello', controller.test.hello)
};