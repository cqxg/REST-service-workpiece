const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllUsers();

const getOne = async id => {
  const user = await DB.getUser(id);
  if (!user) throw new Error(`The user with id: ${id} was not found`);
  return user;
};

const update = async user => DB.updateUser(user);
const create = async user => DB.createUser(user);
const remove = async id => DB.removeUser(id);

module.exports = { getAll, getOne, create, update, remove };
