import axios from "axios";


class PokeAPI {

  #URL_API = "https://pokeapi.co/api/v2";
  constructor() {}

  async getPokemonList(offset = 0, limit = 50) {
    try {
      
      let {data} = await axios.get(`${this.#URL_API}/pokemon/?offset=${offset}&limit=${limit}`);

      return data;

    } catch (error) {
      throw error;
    }
  }
}

export default new PokeAPI();