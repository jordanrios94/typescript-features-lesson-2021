interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);

/*

Interfaces -> Creates a new type, describing the property names and value types of an object

General Strategy for Reusable Code in Typescript
  - Create functions that accept arguments that are typed
  - Objects/classes can decide to 'implement' a given interface to work with a function

*/