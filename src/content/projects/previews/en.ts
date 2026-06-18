import thumbnailParkMaster from "../../../assets/thumbnails/parkmaster.jpg";
import thumbnailBodegaDigital from "../../../assets/thumbnails/bodegadigital.jpg";
import thumbnailCargaAerea from "../../../assets/thumbnails/cargaaerea.jpg";

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
  {
    title: "Air Cargo Analysis",
    slug: "cargaaerea",
    thumbnail: thumbnailCargaAerea,
    description: "Unsupervised machine learning paper",
  },
] as const satisfies ProjectPreview[];
