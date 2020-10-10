const User = require('../resources/users/user.model');

let DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => [...DB];

const getUser = async id => DB.filter(item => item.id === id)[0];

const updateUser = async user => {
  const { id } = user;
  const curr = DB.findIndex(item => item.id === id);
  if (curr > -1) {
    DB = [...DB.slice(0, curr), user, ...DB.slice(curr + 1)];
    return true;
  }
  return false;
};

const createUser = async user => {
  DB.push(user);
  return user;
};

const removeUser = async id => {
  const curr = DB.findIndex(item => item.id === id);
  if (curr > -1) {
    DB = DB.filter(item => item.id !== id);
    return true;
  }
  return false;
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
