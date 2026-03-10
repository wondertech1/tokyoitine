export interface DayData {
  num: string;
  title: string;
  neighborhoods: string;
  color: string;
  startTime: string;
  endTime: string;
  stopCount: number;
  foodPicks: number;
  highlight: string;
  topFood: string;
  tagline: string;
  zone: string;
}

export interface DurationOption {
  days: number;
  codename: string;
  tagline: string;
  totalStops: number;
  totalFoodPicks: number;
  totalWarnings: number;
}

export const DAYS: DayData[] = [
  {
    num: "01",
    title: "ELECTRIC PULSE",
    neighborhoods: "Asakusa \u00b7 Harajuku \u00b7 Shibuya \u00b7 Shinjuku",
    color: "#E53935",
    startTime: "08:30",
    endTime: "21:00",
    stopCount: 5,
    foodPicks: 6,
    zone: "CENTRAL",
    highlight: "Shibuya Sky at sunset",
    topFood: "Omoide Yokocho yakitori",
    tagline:
      "Ancient temples to neon canyons. The essential Tokyo contrast in one day.",
  },
  {
    num: "02",
    title: "OLD WORLD ZEN",
    neighborhoods: "Toyosu \u00b7 Tsukiji \u00b7 Ginza \u00b7 Tokyo Station",
    color: "#1565C0",
    startTime: "09:00",
    endTime: "19:00",
    stopCount: 4,
    foodPicks: 6,
    zone: "CENTRAL",
    highlight: "teamLab Planets",
    topFood: "Tsukiji Outer Market crawl",
    tagline:
      "Immersive digital art, the best street food market in Tokyo, and Ginza\u2019s architectural runway.",
  },
  {
    num: "03",
    title: "CULTURE CIRCUIT",
    neighborhoods: "Ueno \u00b7 Akihabara \u00b7 Yanaka \u00b7 Kanda",
    color: "#F57C00",
    startTime: "09:00",
    endTime: "21:00",
    stopCount: 4,
    foodPicks: 6,
    zone: "CENTRAL",
    highlight: "Tokyo National Museum",
    topFood: "Kanda Yabu Soba (est. 1880)",
    tagline:
      "World-class museums in the morning, anime paradise after lunch, and old Tokyo at golden hour.",
  },
  {
    num: "04",
    title: "IMPERIAL CALM",
    neighborhoods:
      "Imperial Palace \u00b7 Marunouchi \u00b7 Shinjuku Gyoen",
    color: "#2E7D32",
    startTime: "09:00",
    endTime: "20:00",
    stopCount: 4,
    foodPicks: 6,
    zone: "CENTRAL",
    highlight: "Free sunset at Metro Govt Building",
    topFood: "Golden Gai tiny bars",
    tagline:
      "Peaceful gardens, Edo Castle ruins, and the best free sunset viewpoint in the city.",
  },
  {
    num: "05",
    title: "COASTAL PILGRIMAGE",
    neighborhoods: "Kamakura \u00b7 Hase \u00b7 Enoshima",
    color: "#00838F",
    startTime: "08:30",
    endTime: "18:30",
    stopCount: 6,
    foodPicks: 6,
    zone: "DAY-TRIPS",
    highlight: "Great Buddha (Kotoku-in)",
    topFood: "Fresh shirasu-don (sardine bowls)",
    tagline:
      "Ancient seaside capital with a 770-year-old bronze Buddha and ocean-cliff temples.",
  },
  {
    num: "06",
    title: "MOUNTAIN SHRINE",
    neighborhoods: "Nikko \u00b7 Toshogu \u00b7 Lake Chuzenji",
    color: "#4E342E",
    startTime: "07:30",
    endTime: "19:00",
    stopCount: 5,
    foodPicks: 6,
    zone: "DAY-TRIPS",
    highlight: "Toshogu Shrine (UNESCO)",
    topFood: "Yuba (tofu skin) everything",
    tagline:
      "Gold-leafed UNESCO shrines in cryptomeria forests and a 97-meter waterfall.",
  },
  {
    num: "07",
    title: "HIDDEN FREQUENCIES",
    neighborhoods: "Shimokitazawa \u00b7 Kichijoji \u00b7 Nakano",
    color: "#6A1B9A",
    startTime: "09:30",
    endTime: "21:00",
    stopCount: 4,
    foodPicks: 6,
    zone: "SUBURBS",
    highlight: "Shimokitazawa vintage scene",
    topFood: "Harmonika Yokocho alley market",
    tagline:
      "The neighborhoods tourists miss. Vintage culture, indie cafes, and the real Tokyo.",
  },
];

export const DURATIONS: DurationOption[] = [
  {
    days: 1,
    codename: "THE BLITZ",
    tagline: "The essential Tokyo contrast in 12 hours",
    totalStops: 5,
    totalFoodPicks: 6,
    totalWarnings: 1,
  },
  {
    days: 2,
    codename: "THE DEEP CONTRAST",
    tagline: "Ancient temples, digital art, and market culture",
    totalStops: 9,
    totalFoodPicks: 12,
    totalWarnings: 3,
  },
  {
    days: 3,
    codename: "THE CULTURE & TECH",
    tagline: "Add world-class museums and anime paradise",
    totalStops: 13,
    totalFoodPicks: 18,
    totalWarnings: 4,
  },
  {
    days: 4,
    codename: "THE IMPERIAL",
    tagline: "Add peaceful gardens and the city\u2019s best free viewpoint",
    totalStops: 17,
    totalFoodPicks: 24,
    totalWarnings: 6,
  },
  {
    days: 5,
    codename: "THE COASTAL ESCAPE",
    tagline:
      "Add a day trip to seaside Kamakura and the Great Buddha",
    totalStops: 23,
    totalFoodPicks: 30,
    totalWarnings: 7,
  },
  {
    days: 6,
    codename: "THE MOUNTAIN SHRINE",
    tagline:
      "Add UNESCO Nikko \u2014 golden shrines and a 97m waterfall",
    totalStops: 28,
    totalFoodPicks: 36,
    totalWarnings: 8,
  },
  {
    days: 7,
    codename: "THE FULL IMMERSION",
    tagline: "Add the hidden neighborhoods tourists never find",
    totalStops: 32,
    totalFoodPicks: 42,
    totalWarnings: 9,
  },
];
