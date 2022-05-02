const express = require('express');

const {
  getAllComics,
  getComicById,
} = require('./comics');

const {
  getCharacterById,
  getComicsByCharacterId,
} = require('./characters');

const router = express.Router();

router.get('/comics', getAllComics);
router.get('/comics/:comicId', getComicById);
router.get('/characters/:characterId', getCharacterById);
router.get('/characters/:characterId/comics', getComicsByCharacterId);

module.exports = router;
