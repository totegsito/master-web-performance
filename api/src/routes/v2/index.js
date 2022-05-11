const compression = require('compression');
const { Router } = require('express');

const createV2CharacterRoutes = require('./characters');

const router = Router();

const createApiRoutes = () => {
  router.use(compression());
  return createV2CharacterRoutes(router);
};

module.exports = () => createApiRoutes();
