'use strict';

const Service = require('egg').Service;

class ironPlateService extends Service {
  // 增加租账单
  async create(payload) {
    console.log(payload);
    return await this.ctx.model.IronPlate.create(payload);
  }
  // 租赁数据展示
  async showIronData(payload) {
    const res = await this.ctx.model.IronPlate.find(payload);
    return (this.ctx.body = res);
  }
  // 修改租赁数据
  async update(_id, payload) {
    return this.ctx.model.IronPlate.findByIdAndUpdate(_id, payload);
  }
  // 删除租赁数据
  async delete(_id) {
    return this.ctx.model.IronPlate.findByIdAndDelete(_id);
  }
  // 分页
  async show(params) {
    return await this.ctx.model.IronPlate.aggregate([
      // { $match: { isValid: '1' } },
      {
        $match: {
          $and: [
            { name: { $regex: params.name } },
            { state: { $regex: params.state } }],
        },
      },
      { $sort: { _id: 1 } },
      { $skip: (params.page - 1) * params.pagesize },
      { $limit: params.pagesize * 1 },
    ]);
  }
  // 数据条数
  async showsum(params) {
    return await this.ctx.model.IronPlate.aggregate([
      // { $match: { isValid: '1' } },
      {
        $match: {
          $and: [
            { name: { $regex: params.name } },
            { state: { $regex: params.state } }],
        },
      },
      { $sort: { _id: 1 } },
      { $count: 'total' },
    ]);
  }
}

module.exports = ironPlateService;
