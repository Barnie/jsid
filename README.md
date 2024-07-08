# JSID
 You can create a TSID-like key using JavaScript. This key is generated to fit JavaScript's integer range.

### JSID Structure

- Time component (42 bits) : ~ 2109-05-14
- Node ID (5 bits) : 0 ~ 31
- Counter (5 bits) : 0 ~ 31
 
```
|------------------------------------------|-----|-----|
       time (msecs until 2109-05-14)        node  counter
                42 bits                    5 bits  5 bits
```

### Example
```js
const jsid = require('@barnie/jsid')(5);        // node: 5
jsid.get();
// result: 1761692919744673

jsid.get().toString(2).padStart(52,'0');
// result: '0110010000100100000000011100101101011011010010100010'
```
