const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllBoards();

module.exports = { getAll };
