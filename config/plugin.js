'use strict';

/** @type Egg.EggPlugin */
exports.static = {
    enable: true,
};
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};
exports.passport = {
    enable: true,
    package: 'egg-passport',
};
