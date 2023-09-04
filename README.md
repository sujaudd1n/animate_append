# AnimateNode

Append an HTML node with type like animation.
Implemented as ES6 module.

## CDN

- <https://cdn.jsdelivr.net/gh/sujaudd1n/animateNode/animateNode.js>

## Tutorial

```js
// import the object
import { animateNode } from "./animateNode.js";

// Create or select or get the node you want to append.
// Assuming you have an HTML node list with div as its parent.

// char-appended animation
animateNode.char(div, list)

// textnode-appended animation
animateNode.text(div, list)
```