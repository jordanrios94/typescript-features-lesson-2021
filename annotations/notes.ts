/*

Type annotations -> Code we add to tell Typescript what type of value a variable will refer to

Type inference -> Typescript tries to figure out what type of value a variable refers to


Type inference

Variable Declaration    Variable Initialization
_________|_________    ___|___
|                 |    |     |
const         color  =  'red'

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us


Type annotations when to use:
 - When a function returns the 'any' type and we need to clarify the value
 - When we declare a variable on one line then initialize it later
 - When we want a variable to have a type that can't be inferred


Type inference when to use:
  - ALWAYS!


'Any' Type:
 - A type, just as 'string' or 'boolean' are
 - Means TS has no idea what this is. Can't check for correct property references
 - Avoid variables with 'any' at all costs

Type annotations for functions -> Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

Type inference for functions -> Typescript tries to figure out what type of value a function will return

No type inference for arguments!

Type inference works out output, but we won't use it!

*/