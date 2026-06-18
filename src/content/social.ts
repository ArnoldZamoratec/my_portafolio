export const social = [
  { url: "mailto:huamanzamoraarnold@gmail.com", name: "mail" },
  { url: "https://github.com/ArnoldZamoratec", name: "github" },
  { url: "https://www.linkedin.com/in/arnold-huaman/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
