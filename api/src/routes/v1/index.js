const { Router } = require('express');
const createV1CharacterRoutes = require('./characters');

const router = Router();

const createApiRoutes = () => {
  createV1CharacterRoutes(router);
  return router;
};

module.exports = () => createApiRoutes();
