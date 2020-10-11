const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getOne = (boardId, taskId) => tasksRepo.getOne(boardId, taskId);
const create = board => tasksRepo.create(board);
const update = board => tasksRepo.update(board);
const remove = (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, getOne, create, update, remove };
