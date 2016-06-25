const mongoose = require('mongoose');

const User = mongoose.Schema({
  user: {type: String, unique: true, required: true},
  accountsFollowing: [ String ]
})

module.exports = mongoose.model(`User`, User);
