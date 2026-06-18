import bodegadigital0 from "../../../assets/images/projects/bodegadigital/bodegadigital-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Mi Bodega Digital",
  theme: "light",
  tags: ["javascript", "firebase", "html", "css"],
  videoBorder: false,
  live: "#",
  source: "https://github.com/ArnoldZamoratec/mi-bodega-digital",
  description:
    "Plataforma web para la gestión eficiente de inventarios comerciales. Construido utilizando JavaScript y Firebase para el manejo y sincronización de datos en tiempo real.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bodegadigital0,
        alt: "Interfaz de Mi Bodega Digital",
        caption: "Interfaz de Mi Bodega Digital",
      },
    },
  ],
} as const satisfies ProjectContent;
