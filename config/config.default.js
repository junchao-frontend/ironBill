/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // 临时关闭scrf   记着开

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604818414240_1120';

  // add your middleware config here
  config.middleware = [ 'robot' ];
  // config.mongoose = {
  //   url: 'mongodb://127.0.0.1:27017/egg-chao',
  //   options: {
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   },
  // };

  config.mongoose = {
    url: 'mongodb://admin:wjc0919%40@49.232.18.137:27017/junchao?authSource=admin',
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      autoReconnect: true,
      // reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  exports.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };
  exports.multipart = {
    mode: 'file',
    // will append to whilelist
    fileExtensions: [
      '.md',
      '.docx',
      '.pptx',
      '.rar',
      '.7z',
    ],
  };
  // config/config.default.js
  // add middleware robot
  exports.middleware = [
    'robot',
  ];
  // robot's configurations
  exports.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
