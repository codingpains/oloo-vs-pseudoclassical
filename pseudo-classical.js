function Canine(args) {
  this.name = args.name;
  this.breed = args.breed;
  return this;
}

Canine.prototype.bark = function() {
  return 'bark! bark!';
};

function Dog(args) {
  Canine.call(this, args);
}
Dog.prototype = Object.create(Canine.prototype);

Dog.prototype.fetch = function() {
  return 'stick';
};

function Wolf(args) {
  Canine.call(this, args);
}
Wolf.prototype = Object.create(Canine.prototype);

Wolf.prototype.growl = function() {
  return 'grrrrr..';
};

module.exports = exports = {};

exports.createDog = function(name, breed) {
  return new Dog({
    name: name,
    breed: breed
  });
};

exports.createWolf = function(name, breed) {
  return new Wolf({
    name: name,
    breed: breed
  });
};
