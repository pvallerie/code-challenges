# Min Rewards
Imagine that you're a teacher who's just graded the final exam in class. you have a list of student scores on the final exam in a particular order (not necessarily osrted), and you want to reward your students. You decide to do so fairly by giving them arbitrary rewards following two rules:

1. All students must receive at least one reward.
2. Any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or the right) with a lower score and must receive strictly fewer rewards than an adjacent student with a higher score.

Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.
You can assume that all students have different scores; in other words, the scores are all unique.

## Attempt
```js
const minRewards = scores => {
    // accumulator array for reward values
    const rewards = new Array(scores.length - 1).fill(1)

    // iterate over scores array
    for (let i = 0; i < scores.length - 2; i++) {
        // if curr val > next val
        if (scores[i] > scores[i + 1]) {
            // curr val of rewards++
            rewards[i]++
        // else
        } else {
            // next val of rewards++
            rewards[i + 1]++
        }

    }
    console.log(rewards)

    // return sum of rewards
    return sum(rewards)
}


const scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
minRewards(scores)
```

## Solution
```js
const minRewards = scores => {
    const rewards = scores.map(_ => 1)
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1
    }
    for (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1)
    }
    return rewards.reduce((a, b) => a + b)
}
```