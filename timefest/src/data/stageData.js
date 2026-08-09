// Editable stage / "world" definitions.
export const stageData = [
  {
    id: "void",
    index: "01",
    name: "VOID",
    role: "MAIN STAGE",
    genre: "Techno / Peak Time",
    swatch: "#0f0f11",
    description: "The center of gravity. Dark, relentless, engineered for peak time.",
    image: "void",
  },
  {
    id: "chrome",
    index: "02",
    name: "CHROME",
    role: "WAREHOUSE",
    genre: "Minimal / Deep Tech",
    swatch: "#b8bdc4",
    description: "Metal, mirrors, low light. A cold room that gets warmer as the night moves.",
    image: "chromeB",
  },
  {
    id: "pulse",
    index: "03",
    name: "PULSE",
    role: "GARDEN",
    genre: "House / Melodic",
    swatch: "#b99bff",
    description: "Open air, lavender light, a fluid rhythm built for movement.",
    image: "pulse",
  },
  {
    id: "radiance",
    index: "04",
    name: "RADIANCE",
    role: "SUNRISE STAGE",
    genre: "Melodic / Electronica",
    swatch: "#ffc1ba",
    description: "Where the night ends and the light begins. Built for the last set.",
    image: "radianceB",
  },
];

export const stageFilters = ["ALL", ...stageData.map((s) => s.name)];
