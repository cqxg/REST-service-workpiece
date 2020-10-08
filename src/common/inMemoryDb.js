const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User(), new User(), new User());

module.exports = DB;
