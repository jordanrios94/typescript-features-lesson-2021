const arrayTest: string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMakeTest: string[][] = [];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const vehicle = carMakers[0]
const myVehicle = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with `map`
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

/*

Typed Arrays -> Arrays where each element is some consistent type of value

Why do we care?
  - Typescript can do type inference when extracting values from an array
  - Typescript can prevent us from adding incompatible values to the array
  - We can get help with `map`, `forEach`, `reduce` functions
  - Flexible: Arrays can still contain multiple types

Where to use typed arrays? -> Any time we need to represent a collection of records with some arbitrary sort order
*/