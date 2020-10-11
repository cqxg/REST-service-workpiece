const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllBoards();

const getOne = async id => {
  const board = await DB.getBoard(id);
  if (!board) throw new Error(`The board with id: ${board} was not found`);
  return board;
};

const update = async user => DB.updateBoard(user);
const create = async user => DB.createBoard(user);
const remove = async id => DB.removeBoard(id);

module.exports = { getAll, getOne, create, update, remove };
