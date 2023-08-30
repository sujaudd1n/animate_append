/**
 * Append a given node into parent with some type-like animation.
 * @param {ElementNode} parent
 * @param {TextNode | ElementNode} node
 *
 */

const TEXT_NODE = 3;
const ELEMENT_NODE = 1;
const TIME = 10;

async function append_with_animation(parent, node, mode = "char") {
    if (mode === "text") await animate_append_node(parent, node);
    else await animate_append(parent, node);
}

async function animate_append(parent, node) {
    const cloned_node = node.cloneNode(true);

    console.log(node.childNodes, node.nodeType);

    if (cloned_node.nodeType === TEXT_NODE) {
        for (const char of cloned_node.textContent) {
            parent.append(char);
            await new Promise((tmp) => setTimeout(tmp, TIME));
        }
    } else if (cloned_node.nodeType === ELEMENT_NODE) {
        const cloned_children = [];
        cloned_node.childNodes.forEach((element) => {
            cloned_children.push(element.cloneNode(true));
        });

        console.log(cloned_children);

        cloned_node.textContent = "";
        parent.append(cloned_node);

        for (const cloned_child of cloned_children)
            await animate_append(cloned_node, cloned_child);
    }
}

async function animate_append_node(parent, node) {
    const cloned_node = node.cloneNode(true);

    console.log(node.childNodes, node.nodeType);

    if (cloned_node.nodeType === TEXT_NODE) {
        parent.append(cloned_node.textContent);
        await new Promise((tmp) => setTimeout(tmp, TIME));
    } else if (cloned_node.nodeType === ELEMENT_NODE) {
        const cloned_children = [];
        cloned_node.childNodes.forEach((element) => {
            cloned_children.push(element.cloneNode(true));
        });

        console.log(cloned_children);

        cloned_node.textContent = "";
        parent.append(cloned_node);

        for (const cloned_child of cloned_children)
            await animate_append_node(cloned_node, cloned_child);
    }
}

export { append_with_animation };
