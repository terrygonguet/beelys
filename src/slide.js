import { cubicOut } from "svelte/easing";

export default function (node, { delay = 0, duration = 400, easing = cubicOut }) {
    const style = getComputedStyle(node);
    const transform = style.transform
    return {
        delay,
        duration,
        easing,
        css: t => `overflow: hidden;` +
            `position: absolute;` +
            `transform: ${transform} translate(${100 * t}%, 0%);`
    };
}
