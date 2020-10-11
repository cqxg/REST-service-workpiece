const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const DB = {
  users: [],
  boards: [],
  tasks: []
};

DB.users.push(new User(), new User(), new User());
DB.boards.push(new Board(), new Board(), new Board());
DB.tasks.push(new Task(), new Task(), new Task());

const getAllUsers = async () => [...DB.users];
const getAllBoards = async () => [...DB.boards];
const getAllTasks = async boardId =>
  DB.tasks.filter(item => item.boardId === boardId);

const getUser = async id => DB.users.filter(item => item.id === id)[0];
const getBoard = async id => DB.boards.filter(item => item.id === id)[0];
const getTask = async (boardId, id) =>
  DB.tasks.find(item => item.boardId === boardId && item.id === id);

const updateUser = async user => {
  const { id } = user;
  const curr = DB.users.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.users = [...DB.users.slice(0, curr), user, ...DB.users.slice(curr + 1)];
    return true;
  }
  return false;
};

const updateBoard = async board => {
  const { id } = board;
  const curr = DB.boards.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.boards = [
      ...DB.boards.slice(0, curr),
      board,
      ...DB.boards.slice(curr + 1)
    ];
    return true;
  }
  return false;
};

const updateTask = async task => {
  const { id, boardId } = task;
  const curr = DB.tasks.findIndex(
    item => item.id === id && item.boardId === boardId
  );
  if (curr > -1) {
    DB.tasks = [...DB.tasks.slice(0, curr), task, ...DB.tasks.slice(curr + 1)];
    return true;
  }
  return false;
};

const createUser = async user => {
  DB.users.push(user);
  return user;
};

const createBoard = async board => {
  DB.boards.push(board);
  return board;
};

const createTask = async task => DB.tasks.push(task);

const removeUser = async id => {
  const curr = DB.users.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.users = DB.users.filter(item => item.id !== id);
    DB.tasks = DB.tasks.map(item =>
      item.userId === id ? { ...item, userId: null } : item
    );
    return true;
  }
  return false;
};

const removeBoard = async id => {
  const curr = DB.boards.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.boards = DB.boards.filter(item => item.id !== id);
    DB.tasks = DB.tasks.filter(item => item.boardId !== id);
    return true;
  }
  return false;
};

const removeTask = async (boardId, id) => {
  const curr = DB.tasks.findIndex(item => item.id === id);
  if (curr > -1) {
    DB.tasks = DB.tasks.filter(item => item.id !== id);
    return true;
  }
  return false;
};

module.exports = {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
  getBoard,
  getAllBoards,
  createBoard,
  updateBoard,
  removeBoard,
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  removeTask
};
