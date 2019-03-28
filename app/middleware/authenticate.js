'use strict';

/**
 * 认证中间件
 * @param options
 * @returns {authenticate}
 */
module.exports = options => {
    return async function authenticate(ctx, next) {
        if (ctx.path == '/login') {
            await next();
        } else {
            if (ctx.isAuthenticated()) {
                await next();
            } else {
                await ctx.redirect('/login')
            }
        }
    };
};