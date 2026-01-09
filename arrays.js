//Arrays
var fruits = ['Apple', 'Banana', 'Orange'];
var numbers = [1, 2, 3, 4, 5];
var testresults = [true, false, true, true];
//readonly array
var readonlyFruits = ['Mango', 'Pineapple', 'Grapes'];
//readonlyFruits.push('Kiwi'); // Error: Property 'push' does not exist on type 'readonly string[]'
testresults.push(false); // Valid operation
//access array element
console.log('testresults:', testresults);
console.log('First fruit:', fruits[0]);
fruits[1] = 'Strawberry'; // Modify element
console.log('Modified fruits:', fruits);
//length of arrays
console.log('Number of fruits:', fruits.length);
console.log('Number of test results:', testresults.length);
fruits.push('Kiwi'); // Add element
fruits.unshift('Papaya'); // Add element at the beginning
console.log('Fruits after additions:', fruits);
fruits.pop(); // Remove last element
fruits.shift(); // Remove first element
console.log('Fruits after removals:', fruits);
var stationaryItems = ['Green', 'Blue', 'Black', 'Red'];
console.log('Stationary Items:', stationaryItems);
stationaryItems[0] = 'Pink';
stationaryItems[3] = 'Yellow';
console.log('Stationary Items after modifications:', stationaryItems);
stationaryItems.pop();
stationaryItems.shift();
stationaryItems.push('Pink');
stationaryItems.unshift('Yellow');
console.log('Stationary Items after pop and shift:', stationaryItems);
var isRedPresent = stationaryItems.includes('Red');
console.log('Is Red present in stationary items?', isRedPresent);
//tuples
var person = ['Alice', 30, true];
console.log('Person Tuple:', person);
//union types with arrays
var mixedArray = ['Hello', 42, 'World', 100];
console.log('Mixed Array:', mixedArray);
// .map() method
var upperFruits = fruits.map(function (fruit) { return fruit.toUpperCase(); });
console.log('Uppercase Fruits:', upperFruits);
var fullurls = fruits.map(function (path) { return "https://example.com/".concat(path.toLowerCase()); });
console.log('Full URLs:', fullurls);
// .filter() method
var longNamedFruits = fruits.filter(function (fruit) { return fruit.length > 5; });
console.log('Fruits with names longer than 5 characters:', longNamedFruits);
// multidimensional arrays
var testmatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Test Matrix:', testmatrix);
console.log('Element at (1,1):', testmatrix[1][1]); // Accessing element at row 1, column 1
