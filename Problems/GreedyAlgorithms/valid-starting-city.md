# Valid Starting City
Imagine you have a set of cities that are laid out in a circle, connected by a circular road that runs clockwise. Each city has a gas station that provides gallons of fuel, and each city is some distance away from the next city.

You have a car than can drive some number of miles per gallon of fuel, and your goal is to pick a starting city such that you can fill up your car with that city's fuel, drive to the next city, refill up your car with that city's fuel, drive to the next city, and so on and so forth until you return back to the starting city with 0 or more gallons of fuel left.

This city is called a valid starting city, and it's guaranteed that there will always be exactly one valid starting city.

For the actual problem, you'll be given an array of distances such that city`k` is `distances[i]` away from city `i + 1`. Since the cities are connected via a circular road, the last city is connected to tthe first city. In other words, the last distance in the `distances` array is equal to the distance from the last city to the first city. You'll also be given an array of fuel available at each city, where `fuel[i]` is equal to the fuel available at city `i`. The total amount of fuel available (from all cities combined) is exactly enough to travel to all cities, Your fuel tank always starts out empty, and you're given a positive integer value for the number of miles that your car can travel per gallon of fuel (miles per gallon, or MPG). You can assume that you will always be given at least two cities.

Write a function that returns the index of the valid starting city.

## Attempt
```js
const validStartingCity = (distances, fuel, mpg) => {
    // iterate through distances/fuel starting cities
    for (let i in distances) {
        // check for valid starting city
        const output = checkValidCity(distances, fuel, mpg, i)
        if (output) {
            return output
        }
    }
}

// helper function to check if valid starting city
const checkValidCity = (distances, fuel, mpg, start) => {
    let tank = 0
    // iterate through distances/fuel
    for (let i = start; i < (distances.length - 1) * 2; i++) {
        // index variable
        const idx = i % distances.length
        let output = false

        // if tank < 0
        if (tank < 0) {
            // return false
            break
        // else if we made it to distances start - 1
        } else if (idx === start - 1) {
            // return starting i
            output = start
            break
        // else
        } else {
            // add fuel[i] * mpg to tank
            tank += fuel[i] * mpg
            // subtract distances[i] from tank
            tank -= distances[i]
        }
    return output
}

const distances = [5, 25, 15, 10, 15]
const fuel = [1, 2, 1, 0, 3]
const mpg = 10
validStartingCity(distances, fuel, mpg)
```

## Solution
```js
const validStartingCity = (distances, fuel, mpg) => {
    const numberOfCities = distances.length
    let milesRemaining = 0

    let indexOfStartingCityCandidate = 0
    let milesRemainingAtStartingCityCandidate = 0

    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
        const distanceFromPreviousCity = distances[cityIdx - 1]
        const fuelFromPreviousCity = fuel[cityIdx - 1]
        milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity

        if (milesRemaining < milesRemainingAtStartingCityCandidate) {
            milesRemainingAtStartingCityCandidate = milesRemaining
            indexOfStartingCityCandidate = cityIdx
        }

        return indexOfStartingCityCandidate
    }
}
```