import parkmaster0 from "../../../assets/images/projects/parkmaster/parkmaster-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "ParkMaster Pro",
  theme: "dark",
  tags: ["javascript", "html", "css", "mysql"],
  videoBorder: false,
  live: "#",
  description:
    "Aplicación web orientada a la gestión y administración de cocheras. Implementación de reportes de ingresos y control de flujos de estacionamiento en tiempo real.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: parkmaster0,
        alt: "Dashboard de ParkMaster Pro",
        caption: "Dashboard de ParkMaster Pro",
      },
    },
  ],
} as const satisfies ProjectContent;
