import { useEffect, useRef } from "react";

export const BreathingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Breathing orbs with peaceful movement
    const orbs: Array<{
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      phase: number;
      speed: number;
      color: string;
      opacity: number;
    }> = [];

    // Create peaceful breathing orbs
    for (let i = 0; i < 8; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 15 + Math.random() * 25,
        baseRadius: 15 + Math.random() * 25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.005,
        color: `hsl(${180 + Math.random() * 90}, ${30 + Math.random() * 20}%, ${50 + Math.random() * 20}%)`,
        opacity: 0.05 + Math.random() * 0.1
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // ~60fps

      orbs.forEach((orb, index) => {
        // Breathing effect
        const breathePhase = Math.sin(time * orb.speed + orb.phase) * 0.5 + 0.5;
        orb.radius = orb.baseRadius + breathePhase * 20;
        
        // Gentle floating movement
        orb.x += Math.sin(time * 0.3 + index) * 0.2;
        orb.y += Math.cos(time * 0.2 + index) * 0.15;

        // Keep orbs in bounds with wrapping
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        // Create radial gradient for peaceful glow
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius * 2
        );
        gradient.addColorStop(0, orb.color.replace(')', `, ${orb.opacity})`));
        gradient.addColorStop(0.7, orb.color.replace(')', `, ${orb.opacity * 0.3})`));
        gradient.addColorStop(1, 'transparent');

        // Draw breathing orb
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ background: "transparent" }}
    />
  );
};
