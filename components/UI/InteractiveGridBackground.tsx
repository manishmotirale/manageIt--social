import React, { useEffect, useRef } from "react";

const InteractiveGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // 🔥 Better performance on mobile
    const isMobile = window.innerWidth < 768;
    const spacing = isMobile ? 40 : 32;
    const maxDist = isMobile ? 150 : 200;

    // DPI scaling (fix blur on retina)
    const dpr = window.devicePixelRatio || 1;

    let width = 0;
    let height = 0;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();

    interface Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
    }

    let points: Point[] = [];
    let cols = 0;
    let rows = 0;

    const initPoints = () => {
      points = [];
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = (i - 1) * spacing;
          const y = (j - 1) * spacing;
          points.push({ x, y, originX: x, originY: y });
        }
      }
    };

    initPoints();

    const mouse = { x: -1000, y: -1000 };

    const updateMouse = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    };

    // Desktop
    const handleMouseMove = (e: MouseEvent) => {
      updateMouse(e.clientX, e.clientY);
    };

    // Mobile touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMouse(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleResize = () => {
      setCanvasSize();
      initPoints();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Physics
      points.forEach((point) => {
        const dx = mouse.x - point.originX;
        const dy = mouse.y - point.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          point.x = point.originX + (mouse.x - point.originX) * force * 0.25;
          point.y = point.originY + (mouse.y - point.originY) * force * 0.25;
        } else {
          point.x += (point.originX - point.x) * 0.1;
          point.y += (point.originY - point.y) * 0.1;
        }
      });

      ctx.strokeStyle = "rgba(32, 78, 98, 0.15)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i < cols; i++) {
        ctx.beginPath();
        for (let j = 0; j < rows; j++) {
          const p = points[i * rows + j];
          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let j = 0; j < rows; j++) {
        ctx.beginPath();
        for (let i = 0; i < cols; i++) {
          const p = points[i * rows + j];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Hover highlights
      for (let i = 0; i < cols - 1; i++) {
        for (let j = 0; j < rows - 1; j++) {
          const p1 = points[i * rows + j];
          const p2 = points[(i + 1) * rows + j];
          const p3 = points[(i + 1) * rows + j + 1];
          const p4 = points[i * rows + j + 1];

          const cx = (p1.x + p2.x + p3.x + p4.x) / 4;
          const cy = (p1.y + p2.y + p3.y + p4.y) / 4;

          const dx = mouse.x - cx;
          const dy = mouse.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.25;
            ctx.fillStyle = `rgba(43, 104, 127, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.closePath();
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default InteractiveGridBackground;
