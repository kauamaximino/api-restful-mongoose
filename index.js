const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

const Person = require('./models/Person');

app.use(express.json());

//rotas da API
app.post('/person', async (request, response) => { 
  const { name, salary, approved } = request.body;
  const person = await Person.create({ name, salary, approved });
  return response.status(201).json(person);
});

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
