"use client";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  rounded?: "rounded-2xl" | "rounded-xl";
  bg?: string;
  accentHex?: string;
  restingBorder?: string;
};

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function GlowCard({
  children,
  className = "",
  rounded = "rounded-2xl",
  bg = "bg-white",
  accentHex = "#0099CC",
  restingBorder = "#DDD8D2",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    el.style.setProperty("--glow-x", `${e.clientX - left}px`);
    el.style.setProperty("--glow-y", `${e.clientY - top}px`);
    el.style.setProperty("--glow-opacity", "1");
  }

  function onMouseLeave() {
    ref.current?.style.setProperty("--glow-opacity", "0");
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden p-[1px] h-full ${rounded}`}
      style={{ background: restingBorder }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: "var(--glow-opacity, 0)",
          background: `radial-gradient(circle 380px at var(--glow-x, -999px) var(--glow-y, -999px), ${hexToRgba(accentHex, 0.55)} 0%, transparent 50%)`,
        }}
      />
      <div className={`relative ${rounded} ${bg} h-full ${className}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: "var(--glow-opacity, 0)",
            background: `radial-gradient(circle 380px at var(--glow-x, -999px) var(--glow-y, -999px), ${hexToRgba(accentHex, 0.08)} 0%, transparent 65%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}
