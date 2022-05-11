const { getCharacters, getCharacterById, getComicsByCharacterId } = require('../../controllers/characters');

const getCharactersRoute = async (req, res) => {
  const { query } = req;
  const { limit = 100, offset } = query;
  try {
    const characters = await getCharacters({ limit, offset });
    return res.json(characters);
  } catch (ex) {
    return res.code(500).send({
      status: false,
      msg: ex.message,
    });
  }
};

const getCharacterByIdRoute = async (req, res) => {
  const { params } = req;
  const { characterId } = params;
  try {
    const characters = await getCharacterById(characterId);
    return res.json(characters);
  } catch (ex) {
    return res.code(500).send({
      status: false,
      msg: ex.message,
    });
  }
};

const getCharacterComicsRoute = async (req, res) => {
  const { query, params } = req;
  const { characterId } = params;
  const { offset, limit } = query;
  try {
    const comics = await getComicsByCharacterId(characterId, { offset, limit });
    return res.json(comics);
  } catch (ex) {
    return res.code(500).send({
      status: false,
      msg: ex.message,
    });
  }
};

const createCharacterRoutes = (router) => {
  router.get('/characters', getCharactersRoute);
  router.get('/characters/:characterId', getCharacterByIdRoute);
  router.get('/characters/:characterId/comics', getCharacterComicsRoute);
};

module.exports = createCharacterRoutes;
