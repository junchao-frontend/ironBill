'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async login2() {
    const { ctx } = this;
    const payload = ctx.request.body || {};
    // console.log(payload);
    const data1 = {
      name: '测试员',
      role: 0,
      token: '1fdsa23dsfgdsdas546xfvwqdf',
      photo: 'https://img0.baidu.com/it/u=1244881529,3297907499&fm=26&fmt=auto',
    };
    if (payload.account === 'test@' && payload.password === 'test@') {
      this.ctx.body = {
        res: data1,
        code: 200,
      };
    }
    const data2 = {
      name: '管理员',
      role: 1,
      token: '5423sadfsdgs214t21213',
      photo: 'https://img1.baidu.com/it/u=3364871237,1751868068&fm=15&fmt=auto',
    };
    if (payload.account === 'wjx' && payload.password === 'wjx8893686') {
      this.ctx.body = {
        res: data2,
        code: 200,
      };
    }
  }
  // 注册新用户
  // async create() {
  //   console.log(this.ctx.request.body);
  //   const payload = this.ctx.request.body;
  //   const res = await this.service.user.create(payload);
  //   const code = 200;
  //   this.ctx.body = { res, data: { code } };
  // }
  // // 获取用户详情
  // async detail() {
  //   const { ctx, service } = this;
  //   const id = ctx.params.id;
  //   const res = await service.user.detail(id);
  //   this.ctx.body = res;
  // }
  // async findusername() {
  //   const { ctx, service } = this;
  //   const username = ctx.query;
  //   console.log(username);
  //   const res = await service.user.findusername(username);
  //   if (res && res !== '') {
  //     ctx.body = res;
  //   } else {
  //     ctx.body = '没有';
  //   }
  // }
  // async update() {
  //   const id = this.ctx.params.id;
  //   const payload = this.ctx.request.body;
  //   const res = await this.service.user.update(id, payload);
  //   const code = 200;
  //   this.ctx.body = { res, data: { code } };
  // }
  // // 用户登录
  // async login() {
  //   const { ctx, service } = this;
  //   const payload = ctx.request.body || {};
  //   const res = await service.user.login(payload.username);
  //   if (res.password === payload.password) {
  //     const code = 200;
  //     const role = 2;
  //     this.ctx.body = { res, data: { role, code } };
  //   } else {
  //     ctx.body = '账号不存在或密码不正确';
  //   }
  // }
}
module.exports = UserController;
