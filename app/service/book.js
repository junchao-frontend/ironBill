'use strict';

const Service = require('egg').Service;

class BookService extends Service {
  // 增加图书
  async increase(payload) {
    return await this.ctx.model.Book.create(payload);
  }
  // 图书展示
  async show(payload) {
    const res = await this.ctx.model.Book.find(payload);
    return (this.ctx.body = res);
  }
  // 修改图书
  async update(_id, payload) {
    return this.ctx.model.Book.findByIdAndUpdate(_id, payload);
  }
  // 删除图书
  async delete(_id) {
    return this.ctx.model.Book.findByIdAndDelete(_id);
  }
  // 书名查找
  async findname(bookname, author, publisher) {
    console.log(bookname);
    const res = await this.ctx.model.Book.find({ $or: [{ bookname: { $regex: bookname.name } }, { author: { $regex: author.name } }, { publisher: { $regex: publisher.name } }] });
    return (this.ctx.body = res);
  }
}
module.exports = BookService;
