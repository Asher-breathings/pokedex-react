import axios from "axios";


class PokemonAPI {

  #URL_API = "https://pokeapi.co/api/v2";
  #next = null;
  constructor() {}

  /**
   * 
   * @param {Number} offset 
   * @param {Number} limit 
   * @returns {Promise<Array>}
   */
  async getPokemonList(offset = 0, limit = 50) {
    try {
      
      let targetURL = this.#next ? this.#next : `${this.#URL_API}/pokemon/?offset=${offset}&limit=${limit}`
      let {data} = await axios.get(targetURL);

      let { next, results } = data;

      this.#next = next;
      return results;

    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {String} url 
   * url로 데이터를 가져와야 할 때
   */
  async getDataByUrl(url) {
    try {
      let {data} = await axios.get(url);

      return data;
    } catch (error) {
      throw error;
    }
  }
}

const PokeAPI = new PokemonAPI(); 
export default PokeAPI