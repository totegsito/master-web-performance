const { Router } = require('express');

const v1Routes = require('./v1');
const v2Routes = require('./v2');

const router = Router();

const createRouter = (app) => {
  app.use('/api/v1', v1Routes(app)(router));
  app.use('/api/v2', v2Routes(app)(router));
  return router;
};

module.exports = createRouter;

