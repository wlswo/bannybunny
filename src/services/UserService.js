const UserModel = require("../models/User");

exports.getUserDetail = async (id) => {
  return await UserModel.findById(id);
};

exports.isExists = async (username) => {
  return await UserModel.exists({name: username});
};

exports.isExistSnsId = async (type,email) => {
  return await UserModel.exists({email:email,type:type});
}

exports.snsSignUp = async (type,email) => {
  return await UserModel.create({email:email, type:type});
}