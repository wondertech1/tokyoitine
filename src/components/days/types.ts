import type { DayData } from "@/components/hero/types";

export interface Stop {
  time: string;
  place: string;
  desc: string;
  eat: string | null;
  transit: string | null;
  warning: string | null;
  neighborhoodSlug?: string;
  neighborhoodName?: string;
}

export interface DayDataFull extends DayData {
  stops: Stop[];
  localTip: string;
}

export const DAYS_FULL: DayDataFull[] = [
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
    localTip:
      "Shinjuku Station has 200+ exits. Use East Exit for Kabukicho, West Exit for Memory Lane. Screenshot your exit before going underground.",
    stops: [
      {
        time: "08:30",
        place: "Senso-ji Temple, Asakusa",
        neighborhoodSlug: "asakusa",
        neighborhoodName: "Asakusa",
        desc: "Arrive early to beat the tour groups. Walk through Kaminarimon (Thunder Gate), browse Nakamise-dori, explore the incense hall. The temple grounds are calm before 10 AM. Budget 75\u201390 minutes.",
        eat: "Fresh melon-pan from the Nakamise stalls. For a real breakfast: Sometaro (traditional okonomiyaki, 5-min walk) or Pelican Cafe for legendary shokupan toast.",
        transit: null,
        warning: null,
      },
      {
        time: "11:00",
        place: "Meiji Jingu & Takeshita Street, Harajuku",
        neighborhoodSlug: "harajuku-omotesando",
        neighborhoodName: "Harajuku",
        desc: "The forested shrine path from Harajuku Station feels like leaving the city entirely. Shrine grounds take 30\u201345 min. Then hit Takeshita Street for crepe shops, kawaii fashion, and Cat Street vintage stores.",
        eat: "Harajuku Gyoza Lou (counter-and-table joint, incredible gyoza) or Afuri Ramen in Omotesando \u2014 their yuzu shio is a local icon.",
        transit: "Ginza Line to Omotesando \u00b7 25 min",
        warning: null,
      },
      {
        time: "14:00",
        place: "Scramble Crossing & Shibuya",
        neighborhoodSlug: "shibuya",
        neighborhoodName: "Shibuya",
        desc: "Cross the Scramble from street level first. Explore Center-Gai, Shibuya 109, and the Parco complex. Miyashita Park rooftop for a breather.",
        eat: "Afternoon coffee at Fuglen (Norwegian-Japanese craft). Onigiri Bongo near Otsuka Station (JR Yamanote Line, ~20 min by train) is a pilgrimage-worthy detour.",
        transit:
          "JR Yamanote, 1 stop \u00b7 3 min (or walk Cat Street, 15 min)",
        warning: null,
      },
      {
        time: "17:00",
        place: "Shibuya Sky \u2014 Sunset Slot",
        desc: "Open-air rooftop at 230m. Mt. Fuji visible on clear days. Book 16:30\u201317:00 entry for golden hour. Budget 60\u201375 minutes.",
        eat: null,
        transit: null,
        warning: "Walk-ups available at \u00a52,500 but popular time slots sell out. Book online for \u00a52,200.",
      },
      {
        time: "19:00",
        place: "Omoide Yokocho & Shinjuku Neon",
        neighborhoodSlug: "shinjuku",
        neighborhoodName: "Shinjuku",
        desc: "Postwar yakitori alley \u2014 tiny stalls seating 6\u20138 people. After dinner, walk Kabukicho for the full neon spectacle. Kabukicho Tower has calmer restaurant options on upper floors.",
        eat: "Point-and-order yakitori (chicken skin, tsukune, negima). Cash-only, \u00a52,000\u20134,000/person. For ramen: Fuunji near south exit \u2014 legendary tsukemen, expect a 20-min queue.",
        transit: "JR Yamanote \u00b7 7 min",
        warning: null,
      },
    ],
  },
  {
    num: "02",
    title: "OLD WORLD ZEN",
    neighborhoods:
      "Toyosu \u00b7 Tsukiji \u00b7 Ginza \u00b7 Tokyo Station",
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
    localTip:
      "Tsukiji vendors start closing around 2 PM. Arrive by 11:30 or you\u2019ll miss the best stalls.",
    stops: [
      {
        time: "09:00",
        place: "teamLab Planets, Toyosu",
        desc: "Book the first entry slot. Barefoot immersive experience \u2014 wade through water, walk through infinity mirror rooms. Wear pants you can roll up. Budget 90 minutes inside.",
        eat: null,
        transit: null,
        warning:
          "Book 2\u20134 weeks ahead. Confirm the Toyosu location hasn\u2019t changed \u2014 teamLab has moved venues before. Check teamlab.art.",
      },
      {
        time: "11:30",
        place: "Tsukiji Outer Market",
        neighborhoodSlug: "ginza-tsukiji",
        neighborhoodName: "Ginza & Tsukiji",
        desc: "400+ stalls and small restaurants. The famous inner wholesale market moved to Toyosu years ago \u2014 no tuna auctions here anymore. But the outer market is thriving. Go hungry.",
        eat: "Must-try: tamago on a stick at Tsukiji Shouro, fresh uni cups, grilled scallops. Sit-down: Daiwa Sushi at Toyosu Market (shorter wait than Sushi Dai, equally good \u2014 note: both are at Toyosu, not Tsukiji).",
        transit:
          "Yurikamome + walk, or taxi ~10 min / \u00a51,500. NOT walkable from Toyosu.",
        warning: null,
      },
      {
        time: "14:00",
        place: "Ginza \u2014 Architecture Walk",
        neighborhoodSlug: "ginza-tsukiji",
        neighborhoodName: "Ginza & Tsukiji",
        desc: "Open-air museum of contemporary architecture. Hit: Ginza Six (free rooftop garden), Herm\u00e8s glass-brick fa\u00e7ade, Mikimoto, Kabuki-za theater. Uniqlo 12-floor flagship. Dover Street Market for fashion browsing.",
        eat: "Coffee at Tricolore (old-school kissaten). For wagyu without bankruptcy: Ginza Steak Aoki, \u00a55,000 set lunch.",
        transit: "10-minute walk west from Tsukiji",
        warning: null,
      },
      {
        time: "17:30",
        place: "Tokyo Station \u2014 Evening",
        desc: "Underground Ramen Street (10 curated shops in Yaesu basement). The illuminated red-brick Marunouchi facade is beautiful at night.",
        eat: "Rokurinsha for tsukemen or Soranoiro for veggie ramen options.",
        transit: "Tokyo Metro Ginza Line \u00b7 5 min",
        warning: null,
      },
    ],
  },
  {
    num: "03",
    title: "CULTURE CIRCUIT",
    neighborhoods:
      "Ueno \u00b7 Akihabara \u00b7 Yanaka \u00b7 Kanda",
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
    localTip:
      "Yanaka is best at golden hour. The narrow streets and wooden facades glow in late-afternoon light.",
    stops: [
      {
        time: "09:00",
        place: "Ueno Park \u2014 Pick One Museum",
        neighborhoodSlug: "akihabara-ueno",
        neighborhoodName: "Akihabara & Ueno",
        desc: "6+ museums \u2014 you can\u2019t do them all. Pick one: Tokyo National Museum (Japanese art, the star pick), National Museum of Western Art (Le Corbusier building), or Nature and Science (great for families). Budget 2\u20132.5 hours. Shinobazu Pond with lotus flowers is lovely for a stroll.",
        eat: "Ameyoko market strip for yakitori or fresh fruit. Sit-down: Innsyoutei inside the park (traditional Japanese, garden setting, since 1875).",
        transit: null,
        warning: null,
      },
      {
        time: "12:30",
        place: "Akihabara \u2014 Electric Town",
        neighborhoodSlug: "akihabara-ueno",
        neighborhoodName: "Akihabara & Ueno",
        desc: "Anime, manga, and gaming central. Key stops: Mandarake Complex (8 floors of manga/figures), Super Potato (retro gaming), Radio Kaikan (model kits). Try a multi-story arcade (GiGO, Taito Station). Gachapon capsule machines are everywhere and addictive.",
        eat: "Kanda Yabu Soba (10-min walk, one of Tokyo\u2019s oldest soba restaurants, est. 1880) or CoCo Ichibanya for customizable curry.",
        transit: "JR Yamanote, 1 stop \u00b7 4 min",
        warning:
          "Themed cafes (maid cafes, etc.) charge \u00a51,500\u20133,000 cover just to sit down, plus food minimums. Check prices at the door. Some street touts are aggressive \u2014 politely decline.",
      },
      {
        time: "16:00",
        place: "Yanaka \u2014 Old Tokyo Hidden Gem",
        neighborhoodSlug: "yanaka",
        neighborhoodName: "Yanaka",
        desc: "One of the few neighborhoods that survived WWII bombing. Narrow lanes, traditional wooden houses, cat statues everywhere, and Yanaka Ginza shopping street feels like 1960s Tokyo. The antidote to sensory overload.",
        eat: "Menchi-katsu (fried meat croquettes) and melon-pan ice cream sandwiches from the street stalls. Kayaba Coffee (a 1916 building, serving coffee since 1938) for excellent drip.",
        transit: "JR to Nippori, 2 stops \u00b7 5 min",
        warning: null,
      },
      {
        time: "19:00",
        place: "Evening \u2014 Kanda Izakaya Quarter",
        desc: "One of Tokyo\u2019s oldest neighborhoods for a quiet, authentic izakaya dinner.",
        eat: "Shin Hinomoto (Andy\u2019s) under the Yurakucho tracks \u2014 English-friendly, incredible grilled fish, always packed. Go early or expect a wait.",
        transit: null,
        warning: null,
      },
    ],
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
    localTip:
      "The north tower at Metro Govt Building can have 30+ minute queues at sunset. The south tower has almost identical views with a fraction of the wait.",
    stops: [
      {
        time: "09:00",
        place: "Imperial Palace East Gardens",
        desc: "Free entry, no booking needed. The remains of Edo Castle are here \u2014 massive stone walls, moats, and serene Japanese gardens. The Ninomaru Garden is the highlight. Budget 60\u201390 minutes.",
        eat: null,
        transit: null,
        warning:
          "CLOSED ON MONDAYS AND FRIDAYS. If your trip starts on a Monday, swap Day 1 and Day 4.",
      },
      {
        time: "11:00",
        place: "Tokyo Station & Marunouchi",
        desc: "The restored red-brick Marunouchi facade is gorgeous. Inside: domed ceilings in North and South galleries. Underground Gransta and Kitchen Street are excellent for shopping and food.",
        eat: "Gyutan Negishi for beef tongue, Rokurinsha for tsukemen, or the depachika (basement food hall) for incredible bento boxes.",
        transit: "10-minute walk through Marunouchi",
        warning: null,
      },
      {
        time: "13:30",
        place: "Shinjuku Gyoen National Garden",
        desc: "Three distinct garden styles: Japanese traditional, English landscape, and French formal. Cherry blossoms are extraordinary in spring, beautiful year-round. No alcohol allowed. Budget 90 minutes.",
        eat: "Grab a konbini bento (7-Eleven, Lawson, FamilyMart) and eat in the garden \u2014 a very Tokyo thing to do. The onigiri and egg salad sandwiches are legitimately great.",
        transit: "JR Chuo Line (Rapid) \u00b7 15 min",
        warning: "Also closed on Mondays.",
      },
      {
        time: "17:30",
        place: "Metropolitan Govt Building \u2014 Free Sunset",
        desc: "North observation deck (45th floor, 202m), completely free, 360-degree views including Mt. Fuji on clear days. Go 30 minutes before sunset. South deck is less crowded if north has a queue.",
        eat: "Tsunahachi for tempura (since 1923, lunch sets from \u00a51,500). Then Golden Gai \u2014 200+ tiny bars, most seating 5\u20138 people. Look for bars with \u2018Tourists welcome\u2019 signs.",
        transit: "Walk from Shinjuku Gyoen \u00b7 15 min",
        warning: null,
      },
    ],
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
      "Ancient seaside capital with an over 770-year-old bronze Buddha and ocean-cliff temples.",
    localTip:
      "Don\u2019t try Great Buddha + Hase-dera + beach + Enoshima all in one day. Choose either a thorough Kamakura or a Kamakura morning + Enoshima afternoon.",
    stops: [
      {
        time: "08:30",
        place: "Depart Tokyo \u2192 Kamakura",
        desc: "JR Yokosuka Line from Tokyo or Shinagawa Station. No reserved seats needed \u2014 tap your Suica. About 60 minutes.",
        eat: "Grab onigiri and coffee from a konbini for the train.",
        transit:
          "JR Yokosuka Line \u00b7 ~60 min each way. Budget 2.5\u20133 hrs total transit.",
        warning:
          "JR Pass covers the round trip. Without a pass, ~\u00a51,900 round trip. Suica works.",
      },
      {
        time: "09:45",
        place: "Tsurugaoka Hachimangu Shrine",
        desc: "10-minute walk from station through Komachi-dori shopping street. Grand Shinto shrine atop wide steps with views over the city.",
        eat: "Komachi-dori: purple sweet potato ice cream, fresh senbei (rice crackers), warabi mochi. Try shirasu (baby sardines) \u2014 Kamakura\u2019s specialty, only available fresh here.",
        transit: null,
        warning: null,
      },
      {
        time: "11:30",
        place: "Hase-dera Temple",
        desc: "Stunning hillside temple with panoramic ocean views from the observation deck. Massive 11-headed Kannon statue. Atmospheric cave with carved stone Buddhas. 30\u201345 minutes.",
        eat: null,
        transit: "Enoden tram to Hase Station \u00b7 15 min",
        warning: null,
      },
      {
        time: "12:30",
        place: "Kotoku-in \u2014 The Great Buddha",
        desc: "The 13.35m bronze Amida Buddha, cast in 1252, sits in the open air after a tsunami destroyed its hall in the 15th century. You can go inside for \u00a550. Budget 20\u201330 minutes.",
        eat: "Matsubara-an for handmade soba with garden view, or any shirasu-don restaurant near Hase Station.",
        transit: "5-minute walk from Hase-dera",
        warning: null,
      },
      {
        time: "14:30",
        place: "Choose: Beach Walk OR Enoshima",
        desc: "Option A: Walk along Yuigahama Beach \u2014 peaceful, good for decompressing. Option B: Take the Enoden to Enoshima, a small island with shrines, sea caves, and ocean views. Enoshima alone is a half-day, so don\u2019t rush it. Pick one.",
        eat: "Enoshima: fresh shirasu-don or grilled sazae (turban snails) at the island\u2019s seafood stalls.",
        transit: null,
        warning: null,
      },
      {
        time: "17:00",
        place: "Return to Tokyo",
        desc: "Enoden back to Kamakura Station, then JR to Tokyo. Arrive around 18:00\u201318:30.",
        eat: "Grab an ekiben (station bento) for the train, or hit Tokyo Station Ramen Street on arrival.",
        transit: "JR Yokosuka Line \u00b7 ~60 min",
        warning: null,
      },
    ],
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
    localTip:
      "Buy the Tobu \u2018All Nikko Pass\u2019 (\u00a58,000 from Asakusa) \u2014 covers round-trip express plus unlimited buses in Nikko. Saves money and hassle.",
    stops: [
      {
        time: "07:30",
        place: "Depart Asakusa \u2192 Nikko",
        desc: "Tobu Limited Express \u2018Revaty\u2019 from Asakusa (the Tobu station, not the subway station). Reserved seat recommended. Arrive Tobu-Nikko around 09:30.",
        eat: "Grab onigiri and coffee from a konbini near Asakusa Station for the train.",
        transit: "Tobu Limited Express \u00b7 ~2 hours each way",
        warning:
          "This is a LONG day \u2014 leave by 7:30, expect to return 7\u20138 PM. Consider skipping Kegon Falls if fatigued. Toshogu alone justifies the trip.",
      },
      {
        time: "10:00",
        place: "Toshogu Shrine (UNESCO)",
        desc: "Japan\u2019s most lavishly decorated shrine, the mausoleum of Tokugawa Ieyasu. Look for the famous \u2018see no evil\u2019 monkey carving and the sleeping cat (Nemuri-neko) above a gate. The inner sanctuary requires climbing 200+ stone steps through a cryptomeria forest. Entry \u00a51,600. Budget 2\u20132.5 hours.",
        eat: null,
        transit: null,
        warning: null,
      },
      {
        time: "12:30",
        place: "Nikko Town \u2014 Lunch",
        desc: "Walk back through the shrine avenue to the town center near Shinkyo Bridge.",
        eat: "Yuba (tofu skin) is Nikko\u2019s specialty. Try yuba soba, yuba tempura, or yuba in dashi broth at Nagomi Chaya or Hippari Dako near Shinkyo Bridge.",
        transit: null,
        warning: null,
      },
      {
        time: "14:00",
        place: "Kegon Falls (Optional)",
        desc: "Take the Tobu Bus to Chuzenji Onsen (~40 min), then walk 5 minutes to Kegon Falls. The 97-meter waterfall is one of Japan\u2019s three finest. Take the elevator (\u00a5570) down to the observation platform at the base. Budget 2 hours including transit.",
        eat: null,
        transit: "Tobu Bus \u00b7 40 min each way",
        warning: null,
      },
      {
        time: "16:30",
        place: "Alt: Shinkyo Bridge & Kanmangafuchi",
        desc: "If you skip Kegon Falls: the sacred Shinkyo Bridge (\u00a5300 to walk on, free to photograph) and the Kanmangafuchi Abyss path with rows of moss-covered stone Jizo statues \u2014 hauntingly beautiful and rarely crowded.",
        eat: "Dinner back in Asakusa: Sometaro for okonomiyaki, or walk to Hoppy Street for casual outdoor izakaya vibes.",
        transit:
          "Tobu Express back to Asakusa \u00b7 ~2 hrs. Arrive ~19:00",
        warning: null,
      },
    ],
  },
  {
    num: "07",
    title: "HIDDEN FREQUENCIES",
    neighborhoods:
      "Shimokitazawa \u00b7 Kichijoji \u00b7 Nakano",
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
    localTip:
      "Don Quijote (Shibuya or Shinjuku) is open until late and is tax-free for tourists. Good for last-minute Kit-Kat flavors, beauty products, and weird snacks. Bring your passport.",
    stops: [
      {
        time: "09:30",
        place: "Shimokitazawa \u2014 Vintage & Indie",
        desc: "Tokyo\u2019s answer to Brooklyn. Vintage clothing stores, independent theaters, tiny record shops, and excellent coffee. The redesigned station area (Bonus Track, Reload) has great indie shops and cafes. Budget 2\u20132.5 hours to browse.",
        eat: "Bear Pond Espresso (legendary single-origin, tiny space, no-photos policy). Ballon d\u2019Essai for pastries. City Country City \u2014 a vinyl record shop with a cafe.",
        transit:
          "Keio Inokashira or Odakyu from Shinjuku \u00b7 8 min",
        warning: null,
      },
      {
        time: "12:30",
        place: "Kichijoji \u2014 Park & Local Life",
        desc: "Walk through Inokashira Park \u2014 a leafy oasis with a pond, swan boats, and street musicians on weekends. The Ghibli Museum is nearby but requires separate timed-release tickets that sell out within minutes on the 10th of each month via Lawson Ticket.",
        eat: "Harmonika Yokocho \u2014 a tiny alley market with yakitori, fried chicken, and beer stalls. Mado Cafe in Inokashira Park is charming.",
        transit: "Keio Inokashira Line \u00b7 15 min direct",
        warning:
          "Ghibli Museum requires timed-release tickets that sell out within minutes on the 10th of each month via Lawson Ticket, purchased 1 month in advance. You CANNOT buy tickets at the door. No tickets? Enjoy the park and move on.",
      },
      {
        time: "15:00",
        place: "Nakano Broadway \u2014 Collector\u2019s Paradise",
        desc: "Multi-floor indoor market specializing in anime, manga, vintage toys, idol goods, and collectibles. Where Tokyo\u2019s serious collectors shop \u2014 less touristy than Akihabara, better prices, more variety. Mandarake has multiple specialty shops throughout the building.",
        eat: "Coffee at Fujiya (a retro kissaten in the Broadway basement). Grab taiyaki from the stalls outside.",
        transit: "JR Chuo Line from Kichijoji \u00b7 10 min",
        warning: null,
      },
      {
        time: "17:30",
        place: "Final Evening \u2014 Your Choice",
        desc: "Return to any neighborhood you loved for a farewell dinner. Revisit Golden Gai or Omoide Yokocho for one last round. Or try somewhere new \u2014 Ebisu for upscale izakayas, Roppongi for late-night energy, or quiet Yanaka for a peaceful goodbye to the city.",
        eat: "Realistic splurge: Uobei in Shibuya \u2014 conveyor-belt sushi starting at \u00a5110/plate. Fast, fun, delicious.",
        transit: null,
        warning: null,
      },
    ],
  },
];
