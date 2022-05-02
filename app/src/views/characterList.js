import createCard from "../components/card";

const createCharacterList = (characters) => {
  const selector = document.querySelector('#characterList')
  const list = characters.map(character => createCard({
    name: character.name,
    thumbnail: `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`,
    logo: `${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`,
    description: character.description,
    date: character.modified
  }))
  selector.innerHTML = list.join('\n');
}

export default createCharacterList
