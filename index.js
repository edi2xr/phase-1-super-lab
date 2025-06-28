// Parent Class
class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

// Subclass: Deciduous
class Deciduous extends Tree {
  constructor(species, name) {
    super(species); // Call parent constructor
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Deciduous trees shed their leaves annually.`;
  }
}

// Subclass: Evergreen
class Evergreen extends Tree {
  constructor(species, name) {
    super(species); // Call parent constructor
    this.name = name;
  }

  static definition() {
    return `${super.definition()} Evergreens keep their leaves all year round.`;
  }
}

// Example usage:
const oak = new Deciduous("Quercus", "Oak");
console.log(oak.species); // Quercus
console.log(oak.name);    // Oak
console.log(Deciduous.definition());

const pine = new Evergreen("Pinus", "Pine");
console.log(pine.species); // Pinus
console.log(pine.name);    // Pine
console.log(Evergreen.definition());
