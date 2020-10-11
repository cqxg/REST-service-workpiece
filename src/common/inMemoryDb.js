const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const DB = {
  users: [],
  boards: [],
  tasks: []
};

DB.users.push(new User(), new User(), new User());
DB.boards.push(new Board(), new Board(), new Board());

const getAllUsers = async () => [...DB.users];
const getAllBoards = async () => [...DB.boards];

const getUser = async id => DB.users.filter(item => item.id === id)[0];
const getBoard = async id => DB.boards.filter(item => item.id === id)[0];

const updateUser = async user => {
  const { id } = user;
  const curr = DB.users.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.users = [...DB.users.slice(0, curr), user, ...DB.users.slice(curr + 1)];
    return true;
  }
  return false;
};

const createUser = async user => {
  DB.users.push(user);
  return user;
};

const removeUser = async id => {
  const curr = DB.users.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.users = DB.users.filter(item => item.id !== id);
    return true;
  }
  return false;
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
  getAllBoards,
  getBoard
};
