var Canine = {
  name: null,
  breed: null,
  init: function(args) {
    this.name = args.name;
    this.breed = args.breed;
    return this;
  },
  bark: function() {
    return 'bark! bark!'
  }
}

var Dog = Object.create(Canine);

Dog.fetch = function() {
  return 'stick';
};


var Wolf = Object.create(Canine);

Wolf.growl = function() {
  return 'grrrrr..';
};

module.exports = exports = {};

var createCanine = function(base, name, breed) {
  var canine = Object.create(base);
  return canine.init({
    name: name,
    breed: breed
  });
};

exports.createDog = function(name, breed) {
  return createCanine(Dog, name, breed);
};

exports.createWolf = function(name, breed) {
  return createCanine(Wolf, name, breed);
}
