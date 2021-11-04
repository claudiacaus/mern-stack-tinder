import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import dotenv from 'dotenv';
import Cors from 'cors';

dotenv.config();

// App config
const app = express();

const port = process.env.PORT || 8001;

const connection_url = `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.aewrb.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url);

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO'));

app.post('/tinder/cards', async (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/tinder/cards', async (req, res) => {
  try {
    // Trying for getting the cards
    const allCards = await Cards.find(); // Getting the cards
    res.status(200).send(allCards); // Sending the cards
  } catch (error) {
    // Catching the error
    res.status(500).send(error); // Sending the error
  }
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
