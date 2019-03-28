'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
    async hello() {
        const ctx = this.ctx;
        ctx.status = 200;
        ctx.body = {
            test: 'ok'
        }
    }
}

module.exports = TestController;