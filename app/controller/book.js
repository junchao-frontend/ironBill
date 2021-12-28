'use strict';
const Controller = require('egg').Controller;
class BookController extends Controller {
  // 增加图书
  async increase() {
    // console.log(2132312);
    console.log(this.ctx.request.body);
    const payload = this.ctx.request.body;
    const res = await this.service.book.increase(payload);
    const code = 200;
    this.ctx.body = { res, data: { code } };
  }
  // 图书展示
  async show() {
    const { ctx, service } = this;
    const payload = ctx.query;
    const res = await service.book.show(payload);
    ctx.body = res;
  }
  // 修改图书
  async update() {
    console.log(this.ctx.request.body);
    const { ctx, service } = this;
    const payload = ctx.request.body;
    console.log(payload);
    const res = await service.book.update(payload._id, payload);
    const code = 200;
    this.ctx.body = { res, data: { code } };
  }
  // 删除图书
  async delete() {
    const { ctx, service } = this;
    const _id = ctx.request.query;
    const res = await service.book.delete(_id);
    console.log(_id);
    const code = 200;
    ctx.body = { res, data: { code } };
  }
  // 图书查找
  async findname() {
    const { ctx, service } = this;
    const bookname = ctx.query;
    const author = ctx.query;
    const publisher = ctx.query;
    // console.log(bookname);
    const res = await service.book.findname(bookname, author, publisher);
    if (res && res !== '') {
      ctx.body = res;
    } else {
      ctx.body = '没有';
    }
  }
}
module.exports = BookController;
