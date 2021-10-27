class PokeImages {

  static ImageType = Object.freeze({
    BackDefault : 'back_default',
    BackFemale : 'back_female',
    BackShiny : 'back_shiny',
    BackShiny_female : 'back_shiny_female',
    FrontDefault : 'front_default',
    FrontFemale : 'front_female',
    FrontShiny : 'front_shiny',
    FrontShinyFemale : 'front_shiny_female',
  });
  back_default = null;
  back_female = null;
  back_shiny = null;
  back_shiny_female = null;
  front_default = null;
  front_female = null;
  front_shiny = null;
  front_shiny_female = null;

  constructor(sprites) {

    Object.keys(sprites).forEach(property => {
      if(this[property] !== undefined) {
        this[property] = sprites[property];
      }
    });
  }
}

class Pokemon {

  #id
  #name
  #image
  #order
  #weight
  #flavorText
  #genus
  #types

  set id(_id) { this.#id = _id }
  get id() { return this.#id }

  set name(_name) { this.#name = _name }
  get name() { return this.#name }

  set image(_sprites) {
    this.#image = new PokeImages(_sprites);
  }

  /**
   * 
   * @param {PokeImages.ImageType} type 
   */
  getImage(type) {
    return this.#image[type];
  }

  set order(_order) { this.#order = _order }
  get order() { return this.#order }


  set weight(_weight) { this.#weight = _weight }
  get weight() { return this.#weight}

  set flavorText(_flavorText) { this.#flavorText = _flavorText }
  get flavorText() { return this.#flavorText}

  set genus(_genus) { this.#genus = _genus }
  get genus() { return this.#genus}
  /**
   * @param {Array}
   */
  set types(_types) { this.#types = _types};
  /**
   * @return {Array}
   */
  get types() { return this.#types}
}

export {Pokemon, PokeImages};