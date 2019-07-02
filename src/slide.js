import { cubicOut } from "svelte/easing";

export default function (node, { delay = 0, duration = 400, easing = cubicOut, fromRight = true }) {
    const style = getComputedStyle(node);
    const transform = style.transform ? "" : style.transform
    return {
        delay,
        duration,
        easing,
        css: t => `postion: absolute;
        transform: ${transform} translate(${(100 - 100 * t) * (fromRight ? -1 : 1)}%, 0%);`
    };
}
