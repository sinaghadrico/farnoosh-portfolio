/**
 * Asset manifest for the Google Maps case study.
 *
 * Every image exported out of the Figma file is registered here. While `ready`
 * is false the page renders a labelled dashed placeholder at the right aspect
 * ratio instead of a broken image, so the layout is complete before the
 * artwork lands.
 *
 * TO ADD AN IMAGE: drop the file at `public/projects/google-maps/<file>` using
 * the exact name below, then flip `ready` to true for that entry.
 *
 * `w` / `h` are the intrinsic pixel sizes from the 1280px-wide Figma frame —
 * export at 2× for crisp rendering, the aspect ratio is what matters here.
 * See README.md in the public folder for the Figma node behind each one.
 */
export type Asset = {
  /** File name inside public/projects/google-maps/ */
  file: string;
  /** Intrinsic width in Figma pixels */
  w: number;
  /** Intrinsic height in Figma pixels */
  h: number;
  /** Alt text — kept here so the placeholder and the real image agree */
  alt: string;
  /** Flip to true once the file exists on disk */
  ready: boolean;
};

function a(file: string, w: number, h: number, alt: string): Asset {
  return { file, w, h, alt, ready: false };
}

export const assets = {
  // Section 1 — Hero
  heroDevices: a(
    "hero-devices.webp",
    1280,
    840,
    "Two iPhones showing the redesigned Google Maps route screen and the new 'Add a report' sheet, over a travel-doodle backdrop"
  ),

  // Section 3 — Problem discovery: press sources and desk-research illustrations
  sourceCnn: a("source-cnn.webp", 48, 48, "CNN"),
  sourceBusinessInsider: a("source-business-insider.webp", 48, 48, "Business Insider"),
  sourceReddit: a("source-reddit.webp", 48, 48, "Reddit"),
  insightRouting: a(
    "insight-routing.webp",
    244,
    169,
    "Illustration of a car skidding off a snowy road past a warning sign"
  ),
  insightTransit: a(
    "insight-transit.webp",
    244,
    169,
    "Illustration of an anxious traveller waiting at a bus stop"
  ),
  insightLabels: a(
    "insight-labels.webp",
    244,
    169,
    "Illustration of a person checking their phone at a confusing signpost"
  ),
  insightAttractions: a(
    "insight-attractions.webp",
    244,
    169,
    "Illustration of a traveller exploring a 3D map of a city"
  ),

  // Section 4 — Interviews
  interviewMap: a(
    "interview-map.webp",
    1136,
    552,
    "Dotted world map used as the backdrop for the five interview insights"
  ),

  // Section 6 — Persona profile
  personaIllustration: a(
    "persona-illustration.webp",
    1136,
    584,
    "Two travellers — one pointing out a landmark, one reading a paper map — in front of a stylised city skyline"
  ),

  // Section 7 — Competitive analysis: app icons
  appAppleMaps: a("app-apple-maps.webp", 128, 128, "Apple Maps"),
  appWaze: a("app-waze.webp", 128, 128, "Waze"),
  appCitymapper: a("app-citymapper.webp", 128, 128, "Citymapper"),
  appKakaoMap: a("app-kakaomap.webp", 128, 128, "KakaoMap"),
  appMapsMe: a("app-maps-me.webp", 128, 128, "Maps.me"),
  appNeshan: a("app-neshan.webp", 128, 128, "Neshan"),

  // Section 7 — Competitive analysis: reference screenshots
  shotWaze: a("shot-waze.webp", 193, 420, "Waze's 'What do you see?' real-time reporting sheet"),
  shotAppleMaps: a(
    "shot-apple-maps.webp",
    193,
    420,
    "Apple Maps showing each route option listed separately with its own details"
  ),
  shotKakaoMap: a("shot-kakaomap.webp", 193, 420, "KakaoMap showing real-time transit information"),
  shotCitymapper: a(
    "shot-citymapper.webp",
    193,
    420,
    "Citymapper showing public transport delays and multiple route options"
  ),
  shotNeshan: a(
    "shot-neshan.webp",
    193,
    420,
    "Neshan showing lane exit guidance, road signs and speed control"
  ),

  // Section 9 — Visual design (one composition per phone pair)
  ui1a: a(
    "ui-1a-route-details.webp",
    1080,
    874,
    "Route screen before and after: route options split out by criteria with a Safety Mode prompt"
  ),
  ui1b: a(
    "ui-1b-route-details.webp",
    1080,
    874,
    "Route comparison screens showing fastest and safest options side by side"
  ),
  ui1c: a(
    "ui-1c-route-details.webp",
    1080,
    874,
    "Route detail screens showing risk zones and alternatives on the map"
  ),
  ui2a: a(
    "ui-2a-lane-feedback.webp",
    1080,
    874,
    "Turn-by-turn screens with lane guidance displayed above the map"
  ),
  ui2b: a(
    "ui-2b-lane-feedback.webp",
    1080,
    874,
    "Navigation screens with the in-trip report sheet for real-time user feedback"
  ),
  ui2c: a(
    "ui-2c-lane-feedback.webp",
    1080,
    874,
    "Navigation screens showing reports from other drivers on the route ahead"
  ),
  ui3a: a(
    "ui-3a-arrival-feedback.webp",
    1080,
    874,
    "Arrival screens asking the traveller to rate the route they just took"
  ),
  ui3b: a(
    "ui-3b-arrival-feedback.webp",
    1080,
    874,
    "Arrival feedback screens confirming the report and thanking the traveller"
  ),

  // Section 10 — Success metric icons
  metricSafety: a("metric-safety.webp", 48, 48, ""),
  metricExitMisses: a("metric-exit-misses.webp", 48, 48, ""),
  metricIncident: a("metric-incident.webp", 48, 48, ""),
  metricFeedback: a("metric-feedback.webp", 48, 48, ""),
  metricTripPlanning: a("metric-trip-planning.webp", 48, 48, ""),
} satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;
