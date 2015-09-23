var sizeof = require('object-sizeof');
var oloo = require('./oloo');
var pcoo = require('./pseudo-classical');

var olooDog = oloo.createDog('snoopy', 'dalmata');
var olooWolf = oloo.createWolf('Fenrir', 'viking-wolf');
var pcooDog = pcoo.createDog('snoopy', 'dalmata');
var pcooWolf = pcoo.createWolf('Fenrir', 'viking-wolf');

console.log('Oloo objects sizes');
console.log('Dog ' + sizeof(olooDog) + ' bytes.');
console.log('Wolf ' + sizeof(olooWolf) + ' bytes.');

console.log('pseudo-classical objects sizes');
console.log('Dog ' + sizeof(pcooDog) + ' bytes.');
console.log('Wolf ' + sizeof(pcooWolf) + ' bytes.');
