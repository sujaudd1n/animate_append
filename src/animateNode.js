/**
 * Represents class that implements various animation functions.
 */
class AnimateNode {
    /**
     *
     * @param {Integer} speed defines how slow animation should be.
     * Default is 10 (fast).
     */
    constructor(speed = 10) {
        this.TEXT_NODE = 3;
        this.ELEMENT_NODE = 1;
        this.speed = speed;
    }

    /**
     * Interface to char animation.
     * @param {HTMLElement} parent
     * @param {HTMLElement | TextNode} node
     */
    async char(parent, node) {
        node = node.cloneNode(true);
        await this.execute(parent, node, "char");
    }

    /**
     * Interface to text node animation.
     * @param {HTMLElement} parent
     * @param {HTMLElement | TextNode} node
     */
    async text(parent, node) {
        node = node.cloneNode(true);
        await this.execute(parent, node, "text");
    }
    /**
     * Implementation of char animation.
     * @param {HTMLElement} parent element of node.
     * @param {TextNode} node each char of node will appended while begin
     * animated.
     */
    async char_animation(parent, node) {
        for (const char of node.textContent) {
            parent.append(char);
            await new Promise((tmp) => setTimeout(tmp, this.speed));
        }
    }

    /**
     * Implementation of text node animation.
     * @param {HTMLElement} parent element of node.
     * @param {TextNode} node will appended while begin animated.
     */
    async text_animation(parent, node) {
        parent.append(node);
        await new Promise((tmp) => setTimeout(tmp, this.speed));
    }

    /**
     * Recursively append node and its child into the parent.
     * @param {HTMLElement} parent element of node.
     * @param {HTMLELEMENT | TextNode} node node that will be appended.
     * @param {string} type specify type of animation char or text.
     */
    async execute(parent, node, type) {
        if (node.nodeType === this.TEXT_NODE) {
            if (type === "char") await this.char_animation(parent, node);
            else if (type === "text") await this.text_animation(parent, node);
        } else if (node.nodeType === this.ELEMENT_NODE) {
            const children = [];
            node.childNodes.forEach((element) => {
                children.push(element);
            });
            node.textContent = "";
            parent.append(node);
            for (const child of children) await this.execute(node, child, type);
        }
    }
}

const animateNode = new AnimateNode();
export { animateNode };
