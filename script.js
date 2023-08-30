import { append_with_animation } from "./animate_append.js";

const div = document.querySelector(".lang");

append_with_animation(document.body, div, "char");
append_with_animation(document.body, div, "text");
