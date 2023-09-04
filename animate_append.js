/**
 * Represents class that implements various animation functions.
 */
class AnimateNode {
    constructor(speed = 10) {
        this.TEXT_NODE = 3;
        this.ELEMENT_NODE = 1;
        this.speed = speed;
    }

    async char(parent, node) {
        await this.execute(parent, node, "char");
    }

    async text(parent, node) {
        await this.execute(parent, node, "text");
    }
    /**
     * Append node inside parent, each character will appended in type-like
     * animation.
     * @param {HTMLElement} parent element of node.
     * @param {HTMLElement | TextNode} node will appended while begin animated.
     */
    async char_animation(parent, node) {
        for (const char of node.textContent) {
            parent.append(char);
            await new Promise((tmp) => setTimeout(tmp, this.speed));
        }
    }

    /**
     * Append node inside parent, each text node will appended in type-like
     * animation.
     * @param {HTMLElement} parent element of node.
     * @param {HTMLElement | TextNode} node will appended while begin animated.
     */
    async text_animation(parent, node) {
        parent.append(node);
        await new Promise((tmp) => setTimeout(tmp, this.speed));
    }

    async execute(parent, node, type) {
        const cloned_node = node.cloneNode(true);
        if (cloned_node.nodeType === this.TEXT_NODE) {
            if (type === "char") await this.char_animation(parent, cloned_node);
            else if (type === "text")
                await this.text_animation(parent, cloned_node);
        } else if (cloned_node.nodeType === this.ELEMENT_NODE) {
            const cloned_children = [];
            cloned_node.childNodes.forEach((element) => {
                cloned_children.push(element.cloneNode(true));
            });
            cloned_node.textContent = "";
            parent.append(cloned_node);
            for (const cloned_child of cloned_children)
                await this.execute(cloned_node, cloned_child, type);
        }
    }
}

const animateNode = new AnimateNode(100);
export { animateNode };
