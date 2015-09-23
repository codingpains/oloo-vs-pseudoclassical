var oloo = require('./oloo');
var pcoo = require('./pseudo-classical');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite('OLOO vs Psuedo-Classical', {
  'onStart': function() {
    console.log('oloo =>', pcoo);
    console.log('pcoo =>', pcoo);
  },
  'onCycle': function(event) {
    console.log('Finished running ', event.target.name);
    console.log(String(event.target));
  },
  'onComplete': function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  }
});

suite.add('oloo', function() {
  var dog = oloo.createDog('snoopy', 'dalmata');
  var wolf = oloo.createWolf('Fenrir', 'viking-wolf');

  dog.bark();
  dog.fetch();

  wolf.bark();
  wolf.growl();
})

suite.add('pseudo-classical', function() {
  var dog = pcoo.createDog('snoopy', 'dalmata');
  var wolf = pcoo.createWolf('Fenrir', 'viking-wolf');
  dog.bark();
  dog.fetch();

  wolf.bark();
  wolf.growl();
});

suite.run({ 'async': true });
