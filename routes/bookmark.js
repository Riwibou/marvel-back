const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js');
const isAuthenticated = require('../middleware/isAuthenticated.js');

// Ajouter un favori à un utilisateur
router.post('/user/bookmark', isAuthenticated, async (req, res) => {
   try {
      const { userId, bookmarkId } = req.body;

      const user = await Users.findById(userId);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }

      user.bookmark.push(bookmarkId);
      await user.save();

      res.status(201).json({ message: '+ Bookmark Added +' });
   } catch (error) {
      res.status(400).json({ message: 'Failed to add bookmark' });
   }
});

router.delete('/user/bookmark', isAuthenticated, async (req, res) => {
   try {
      const { userId, bookmarkId } = req.body;

      const user = await Users.findById(userId);
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }

      user.bookmark = user.bookmark.filter((id) => id !== bookmarkId);
      await user.save();

      res.status(200).json({ message: '! Bookmark Deleted !' });
   } catch (error) {
      res.status(400).json({ message: 'Failed to delete bookmark' });
   }
});

module.exports = router;
