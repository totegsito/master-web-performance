const {
  fetchAllComics,
  fetchComicById,
} = require('../services/comics');

const getAllComics = async ({ offset, limit, fields }) => {
  try {
    const data= await fetchAllComics({ offset, limit, fields });
    return { success: true, ...data };
  } catch (ex) {
    return {
      success: false,
      msg: err?.response?.data?.message || err.msg
    }
  }
};

const getComicById = async (comicId) => {
  try {
    const data = await fetchComicById(comicId);
    return { success: true, ...data}
  } catch (err) {
    return {
      success: false,
      msg: err?.response?.data?.message || err.msg
    }
  }
};

module.exports = {
  getAllComics,
  getComicById,
};
