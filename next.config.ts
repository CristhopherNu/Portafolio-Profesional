import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portafolio-Profesional", // Asegúrate de que coincida con el nombre exacto de tu repositorio
  assetPrefix: "/Portafolio-Profesional/",
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname)
};

export default nextConfig;
