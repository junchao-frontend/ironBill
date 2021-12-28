'use strict';
const Controller = require('egg').Controller;
const Minio = require('minio');
class ironPlateController extends Controller {
// 增加铁板租赁账单
  async create() {
    console.log(this.ctx.request.body);
    const payload = this.ctx.request.body;
    const res = await this.service.ironPlate.create(payload);
    const code = 200;
    this.ctx.body = { res, data: { code } };
  }
  // 展示铁板账单数据
  async showIronData() {
    const { ctx, service } = this;
    const payload = ctx.query;
    const res = await service.ironPlate.showIronData(payload);
    ctx.body = res;
  }
  // 修改租赁数据
  async update() {
    // console.log(this.ctx.request.body);
    const { ctx, service } = this;
    const payload = ctx.request.body;
    console.log(payload);
    const res = await service.ironPlate.update(payload._id, payload);
    const code = 200;
    this.ctx.body = { res, data: { code } };
  }
  // 删除租赁数据
  async delete() {
    const { ctx, service } = this;
    const _id = ctx.request.query;
    const res = await service.ironPlate.delete(_id);
    console.log(_id);
    const code = 200;
    ctx.body = { res, data: { code } };
  }
  // 租赁数据查找
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
  // 分页
  async showDataByPage() {
    // console.log(11111);
    const { ctx, service } = this;
    const params = ctx.query || {};
    params.pagesize = params.pagesize || 10;
    if (params.pagesize < 1) {
      params.pagesize = 10;
    }
    params.page = params.page || 1;
    if (params.page < 1) {
      params.page = 1;
    }
    params.name = params.name || '';
    params.state = params.state || '';
    console.log(params);
    const res = await service.ironPlate.show(params);
    const code = 200;
    const sum = await service.ironPlate.showsum(params);// 查询结果的数量
    let total = '';
    if (sum.length === 0) {
      total = 0;
    } else {
      total = sum[0].total;
    }
    ctx.body = { data: { total, code }, res };
  }

  async upload() {
    const { ctx } = this;
    console.log(5465465465, ctx.request.files);
    const file = ctx.request.files[0]; // file包含了文件名，文件类型，大小，路径等信息，可以自己打印下看看
    // 使用端点实例化minio客户端
    // 和访问键，如下所示。
    const minioClient = new Minio.Client({ endPoint: '49.232.18.137', port: 9000, useSSL: false, accessKey: 'admin', secretKey: 'admin123',
    });
    const metaData = { 'Content-Type': ctx.request.files[0].mimeType, 'X-Amz-Meta-Testing': 1234, example: 5678,
    };
    minioClient.fPutObject('chao', file.filename, file.filepath, metaData, function(err) { if (err) return console.log(err); console.log('File uploaded successfully.'); });
    ctx.body = { data: { data: `http://49.232.18.137:9000/chao/ + ${file.filename}`, code: 200 } };
  }
  async showImg() {
    const { ctx } = this;
    // 和访问键，如下所示。
    const minioClient = new Minio.Client({ endPoint: '49.232.18.137', port: 9000, useSSL: false, accessKey: 'admin', secretKey: 'admin123' });
    const bucketName = 'chao';
    const res = minioClient.listObjects(bucketName, '', true);
    // eslint-disable-next-line no-var
    var imgdata = [];
    function promise() {
      return new Promise((resolve, reject) => {
        const imgdatas = [];
        res.on('data', function(obj) { imgdatas.push(obj); });
        res.on('end', function() {
          resolve(imgdatas);
        });
        res.on('error', function(err) { reject(err); });
      });
    }
    await promise().then(res => {
      imgdata = res;
    });
    const code = 200;
    ctx.body = { data: { imgdata, code } };
    console.log(imgdata);
  }
}
module.exports = ironPlateController;
