'use strict';

exports.keys = '123456';

exports.middleware = ['authenticate'];

exports.authenticate = {
  enable: true
};

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.njk': 'nunjucks',
  }
};

exports.session = {
  key: 'EGG_SESS',
  // maxAge: 0.5 * 3600 * 1000, // 30分钟
  maxAge: 10000, // 10秒
  httpOnly: true,
  encrypt: true,
  renew: true
};

exports.user = {
  username: 'admin',
  password: '123456'
};

