const { getCharacters } = require('../../controllers/characters');

const getCharactersRoute = async (req, res) => {
  const { query } = req;
  const { limit = 100, offset, fields } = query;
  try {
    const characters = await getCharacters({ limit, offset, fields });
    return res.json(characters);
  } catch (ex) {
    return res.code(500).send({
      status: false,
      msg: ex.message,
    });
  }
};

const createCharacterRoutes = (router) => {
  router.get('/characters', getCharactersRoute);
  return router;
};

module.exports = createCharacterRoutes;
