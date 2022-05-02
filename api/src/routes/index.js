const { Router } = require('express');
//
// const {
//   getAllComics,
//   getComicById,
// } = require('./comics');

const createCharacterRoutes = require('./characters');

const router = Router();

const createApiRoutes = () => {
  createCharacterRoutes(router);
  return router;
};

// router.get('/comics', getAllComics);
// router.get('/comics/:comicId', getComicById);
// router.get('/characters/:characterId', getCharacterById);
// router.get('/characters/:characterId/comics', getComicsByCharacterId);

module.exports = createApiRoutes();
