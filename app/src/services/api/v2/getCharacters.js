import httpClient from '../../../lib/httpClient'

const getCharacters = async ({ offset, limit, fields = []  } = {}) => {
  try {
    const { data } = await httpClient.get('api/v2/characters', { offset, limit, fields })
    return data;
  } catch (ex) {
    console.log(ex.message)
    throw ex;
  }
}

export default getCharacters
