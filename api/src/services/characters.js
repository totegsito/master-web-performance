const httpClient = require('../lib/httpClient');

const fetchCharacters = async ({ limit, offset }) => {
  try {
    const { data } = await httpClient.get('characters', { limit, offset });
    return data;
  } catch (ex) {
    console.log(ex.message);
    throw ex;
  }
};

const fetchCharacterById = async (id, params) => {
  try {
    const { data } = await httpClient.get(`characters/${id}`, params);
    return data;
  } catch (ex) {
    console.log(ex.message);
    throw ex;
  }
};

const fetchComicsByCharacterId = async (characterId, params) => {
  try {
    const { data } = await httpClient.get(`characters/${characterId}/comics`, {
      orderBy: 'title',
      formatType: 'comic',
      offset: params.offset || 0,
      limit: params.limit || 5,
    });
    return data;
  } catch (ex) {
    console.log(ex.message);
    throw ex;
  }
};

module.exports = {
  fetchCharacters,
  fetchCharacterById,
  fetchComicsByCharacterId,
};
