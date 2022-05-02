const {
  getAllComics,
  getComicById,
} = require('../controllers/comics');

const getComicsRoute = async (req, res) => {
  const { query } = req;
  const { offset, limit, fields } = query;
  try {
    const comics = await getAllComics({ offset, limit, fields });
    return res.json(comics);
  } catch (ex) {
    return res.code(500).send({
      status: false,
      msg: ex.message,
    });
  }
};


const getComicByIdRoute = async (req, res) => {
  const { params } = req;
  const { comicId } = params;
  try {
    const comic = await getComicById(comicId);
    return res.json(comic);
  } catch (ex) {
    return res.code(500).send({
      status: false,
      msg: ex.message,
    });
  }
};

const createComicsRouter = (router) => {
  router.get('/comics', getComicsRoute);
  router.get('/comics/:comicId', getComicByIdRoute);
  return router;
};

module.exports = createComicsRouter;
