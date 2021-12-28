'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 增加新用户
  async create(payload) {
    return await this.ctx.model.User.create(payload);
  }
  //  用户登录
  async login(username) {
    const { ctx } = this;
    const res = await ctx.model.User.findOne({ username });
    console.log('------------------');
    console.log(res);
    return res;
  }
}

module.exports = UserService;
