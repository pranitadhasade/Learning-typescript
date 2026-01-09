//Arrays

let fruits: string[] = ['Apple', 'Banana', 'Orange'];

let numbers: Array<number> = [1, 2, 3, 4, 5];

let testresults: boolean[] = [true, false, true, true];

//readonly array
let readonlyFruits: ReadonlyArray<string> = ['Mango', 'Pineapple', 'Grapes'];
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

let stationaryItems: string[] = ['Green', 'Blue', 'Black', 'Red'];
console.log('Stationary Items:', stationaryItems);

stationaryItems[0] = 'Pink';
stationaryItems[3] = 'Yellow';
console.log('Stationary Items after modifications:', stationaryItems);

stationaryItems.pop();
stationaryItems.shift();
stationaryItems.push('Pink');
stationaryItems.unshift('Yellow');

console.log('Stationary Items after pop and shift:', stationaryItems);

let isRedPresent: boolean = stationaryItems.includes('Red');
console.log('Is Red present in stationary items?', isRedPresent);

//tuples
let person: [string, number, boolean] = ['Alice', 30, true];
console.log('Person Tuple:', person);

//union types with arrays
let mixedArray: (string | number)[] = ['Hello', 42, 'World', 100];
console.log('Mixed Array:', mixedArray);

// .map() method
let upperFruits: string[] = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase Fruits:', upperFruits);

let fullurls = fruits.map(path => `https://example.com/${path.toLowerCase()}`);
console.log('Full URLs:', fullurls);

// .filter() method
let longNamedFruits: string[] = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with names longer than 5 characters:', longNamedFruits);

// multidimensional arrays
let testmatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Test Matrix:', testmatrix);
//console.log('Element at (1,1):', testmatrix[1][1]); // Accessing element at row 1, column 1