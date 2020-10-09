const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => [...DB];

const getUser = async id => DB.filter(item => item.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

module.exports = { getAllUsers, getUser, createUser };
