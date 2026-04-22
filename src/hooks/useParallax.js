import { useEffect } from "react";

/**
 * Global parallax controller. Scans the DOM for elements with:
 *   - data-parallax="0.3"          → translateY at this speed multiplier
 *   - data-parallax-scale="0.08"   → subtle scale on scroll
 *   - data-parallax-fade="1"       → fade/translate-in on first entry
 *
 * Uses lerp for buttery-smooth motion that complements Lenis.
 */
export default function useParallax() {
  useEffect(() => {
    let frame = 0;
    const items = [];

    const refresh = () => {
      items.length = 0;
      document
        .querySelectorAll("[data-parallax], [data-parallax-scale], [data-parallax-fade]")
        .forEach((el) => {
          items.push({
            el,
            speed: parseFloat(el.dataset.parallax) || 0,
            scale: parseFloat(el.dataset.parallaxScale) || 0,
            fade: el.dataset.parallaxFade === "1",
            currentY: 0,
            revealed: false,
          });
        });
    };

    refresh();

    const update = () => {
      const viewportH = window.innerHeight;

      for (const item of items) {
        const rect = item.el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportH + 200) continue;

        const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;

        const targetY = -progress * item.speed * 120;
        item.currentY = targetY;

        const scaleVal = 1 + progress * item.scale;

        if (item.fade && !item.revealed && rect.top < viewportH * 0.9) {
          item.revealed = true;
          item.el.classList.add("parallax-revealed");
        }

        item.el.style.transform = `translate3d(0, ${item.currentY.toFixed(2)}px, 0) scale(${scaleVal.toFixed(4)})`;
      }

      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, []);
}
