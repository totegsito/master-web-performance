import httpClient from '../lib/httpClient'

const getCharacters = async ({ offset, limit = 100 } = {}) => {
  try {
    const { data } = await httpClient.get('characters', { offset, limit })
    return data;
  } catch (ex) {
    console.log(ex.message)
    throw ex;
  }
}

export default getCharacters
