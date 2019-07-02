export default function (target, { minDeltaX = 75, maxdeltaTime = 200 } = {}) {
    let startX = null, startTime = 0
    function touchStart(e) {
        let [touch] = e.changedTouches
        startX = touch.screenX
        startTime = Date.now()
    }
    function touchEnd(e) {
        let [touch] = e.changedTouches
        let deltaX = touch.screenX - startX
        let deltaTime = Date.now() - startTime
        if (Math.abs(deltaX) >= minDeltaX && deltaTime <= maxdeltaTime) {
            let ev = new CustomEvent("swipe", { detail: deltaX < 0 ? "left" : "right" })
            target.dispatchEvent(ev)
        }
        startX = startTime = null
    }
    target.addEventListener("touchstart", touchStart)
    target.addEventListener("touchend", touchEnd)

    return function cleanUp() {
        target.removeEventListener("touchstart", touchStart)
        target.removeEventListener("touchend", touchEnd)
    }
}