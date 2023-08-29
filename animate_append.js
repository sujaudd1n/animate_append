async function animate_append(parent, node) {
    node = node.cloneNode(true);
    console.log(node.childNodes, node.nodeType);

    if (node.nodeType === 3) {
        for (const char of node.textContent) {
            parent.append(char);
            await new Promise((r) => setTimeout(r, 1));
            Bot.prototype.scroll();
        }
    } else {
        const children = [];
        node.childNodes.forEach((element) => {
            children.push(element.cloneNode(true));
        });
        console.log(children);

        node.textContent = "";
        parent.append(node);

        for (const child of children) await this.animate_append(node, child);
    }
}
