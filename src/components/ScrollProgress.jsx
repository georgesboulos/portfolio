import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = null;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      setProgress(Math.min(1, Math.max(0, nextProgress)));
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
