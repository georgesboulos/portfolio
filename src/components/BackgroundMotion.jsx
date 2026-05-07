import { useEffect, useRef } from "react";

const colors = [
  "rgba(151, 203, 54, 0.3)",
  "rgba(113, 152, 41, 0.2)",
  "rgba(127, 81, 182, 0.28)",
  "rgba(95, 61, 137, 0.18)",
];

const createShape = (width, height, index) => {
  const size = 12 + Math.random() * 54;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.44,
    vy: (Math.random() - 0.5) * 0.44,
    size,
    color: colors[index % colors.length],
    phase: Math.random() * Math.PI * 2,
    sides: 5 + Math.floor(Math.random() * 4),
    organic: Math.random() > 0.45,
  };
};

const BackgroundMotion = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const cursor = { x: -1000, y: -1000 };
    let animationFrame;
    let shapes = [];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(34, Math.max(18, Math.floor(width / 44)));
      shapes = Array.from({ length: count }, (_, index) =>
        createShape(width, height, index),
      );
    };

    const drawOrganicShape = (shape, time) => {
      const pulse = Math.sin(time * 0.0012 + shape.phase) * 0.12;
      const radius = shape.size * (1 + pulse);

      context.beginPath();

      for (let point = 0; point <= shape.sides; point += 1) {
        const angle = (point / shape.sides) * Math.PI * 2;
        const wobble =
          1 + Math.sin(time * 0.001 + shape.phase + point * 1.7) * 0.18;
        const x = shape.x + Math.cos(angle) * radius * wobble;
        const y = shape.y + Math.sin(angle) * radius * wobble;
        const nextAngle = ((point + 1) / shape.sides) * Math.PI * 2;
        const nextWobble =
          1 + Math.sin(time * 0.001 + shape.phase + (point + 1) * 1.7) * 0.18;
        const nextX = shape.x + Math.cos(nextAngle) * radius * nextWobble;
        const nextY = shape.y + Math.sin(nextAngle) * radius * nextWobble;
        const controlAngle = angle + Math.PI / shape.sides;
        const controlX = shape.x + Math.cos(controlAngle) * radius * 1.2;
        const controlY = shape.y + Math.sin(controlAngle) * radius * 1.2;

        if (point === 0) {
          context.moveTo(x, y);
        } else {
          context.quadraticCurveTo(controlX, controlY, nextX, nextY);
        }
      }

      context.closePath();
      context.fillStyle = shape.color;
      context.fill();
    };

    const animate = (time) => {
      context.clearRect(0, 0, width, height);

      shapes.forEach((shape) => {
        const dx = shape.x - cursor.x;
        const dy = shape.y - cursor.y;
        const distance = Math.hypot(dx, dy);
        const repelDistance = 150;

        if (distance < repelDistance) {
          const force = (repelDistance - distance) / repelDistance;
          const angle = Math.atan2(dy, dx);
          shape.vx += Math.cos(angle) * force * 0.42;
          shape.vy += Math.sin(angle) * force * 0.42;
        }

        shape.vx += Math.sin(time * 0.0007 + shape.phase) * 0.003;
        shape.vy += Math.cos(time * 0.0008 + shape.phase) * 0.003;
        shape.vx *= 0.985;
        shape.vy *= 0.985;
        shape.x += shape.vx;
        shape.y += shape.vy;

        if (shape.x < -shape.size) shape.x = width + shape.size;
        if (shape.x > width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = height + shape.size;
        if (shape.y > height + shape.size) shape.y = -shape.size;

        if (shape.size < 24) {
          context.beginPath();
          context.arc(shape.x, shape.y, shape.size * 0.46, 0, Math.PI * 2);
          context.fillStyle = shape.color;
          context.fill();
        } else {
          drawOrganicShape(shape, time);
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const updateCursor = (event) => {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
    };

    const hideCursor = () => {
      cursor.x = -1000;
      cursor.y = -1000;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updateCursor);
    window.addEventListener("pointerleave", hideCursor);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updateCursor);
      window.removeEventListener("pointerleave", hideCursor);
    };
  }, []);

  return <canvas className="background-motion" ref={canvasRef} />;
};

export default BackgroundMotion;
