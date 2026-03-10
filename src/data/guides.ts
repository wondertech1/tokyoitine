export type GuideContentBlock =
  | { type: "prose"; text: string }
  | { type: "tip"; text: string }
  | { type: "warning"; text: string }
  | { type: "restaurants"; items: GuideRestaurant[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "cards"; items: { title: string; desc: string }[] }
  | { type: "checklist"; items: { text: string; checked: boolean }[] }
  | {
      type: "comparison";
      left: { label: string; points: string[] };
      right: { label: string; points: string[] };
    };

export interface GuideRestaurant {
  name: string;
  neighborhood: string;
  cuisine: string;
  priceRange: string;
  priceDetail: string;
  mustOrder: string;
  itineraryDay: string;
  warning: string | null;
}

export interface GuideSection {
  id: string;
  label: string;
  title: string;
  content: GuideContentBlock[];
}

export interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  keywords: string[];
  color: string;
  icon: string;
  stats: { value: string; label: string }[];
  tableOfContents: { id: string; label: string }[];
  sections: GuideSection[];
  relatedGuides: string[];
  relatedDays: { num: string; title: string; slug: string }[];
}

const ALL_DAYS = [
  { num: "01", title: "ELECTRIC PULSE", slug: "1-day-tokyo-itinerary" },
  { num: "02", title: "OLD WORLD ZEN", slug: "2-day-tokyo-itinerary" },
  { num: "03", title: "CULTURE CIRCUIT", slug: "3-day-tokyo-itinerary" },
  { num: "04", title: "IMPERIAL CALM", slug: "4-day-tokyo-itinerary" },
  { num: "05", title: "COASTAL PILGRIMAGE", slug: "5-day-tokyo-itinerary" },
  { num: "06", title: "MOUNTAIN SHRINE", slug: "6-day-tokyo-itinerary" },
  { num: "07", title: "HIDDEN FREQUENCIES", slug: "7-day-tokyo-itinerary" },
];

