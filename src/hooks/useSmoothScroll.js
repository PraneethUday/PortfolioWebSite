import { useEffect } from "react";
import Lenis from "lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.5,
      smoothWheel: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: false,
    });

    window.__lenis = lenis;

    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("lenis-scroll"));
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleAnchor = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -64, duration: 0.7 });
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      document.removeEventListener("click", handleAnchor);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}
