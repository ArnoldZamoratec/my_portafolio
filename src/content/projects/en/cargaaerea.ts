import cargaaerea0 from "../../../assets/images/projects/cargaaerea/cargaaerea-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Air Cargo Analysis",
  theme: "dark",
  tags: ["python", "ml", "kmeans", "pca"],
  videoBorder: false,
  live: "#",
  description:
    "An academic research paper focusing on segmenting and detecting anomalies in air cargo operations across Peruvian airports. It parses and cleans OSITRAN datasets, applying unsupervised learning algorithms (K-Means, PCA) and evaluating them with Silhouette and Davies-Bouldin metrics.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cargaaerea0,
        alt: "Data Science Dashboard and Clustering Visualizations",
        caption: "Data Science Dashboard and Clustering Visualizations",
      },
    },
  ],
} as const satisfies ProjectContent;
