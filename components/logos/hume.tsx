import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

export default function HumeLogo(props: HumeLogoProps) {
  const id = useId();
  const gradientId = `clara-gradient-${id}`;

  return (
    <svg
      width="106"
      height="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 25"
      {...props}
    >
      {/* Gradiente similar al original */}
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2="106" y2="25"
        >
          <stop offset="0%" stopColor="#FFB7B2" />
          <stop offset="100%" stopColor="#AB9EFC" />
        </linearGradient>
      </defs>

      {/* Texto estilizado */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial Black, sans-serif"
        fontSize="18"
        fontWeight="900"
        fill={`url(#${gradientId})`}
        style={{
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        }}
      >
        CLARA
      </text>
    </svg>
  );
}