export const GUIDES: Guide[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 1: WHERE TO EAT
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "where-to-eat",
    title: "Where to Eat in Tokyo",
    subtitle: "42 restaurants, every one walked into",
    metaTitle:
      "Where to Eat in Tokyo 2026 \u2014 42 Restaurants by Neighborhood",
    metaDescription:
      "A personally vetted list of 42 restaurants across 12 Tokyo neighborhoods. Budget ramen to splurge omakase, with prices, must-order dishes, and etiquette tips.",
    ogTitle: "Where to Eat in Tokyo \u2014 42 Restaurants We Actually Went To",
    keywords: [
      "tokyo restaurants",
      "where to eat tokyo",
      "tokyo food guide",
      "tokyo ramen",
      "tokyo sushi",
      "tsukiji market food",
      "tokyo budget food",
      "tokyo street food",
    ],
    color: "#E53935",
    icon: "\uD83C\uDF5C",
    stats: [
      { value: "42", label: "RESTAURANTS" },
      { value: "12", label: "NEIGHBORHOODS" },
      { value: "\u00a5200", label: "CHEAPEST MEAL" },
      { value: "7", label: "CUISINES" },
    ],
    tableOfContents: [
      { id: "by-neighborhood", label: "Every Neighborhood" },
      { id: "budget-eats", label: "Budget Eats" },
      { id: "ramen-guide", label: "Ramen Guide" },
      { id: "sushi-guide", label: "Sushi Guide" },
      { id: "street-food", label: "Street Food" },
      { id: "splurge", label: "Splurge Worthy" },
      { id: "etiquette", label: "Etiquette" },
    ],
    sections: [
      // Section 1: by-neighborhood
      {
        id: "by-neighborhood",
        label: "Every Neighborhood",
        title: "Every Neighborhood, Every Pick",
        content: [
          {
            type: "prose",
            text: "These are the 42 spots we actually ate at across seven days in Tokyo. No PR invites, no sponsored meals, no \u201Cbest of\u201D lists copied from other blogs. Every restaurant here was paid for out of pocket and visited in person. The price ranges reflect what we actually spent, and the must-order items are what we\u2019d get again without hesitation.",
          },
          {
            type: "restaurants",
            items: [
              // ── Asakusa (6) ──
              {
                name: "Sometaro",
                neighborhood: "Asakusa",
                cuisine: "Okonomiyaki",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,000\u2013\u00a51,800 per person",
                mustOrder:
                  "Pork modan-yaki \u2014 you grill it yourself on the table",
                itineraryDay: "Day 2",
                warning:
                  "Cash only. The tatami seating is low, so limber up.",
              },
              {
                name: "Pelican Cafe",
                neighborhood: "Asakusa",
                cuisine: "Bakery / Kissaten",
                priceRange: "\u00a5",
                priceDetail: "\u00a5400\u2013\u00a5800",
                mustOrder:
                  "Thick-cut toast with butter \u2014 Pelican Bakery has baked bread here since 1942; the cafe opened in 2017",
                itineraryDay: "Day 2",
                warning:
                  "Opens at 8:00. Small space, expect a 10\u201320 min wait on weekends.",
              },
              {
                name: "Asakusa Gyukatsu",
                neighborhood: "Asakusa",
                cuisine: "Gyukatsu (Beef Cutlet)",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,300\u2013\u00a51,800",
                mustOrder:
                  "Standard gyukatsu set \u2014 you sear remaining slices on the hot stone yourself",
                itineraryDay: "Day 2",
                warning:
                  "Always a queue. Go at 11:00 sharp or after 14:00.",
              },
              {
                name: "Daikokuya Tempura",
                neighborhood: "Asakusa",
                cuisine: "Tempura",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,500\u2013\u00a52,200",
                mustOrder:
                  "Tendon (tempura rice bowl) with the sesame oil-fried shrimp",
                itineraryDay: "Day 2",
                warning:
                  "The main shop has longer lines. Try the annex across the street.",
              },
              {
                name: "Suzukien",
                neighborhood: "Asakusa",
                cuisine: "Matcha Ice Cream",
                priceRange: "\u00a5",
                priceDetail: "\u00a5370\u2013\u00a5580",
                mustOrder:
                  "Level 7 matcha gelato \u2014 the world\u2019s most intense matcha ice cream",
                itineraryDay: "Day 2",
                warning: null,
              },
              {
                name: "Namiki Yabusoba",
                neighborhood: "Asakusa",
                cuisine: "Soba",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a5900\u2013\u00a51,500",
                mustOrder:
                  "Zaru soba (cold buckwheat noodles) \u2014 simple, perfect, centuries-old recipe",
                itineraryDay: "Day 2",
                warning:
                  "Closes at 19:00. Traditional atmosphere, no frills.",
              },
              // ── Harajuku (5) ──
              {
                name: "Afuri",
                neighborhood: "Harajuku",
                cuisine: "Ramen",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,000\u2013\u00a51,400",
                mustOrder:
                  "Yuzu shio ramen \u2014 lighter citrus broth that\u2019s a perfect counter to heavy tonkotsu",
                itineraryDay: "Day 1",
                warning: null,
              },
              {
                name: "Harajuku Gyoza Lou",
                neighborhood: "Harajuku",
                cuisine: "Gyoza",
                priceRange: "\u00a5",
                priceDetail: "\u00a5600\u2013\u00a51,000",
                mustOrder:
                  "Pan-fried gyoza (6 pieces) with a beer \u2014 the crispy bottom is unreal",
                itineraryDay: "Day 1",
                warning:
                  "Tiny counter seating. No reservations. Queue forms by 18:00.",
              },
              {
                name: "Eggs \u2019n Things",
                neighborhood: "Harajuku",
                cuisine: "Pancakes / Brunch",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,200\u2013\u00a51,800",
                mustOrder:
                  "Macadamia nut pancakes with the mountain of whipped cream",
                itineraryDay: "Day 1",
                warning:
                  "Tourist trap vibes but genuinely good. Weekend waits can hit 45 min.",
              },
              {
                name: "Sakura Tei",
                neighborhood: "Harajuku",
                cuisine: "Okonomiyaki",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,100\u2013\u00a51,600",
                mustOrder:
                  "Seafood mix okonomiyaki \u2014 cook it on the teppan at your table",
                itineraryDay: "Day 1",
                warning: null,
              },
              {
                name: "Farmer\u2019s Market @ UNU",
                neighborhood: "Harajuku",
                cuisine: "Market / Various",
                priceRange: "\u00a5",
                priceDetail: "\u00a5300\u2013\u00a5800",
                mustOrder:
                  "Whatever the seasonal fruit vendor is slicing \u2014 Japanese strawberries in winter are transcendent",
                itineraryDay: "Day 1",
                warning:
                  "Weekends only (Sat\u2013Sun 10:00\u201316:00). Walk from Omotesando.",
              },
              // ── Shibuya (5) ──
              {
                name: "Fuglen Tokyo",
                neighborhood: "Shibuya",
                cuisine: "Coffee / Bar",
                priceRange: "\u00a5",
                priceDetail: "\u00a5500\u2013\u00a5900",
                mustOrder:
                  "Pour-over coffee in the morning, cocktails at night \u2014 same space, different vibe",
                itineraryDay: "Day 1",
                warning: null,
              },
              {
                name: "Onigiri Bongo",
                neighborhood: "Shibuya",
                cuisine: "Onigiri",
                priceRange: "\u00a5",
                priceDetail: "\u00a5200\u2013\u00a5400",
                mustOrder:
                  "Sake (salmon) and mentaiko (spicy cod roe) \u2014 hand-formed right in front of you",
                itineraryDay: "Day 1",
                warning:
                  "NOT in Shibuya \u2014 located near \u014Ctsuka Station (Toshima ward), a 15-min ride from Shibuya. Queue is always long. Go at odd hours.",
              },
              {
                name: "Ichiran Shibuya",
                neighborhood: "Shibuya",
                cuisine: "Ramen",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a5980\u2013\u00a51,500",
                mustOrder:
                  "Classic tonkotsu with extra chashu \u2014 customize your noodle firmness and broth richness",
                itineraryDay: "Day 1",
                warning:
                  "It\u2019s a chain and locals will scoff, but the solo booth ramen experience is genuinely unique.",
              },
              {
                name: "Uobei Shibuya",
                neighborhood: "Shibuya",
                cuisine: "Conveyor Belt Sushi",
                priceRange: "\u00a5",
                priceDetail: "\u00a5600\u2013\u00a51,200",
                mustOrder:
                  "Order via tablet, sushi arrives on a high-speed conveyor \u2014 \u00a5110\u2013\u00a5180 per plate",
                itineraryDay: "Day 1",
                warning:
                  "Not high-end sushi, but absurd fun and absurdly cheap. Perfect for a quick lunch.",
              },
              {
                name: "Nonbei Yokocho",
                neighborhood: "Shibuya",
                cuisine: "Izakaya Alley",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,500\u2013\u00a53,000",
                mustOrder:
                  "Pick any bar, order yakitori and highballs \u2014 every spot has its own character",
                itineraryDay: "Day 1",
                warning:
                  "Some bars have cover charges (\u00a5300\u2013\u00a5500). Check before sitting.",
              },
              // ── Shinjuku (6) ──
              {
                name: "Fuunji",
                neighborhood: "Shinjuku",
                cuisine: "Tsukemen (Dipping Ramen)",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a5900\u2013\u00a51,200",
                mustOrder:
                  "Tsukemen with thick noodles \u2014 the fish-pork broth is so concentrated it coats every strand",
                itineraryDay: "Day 1",
                warning:
                  "Always a line. 20\u201340 min typical. Totally worth it.",
              },
              {
                name: "Tsunahachi",
                neighborhood: "Shinjuku",
                cuisine: "Tempura",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,200\u2013\u00a52,500",
                mustOrder:
                  "Lunch tempura set \u2014 the shrimp and sweet potato are fried in front of you at the counter",
                itineraryDay: "Day 1",
                warning: null,
              },
              {
                name: "Nakajima",
                neighborhood: "Shinjuku",
                cuisine: "Sardine / Kaiseki",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,100\u2013\u00a51,500 (lunch) / \u00a58,000+ (dinner)",
                mustOrder:
                  "Lunch iwashi (sardine) set \u2014 Michelin-starred dinner quality at a fraction of the price",
                itineraryDay: "Day 7",
                warning:
                  "Lunch is the move. Dinner is a completely different (expensive) experience.",
              },
              {
                name: "Berg",
                neighborhood: "Shinjuku",
                cuisine: "German-style Beer Hall",
                priceRange: "\u00a5",
                priceDetail: "\u00a5400\u2013\u00a5900",
                mustOrder:
                  "Draft beer and a hot dog \u2014 standing only, beloved by Shinjuku salarymen",
                itineraryDay: "Day 1",
                warning:
                  "Inside JR Shinjuku Station (east exit). Easy to miss. Standing room only.",
              },
              {
                name: "Numazuko",
                neighborhood: "Shinjuku",
                cuisine: "Standing Sushi",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,500\u2013\u00a53,000",
                mustOrder:
                  "Uni (sea urchin) and otoro (fatty tuna) \u2014 conveyor belt quality at standing bar prices",
                itineraryDay: "Day 1",
                warning: null,
              },
              {
                name: "Golden Gai Bars",
                neighborhood: "Shinjuku",
                cuisine: "Bar / Izakaya",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,000\u2013\u00a53,000 per bar",
                mustOrder:
                  "Whisky highball and whatever snack the bartender suggests \u2014 each bar seats 6\u201310 people",
                itineraryDay: "Day 7",
                warning:
                  "Some bars are regulars-only. Look for English signs or open doors. Cover charge \u00a5500\u2013\u00a51,000 is standard.",
              },
              // ── Ginza / Tsukiji (6) ──
              {
                name: "Tsukiji Shouro",
                neighborhood: "Ginza / Tsukiji",
                cuisine: "Tamagoyaki (Egg Omelette)",
                priceRange: "\u00a5",
                priceDetail: "\u00a5100\u2013\u00a5300",
                mustOrder:
                  "Dashimaki tamago on a stick \u2014 sweet, fluffy, and gone in three bites",
                itineraryDay: "Day 4",
                warning: null,
              },
              {
                name: "Daiwa Sushi",
                neighborhood: "Toyosu",
                cuisine: "Sushi",
                priceRange: "\u00a5\u00a5\u00a5",
                priceDetail: "\u00a54,000\u2013\u00a55,000",
                mustOrder:
                  "Omakase set at the counter \u2014 the tuna is sourced from Toyosu Market\u2019s best vendors",
                itineraryDay: "Day 4",
                warning:
                  "Moved to Toyosu Market in 2018. Queue starts before 5:00 AM. Go at 10:00 instead.",
              },
              {
                name: "Ginza Steak Aoki",
                neighborhood: "Ginza / Tsukiji",
                cuisine: "Teppanyaki Steak",
                priceRange: "\u00a5\u00a5\u00a5\u00a5",
                priceDetail: "\u00a58,000\u2013\u00a515,000",
                mustOrder:
                  "A5 Wagyu sirloin lunch course \u2014 the lunch set is half the dinner price for the same beef",
                itineraryDay: "Day 4",
                warning:
                  "Book 2\u20133 days ahead. Counter seats let you watch the chef work.",
              },
              {
                name: "Tricolore",
                neighborhood: "Ginza / Tsukiji",
                cuisine: "Kissaten (Retro Coffee)",
                priceRange: "\u00a5",
                priceDetail: "\u00a5600\u2013\u00a5900",
                mustOrder:
                  "Hand-drip coffee and the thick-cut toast set \u2014 peak Showa-era vibes",
                itineraryDay: "Day 4",
                warning: null,
              },
              {
                name: "Ginza Kagari",
                neighborhood: "Ginza / Tsukiji",
                cuisine: "Ramen",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,000\u2013\u00a51,500",
                mustOrder:
                  "Tori paitan (chicken white broth) soba \u2014 creamy, rich, and unlike any ramen you\u2019ve had",
                itineraryDay: "Day 4",
                warning:
                  "Small shop, big reputation. Expect 30+ min queue at lunch.",
              },
              {
                name: "Tsukiji Outer Market Street Food",
                neighborhood: "Ginza / Tsukiji",
                cuisine: "Street Food / Various",
                priceRange: "\u00a5",
                priceDetail: "\u00a5200\u2013\u00a5800 per item",
                mustOrder:
                  "Grilled scallops, fresh uni on rice crackers, and melon on a stick",
                itineraryDay: "Day 4",
                warning:
                  "Go before 10:00 for full selection. Many stalls close by 14:00.",
              },
              // ── Ueno / Akihabara (5) ──
              {
                name: "Innsyoutei",
                neighborhood: "Ueno",
                cuisine: "Traditional Japanese (Washoku)",
                priceRange: "\u00a5\u00a5\u00a5",
                priceDetail: "\u00a53,000\u2013\u00a55,000",
                mustOrder:
                  "Seasonal bento box \u2014 inside Ueno Park with garden views through floor-to-ceiling windows",
                itineraryDay: "Day 3",
                warning:
                  "Reservations recommended for lunch. Worth it for the park setting alone.",
              },
              {
                name: "Kanda Yabu Soba",
                neighborhood: "Akihabara",
                cuisine: "Soba",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,000\u2013\u00a51,800",
                mustOrder:
                  "Seiro soba (cold soba on a bamboo tray) \u2014 this shop has been serving since 1880",
                itineraryDay: "Day 3",
                warning: null,
              },
              {
                name: "CoCo Ichibanya Akihabara",
                neighborhood: "Akihabara",
                cuisine: "Japanese Curry",
                priceRange: "\u00a5",
                priceDetail: "\u00a5700\u2013\u00a51,100",
                mustOrder:
                  "Chicken katsu curry, spice level 3, 300g rice \u2014 customize everything from the menu sheet",
                itineraryDay: "Day 3",
                warning:
                  "It\u2019s a chain, but it\u2019s a beloved chain. Perfect refueling stop between Akiba\u2019s shops.",
              },
              {
                name: "Ameyoko Market Stalls",
                neighborhood: "Ueno",
                cuisine: "Street Food / Market",
                priceRange: "\u00a5",
                priceDetail: "\u00a5200\u2013\u00a5700",
                mustOrder:
                  "Chocolate-covered strawberries, fried chicken stalls, and the \u00a5500 fresh fruit cups",
                itineraryDay: "Day 3",
                warning:
                  "Crowded on weekends. Some vendors do aggressive sales \u2014 just smile and walk on.",
              },
              {
                name: "Kanda Matsuya",
                neighborhood: "Akihabara",
                cuisine: "Soba",
                priceRange: "\u00a5",
                priceDetail: "\u00a5600\u2013\u00a51,000",
                mustOrder:
                  "Mori soba \u2014 no-frills buckwheat noodles served since 1884, perfect quick lunch",
                itineraryDay: "Day 3",
                warning: null,
              },
              // ── Yanaka (4) ──
              {
                name: "Kayaba Coffee",
                neighborhood: "Yanaka",
                cuisine: "Kissaten (Retro Coffee)",
                priceRange: "\u00a5",
                priceDetail: "\u00a5450\u2013\u00a5800",
                mustOrder:
                  "Egg sandwich and a drip coffee \u2014 the building dates to 1938 and the vibe is immaculate",
                itineraryDay: "Day 3",
                warning:
                  "Upstairs tatami seating fills first. Come before 10:00.",
              },
              {
                name: "Yanaka Ginza Street Stalls",
                neighborhood: "Yanaka",
                cuisine: "Street Food / Snacks",
                priceRange: "\u00a5",
                priceDetail: "\u00a5150\u2013\u00a5500",
                mustOrder:
                  "Menchi katsu (fried meat croquette) from any of the stalls \u2014 hot, crispy, \u00a5200 perfection",
                itineraryDay: "Day 3",
                warning: null,
              },
              {
                name: "Yanaka Beer Hall",
                neighborhood: "Yanaka",
                cuisine: "Craft Beer / Izakaya",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a5800\u2013\u00a52,000",
                mustOrder:
                  "Local craft beer flight and the karaage (fried chicken)",
                itineraryDay: "Day 3",
                warning:
                  "Small space. Fills up fast in the evening. Afternoon is ideal.",
              },
              {
                name: "HAGISO",
                neighborhood: "Yanaka",
                cuisine: "Cafe / Gallery",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a5800\u2013\u00a51,500",
                mustOrder:
                  "Weekly lunch plate \u2014 changes every week, always seasonal, in a converted apartment building turned art space",
                itineraryDay: "Day 3",
                warning:
                  "Gallery upstairs is free. The cafe is on the ground floor.",
              },
              // ── Other Areas (5) ──
              {
                name: "Kamakura Bowls (Matsubara-an)",
                neighborhood: "Kamakura",
                cuisine: "Soba",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,200\u2013\u00a51,800",
                mustOrder:
                  "Ten-zaru soba \u2014 cold soba with tempura, eaten in a garden setting near the Great Buddha",
                itineraryDay: "Day 5",
                warning:
                  "15 min walk from Hase Station. Worth the detour after the Buddha.",
              },
              {
                name: "Tokyo Station Ramen Street",
                neighborhood: "Tokyo Station",
                cuisine: "Ramen",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a5900\u2013\u00a51,400",
                mustOrder:
                  "Rokurinsha tsukemen \u2014 the anchor tenant and consistently the longest line for a reason",
                itineraryDay: "Day 4",
                warning:
                  "Underground on the Yaesu side. Rokurinsha queue can be 45+ min at peak.",
              },
              {
                name: "Tonkatsu Maisen (Omotesando)",
                neighborhood: "Omotesando",
                cuisine: "Tonkatsu",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,500\u2013\u00a52,500",
                mustOrder:
                  "Kurobuta (black pork) hire katsu set \u2014 grind your own sesame, pour your own sauce",
                itineraryDay: "Day 1",
                warning: null,
              },
              {
                name: "Gyukatsu Motomura (Shinjuku)",
                neighborhood: "Shinjuku",
                cuisine: "Gyukatsu",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,300\u2013\u00a51,800",
                mustOrder:
                  "Standard gyukatsu set with wasabi and soy sauce \u2014 sear the rare beef on the hot stone",
                itineraryDay: "Day 1",
                warning:
                  "Multiple locations. Shinjuku branch is easiest to find.",
              },
              {
                name: "Tsuta (Yoyogi-Uehara)",
                neighborhood: "Yoyogi-Uehara",
                cuisine: "Ramen",
                priceRange: "\u00a5\u00a5",
                priceDetail: "\u00a51,200\u2013\u00a51,800",
                mustOrder:
                  "Shoyu soba with truffle oil \u2014 the world\u2019s first Michelin-starred ramen shop",
                itineraryDay: "Day 7",
                warning:
                  "The original Sugamo location closed; the shop relocated to Yoyogi-Uehara. Still draws a queue. Go at 14:00.",
              },
            ],
          },
        ],
      },
      // Section 2: budget-eats
      {
        id: "budget-eats",
        label: "Budget Eats",
        title: "Under \u00a51,000 \u2014 Eat Like a King on Coins",
        content: [
          {
            type: "prose",
            text: "You can eat extraordinarily well in Tokyo without spending more than \u00a51,000 per meal. That\u2019s about $6.50 USD. In what other world capital can you get a Michelin-quality lunch for the price of a New York coffee? The trick is knowing what to look for.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Konbini Meals (\u00a5200\u2013\u00a5600)",
                desc: "7-Eleven, Lawson, and FamilyMart are not gas station food. Onigiri (\u00a5120\u2013\u00a5200), bento boxes (\u00a5400\u2013\u00a5600), egg sandwiches (\u00a5250), and seasonal sweets. Lawson\u2019s karaage-kun fried chicken is legendary.",
              },
              {
                title: "Gyudon Chains (\u00a5400\u2013\u00a5600)",
                desc: "Yoshinoya, Matsuya, and Sukiya serve beef bowls 24/7. Matsuya includes miso soup free. Order nami (regular) or tokumori (extra large) for \u00a5100 more. Perfect 3 AM fuel.",
              },
              {
                title: "Standing Soba (\u00a5300\u2013\u00a5500)",
                desc: "Found in every train station. Slurp a bowl of hot soba with tempura in under 5 minutes. No seats, no frills, no regrets. Look for the noren curtain near ticket gates.",
              },
              {
                title: "Curry Houses (\u00a5500\u2013\u00a5800)",
                desc: "CoCo Ichibanya is everywhere and fully customizable. Pick your protein, spice level (1\u201310), and rice amount. Level 3 is already plenty hot for most people.",
              },
              {
                title: "Udon Chains (\u00a5300\u2013\u00a5600)",
                desc: "Marugame Seimen lets you watch noodles being made. Grab a tray, pick tempura toppings cafeteria-style, and get fresh udon for under \u00a5500. The kabocha tempura is a must.",
              },
              {
                title: "Teishoku Lunch Sets (\u00a5700\u2013\u00a51,000)",
                desc: "Many sit-down restaurants offer lunch sets (teishoku) that include a main, rice, miso soup, and pickles. The same restaurant might charge \u00a53,000+ at dinner. Always check the lunch menu first.",
              },
              {
                title: "Department Store Depachika (\u00a5300\u2013\u00a5800)",
                desc: "Basement food halls in Isetan, Takashimaya, and Mitsukoshi sell bento, sushi, wagashi (sweets), and prepared foods. Best deals appear 30 min before closing when stickers go on.",
              },
              {
                title: "Onigiri Shops (\u00a5150\u2013\u00a5300)",
                desc: "Hand-formed rice balls from specialty shops blow away konbini versions. Salmon, tuna mayo, umeboshi (pickled plum). Three onigiri and a tea from the vending machine = \u00a5500 lunch.",
              },
            ],
          },
          {
            type: "tip",
            text: "Konbini pro move: Lawson\u2019s \u201CMachi Cafe\u201D iced coffee (\u00a5150) is genuinely better than most chain coffee shops. Grab one with an egg sandwich (\u00a5250) and you\u2019ve got breakfast for \u00a5400.",
          },
        ],
      },
      // Section 3: ramen-guide
      {
        id: "ramen-guide",
        label: "Ramen Guide",
        title: "Ramen: A Field Guide",
        content: [
          {
            type: "prose",
            text: "Ramen in Tokyo is not one thing. It\u2019s a universe. The four main styles you\u2019ll encounter are:\n\n**Shoyu (soy sauce)**: Clear brown broth, the classic Tokyo style. Light, savory, and the baseline against which all other ramen is judged. Thin noodles.\n\n**Shio (salt)**: The most delicate style. Pale, clear broth that lets the quality of the soup base shine. Afuri\u2019s yuzu shio is the gold standard.\n\n**Miso**: Originated in Sapporo but found everywhere. Thicker, heartier, almost stew-like. Pairs with butter and corn. Winter comfort food.\n\n**Tonkotsu**: Pork bone broth simmered for 12\u201324 hours until white and creamy. Rich, heavy, and the style most foreigners associate with ramen. Ichiran is the famous (if touristy) example.\n\nThen there\u2019s **tsukemen** (dipping ramen), where cold noodles are dipped into a concentrated broth. Fuunji in Shinjuku is the one to beat.",
          },
          {
            type: "table",
            headers: [
              "Shop",
              "Style",
              "Area",
              "Price",
              "Why Go",
            ],
            rows: [
              [
                "Fuunji",
                "Tsukemen",
                "Shinjuku",
                "\u00a5900",
                "Best dipping ramen in Tokyo. Fish-pork broth that clings to thick noodles.",
              ],
              [
                "Afuri",
                "Yuzu Shio",
                "Harajuku",
                "\u00a51,000",
                "Light citrus broth. Perfect if heavy ramen isn\u2019t your thing.",
              ],
              [
                "Ichiran",
                "Tonkotsu",
                "Shibuya",
                "\u00a5980",
                "Solo booth experience. Customize everything. Tourist-friendly.",
              ],
              [
                "Ginza Kagari",
                "Tori Paitan",
                "Ginza",
                "\u00a51,000",
                "Chicken white broth so creamy it\u2019s almost a sauce. Unique.",
              ],
              [
                "Rokurinsha",
                "Tsukemen",
                "Tokyo Station",
                "\u00a51,100",
                "The tsukemen that started the craze. Thick noodles, intense broth.",
              ],
              [
                "Tsuta",
                "Shoyu / Truffle",
                "Yoyogi-Uehara",
                "\u00a51,200",
                "World\u2019s first Michelin-starred ramen. Truffle oil elevates the shoyu base.",
              ],
            ],
          },
          {
            type: "warning",
            text: "Ramen etiquette: slurp loudly (it cools the noodles and is considered polite), eat fast (ramen is meant to be consumed in under 10 minutes before noodles absorb all the broth), and most shops let you choose noodle firmness and broth richness, but avoid requesting off-menu changes.",
          },
        ],
      },
      // Section 4: sushi-guide
      {
        id: "sushi-guide",
        label: "Sushi Guide",
        title: "Sushi: From \u00a5110 to \u00a558,000",
        content: [
          {
            type: "prose",
            text: "Tokyo\u2019s sushi spectrum is absurd. You can pay \u00a5110 per plate at a conveyor belt joint and still eat better than most sushi outside Japan, or you can drop \u00a558,000 on an omakase where the chef has been perfecting his rice for 40 years. Both are valid experiences.\n\nThe key difference is the rice. At the high end, sushi chefs spend years mastering the vinegar, temperature, and pressure of every grain. At the low end, a machine forms it. The fish quality in Tokyo is universally high because of the supply chain \u2014 even \u201Ccheap\u201D sushi here uses fish that would be premium elsewhere.\n\nDon\u2019t skip the tamago (egg). It\u2019s the dish that reveals a chef\u2019s skill most clearly.",
          },
          {
            type: "table",
            headers: [
              "Experience",
              "Price Range",
              "Example",
              "What to Expect",
            ],
            rows: [
              [
                "Conveyor Belt",
                "\u00a5110\u2013\u00a5180/plate",
                "Uobei (Shibuya)",
                "Order by tablet, sushi arrives by high-speed lane. Fun, fast, cheap.",
              ],
              [
                "Standing Sushi",
                "\u00a51,500\u2013\u00a53,000",
                "Numazuko (Shinjuku)",
                "Fresh nigiri at a standing counter. No pretense, great value.",
              ],
              [
                "Market Sushi",
                "\u00a53,000\u2013\u00a55,000",
                "Daiwa Sushi (Toyosu)",
                "Counter seats, morning-fresh fish. Moved to Toyosu Market in 2018.",
              ],
              [
                "Mid-Range Omakase",
                "\u00a55,000\u2013\u00a515,000",
                "Sushi Dai (Toyosu)",
                "Chef\u2019s choice, 10\u201312 pieces plus extras. Book ahead.",
              ],
              [
                "High-End Omakase",
                "\u00a520,000\u2013\u00a558,000+",
                "Sukiyabashi Jiro (Ginza)",
                "The pinnacle. 20 pieces in 30 minutes. Reservations months out via concierge.",
              ],
            ],
          },
          {
            type: "tip",
            text: "Omakase tip: If you\u2019re doing omakase for the first time, go mid-range (\u00a58,000\u2013\u00a515,000). You get the full experience \u2014 chef\u2019s choice, seasonal fish, conversation at the counter \u2014 without needing a hotel concierge to book months ahead.",
          },
        ],
      },
      // Section 5: street-food
      {
        id: "street-food",
        label: "Street Food",
        title: "Eat Standing Up",
        content: [
          {
            type: "prose",
            text: "Tokyo isn\u2019t a street food city the way Bangkok or Mexico City is. You won\u2019t find vendors on every corner. But the places that do exist are concentrated, curated, and absolutely worth seeking out.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Tsukiji Outer Market",
                desc: "The undisputed king. Grilled scallops (\u00a5300), tamago on a stick (\u00a5100), fresh uni (\u00a5500), melon on a stick (\u00a5400), and strawberry daifuku (\u00a5300). Go before 10:00 for full selection. Most stalls close by 14:00.",
              },
              {
                title: "Ameyoko Market (Ueno)",
                desc: "Covered market under the JR tracks. Fried chicken, chocolate-covered strawberries, dried fruit vendors shouting prices. More chaotic, more fun. Also great for cheap dried goods and spices to bring home.",
              },
              {
                title: "Yanaka Ginza Shopping Street",
                desc: "Feels like old Tokyo. Menchi katsu (fried croquettes) for \u00a5200, cat-tail donuts from a bakery shaped like a cat, and soft-serve at every other shop. Best in the late afternoon golden hour.",
              },
              {
                title: "Takeshita Street (Harajuku)",
                desc: "Cotton candy the size of your torso, rainbow crepes, and novelty snacks for the gram. Not authentic, but the spectacle is part of the experience. Buy the crepe, skip the rainbow cheese toast.",
              },
              {
                title: "Nakamise-dori (Asakusa)",
                desc: "The path to Senso-ji temple is lined with stalls selling ningyo-yaki (custard-filled cakes), senbei (rice crackers grilled fresh), and melon pan. Tourist prices, but the fresh senbei with soy glaze is legit.",
              },
            ],
          },
          {
            type: "tip",
            text: "Walking while eating (tabearuki) is technically considered rude in Japan. Buy your snack, eat it near the stall or in a designated eating area, then move on. It\u2019s one of those small gestures that shows respect.",
          },
        ],
      },
      // Section 6: splurge
      {
        id: "splurge",
        label: "Splurge Worthy",
        title: "Worth the Spend",
        content: [
          {
            type: "table",
            headers: [
              "Restaurant",
              "Cuisine",
              "Price",
              "Why It\u2019s Worth It",
              "How to Book",
            ],
            rows: [
              [
                "Ginza Steak Aoki",
                "Teppanyaki A5 Wagyu",
                "\u00a58,000\u2013\u00a515,000",
                "Lunch course is half the dinner price for the same quality beef. Counter seats let you watch the chef.",
                "Tabelog or phone 2\u20133 days ahead",
              ],
              [
                "Sushi Dai (Toyosu)",
                "Omakase Sushi",
                "\u00a55,000\u2013\u00a56,600",
                "The omakase that made Toyosu famous. Seasonal fish, perfect rice, intimate counter.",
                "Queue at 5:00 AM or book via hotel concierge",
              ],
              [
                "Nakajima (Dinner)",
                "Kaiseki",
                "\u00a58,000\u2013\u00a515,000",
                "Sardine kaiseki from a Michelin-starred kitchen. The gap between lunch (\u00a51,100) and dinner price shows the range.",
                "Tabelog reservation. Book 1 week ahead.",
              ],
              [
                "Tempura Kondo",
                "Tempura",
                "\u00a512,000\u2013\u00a520,000",
                "Sweet potato tempura that changed what I thought tempura could be. Vegetables elevated to art.",
                "Book via concierge. 2\u20134 weeks ahead.",
              ],
              [
                "Sukiyabashi Jiro (Ginza)",
                "Omakase Sushi",
                "\u00a558,000+",
                "The Jiro Dreams of Sushi experience. 20 pieces in 30 minutes. A once-in-a-lifetime meal.",
                "Hotel concierge only. 1\u20133 months ahead.",
              ],
            ],
          },
          {
            type: "prose",
            text: "Splurging in Tokyo is different from splurging in Paris or New York. There\u2019s no velvet rope energy. The most expensive sushi counter in Ginza might be a 6-seat room in a basement with no sign. The value is in the craft, the ingredients, and the decades of mastery \u2014 not the d\u00e9cor.\n\nOne tip: many high-end restaurants offer dramatically cheaper lunch sets. Nakajima\u2019s \u00a51,100 lunch is from the same Michelin-starred kitchen that charges \u00a58,000+ at dinner. Always check if your splurge restaurant has a lunch option first.",
          },
        ],
      },
      // Section 7: etiquette
      {
        id: "etiquette",
        label: "Etiquette",
        title: "How to Not Embarrass Yourself",
        content: [
          {
            type: "prose",
            text: "Japanese food culture has rules. Not rigid, scary rules \u2014 more like a rhythm you can feel once you pay attention. Nobody expects tourists to be perfect, but making an effort goes a very long way.",
          },
          {
            type: "cards",
            items: [
              {
                title: "No Tipping. Ever.",
                desc: "Tipping is not a thing in Japan. It can actually be confusing or even slightly insulting. The price on the menu is the price. Service is built into the culture, not bought.",
              },
              {
                title: "Slurp Your Noodles",
                desc: "Slurping ramen, soba, and udon is expected. It aerates the noodles, cools them down, and signals you\u2019re enjoying the meal. Silence at a ramen counter is the awkward thing.",
              },
              {
                title: "Say Itadakimasu",
                desc: "Before eating, say \u201Citadakimasu\u201D (ee-tah-dah-kee-mas). It means \u201CI humbly receive.\u201D Hands together, slight bow. It\u2019s the Japanese grace.",
              },
              {
                title: "Say Gochisousama",
                desc: "When you\u2019re done, say \u201Cgochisousama deshita\u201D (go-chee-so-sa-ma desh-ta). It means \u201CThank you for the meal.\u201D Say it to the chef, the server, or just quietly to yourself.",
              },
              {
                title: "Pour for Others, Not Yourself",
                desc: "When drinking sake or beer with others, pour for your companions and let them pour for you. Pouring your own drink is a subtle faux pas. Hold the bottle with both hands when pouring.",
              },
              {
                title: "Chopstick Rules",
                desc: "Never stick chopsticks upright in rice (it resembles funeral incense). Never pass food chopstick-to-chopstick (funeral ritual). Rest them on the hashioki (chopstick rest) when not eating.",
              },
              {
                title: "Carry Cash",
                desc: "Many small restaurants, ramen shops, and izakayas are cash only. \u00a510,000 notes are hard to break at small places. Keep a supply of \u00a51,000 notes and coins. 7-Eleven ATMs accept foreign cards.",
              },
            ],
          },
        ],
      },
    ],
    relatedGuides: ["budget", "first-time"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 2: GETTING AROUND
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "getting-around",
    title: "Getting Around Tokyo",
    subtitle: "Trains, cards, and surviving Shinjuku Station",
    metaTitle:
      "Tokyo Trains Explained 2026 \u2014 Suica, JR Pass, and the Lines You Need",
    metaDescription:
      "How to navigate Tokyo\u2019s train system without losing your mind. Suica setup, essential lines, JR Pass math, airport transfers, and station survival tips.",
    ogTitle: "Getting Around Tokyo \u2014 The Only Train Guide You Need",
    keywords: [
      "tokyo trains",
      "suica card",
      "jr pass tokyo",
      "tokyo metro",
      "shinjuku station",
      "narita to tokyo",
      "haneda to tokyo",
      "tokyo transport",
    ],
    color: "#1565C0",
    icon: "\uD83D\uDE83",
    stats: [
      { value: "13", label: "LINES COVERED" },
      { value: "3", label: "CARDS EXPLAINED" },
      { value: "\u00a5150", label: "MIN FARE" },
      { value: "200+", label: "SHINJUKU EXITS" },
    ],
    tableOfContents: [
      { id: "suica-setup", label: "Suica Setup" },
      { id: "lines-you-need", label: "Essential Lines" },
      { id: "jr-pass-math", label: "JR Pass Math" },
      { id: "airport-to-city", label: "Airport Transfer" },
      { id: "station-survival", label: "Station Survival" },
      { id: "apps", label: "Must-Have Apps" },
    ],
    sections: [
      // Section 1: suica-setup
      {
        id: "suica-setup",
        label: "Suica Setup",
        title: "Step 1: Get a Suica (Ignore Everything Else)",
        content: [
          {
            type: "prose",
            text: "Forget paper tickets. Forget figuring out fare zones. Get a Suica card and tap through every gate in the city.\n\nSuica is a rechargeable IC card that works on virtually every train, bus, and metro line in Tokyo (and most of Japan). You tap in, tap out, and the correct fare is deducted automatically. It also works at konbini, vending machines, coin lockers, and some restaurants.\n\nAs of 2024, physical Suica card sales resumed in March 2025, though Apple Wallet Suica remains the easiest option. Add a **Mobile Suica** to your iPhone or Apple Watch via the Wallet app. Android users can use Google Pay. You can charge it with a foreign credit card.\n\nIf you absolutely need a physical card, **Welcome Suica** cards (no deposit, 28-day expiry) are available at Narita and Haneda airports. But digital is better in every way.",
          },
          {
            type: "checklist",
            items: [
              {
                text: "Download Mobile Suica or add via Apple Wallet before your flight",
                checked: false,
              },
              {
                text: "Load \u00a53,000\u2013\u00a55,000 as starting balance",
                checked: false,
              },
              {
                text: "Set Suica as your Express Transit card (no Face ID needed at gates)",
                checked: false,
              },
              {
                text: "Test it at the airport train gate when you land",
                checked: false,
              },
              {
                text: "Reload at any station machine, konbini, or via the app",
                checked: false,
              },
              {
                text: "Keep minimum \u00a51,000 balance to avoid gate rejections",
                checked: false,
              },
            ],
          },
          {
            type: "tip",
            text: "Set Suica as your Express Transit card in iPhone settings. This lets you tap through train gates without unlocking your phone or using Face ID. Just hold your phone near the reader and walk through. It\u2019s how locals do it.",
          },
        ],
      },
      // Section 2: lines-you-need
      {
        id: "lines-you-need",
        label: "Essential Lines",
        title: "The Only Lines That Matter",
        content: [
          {
            type: "prose",
            text: "Tokyo has 13 subway lines, dozens of JR lines, and multiple private railways. It looks like a bowl of noodles on the map. But for a week-long visit, you really only need to know five lines. Your Suica works on all of them.",
          },
          {
            type: "table",
            headers: ["Line", "Color", "Key Stops", "You\u2019ll Use It For"],
            rows: [
              [
                "JR Yamanote",
                "Green",
                "Shibuya, Shinjuku, Tokyo, Ueno, Akihabara",
                "The circle line. Connects all major hubs. Your default.",
              ],
              [
                "Ginza Line",
                "Orange",
                "Shibuya, Omotesando, Ginza, Asakusa",
                "Shibuya to Asakusa direct. The oldest subway in Asia.",
              ],
              [
                "Chuo Rapid",
                "Red-Orange",
                "Tokyo, Shinjuku, Kichijoji, Mt. Takao",
                "East-west express. Also the line to Mt. Takao day trip.",
              ],
              [
                "Hanzomon Line",
                "Purple",
                "Shibuya, Omotesando, Otemachi, Oshiage",
                "Shibuya to Tokyo Skytree. Runs parallel to Ginza Line but less crowded.",
              ],
              [
                "Chiyoda Line",
                "Green (darker)",
                "Meiji-jingumae, Omotesando, Otemachi, Sendagi, Nezu",
                "Meiji Shrine access and connects to Odakyu line for Hakone.",
              ],
            ],
          },
          {
            type: "tip",
            text: "Google Maps in Tokyo is absurdly accurate. It tells you which car to board, which exit to use, and the exact minute your train arrives. Trust it completely. Set your route and follow it step by step.",
          },
        ],
      },
      // Section 3: jr-pass-math
      {
        id: "jr-pass-math",
        label: "JR Pass Math",
        title: "JR Pass: Probably Not Worth It",
        content: [
          {
            type: "prose",
            text: "The Japan Rail Pass is legendary \u2014 and often a waste of money for Tokyo-only trips. A 7-day JR Pass costs \u00a550,000 (as of 2024 pricing). To break even, you need to take at least one round-trip shinkansen (bullet train) ride, like Tokyo\u2013Kyoto.\n\nIf you\u2019re staying in Tokyo the whole time, the math almost never works. Here\u2019s the breakdown:",
          },
          {
            type: "table",
            headers: ["Trip", "Normal Price", "JR Pass Covers?", "Verdict"],
            rows: [
              [
                "Tokyo \u2192 Kyoto (round trip)",
                "\u00a527,500",
                "Yes",
                "JR Pass saves \u00a5+. Worth it if combined with other trips.",
              ],
              [
                "Tokyo \u2192 Kamakura (round trip)",
                "\u00a51,900",
                "Yes",
                "Savings: \u00a51,900. Not enough alone to justify the pass.",
              ],
              [
                "Tokyo \u2192 Nikko (round trip)",
                "\u00a55,500 (JR portion)",
                "Partially",
                "JR covers only part. Tobu line is cheaper and direct.",
              ],
              [
                "Tokyo \u2192 Hakone (round trip)",
                "\u00a54,600",
                "Partially",
                "JR to Odawara only. Hakone Free Pass is better value.",
              ],
              [
                "Daily Yamanote + JR rides",
                "\u00a5500\u2013\u00a51,000/day",
                "Yes",
                "7 days = \u00a53,500\u2013\u00a57,000. Tiny fraction of pass cost.",
              ],
              [
                "Narita Express (round trip)",
                "\u00a56,500",
                "Yes",
                "Nice bonus if you have the pass, but not worth buying one for this alone.",
              ],
            ],
          },
          {
            type: "warning",
            text: "The JR Pass only works on JR lines. Tokyo Metro, Toei Subway, and private railways (Odakyu, Tobu, Keio) are NOT covered. Since many of the best routes use non-JR lines, you\u2019ll still need your Suica for daily travel even with a JR Pass.",
          },
          {
            type: "tip",
            text: "Planning Tokyo + Kyoto? See the full shinkansen guide with step-by-step instructions and the Mt. Fuji seat hack \u2192 /japan/tokyo-to-kyoto",
          },
        ],
      },
      // Section 4: airport-to-city
      {
        id: "airport-to-city",
        label: "Airport Transfer",
        title: "Landing in Japan",
        content: [
          {
            type: "prose",
            text: "Two airports serve Tokyo: **Narita** (60\u201390 min from central Tokyo) and **Haneda** (20\u201340 min). If you have a choice, fly into Haneda. It\u2019s dramatically closer and the train connections are simpler.",
          },
          {
            type: "table",
            headers: [
              "Route",
              "Option",
              "Time",
              "Price",
              "Best For",
            ],
            rows: [
              [
                "Narita \u2192 Tokyo",
                "Narita Express (N\u2019EX)",
                "60 min",
                "\u00a53,250",
                "Direct to Tokyo, Shibuya, or Shinjuku. Comfortable, reserved seats.",
              ],
              [
                "Narita \u2192 Tokyo",
                "Skyliner",
                "41 min",
                "\u00a52,580",
                "Fastest option. Goes to Ueno/Nippori. Transfer to Yamanote from there.",
              ],
              [
                "Narita \u2192 Tokyo",
                "Access Express",
                "80\u201390 min",
                "\u00a51,270",
                "Budget option. No reserved seats. Connects to Asakusa line directly.",
              ],
              [
                "Haneda \u2192 Tokyo",
                "Tokyo Monorail",
                "13 min",
                "\u00a5500",
                "To Hamamatsucho. Transfer to JR Yamanote. Quick and cheap.",
              ],
              [
                "Haneda \u2192 Tokyo",
                "Keikyu Line",
                "20\u201330 min",
                "\u00a5300\u2013\u00a5500",
                "Direct to Shinagawa, Shimbashi. Connects into subway system.",
              ],
            ],
          },
          {
            type: "warning",
            text: "Taxis from Narita to central Tokyo cost \u00a520,000\u2013\u00a530,000 (\u2248$130\u2013$200 USD). There is almost no scenario where this makes sense. Even from Haneda, a taxi to Shinjuku is \u00a56,000\u2013\u00a58,000. Take the train.",
          },
        ],
      },
      // Section 5: station-survival
      {
        id: "station-survival",
        label: "Station Survival",
        title: "How to Not Die in Shinjuku Station",
        content: [
          {
            type: "prose",
            text: "Shinjuku Station serves 2.7 million passengers per day. It holds the Guinness record for the world\u2019s busiest station. It has over 200 exits and connects 12 different rail lines across 5 different operators.\n\nYou will get lost. Everyone gets lost. The key is to not panic and follow these survival rules.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Follow the Color, Not the Name",
                desc: "Every line has a color code. JR Yamanote is green. Marunouchi is red. When you\u2019re overwhelmed by signs, just follow the color of the line you need. The colored signs will guide you to the right platform.",
              },
              {
                title: "Use Exit Numbers, Not Exit Names",
                desc: "Exit names are often in Japanese only, but exit numbers are universal. Google Maps will tell you \u201CUse Exit B7\u201D \u2014 follow that number. It\u2019s posted on yellow signs throughout the station.",
              },
              {
                title: "Stay Right, Walk Left",
                desc: "Escalator etiquette: stand on the left in Tokyo (opposite of most countries), walk on the right. In Osaka it\u2019s reversed. On stairs and corridors, keep to the left side of the flow. Stopping in a corridor is the cardinal sin.",
              },
              {
                title: "When Lost, Go Up",
                desc: "If you\u2019re completely disoriented underground, find stairs going up and surface. Once you\u2019re at street level, reorient with Google Maps and re-enter the station through the correct entrance. It\u2019s faster than wandering underground tunnels.",
              },
            ],
          },
          {
            type: "tip",
            text: "Pro move: most station maps orient with north at the top. But inside stations, the map orientation changes based on where you\u2019re standing. Always look for the \u201CYou Are Here\u201D dot first, then trace your route from there. Or just trust Google Maps \u2014 it works underground.",
          },
        ],
      },
      // Section 6: apps
      {
        id: "apps",
        label: "Must-Have Apps",
        title: "Put These on Your Phone",
        content: [
          {
            type: "prose",
            text: "Four apps will save you more time than any guide ever could. Download these before you board your flight.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Google Maps",
                desc: "The single most important app in Tokyo. Real-time train schedules accurate to the minute, walking directions, station exit guidance, and even tells you which train car to board. Download offline maps for Tokyo before you leave home.",
              },
              {
                title: "Navitime for Japan Travel",
                desc: "The backup to Google Maps and sometimes better for complex transfers. Shows platform numbers, transfer walking times, and fare breakdowns. The free version covers everything you need.",
              },
              {
                title: "Mobile Suica / Apple Wallet",
                desc: "Your train card, convenience store payment, and vending machine tap card all in one. Set it as Express Transit so you don\u2019t need to unlock your phone at gates. Reload in-app with a credit card.",
              },
              {
                title: "Google Translate",
                desc: "The camera translation feature is magic. Point your phone at any Japanese menu, sign, or label and it translates in real-time via AR overlay. Download the Japanese language pack for offline use.",
              },
            ],
          },
        ],
      },
    ],
    relatedGuides: ["budget", "first-time", "day-trips"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 3: BUDGET
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "budget",
    title: "How Much Does Tokyo Cost",
    subtitle: "Daily budgets from \u00a57,000 to \u00a530,000",
    metaTitle: "Tokyo Budget 2026 \u2014 How Much Does Tokyo Cost Per Day",
    metaDescription:
      "Detailed daily budget breakdowns for Tokyo. From \u00a57,000 backpacker to \u00a530,000 splurge, with real prices for food, transport, activities, and accommodation.",
    ogTitle: "How Much Does Tokyo Cost \u2014 Honest Budget Breakdown 2026",
    keywords: [
      "tokyo budget",
      "tokyo cost per day",
      "tokyo cheap",
      "tokyo money",
      "how much tokyo cost",
      "tokyo yen budget",
      "tokyo travel budget",
    ],
    color: "#2E7D32",
    icon: "\uD83D\uDCB4",
    stats: [
      { value: "\u00a57K", label: "BUDGET/DAY" },
      { value: "\u00a515K", label: "MID-RANGE" },
      { value: "\u00a530K+", label: "SPLURGE" },
      { value: "\u00a5150", label: "= $1 USD" },
    ],
    tableOfContents: [
      { id: "daily-budget-table", label: "Daily Breakdown" },
      { id: "where-money-goes", label: "Where Money Goes" },
      { id: "money-saving-tips", label: "Saving Tips" },
      { id: "cash-vs-card", label: "Cash vs Card" },
    ],
    sections: [
      // Section 1: daily-budget-table
      {
        id: "daily-budget-table",
        label: "Daily Breakdown",
        title: "The Daily Breakdown",
        content: [
          {
            type: "prose",
            text: "Three tiers, three very different experiences. The surprise is that even the budget tier lets you eat incredibly well and see everything that matters. Tokyo is not the expensive city people think it is \u2014 especially with the yen\u2019s recent weakness against the dollar and euro.",
          },
          {
            type: "table",
            headers: ["Category", "Budget (\u00a57K)", "Mid-Range (\u00a515K)", "Splurge (\u00a530K+)"],
            rows: [
              [
                "Food",
                "\u00a52,000\u2013\u00a53,000",
                "\u00a54,000\u2013\u00a56,000",
                "\u00a510,000\u2013\u00a520,000",
              ],
              [
                "Transport",
                "\u00a5800\u2013\u00a51,200",
                "\u00a51,000\u2013\u00a51,500",
                "\u00a52,000\u2013\u00a54,000",
              ],
              [
                "Activities",
                "\u00a50\u2013\u00a51,000",
                "\u00a52,000\u2013\u00a54,000",
                "\u00a55,000\u2013\u00a510,000",
              ],
              [
                "Accommodation",
                "\u00a53,000\u2013\u00a55,000",
                "\u00a58,000\u2013\u00a512,000",
                "\u00a515,000\u2013\u00a530,000",
              ],
              [
                "Daily Total",
                "\u00a57,000\u2013\u00a510,000",
                "\u00a515,000\u2013\u00a523,000",
                "\u00a530,000\u2013\u00a565,000",
              ],
            ],
          },
          {
            type: "prose",
            text: "**Budget (\u00a57,000\u2013\u00a510,000/day)**: Konbini breakfasts, ramen or gyudon lunches, one sit-down dinner. Hostels or capsule hotels. Free shrines and parks. This is not suffering \u2014 this is how many Japanese people eat daily.\n\n**Mid-Range (\u00a515,000\u2013\u00a523,000/day)**: A cafe breakfast, a proper lunch set, one memorable dinner. Business hotel or Airbnb. Paid attractions like teamLab or Shibuya Sky. The sweet spot for most travelers.\n\n**Splurge (\u00a530,000\u2013\u00a565,000/day)**: Omakase sushi, cocktail bars, teppanyaki wagyu. Boutique hotel. Taxis when you feel like it. This is Tokyo at its finest, and honestly it\u2019s still cheaper than an equivalent day in London or New York.",
          },
        ],
      },
      // Section 2: where-money-goes
      {
        id: "where-money-goes",
        label: "Where Money Goes",
        title: "The Real Cost Breakdown",
        content: [
          {
            type: "prose",
            text: "**Food** is where Tokyo punches way above its weight class. A bowl of ramen that would cost $18 in New York is \u00a5900 here. A lunch set at a Michelin-starred restaurant is \u00a51,100\u2013\u00a51,500. Konbini onigiri are \u00a5120\u2013\u00a5200. You can eat 3 meals a day for \u00a52,000 without trying hard, or blow \u00a520,000 on a single omakase. Both are valid.\n\n**Transport** is cheap if you use trains. A typical day of sightseeing uses \u00a5800\u2013\u00a51,500 on Suica. The Yamanote line (\u00a5150\u2013\u00a5200 per ride) connects most neighborhoods. Only take taxis if you\u2019re in a group of 3\u20134 late at night after trains stop (around midnight).\n\n**Activities** range from free to expensive. Meiji Shrine, Senso-ji, Ueno Park, Yanaka, and most neighborhood walking is completely free. Paid attractions like teamLab Borderless (\u00a54,200), Shibuya Sky (\u00a52,200), and Tokyo Skytree (\u00a53,100) add up if you do several, but you don\u2019t need to do all of them. Pick 2\u20133 paid attractions for the whole trip.\n\n**Accommodation** is the biggest variable. Capsule hotels (\u00a53,000\u2013\u00a55,000), business hotels (\u00a58,000\u2013\u00a512,000), and boutique/luxury (\u00a515,000\u2013\u00a550,000). Location matters more than class \u2014 a business hotel in Shinjuku beats a luxury hotel in a suburb.",
          },
        ],
      },
      // Section 3: money-saving-tips
      {
        id: "money-saving-tips",
        label: "Saving Tips",
        title: "How to Stretch Your Yen",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "Eat at Konbini for Breakfast",
                desc: "A konbini coffee (\u00a5150) + egg sandwich (\u00a5250) + onigiri (\u00a5150) = \u00a5550 breakfast. That\u2019s $3.60 USD. It\u2019s not sad \u2014 it\u2019s what half of Tokyo does every morning.",
              },
              {
                title: "Lunch Sets Over Dinner",
                desc: "The same restaurant that charges \u00a55,000 at dinner might serve an \u00a51,100 lunch set with the same kitchen. Teishoku (set meals) at lunch are Tokyo\u2019s best-kept budget secret.",
              },
              {
                title: "Free Viewpoints",
                desc: "Skip Tokyo Skytree (\u00a53,100). The Tokyo Metropolitan Government Building in Shinjuku has a free observation deck at 202 meters with better views and zero lines. Open until 22:00 (last entry 21:30).",
              },
              {
                title: "Tax-Free Shopping",
                desc: "Spend over \u00a55,000 at one store and you can get the 10% consumption tax refunded. Look for \u201CTax-Free\u201D signs. Electronics shops in Akihabara, Don Quijote, and department stores all offer this.",
              },
              {
                title: "100-Yen Shops",
                desc: "Daiso, Seria, and Can Do are the Japanese dollar stores. Chopsticks, souvenirs, stationery, kitchen items, and travel accessories for \u00a5100 each. The Harajuku Daiso is multi-story and incredible.",
              },
              {
                title: "Use Suica Everywhere",
                desc: "Beyond trains, Suica works at konbini, vending machines, and many restaurants. Loading \u00a55,000 and tracking your taps is the easiest way to monitor daily spending without carrying excess cash.",
              },
              {
                title: "Stay in Shinjuku",
                desc: "Shinjuku is the best base for most travelers. It\u2019s the hub of the Yamanote line, has the most hotel options, and gives you the cheapest/fastest access to every neighborhood. You\u2019ll save on transport and time every day.",
              },
            ],
          },
        ],
      },
      // Section 4: cash-vs-card
      {
        id: "cash-vs-card",
        label: "Cash vs Card",
        title: "Bring Cash. Seriously.",
        content: [
          {
            type: "prose",
            text: "Japan is still a heavily cash-based society, especially outside of department stores and large chains. The situation is improving \u2014 more places accept IC cards (Suica) and credit cards than five years ago \u2014 but you will absolutely encounter cash-only situations.\n\nRamen shops, small izakayas, market stalls, temple admission fees, coin lockers, and many independent restaurants only take cash. Some vending machines are cash-only too. If you\u2019re doing a day in Yanaka, Tsukiji outer market, or bar-hopping in Golden Gai, you need physical yen.\n\n**How much to carry**: \u00a510,000\u2013\u00a520,000 per day is comfortable. Keep it in a mix of \u00a51,000 notes and coins. \u00a510,000 notes can be hard to break at small establishments.\n\n**Where to get cash**: 7-Eleven ATMs are everywhere and accept almost all foreign bank cards (Visa, Mastercard, Cirrus, Plus). Japan Post Bank ATMs also work well. Avoid currency exchange counters at the airport \u2014 the rate is always worse.\n\n**Credit cards**: Visa and Mastercard are accepted at major retailers, chain restaurants, hotels, and department stores. Amex coverage is spottier. JCB (Japanese domestic brand) is widely accepted. Apple Pay with Suica is the most versatile option.",
          },
          {
            type: "tip",
            text: "Arrive with at least \u00a520,000 in cash. You can withdraw more at any 7-Eleven, but having cash from the start means you\u2019re ready for the Narita/Haneda convenience stores, airport snacks, and your first konbini run without hunting for an ATM.",
          },
          {
            type: "tip",
            text: "See the complete 14-day budget breakdown across Tokyo, Kyoto, and Osaka \u2192 /japan/2-week-japan-itinerary",
          },
        ],
      },
    ],
    relatedGuides: ["where-to-eat", "first-time"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 4: FIRST TIME
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "first-time",
    title: "First Time in Tokyo",
    subtitle: "Everything you need to know before you land",
    metaTitle:
      "First Time in Tokyo 2026 \u2014 The Complete Beginner\u2019s Guide",
    metaDescription:
      "Your first trip to Tokyo, demystified. Pre-flight checklist, how Tokyo works, common mistakes, which itinerary to pick, and cultural basics that will save you embarrassment.",
    ogTitle: "First Time in Tokyo \u2014 The Honest Beginner\u2019s Guide",
    keywords: [
      "first time tokyo",
      "tokyo tips",
      "tokyo beginner guide",
      "tokyo first visit",
      "tokyo travel tips",
      "tokyo mistakes",
      "tokyo etiquette",
    ],
    color: "#6A1B9A",
    icon: "\u2708\uFE0F",
    stats: [
      { value: "12", label: "TIPS" },
      { value: "7", label: "MISTAKES" },
      { value: "1", label: "CHECKLIST" },
      { value: "\u221E", label: "RAMEN BOWLS" },
    ],
    tableOfContents: [
      { id: "before-you-fly", label: "Pre-Flight Checklist" },
      { id: "tokyo-101", label: "Tokyo 101" },
      { id: "common-mistakes", label: "Common Mistakes" },
      { id: "which-itinerary", label: "Which Itinerary" },
      { id: "cultural-basics", label: "Cultural Basics" },
    ],
    sections: [
      // Section 1: before-you-fly
      {
        id: "before-you-fly",
        label: "Pre-Flight Checklist",
        title: "The Pre-Flight Checklist",
        content: [
          {
            type: "prose",
            text: "Do these before you board your flight and you\u2019ll hit the ground running. Skip them and you\u2019ll spend your first day in Tokyo fumbling with logistics instead of eating ramen.",
          },
          {
            type: "checklist",
            items: [
              {
                text: "Buy an eSIM or pocket Wi-Fi \u2014 you need data from the moment you land for Google Maps and translation",
                checked: false,
              },
              {
                text: "Set up Mobile Suica in your Apple Wallet or Google Pay and load \u00a53,000\u2013\u00a55,000",
                checked: false,
              },
              {
                text: "Book Shibuya Sky tickets online \u2014 sells out 2\u20133 days ahead, especially for sunset slots",
                checked: false,
              },
              {
                text: "Book teamLab Borderless (Azabudai Hills) \u2014 timed entry, often sold out a week ahead",
                checked: false,
              },
              {
                text: "Check Ghibli Museum ticket availability \u2014 timed-release system through Lawson Ticket (tickets sell out within minutes on the 10th of each month), must book 1+ month ahead",
                checked: false,
              },
              {
                text: "Download Google Maps offline maps for the Tokyo region",
                checked: false,
              },
              {
                text: "Download Google Translate Japanese language pack for offline camera translation",
                checked: false,
              },
              {
                text: "Get \u00a520,000\u2013\u00a530,000 in cash before you go (or plan to hit a 7-Eleven ATM on arrival)",
                checked: false,
              },
              {
                text: "Pack comfortable walking shoes \u2014 you will walk 15,000\u201325,000 steps per day, guaranteed",
                checked: false,
              },
              {
                text: "Confirm your visa situation \u2014 many countries get 90-day visa-free, but check yours specifically",
                checked: false,
              },
            ],
          },
        ],
      },
      // Section 2: tokyo-101
      {
        id: "tokyo-101",
        label: "Tokyo 101",
        title: "How Tokyo Works",
        content: [
          {
            type: "prose",
            text: "Tokyo doesn\u2019t work like other cities. There\u2019s no single \u201Cdowntown.\u201D The city is a constellation of neighborhoods, each with its own personality, energy, and vibe. Shibuya is youth culture and nightlife. Asakusa is old Tokyo temples. Shinjuku is neon chaos. Ginza is money. Yanaka is the village that time forgot.\n\nYou don\u2019t \u201Csee Tokyo\u201D \u2014 you see neighborhoods. Plan each day around one or two adjacent neighborhoods rather than bouncing across the city. This is the single most important planning principle.\n\n**Trains stop at midnight.** The last trains on most lines leave between 23:30 and 00:30. If you miss the last train, your options are: taxi (expensive), manga cafe or capsule hotel (cheap, interesting), or walk (Tokyo is extremely safe at night). Plan accordingly.\n\n**Tokyo is the safest major city on Earth.** You can walk anywhere at any hour. Women walk alone at 3 AM. People leave laptops on cafe tables to use the bathroom. Lost wallets get returned with all the cash inside. Your biggest physical danger is bicycles on sidewalks.\n\n**English signage is excellent on transit** but spotty in restaurants and residential areas. All train stations have English signs. Most metro announcements are bilingual. But the izakaya in the alley behind the station? That menu is in Japanese only. Google Translate\u2019s camera mode is your best friend here.\n\n**Konbini (convenience stores) are lifelines.** 7-Eleven, Lawson, and FamilyMart are on every block and they are not American gas station convenience stores. They sell genuinely good food, have ATMs that accept foreign cards, sell event tickets, offer package shipping, and have clean bathrooms. You will visit one multiple times per day.",
          },
        ],
      },
      // Section 3: common-mistakes
      {
        id: "common-mistakes",
        label: "Common Mistakes",
        title: "What Everyone Gets Wrong",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "Trying to Do Too Much",
                desc: "The #1 mistake. Tokyo rewards depth over breadth. Two neighborhoods explored fully beats five neighborhoods rushed through. Build in wandering time. The best discoveries happen when you\u2019re not chasing a checklist.",
              },
              {
                title: "Skipping Konbini Meals",
                desc: "Tourists think konbini food is beneath them. It\u2019s not. 7-Eleven\u2019s egg sandwich is a cult classic. Lawson\u2019s karaage-kun is beloved nationwide. FamilyMart\u2019s onigiri is someone\u2019s comfort food. At least one meal a day should come from a konbini.",
              },
              {
                title: "Not Booking Ahead",
                desc: "Shibuya Sky, teamLab, Ghibli Museum, and popular restaurants fill up days or weeks ahead. You don\u2019t need to schedule every minute, but the big-ticket items need advance booking. Do this before you fly.",
              },
              {
                title: "Taking Taxis Everywhere",
                desc: "Tokyo taxis are clean, safe, and extremely expensive. A 15-minute ride costs \u00a52,000\u2013\u00a54,000. The train system goes everywhere, runs every 3\u20135 minutes, and costs \u00a5150\u2013\u00a5300. Only use taxis after midnight when trains stop.",
              },
              {
                title: "Only Eating Sushi",
                desc: "Sushi is one genre in a universe of Japanese cuisine. Ramen, tsukemen, tonkatsu, gyukatsu, tempura, udon, soba, okonomiyaki, yakitori, izakaya small plates, kissaten (retro cafes), wagashi (sweets). You\u2019d need a month to scratch the surface.",
              },
              {
                title: "Staying in the Wrong Area",
                desc: "Shinjuku or Shibuya are the best bases. They\u2019re central on the Yamanote line, full of restaurants, and have the most transport options. Staying in Odaiba, Roppongi, or a suburb might save money but will cost you 30\u201360 minutes of commuting each way every day.",
              },
              {
                title: "Not Carrying Cash",
                desc: "Credit card acceptance has improved but many ramen shops, izakayas, shrines, and market stalls are still cash only. Carry \u00a510,000\u2013\u00a520,000 at all times. Refill at any 7-Eleven ATM.",
              },
            ],
          },
        ],
      },
      // Section 4: which-itinerary
      {
        id: "which-itinerary",
        label: "Which Itinerary",
        title: "How Many Days Do You Need?",
        content: [
          {
            type: "prose",
            text: "There\u2019s no wrong answer, but different trip lengths unlock different layers of the city. Here\u2019s what each duration gives you.",
          },
          {
            type: "cards",
            items: [
              {
                title: "1\u20132 Days \u2014 The Greatest Hits",
                desc: "Shibuya Crossing, Meiji Shrine, Harajuku, Shinjuku at night, one incredible meal. You\u2019ll barely scratch the surface but you\u2019ll understand what makes Tokyo electric. Best for stopovers or Japan trip samplers.",
              },
              {
                title: "3\u20134 Days \u2014 The Sweet Spot",
                desc: "Add Asakusa\u2019s temples, Ueno\u2019s museums, Akihabara\u2019s chaos, and the Imperial Palace gardens. This is where Tokyo starts to feel like a real place, not just a highlight reel. Most first-timers should aim for this.",
              },
              {
                title: "5\u20136 Days \u2014 Go Deep",
                desc: "Now you can add day trips: Kamakura\u2019s Great Buddha, Enoshima\u2019s coastal walks, or Mt. Takao\u2019s shrines. You also have time for Yanaka\u2019s old-town charm and the neighborhoods tourists miss.",
              },
              {
                title: "7 Days \u2014 The Full Experience",
                desc: "The full itinerary. Every neighborhood, a day trip, the hidden spots, and enough unplanned time to just wander. This is how you go from tourist to temporary local. You\u2019ll leave already planning your return.",
              },
            ],
          },
        ],
      },
      // Section 5: cultural-basics
      {
        id: "cultural-basics",
        label: "Cultural Basics",
        title: "How to Be a Good Guest",
        content: [
          {
            type: "prose",
            text: "Japan runs on consideration. The culture is built around not inconveniencing others. You don\u2019t need to be perfect \u2014 people are unfailingly kind to tourists who make an effort. These basics will get you most of the way there.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Bow, Don\u2019t Hug",
                desc: "A slight bow (15\u00b0) is the default greeting. Deeper bows show more respect. You don\u2019t need to bow as deeply as Japanese people do \u2014 a head nod with a slight forward lean is perfect for tourists. Skip the handshake unless they offer first.",
              },
              {
                title: "Queue Like Your Life Depends on It",
                desc: "Japanese people queue for everything: trains, restaurants, elevators, crosswalks. Never cut a line. Even if there\u2019s no visible line, people are probably waiting in order. Ask \u201CIs this the line?\u201D if unsure.",
              },
              {
                title: "Shoes Off Indoors",
                desc: "If you see a raised entrance (genkan) or a shoe rack, take your shoes off. This applies to traditional restaurants, temples, ryokans, fitting rooms, and some Airbnbs. Socks are fine. Bare feet are not ideal.",
              },
              {
                title: "Keep Your Voice Down",
                desc: "Trains are silent. Phone calls on trains are a social crime. Speaking loudly in public is conspicuous. This isn\u2019t about being uptight \u2014 it\u2019s about shared space. Match the volume of the people around you.",
              },
              {
                title: "No Tipping, Anywhere",
                desc: "Tipping does not exist in Japan. Not at restaurants, not at hotels, not for taxi drivers. It can be confusing or mildly offensive. The price is the price. Excellent service is the baseline, not something to be bought.",
              },
              {
                title: "Take Your Trash With You",
                desc: "Public trash cans barely exist in Tokyo. Carry a small bag for your garbage. You\u2019ll find bins at konbini (for stuff you bought there) and at some station platforms. This is the #1 thing that surprises visitors.",
              },
              {
                title: "Don\u2019t Point at People",
                desc: "Use an open hand (palm up) to gesture toward people, places, or things. Pointing with a finger is considered rude. When directing someone, use your whole hand to indicate direction. Staff in stores do this constantly \u2014 follow their lead.",
              },
              {
                title: "Business Cards Are Sacred",
                desc: "If someone gives you a business card, receive it with both hands, read it carefully, and do not write on it or shove it in your pocket. Place it respectfully on the table during a meeting or in a card holder. This applies mostly to business contexts, but knowing it shows cultural awareness.",
              },
            ],
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget", "where-to-eat", "what-to-book"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 5: WHAT TO BOOK IN ADVANCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "what-to-book",
    title: "What to Book Before You Fly",
    subtitle: "The advance booking calendar that saves your trip",
    metaTitle:
      "Tokyo Advance Bookings 2026 \u2014 What to Reserve Before You Fly",
    metaDescription:
      "Everything you need to book before your Tokyo trip: Shibuya Sky, teamLab Planets, Ghibli Museum, restaurants, and more. With exact timelines and booking links.",
    ogTitle:
      "Tokyo Advance Bookings \u2014 Don\u2019t Miss These Reservations",
    keywords: [
      "Tokyo advance bookings",
      "Shibuya Sky tickets",
      "teamLab Planets reservation",
      "Ghibli Museum tickets",
      "what to book Tokyo",
      "Tokyo reservations 2026",
    ],
    color: "#E53935",
    icon: "\uD83D\uDDD3\uFE0F",
    stats: [
      { value: "8", label: "BOOKINGS" },
      { value: "3mo", label: "EARLIEST" },
      { value: "1wk", label: "LATEST" },
      { value: "3", label: "CRITICAL" },
    ],
    tableOfContents: [
      { id: "critical", label: "Critical (Will Sell Out)" },
      { id: "recommended", label: "Recommended" },
      { id: "optional", label: "Nice to Have" },
      { id: "restaurants", label: "Restaurant Reservations" },
      { id: "calendar", label: "Booking Calendar" },
    ],
    sections: [
      {
        id: "critical",
        label: "CRITICAL",
        title: "Book These or Miss Them",
        content: [
          {
            type: "prose",
            text: "Three things in Tokyo will genuinely sell out. Everything else on this site is walk-up friendly. But these three require planning, and tourists who skip this step regret it.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Ghibli Museum (Mitaka) \u2014 2\u20133 months ahead",
                desc: "Timed-release system through Lawson Ticket (l-tike.com). Tickets go on sale on the 10th of each month for the following month and sell out within minutes. \u00a51,000. You cannot buy at the door \u2014 no exceptions. Be ready the moment tickets drop. This is genuinely hard to get. If you don\u2019t get tickets, don\u2019t waste a morning going there. Day 7 itinerary (Kichijoji area).",
              },
              {
                title: "teamLab Planets (Toyosu) \u2014 2\u20134 weeks ahead",
                desc: "Book at teamlab.art \u2014 select date and time slot. \u00a54,200. First morning slot (9:00 or 10:00 AM) has the shortest crowds inside. Wear pants you can roll above the knee \u2014 you wade through water. The entire experience is barefoot. Day 2 itinerary.",
              },
              {
                title: "Shibuya Sky \u2014 1\u20132 weeks ahead",
                desc: "Book at shibuya-sky.tokyo \u2014 select date and time slot. \u00a52,200. Book the 16:30 or 17:00 slot (depending on season) for sunset. The open-air rooftop at 230m is the highlight \u2014 overcast days are still good but you won\u2019t see Mt. Fuji. Day 1 itinerary.",
              },
            ],
          },
          {
            type: "warning",
            text: "The Ghibli Museum timed-release system through Lawson Ticket is real. Many tourists assume they can figure it out on arrival. They can\u2019t. Tickets sell out within minutes on the 10th of each month, 2\u20133 months before your trip, or accept you\u2019re not going.",
          },
          {
            type: "warning",
            text: "teamLab has moved venues before in Tokyo. Confirm the current location on teamlab.art before booking. As of 2026, it\u2019s in Toyosu.",
          },
          {
            type: "tip",
            text: "Sunset slots at Shibuya Sky sell out first. If your preferred date is gone, check back \u2014 cancellations open up slots, especially midweek.",
          },
        ],
      },
      {
        id: "recommended",
        label: "RECOMMENDED",
        title: "Book 1\u20132 Weeks Out",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "Toyosu Market Tuna Auction Viewing",
                desc: "Free but requires advance reservation through the official site. Early morning start (5:30 AM). The viewing gallery lets you watch the auction from above through glass walls. You don\u2019t interact with the market floor. Worth it for food nerds. Day 2 add-on.",
              },
              {
                title: "Robot Restaurant (Shinjuku)",
                desc: "Permanently closed during COVID. A successor show (Samurai Restaurant) operates separately. Not a restaurant \u2014 more of a neon fever dream with robots.",
              },
              {
                title: "Zauo Fishing Restaurant",
                desc: "Catch your own fish, they cook it for you. Book 3\u20135 days out. Fun group experience, especially with kids. Multiple locations in Tokyo. Dinner \u00a54,000\u20136,000.",
              },
              {
                title: "teamLab Borderless",
                desc: "teamLab Borderless at Azabudai Hills. Open since February 2024. Same booking pattern as Planets. Different experience \u2014 more free-roaming, less water. Book 2\u20134 weeks out.",
              },
            ],
          },
        ],
      },
      {
        id: "optional",
        label: "WALK-UP FRIENDLY",
        title: "No Booking Needed",
        content: [
          {
            type: "prose",
            text: "Most of Tokyo is walk-up friendly. The city rewards spontaneity. Only the 3 critical bookings above require real planning \u2014 everything else you can figure out on the ground.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Senso-ji Temple",
                desc: "Always open, always free. Arrive before 9:30 AM for fewer crowds.",
              },
              {
                title: "Meiji Jingu Shrine",
                desc: "Free admission. Opens at sunrise, closes at sunset (hours vary seasonally). Enter from the Harajuku side.",
              },
              {
                title: "Imperial Palace East Gardens",
                desc: "Free, no booking. Closed Mondays and Fridays.",
              },
              {
                title: "Shinjuku Gyoen",
                desc: "\u00a5500, no booking needed. Closed Mondays.",
              },
              {
                title: "Tokyo Metro Govt Building",
                desc: "Free observation deck, no booking. Queue possible at sunset.",
              },
              {
                title: "Tsukiji Outer Market",
                desc: "No booking. Arrive by 11:30 AM. Vendors close by 2 PM.",
              },
              {
                title: "All neighborhood walks",
                desc: "Yanaka, Shimokitazawa, Golden Gai, Harajuku, Akihabara \u2014 just show up.",
              },
            ],
          },
        ],
      },
      {
        id: "restaurants",
        label: "RESTAURANTS",
        title: "Do You Need Restaurant Reservations?",
        content: [
          {
            type: "prose",
            text: "For 95% of restaurants in this guide: no. Walk in, queue if there\u2019s a line, eat. Japanese restaurant culture is very queue-friendly \u2014 a 20-minute wait is normal and expected at popular spots.\n\nExceptions where you SHOULD reserve:\n\n\u2022 Any omakase sushi counter (\u00a515,000+) \u2014 book 1\u20133 months ahead through your hotel concierge or Tabelog\n\u2022 Michelin-starred restaurants \u2014 months ahead\n\u2022 Specific popular spots: Tapas Molecular Bar (Mandarin Oriental, Nihonbashi \u2014 10 min walk from Tokyo Station), Narisawa, Den\n\nFor everything else in this guide \u2014 Fuunji, Afuri, Daiwa Sushi, Gyoza Lou \u2014 just show up. Queue culture is part of the experience.",
          },
          {
            type: "tip",
            text: "Your hotel concierge is your secret weapon for restaurant reservations. Many high-end spots only take reservations via concierge or Japanese-language Tabelog. Ask your hotel \u2014 even budget business hotels will help.",
          },
        ],
      },
      {
        id: "calendar",
        label: "TIMELINE",
        title: "Your Booking Calendar",
        content: [
          {
            type: "table",
            headers: ["WHEN", "WHAT TO DO"],
            rows: [
              [
                "3 months before",
                "Book Ghibli Museum tickets via Lawson Ticket (on the 10th of the month)",
              ],
              [
                "2 months before",
                "Book teamLab Planets (first morning slot)",
              ],
              [
                "1 month before",
                "Book high-end restaurant reservations if applicable",
              ],
              [
                "2 weeks before",
                "Book Shibuya Sky (sunset slot)",
              ],
              [
                "1 week before",
                "Buy eSIM, download offline maps, set up digital Suica",
              ],
              [
                "Day before",
                "Charge Suica \u00a53,000\u20135,000, get cash at 7-Eleven ATM, screenshot station exits",
              ],
              [
                "Day of",
                "Show up. Everything else is walk-up.",
              ],
            ],
          },
        ],
      },
    ],
    relatedGuides: ["first-time", "budget"],
    relatedDays: [
      { num: "01", title: "ELECTRIC PULSE", slug: "1-day-tokyo-itinerary" },
      { num: "02", title: "OLD WORLD ZEN", slug: "2-day-tokyo-itinerary" },
      {
        num: "07",
        title: "HIDDEN FREQUENCIES",
        slug: "7-day-tokyo-itinerary",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 6: BEST TIME TO VISIT TOKYO
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "best-time-to-visit",
    title: "Best Time to Visit Tokyo",
    subtitle: "Month by month \u2014 weather, crowds, events, costs",
    metaTitle:
      "Best Time to Visit Tokyo 2026 \u2014 Month-by-Month Guide",
    metaDescription:
      "When to visit Tokyo: cherry blossoms in spring, festivals in summer, autumn foliage, and winter illuminations. Month-by-month weather, crowd levels, costs, and events.",
    ogTitle: "Best Time to Visit Tokyo \u2014 Every Month Ranked",
    keywords: [
      "best time to visit Tokyo",
      "Tokyo cherry blossom season",
      "Tokyo weather",
      "when to go to Tokyo",
      "Tokyo in spring",
      "Tokyo in autumn",
    ],
    color: "#F57C00",
    icon: "\uD83C\uDF38",
    stats: [
      { value: "Mar\u2013Apr", label: "CHERRY BLOSSOM" },
      { value: "Nov", label: "AUTUMN PEAK" },
      { value: "Jan\u2013Feb", label: "CHEAPEST" },
      { value: "Aug", label: "HOTTEST" },
    ],
    tableOfContents: [
      { id: "overview", label: "Quick Ranking" },
      { id: "spring", label: "Spring (Mar\u2013May)" },
      { id: "summer", label: "Summer (Jun\u2013Aug)" },
      { id: "autumn", label: "Autumn (Sep\u2013Nov)" },
      { id: "winter", label: "Winter (Dec\u2013Feb)" },
      { id: "events", label: "Festival Calendar" },
    ],
    sections: [
      {
        id: "overview",
        label: "MONTH BY MONTH",
        title: "The Quick Ranking",
        content: [
          {
            type: "table",
            headers: ["MONTH", "WEATHER", "CROWDS", "COST", "RATING"],
            rows: [
              [
                "January",
                "Cold (2\u201310\u00b0C), dry, clear",
                "Low",
                "Cheapest",
                "\u2605\u2605\u2605\u2606 \u2014 crisp and uncrowded",
              ],
              [
                "February",
                "Cold (3\u201311\u00b0C), dry",
                "Low",
                "Cheap",
                "\u2605\u2605\u2605\u2606 \u2014 plum blossoms start",
              ],
              [
                "March",
                "Mild (6\u201314\u00b0C), some rain",
                "Rising",
                "Moderate",
                "\u2605\u2605\u2605\u2605\u2605 \u2014 cherry blossoms start late March",
              ],
              [
                "April",
                "Warm (10\u201319\u00b0C), some rain",
                "Peak",
                "High",
                "\u2605\u2605\u2605\u2605\u2605 \u2014 full cherry blossom, best month",
              ],
              [
                "May",
                "Warm (15\u201324\u00b0C), pleasant",
                "Moderate",
                "Moderate",
                "\u2605\u2605\u2605\u2605 \u2014 beautiful weather, blossoms done",
              ],
              [
                "June",
                "Warm (19\u201326\u00b0C), rainy season",
                "Lower",
                "Moderate",
                "\u2605\u2605\u2606 \u2014 tsuyu (rainy season), humid",
              ],
              [
                "July",
                "Hot (23\u201330\u00b0C), humid",
                "Moderate",
                "Moderate",
                "\u2605\u2605\u2605 \u2014 festivals begin, very hot",
              ],
              [
                "August",
                "Very hot (24\u201332\u00b0C), humid",
                "Moderate",
                "Moderate",
                "\u2605\u2605\u2606 \u2014 oppressive heat, Obon holiday",
              ],
              [
                "September",
                "Warm (20\u201328\u00b0C), typhoon risk",
                "Lower",
                "Moderate",
                "\u2605\u2605\u2605 \u2014 heat fading, typhoon season",
              ],
              [
                "October",
                "Mild (14\u201322\u00b0C), pleasant",
                "Rising",
                "Moderate",
                "\u2605\u2605\u2605\u2605 \u2014 great weather, autumn starts",
              ],
              [
                "November",
                "Cool (9\u201317\u00b0C), clear",
                "Peak",
                "High",
                "\u2605\u2605\u2605\u2605\u2605 \u2014 peak autumn foliage",
              ],
              [
                "December",
                "Cold (4\u201312\u00b0C), dry",
                "Moderate",
                "Moderate",
                "\u2605\u2605\u2605\u2605 \u2014 illuminations, year-end energy",
              ],
            ],
          },
        ],
      },
      {
        id: "spring",
        label: "SPRING",
        title: "Cherry Blossom Season (Late March\u2013Mid April)",
        content: [
          {
            type: "prose",
            text: "This is why 50% of first-time visitors come to Japan. The cherry blossoms (sakura) usually peak in Tokyo in the last week of March through the first week of April \u2014 but the exact dates shift each year. Check japan-guide.com/sakura for real-time forecasts starting in February.\n\nIf you miss peak bloom: don\u2019t panic. The atmosphere in Tokyo during sakura season is magical even when the trees are 70% bloomed or starting to fall. The falling petals (hanafubuki) are arguably more beautiful than full bloom.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Shinjuku Gyoen",
                desc: "The most beautiful setting. Multiple cherry varieties mean a longer bloom window. \u00a5500. Closed Mondays. No alcohol allowed.",
              },
              {
                title: "Ueno Park",
                desc: "The classic hanami (picnic under blossoms) spot. Free. Gets extremely crowded on weekends \u2014 arrive early to claim space.",
              },
              {
                title: "Chidorigafuchi (Imperial Palace moat)",
                desc: "Rowboats under cherry blossom tunnels. One of Tokyo\u2019s most iconic sakura photos. Rent boats on the spot.",
              },
              {
                title: "Meguro River",
                desc: "800 trees line both banks, illuminated at night. Nakameguro area. The evening walk is unforgettable.",
              },
              {
                title: "Inokashira Park (Kichijoji)",
                desc: "Quieter alternative with swan boats under blossoms. Day 7 itinerary area. Less crowded than Ueno.",
              },
            ],
          },
          {
            type: "warning",
            text: "Flights and hotels book up 3\u20136 months ahead for late March\u2013early April. This is THE most expensive time to visit Tokyo. Book early or pay a serious premium.",
          },
        ],
      },
      {
        id: "summer",
        label: "SUMMER",
        title: "Festival Season + Brutal Heat (June\u2013August)",
        content: [
          {
            type: "prose",
            text: "June is tsuyu (rainy season) \u2014 expect 12\u201314 days of rain. July and August are genuinely brutal: 30\u201335\u00b0C with oppressive humidity. You will sweat through your clothes. But summer has its own magic.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Sumida River Fireworks (late July)",
                desc: "The biggest fireworks festival in Tokyo draws 1 million+ people. Spectacular displays over the river near Asakusa. Get there hours early for a good spot.",
              },
              {
                title: "Bon Odori dances",
                desc: "Traditional summer dance festivals at temples and shrines across the city. Wear a yukata (summer kimono) from a rental shop to blend in.",
              },
              {
                title: "Lighter crowds",
                desc: "Most tourists avoid the heat, so major attractions are noticeably less crowded. teamLab with fewer people is a different experience.",
              },
              {
                title: "Summer food",
                desc: "Kakigori (shaved ice with syrup), cold soba, rooftop beer gardens, cold matcha \u2014 Tokyo adapts deliciously to the heat.",
              },
            ],
          },
          {
            type: "tip",
            text: "Survival: carry a hand towel (locals do), drink vending machine drinks constantly (\u00a5100\u2013160), duck into konbini or department stores for AC breaks, plan indoor activities (museums, shopping, teamLab) for midday 11 AM\u20133 PM.",
          },
        ],
      },
      {
        id: "autumn",
        label: "AUTUMN",
        title: "The Other Perfect Season (October\u2013November)",
        content: [
          {
            type: "prose",
            text: "If you can\u2019t make cherry blossom season, autumn is equally stunning and significantly less crowded. November is peak foliage \u2014 the maple trees turn red and gold across the city. October has perfect weather (15\u201322\u00b0C) for walking. This is arguably the best time to do the full 7-day itinerary.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Meiji Jingu Gaien",
                desc: "The famous ginkgo avenue. Golden tunnel of yellow leaves. Free. Late November peak. One of Tokyo\u2019s most photographed autumn spots.",
              },
              {
                title: "Rikugien Garden",
                desc: "Evening illumination of autumn maples reflected in the pond. Stunning. \u00a5300. One of Tokyo\u2019s finest traditional gardens.",
              },
              {
                title: "Shinjuku Gyoen",
                desc: "Great variety of maples and ginkgo trees. \u00a5500. Less crowded than Meiji Jingu Gaien with equal beauty.",
              },
              {
                title: "Koishikawa Korakuen",
                desc: "One of Tokyo\u2019s oldest gardens. \u00a5300. Full-moon bridge over a pond surrounded by fiery maples. Quiet on weekdays.",
              },
            ],
          },
        ],
      },
      {
        id: "winter",
        label: "WINTER",
        title: "Cold, Clear, and Magical (December\u2013February)",
        content: [
          {
            type: "prose",
            text: "Tokyo winters are cold (2\u201312\u00b0C) but dry and clear \u2014 perfect visibility for Shibuya Sky and Mt. Fuji views. December has extraordinary illumination displays across the city. January\u2013February are the cheapest months to fly and stay.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Winter Illuminations",
                desc: "Omotesando, Tokyo Midtown, Roppongi Hills, Caretta Shiodome. Free. November\u2013February. The city transforms into a light show.",
              },
              {
                title: "New Year (Jan 1\u20133)",
                desc: "Hatsumode (first shrine visit of the year). Meiji Jingu gets 3 million visitors. Intense but unforgettable. Senso-ji is equally atmospheric.",
              },
              {
                title: "Emperor\u2019s Birthday (Feb 23)",
                desc: "The Imperial Palace inner grounds open to the public (normally closed). A rare chance to see inside.",
              },
              {
                title: "Cheapest travel",
                desc: "January\u2013February (excluding New Year week) offers the lowest flight and hotel prices of the year. Up to 40% savings vs cherry blossom season.",
              },
            ],
          },
          {
            type: "tip",
            text: "Pack: layers, warm coat, scarf. Heated interiors are everywhere. The cold is manageable and the clear winter skies mean the best Mt. Fuji visibility of the year from Shibuya Sky.",
          },
        ],
      },
      {
        id: "events",
        label: "EVENTS",
        title: "The Festival Calendar",
        content: [
          {
            type: "table",
            headers: ["MONTH", "EVENT", "WHAT IS IT"],
            rows: [
              [
                "Jan 1\u20133",
                "Hatsumode",
                "New Year shrine visits. Meiji Jingu, Senso-ji packed with millions.",
              ],
              [
                "Late Feb",
                "Plum Blossom (ume)",
                "Early blooms at Yushima Tenjin, Koishikawa Korakuen. Quieter than sakura.",
              ],
              [
                "Late Mar\u2013early Apr",
                "Cherry Blossom (sakura)",
                "Peak bloom. Hanami picnics everywhere. Tokyo\u2019s main event.",
              ],
              [
                "Mid Apr",
                "Meiji Jingu Spring Festival",
                "Traditional performing arts at the shrine. Free to watch.",
              ],
              [
                "Mid-May weekend (closest to May 15)",
                "Kanda Matsuri (odd years)",
                "One of Tokyo\u2019s three great festivals. Portable shrines through Kanda.",
              ],
              [
                "Mid Jun",
                "Sanno Matsuri (even years)",
                "Grand procession through central Tokyo. Massive portable shrine parade.",
              ],
              [
                "Late Jul",
                "Sumida River Fireworks",
                "Biggest fireworks festival. 1 million+ attendance. Near Asakusa.",
              ],
              [
                "Aug 13\u201316",
                "Obon",
                "Ancestor festival. Some businesses close. Bon Odori dances at temples.",
              ],
              [
                "November",
                "Shichi-Go-San",
                "Children\u2019s festival. Kids in kimono at shrines. Adorable photo ops.",
              ],
              [
                "Nov\u2013Feb",
                "Winter Illuminations",
                "Light displays across the city. Omotesando, Roppongi, Midtown.",
              ],
              [
                "Dec 31",
                "New Year\u2019s Eve",
                "Midnight temple bells (joya no kane). 108 bells rung to purify.",
              ],
            ],
          },
        ],
      },
    ],
    relatedGuides: ["first-time", "what-to-book"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 7: DAY TRIPS FROM TOKYO
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "day-trips",
    title: "Day Trips from Tokyo",
    subtitle: "5 escapes ranked \u2014 which one deserves your day",
    metaTitle:
      "Best Day Trips from Tokyo 2026 \u2014 Kamakura, Nikko, Hakone & More",
    metaDescription:
      "The 5 best day trips from Tokyo ranked: Kamakura, Nikko, Hakone, Yokohama, and Mt. Fuji. With travel times, costs, highlights, and which is right for you.",
    ogTitle: "Day Trips from Tokyo \u2014 5 Escapes Ranked",
    keywords: [
      "day trips from Tokyo",
      "Kamakura day trip",
      "Nikko from Tokyo",
      "Hakone day trip",
      "best day trips Tokyo",
      "Yokohama from Tokyo",
    ],
    color: "#00838F",
    icon: "\uD83D\uDDFB",
    stats: [
      { value: "5", label: "TRIPS RANKED" },
      { value: "36min", label: "SHORTEST" },
      { value: "2hrs", label: "LONGEST" },
      { value: "2", label: "IN ITINERARY" },
    ],
    tableOfContents: [
      { id: "ranking", label: "Quick Ranking" },
      { id: "kamakura", label: "Kamakura" },
      { id: "nikko", label: "Nikko" },
      { id: "hakone", label: "Hakone" },
      { id: "yokohama", label: "Yokohama" },
      { id: "fuji", label: "Mt. Fuji (Kawaguchiko)" },
      { id: "pick", label: "Which One?" },
    ],
    sections: [
      {
        id: "ranking",
        label: "COMPARISON",
        title: "The Quick Ranking",
        content: [
          {
            type: "table",
            headers: [
              "TRIP",
              "TRAVEL TIME",
              "ROUND-TRIP COST",
              "BEST FOR",
              "RATING",
            ],
            rows: [
              [
                "Kamakura",
                "60 min (JR)",
                "\u00a51,900",
                "Great Buddha, ocean temples, beach",
                "\u2605\u2605\u2605\u2605\u2605",
              ],
              [
                "Nikko",
                "2 hrs (Tobu)",
                "\u00a58,000 (All Nikko Pass)",
                "UNESCO shrines, waterfalls, forests",
                "\u2605\u2605\u2605\u2605\u2605",
              ],
              [
                "Hakone",
                "90 min (Odakyu)",
                "\u00a57,100 (Freepass)",
                "Hot springs, Mt. Fuji views, pirate ship",
                "\u2605\u2605\u2605\u2605",
              ],
              [
                "Yokohama",
                "30 min (JR)",
                "\u00a5940",
                "Chinatown, waterfront, ramen museum",
                "\u2605\u2605\u2605",
              ],
              [
                "Kawaguchiko",
                "2 hrs (bus)",
                "\u00a54,400",
                "Mt. Fuji up close, lake views",
                "\u2605\u2605\u2605\u2605",
              ],
            ],
          },
          {
            type: "tip",
            text: "If you only have one day trip: Kamakura. If you have two: add Nikko. If you want an onsen (hot spring): Hakone.",
          },
        ],
      },
      {
        id: "kamakura",
        label: "DAY 5 IN THE ITINERARY",
        title: "Kamakura \u2014 The Seaside Temple Town",
        content: [
          {
            type: "prose",
            text: "Kamakura was Japan\u2019s political capital in the 13th century. Today it\u2019s a compact seaside town with ancient temples, an over 770-year-old giant Buddha, and a coastline you can walk. It\u2019s the most popular day trip from Tokyo for good reason \u2014 the combination of history, nature, and ocean is unmatched.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Getting there",
                desc: "JR Yokosuka Line from Tokyo or Shinagawa Station, ~60 min. Suica works. JR Pass covers it. ~\u00a51,900 round trip.",
              },
              {
                title: "Must-see",
                desc: "Great Buddha at Kotoku-in (\u00a5300, go inside for \u00a550), Hase-dera Temple (ocean views from hillside), Tsurugaoka Hachimangu Shrine (grand steps, city views).",
              },
              {
                title: "Must-eat",
                desc: "Shirasu-don (baby sardine rice bowl) \u2014 only available fresh here. Komachi-dori has purple sweet potato ice cream, senbei, and warabi mochi.",
              },
              {
                title: "Pro tip",
                desc: "Choose either thorough Kamakura OR Kamakura morning + Enoshima island afternoon. Don\u2019t try to rush everything.",
              },
            ],
          },
          {
            type: "tip",
            text: "This is Day 5: COASTAL PILGRIMAGE in the itinerary. Full stop-by-stop plan with timing is on the main itinerary page.",
          },
        ],
      },
      {
        id: "nikko",
        label: "DAY 6 IN THE ITINERARY",
        title: "Nikko \u2014 The Mountain Shrine",
        content: [
          {
            type: "prose",
            text: "Nikko is where the Tokugawa shoguns built their most extravagant shrine in a cryptomeria forest. It\u2019s a UNESCO World Heritage site that looks like nothing else in Japan \u2014 gold leaf, intricate carvings, and towering cedar trees. Further into the mountains, Kegon Falls drops 97 meters into a gorge.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Getting there",
                desc: "Tobu Limited Express from Asakusa, ~2 hours. NOT covered by JR Pass. Buy the All Nikko Pass (\u00a58,000) \u2014 covers round trip + unlimited local buses.",
              },
              {
                title: "Must-see",
                desc: "Toshogu Shrine (\u00a51,600) \u2014 the \u2018see no evil\u2019 monkeys, the sleeping cat, 200+ stone steps through forest. Shinkyo Bridge. Kegon Falls (optional, +40 min bus).",
              },
              {
                title: "Must-eat",
                desc: "Yuba (tofu skin) is Nikko\u2019s specialty. Try yuba soba, yuba tempura, or yuba in dashi broth at Nagomi Chaya near Shinkyo Bridge.",
              },
              {
                title: "Reality check",
                desc: "This is a long day \u2014 leave 7:30 AM, return 7\u20138 PM. Consider skipping Kegon Falls if fatigued. Toshogu alone justifies the trip.",
              },
            ],
          },
          {
            type: "tip",
            text: "This is Day 6: MOUNTAIN SHRINE in the itinerary. Full stop-by-stop plan with timing is on the main itinerary page.",
          },
        ],
      },
      {
        id: "hakone",
        label: "NOT IN ITINERARY",
        title: "Hakone \u2014 Hot Springs with a Fuji View",
        content: [
          {
            type: "prose",
            text: "Hakone is a volcanic hot spring region 90 minutes from Tokyo. The classic Hakone loop takes you through mountain railways, cable cars, a pirate ship on a crater lake, and \u2014 on clear days \u2014 a postcard view of Mt. Fuji. It\u2019s the closest onsen experience to Tokyo.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Getting there",
                desc: "Odakyu Romance Car from Shinjuku, ~90 min. NOT covered by JR Pass. Buy the Hakone Freepass (\u00a57,100) \u2014 2-day pass covering all transport in Hakone + round trip from Shinjuku.",
              },
              {
                title: "Must-see",
                desc: "Hakone Open Air Museum (sculpture park), Owakudani volcanic valley (black eggs!), Lake Ashi pirate ship cruise, Mt. Fuji view from the lake.",
              },
              {
                title: "Must-eat",
                desc: "Black eggs (kuro-tamago) at Owakudani \u2014 boiled in volcanic sulfur springs, shells turn black. Legend says each adds 7 years to your life. \u00a5500 for 4.",
              },
              {
                title: "Pro tip",
                desc: "The Freepass is 2 days \u2014 consider an overnight ryokan stay with private onsen if budget allows. Day trip is doable but rushed.",
              },
            ],
          },
          {
            type: "warning",
            text: "Mt. Fuji is only visible on clear days. Check the forecast before going specifically for the view. Overcast days are still great for the hot springs, museum, and volcanic valley.",
          },
          {
            type: "tip",
            text: "Hakone also fits into the Japan Golden Route as a stopover between Tokyo and Kyoto \u2192 /japan/golden-route",
          },
        ],
      },
      {
        id: "yokohama",
        label: "NOT IN ITINERARY",
        title: "Yokohama \u2014 The Easy Half-Day",
        content: [
          {
            type: "prose",
            text: "Japan\u2019s second-largest city is just 30 minutes from Tokyo. Yokohama has the country\u2019s biggest Chinatown, a gorgeous waterfront, and the Cup Noodles Museum. It\u2019s the easiest day trip \u2014 more of an afternoon trip, really.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Getting there",
                desc: "JR from Tokyo or Shinagawa, ~30 min. Suica works. JR Pass covers it. ~\u00a5940 round trip.",
              },
              {
                title: "Must-see",
                desc: "Yokohama Chinatown (600+ restaurants), Minato Mirai waterfront, Cup Noodles Museum (make your own cup, \u00a5500), Shin-Yokohama Ramen Museum (miniature 1950s street with 9 ramen shops).",
              },
              {
                title: "Must-eat",
                desc: "Chinese steamed buns (nikuman) from the Chinatown stalls. Ramen at the Ramen Museum. Yokohama\u2019s Chinatown is Japan\u2019s largest and the food is legitimately excellent.",
              },
              {
                title: "Pro tip",
                desc: "Best as a half-day. Combine with an afternoon in central Tokyo. Not worth a full day unless you\u2019re specifically into the museums.",
              },
            ],
          },
        ],
      },
      {
        id: "fuji",
        label: "NOT IN ITINERARY",
        title: "Mt. Fuji Up Close (Kawaguchiko)",
        content: [
          {
            type: "prose",
            text: "Kawaguchiko (Lake Kawaguchi) is the closest accessible base for Mt. Fuji views. You can\u2019t easily climb Fuji on a day trip (climbing season is July\u2013August only, and it\u2019s a full overnight), but you can get incredibly close for photos, lake walks, and onsen with a Fuji backdrop.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Getting there",
                desc: "Highway bus from Shinjuku Expressway Bus Terminal, ~2 hours. Or Fuji Excursion train (JR + Fujikyu, ~2 hours, limited daily departures). ~\u00a54,400 round trip (bus). Train ~\u00a54,500.",
              },
              {
                title: "Must-see",
                desc: "Lake Kawaguchiko shoreline walk, Chureito Pagoda (the iconic pagoda + Fuji photo \u2014 in Fujiyoshida, one train stop away), Fuji view onsen.",
              },
              {
                title: "Must-eat",
                desc: "Hoto noodles \u2014 thick flat noodles in miso broth with vegetables. Fujiyoshida\u2019s local specialty. Hearty and warming.",
              },
              {
                title: "Pro tip",
                desc: "Fuji is only clearly visible ~40% of days. Best visibility: early morning, November\u2013February (cold clear air). Check webcams before going.",
              },
            ],
          },
          {
            type: "warning",
            text: "If you can\u2019t see Fuji, the trip loses 70% of its appeal. Unlike Kamakura or Nikko, there isn\u2019t enough to do at Kawaguchiko to fill a day without the mountain view. Always check webcams before committing.",
          },
        ],
      },
      {
        id: "pick",
        label: "DECISION",
        title: "So Which One?",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "I have one day trip",
                desc: "Kamakura. Best all-around: history, nature, ocean, food. No bad weather risk. Works rain or shine.",
              },
              {
                title: "I have two day trips",
                desc: "Kamakura + Nikko. Coast and mountains. This is exactly what the 6-day itinerary does.",
              },
              {
                title: "I want hot springs",
                desc: "Hakone. Ideally overnight with a ryokan, but doable as a day trip. The Freepass makes logistics easy.",
              },
              {
                title: "I want to see Mt. Fuji",
                desc: "Kawaguchiko, but ONLY on a clear day. Hakone also has Fuji views with more backup activities if it\u2019s cloudy.",
              },
              {
                title: "I want something easy and short",
                desc: "Yokohama. 30 minutes, half-day, no planning needed. Chinatown + waterfront + Cup Noodles Museum.",
              },
            ],
          },
          {
            type: "prose",
            text: "The itinerary includes Kamakura (Day 5) and Nikko (Day 6) because they offer the strongest experiences for first-time visitors. Hakone and Kawaguchiko are excellent substitutes depending on your interests and weather.",
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget", "first-time"],
    relatedDays: [
      {
        num: "05",
        title: "COASTAL PILGRIMAGE",
        slug: "5-day-tokyo-itinerary",
      },
      { num: "06", title: "MOUNTAIN SHRINE", slug: "6-day-tokyo-itinerary" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDE 8: TOKYO WITH KIDS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tokyo-with-kids",
    title: "Tokyo with Kids",
    subtitle: "Family-tested picks from toddlers to teens",
    metaTitle:
      "Tokyo with Kids 2026 \u2014 Family Guide by Age Group",
    metaDescription:
      "The family-friendly Tokyo guide for 2026. Kid-tested activities, family restaurants, stroller tips, and a modified itinerary organized by age group.",
    ogTitle: "Tokyo with Kids \u2014 Family-Tested Guide 2026",
    keywords: [
      "Tokyo with kids",
      "family Tokyo itinerary",
      "kid-friendly Tokyo",
      "Tokyo children activities",
      "Tokyo family travel",
    ],
    color: "#4CAF50",
    icon: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66",
    stats: [
      { value: "18", label: "KID PICKS" },
      { value: "3", label: "AGE GROUPS" },
      { value: "5", label: "FAMILY EATS" },
      { value: "0", label: "MELTDOWNS*" },
    ],
    tableOfContents: [
      { id: "by-age", label: "By Age Group" },
      { id: "top-picks", label: "Top 10 Kid Activities" },
      { id: "family-food", label: "Family-Friendly Restaurants" },
      { id: "strollers", label: "Stroller Survival Guide" },
      { id: "modified-itinerary", label: "Modified 5-Day Family Itinerary" },
      { id: "tips", label: "Parent Tips" },
    ],
    sections: [
      {
        id: "by-age",
        label: "BY AGE",
        title: "What Works at Every Age",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "Toddlers (0\u20134)",
                desc: "Best: Ueno Zoo (pandas!), Inokashira Park (swan boats), train rides (toddlers love the Yamanote Loop \u2014 ride it for fun), Odaiba beach, konbini snack adventures. Skip: Akihabara arcades (overstimulating), Golden Gai (adults only), Nikko day trip (too long). Tip: Tokyo is extremely baby-friendly. Department stores have nursing rooms (jyunyuu-shitsu) with warm water, changing tables, and private spaces. Look for the pink baby icon.",
              },
              {
                title: "School Age (5\u201312)",
                desc: "Best: teamLab Planets (barefoot water walking!), Akihabara arcades + gachapon, Cup Noodles Museum (make your own), Kappabashi plastic food workshop, Kamakura Great Buddha (kids love going inside for \u00a550), Ghibli Museum (if you got tickets via Lawson Ticket), Odaiba Gundam statue. Skip: Ginza (boring for kids), long museum visits (pick one, 60 min max). Tip: Let kids collect gachapon (capsule machine) toys at every station. \u00a5100\u2013300 each. They\u2019ll become the highlight of the trip.",
              },
              {
                title: "Teens (13+)",
                desc: "Best: Shibuya Scramble + Shibuya Sky, Takeshita Street (fashion + crepes), Akihabara (manga, arcades, themed cafes), Nakano Broadway (vintage collectibles), Shimokitazawa (vintage clothing), conveyor belt sushi at Uobei (iPad ordering). Skip: Most temples (unless specifically interested), overly scheduled days. Tip: Give teens a half-day to explore Harajuku or Akihabara on their own. Tokyo is one of the safest cities in the world.",
              },
            ],
          },
        ],
      },
      {
        id: "top-picks",
        label: "RANKED",
        title: "The Top 10 for Kids",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "#1 teamLab Planets",
                desc: "Immersive, magical, all ages love it. Walk barefoot through water and light. Book 2\u20134 weeks ahead. \u00a54,200. Day 2 itinerary.",
              },
              {
                title: "#2 Akihabara Arcades",
                desc: "GiGO, Taito Station \u2014 crane games, rhythm games, photo booths. \u00a5100 per play. Multi-floor game centers that kids can spend hours in.",
              },
              {
                title: "#3 Ueno Zoo",
                desc: "Tokyo\u2019s oldest zoo. Pandas are the star attraction. \u00a5600 adults, free for children 12 and under. Inside Ueno Park.",
              },
              {
                title: "#4 Cup Noodles Museum",
                desc: "In Yokohama (30-min train). Design your own cup noodle packaging and choose toppings. \u00a5500. Hands-on and fun for ages 5+.",
              },
              {
                title: "#5 Kappabashi Plastic Food Workshop",
                desc: "Make your own fake food souvenirs at Ganso Shokuhin Sample-ya. from \u00a52,800 for 60 minutes. Unique and surprisingly fun.",
              },
              {
                title: "#6 Ghibli Museum",
                desc: "If you got tickets (timed-release via Lawson Ticket on the 10th of each month) \u2014 magical for Ghibli fans of any age. Stained glass, a cat bus you can climb in, rooftop robot. \u00a51,000.",
              },
              {
                title: "#7 Odaiba",
                desc: "Life-size Unicorn Gundam statue, beach, Legoland Discovery Center. A full kid-friendly day. (Note: teamLab Borderless is now at Azabudai Hills, not Odaiba.)",
              },
              {
                title: "#8 Inokashira Park Swan Boats",
                desc: "Pedal boats shaped like swans on a pretty lake. \u00a5700 for 30 minutes. Kichijoji area (Day 7). Calm and charming.",
              },
              {
                title: "#9 Shibuya Sky",
                desc: "The \u2018whoa\u2019 moment of the trip for any age. Open-air observation at 230m. Book sunset slot. \u00a52,200.",
              },
              {
                title: "#10 Kamakura Great Buddha",
                desc: "An over 770-year-old giant bronze statue you can go inside for \u00a550. Kids remember this forever. Day 5 itinerary.",
              },
            ],
          },
        ],
      },
      {
        id: "family-food",
        label: "FAMILY FOOD",
        title: "Restaurants Where Kids Are Welcome",
        content: [
          {
            type: "prose",
            text: "Good news: Tokyo is one of the most family-friendly food cities in the world. Kids are welcome almost everywhere at lunch. Dinner at izakayas is fine with young kids before 7 PM. The only places that aren\u2019t kid-friendly: Golden Gai bars, most high-end sushi counters, and tiny 6-seat ramen shops during peak hours.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Conveyor belt sushi (Uobei, Sushiro, Kura Sushi)",
                desc: "iPad ordering, plates zoom to your seat. Kids pick what they want. \u00a5100+ per plate. Fast, fun, and no stress.",
              },
              {
                title: "Okonomiyaki (Sakura Tei, Sometaro)",
                desc: "Cook at your table on a hot griddle. Interactive and fun. Kids love the process. English menus available.",
              },
              {
                title: "CoCo Ichibanya curry",
                desc: "Customize spice level, rice amount, and toppings. Kid-friendly mild option available. \u00a5800. Reliable and fast.",
              },
              {
                title: "Konbini (7-Eleven, Lawson, FamilyMart)",
                desc: "Onigiri, sandwiches, juice boxes, snacks. Never underestimate the konbini as a family lifeline. Available 24/7 everywhere.",
              },
              {
                title: "Department store food courts (depachika)",
                desc: "Variety solves every family argument. Everyone picks what they want. Takashimaya, Isetan, and Mitsukoshi all have excellent basement food halls.",
              },
              {
                title: "Yoshinoya / Sukiya gyudon",
                desc: "Fast, cheap, simple. Kids eat the rice and beef happily. \u00a5400\u2013600. No queue, no fuss.",
              },
            ],
          },
        ],
      },
      {
        id: "strollers",
        label: "LOGISTICS",
        title: "The Stroller Reality Check",
        content: [
          {
            type: "prose",
            text: "The honest truth: Tokyo with a stroller is manageable but not seamless.\n\nElevators exist at most major stations but they\u2019re often hidden, slow, and crowded. Budget an extra 10\u201315 minutes per station transfer when traveling with a stroller. JR stations are generally better than Metro stations for accessibility.\n\nThe good: sidewalks are smooth, konbini and department stores are stroller-friendly, buses have low floors, most tourist attractions are accessible.\n\nThe bad: rush hour trains (avoid 7:30\u20139:30 AM, 5:30\u20137 PM) are impossible with a stroller. Some smaller restaurants physically cannot fit one.",
          },
          {
            type: "tip",
            text: "Bring a lightweight, compact fold stroller \u2014 not your full-size travel system. For babies, a carrier or wrap is often faster than a stroller for temple visits and market areas. You\u2019ll switch between them throughout the day.",
          },
        ],
      },
      {
        id: "modified-itinerary",
        label: "FAMILY PLAN",
        title: "The Family 5-Day Itinerary",
        content: [
          {
            type: "prose",
            text: "A modified version of the main itinerary designed for families. Same neighborhoods, different pacing. Each day has one \u2018parents love it\u2019 activity and one \u2018kids love it\u2019 activity. Build in a 2-hour hotel break after lunch \u2014 nobody admits they need it, everybody does.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Day 1: Asakusa + Ueno",
                desc: "Senso-ji Temple (kids love the incense smoke and Nakamise snacks) \u2192 Kappabashi plastic food workshop \u2192 Ueno Zoo or one museum (pick ONE). Slower pace, earlier dinner.",
              },
              {
                title: "Day 2: teamLab + Odaiba",
                desc: "teamLab Planets in the morning (book first slot) \u2192 Odaiba for lunch (Unicorn Gundam statue, beach, Legoland if young kids). All kid-friendly, no rushing.",
              },
              {
                title: "Day 3: Harajuku + Shibuya",
                desc: "Meiji Jingu forest walk (let kids run on the wide gravel path) \u2192 Takeshita Street crepes and gachapon \u2192 Yoyogi Park for a break \u2192 Shibuya Sky at sunset.",
              },
              {
                title: "Day 4: Akihabara + Yanaka",
                desc: "Morning arcades and gachapon collecting in Akihabara \u2192 hotel for nap/rest \u2192 Yanaka in the afternoon (cats, street food, calm vibes).",
              },
              {
                title: "Day 5: Kamakura",
                desc: "Day trip: Great Buddha (go inside!), Hase-dera Temple, Komachi-dori street food, beach walk. Skip Enoshima \u2014 too ambitious with kids. Return early for a calm final evening.",
              },
            ],
          },
          {
            type: "tip",
            text: "3\u20134 activities per day max with kids. They need downtime. The hotel break after lunch is non-negotiable if you want everyone to still like each other by dinner.",
          },
        ],
      },
      {
        id: "tips",
        label: "PARENT TIPS",
        title: "Survival Tips from Parents Who\u2019ve Done It",
        content: [
          {
            type: "cards",
            items: [
              {
                title: "Pack snacks from home",
                desc: "For the plane and first day. Jet-lagged hungry kids in a foreign city = disaster. After day one, konbini takes over.",
              },
              {
                title: "Let kids pick one meal a day",
                desc: "Their choice. Even if it\u2019s McDonald\u2019s. Battles you don\u2019t need to fight on vacation.",
              },
              {
                title: "Carry a trash bag",
                desc: "Public bins are rare in Japan and kids generate a lot of wrappers. A small plastic bag in your daypack solves this.",
              },
              {
                title: "Gachapon = secret weapon",
                desc: "The \u00a5100\u2013300 capsule machines at every station are an instant mood reset. Budget \u00a52,000 for the week and let them go wild.",
              },
              {
                title: "Hotel laundry",
                desc: "Most business hotels have coin laundry. Pack light, wash mid-trip. Saves luggage space and sanity.",
              },
              {
                title: "Skip the 7-day plan",
                desc: "5 days max with kids. 3\u20134 activities per day. They need downtime and unstructured play. Over-scheduling is the #1 family travel mistake.",
              },
              {
                title: "Best souvenir strategy",
                desc: "Let each kid pick one item at each neighborhood. They\u2019ll remember the trip through the collection \u2014 and it teaches them to choose thoughtfully.",
              },
            ],
          },
          {
            type: "prose",
            text: "* Zero meltdowns not guaranteed. But if you pace the days right, keep snacks flowing, and let the gachapon machines do their work, you\u2019ll get close.",
          },
        ],
      },
    ],
    relatedGuides: ["first-time", "budget", "what-to-book"],
    relatedDays: [
      { num: "01", title: "ELECTRIC PULSE", slug: "1-day-tokyo-itinerary" },
      { num: "02", title: "OLD WORLD ZEN", slug: "2-day-tokyo-itinerary" },
      { num: "03", title: "CULTURE CIRCUIT", slug: "3-day-tokyo-itinerary" },
      { num: "04", title: "IMPERIAL CALM", slug: "4-day-tokyo-itinerary" },
      {
        num: "05",
        title: "COASTAL PILGRIMAGE",
        slug: "5-day-tokyo-itinerary",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}

export function getAllGuides(): Guide[] {
  return GUIDES;
}
