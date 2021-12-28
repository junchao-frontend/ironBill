'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/ironplate/create', controller.ironPlate.create);// 增加租赁铁板账单
  router.get('/api/ironplate/show', controller.ironPlate.showIronData);// 全部租赁数据展示
  router.put('/api/ironplate/update', controller.ironPlate.update);// 修改租赁数据
  router.delete('/api/ironplate/delete', controller.ironPlate.delete); // 删除图书
  router.get('/api/ironplate/findByPage', controller.ironPlate.showDataByPage); // 分页
  router.post('/api/user/login', controller.user.login2);// 登录账号
  router.post('/api/user/upload', controller.ironPlate.upload);// 上传图床
  router.get('/api/user/showImg', controller.ironPlate.showImg);// 展示图床数据
};

