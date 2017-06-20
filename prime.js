'use strict';

var primes = [2];
var i = 0;
var factors = 0;

function isPrime(number) {
  factors = 0;
  for (var i = 0; i < primes.length; i++) {
    if (number % primes[i] === 0) {
      i = primes.length;
      factors++;
    }
  }

  if (factors === 0) {
    primes.push(number);
    document.write('<li>' + number + '</li>');
  }
}

function prime(maxRange) {
  for (var i = 3; i < maxRange; i += 2) {
    isPrime(i);
  }

  console.log('Success! ' + primes.length + ' primes found between zero and ' + maxRange + '.');
  console.log(primes);
}

var maxRange = prompt('Calculate all prime numbers below: ');
prime(maxRange);
alert('Found ' + primes.length + ' prime numbers below ' + maxRange + '. Check the console for the list of primes!');
