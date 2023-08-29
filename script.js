import { animate_append, animate_append_node } from "./animate_append.js";

const div = document.querySelector(".lang");

animate_append_node(document.body, div);
animate_append(document.body, div);
