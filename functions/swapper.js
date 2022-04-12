const swapper = function(key1,object1,key2,object2) {
//console.log('before swapping!',object1,object2);
let valueAtKeyOne = object1[key1];
let valueAtKeyTwo = object2[key2];
object1[key1] = valueAtKeyTwo;
object2[key2] = valueAtKeyOne;
console.log('after swapping!',object1,object2);

}

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });

module.exports = {swapper}
console.log(module);
