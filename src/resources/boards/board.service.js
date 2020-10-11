const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getOne = id => boardsRepo.getOne(id);

module.exports = { getAll, getOne };
