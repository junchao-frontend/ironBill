'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const ironPlateSchema = new mongoose.Schema({
    // 名称
    name: {
      type: String,
      //  unique: true,
      required: true,
    },
    // 地址
    address: {
      type: String,
      required: true,
    },
    // 数量
    quantity: {
      type: String,
      required: true,
    },
    // 押金
    deposit: {
      type: String,
    },
    // 租金
    rent: {
      type: String,
    },
    // 板费
    board: {
      type: String,
    },
    // 叉车费
    forkliftFee: {
      type: String,
    },
    // 钩子
    gouzi: {
      type: String,
    },
    // 铁板状态
    state: {
      type: String,
      required: true,
    },
    // 起租日期
    startDate: {
      type: String,
      required: true,
    },
    // 撤回日期
    endDate: {
      type: String,
    },
    // 详情
    textarea: {
      type: String,
    },
  });
  return mongoose.model('IronPlate', ironPlateSchema);
};
