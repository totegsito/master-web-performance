const httpClient = require('../lib/httpClient');

const fetchAllComics = async (params) => {
  const { offset, limit } = params;
  try {
    const { data } = await httpClient.get('comics', {
      orderBy: 'title', formatType: 'comic', offset, limit,
    });
    return data;
  } catch (ex) {
    console.log(ex.message);
    throw ex;
  }
};

const fetchComicById = async (id, params) => {
  try {
    const { data } = await httpClient.get(`comics/${id}`, params);
    return data;
  } catch (ex) {
    console.log(ex.message);
    throw ex;
  }
};

module.exports = {
  fetchAllComics,
  fetchComicById,
};
