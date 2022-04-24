const Benchmark = require('benchmark');
const { mostDuplicates } = require('./dupes');
const { optimizedDuplicates } = require('./dupes');

const numbers = [];
for (let i = 0; i < 20000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('duplicates test 1', function() {
    mostDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

  suite
  .add('duplicates test 2', function() {
    optimizedDuplicates(numbers);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();

  