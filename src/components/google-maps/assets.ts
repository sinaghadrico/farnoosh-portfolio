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

function a(
  file: string,
  w: number,
  h: number,
  alt: string,
  ready = false
): Asset {
  return { file, w, h, alt, ready };
}

export const assets = {
  // Section 1 — Hero
  heroCollage: a(
    "hero-collage.webp",
    566,
    509,
    "Collage of Google Maps redesign screens — the SOS sheet, a trip planner, route options, a place page and Exploration Mode"
  ),

  // Section 3 — My role
  roleAvatar: a("role-avatar.webp", 96, 96, "Farnoosh Bagheri"),

  // Section 3 — Problem discovery: press sources and desk-research illustrations
  sourceCnn: a("source-cnn.webp", 96, 96, "CNN", true),
  sourceBusinessInsider: a("source-business-insider.webp", 96, 96, "Business Insider", true),
  sourceReddit: a("source-reddit.webp", 96, 96, "Reddit", true),
  insightRouting: a("insight-routing.webp", 489, 209, "Illustration of a car skidding off a snowy road past a warning sign", true),
  insightTransit: a("insight-transit.webp", 486, 324, "Illustration of an anxious traveller waiting at a bus stop", true),
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
  interviewMap: a("interview-map.webp", 1136, 552, "Dotted world map used as the backdrop for the five interview insights", true),

  // Section 6 — Persona profile
  personaIllustration: a("persona-illustration.webp", 1136, 585, "Two travellers — one pointing out a landmark, one reading a paper map — in front of a stylised city skyline", true),

  // Section 7 — Competitive analysis: app icons
  appAppleMaps: a("app-apple-maps.webp", 128, 128, "Apple Maps", true),
  appWaze: a("app-waze.webp", 128, 128, "Waze", true),
  appCitymapper: a("app-citymapper.webp", 128, 128, "Citymapper", true),
  appKakaoMap: a("app-kakaomap.webp", 128, 128, "KakaoMap", true),
  appMapsMe: a("app-maps-me.webp", 128, 128, "Maps.me", true),
  appNeshan: a("app-neshan.webp", 128, 128, "Neshan", true),

  // Section 7 — Competitive analysis: reference screenshots
  shotWaze: a("shot-waze.webp", 387, 840, "Waze's 'What do you see?' real-time reporting sheet", true),
  shotAppleMaps: a("shot-apple-maps.webp", 387, 840, "Apple Maps showing each route option listed separately with its own details", true),
  shotKakaoMap: a("shot-kakaomap.webp", 387, 840, "KakaoMap showing real-time transit information", true),
  shotCitymapper: a("shot-citymapper.webp", 387, 840, "Citymapper showing public transport delays and multiple route options", true),
  shotNeshan: a("shot-neshan.webp", 387, 840, "Neshan showing lane exit guidance, road signs and speed control", true),

  // Visual design — one image per part. Every block has a "hero" pair (the
  // before/after phones plus their dashed annotation callouts); most also have
  // a row of detail screens under it. `w`/`h` are provisional until the real
  // exports land — re-read them off the files and update these.
  vd1Hero: a("vd-1-walking-hero.webp", 1136, 570, "Walking Navigation before and after: reporting hazards in real time from the navigation screen"),
  vd1Details: a("vd-1-walking-details.webp", 1136, 575, "Add a report sheet, the unsafe-area categories, reporting in progress and the confirmation"),
  vd2Hero: a("vd-2-transit-hero.webp", 1136, 590, "Public Transportation before and after: confirming whether the bus arrived on time"),
  vd2Details: a("vd-2-transit-details.webp", 1136, 590, "Confirming the stop location, pinning the correct place and the submitted bus report"),
  vd3Hero: a("vd-3-arrival-hero.webp", 1136, 570, "Upon Arrival before and after: rating the navigation once the traveller reaches the destination"),
  vd3Details: a("vd-3-arrival-details.webp", 1136, 580, "Choosing the biggest problem, reporting incorrect place details and the thank-you screen"),
  vd4Hero: a("vd-4-exploration-hero.webp", 1136, 520, "Exploration Mode before and after: the new entry point and its onboarding sheet"),
  vd4Details: a("vd-4-exploration-details.webp", 1136, 570, "Street-level and map views of Exploration Mode with frequently used paths"),
  vd5Hero: a("vd-5-emergency-hero.webp", 1136, 740, "Emergency Conditions before and after: the SOS button and the call-911 sheet"),
  vd5Details: a("vd-5-emergency-details.webp", 1136, 580, "The Can't Talk questionnaire, location sharing and the shared-location status"),
  vd6Hero: a("vd-6-trip-hero.webp", 1136, 620, "Trip Planning before and after: the saved lists and the new trip planner"),
  vd6Details: a("vd-6-trip-details.webp", 1136, 690, "Creating a plan, adding attractions, setting durations and choosing navigation preferences"),
  vd6Details2: a("vd-6-trip-details-2.webp", 1136, 620, "The day-by-day plan timeline and starting navigation from a planned stop"),
  vd7Hero: a("vd-7-driving-hero.webp", 1136, 560, "Driving Experience before and after: Safety Mode and sorting routes by safest"),
  vd7Details: a("vd-7-driving-details.webp", 1136, 680, "Route options, the speed-limit alert and lane guidance during navigation"),
  vd8Hero: a("vd-8-place-hero.webp", 1136, 590, "Place Information before and after: the restructured place page and nearby attractions"),

  // Success metric icons
  metricSafety: a("metric-safety.webp", 80, 94, "", true),
  metricExitMisses: a("metric-exit-misses.webp", 90, 90, "", true),
  metricIncident: a("metric-incident.webp", 80, 80, "", true),
  metricFeedback: a("metric-feedback.webp", 90, 90, "", true),
  metricTripPlanning: a("metric-trip-planning.webp", 90, 90, "", true),
} satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;
