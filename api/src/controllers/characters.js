const {
  fetchCharacters,
} = require('../services/characters');

const pick = require('../utils/pick')

const getCharacters = async ({ limit, offset, fields = [] }) => {
  try {
    const { data } = await fetchCharacters({ limit, offset });
    return {
      ...data,
      success: true,
      results: fields.length ? data.results.map(result => pick(result, fields)) : data.results
    }
  } catch (err) {
    return {
      success: false,
      msg: err?.response?.data?.message || err.msg
    }
  }
}


module.exports = {
  getCharacters,
};
