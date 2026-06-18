import parkmaster0 from "../../../assets/images/projects/parkmaster/parkmaster-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "ParkMaster Pro",
  theme: "dark",
  tags: ["javascript", "html", "css", "mysql"],
  videoBorder: false,
  live: "https://garaje-26c50.firebaseapp.com/",
  description:
    "A web application designed for garage and parking lot management. It automates income reporting and provides real-time control over parking flows, capacity tracking, and ticket billing.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: parkmaster0,
        alt: "ParkMaster Pro Dashboard",
        caption: "ParkMaster Pro Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
