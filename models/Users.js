const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {type: String, required: true},
  token: String,
  hash: String,
  salt: String,
  bookmarks: {
    characters: Array,
    comics: Array
  }
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
