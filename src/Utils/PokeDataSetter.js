import PokeAPI from "./PokeAPI";
import { Pokemon } from "./Pokemon";

function getKoreanInLanguage(dataList) {
  let data = dataList
              .filter(item => item.language.name == "ko")
              .map(item => { delete item.language; return item});

  return data;
}
class PokeDataSetter {
  #pokemonList = new Array();
  #isComplete = false;
  #todoCount = 0;
  #completeCount = 0;

  loadPokemon() {
    return new Promise(async (resolve, reject) => {
      this.#isComplete = false;

      let pokemonList = await PokeAPI.getPokemonList();
      this.#todoCount = pokemonList.length;
      pokemonList.forEach(
        async ({name, url}) => {
          let pokemonInfo = await this.getPokemonInfo(name, url);

          this.#pokemonList.push(pokemonInfo);
          
          if(++this.#completeCount >= this.#todoCount) {
            this.#isComplete = true;
            this.#todoCount = 0;
            this.#completeCount = 0;
            resolve();
          }
        }
      ) 
    })
  }

  async getPokemonInfo (name, url) {
    let pokemonInfo = await PokeAPI.getDataByUrl(url);

    let pokemon = new Pokemon();
    // 이미지, 이름 등을 먼저 추출한다.
    let { id, order, species, types, sprites } = pokemonInfo;

    pokemon.id = id;
    pokemon.image = sprites;
    pokemon.order = order;

    let typeNames = await Promise.all(types.map(async ({type}) => {
      let typesByLanguage = await PokeAPI.getDataByUrl(type.url);
      let typeForKorean = getKoreanInLanguage(typesByLanguage.names)[0].name;
      return typeForKorean;
    }))

    pokemon.types = typeNames
    let pokemonSpec = await PokeAPI.getDataByUrl(species.url);

    let { names, flavor_text_entries, genera } = pokemonSpec;

    pokemon.name = getKoreanInLanguage(names)[0].name;
    pokemon.flavorText = getKoreanInLanguage(flavor_text_entries);
    pokemon.genus = getKoreanInLanguage(genera)[0].genus;

    return pokemon;
  }

  get pokemonList() { 
    return this.#pokemonList.sort((a,b) => a.order < b.order ? -1 : 1); 
  }

  getPokemon(name) {
    return this.#pokemonList.find(pokemon => pokemon.name === name);
  }

  isLoaded() {
    return new Promise((resolve, reject) => {
      let handler = setInterval(() => {
        if(this.#pokemonList.length > 0 && this.#isComplete) {
          clearInterval(handler);
          resolve();          
        }
      }, 300)
    })
  }
}

const PokemonDataManager = new PokeDataSetter();

PokemonDataManager.loadPokemon().catch(err => { throw err });
export default PokemonDataManager;