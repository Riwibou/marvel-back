const mongoose = require('mongoose')

const Users = mongoose.model({
  email: {
    type: String,
    required: true,
    unique: true,
    validate:
      {
        validator: isEmailValid,
        message: 'Invalid email'
      }
     },

  password: {type: String, required: true},
  token: String,
  hash: String,
  salt: String,
  favorites: {
    characters: Array,
    comics: Array
  }
})

const isEmailValid = (email) => {
  return /\S+@\S+\.\S+/.test(email)
}

module.exports = Users
