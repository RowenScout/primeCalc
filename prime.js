'use strict';

var primes = [2, 3, 5, 7];
var number = 8;
var i = 0;
var factors = 0;

function isPrime(number) {
  factors = 0;
  for (var i = 0; i < primes.length; i++) {
    if (number % primes[i] === 0) {
      factors++;
      console.log(number + ' is not prime');
    }
  }

  if (factors === 0) {
    console.log(number + ' is prime.');
    primes.push(number);
  }

  number++;
}

function prime(maxRange) {
  for (var i = 8; i < maxRange; i++) {
    isPrime(i);
  }

  console.log('Success! ' + primes.length + 'primes found between zero and ' + maxRange + '.');
  console.log(primes);
}

var maxRange = prompt("Calculate all prime numbers below: ");
prime(maxRange);
alert("Found " + primes.length + " prime numbers below " + maxRange + " . Check the console for the list of primes!")
