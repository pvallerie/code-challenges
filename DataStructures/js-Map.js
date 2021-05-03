// Map() object
// holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitave values) can
// be used as either a key or value

// Different uses of Map() object:

// creating a Map
const myMap = new Map([['Jim', "Bob"], ["Jack", "Attack"]])

// find number of key/value pairs `.size`
console.log('myMap has', myMap.size, 'key/value pairs')

// adding new entry `.set(key, value)`
myMap.set('John', 'John')
console.log('myMap after adding John:', myMap)

// updating an entry `.set(key, value)`
myMap.set('Jim', 'Joe')
console.log('myMap after changing value of Jim:', myMap)

// retrieve a value `.get(key)`
const jimsValue = myMap.get('Jim')
console.log('Jims value is: ', jimsValue)

// check if key/value pair exists in Map `.has(key)`
console.log('does Jay exist?', myMap.has('Jay'))

// delete a key/value pair `.delete(key)`
myMap.delete('Jack')
console.log('myMap after deleting Jack:', myMap)

// transform Map into an iterable object with sub-arrays of key/value pairs `.entries()`
const iterable = myMap.entries()
console.log('myMap after transforming to iterable:', iterable)

// return new iterator object with keys for each element in Map `.keys()`
console.log('keys of myMap:', myMap.keys())

// return new iterator object with values for eahc element in Map `.values()`
console.log('values of myMap:', myMap.values())

// iterating Map with forEach() method `.forEach(callbackFunction(value, key, Map))`
console.log(myMap.forEach((value, key, map) => console.log(key, ':', value)))

// empty the Map `.clear()`
myMap.clear()
console.log('myMap after clearing:', myMap)


