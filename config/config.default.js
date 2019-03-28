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

exports.user = {
  username: 'admin',
  password: '123456'
};

