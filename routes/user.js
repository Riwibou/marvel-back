const express = require('express');
const router = express.Router();

const uid2 = require('uid2');
const SHA256 = require('crypto-js/sha256');
const encBase64 = require('crypto-js/enc-base64');

const Users = require('../models/Users');

// **************SIGNUP***************
router.post('/signup', async (req, res) => {
   try {
      const { email, password } = req.body;

      const userExists = await Users.findOne({ email });
      if (userExists) {
         return res.status(400).json({ error: 'User already exists' });
      }


      const salt = uid2(64);
      const hash = SHA256(password + salt).toString(encBase64);
      const token = uid2(64);


      const newUser = new Users({ email, hash, salt, token });
      await newUser.save();

      res.json({ email, token });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
   }
});

// ********************LOGIN*****************
router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user) {
         return res.status(404).json({ message: error.message });
      }


      const hash = SHA256(password + user.salt).toString(encBase64);
      if (hash !== user.hash) {
         return res.status(401).json({ message: error.message });
      }


      const token = uid2(64);

      res.json({ email, token });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;
