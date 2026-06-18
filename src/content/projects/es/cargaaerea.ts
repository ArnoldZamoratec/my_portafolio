import cargaaerea0 from "../../../assets/images/projects/cargaaerea/cargaaerea-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Análisis de Carga Aérea",
  theme: "dark",
  tags: ["python", "ml", "kmeans", "pca"],
  videoBorder: false,
  live: "#",
  description:
    "Desarrollo de un paper de investigación académica sobre la segmentación y detección de anomalías en el transporte de carga aérea en aeropuertos del Perú utilizando datasets de OSITRAN. Aplicación de algoritmos de aprendizaje no supervisado (K-Means, PCA) y evaluación de métricas de agrupamiento (Silhouette, Davies-Bouldin).",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cargaaerea0,
        alt: "Visualizaciones de clusters y análisis de carga aérea",
        caption: "Visualizaciones de clusters y análisis de carga aérea",
      },
    },
  ],
} as const satisfies ProjectContent;
