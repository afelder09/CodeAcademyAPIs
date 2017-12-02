const ideasRouter = require('express').Router();

// Bring in necessary functions from db.js
const {
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

// Set params for ideas router
ideasRouter.param('id', (req, res, next, id) => {
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    req.idea = idea;
    next();
  } else {
    res.status(404).send();
  }
});

// GET command to get all ideas
ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

// POST command to create new idea
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

// GET command to get an idea by a single ID
ideasRouter.get('/:id', (req, res, next) => {
  res.send(req.idea);
});

// PUT command to update an idea by a single ID
ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
  let updatedInstance = updateInstanceInDatabase('ideas', req.body);
  res.send(updatedInstance);
});

// DELETE command to delete
ideasRouter.delete('/:id', (req, res, next) => {
  const deleted = deleteFromDatabasebyId('ideas', req.params.id);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});

module.exports = ideasRouter;
