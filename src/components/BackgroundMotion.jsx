import { useEffect, useRef } from "react";

const colors = [
  "rgba(151, 203, 54, 0.14)",
  "rgba(113, 152, 41, 0.1)",
  "rgba(127, 81, 182, 0.12)",
  "rgba(95, 61, 137, 0.09)",
];

const createShape = (width, height, index) => {
  const size = 18 + Math.random() * 42;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.14,
    vy: (Math.random() - 0.5) * 0.14,
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
    let animationFrame;
    let shapes = [];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let lastFrameTime = 0;

    const resize = () => {
      pixelRatio = 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(14, Math.max(8, Math.floor(width / 120)));
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
      if (time - lastFrameTime < 66) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = time;
      context.clearRect(0, 0, width, height);

      shapes.forEach((shape) => {
        shape.vx += Math.sin(time * 0.00035 + shape.phase) * 0.0012;
        shape.vy += Math.cos(time * 0.0004 + shape.phase) * 0.0012;
        shape.vx *= 0.992;
        shape.vy *= 0.992;
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

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="background-motion" ref={canvasRef} />;
};

export default BackgroundMotion;
