import bodegadigital0 from "../../../assets/images/projects/bodegadigital/bodegadigital-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Mi Bodega Digital",
  theme: "light",
  tags: ["javascript", "firebase", "html", "css"],
  videoBorder: false,
  live: "https://bodega-difital.web.app/",
  source: "https://github.com/ArnoldZamoratec/mi-bodega-digital",
  description:
    "A modern web platform designed for efficient commercial inventory management. Built using JavaScript and Firebase to support real-time data synchronization, stock tracking, and sales analytics.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: bodegadigital0,
        alt: "Mi Bodega Digital App Interface",
        caption: "Mi Bodega Digital App Interface",
      },
    },
  ],
} as const satisfies ProjectContent;
