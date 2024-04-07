const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const axios = require('axios');
const router = require('./routes/user');
app.use(cors());

app.use(router)

app.get('/characters', async (req, res) => {
   try {
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const limit = 100;
      const skip = (page - 1) * limit;

      const response = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`,
      );
      res.json(response.data);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

app.get('/comics', async (req, res) => {
  try {
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const limit = 100;
      const skip = (page - 1) * limit;

      const response = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`,
      );
      res.json(response.data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
});


app.get('/comics/:characterId', async (req, res) => {
   try {

      const characterId = req.params.characterId;
      console.log(characterId);

      const response = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`,
      );
      res.json(response.data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
});

app.get(`/comic/:comicId`, async (req, res) => {
   try {

      const comicId = req.params.comicId;
      const response = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}/?apiKey=${process.env.API_KEY}`,
      );

      res.json(response.data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
});

app.get(`/character/:characterId`, async (req, res) => {
   try {
      const characterId = req.params.characterId;
      const response = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY}`,
      );

      res.json(response.data);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
});

app.all('*', (req, res) => {
   res.status(404).json({ message: error.message });
});

app.listen(process.env.PORT, () => {
   console.log('WOOOOOOOOOHOOOOOUUUUU');
});
