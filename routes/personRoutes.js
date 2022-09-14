const router = require('express').Router();
const Person = require('../models/Person');

router.post('/person', async (request, response) => { 
  const { name, salary, approved } = request.body;
  const person = await Person.create({ name, salary, approved });
  return response.status(201).json(person);
});

router.get('/person', async (_request, response) => {
  const person = await Person.find();
  return response.status(200).json(person);
});

router.get('/person/:id', async (request, response) => {
  const { id } = request.params;
  const person = await Person.findOne({id});
  return response.status(200).json(person);
});

router.patch('/person/:id', async (request, response) => {
  const { id } = request.params;
  const { salary } = request.body;
  const person = await Person.updateOne({id}, {salary});
  return response.status(200).json(person);
});

router.delete('/person/:id', async (request, response) => {
  const { id } = request.params;
  await Person.deleteOne({id});
  return response.status(204).end();
});

module.exports = router;