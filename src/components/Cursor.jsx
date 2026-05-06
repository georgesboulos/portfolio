import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursorFollower");

    if (!cursor || !cursorFollower) return;

    let mouseX = 0,
      mouseY = 0;
    let followerX = 0,
      followerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animateCursor = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursorFollower.style.left = followerX + "px";
      cursorFollower.style.top = followerY + "px";

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    const elements = document.querySelectorAll(
      "a, button, .project-card, .filter-btn, .skill-item, .contact__item"
    );

    const handleEnter = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2)";
      cursorFollower.style.transform = "translate(-50%,-50%) scale(1.5)";
      cursorFollower.style.opacity = "0.2";
    };

    const handleLeave = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      cursorFollower.style.transform = "translate(-50%,-50%) scale(1)";
      cursorFollower.style.opacity = "0.5";
    };

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // 🧼 CLEANUP (VERY IMPORTANT)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-follower" id="cursorFollower"></div>
    </>
  );
};

export default Cursor;
