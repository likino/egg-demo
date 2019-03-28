'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async indexPage() {
        const ctx = this.ctx;
        await ctx.render('index.njk');
    }

    async cctvPage() {
        const {ctx} = this;
        await ctx.render('cctv.njk')
    }

    async loginPage() {
        const ctx = this.ctx;
        await ctx.render('login.njk',)
    }

    async logout() {
        const ctx = this.ctx;
        // ctx.logout();
        ctx.session = null;
        ctx.redirect('/login');
    }

    async login() {
        const ctx = this.ctx;
        console.log(ctx.request.body);
        var username = ctx.request.body.username;
        var password = ctx.request.body.password;
        const loginUser = {
            username: username,
            password: password
        };


        if (this.config.user.username == username
            && this.config.user.password == password) {
            console.log("登录成功");
            // ctx.login(loginUser);
            ctx.session.user = loginUser;
            ctx.redirect('/')

        } else {
            console.log("用户或者密码,登录失败");
            await ctx.render('login.njk', {message: '用户或者密码错误'})
        }

    }
}

module.exports = HomeController;
