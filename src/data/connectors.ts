import type { Guide } from "./guides";

const ALL_DAYS = [
  { num: "01", title: "ELECTRIC PULSE", slug: "1-day-tokyo-itinerary" },
  { num: "02", title: "OLD WORLD ZEN", slug: "2-day-tokyo-itinerary" },
  { num: "03", title: "CULTURE CIRCUIT", slug: "3-day-tokyo-itinerary" },
  { num: "04", title: "IMPERIAL CALM", slug: "4-day-tokyo-itinerary" },
  { num: "05", title: "COASTAL PILGRIMAGE", slug: "5-day-tokyo-itinerary" },
  { num: "06", title: "MOUNTAIN SHRINE", slug: "6-day-tokyo-itinerary" },
  { num: "07", title: "HIDDEN FREQUENCIES", slug: "7-day-tokyo-itinerary" },
];

export const CONNECTOR_PAGES: Guide[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PAGE 1: TOKYO VS KYOTO
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tokyo-vs-kyoto",
    title: "Tokyo vs Kyoto",
    subtitle: "The modern megacity or the ancient capital — or both",
    metaTitle: "Tokyo vs Kyoto 2026 — Which to Visit (Or How to Do Both)",
    metaDescription:
      "Tokyo or Kyoto? Side-by-side comparison of vibe, food, cost, temples, and nightlife. Plus how to split your days if you're doing both. The honest answer for 2026.",
    ogTitle: "Tokyo vs Kyoto — Which Should You Visit?",
    keywords: [
      "Tokyo vs Kyoto",
      "Tokyo or Kyoto",
      "Tokyo and Kyoto",
      "Tokyo Kyoto comparison",
      "should I visit Tokyo or Kyoto",
    ],
    color: "#E53935",
    icon: "⚖️",
    stats: [
      { value: "2", label: "CITIES" },
      { value: "about 2h15m", label: "SHINKANSEN" },
      { value: "¥14,170", label: "ONE WAY" },
      { value: "BOTH", label: "ANSWER" },
    ],
    tableOfContents: [
      { id: "quick-answer", label: "The Quick Answer" },
      { id: "comparison", label: "Side-by-Side" },
      { id: "vibe", label: "Vibe & Personality" },
      { id: "food", label: "Food" },
      { id: "budget", label: "Cost" },
      { id: "how-to-split", label: "How to Split Your Days" },
      { id: "logistics", label: "Getting Between Them" },
    ],
    sections: [
      // ── Section 1: quick-answer ──
      {
        id: "quick-answer",
        label: "01",
        title: "The Honest Answer",
        content: [
          {
            type: "prose",
            text: "Visit both. Seriously. They're complementary, not competing. Tokyo is the future — neon, tech, pop culture, skyscrapers, the world's best food city. Kyoto is the past — 2,000 temples and shrines, geisha districts, bamboo forests, tea ceremonies, zen gardens. Together they give you the full Japan experience.\n\nIf you genuinely can only pick one:",
          },
          {
            type: "comparison",
            left: {
              label: "Pick Tokyo If",
              points: [
                "It's your first time in Japan",
                "You like cities and energy",
                "You want food variety",
                "You want nightlife",
                "You're traveling with kids or teens",
              ],
            },
            right: {
              label: "Pick Kyoto If",
              points: [
                "You've done Tokyo before",
                "You want temples and traditional culture",
                "You want a slower pace",
                "You're interested in Japanese history",
                "You prefer aesthetics over adrenaline",
              ],
            },
          },
          {
            type: "prose",
            text: "But really — the shinkansen is 2 hours 14 minutes. You can do both.",
          },
        ],
      },
      // ── Section 2: comparison ──
      {
        id: "comparison",
        label: "02",
        title: "Side-by-Side Comparison",
        content: [
          {
            type: "table",
            headers: ["Category", "Tokyo", "Kyoto"],
            rows: [
              ["Vibe", "Electric, chaotic, futuristic", "Serene, traditional, aesthetic"],
              ["Population", "14 million", "1.5 million"],
              ["Food scene", "World's most Michelin stars. Everything.", "Kaiseki, matcha, tofu, Nishiki Market"],
              ["Temples", "A few (Senso-ji, Meiji Jingu)", "2,000+ (Kinkaku-ji, Fushimi Inari, Kiyomizu)"],
              ["Nightlife", "Golden Gai, Kabukicho, Shibuya, Roppongi", "Gion bars, Pontocho alley (quiet by comparison)"],
              ["Shopping", "Harajuku, Akihabara, Ginza, Shibuya", "Nishiki Market, Teramachi, antique shops"],
              ["Nature", "Parks, day trips to coast/mountains", "Arashiyama bamboo, Philosopher's Path"],
              ["Best for", "First-timers, food lovers, pop culture, energy", "Culture seekers, photographers, temple lovers, romance"],
              ["Days needed", "3–5 (central) + 1–2 (day trips)", "3–4 (city) + 1 (Nara day trip)"],
              ["Daily budget", "¥7,000–30,000+", "¥6,000–25,000+ (slightly cheaper)"],
              ["Getting there", "2 airports (Narita, Haneda)", "Via Tokyo or Osaka (Kansai Airport)"],
            ],
          },
        ],
      },
      // ── Section 3: vibe ──
      {
        id: "vibe",
        label: "03",
        title: "Two Completely Different Japans",
        content: [
          {
            type: "prose",
            text: "Tokyo hits you immediately. You step out of Shinjuku Station and 3.6 million people are flowing around you, neon signs are stacked 10 stories high, and a yakitori alley from 1946 is wedged between two skyscrapers. It's overwhelming, exhilarating, and exhausting — and that's just the first hour.\n\nKyoto is a slow exhale. You walk through a torii gate into a bamboo forest and the only sound is wind through the stalks. A geisha crosses a stone bridge at dusk. A temple garden has been raked into perfect circles for 500 years. It's meditative, beautiful, and occasionally boring — depending on your travel personality.\n\nNeither is 'better Japan.' They're different Japans. The traveler who says 'I didn't like Kyoto' usually means 'I spent too many days there after Tokyo and the pace shift was jarring.' The fix isn't skipping Kyoto — it's pacing your trip correctly.",
          },
        ],
      },
      // ── Section 4: food ──
      {
        id: "food",
        label: "04",
        title: "The Food Difference",
        content: [
          {
            type: "prose",
            text: "Tokyo is the world's greatest food city by objective metrics (more Michelin stars than any city on earth) and by sheer variety — ramen, sushi, tempura, yakitori, tonkatsu, gyudon, curry, izakaya, okonomiyaki, and every international cuisine. You could eat three meals a day for a month and never repeat a restaurant.\n\nKyoto's food is narrower but deeper. Kaiseki (multi-course Japanese haute cuisine) was born here. Kyoto's tofu is legendary — silky, fresh, prepared in ways you didn't know tofu could achieve. Matcha from Uji (just south of Kyoto) is the world's finest. Nishiki Market is smaller than Tsukiji but more curated.\n\nThe honest take: if food is your primary motivation, Tokyo wins on breadth and bang-for-yen. If you want refined, traditional Japanese cuisine as an art form, Kyoto wins.",
          },
          {
            type: "tip",
            text: "Read our complete Tokyo food guide for 42 restaurant recommendations across every neighborhood and price range → /guides/where-to-eat",
          },
        ],
      },
      // ── Section 5: budget ──
      {
        id: "budget",
        label: "05",
        title: "Cost Comparison",
        content: [
          {
            type: "table",
            headers: ["Category", "Tokyo", "Kyoto"],
            rows: [
              ["Budget meal", "¥500–1,000", "¥500–800"],
              ["Mid-range dinner", "¥2,000–5,000", "¥2,000–4,000"],
              ["Transit/day", "¥800–1,500", "¥500–1,000 (buses, bikes)"],
              ["Accommodation (mid)", "¥10,000–20,000/night", "¥8,000–15,000/night"],
              ["Top attraction", "¥2,000–3,800", "¥400–600 (most temples)"],
            ],
          },
          {
            type: "prose",
            text: "Kyoto is 10–20% cheaper than Tokyo for most categories. Temple entry fees are remarkably cheap (¥400–600). But if you do a ryokan stay with kaiseki dinner, that's ¥30,000–80,000/night — easily the most expensive single night of a Japan trip.",
          },
          {
            type: "tip",
            text: "For detailed Tokyo costs, see our budget guide → /guides/budget",
          },
        ],
      },
      // ── Section 6: how-to-split ──
      {
        id: "how-to-split",
        label: "06",
        title: "How to Split Your Days",
        content: [
          {
            type: "table",
            headers: ["Total Trip", "Tokyo", "Travel", "Kyoto", "Notes"],
            rows: [
              ["7 days", "4 days", "1 day", "2 days", "Minimum Kyoto. Hit highlights only."],
              ["10 days", "5 days", "1 day", "4 days", "Sweet spot. Full Tokyo + proper Kyoto + Nara day trip."],
              ["14 days", "5–6 days", "1 day", "4 days + 3 Osaka", "The full experience. Add Osaka."],
            ],
          },
          {
            type: "prose",
            text: "The most common mistake: spending too many days in Kyoto. 3–4 days is the sweet spot. After that, temple fatigue is real — they start blending together. Tokyo has more variety to sustain 5–7 days without repetition.\n\n**Recommended split for 10 days:**\n\nDays 1–5: Tokyo (use the 5-day itinerary)\nDay 6: Shinkansen to Kyoto (about 2h15m), afternoon in Gion\nDays 7–9: Kyoto (temples, Arashiyama, Nara day trip)\nDay 10: Kyoto → Kansai Airport, or continue to Osaka",
          },
        ],
      },
      // ── Section 7: logistics ──
      {
        id: "logistics",
        label: "07",
        title: "Getting Between Tokyo and Kyoto",
        content: [
          {
            type: "prose",
            text: "Shinkansen (bullet train) is the only sensible option. Nozomi is fastest at about 2h15m. Hikari takes 2h40m but is covered by JR Pass. Kodama is slow (3h40m) — skip it.",
          },
          {
            type: "table",
            headers: ["Train", "Time", "Cost", "JR Pass"],
            rows: [
              ["Nozomi", "about 2h15m", "¥14,170", "❌ Not covered"],
              ["Hikari", "2h40m", "¥14,170", "✅ Covered"],
              ["Kodama", "3h40m", "¥14,170", "✅ Covered"],
            ],
          },
          {
            type: "prose",
            text: "Book: no reservation needed — just tap Suica/buy ticket and get on. Reserved seats recommended during peak seasons (Golden Week, Obon, New Year).\n\n**JR Pass math:** A 7-day JR Pass is ¥50,000. Tokyo→Kyoto round trip on Hikari is ¥28,340. Add in-Tokyo JR rides (~¥3,000) and a Kamakura day trip (~¥1,900) = ¥33,240. Still under ¥50,000. The JR Pass only makes sense if you're also going to Osaka, Hiroshima, or doing multiple long-distance trips.",
          },
          {
            type: "tip",
            text: "For the complete shinkansen step-by-step, see our Tokyo to Kyoto transit guide → /japan/tokyo-to-kyoto",
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget", "day-trips"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE 2: TOKYO TO KYOTO
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tokyo-to-kyoto",
    title: "Tokyo to Kyoto",
    subtitle: "Shinkansen, timing, and what to do when you arrive",
    metaTitle: "Tokyo to Kyoto 2026 — Shinkansen Guide, Cost & What to Know",
    metaDescription:
      "How to get from Tokyo to Kyoto by shinkansen: times, costs, JR Pass math, which train to take, what to do on arrival, and how to plan the transition day.",
    ogTitle: "Tokyo to Kyoto — The Complete Transit Guide",
    keywords: [
      "Tokyo to Kyoto",
      "shinkansen Tokyo Kyoto",
      "Tokyo to Kyoto bullet train",
      "Tokyo to Kyoto cost",
      "Tokyo to Kyoto time",
    ],
    color: "#1565C0",
    icon: "🚅",
    stats: [
      { value: "about 2h15m", label: "FASTEST" },
      { value: "¥14,170", label: "ONE WAY" },
      { value: "3", label: "TRAIN OPTIONS" },
      { value: "1", label: "BEST SEAT" },
    ],
    tableOfContents: [
      { id: "options", label: "Your Options" },
      { id: "step-by-step", label: "Step-by-Step" },
      { id: "jr-pass", label: "JR Pass Decision" },
      { id: "seat-hack", label: "The Fuji Seat Hack" },
      { id: "transition-day", label: "The Transition Day Plan" },
      { id: "from-kyoto", label: "Coming Back" },
    ],
    sections: [
      // ── Section 1: options ──
      {
        id: "options",
        label: "01",
        title: "Three Trains, One Clear Winner",
        content: [
          {
            type: "table",
            headers: ["Train", "Time", "Cost", "JR Pass", "Best For"],
            rows: [
              ["Nozomi", "about 2h15m", "¥14,170", "❌", "Speed. Most departures (3–6/hour)."],
              ["Hikari", "2h40m", "¥14,170", "✅", "JR Pass holders. Same price, slightly slower."],
              ["Kodama", "3h40m", "¥14,170", "✅", "Nobody. Stops at every station."],
            ],
          },
          {
            type: "prose",
            text: "Take the Nozomi unless you have a JR Pass. Similar price, about 25 minutes faster, way more departures. If you have a JR Pass, take the Hikari — same comfort, just a couple extra stops.",
          },
          {
            type: "tip",
            text: "Don't bother with flights. By the time you factor in airport transit, check-in, and security, flying takes longer and costs more. The shinkansen is city center to city center.",
          },
        ],
      },
      // ── Section 2: step-by-step ──
      {
        id: "step-by-step",
        label: "02",
        title: "How to Actually Do It",
        content: [
          {
            type: "checklist",
            items: [
              { text: "Go to Tokyo Station (JR lines, Marunouchi side). Follow signs for 'Shinkansen' — look for the green JR signs.", checked: true },
              { text: "Buy ticket: A regular Suica alone won't work on the shinkansen — buy a ticket at the counter, use a ticket machine, or register your Suica in the SmartEX app (reserve from your phone, board using QR code or registered IC card).", checked: true },
              { text: "Choose unreserved (jiyuseki) or reserved (shiteiseki). Unreserved is fine outside peak seasons — just queue at the platform. Reserved guarantees a seat.", checked: true },
              { text: "Go to platforms 14–19 (Tokaido Shinkansen). Check the departure board for your train.", checked: true },
              { text: "Board. Stow luggage in overhead rack or the space behind the last row of seats. Large suitcases: use the luggage reservation area (newer trains have designated spots).", checked: true },
              { text: "Arrive Kyoto Station about 2h15m later. You're in the center of the city.", checked: true },
            ],
          },
          {
            type: "warning",
            text: "During Golden Week (late April–early May), Obon (mid-August), and New Year (Dec 28–Jan 4), unreserved cars can be standing-room-only. Reserve seats during these periods.",
          },
        ],
      },
      // ── Section 3: jr-pass ──
      {
        id: "jr-pass",
        label: "03",
        title: "The JR Pass Math (Again)",
        content: [
          {
            type: "prose",
            text: "The JR Pass question comes down to: are you doing enough long-distance JR travel to justify ¥50,000?",
          },
          {
            type: "table",
            headers: ["Your Trip", "JR Cost Without Pass", "Pass Worth It?"],
            rows: [
              ["Tokyo (5 days) + Kyoto (3 days)", "~¥31,000 (RT shinkansen + local JR)", "❌ No"],
              ["Tokyo + Kyoto + Nara", "~¥33,000", "❌ Still no"],
              ["Tokyo + Kyoto + Osaka", "~¥42,000", "⚠️ Close"],
              ["Tokyo + Kyoto + Osaka + Hiroshima", "~¥65,000", "✅ Yes"],
              ["Golden Route (Tokyo→Kyoto→Osaka→Tokyo)", "~¥56,000", "✅ Yes"],
            ],
          },
          {
            type: "prose",
            text: "**Bottom line:** Tokyo + Kyoto alone does NOT justify a JR Pass. You need a third city or long-distance side trip to break even.",
          },
        ],
      },
      // ── Section 4: seat-hack ──
      {
        id: "seat-hack",
        label: "04",
        title: "The Mt. Fuji Seat Hack",
        content: [
          {
            type: "prose",
            text: "If you're taking the shinkansen from Tokyo to Kyoto, sit on the **RIGHT side** of the train (seats D and E, window is E). About 40–50 minutes into the journey, you'll pass through Shizuoka Prefecture with a clear view of Mt. Fuji — if it's not cloudy.\n\nComing back from Kyoto to Tokyo: sit on the **LEFT side** (seats A and B, window is A).\n\nThis only works on clear days. Check the weather in Shizuoka before choosing your seat. On overcast days, sit wherever you want — you won't see it.",
          },
          {
            type: "tip",
            text: "The Fuji view lasts about 3–5 minutes. Have your camera ready around the 45-minute mark. The train doesn't slow down.",
          },
        ],
      },
      // ── Section 5: transition-day ──
      {
        id: "transition-day",
        label: "05",
        title: "What to Do on the Day You Travel",
        content: [
          {
            type: "prose",
            text: "Don't waste a full day on transit. The shinkansen is only about 2h15m — you can do a half-day in Tokyo AND a half-day in Kyoto.",
          },
          {
            type: "checklist",
            items: [
              { text: "Morning: final Tokyo activity (Tsukiji market breakfast, or revisit a favorite neighborhood)", checked: true },
              { text: "11:00–12:00: shinkansen from Tokyo Station", checked: true },
              { text: "13:15–14:00: arrive Kyoto Station, drop bags at hotel (most hotels hold luggage even before check-in)", checked: true },
              { text: "14:30: afternoon in Kyoto — Fushimi Inari (the torii gate tunnel, best in afternoon light) or Nishiki Market", checked: true },
              { text: "Evening: dinner in Gion, walk along the Kamo River", checked: true },
            ],
          },
          {
            type: "tip",
            text: "This is the plan the 2-week itinerary uses → /japan/2-week-japan-itinerary",
          },
        ],
      },
      // ── Section 6: from-kyoto ──
      {
        id: "from-kyoto",
        label: "06",
        title: "Coming Back (Or Continuing to Osaka)",
        content: [
          {
            type: "prose",
            text: "**If returning to Tokyo:** same shinkansen, same stations, reverse direction. Sit on the LEFT for Mt. Fuji.\n\n**If continuing to Osaka:** JR Special Rapid from Kyoto Station to Osaka Station, 29 minutes, ¥580. Covered by JR Pass. No shinkansen needed — it's that close. Many travelers do Kyoto + Osaka together and fly home from Kansai Airport (KIX).",
          },
          {
            type: "tip",
            text: "Planning the full Tokyo → Kyoto → Osaka route? See our Tokyo to Osaka guide → /japan/tokyo-to-osaka",
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE 3: TOKYO TO OSAKA
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "tokyo-to-osaka",
    title: "Tokyo to Osaka",
    subtitle: "Shinkansen, budget flights, and why to stop in Kyoto",
    metaTitle: "Tokyo to Osaka 2026 — Shinkansen, Flights & How to Plan the Route",
    metaDescription:
      "How to get from Tokyo to Osaka: shinkansen (2.5 hrs), budget flights, and the smart move — stop in Kyoto on the way. Costs, timing, and route planning for 2026.",
    ogTitle: "Tokyo to Osaka — Transit Options & Route Planning",
    keywords: [
      "Tokyo to Osaka",
      "Tokyo to Osaka shinkansen",
      "Tokyo to Osaka flight",
      "Tokyo Osaka bullet train",
      "Tokyo to Osaka cost",
    ],
    color: "#F57C00",
    icon: "🚅",
    stats: [
      { value: "2h30m", label: "SHINKANSEN" },
      { value: "¥14,500", label: "ONE WAY" },
      { value: "29min", label: "KYOTO→OSAKA" },
      { value: "¥3,000", label: "BUDGET FLIGHT" },
    ],
    tableOfContents: [
      { id: "options", label: "All Your Options" },
      { id: "shinkansen", label: "Shinkansen Details" },
      { id: "flights", label: "Budget Flights" },
      { id: "stop-in-kyoto", label: "The Kyoto Stop" },
      { id: "osaka-arrival", label: "Arriving in Osaka" },
      { id: "route-planning", label: "Route Planning" },
    ],
    sections: [
      // ── Section 1: options ──
      {
        id: "options",
        label: "01",
        title: "All Your Options",
        content: [
          {
            type: "table",
            headers: ["Option", "Time", "Cost", "Best For"],
            rows: [
              ["Shinkansen (Nozomi)", "2h30m", "¥14,500", "Speed, comfort, no luggage hassle"],
              ["Shinkansen (Hikari)", "2h55m", "¥14,500", "JR Pass holders"],
              ["Budget flight (Peach, Jetstar)", "1h15m + 2h transit", "¥3,000–8,000", "Budget travelers booking 3+ weeks ahead"],
              ["Highway bus", "8–9 hours", "¥3,000–6,000", "Budget travelers with time, overnight option"],
            ],
          },
          {
            type: "prose",
            text: "The shinkansen is the default answer. But if you booked a ¥3,000 Peach flight 4 weeks ago, the flight is viable — just know you're trading 2 hours of airport overhead for the savings.",
          },
        ],
      },
      // ── Section 2: shinkansen ──
      {
        id: "shinkansen",
        label: "02",
        title: "Bullet Train Details",
        content: [
          {
            type: "prose",
            text: "The Tokaido Shinkansen runs from Tokyo Station to Shin-Osaka Station. Same line as Tokyo-to-Kyoto — the train just continues 15 minutes past Kyoto.",
          },
          {
            type: "checklist",
            items: [
              { text: "Nozomi: 2h30m to Shin-Osaka Station. Fastest, most frequent (3–6/hour).", checked: true },
              { text: "Same booking process: ticket counter, machine, or SmartEX app", checked: true },
              { text: "Shin-Osaka is NOT central Osaka — Take the Midosuji Line subway from Shin-Osaka to Umeda (6 min) or Namba (16 min)", checked: true },
              { text: "JR Pass: covers Hikari but not Nozomi (same rule as Tokyo-Kyoto)", checked: true },
            ],
          },
          {
            type: "tip",
            text: "Shin-Osaka to Namba (the main tourist area) is just 6 stops on the Midosuji subway line. ¥280, Suica works.",
          },
        ],
      },
      // ── Section 3: flights ──
      {
        id: "flights",
        label: "03",
        title: "Budget Flights (Sometimes Worth It)",
        content: [
          {
            type: "prose",
            text: "Peach Aviation and Jetstar Japan fly Tokyo (Narita or Haneda Terminal 3) to Kansai Airport (KIX).\n\n**The math:**\n\nFlight: ¥3,000–8,000 if booked 3+ weeks ahead\nNarita access from central Tokyo: ¥1,270–3,250, 60–90 min\nKIX to central Osaka: ¥1,500 (Nankai Rapi:t), 34–40 min\nTotal door-to-door: 4–5 hours\nTotal cost: ¥5,770–12,500\n\nCompare: Shinkansen is ¥14,500 and 2.5 hours city-center to city-center. The flight only wins on price if you booked cheap and early. It never wins on time.",
          },
          {
            type: "tip",
            text: "If you're ending your Japan trip in Osaka and flying home from KIX, the smart move is shinkansen Tokyo → Kyoto (stop 2–3 days) → local train to Osaka (stop 2–3 days) → KIX. No backtracking.",
          },
        ],
      },
      // ── Section 4: stop-in-kyoto ──
      {
        id: "stop-in-kyoto",
        label: "04",
        title: "The Smart Route: Stop in Kyoto",
        content: [
          {
            type: "prose",
            text: "Here's the thing most people don't realize: Kyoto is ON THE WAY from Tokyo to Osaka. The shinkansen from Tokyo stops at Kyoto Station before continuing to Shin-Osaka. Kyoto to Osaka is just 29 minutes by local JR train.\n\nInstead of Tokyo → Osaka direct, do:",
          },
          {
            type: "checklist",
            items: [
              { text: "Tokyo → Kyoto (about 2h15m shinkansen)", checked: true },
              { text: "Spend 2–4 days in Kyoto", checked: true },
              { text: "Kyoto → Osaka (29 min JR, ¥580)", checked: true },
              { text: "Spend 2–3 days in Osaka", checked: true },
              { text: "Fly home from Kansai Airport", checked: true },
            ],
          },
          {
            type: "prose",
            text: "This is the Golden Route — and it doesn't cost any extra on the shinkansen because you would've passed through Kyoto anyway.",
          },
          {
            type: "tip",
            text: "See the full Golden Route breakdown → /japan/golden-route",
          },
        ],
      },
      // ── Section 5: osaka-arrival ──
      {
        id: "osaka-arrival",
        label: "05",
        title: "Arriving in Osaka",
        content: [
          {
            type: "prose",
            text: "Shin-Osaka Station (shinkansen) is in the north of the city. Most tourists stay in Namba/Dotonbori (south-central). Take the Midosuji Line subway from Shin-Osaka to Namba: 16 min, ¥280. Suica works.\n\n**First impressions:** Osaka is louder, friendlier, and funnier than Tokyo. The food is street-first: takoyaki (octopus balls), okonomiyaki (Osaka-style), and kushikatsu (fried skewers) everywhere. Osaka people will actually talk to you. After Tokyo's polite distance, this is a culture shock in the best way.",
          },
          {
            type: "tip",
            text: "Osaka's full itinerary is coming soon at osakaitinerary.com — stay tuned for the complete neighborhood-by-neighborhood guide.",
          },
        ],
      },
      // ── Section 6: route-planning ──
      {
        id: "route-planning",
        label: "06",
        title: "Building Your Japan Route",
        content: [
          {
            type: "table",
            headers: ["Route", "Days", "Flow"],
            rows: [
              ["Tokyo + Kyoto", "7–10", "Tokyo (4–5) → shinkansen → Kyoto (3–4). Fly in/out Tokyo."],
              ["Golden Route", "10–14", "Tokyo (4–5) → Kyoto (3–4) → Osaka (2–3). Fly in Tokyo, out KIX."],
              ["Full circle", "14+", "Tokyo → Kyoto → Osaka → [Hiroshima?] → Tokyo. JR Pass makes sense."],
              ["Osaka base", "5–7", "Osaka (2–3) + Kyoto day trips (2) + Nara (1). Fly in/out KIX."],
            ],
          },
          {
            type: "prose",
            text: "The Golden Route is the most popular for a reason — it gives you three completely different cities in a natural geographic flow with zero backtracking.",
          },
          {
            type: "tip",
            text: "See the complete day-by-day plan → /japan/golden-route and /japan/2-week-japan-itinerary",
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE 4: 2-WEEK JAPAN ITINERARY
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "2-week-japan-itinerary",
    title: "2 Weeks in Japan",
    subtitle: "Tokyo · Kyoto · Osaka — the complete 14-day plan",
    metaTitle: "2-Week Japan Itinerary 2026 — Tokyo, Kyoto & Osaka Day-by-Day",
    metaDescription:
      "The complete 14-day Japan itinerary for 2026. 5 days Tokyo, 4 days Kyoto, 3 days Osaka, plus travel days. Every restaurant named. Every train timed. Locally audited.",
    ogTitle: "2-Week Japan Itinerary — The Complete 14-Day Plan",
    keywords: [
      "2 week Japan itinerary",
      "14 days Japan",
      "Japan travel plan",
      "Japan itinerary 2026",
      "Tokyo Kyoto Osaka itinerary",
    ],
    color: "#E53935",
    icon: "🇯🇵",
    stats: [
      { value: "14", label: "DAYS" },
      { value: "3", label: "CITIES" },
      { value: "¥150K", label: "EST. BUDGET" },
      { value: "1", label: "EPIC TRIP" },
    ],
    tableOfContents: [
      { id: "overview", label: "The Overview" },
      { id: "tokyo", label: "Days 1–5: Tokyo" },
      { id: "travel-day", label: "Day 6: Tokyo → Kyoto" },
      { id: "kyoto", label: "Days 7–10: Kyoto" },
      { id: "osaka", label: "Days 11–13: Osaka" },
      { id: "departure", label: "Day 14: Departure" },
      { id: "budget", label: "14-Day Budget" },
      { id: "jr-pass", label: "JR Pass Verdict" },
      { id: "packing", label: "Packing for 2 Weeks" },
    ],
    sections: [
      // ── Section 1: overview ──
      {
        id: "overview",
        label: "01",
        title: "The Shape of 14 Days",
        content: [
          {
            type: "table",
            headers: ["Days", "City", "Theme"],
            rows: [
              ["1–5", "Tokyo", "The future. Neon, food, pop culture."],
              ["6", "Travel", "Shinkansen → Kyoto. Half-day in each city."],
              ["7–10", "Kyoto", "The past. Temples, gardens, geisha districts."],
              ["11–13", "Osaka", "The appetite. Street food, nightlife, energy."],
              ["14", "Departure", "Fly from KIX (Kansai Airport)."],
            ],
          },
          {
            type: "prose",
            text: "**Fly INTO Tokyo** (Narita or Haneda). **Fly OUT of Osaka** (Kansai). No backtracking. This one-way routing saves a full day of travel.",
          },
          {
            type: "warning",
            text: "Book an open-jaw flight: arriving Tokyo, departing Osaka. Most airlines offer this at the same price as a round trip. Check on Google Flights or Skyscanner.",
          },
        ],
      },
      // ── Section 2: tokyo ──
      {
        id: "tokyo",
        label: "02",
        title: "Days 1–5: Tokyo",
        content: [
          {
            type: "prose",
            text: "Use the **5-day Tokyo itinerary** from this site. It's already built, timed, and audited:",
          },
          {
            type: "checklist",
            items: [
              { text: "Day 1: ELECTRIC PULSE — Asakusa, Harajuku, Shibuya, Shinjuku", checked: true },
              { text: "Day 2: OLD WORLD ZEN — teamLab Planets, Tsukiji, Ginza", checked: true },
              { text: "Day 3: CULTURE CIRCUIT — Ueno, Akihabara, Yanaka", checked: true },
              { text: "Day 4: IMPERIAL CALM — Imperial Palace, Shinjuku Gyoen, sunset at Metro Govt Building", checked: true },
              { text: "Day 5: COASTAL PILGRIMAGE — Kamakura day trip (Great Buddha, Hase-dera, ocean)", checked: true },
            ],
          },
          {
            type: "prose",
            text: "That's 23 stops, 30 food picks, and every train timed.",
          },
          {
            type: "tip",
            text: "See the full 5-day Tokyo itinerary → /5-day-tokyo-itinerary",
          },
        ],
      },
      // ── Section 3: travel-day ──
      {
        id: "travel-day",
        label: "03",
        title: "Day 6: The Transition",
        content: [
          {
            type: "prose",
            text: "**Morning:** final Tokyo stop. Tsukiji for one last market breakfast, or revisit your favorite neighborhood.",
          },
          {
            type: "checklist",
            items: [
              { text: "11:30: Shinkansen from Tokyo Station → Kyoto Station (arrive ~13:45). Sit on the RIGHT side for Mt. Fuji views.", checked: true },
              { text: "14:30: Drop bags at Kyoto hotel. Head to Fushimi Inari — the iconic orange torii gate tunnel. Late afternoon light is magical and the crowds thin as you climb higher.", checked: true },
              { text: "19:00: Walk to Gion for dinner. The geisha district at dusk is one of Japan's most atmospheric moments.", checked: true },
            ],
          },
          {
            type: "tip",
            text: "For the complete Tokyo-to-Kyoto transit guide, see → /japan/tokyo-to-kyoto",
          },
        ],
      },
      // ── Section 4: kyoto ──
      {
        id: "kyoto",
        label: "04",
        title: "Days 7–10: Kyoto",
        content: [
          {
            type: "prose",
            text: "Kyoto's itinerary will be fully detailed on kyotoitinerary.com (coming soon). Here's the framework:",
          },
          {
            type: "cards",
            items: [
              { title: "Day 7 — Higashiyama", desc: "Kiyomizu-dera Temple (iconic cliff terrace), Ninenzaka and Sannenzaka lanes (photogenic stone steps), Gion evening walk" },
              { title: "Day 8 — Arashiyama", desc: "Bamboo grove (go at 7 AM), Tenryu-ji Temple garden, monkey park (great views), tofu lunch at Sagano" },
              { title: "Day 9 — Northern Kyoto", desc: "Kinkaku-ji (Golden Pavilion), Ryoan-ji (zen rock garden), Daitoku-ji (sub-temples with tea). Nishiki Market for dinner." },
              { title: "Day 10 — Nara Day Trip", desc: "Todai-ji Temple (one of the world's largest wooden buildings), friendly deer park (over 1,400 free-roaming deer), Kasuga Taisha shrine. 45 min from Kyoto by JR." },
            ],
          },
          {
            type: "prose",
            text: "**Key Kyoto tips:**\n\nTemples open early (8–9 AM) and close by 5 PM. Start early.\nRent a bicycle — Kyoto is flat and bike-friendly. Better than buses.\nBuses are the main transit (unlike Tokyo's trains). Get a Subway & Bus 1-Day Pass (¥1,100).\nKyoto is much smaller than Tokyo. 2–3 temples per day is plenty.",
          },
        ],
      },
      // ── Section 5: osaka ──
      {
        id: "osaka",
        label: "05",
        title: "Days 11–13: Osaka",
        content: [
          {
            type: "prose",
            text: "Take the JR Special Rapid from Kyoto to Osaka (29 min, ¥580). Osaka is Japan's food capital — specifically its street food capital.",
          },
          {
            type: "cards",
            items: [
              { title: "Day 11 — Dotonbori & Namba", desc: "Glico Running Man sign, canal walk, takoyaki crawl, Shinsekai (retro district, kushikatsu), Osaka Castle" },
              { title: "Day 12 — Kuromon & Neighborhoods", desc: "Kuromon Market (Osaka's kitchen), Amerikamura (Osaka's Harajuku), Umeda Sky Building (floating observatory), Shinsaibashi shopping" },
              { title: "Day 13 — Flex Day", desc: "Revisit favorites, Namba Yasaka Shrine (lion head shrine, great photo), Tennoji area, or half-day trip to Kobe (30 min) for Kobe beef" },
            ],
          },
          {
            type: "prose",
            text: "**Key Osaka tips:**\n\nOsaka people are friendlier and louder than Tokyo/Kyoto. They'll actually joke with you.\nEating while walking IS acceptable in Dotonbori (unlike most of Japan).\nOsaka is cheaper than Tokyo: budget ¥5,000–8,000/day for food.\nStay in Namba or Shinsaibashi — walking distance to everything.",
          },
          {
            type: "tip",
            text: "Osaka's full itinerary is coming soon at osakaitinerary.com — stay tuned for the complete guide.",
          },
        ],
      },
      // ── Section 6: departure ──
      {
        id: "departure",
        label: "06",
        title: "Day 14: Flying Home",
        content: [
          {
            type: "prose",
            text: "Fly from Kansai International Airport (KIX).",
          },
          {
            type: "table",
            headers: ["From", "Train", "Time", "Cost"],
            rows: [
              ["Namba", "Nankai Rapi:t express", "34–40 min", "¥1,490"],
              ["Osaka Station", "JR Haruka", "50 min", "¥1,800"],
            ],
          },
          {
            type: "prose",
            text: "Both accept Suica/ICOCA. Budget 2.5 hours from hotel to gate (Japanese airports are efficient but international security still takes time).\n\n**Last-minute souvenirs:** KIX has an excellent duty-free section with Japanese whisky, Kit-Kat flavors, and beauty products.",
          },
        ],
      },
      // ── Section 7: budget ──
      {
        id: "budget",
        label: "07",
        title: "14-Day Budget Estimate",
        content: [
          {
            type: "table",
            headers: ["Category", "Budget", "Mid-Range", "Comfort"],
            rows: [
              ["Flights (round trip)", "¥100,000–150,000", "¥150,000–200,000", "¥200,000+"],
              ["Accommodation (13 nights)", "¥40,000–80,000", "¥130,000–260,000", "¥300,000+"],
              ["Food (14 days)", "¥50,000–70,000", "¥110,000–170,000", "¥210,000+"],
              ["Transport (JR Pass + local)", "¥55,000–65,000", "¥55,000–65,000", "¥70,000+"],
              ["Activities", "¥10,000–20,000", "¥25,000–40,000", "¥50,000+"],
              ["Total (excl. flights)", "¥155,000–235,000", "¥320,000–535,000", "¥630,000+"],
              ["In USD (approx)", "$1,030–1,570", "$2,130–3,570", "$4,200+"],
            ],
          },
          {
            type: "prose",
            text: "Japan is remarkably affordable at the budget level. The ¥155,000 ($1,030) budget tier is genuinely comfortable — you're staying in clean hostels, eating incredible ¥800 ramen and ¥500 konbini meals, and seeing everything.",
          },
        ],
      },
      // ── Section 8: jr-pass ──
      {
        id: "jr-pass",
        label: "08",
        title: "JR Pass: Yes for This Trip",
        content: [
          {
            type: "prose",
            text: "For the full Golden Route (Tokyo → Kyoto → Osaka, one-way), let's do the math on the 14-day JR Pass (¥80,000):",
          },
          {
            type: "table",
            headers: ["What It Covers", "Cost Without Pass"],
            rows: [
              ["Tokyo → Kyoto (Hikari shinkansen)", "¥14,170"],
              ["Tokyo local JR rides (5 days)", "~¥3,000"],
              ["Kamakura day trip (Day 5)", "¥1,900"],
              ["Kyoto → Nara (Day 10)", "¥720"],
              ["Kyoto → Osaka (Day 11)", "¥580"],
              ["Osaka local JR rides (3 days)", "~¥1,500"],
              ["Osaka → KIX (Haruka)", "¥1,210"],
              ["Total JR cost without pass", "~¥23,080"],
            ],
          },
          {
            type: "prose",
            text: "Wait — that's only ¥23,080 vs ¥80,000 for the pass. The 14-day pass doesn't make sense for this one-way route.\n\nThe 7-day pass (¥50,000) timed for the Kyoto → Osaka → departure leg doesn't cover enough either.\n\n**Verdict:** Skip the JR Pass for this specific route. Buy individual tickets. The pass only pays off if you add Hiroshima (¥20,000+ RT from Osaka) or double back to Tokyo.",
          },
          {
            type: "warning",
            text: "This is counterintuitive. Everyone assumes the JR Pass is a must for 2 weeks in Japan. For a one-way Tokyo → Kyoto → Osaka route, it's actually a bad deal. Do the math for YOUR specific route.",
          },
        ],
      },
      // ── Section 9: packing ──
      {
        id: "packing",
        label: "09",
        title: "Packing for 2 Weeks in 1 Bag",
        content: [
          {
            type: "cards",
            items: [
              { title: "Pack Light", desc: "Japanese hotel rooms are tiny. A 40L backpack or small rolling carry-on is ideal." },
              { title: "Laundry", desc: "Almost every hotel has coin laundry (¥200–300/load). Pack 5 days of clothes, wash mid-trip." },
              { title: "Walking Shoes", desc: "Non-negotiable. You'll walk 15,000–25,000 steps/day. Break them in before the trip." },
              { title: "Rain Layer", desc: "A compact rain jacket or small umbrella. Konbini sells transparent umbrellas for ¥500." },
              { title: "Power", desc: "Japan uses Type A plugs (same as US). Voltage is 100V — most modern electronics handle this fine." },
              { title: "Cash Bag", desc: "A small pouch for yen coins. You'll accumulate a lot of change." },
            ],
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget", "first-time"],
    relatedDays: ALL_DAYS,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE 5: JAPAN GOLDEN ROUTE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "golden-route",
    title: "Japan Golden Route",
    subtitle: "Tokyo → Hakone → Kyoto → Nara → Osaka in 10–14 days",
    metaTitle: "Japan Golden Route 2026 — Tokyo, Kyoto & Osaka Classic Itinerary",
    metaDescription:
      "The classic first-time Japan route: Tokyo → Hakone → Kyoto → Nara → Osaka. 10–14 day framework with transit, costs, and the JR Pass decision. 2026 edition.",
    ogTitle: "Japan Golden Route — The Classic First-Timer Itinerary",
    keywords: [
      "Japan Golden Route",
      "Tokyo Kyoto Osaka itinerary",
      "first time Japan itinerary",
      "Japan classic route",
      "Japan 10 day itinerary",
    ],
    color: "#FF6F00",
    icon: "🏯",
    stats: [
      { value: "5", label: "STOPS" },
      { value: "10–14", label: "DAYS" },
      { value: "600km", label: "DISTANCE" },
      { value: "#1", label: "FIRST-TIMER ROUTE" },
    ],
    tableOfContents: [
      { id: "what-is-it", label: "What Is the Golden Route?" },
      { id: "route-map", label: "The Route" },
      { id: "day-allocation", label: "How to Split Your Days" },
      { id: "hakone", label: "The Hakone Addition" },
      { id: "nara", label: "The Nara Side Trip" },
      { id: "transport", label: "Transport Plan" },
      { id: "vs-2-week", label: "Golden Route vs 2-Week Plan" },
    ],
    sections: [
      // ── Section 1: what-is-it ──
      {
        id: "what-is-it",
        label: "01",
        title: "The Route Everyone Does (For Good Reason)",
        content: [
          {
            type: "prose",
            text: "The Golden Route is Japan's most popular first-timer itinerary: Tokyo → Kyoto → Osaka, with optional stops in Hakone (hot springs, Mt. Fuji views) and Nara (friendly deer, giant Buddha). It traces a path from east to west along the Pacific coast, connecting Japan's three biggest cultural poles.\n\nIt's called the Golden Route because every stop is gold: Tokyo gives you the future, Kyoto gives you the past, and Osaka gives you the food. Add Hakone for nature and Nara for one of Japan's most charming day trips.",
          },
        ],
      },
      // ── Section 2: route-map ──
      {
        id: "route-map",
        label: "02",
        title: "The Stops",
        content: [
          {
            type: "table",
            headers: ["Stop", "Days", "Why", "Getting There"],
            rows: [
              ["Tokyo", "4–5", "Neon, food, pop culture, modern Japan", "Fly into Narita or Haneda"],
              ["Hakone (optional)", "1–2", "Hot springs, Mt. Fuji views, pirate ship, open-air museum", "Odakyu from Shinjuku, 90 min"],
              ["Kyoto", "3–4", "2,000 temples and shrines, geisha, bamboo, tea ceremonies", "Shinkansen from Tokyo, about 2h15m"],
              ["Nara (day trip)", "1", "over 1,400 deer, one of the world's largest wooden buildings", "JR from Kyoto, 45 min"],
              ["Osaka", "2–3", "Street food capital, nightlife, Osaka Castle", "JR from Kyoto, 29 min"],
            ],
          },
          {
            type: "prose",
            text: "**Fly in Tokyo. Fly out Osaka (Kansai Airport). One-way. No backtracking.**",
          },
        ],
      },
      // ── Section 3: day-allocation ──
      {
        id: "day-allocation",
        label: "03",
        title: "How Many Days for Each",
        content: [
          {
            type: "table",
            headers: ["Trip Length", "Tokyo", "Hakone", "Kyoto", "Nara", "Osaka"],
            rows: [
              ["10 days (tight)", "4", "skip", "3 (+Nara day trip)", "(included)", "2"],
              ["12 days (sweet spot)", "5", "1 (day trip)", "3 (+Nara day trip)", "(included)", "2"],
              ["14 days (comfortable)", "5", "1–2", "4 (+Nara day trip)", "(included)", "3"],
            ],
          },
          {
            type: "prose",
            text: "Don't shortchange Tokyo to give Osaka an extra day. Tokyo has the most variety and the most to absorb. 5 days is the sweet spot. Osaka's highlights can realistically be covered in 2 intense days.",
          },
        ],
      },
      // ── Section 4: hakone ──
      {
        id: "hakone",
        label: "04",
        title: "Adding Hakone",
        content: [
          {
            type: "prose",
            text: "Hakone fits between Tokyo and Kyoto — geographically and thematically. After 4–5 days of urban sensory overload in Tokyo, a day of hot springs, mountain air, and Mt. Fuji views is the perfect reset before the temple immersion of Kyoto.\n\n**Option A (day trip):** Odakyu from Shinjuku, do the Hakone Loop (train → cable car → pirate ship → bus), return same day. Long but doable.\n\n**Option B (overnight):** Stay at a ryokan with private onsen. Worth the splurge. Continue to Kyoto the next morning via Odawara Station (shinkansen to Kyoto, ~2 hrs).",
          },
          {
            type: "tip",
            text: "For the full Hakone day trip breakdown, see our day trips guide → /guides/day-trips",
          },
        ],
      },
      // ── Section 5: nara ──
      {
        id: "nara",
        label: "05",
        title: "The Nara Day Trip",
        content: [
          {
            type: "prose",
            text: "Nara is 45 minutes from Kyoto by JR train. It was Japan's first permanent capital (710 AD). The main draw: over 1,400 wild deer roaming freely through the park and temples. They'll bow to you for crackers (shika senbei, ¥200).\n\n**Must-see:** Todai-ji Temple (the Great Buddha Hall — one of the world's largest wooden buildings, contains a 15m bronze Buddha), Kasuga Taisha (thousands of stone and bronze lanterns), Nara Park (deer everywhere).\n\nBudget half a day. Go in the morning, return to Kyoto by early afternoon. This fits perfectly as Day 10 in the 14-day plan.",
          },
        ],
      },
      // ── Section 6: transport ──
      {
        id: "transport",
        label: "06",
        title: "Transport for the Golden Route",
        content: [
          {
            type: "table",
            headers: ["Leg", "Method", "Time", "Cost"],
            rows: [
              ["Airport → Tokyo", "N'EX or Skyliner", "60–90 min", "¥2,520–3,250"],
              ["Tokyo → Hakone", "Odakyu Romance Car", "90 min", "¥2,500 (Freepass: ¥7,100)"],
              ["Hakone → Kyoto", "Shinkansen from Odawara", "2 hrs", "¥11,000"],
              ["OR Tokyo → Kyoto", "Shinkansen", "about 2h15m", "¥14,170"],
              ["Kyoto → Nara", "JR Nara Line", "45 min", "¥720"],
              ["Kyoto → Osaka", "JR Special Rapid", "29 min", "¥580"],
              ["Osaka → KIX", "Nankai Rapi:t", "34–40 min", "¥1,490"],
            ],
          },
          {
            type: "prose",
            text: "**Total transport (without JR Pass):** approximately ¥32,000–38,000 depending on whether you include Hakone.",
          },
        ],
      },
      // ── Section 7: vs-2-week ──
      {
        id: "vs-2-week",
        label: "07",
        title: "Golden Route vs 2-Week Itinerary",
        content: [
          {
            type: "prose",
            text: "The Golden Route and the 2-Week Itinerary on this site are almost identical. The differences:\n\nThe 2-Week plan includes Kamakura as a Tokyo day trip (Day 5). The Golden Route might substitute Hakone for Kamakura.\nThe 2-Week plan gives Osaka 3 days. The 10-day Golden Route gives it 2.\nThe Golden Route can work in 10 days (tight but doable). The 2-Week plan is the relaxed version.\n\n**If you have 14 days:** use the 2-Week Itinerary. **If you have 10–12 days:** use the Golden Route framework and cut a day from Osaka or skip Hakone.",
          },
          {
            type: "tip",
            text: "See the complete 14-day plan → /japan/2-week-japan-itinerary",
          },
        ],
      },
    ],
    relatedGuides: ["getting-around", "budget", "first-time", "day-trips"],
    relatedDays: ALL_DAYS,
  },
];

export function getConnectorPage(slug: string): Guide | undefined {
  return CONNECTOR_PAGES.find((p) => p.slug === slug);
}

export function getAllConnectorSlugs(): string[] {
  return CONNECTOR_PAGES.map((p) => p.slug);
}

export function getAllConnectorPages(): Guide[] {
  return CONNECTOR_PAGES;
}
