export interface Activity {
  rank: number;
  name: string;
  desc: string;
  time: string;
  cost: string;
  tip: string | null;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  priceDetail: string;
  mustOrder: string;
  station: string;
  warning: string | null;
}

export interface TransitInfo {
  stations: { name: string; lines: string[] }[];
  fromShinjuku: string;
  fromTokyo: string;
  fromShibuya: string;
  walkingTip: string;
}

export interface TimingInfo {
  bestTimeOfDay: string;
  bestSeason: string;
  avoidWhen: string;
  howLong: string;
  howLongDetail: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  metaDescription: string;
  keywords: string[];
  color: string;
  parentDay: { num: string; title: string; slug: string };
  adjacent: {
    slug: string;
    name: string;
    direction: string;
    transitTime: string;
  }[];
  quickFacts: {
    bestFor: string;
    timeNeeded: string;
    nearestStation: string;
    vibe: string;
  };
  activities: Activity[];
  restaurants: Restaurant[];
  transit: TransitInfo;
  timing: TimingInfo;
}

export const NEIGHBORHOODS: Neighborhood[] = [
  // ==========================================================================
  // 1. ASAKUSA
  // ==========================================================================
  {
    slug: "asakusa",
    name: "Asakusa",
    subtitle: "Old Tokyo at its most photogenic",
    tagline:
      "Thunder gates, incense smoke, and the best street food stalls in the city.",
    metaDescription:
      "The local\u2019s guide to Asakusa \u2014 Senso-ji Temple, Nakamise-dori, Hoppy Street izakayas, and hidden back-street restaurants. With transit directions and timing tips for 2026.",
    keywords: [
      "Asakusa guide",
      "things to do in Asakusa",
      "Senso-ji Temple",
      "Asakusa food",
      "Asakusa Tokyo",
    ],
    color: "#E53935",
    parentDay: {
      num: "01",
      title: "ELECTRIC PULSE",
      slug: "1-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "akihabara-ueno",
        name: "Ueno & Akihabara",
        direction: "west",
        transitTime: "Ginza Line, 5 min",
      },
      {
        slug: "yanaka",
        name: "Yanaka",
        direction: "northwest",
        transitTime: "JR to Nippori, 10 min",
      },
      {
        slug: "ginza-tsukiji",
        name: "Ginza & Tsukiji",
        direction: "south",
        transitTime: "Ginza Line, 15 min",
      },
    ],
    quickFacts: {
      bestFor: "Temples, street food, traditional Tokyo atmosphere",
      timeNeeded: "2\u20133 hours",
      nearestStation:
        "Asakusa (Ginza Line, Asakusa Line, Tsukuba Express)",
      vibe: "Traditional and touristy on Nakamise-dori, authentic and local on the back streets",
    },
    activities: [
      {
        rank: 1,
        name: "Senso-ji Temple",
        desc: "Tokyo\u2019s oldest and most visited temple. The massive Kaminarimon (Thunder Gate) with its red lantern is the iconic photo. Walk through Nakamise-dori shopping street to the main hall. The incense hall (jokoro) is worth a stop \u2014 locals fan the smoke over themselves for good luck.",
        time: "45\u201390 min",
        cost: "Free",
        tip: "Come before 9:30 AM or after 5 PM. Between those hours, Nakamise-dori is shoulder-to-shoulder packed.",
      },
      {
        rank: 2,
        name: "Nakamise-dori Shopping Street",
        desc: "250 meters of traditional shops and stalls leading to Senso-ji. Souvenirs, snacks, and handcrafted goods. The shops on the parallel back streets (denpoin-dori) are less touristy and often better quality.",
        time: "30\u201345 min",
        cost: "Free (shopping extra)",
        tip: "The stalls on the left side (heading toward the temple) tend to have better food. Look for fresh melon-pan and age-manju (fried buns).",
      },
      {
        rank: 3,
        name: "Hoppy Street (Hoppy-dori)",
        desc: "A narrow street lined with open-air izakayas just west of Senso-ji. Named after the beer-like drink Hoppy. This is where locals actually eat and drink \u2014 a stark contrast to the tourist-heavy temple area. Best in the late afternoon when the stalls fire up.",
        time: "60\u201390 min",
        cost: "\u00a51,500\u20133,000",
        tip: "Order nikomi (beef stew) and kushikatsu (fried skewers). Most stalls are cash-only.",
      },
      {
        rank: 4,
        name: "Asakusa Culture Tourist Information Center",
        desc: "A striking 8-story building designed by Kengo Kuma, directly across from Kaminarimon. The free observation deck on the top floor gives you a perfect aerial view of Nakamise-dori and Senso-ji. One of Tokyo\u2019s best-kept free viewpoints.",
        time: "15\u201320 min",
        cost: "Free",
        tip: "Go to the top floor first thing in the morning for photos with no crowds in the temple approach below.",
      },
      {
        rank: 5,
        name: "Sumida River Walk & Tokyo Skytree View",
        desc: "Walk along the Sumida River from Asakusa for views of Tokyo Skytree. The pedestrian bridge connecting Asakusa to Tokyo Skytree Town is a 15-minute walk with great photo angles.",
        time: "20\u201330 min",
        cost: "Free",
        tip: "Best at dusk when Skytree is lit up. The reflection in the river on calm evenings is spectacular.",
      },
      {
        rank: 6,
        name: "Kappabashi Kitchen Street",
        desc: "A 10-minute walk from Senso-ji, this 800-meter street is where Tokyo\u2019s restaurants buy their supplies. Famous for the incredibly realistic plastic food samples (shokuhin sampuru). You can buy miniature versions as souvenirs or take a workshop to make your own.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "Ganso Shokuhin Sample-ya offers 30-minute workshops (\u00a52,500) where you make your own fake food \u2014 surprisingly fun and a unique souvenir.",
      },
    ],
    restaurants: [
      {
        name: "Sometaro",
        cuisine: "Okonomiyaki",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,200",
        mustOrder:
          "The house monjayaki \u2014 Tokyo\u2019s answer to okonomiyaki. You cook it yourself on the griddle at your table.",
        station: "5 min walk from Asakusa Station",
        warning: "Cash only. Expect a short wait at lunch.",
      },
      {
        name: "Pelican Cafe",
        cuisine: "Bakery / Cafe",
        priceRange: "\u00a5",
        priceDetail: "\u00a5500\u2013900",
        mustOrder:
          "Thick-cut shokupan toast with butter. Pelican has been baking bread since 1942 \u2014 their shokupan is legendary.",
        station: "8 min walk from Asakusa Station",
        warning: "Opens at 9 AM. Small space, usually a queue by 9:30.",
      },
      {
        name: "Asakusa Gyukatsu",
        cuisine: "Gyukatsu (beef cutlet)",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a51,500\u20132,000",
        mustOrder:
          "The standard gyukatsu set \u2014 you sear the rare beef on a hot stone at your table. Crispy outside, pink inside.",
        station: "3 min walk from Asakusa Station",
        warning:
          "30\u201360 min queue at lunch. Go at 11 AM when they open.",
      },
      {
        name: "Daikokuya Tempura",
        cuisine: "Tempura",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a51,500\u20132,500",
        mustOrder:
          "The tendon (tempura rice bowl) \u2014 a massive shrimp tempura draped over rice with a dark, savory sauce. The portion is enormous.",
        station: "2 min walk from Asakusa Station",
        warning:
          "Famous queue. The annex next door has the same food with shorter waits.",
      },
      {
        name: "Suzukien",
        cuisine: "Matcha ice cream",
        priceRange: "\u00a5",
        priceDetail: "\u00a5370\u2013500",
        mustOrder:
          "Level 7 matcha ice cream \u2014 the world\u2019s strongest matcha gelato. They have 7 levels of matcha intensity. Level 4 is perfect for most people.",
        station: "On Nakamise-dori side street",
        warning: null,
      },
      {
        name: "Namiki Yabusoba",
        cuisine: "Soba",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,300",
        mustOrder:
          "Zaru soba (cold soba with dipping sauce). One of Tokyo\u2019s classic soba houses \u2014 the noodles are made fresh.",
        station: "5 min walk from Asakusa Station",
        warning:
          "Closes when the soba runs out (usually by early afternoon).",
      },
    ],
    transit: {
      stations: [
        {
          name: "Asakusa",
          lines: ["Ginza Line", "Asakusa Line", "Tsukuba Express"],
        },
        {
          name: "Asakusa (Tobu)",
          lines: ["Tobu Skytree Line (for Nikko)"],
        },
      ],
      fromShinjuku:
        "Marunouchi Line to Ginza, transfer Ginza Line \u00b7 30 min",
      fromTokyo: "Ginza Line direct \u00b7 15 min",
      fromShibuya: "Ginza Line direct \u00b7 30 min",
      walkingTip:
        "Asakusa is very walkable. Everything on this page is within a 15-minute walk of Asakusa Station. Kappabashi is the farthest at 10 minutes. Wear comfortable shoes \u2014 the temple grounds and shopping streets are all on foot.",
    },
    timing: {
      bestTimeOfDay:
        "Early morning (before 9:30 AM) for Senso-ji without crowds, or late afternoon (4\u20136 PM) for Hoppy Street drinks and a golden-hour walk",
      bestSeason:
        "Cherry blossom season (late March\u2013early April) when the temple grounds are stunning, or New Year (Jan 1\u20133) for the traditional hatsumode experience",
      avoidWhen:
        "Weekend midday (11 AM\u20133 PM) \u2014 Nakamise-dori becomes sardine-can packed and the temple area loses its atmosphere",
      howLong: "2\u20133 hours",
      howLongDetail:
        "60\u201390 min for Senso-ji + Nakamise, 30 min for Kappabashi if interested, 60+ min for Hoppy Street if eating/drinking",
    },
  },

  // ==========================================================================
  // 2. HARAJUKU & OMOTESANDO
  // ==========================================================================
  {
    slug: "harajuku-omotesando",
    name: "Harajuku & Omotesando",
    subtitle: "Sacred forest meets street-style chaos",
    tagline:
      "A 700-year-old shrine forest and Tokyo\u2019s wildest fashion street, separated by a single train station.",
    metaDescription:
      "The local\u2019s guide to Harajuku and Omotesando \u2014 Meiji Jingu shrine, Takeshita Street, Cat Street vintage shops, and the best ramen in the area. 2026 edition.",
    keywords: [
      "Harajuku guide",
      "Takeshita Street",
      "Meiji Jingu",
      "Omotesando shopping",
      "Harajuku food",
    ],
    color: "#E91E63",
    parentDay: {
      num: "01",
      title: "ELECTRIC PULSE",
      slug: "1-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "shibuya",
        name: "Shibuya",
        direction: "south",
        transitTime:
          "JR Yamanote, 1 stop \u00b7 3 min (or 15-min walk via Cat Street)",
      },
      {
        slug: "shinjuku",
        name: "Shinjuku",
        direction: "north",
        transitTime: "JR Yamanote, 2 stops \u00b7 5 min",
      },
    ],
    quickFacts: {
      bestFor:
        "Fashion, vintage shopping, Meiji Jingu shrine, crepes and street food",
      timeNeeded: "2\u20134 hours",
      nearestStation:
        "Harajuku (JR Yamanote), Meiji-jingumae (Chiyoda/Fukutoshin Lines)",
      vibe: "Split personality \u2014 serene forest shrine on one side, sensory-overload fashion street on the other",
    },
    activities: [
      {
        rank: 1,
        name: "Meiji Jingu Shrine",
        desc: "A Shinto shrine dedicated to Emperor Meiji, surrounded by 170 acres of forest that feels impossible in central Tokyo. The gravel path from Harajuku Station through towering torii gates is one of the most atmospheric walks in the city. The main shrine is simple and elegant.",
        time: "30\u201360 min",
        cost: "Free",
        tip: "Enter from the Harajuku side (south entrance). On weekends you might see a traditional wedding procession \u2014 it\u2019s beautiful and you can photograph respectfully from a distance.",
      },
      {
        rank: 2,
        name: "Takeshita Street",
        desc: "A narrow 400-meter pedestrian street packed with crepe shops, kawaii fashion stores, vintage clothing, and sensory overload. It\u2019s loud, crowded, and completely unique. The stores rotate frequently \u2014 what\u2019s here today may be gone in 3 months.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "The side alleys off Takeshita are where the better vintage stores hide. The main drag is mostly fast fashion and tourist stuff.",
      },
      {
        rank: 3,
        name: "Cat Street (Ura-Harajuku)",
        desc: "A tree-lined backstreet running parallel to Omotesando, connecting Harajuku to Shibuya. This is where Tokyo\u2019s fashion-forward crowd shops \u2014 independent designers, curated vintage, sneaker boutiques, and concept stores. Much calmer than Takeshita.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "Walk the full length from Harajuku toward Shibuya. It changes character every 200 meters \u2014 from streetwear to vintage to high-concept.",
      },
      {
        rank: 4,
        name: "Omotesando Avenue",
        desc: "Tokyo\u2019s Champs-\u00c9lys\u00e9es \u2014 a wide, tree-lined boulevard with architectural flagships from every luxury brand. Even if you\u2019re not shopping, the buildings themselves are worth seeing: Tadao Ando\u2019s Omotesando Hills, Toyo Ito\u2019s Tod\u2019s building, and the honeycomb-like Prada store.",
        time: "30\u201345 min",
        cost: "Free",
        tip: "The best architecture is on the side streets branching off the main avenue. Look up \u2014 many buildings have hidden rooftop gardens or terraces.",
      },
      {
        rank: 5,
        name: "Design Festa Gallery",
        desc: "A free gallery covered in murals where any artist can rent wall space and exhibit. It changes constantly and is always surprising. Across the street from Takeshita but completely different in energy.",
        time: "15\u201320 min",
        cost: "Free",
        tip: null,
      },
      {
        rank: 6,
        name: "Togo Shrine Flea Market",
        desc: "A flea market held on the 1st and 4th Sunday of each month in the grounds of Togo Shrine. Vintage kimono, ceramics, antiques, and vinyl records. One of the best markets in Tokyo.",
        time: "60\u201390 min",
        cost: "Free entry",
        tip: "Arrive early (before 9 AM) for the best vintage kimono selection. Prices are negotiable \u2014 politely.",
      },
    ],
    restaurants: [
      {
        name: "Afuri",
        cuisine: "Ramen (yuzu shio)",
        priceRange: "\u00a5",
        priceDetail: "\u00a51,000\u20131,400",
        mustOrder:
          "Yuzu shio ramen \u2014 a light, citrus-scented chicken broth that\u2019s completely different from heavy tonkotsu. The signature dish that made them famous.",
        station: "Omotesando, 3 min walk from station",
        warning:
          "Queue at lunch, moves fast. The Harajuku location is smaller than the Ebisu original.",
      },
      {
        name: "Harajuku Gyoza Lou",
        cuisine: "Gyoza",
        priceRange: "\u00a5",
        priceDetail: "\u00a5600\u20131,000",
        mustOrder:
          "The pan-fried gyoza (one plate is 6 pieces). Crispy on the bottom, juicy inside. Order multiple plates \u2014 you\u2019ll want them.",
        station: "3 min walk from Harajuku Station",
        warning:
          "Tiny 6-seat counter. Queue wraps around the corner at peak times. Solo diners get in fastest.",
      },
      {
        name: "Eggs \u2019n Things",
        cuisine: "Pancakes / Brunch",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a51,200\u20131,800",
        mustOrder:
          "Strawberry whipped cream pancakes \u2014 a mountain of cream that\u2019s become an Instagram landmark. Tastes as good as it looks.",
        station: "On Takeshita-dori side street",
        warning: "Weekend queue can be 45+ min. Go weekday morning.",
      },
      {
        name: "Farmer\u2019s Market @ UNU",
        cuisine: "Market / Various",
        priceRange: "\u00a5",
        priceDetail: "\u00a5500\u20131,500",
        mustOrder:
          "Whatever\u2019s seasonal. Fresh produce, artisan bread, natural wine, craft coffee \u2014 all from small Japanese producers. Saturday and Sunday only.",
        station: "5 min walk toward Omotesando",
        warning:
          "Only weekends 10 AM\u20134 PM. Bring cash for smaller vendors.",
      },
      {
        name: "Sakura Tei",
        cuisine: "Okonomiyaki",
        priceRange: "\u00a5",
        priceDetail: "\u00a5900\u20131,400",
        mustOrder:
          "Seafood mix okonomiyaki \u2014 you cook it yourself on the table griddle. Fun experience, good food, tourist-friendly with English menus.",
        station: "On Takeshita-dori",
        warning: null,
      },
    ],
    transit: {
      stations: [
        { name: "Harajuku", lines: ["JR Yamanote Line"] },
        {
          name: "Meiji-jingumae",
          lines: ["Chiyoda Line", "Fukutoshin Line"],
        },
        {
          name: "Omotesando",
          lines: ["Ginza Line", "Chiyoda Line", "Hanzomon Line"],
        },
      ],
      fromShinjuku: "JR Yamanote Line, 2 stops \u00b7 5 min",
      fromTokyo: "Chiyoda Line to Meiji-jingumae \u00b7 20 min",
      fromShibuya:
        "JR Yamanote Line, 1 stop \u00b7 3 min (or walk Cat Street, 15 min)",
      walkingTip:
        "Everything is walkable. Meiji Jingu entrance is directly next to Harajuku Station. Takeshita Street entrance is across the road. Omotesando starts a 5-minute walk south. Cat Street runs parallel and connects to Shibuya \u2014 you can walk to Shibuya in 15 minutes without taking a train.",
    },
    timing: {
      bestTimeOfDay:
        "Morning (9\u201310 AM) for Meiji Jingu when it\u2019s peaceful, then hit Takeshita and Cat Street mid-morning before the crowds peak",
      bestSeason:
        "November\u2013December when the Jingu Gaien ginkgo avenue turns golden. Also great during fashion weeks (March, October) when the street style is at its wildest",
      avoidWhen:
        "Sunday afternoon \u2014 Takeshita Street becomes a sardine can. Weekdays are dramatically calmer",
      howLong: "2\u20134 hours",
      howLongDetail:
        "45 min for Meiji Jingu, 30\u201360 min for Takeshita, 30\u201360 min for Cat Street/Omotesando. Can easily fill a half-day if you\u2019re into fashion and shopping",
    },
  },

  // ==========================================================================
  // 3. SHIBUYA
  // ==========================================================================
  {
    slug: "shibuya",
    name: "Shibuya",
    subtitle: "The intersection of everything",
    tagline:
      "The world\u2019s busiest crossing, a 230-meter rooftop, and Tokyo\u2019s best people-watching \u2014 all within a 10-minute walk.",
    metaDescription:
      "The local\u2019s guide to Shibuya \u2014 Scramble Crossing, Shibuya Sky sunset, Miyashita Park, Nonbei Yokocho bars, and where to eat. With transit tips and timing for 2026.",
    keywords: [
      "Shibuya guide",
      "Shibuya Crossing",
      "Shibuya Sky",
      "things to do in Shibuya",
      "Shibuya food",
    ],
    color: "#1A1A1A",
    parentDay: {
      num: "01",
      title: "ELECTRIC PULSE",
      slug: "1-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "harajuku-omotesando",
        name: "Harajuku & Omotesando",
        direction: "north",
        transitTime:
          "JR Yamanote, 1 stop \u00b7 3 min (or 15-min walk via Cat Street)",
      },
      {
        slug: "shinjuku",
        name: "Shinjuku",
        direction: "northwest",
        transitTime: "JR Yamanote \u00b7 7 min",
      },
    ],
    quickFacts: {
      bestFor:
        "The Scramble Crossing, rooftop sunset, neon nightlife, people-watching",
      timeNeeded: "2\u20134 hours",
      nearestStation:
        "Shibuya (JR Yamanote, Ginza, Hanzomon, Fukutoshin, Tokyu, Keio Inokashira)",
      vibe: "High-energy, youthful, loud at night \u2014 Tokyo\u2019s beating heart",
    },
    activities: [
      {
        rank: 1,
        name: "Shibuya Scramble Crossing",
        desc: "The world\u2019s busiest pedestrian intersection \u2014 up to 3,000 people cross at each light change. Cross it from street level first to feel the rush, then view from above. The Starbucks overlooking it is always packed. Better viewpoints: Shibuya Sky or the Mag\u2019s Park rooftop on the 109 building.",
        time: "10\u201315 min",
        cost: "Free",
        tip: "Best at night when the neon signs light up and the crowd is biggest. Cross from the Hachiko exit side for the classic angle.",
      },
      {
        rank: 2,
        name: "Shibuya Sky",
        desc: "Open-air rooftop observation deck at 230 meters, on top of Shibuya Scramble Square. Unobstructed 360-degree views \u2014 Mt. Fuji visible on clear days. The outdoor \"sky edge\" section is genuinely thrilling. Budget 60\u201375 minutes.",
        time: "60\u201375 min",
        cost: "\u00a52,000",
        tip: "Book a 16:30\u201317:00 entry for golden hour. Sunset slots sell out 1\u20132 weeks ahead. No walk-ins for sunset.",
      },
      {
        rank: 3,
        name: "Miyashita Park",
        desc: "A rooftop park sitting on top of a 4-story shopping complex. Green space, skate park, bouldering wall, and a terrace with views of the Shibuya skyline. Good for a breather between the chaos. The shops below have a curated, less-corporate feel than most malls.",
        time: "20\u201340 min",
        cost: "Free",
        tip: "The rooftop terrace is best at golden hour. The food hall on the ground floor has good quick options.",
      },
      {
        rank: 4,
        name: "Center-Gai & Dogenzaka",
        desc: "The neon heart of Shibuya nightlife. Center-Gai is the main pedestrian street \u2014 chains, karaoke, and crowds. Dogenzaka is the hill behind it \u2014 bars, clubs, and love hotels. Walk it at night for the full effect. Louder and more chaotic than Shinjuku\u2019s Golden Gai.",
        time: "30\u201360 min",
        cost: "Free (eating/drinking extra)",
        tip: "Dogenzaka\u2019s side streets have some excellent small izakayas hidden among the nightlife venues. Look for places with handwritten menus.",
      },
      {
        rank: 5,
        name: "Shibuya Parco",
        desc: "A design-forward department store reopened in 2019. The top-floor Nintendo store and Capcom store are worth visiting even if you\u2019re not shopping. The art gallery on the upper floors shows interesting contemporary work. The basement food hall is excellent.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "The rooftop has a small garden with a Yayoi Kusama pumpkin sculpture.",
      },
      {
        rank: 6,
        name: "Hachiko Statue",
        desc: "The famous statue of the loyal Akita dog who waited at the station for his deceased owner for 9 years. It\u2019s outside the station\u2019s Hachiko Exit. A meeting point for locals, not really a destination \u2014 take a photo and move on.",
        time: "5 min",
        cost: "Free",
        tip: "There\u2019s a second, lesser-known Hachiko statue inside the station on the Tokyu line concourse \u2014 a mural by the original artist\u2019s student.",
      },
    ],
    restaurants: [
      {
        name: "Fuglen",
        cuisine: "Coffee / Cocktails",
        priceRange: "\u00a5",
        priceDetail: "\u00a5500\u2013800",
        mustOrder:
          "Any single-origin pour-over. This Norwegian-Japanese coffee shop is one of Tokyo\u2019s best third-wave spots. Transforms into a cocktail bar at night.",
        station: "Tomigaya area, 8 min walk from Shibuya Station",
        warning: "Small space, often full on weekends. Worth the wait.",
      },
      {
        name: "Onigiri Bongo",
        cuisine: "Onigiri",
        priceRange: "\u00a5",
        priceDetail: "\u00a5200\u2013400 each",
        mustOrder:
          "Sake (salmon) and umeboshi (pickled plum). Handmade to order at the counter, impossibly fresh. The niku-miso (meat miso) is the sleeper hit.",
        station: "Tomigaya, 15 min walk from Shibuya (or 3 min from Yoyogi-Hachiman Station)",
        warning:
          "Counter seating only. Queue is normal but moves fast. Worth the walk from Shibuya.",
      },
      {
        name: "Ichiran Ramen",
        cuisine: "Ramen (tonkotsu)",
        priceRange: "\u00a5",
        priceDetail: "\u00a51,000\u20131,400",
        mustOrder:
          "The classic tonkotsu ramen with your custom spice level, noodle firmness, and richness. You eat in individual booths \u2014 perfect for solo travelers. A great intro to Japanese ramen culture.",
        station: "Shibuya Center-Gai, 3 min walk",
        warning:
          "Chain restaurant, not the \u201cbest\u201d ramen in Tokyo, but the solo-booth experience is uniquely Japanese and worth doing once.",
      },
      {
        name: "Uobei",
        cuisine: "Conveyor belt sushi",
        priceRange: "\u00a5",
        priceDetail: "\u00a5100+ per plate",
        mustOrder:
          "Salmon, engawa (flounder fin), and shrimp \u2014 order from the touchscreen and plates zoom to your seat on a bullet-train track. Fast, fun, and surprisingly good for the price.",
        station: "2 min walk from Shibuya Station",
        warning: "Queue at dinner. Lunch is calmer.",
      },
      {
        name: "Nonbei Yokocho",
        cuisine: "Izakaya alley",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a51,000\u20133,000",
        mustOrder:
          "Point and choose \u2014 each tiny bar has its own personality. The alley is 40+ old-school drinking holes crammed into two narrow rows behind the station. Some are members-only, most welcome walk-ins.",
        station: "Behind Shibuya Station, 2 min walk from Hachiko Exit",
        warning:
          "Some bars have cover charges (\u00a5500\u20131,000). Check the sign on the door. Cash only at most places.",
      },
    ],
    transit: {
      stations: [
        {
          name: "Shibuya",
          lines: [
            "JR Yamanote Line",
            "Ginza Line",
            "Hanzomon Line",
            "Fukutoshin Line",
            "Tokyu Toyoko Line",
            "Tokyu Den-en-toshi Line",
            "Keio Inokashira Line",
          ],
        },
      ],
      fromShinjuku: "JR Yamanote Line \u00b7 7 min",
      fromTokyo:
        "Marunouchi Line to Ginza, transfer Ginza Line \u00b7 20 min",
      fromShibuya: "\u2014 (you\u2019re here)",
      walkingTip:
        "Shibuya Station is being rebuilt through 2027 \u2014 exits and paths change frequently. Use Google Maps for real-time station navigation. Once outside, everything on this page is within a 10-minute walk except Fuglen and Onigiri Bongo (15 min).",
    },
    timing: {
      bestTimeOfDay:
        "Late afternoon (4\u20135 PM) arriving, Shibuya Sky at sunset (5:30\u20136:30 PM depending on season), then dinner and neon walk at night",
      bestSeason:
        "Year-round \u2014 Shibuya doesn\u2019t have a seasonal peak. The neon and energy are constant. Halloween (Oct 31) is legendary chaos if you\u2019re into that.",
      avoidWhen:
        "Rush hour (7:30\u20139:30 AM, 5:30\u20137:30 PM) \u2014 the station is hellish. Friday and Saturday nights after 11 PM can get rowdy on Center-Gai.",
      howLong: "2\u20134 hours",
      howLongDetail:
        "15 min for the Scramble, 75 min for Shibuya Sky, 30 min for Miyashita Park, 60+ min for dinner and exploring. Can stretch to a full evening.",
    },
  },

  // ==========================================================================
  // 4. SHINJUKU
  // ==========================================================================
  {
    slug: "shinjuku",
    name: "Shinjuku",
    subtitle: "3.6 million people pass through here daily",
    tagline:
      "Postwar yakitori alleys, 200 tiny bars, the best free viewpoint in Tokyo, and a station with 200+ exits.",
    metaDescription:
      "The local\u2019s guide to Shinjuku \u2014 Omoide Yokocho, Golden Gai, Tokyo Metropolitan Government Building sunset, Kabukicho, Shinjuku Gyoen, and where to eat. 2026 edition.",
    keywords: [
      "Shinjuku guide",
      "Golden Gai",
      "Omoide Yokocho",
      "things to do in Shinjuku",
      "Shinjuku food",
      "Shinjuku nightlife",
    ],
    color: "#FF6F00",
    parentDay: {
      num: "01",
      title: "ELECTRIC PULSE",
      slug: "1-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "harajuku-omotesando",
        name: "Harajuku & Omotesando",
        direction: "south",
        transitTime: "JR Yamanote, 2 stops \u00b7 5 min",
      },
      {
        slug: "shibuya",
        name: "Shibuya",
        direction: "south",
        transitTime: "JR Yamanote \u00b7 7 min",
      },
    ],
    quickFacts: {
      bestFor:
        "Night food, tiny bars, free sunset views, gardens, neon sensory overload",
      timeNeeded: "3\u20135 hours",
      nearestStation:
        "Shinjuku (JR Yamanote + 6 JR lines, Marunouchi, Shinjuku, Oedo, Keio, Odakyu)",
      vibe: "Overwhelming, electric, and endlessly layered \u2014 each exit leads to a different world",
    },
    activities: [
      {
        rank: 1,
        name: "Omoide Yokocho (Memory Lane)",
        desc: "A narrow postwar yakitori alley packed with tiny stalls seating 6\u20138 people. Smoke, sizzling meat, cold beer, and atmosphere that hasn\u2019t changed in decades. This is old Tokyo at its most authentic \u2014 cramped, smoky, and wonderful.",
        time: "60\u201390 min",
        cost: "\u00a52,000\u20134,000",
        tip: "Come at dusk when the lanterns light up. Most stalls are cash-only. Point-and-order works fine \u2014 chicken skin (kawa), tsukune (meatball), and negima (thigh with scallion) are the classics.",
      },
      {
        rank: 2,
        name: "Golden Gai",
        desc: "A grid of 200+ tiny bars crammed into 6 narrow alleys, each seating 5\u20138 people. Every bar has a different theme, vibe, and owner. Some are members-only, but most welcome tourists \u2014 look for signs. The density of personality per square meter is unmatched anywhere in the world.",
        time: "60\u2013120 min",
        cost: "\u00a51,000\u20133,000 per bar (including cover)",
        tip: "Most bars charge a cover (\u00a5500\u20131,000) \u2014 this is normal, not a scam. Check the door sign. Try 2\u20133 bars in one night. Talk to the bartender. That\u2019s the entire experience.",
      },
      {
        rank: 3,
        name: "Tokyo Metropolitan Government Building",
        desc: "Free observation decks on the 45th floor (202 meters). North tower is more popular; south tower has almost identical views with a fraction of the queue. On clear days you can see Mt. Fuji. 360-degree panoramic views of the entire city.",
        time: "30\u201345 min",
        cost: "Free",
        tip: "Go 30 minutes before sunset for golden hour. The south tower is the move \u2014 the north tower can have 30+ minute queues at peak times.",
      },
      {
        rank: 4,
        name: "Kabukicho",
        desc: "Tokyo\u2019s biggest entertainment district. Neon overload, the Godzilla head on the Toho building, Kabukicho Tower (calmer restaurants on upper floors), and Robot Restaurant (if still operating \u2014 check current status). Walk it at night for the full sensory experience.",
        time: "30\u201360 min",
        cost: "Free (entertainment extra)",
        tip: "Ignore street touts. Kabukicho Tower\u2019s upper floors have legitimate restaurants with great views. The area is safe but loud.",
      },
      {
        rank: 5,
        name: "Shinjuku Gyoen National Garden",
        desc: "One of Tokyo\u2019s finest gardens, spanning three distinct styles: Japanese traditional, English landscape, and French formal. Cherry blossom season here is extraordinary, but it\u2019s beautiful year-round. A perfect counterpoint to the chaos outside.",
        time: "60\u201390 min",
        cost: "\u00a5500",
        tip: "No alcohol allowed inside. Grab a konbini bento and eat on the lawn \u2014 a very Tokyo thing to do. The Japanese garden section is the most photogenic.",
      },
      {
        rank: 6,
        name: "Hanazono Shrine",
        desc: "A small Shinto shrine hidden among the skyscrapers of east Shinjuku. A peaceful contrast to the surrounding chaos. The vermillion torii gates glow at night. A flea market/food market happens on some Sundays.",
        time: "10\u201315 min",
        cost: "Free",
        tip: "Right next to Golden Gai \u2014 visit before drinks for a moment of quiet.",
      },
      {
        rank: 7,
        name: "Isetan Department Store",
        desc: "Japan\u2019s most prestigious department store. Even if you\u2019re not buying, the basement food hall (depachika) is a destination \u2014 beautifully packaged sweets, wagashi, bento, and free samples. The menswear building across the street is equally impressive.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "The depachika is best visited around 5\u20136 PM when stores start marking down bento and prepared foods.",
      },
    ],
    restaurants: [
      {
        name: "Fuunji",
        cuisine: "Tsukemen (dipping ramen)",
        priceRange: "\u00a5",
        priceDetail: "\u00a51,000\u20131,200",
        mustOrder:
          "The rich fish-and-pork-bone tsukemen \u2014 thick noodles you dip into an intensely concentrated broth. Arguably the best tsukemen in Tokyo.",
        station: "Near Shinjuku south exit, 3 min walk",
        warning:
          "Legendary 20\u201330 min queue at lunch. Moves fast. The queue itself is part of the experience.",
      },
      {
        name: "Tsunahachi",
        cuisine: "Tempura",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a52,000\u20133,500",
        mustOrder:
          "The tempura course (tendon or set) \u2014 perfectly battered shrimp, vegetables, and fish fried to a shatter. Operating since 1923.",
        station: "3 min walk from east exit",
        warning: null,
      },
      {
        name: "Nakajima",
        cuisine: "Japanese (sardine set)",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,000",
        mustOrder:
          "The lunch-only iwashi (sardine) set \u2014 Michelin-starred dinner restaurant that serves an \u00a5800 sardine lunch. Possibly the best-value Michelin meal in all of Tokyo.",
        station: "Basement of a building near east exit, 5 min walk",
        warning:
          "Lunch only (11:30\u20132:00). Queues from 11 AM. Worth every minute of waiting.",
      },
      {
        name: "Berg",
        cuisine: "Beer hall / Kissaten",
        priceRange: "\u00a5",
        priceDetail: "\u00a5500\u20131,000",
        mustOrder:
          "Draft beer and a hot dog. A retro standing beer hall inside Shinjuku Station that\u2019s been a local institution for decades. Fast, cheap, and full of character.",
        station: "Inside Shinjuku Station (east side B1 level)",
        warning:
          "Standing only. Cash preferred. Can be hard to find \u2014 it\u2019s in the station basement near Lumine Est.",
      },
      {
        name: "Numazuko",
        cuisine: "Standing sushi",
        priceRange: "\u00a5",
        priceDetail: "\u00a5150\u2013500 per piece",
        mustOrder:
          "Whatever the board says is today\u2019s special. Standing sushi counter with fish so fresh the prices feel like a mistake. Fast turnover, no reservations.",
        station: "Near east exit, 2 min walk",
        warning: "Standing only. Quick eat, not a lingering meal.",
      },
      {
        name: "Golden Gai bars",
        cuisine: "Bars / Snacks",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a51,000\u20133,000 per bar",
        mustOrder:
          "Whatever the bartender recommends. Each bar is different. Some serve food, some don\u2019t. Highball (whisky soda) is the universal safe order.",
        station: "East exit, 5 min walk",
        warning:
          "Cover charge \u00a5500\u20131,000 per bar is normal. Check the door. Some bars are cash-only.",
      },
    ],
    transit: {
      stations: [
        {
          name: "Shinjuku",
          lines: [
            "JR Yamanote Line",
            "JR Chuo Line",
            "JR Sobu Line",
            "Marunouchi Line",
            "Shinjuku Line",
            "Oedo Line",
            "Keio Line",
            "Odakyu Line",
          ],
        },
        {
          name: "Seibu-Shinjuku",
          lines: ["Seibu Shinjuku Line"],
        },
      ],
      fromShinjuku: "\u2014 (you\u2019re here)",
      fromTokyo:
        "JR Chuo Line (Rapid) \u00b7 15 min, or Marunouchi Line \u00b7 20 min",
      fromShibuya: "JR Yamanote Line \u00b7 7 min",
      walkingTip:
        "200+ exits. Screenshot your exit BEFORE going underground. East Exit = Kabukicho and Golden Gai. West Exit = Memory Lane and Government Building. South Exit = Shinjuku Gyoen direction. Shinjuku is the world\u2019s busiest station \u2014 Google Maps indoor navigation is your friend.",
    },
    timing: {
      bestTimeOfDay:
        "Late afternoon for Shinjuku Gyoen (if not Monday), sunset at the Government Building (free), then dinner at Omoide Yokocho, night in Golden Gai",
      bestSeason:
        "Cherry blossom season (late March\u2013April) for Shinjuku Gyoen, or year-round for nightlife \u2014 Golden Gai and Memory Lane don\u2019t have seasons",
      avoidWhen:
        "Morning rush (7:30\u20139:30 AM) \u2014 the station will crush your soul. Shinjuku Gyoen is closed Mondays.",
      howLong: "3\u20135 hours",
      howLongDetail:
        "90 min for Shinjuku Gyoen, 30\u201345 min for the Government Building, 60\u201390 min for Memory Lane dinner, 60\u2013120 min for Golden Gai. Shinjuku has the most to do of any neighborhood \u2014 it can fill an entire evening.",
    },
  },

  // ==========================================================================
  // 5. GINZA & TSUKIJI
  // ==========================================================================
  {
    slug: "ginza-tsukiji",
    name: "Ginza & Tsukiji",
    subtitle: "Where Tokyo dresses up and eats raw",
    tagline:
      "Tokyo\u2019s best street food market and its most elegant shopping boulevard, a 10-minute walk apart.",
    metaDescription:
      "The local\u2019s guide to Ginza and Tsukiji \u2014 Tsukiji Outer Market street food, Ginza architecture walk, Kabuki-za Theatre, and where to eat. With transit tips and timing for 2026.",
    keywords: [
      "Ginza guide",
      "Tsukiji Market",
      "Ginza shopping",
      "Tsukiji food",
      "things to do in Ginza",
    ],
    color: "#1565C0",
    parentDay: {
      num: "02",
      title: "OLD WORLD ZEN",
      slug: "2-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "asakusa",
        name: "Asakusa",
        direction: "north",
        transitTime: "Ginza Line, 15 min",
      },
      {
        slug: "shibuya",
        name: "Shibuya",
        direction: "west",
        transitTime: "Ginza Line \u00b7 15 min",
      },
      {
        slug: "akihabara-ueno",
        name: "Ueno & Akihabara",
        direction: "north",
        transitTime: "Hibiya Line to Ueno \u00b7 12 min",
      },
    ],
    quickFacts: {
      bestFor:
        "Street food, sushi, luxury architecture, traditional theater",
      timeNeeded: "3\u20134 hours",
      nearestStation:
        "Ginza (Ginza, Marunouchi, Hibiya Lines), Tsukiji (Hibiya Line)",
      vibe: "Two neighborhoods in one \u2014 Tsukiji is noisy, delicious chaos; Ginza is polished, architectural, and expensive",
    },
    activities: [
      {
        rank: 1,
        name: "Tsukiji Outer Market",
        desc: "400+ stalls and small restaurants packed into narrow lanes. This is NOT where the tuna auctions happen (that moved to Toyosu years ago), but the outer market is thriving and arguably better for tourists. Go hungry \u2014 the whole point is eating your way through.",
        time: "60\u201390 min",
        cost: "Free entry (\u00a51,000\u20133,000 for food)",
        tip: "Vendors start closing around 2 PM. Arrive by 10\u201311 AM for the full experience. Tuesday and Wednesday some stalls are closed.",
      },
      {
        rank: 2,
        name: "Ginza Six",
        desc: "A luxury shopping complex with a stunning free rooftop garden. The garden features a Kusama-inspired art installation and panoramic views. It\u2019s a hidden quiet spot above one of Tokyo\u2019s busiest shopping districts. The basement food hall is excellent.",
        time: "30\u201345 min",
        cost: "Free",
        tip: "Take the elevator directly to the rooftop. Most tourists don\u2019t know it exists.",
      },
      {
        rank: 3,
        name: "Kabuki-za Theatre",
        desc: "Japan\u2019s most famous kabuki theater. The ornate facade alone is worth photographing. Single-act tickets (\u00a51,000\u20132,000) let you watch one 30\u201360 minute act from the upper gallery without committing to a full 4-hour show. A great way to experience traditional Japanese theater.",
        time: "30\u201360 min",
        cost: "\u00a51,000\u20132,000 (single act)",
        tip: "Single-act tickets (hitomaku-mi) are sold on the day at the left entrance. English subtitles available via rental device. Even 30 minutes of kabuki is a memorable experience.",
      },
      {
        rank: 4,
        name: "Uniqlo Ginza (12 floors)",
        desc: "The world\u2019s biggest Uniqlo. Japan-exclusive items, collaborations, and limited editions are on the upper floors. The UT (graphic tee) floor has designs you won\u2019t find outside Japan. Tax-free for tourists with passport.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "Japan-exclusive items are marked with a small flag. The upper floors are calmer and have the best exclusives.",
      },
      {
        rank: 5,
        name: "Ginza Architecture Walk",
        desc: "Ginza\u2019s main boulevards are an open-air museum of contemporary architecture. Herm\u00e8s (glass bricks by Renzo Piano), Mikimoto (organic white curves), Swarovski (crystal fa\u00e7ade), Cartier (mesh screen), and the De Beers building. Free to admire from the street.",
        time: "30\u201345 min",
        cost: "Free",
        tip: "Best at night when the fa\u00e7ades are illuminated. Walk Chuo-dori from Ginza 4-chome intersection south.",
      },
      {
        rank: 6,
        name: "Toyosu Market Visitor Area",
        desc: "Where the famous tuna auctions moved from Tsukiji. A viewing gallery lets you watch the auctions from above through glass walls. The market itself has a restaurant floor with some of the freshest sushi in Tokyo. Much more modern and sterile than Tsukiji.",
        time: "60\u201390 min",
        cost: "Free (reservation needed for auction viewing)",
        tip: "Auction viewing requires advance reservation and an early morning start (5 AM). The restaurant floor is open later and doesn\u2019t require reservations. Yurikamome Line to Shijo-mae Station.",
      },
    ],
    restaurants: [
      {
        name: "Tsukiji Shouro",
        cuisine: "Tamago (egg omelette)",
        priceRange: "\u00a5",
        priceDetail: "\u00a5100\u2013200",
        mustOrder:
          "Tamago on a stick \u2014 the iconic Tsukiji market snack. A thick, sweet Japanese omelette on a wooden skewer. The line moves fast.",
        station: "Inside Tsukiji Outer Market",
        warning: null,
      },
      {
        name: "Daiwa Sushi",
        cuisine: "Sushi (omakase)",
        priceRange: "\u00a5\u00a5\u00a5",
        priceDetail: "\u00a53,000\u20135,000",
        mustOrder:
          "The omakase (chef\u2019s choice) set. Fish is absurdly fresh \u2014 the quality-to-price ratio is among the best in Tokyo. Shorter queue than the legendary Sushi Dai, equally good.",
        station: "Inside Tsukiji Outer Market",
        warning:
          "Queue can be 30\u201360 min at peak. Go early or late (after 1 PM) for shorter waits.",
      },
      {
        name: "Ginza Steak Aoki",
        cuisine: "Wagyu steak",
        priceRange: "\u00a5\u00a5\u00a5",
        priceDetail: "\u00a55,000 (lunch set)",
        mustOrder:
          "The wagyu steak lunch set \u2014 Ginza-quality wagyu at a lunch-set price. The meat is seared in front of you on a teppan. A splurge, but worth it.",
        station: "5 min walk from Ginza Station",
        warning:
          "Lunch sets are much more affordable than dinner. Reservations recommended but walk-ins possible at 11 AM.",
      },
      {
        name: "Tricolore",
        cuisine: "Kissaten (classic cafe)",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,200",
        mustOrder:
          "Hand-drip coffee in a china cup, served with old-world elegance. This is a classic Ginza kissaten \u2014 the atmosphere is the point. Velvet chairs, dark wood, no Wi-Fi, no laptops.",
        station: "3 min walk from Ginza Station",
        warning: null,
      },
      {
        name: "Ginza Kagari",
        cuisine: "Ramen (chicken)",
        priceRange: "\u00a5",
        priceDetail: "\u00a51,000\u20131,300",
        mustOrder:
          "Tori paitan (creamy chicken broth) ramen. Michelin Bib Gourmand rated \u2014 the broth is silky, rich, and completely different from standard tonkotsu. One of Ginza\u2019s best-kept secrets.",
        station: "5 min walk from Ginza Station",
        warning: "Always a queue. Lunch or late afternoon is best.",
      },
      {
        name: "Tsukiji street food",
        cuisine: "Market stalls",
        priceRange: "\u00a5",
        priceDetail: "\u00a5500\u20131,500",
        mustOrder:
          "Fresh uni (sea urchin) cups (\u00a5500\u2013800), grilled scallops (\u00a5500), tuna skewers (\u00a5300), and fresh strawberries. Eat standing, move to the next stall. This is how Tsukiji works.",
        station: "Tsukiji Outer Market",
        warning:
          "Cash only at most stalls. Bring small bills (\u00a51,000 notes).",
      },
    ],
    transit: {
      stations: [
        {
          name: "Ginza",
          lines: ["Ginza Line", "Marunouchi Line", "Hibiya Line"],
        },
        { name: "Tsukiji", lines: ["Hibiya Line"] },
        {
          name: "Higashi-Ginza",
          lines: ["Hibiya Line", "Asakusa Line"],
        },
      ],
      fromShinjuku:
        "Marunouchi Line to Ginza \u00b7 20 min",
      fromTokyo:
        "Marunouchi Line, 1 stop \u00b7 3 min (or 10-min walk)",
      fromShibuya: "Ginza Line direct \u00b7 15 min",
      walkingTip:
        "Tsukiji to Ginza is a 10-minute walk. They\u2019re technically separate neighborhoods but practically adjacent. Start at Tsukiji in the morning (food), walk to Ginza in the afternoon (architecture and shopping). Tokyo Station is also walkable from Ginza in 15 minutes through Marunouchi.",
    },
    timing: {
      bestTimeOfDay:
        "Morning for Tsukiji (arrive 10\u201311 AM for the full market), afternoon for Ginza architecture walk, evening for illuminated fa\u00e7ades and Kabuki-za",
      bestSeason:
        "Year-round. Tsukiji is best in cooler months when fish is freshest. Ginza is pleasant in autumn and spring. On Sundays, Chuo-dori is closed to cars and becomes a pedestrian boulevard.",
      avoidWhen:
        "Tsukiji after 2 PM (stalls start closing). Tuesday and Wednesday (some Tsukiji vendors take these days off). Ginza is dead on Monday mornings.",
      howLong: "3\u20134 hours",
      howLongDetail:
        "60\u201390 min for Tsukiji eating, 10-min walk to Ginza, 60\u201390 min for Ginza architecture + shopping. Add 60 min if doing Kabuki-za single act.",
    },
  },

  // ==========================================================================
  // 6. UENO & AKIHABARA
  // ==========================================================================
  {
    slug: "akihabara-ueno",
    name: "Ueno & Akihabara",
    subtitle: "Museums and manga, one stop apart",
    tagline:
      "World-class art museums in the morning, multi-floor anime arcades in the afternoon \u2014 connected by a 4-minute train ride.",
    metaDescription:
      "The local\u2019s guide to Ueno and Akihabara \u2014 Tokyo National Museum, Ameyoko Market, Mandarake Complex, retro gaming, and where to eat. With transit tips and timing for 2026.",
    keywords: [
      "Ueno guide",
      "Akihabara guide",
      "Tokyo National Museum",
      "Akihabara anime",
      "Ueno Park",
      "things to do in Akihabara",
    ],
    color: "#F57C00",
    parentDay: {
      num: "03",
      title: "CULTURE CIRCUIT",
      slug: "3-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "asakusa",
        name: "Asakusa",
        direction: "east",
        transitTime: "Ginza Line, 5 min",
      },
      {
        slug: "yanaka",
        name: "Yanaka",
        direction: "north",
        transitTime: "JR to Nippori, 1 stop \u00b7 3 min",
      },
      {
        slug: "ginza-tsukiji",
        name: "Ginza & Tsukiji",
        direction: "south",
        transitTime: "Hibiya Line to Ginza \u00b7 12 min",
      },
    ],
    quickFacts: {
      bestFor:
        "Museums, anime/manga, retro gaming, street markets, traditional soba",
      timeNeeded: "4\u20135 hours",
      nearestStation:
        "Ueno (JR Yamanote + several lines, Ginza, Hibiya), Akihabara (JR Yamanote, Sobu, Tsukuba Express)",
      vibe: "Ueno is cultural and green; Akihabara is neon-lit and obsessive. One stop apart but completely different worlds.",
    },
    activities: [
      {
        rank: 1,
        name: "Tokyo National Museum",
        desc: "Japan\u2019s largest and most comprehensive museum, covering Japanese art from ancient Jomon pottery to Edo-period screens to modern prints. The Honkan (main building) alone takes 2 hours. The Gallery of Horyuji Treasures is a stunning minimal space housing 7th-century Buddhist art.",
        time: "2\u20132.5 hours",
        cost: "\u00a51,000",
        tip: "Pick the Honkan (Japanese Gallery) if you only have time for one building. The audio guide (\u00a5600) is excellent and worth it.",
      },
      {
        rank: 2,
        name: "Mandarake Complex (Akihabara)",
        desc: "8 floors of manga, anime figures, doujinshi (fan comics), vintage toys, cosplay supplies, and collectibles. This is the collector\u2019s mecca \u2014 each floor specializes in a different category. Prices are fair and the condition grading is meticulous.",
        time: "30\u201360 min",
        cost: "Free (shopping extra)",
        tip: "The vintage toy floor and the rare manga floor are the most interesting even if you\u2019re not buying. Check the glass cases for rare one-of-a-kind items.",
      },
      {
        rank: 3,
        name: "Ueno Park & Shinobazu Pond",
        desc: "A sprawling public park that houses 6+ museums, a zoo, shrines, and the beautiful lotus-covered Shinobazu Pond. Cherry blossom season here is legendary \u2014 the park becomes a tunnel of pink. Year-round, it\u2019s a lovely green space for a stroll between museums.",
        time: "30\u201360 min (park only)",
        cost: "Free",
        tip: "The path from JR Ueno Park Exit leads directly into the park. Shinobazu Pond is best in summer when the lotuses are in full bloom.",
      },
      {
        rank: 4,
        name: "Super Potato (Akihabara)",
        desc: "A retro gaming store across 3 floors, packed with playable consoles from every era \u2014 NES, SNES, Sega Saturn, N64, and more. The top floor is a retro arcade with vintage cabinets you can actually play. Gaming nostalgia heaven.",
        time: "20\u201340 min",
        cost: "Free (games \u00a5100 per play)",
        tip: "The retro arcade on the top floor is the highlight. Bring \u00a5100 coins.",
      },
      {
        rank: 5,
        name: "Ameyoko Market",
        desc: "A covered street market running between Ueno and Okachimachi stations. Originally a postwar black market, now a chaotic mix of fresh fish, dried goods, street food, discount clothing, sneakers, and cosmetics. The energy is incredible \u2014 vendors shout prices, tourists haggle, and the food is cheap and good.",
        time: "30\u201345 min",
        cost: "Free entry (\u00a5500\u20131,500 for food)",
        tip: "The street food stalls near the Okachimachi end have the best yakitori and fresh-cut fruit. Prices are cheaper than most of Tokyo.",
      },
      {
        rank: 6,
        name: "National Museum of Western Art",
        desc: "A Le Corbusier-designed UNESCO building housing an impressive collection of Western art. Rodin\u2019s The Thinker sits in the courtyard. Monet, Renoir, Pollock, and Max Ernst inside. The building itself is as much a work of art as the collection.",
        time: "60\u201390 min",
        cost: "\u00a5500",
        tip: "Free on the first Sunday of every month. The Rodin sculptures in the courtyard are free to see without entering.",
      },
      {
        rank: 7,
        name: "Akihabara Arcades (GiGO, Taito Station)",
        desc: "Multi-floor game centers with crane games, rhythm games, fighting games, purikura (photo booths), and retro cabinets. GiGO (formerly Sega) and Taito Station are the biggest. The crane games are addictive \u2014 budget more than you think.",
        time: "30\u201360 min",
        cost: "\u00a5100\u2013500 per game",
        tip: "The upper floors have the more interesting games (rhythm games, VR). The ground floor is mostly crane games designed to eat your coins.",
      },
    ],
    restaurants: [
      {
        name: "Innsyoutei",
        cuisine: "Traditional Japanese",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a52,000\u20133,000",
        mustOrder:
          "The seasonal lunch set in the garden-view room. Operating inside Ueno Park since 1875 \u2014 traditional Japanese cuisine in a setting that feels like a time capsule.",
        station: "Inside Ueno Park, 5 min walk from JR Ueno",
        warning:
          "Lunch is first-come. Arrive before noon for the garden-view seats.",
      },
      {
        name: "Kanda Yabu Soba",
        cuisine: "Soba",
        priceRange: "\u00a5",
        priceDetail: "\u00a51,000\u20131,500",
        mustOrder:
          "Zaru soba (cold buckwheat noodles with dipping sauce). One of Tokyo\u2019s three legendary soba houses, operating since 1880. The building was rebuilt after a fire but the recipes haven\u2019t changed.",
        station: "10 min walk from Akihabara Station",
        warning: "Expect a wait at lunch. Worth it.",
      },
      {
        name: "CoCo Ichibanya",
        cuisine: "Japanese curry",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,200",
        mustOrder:
          "Customize your curry: choose rice amount, spice level (1\u201310), and toppings. The Akihabara branch has anime-themed promotions. Solid, reliable, and satisfying.",
        station: "Akihabara main street, 2 min walk",
        warning: null,
      },
      {
        name: "Ameyoko street food",
        cuisine: "Market stalls",
        priceRange: "\u00a5",
        priceDetail: "\u00a5200\u2013500",
        mustOrder:
          "Yakitori (\u00a5200), fresh-cut tropical fruit (\u00a5300), chocolate-covered strawberries (\u00a5500), and dried fruit samples. Eat as you walk through the market.",
        station: "Between Ueno and Okachimachi stations",
        warning: "Cash only. Bring small bills.",
      },
      {
        name: "Kanda Matsuya",
        cuisine: "Soba",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,000",
        mustOrder:
          "Another historic soba house near Akihabara \u2014 less famous than Yabu, equally good, and usually no queue. The tempura soba is excellent.",
        station: "7 min walk from Akihabara Station",
        warning: null,
      },
    ],
    transit: {
      stations: [
        {
          name: "Ueno",
          lines: [
            "JR Yamanote Line",
            "JR Keihin-Tohoku Line",
            "Ginza Line",
            "Hibiya Line",
          ],
        },
        {
          name: "Akihabara",
          lines: [
            "JR Yamanote Line",
            "JR Sobu Line",
            "Tsukuba Express",
          ],
        },
      ],
      fromShinjuku:
        "JR Yamanote Line to Ueno \u00b7 25 min, or JR Chuo Line (Rapid) to Akihabara \u00b7 18 min",
      fromTokyo:
        "JR Yamanote or Keihin-Tohoku Line to Ueno \u00b7 7 min, to Akihabara \u00b7 4 min",
      fromShibuya:
        "JR Yamanote Line to Ueno \u00b7 30 min, to Akihabara \u00b7 25 min",
      walkingTip:
        "Ueno and Akihabara are one stop apart on the JR Yamanote Line (4 min). Easily walkable in 15 minutes through quiet streets. Do Ueno first (museums open 9:30), then walk or train to Akihabara (shops open 11\u201312).",
    },
    timing: {
      bestTimeOfDay:
        "Morning for Ueno (museums open at 9:30 AM), afternoon for Akihabara (shops open 11 AM\u2013noon, arcades peak energy at night)",
      bestSeason:
        "Cherry blossom season (late March\u2013early April) when Ueno Park erupts in pink. Akihabara is year-round.",
      avoidWhen:
        "Monday \u2014 many museums are closed. Weekend Akihabara is extremely crowded. Themed cafes (maid cafes, etc.) charge \u00a51,500\u20133,000 cover just to sit down plus food minimums \u2014 check prices at the door.",
      howLong: "4\u20135 hours",
      howLongDetail:
        "2\u20132.5 hours for Ueno (museum + park + Ameyoko), 2 hours for Akihabara (Mandarake + Super Potato + arcade). Can split across morning and afternoon.",
    },
  },

  // ==========================================================================
  // 7. YANAKA
  // ==========================================================================
  {
    slug: "yanaka",
    name: "Yanaka",
    subtitle: "The Tokyo that survived the bombs",
    tagline:
      "Narrow lanes, wooden facades, 70 temples, and more cats than tourists. The old Tokyo that time forgot.",
    metaDescription:
      "The local\u2019s guide to Yanaka \u2014 Yanaka Ginza shopping street, Yanaka Cemetery, cat-spotting, temple hopping, and the best coffee in the neighborhood. With transit tips and timing for 2026.",
    keywords: [
      "Yanaka guide",
      "Yanaka Ginza",
      "things to do in Yanaka",
      "Yanaka Tokyo",
      "old Tokyo neighborhood",
    ],
    color: "#795548",
    parentDay: {
      num: "03",
      title: "CULTURE CIRCUIT",
      slug: "3-day-tokyo-itinerary",
    },
    adjacent: [
      {
        slug: "akihabara-ueno",
        name: "Ueno & Akihabara",
        direction: "south",
        transitTime: "JR to Ueno, 1 stop \u00b7 3 min",
      },
      {
        slug: "asakusa",
        name: "Asakusa",
        direction: "east",
        transitTime: "JR to Nippori, then Keisei or taxi \u00b7 15 min",
      },
    ],
    quickFacts: {
      bestFor:
        "Old Tokyo atmosphere, cat-spotting, slow wandering, traditional street food",
      timeNeeded: "1.5\u20132.5 hours",
      nearestStation:
        "Nippori (JR Yamanote, Keisei Skyliner), Sendagi (Chiyoda Line)",
      vibe: "Quiet, residential, nostalgic \u2014 feels like 1960s Tokyo. The antidote to sensory overload.",
    },
    activities: [
      {
        rank: 1,
        name: "Yanaka Ginza Shopping Street",
        desc: "A charming 170-meter shotengai (traditional shopping street) with small shops, street food stalls, and a famous \"sunset staircase\" (Yuyake Dandan) at the top where locals gather to watch the evening sky. The stalls sell menchi-katsu, yakitori, melon-pan ice cream, and handmade crafts. It feels like a village inside a megacity.",
        time: "30\u201345 min",
        cost: "Free (food \u00a5200\u2013500)",
        tip: "Approach from Nippori Station (walk through the cemetery first), then descend the sunset staircase into Yanaka Ginza. This is the natural flow and the most atmospheric entry.",
      },
      {
        rank: 2,
        name: "Yanaka Cemetery",
        desc: "A peaceful, winding cemetery with old trees, moss-covered stones, and narrow paths. Not morbid at all \u2014 it\u2019s more like a garden. Famous residents include the last Tokugawa shogun. Cats lounge on the tombstones. Cherry blossom season transforms it into a pink tunnel.",
        time: "20\u201330 min",
        cost: "Free",
        tip: "Enter from the Nippori side and walk south. The cherry blossom path through the cemetery is one of Tokyo\u2019s most underrated hanami spots.",
      },
      {
        rank: 3,
        name: "SCAI The Bathhouse",
        desc: "A contemporary art gallery converted from a 200-year-old public bathhouse. Free admission. The contrast of cutting-edge modern art inside the traditional tile-and-wood structure is genuinely striking. Shows change every few weeks.",
        time: "15\u201320 min",
        cost: "Free",
        tip: "Check their website for current exhibition. Closed Mondays and between exhibitions.",
      },
      {
        rank: 4,
        name: "Cat-spotting",
        desc: "Yanaka is famous for its cats. Stray-friendly neighborhood with cat sculptures on fences, cat-shaped tail signs, cat-themed shops, and actual cats lounging on walls and in temple gardens. There\u2019s even a cat-themed craft beer bar (Yanaka Beer Hall).",
        time: "Ongoing",
        cost: "Free",
        tip: "The cats are most active in the morning and late afternoon. Don\u2019t chase or pick them up \u2014 they\u2019ll come to you if they want to. The wooden cat sculptures on Yanaka Ginza\u2019s rooftops are a charming detail most people miss.",
      },
      {
        rank: 5,
        name: "Temple Hopping",
        desc: "Over 70 temples packed into a tiny area. Most are small, residential temples with beautiful gardens that you can peek into. Tennoji Temple has a large bronze seated Buddha. Joko-ji has a beautiful moss garden. Wander without a specific map \u2014 getting lost is the entire point of Yanaka.",
        time: "30\u201360 min",
        cost: "Free",
        tip: "The small temples on the side streets between Yanaka Cemetery and Sendagi Station are the most atmospheric. Listen for the sound of temple bells.",
      },
    ],
    restaurants: [
      {
        name: "Kayaba Coffee",
        cuisine: "Kissaten (classic cafe)",
        priceRange: "\u00a5",
        priceDetail: "\u00a5500\u2013800",
        mustOrder:
          "Hand-drip coffee in a building from 1938. The ground floor has a retro counter; the upstairs tatami room overlooks the street. One of Tokyo\u2019s most atmospheric cafes.",
        station: "Near Nezu Station, 5 min walk from Yanaka Ginza",
        warning:
          "Small space. Can be full on weekend afternoons. Go early or weekday.",
      },
      {
        name: "Yanaka Ginza street stalls",
        cuisine: "Street food",
        priceRange: "\u00a5",
        priceDetail: "\u00a5150\u2013350",
        mustOrder:
          "Menchi-katsu (fried meat croquette, \u00a5200), melon-pan ice cream sandwich (\u00a5350), yakitori (\u00a5150 per stick). Eat standing on the street like a local.",
        station: "Yanaka Ginza shopping street",
        warning: "Cash only. Most stalls close by 5\u20136 PM.",
      },
      {
        name: "Yanaka Beer Hall",
        cuisine: "Craft beer / Japanese snacks",
        priceRange: "\u00a5\u00a5",
        priceDetail: "\u00a5800\u20131,500",
        mustOrder:
          "A pint of their house-brewed Yanaka beer and edamame. Cat-themed tap handles and decor. The terrace is perfect on warm evenings. A great stop to end a Yanaka afternoon.",
        station: "On Yanaka Ginza, impossible to miss",
        warning: null,
      },
      {
        name: "Hagiso",
        cuisine: "Cafe / Gallery",
        priceRange: "\u00a5",
        priceDetail: "\u00a5800\u20131,200",
        mustOrder:
          "The daily lunch set \u2014 changes with the season. A converted 1950s apartment building turned into a minimal cafe, gallery, and hotel. The architecture alone is worth the visit. One of Yanaka\u2019s most interesting spaces.",
        station: "5 min walk from Nippori Station",
        warning: "Lunch sets sell out. Arrive early.",
      },
    ],
    transit: {
      stations: [
        {
          name: "Nippori",
          lines: [
            "JR Yamanote Line",
            "JR Keihin-Tohoku Line",
            "Keisei Skyliner (for Narita Airport)",
          ],
        },
        { name: "Sendagi", lines: ["Chiyoda Line"] },
        { name: "Nezu", lines: ["Chiyoda Line"] },
      ],
      fromShinjuku: "JR Yamanote Line to Nippori \u00b7 15 min",
      fromTokyo: "JR Yamanote Line to Nippori \u00b7 10 min",
      fromShibuya: "JR Yamanote Line to Nippori \u00b7 25 min",
      walkingTip:
        "Enter from Nippori (Yanaka Cemetery end) and walk south through the neighborhood toward Yanaka Ginza, then exit at Sendagi. This is the natural flow and takes about 30 minutes at a slow pace. The entire neighborhood is walkable \u2014 no trains needed once you\u2019re here.",
    },
    timing: {
      bestTimeOfDay:
        "Late afternoon (3\u20135 PM) \u2014 the golden hour light on the wooden facades and narrow lanes is magical. The sunset staircase at Yanaka Ginza lives up to its name.",
      bestSeason:
        "Cherry blossom season (late March\u2013early April) when Yanaka Cemetery becomes a tunnel of pink. Autumn is also beautiful with colored leaves in the temple gardens.",
      avoidWhen:
        "Too early in the day (shops open 10\u201311 AM) or after dark (everything closes by 6 PM and the neighborhood goes very quiet). Monday (some shops and SCAI are closed). Rain reduces the atmosphere significantly.",
      howLong: "1.5\u20132.5 hours",
      howLongDetail:
        "30 min cemetery walk, 30\u201345 min Yanaka Ginza street food and shopping, 15\u201320 min cafe stop, 15\u201330 min temple wandering. This is a place to decompress, not rush through.",
    },
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function getAllNeighborhoodSlugs(): string[] {
  return NEIGHBORHOODS.map((n) => n.slug);
}

export function getAllNeighborhoods(): Neighborhood[] {
  return NEIGHBORHOODS;
}
