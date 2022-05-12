import getCharacters from "../services/api/v2/getCharacters";
import createCharacterList from "../views/characterList";
import createPager from "../views/createPager";
const defaultState = {
  limit: 6,
  offset: 0,
  fields: ['name', 'thumbnail', 'description', 'modified']
}

const updateContent = async (pagination) => {
  const result = await getCharacters({ ...defaultState, ...pagination });
  const { limit, offset, total, results: characters } = result

  createCharacterList(characters)
  createPager({ limit, offset, total, onPageChange: updateContent })
}

document.addEventListener('DOMContentLoaded', async () => updateContent(defaultState));
