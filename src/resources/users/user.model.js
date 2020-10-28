const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true
    },
    login: {
      type: String,
      unique: false,
      required: true
    },
    password: {
      type: String,
      unique: false,
      required: true
      // select: false
    }
  },
  { versionKey: false }
);

userSchema.statics.toResponse = user => {
  const { _id, name, login } = user;
  return { id: _id, name, login };
};

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};
