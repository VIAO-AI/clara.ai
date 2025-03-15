import type { FC, SVGAttributes } from "react";
import { useEffect, useRef } from "react";
import './styles.css';

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Componente del logo Clara (reemplazo del logo Hume AI)
 */
const HumeLogo: FC<HumeLogoProps> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      // Aplicar animación a las letras
      const letters = svgRef.current.querySelectorAll("text");
      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }, []);

  return (
    <svg
      width="106"
      height="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 25"
      {...props}
      ref={svgRef}
    >
      {/* Texto estilizado */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial Black, sans-serif"
        fontSize="18"
        fontWeight="900"
        fill="black"
        style={{
          letterSpacing: "1px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        }}
        className="clara-letter"
      >
        CLARA
      </text>
    </svg>
  );
};

export default HumeLogo;
