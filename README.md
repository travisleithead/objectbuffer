# WIP - object like api backed by a single array buffer.
For Modern browsers and node. Zero direct dependencies.

"design" doc:
https://docs.google.com/document/d/1-UlUyH3HgOrN58avyScZlfjQtfJxgVwK_yE35mQHpYw/edit?usp=sharing

## Why?
Personal interest, Maybe will be useful as shared memory primitive, and communicating with WASM.

At the current state, it's working! but very unoptimized (based only on linked lists), only append data (no logic to reuse unreachable memory)
and its not extending the backing `arraybuffer` size by itself.
if you pass the limit, an exception will be thrown.  
We still don't have [ArrayBuffer.prototype.transfer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer) So we can't do that efficiently.  

### Missing parts
 * `array` methods
 * `Date`
 * `Map` On primitive key/value
 * `Set` On primitive values

### What's working:
  * Kinda what ever that can go into `JSON.stringify`
  * objects
  * arrays

### What's not working yet, but can be:
 * `bigint` bigger than 64 bit

### What's probably never going to work (convince me otherwise in an issue):
  * Anything that cannot go into `JSON.stringify`
  * `Symbol`
  * Circularities


## Contribution / Collaboration
There's a huge place for optimizations, code hygiene, and features!  
Feel free to open issues and maybe implementing missing parts


## Play with it:
[![Edit objectbuffer demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/objectbuffer-demo-uyov5?fontsize=14&module=%2Fsrc%2Findex.test.ts)
