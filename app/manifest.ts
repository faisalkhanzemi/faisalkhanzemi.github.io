import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohd Faisal Khan — CRM & Lifecycle Marketing",
    short_name: "Faisal Khan",
    description:
      "Portfolio of Mohd Faisal Khan (faisalkhanzemi), CRM Manager and lifecycle marketer in Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f8f6",
    theme_color: "#f8f8f6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
