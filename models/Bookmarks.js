const mongoose = require('mongoose');

const Bookmarks = mongoose.model('Bookmarks', {
   name: String,
   description: {
      type: String,
   },
   image: {
      type: String,
   },
   characterId: String,
   userId: String,
});

module.exports = Bookmarks;
