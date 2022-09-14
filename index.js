const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

const person = require('./routes/personRoutes');

app.use(express.json());
app.use(person);

//rotas da API


//rota inicial
app.get('/', (_request, response) => response.status(200).json('Hello World!'));


mongoose.connect(
  process.env.URL_MONGO,
)
  .then(() =>
    console.log(`Connected to MongoDB, port ${process.env.PORT}`),
    app.listen(process.env.PORT)
  )
  .catch((error) => console.log(error));
