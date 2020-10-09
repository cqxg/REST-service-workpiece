const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllUsers();

const get = async id => DB.getUser(id);

const create = async user => {
  return DB.createUser(user);
};

module.exports = { getAll, get, create };
