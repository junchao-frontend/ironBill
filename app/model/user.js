'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
  });
  return mongoose.model('User', UserSchema);
};
