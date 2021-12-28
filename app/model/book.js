'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const BookSchema = new mongoose.Schema({
    loginName: {
      type: String,
      unique: true,
      required: true,
    },
    power: {
      type: String,
      required: true,
    },
    creatTime: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
  });
  return mongoose.model('Tabel', BookSchema);
};
