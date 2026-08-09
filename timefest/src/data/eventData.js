// Central, editable event data. Update here — never scatter copy across components.
export const eventData = {
  name: "TIME FEST",
  tagline: "TIME IS THE EXPERIENCE.",
  signature: "BE HERE. NOW.",
  edition: "2026",
  date: {
    iso: "2026-12-19T20:00:00-03:00",
    display: "19.12.26",
    weekday: "SATURDAY",
    doors: "20:00",
    end: "08:00",
  },
  venue: {
    name: "EXPOMINAS",
    city: "Belo Horizonte",
    state: "MG",
    address: "Av. Amazonas, 6200",
    neighborhood: "Gameleira",
    lat: -19.9375,
    lng: -43.9917,
    mapQuery: "Expominas, Av. Amazonas, 6200, Gameleira, Belo Horizonte - MG",
  },
  age: "18+",
  stagesCount: 4,
  phrases: {
    moments: ["MOMENTS.", "SOUND.", "ETERNALLY YOU."],
    journey: ["A JOURNEY THROUGH", "SOUND, SPACE AND TIME."],
    worlds: ["FOUR WORLDS.", "ONE NIGHT."],
    night: ["YOUR NIGHT", "IN TIME."],
    present: "BE PRESENT.",
    lose: ["LOSE TRACK", "OF TIME."],
    running: ["TIME IS", "RUNNING."],
  },
};

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const infoFacilities = [
  { label: "PARKING", note: "On-site" },
  { label: "ACCESSIBILITY", note: "Full access" },
  { label: "FOOD & DRINKS", note: "Curated" },
  { label: "LOCKERS", note: "Available" },
  { label: "FIRST AID", note: "On-site" },
  { label: "CASHLESS", note: "Wristband pay" },
];
