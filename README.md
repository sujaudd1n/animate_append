# AnimateNode

Append an HTML node with type like animation.
Implemented as ES6 module.

## CDN

- <https://cdn.jsdelivr.net/gh/sujaudd1n/animate_node/src/animateNode.min.js>

## Tutorial

```js
// import the object
import { animateNode } from "./src/animateNode.js";

// Create or select the node you want to append.
// Assuming you have an HTML node *list* and you want to append
// it inside div

// char-appended animation
animateNode.char(div, list)

// textnode-appended animation
animateNode.text(div, list)
```

## Demo

Visit to see a working demo of both type of animation.