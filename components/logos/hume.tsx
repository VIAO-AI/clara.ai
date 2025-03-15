import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<HTMLImageElement>;

/**
 * Componente del logo Clara (reemplazo del logo Hume AI)
 */
const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <img
      src="/components/logos/Clara_Favicon-remove.png" // Ruta a la imagen en la carpeta components/logos/
      alt="Clara Logo"
      {...props}
    />
  );
};

export default HumeLogo;
