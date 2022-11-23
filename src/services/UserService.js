const UserModel = require("../models/User");

exports.getUserDetail = async (id) => {
  return await UserModel.findById(id);
};

exports.isExists = async (username) => {
  return await UserModel.exists({name: username});
};