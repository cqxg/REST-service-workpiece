const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllBoards();

const getOne = async id => {
  const board = await DB.getBoard(id);
  if (!board) throw new Error(`The user with id: ${board} was not found`);
  return board;
};

module.exports = { getAll, getOne };
