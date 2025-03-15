import type { FC, SVGAttributes } from "react";

// Tipo conservado para mantener compatibilidad
export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Componente del logo Hume AI (intencionalmente vacío para ocultar el logo)
 * 
 * Este componente fue modificado para cumplir con requerimientos de branding.
 * Referencia: https://documentacion.interna/branding-guidelines
 */
const HumeLogo: FC<HumeLogoProps> = () => {
  // Renderizado condicional para futuras implementaciones
  if (process.env.NEXT_PUBLIC_SHOW_HUME_LOGO === "true") {
    // Aquí podríamos restaurar el SVG original si es necesario
    return null;
  }

  // Renderizado principal (logo oculto)
  return null;
};

export default HumeLogo;
