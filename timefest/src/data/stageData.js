// Definições editáveis dos palcos / "mundos".
export const stageData = [
  {
    id: "void",
    index: "01",
    name: "VOID",
    role: "PALCO PRINCIPAL",
    genre: "Techno / Peak Time",
    swatch: "#0f0f11",
    description: "O centro de gravidade da noite. Escuro, intenso, construído para o peak time.",
    image: "void",
  },
  {
    id: "chrome",
    index: "02",
    name: "CHROME",
    role: "GALPÃO",
    genre: "Minimal / Deep Tech",
    swatch: "#b8bdc4",
    description: "Metal, espelhos, luz baixa. Uma sala fria que esquenta conforme a noite avança.",
    image: "chromeB",
  },
  {
    id: "pulse",
    index: "03",
    name: "PULSE",
    role: "JARDIM",
    genre: "House / Melódico",
    swatch: "#b99bff",
    description: "Ar livre, luz lilás, um ritmo fluido construído para o movimento.",
    image: "pulse",
  },
  {
    id: "radiance",
    index: "04",
    name: "RADIANCE",
    role: "PALCO DO AMANHECER",
    genre: "Melódico / Electronica",
    swatch: "#ffc1ba",
    description: "Onde a noite termina e a luz começa. Construído para o último set.",
    image: "radianceB",
  },
];

export const stageFilters = ["TODOS", ...stageData.map((s) => s.name)];
