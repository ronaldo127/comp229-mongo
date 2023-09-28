const User = require('../models/user.server.model');

let createUser = async (data) => {
   const user = new User(data);
   await user.create();
   return user;
}

exports.create = async (req, res, next) => {
   const user = await User.create(req.body)
   res.status(200).json(user);
};

exports.list = async (req, res, next) => {
   const users = await User.find();
   res.status(200).json(users);
};
