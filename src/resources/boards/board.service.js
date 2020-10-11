const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

module.exports = { getAll };
