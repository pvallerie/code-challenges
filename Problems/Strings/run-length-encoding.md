# Run-Length Encoding
Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run `"AAA"` would be run-length-encoded as `"3A"`.

To Make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run `"AAAAAAAAAAAA"` (12 `A`s), can't naively be encoded as `"12A"`, since this string can be decoded as either `"AAAAAAAAAAAA"` or `"1AA"`. Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as `"9A3A"`.
## Attempt
```py
def runLengthEncoding(string):
  output = ''
  currentCount = '0'
  prevLetter = ''

  # iterate through input string
  for letter in string:
    # if letter matches prevLetter
    if letter == prevLetter:
      # if currentCount is 9
      if currentCount == 9:
        # add currentCount to output
        output += str(currentCount)
        # add prevLetter to output
        output += prevLetter
        # change currentCount to 1
        currentCount = 1
        # change prevLetter to letter
        prevLetter = letter
      # if currentCount < 9
      else:
        currentCount += 1
        prevLetter = letter
    # if they don't match
  else:
      # add currentCount to output
      output += str(currentCount)
      # add prevLetter to output
      output += prevLetter
      # change currentCount to 1
      currentCount = 1
      # change prevLetter to letter
      prevLetter = letter

  return output
```

## Solution
```py
def runLengthEncoding(string):
    encodedStringCharacters = []
    currentRunLength = 1

    for i in range(1, len(string)):
      currentCharacter = string[i]
      previousCharacter = string[i - 1]

      if currentCharacter != previousCharacter or currentRunLength == 9:
        ancodedStringCharacters.append(str(currentRunLength))
        encodedStringCharacters.append(previousCharacter)

      currentRunLength += 1

    # handle the last run
    encodedStringCharacters.append(str(currentRunLength))
    encodedStringCharacters.append(string[len(string) - 1])

    return "".join(encodedStringCharacters)
```
