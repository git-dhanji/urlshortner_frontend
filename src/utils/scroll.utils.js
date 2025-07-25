

export default function smoothScrollToTop(duration = 500) {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(0, start * (1 - easeOutQuad(percent)));

        if (progress < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeOutQuad(t) {
        return t * (2 - t); // smooth easing
    }

    requestAnimationFrame(scrollStep);
}