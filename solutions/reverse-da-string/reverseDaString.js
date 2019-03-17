const reverseDaString = function(myString) {
  return myString.split('').reverse().join('');
};

const result = reverseDaString('hello, world!');
console.log(result);