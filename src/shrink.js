import { cubicOut } from "svelte/easing";

export default function (node, { delay = 0, duration = 400, easing = cubicOut }) {
    const style = getComputedStyle(node);
    const transform = style.transform ? "" : style.transform
    const height = node.clientHeight
    return {
        delay,
        duration,
        easing,
        css: t => `overflow: hidden;` +
            `height: ${height * t}px;`
    };
}
