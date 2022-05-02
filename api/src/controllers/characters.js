const {
  fetchCharacterById,
  fetchComicsByCharacterId, fetchCharacters,
} = require('../services/characters');

const getComicsByCharacterId = async (characterId, { offset, limit }) => {
  try {
    const { data } = await fetchComicsByCharacterId(characterId, { offset, limit });
    return {
      success: true,
      ...data
    }
  } catch (err) {
    return {
      success: false,
      msg: err?.response?.data?.message || err.msg
    }
  }
};

const getCharacters = async ({ limit, offset }) => {
  try {
    const { data } = await fetchCharacters({ limit, offset });
    return {
      success: true,
      ...data
    }
  } catch (err) {
    return {
      success: false,
      msg: err?.response?.data?.message || err.msg
    }
  }
}

const getCharacterById = async (characterId) => {
  try {
    const { data } = await fetchCharacterById(characterId);
    return {
      success: true,
      ...data
    };
  } catch (err) {
   return {
     success: false,
     msg: err?.response?.data?.message || err.msg
   }
  }
};


module.exports = {
  getCharacters,
  getCharacterById,
  getComicsByCharacterId,
};
