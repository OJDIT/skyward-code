import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let target = { x: 0, y: 0 };
    let ring = { x: 0, y: 0 };

    const move = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
      setPos(target);
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button, [data-cursor='hover']"));
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      setRingPos({ x: ring.x, y: ring.y });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        }}
      >
        <div
          className="h-2 w-2 rounded-full bg-[var(--primary)]"
          style={{ boxShadow: "0 0 14px var(--primary)" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block transition-[width,height,border-color] duration-200"
        style={{
          transform: `translate(${ringPos.x - (hover ? 24 : 16)}px, ${ringPos.y - (hover ? 24 : 16)}px)`,
          width: hover ? 48 : 32,
          height: hover ? 48 : 32,
          borderRadius: "9999px",
          border: `1px solid ${hover ? "var(--gold)" : "var(--primary)"}`,
          opacity: 0.7,
        }}
      />
    </>
  );
}
