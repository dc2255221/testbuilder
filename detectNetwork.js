// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var preOne = cardNumber.substring(0, 1);
  var preTwo = cardNumber.substring(0, 2);
  var preThree = cardNumber.substring(0, 3);
  var preFour = cardNumber.substring(0, 4);
  var preSix = cardNumber.substring(0, 6);

  if ( (preTwo === '38' ||
    preTwo === '39') &&
    cardNumber.length === 14 ) {
    return "Diner's Club";
  }

  else if ( (preTwo === '34' ||
    preTwo === '37') &&
    cardNumber.length === 15 ) {
    return "American Express";
  }

  else if ( (preTwo === '51' ||
    preTwo === '52' ||
    preTwo === '53' ||
    preTwo === '54' ||
    preTwo === '55') &&
    cardNumber.length === 16 ) {
    return 'MasterCard';
  }

  else if ( (preFour === '6011' ||
    preThree === '644' ||
    preThree === '645' ||
    preThree === '646' ||
    preThree === '647' ||
    preThree === '648' ||
    preThree === '649' ||
    preTwo === '65') &&
    (cardNumber.length === 16 ||
    cardNumber.length === 19) ) {
      return 'Discover';
  }

  else if ( (preFour === '5018' ||
    preFour === '5020' ||
    preFour === '5038' ||
    preFour === '6304') &&
    (Number(cardNumber.length) >= 12 &&
    Number(cardNumber.length) <= 19) ) {
      return 'Maestro';
  }

  else if ( ( (Number(preSix) >= 622126 &&
    Number(preSix) <= 622925) ||
    (Number(preThree) >= 624 &&
    Number(preThree) <= 626) ||
    (Number(preFour) >= 6282 &&
    Number(preFour) <= 6288) ) &&
    ( Number(cardNumber.length) >= 16 &&
    Number(cardNumber.length) <= 19 ) ) {
      return 'China UnionPay';
  }

  else if ( ( preFour === '4903' ||
    preFour === '4905' ||
    preFour === '4911' ||
    preFour === '4936' ||
    preSix === '564182' ||
    preSix === '633110' ||
    preFour === '6333' ||
    preFour === '6759') &&
    ( cardNumber.length === 16 ||
    cardNumber.length === 18 ||
    cardNumber.length === 19) ) {
      return 'Switch';
  }

  else if ( preOne === '4' &&
    (cardNumber.length === 13 ||
    cardNumber.length === 16 ||
    cardNumber.length === 19) ) {
    return "Visa";
  }
};


