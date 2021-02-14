# random-number-between-two-numbers
generate a random number between two numbers (inclusive)

### usage

`npm i random-number-between-two-numbers`

or 

`npm i -D random-number-between-two-numbers`


```js
const rnbtn = require('random-number-between-two-numbers')
rnbtn(12, 34);	// will generate a random number between 12 and 34 (including 12 and 34)
```

Pass how many decimal places the random number should have (optional)

```js
const rnbtn = require('random-number-between-two-numbers')
rnbtn(12, 34, 5);	// will generate a random number between 12.00000 and 34.00000 (including 12.00000 and 34.00000)
```