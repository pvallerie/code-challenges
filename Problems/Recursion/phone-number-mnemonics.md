# Phone Number Mnemonics


## Attempt
```js
const phoneNumberMnemonics = phoneNumber => {
    // Map to represent the keypad
    const keypad = new Map()
    keypad.set(2, ['a', 'b', 'c'])
    keypad.set(3, ['d', 'e', 'f'])
    keypad.set(4, ['g', 'h', 'i'])
    keypad.set(5, ['j', 'k', 'l'])
    keypad.set(6, ['m', 'n', 'o'])
    keypad.set(7, ['p', 'q', 'r', 's'])
    keypad.set(8, ['t', 'u', 'v'])
    keypad.set(9, ['w', 'x', 'y', 'z'])

    // accumulator array
    const mnemonics = []

    // base case
    if (!phoneNumber) {
        return mnemonics

    // recursion
    } else {
        // if first number in phoneNumber is 0 or 1
        if (phoneNumber[0] === 1 || 2) {
            // add it to mnemonics

        // else
        } else {
            // loop through associated letters in keypad map
            keypad.(get(phoneNumber[0])).forEach(() => {
                // add 
                // call recursively on the next digit in the phoneNumber
                const newNumber = phoneNumber.slice(1)
                phoneNumberMnemonics(newNumber)
            })
        }
    }


    console.log(keypad.entries())
}

phoneNumberMnemonics(1904)
```

## Solution
```js
const phoneNumberMnemonics = phoneNumber => {
    const currentMnemonic = new Array(phoneNumber.length).fill('0')
    const mnemonicsFound = []

    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound)
    return mnemonicsFound
}

const phoneNumberMnemonicsHelper = (idx, phoneNumber, currentMnemonic, mnemonicsFound) => {
    // base case
    if (idx === phoneNumber.length) {
        // compress array of strings into one string
        const mnemonic = currentMnemonic.join('')
        // add the string to the return array
        mnemonicsFound.push(mnemonic)

    // recursion
    } else {
        const digit = phoneNumber[idx]
        const letters = DIGIT_LETTERS[digit]
        // iterate through letters at current number
        for (const letter of letters) {
            // add letter to currentMnemonic array
            currentMnemonic[idx] = letter
            // call recursively on next number
            phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound)
        }
    }
}

const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

phoneNumberMnemonics(1905)
```