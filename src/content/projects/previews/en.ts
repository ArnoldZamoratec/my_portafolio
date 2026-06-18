import thumbnailParkMaster from "../../../assets/thumbnails/parkmaster.jpg";
import thumbnailBodegaDigital from "../../../assets/thumbnails/bodegadigital.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ParkMaster Pro",
    slug: "parkmaster",
    thumbnail: thumbnailParkMaster,
    description: "Parking garage management system",
  },
  {
    title: "Mi Bodega Digital",
    slug: "bodegadigital",
    thumbnail: thumbnailBodegaDigital,
    description: "Real-time store inventory platform",
  },
] as const satisfies ProjectPreview[];
