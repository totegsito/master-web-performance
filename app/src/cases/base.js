import getCharacters from "../services/api/v1/getCharacters";
import createCharacterList from "../views/characterList";

document.addEventListener('DOMContentLoaded', async () => {
  const characters = await getCharacters();
  createCharacterList(characters.results)
});
