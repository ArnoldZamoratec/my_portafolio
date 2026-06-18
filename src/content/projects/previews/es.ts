import thumbnailParkMaster from "../../../assets/thumbnails/parkmaster.jpg";
import thumbnailBodegaDigital from "../../../assets/thumbnails/bodegadigital.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ParkMaster Pro",
    slug: "parkmaster",
    thumbnail: thumbnailParkMaster,
    description: "Gestión y administración de cocheras",
  },
  {
    title: "Mi Bodega Digital",
    slug: "bodegadigital",
    thumbnail: thumbnailBodegaDigital,
    description: "Gestión de inventarios en tiempo real",
  },
] as const satisfies ProjectPreview[];
