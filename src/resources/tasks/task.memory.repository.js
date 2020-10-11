const DB = require('../../common/inMemoryDb');

const getAll = async boardId => DB.getAllTasks(boardId);

const getOne = async (boardId, id) => {
  const task = await DB.getTask(boardId, id);
  if (!task) throw new Error(`The task with id: ${task} was not found`);
  return task;
};

const create = async task => DB.createTask(task);
const update = async task => DB.updateTask(task);
const remove = async (boardId, id) => DB.removeTask(boardId, id);

module.exports = { getAll, getOne, create, update, remove };
