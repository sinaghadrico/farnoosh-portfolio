/**
 * Asset manifest for the Castbox case study.
 *
 * Every image exported out of the Figma file is registered here. While `ready`
 * is false the page renders a labelled dashed placeholder at the right aspect
 * ratio instead of a broken image, so the layout is complete before the
 * artwork lands.
 *
 * TO ADD AN IMAGE: drop the file at `public/projects/castbox/<file>` using the
 * exact name below, then flip `ready` to true for that entry.
 *
 * `w` / `h` are the intrinsic pixel sizes from the 1280px-wide Figma frame —
 * export at 2× for crisp rendering, the aspect ratio is what matters here.
 */
export type Asset = {
  /** File name inside public/projects/castbox/ */
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
  // Section 8 — Interviews
  meetInterview1: a("meet-interview-1.webp", 736, 344, "Google Meet interview session with three participants"),
  meetInterview2: a("meet-interview-2.webp", 736, 344, "Google Meet interview session with three participants"),
  meetInterview3: a("meet-interview-3.webp", 736, 344, "Google Meet interview session with three participants"),
  quoteAvatar1: a("quote-avatar-1.webp", 152, 208, ""),
  quoteAvatar2: a("quote-avatar-2.webp", 152, 208, ""),
  quoteAvatar3: a("quote-avatar-3.webp", 152, 208, ""),
  quoteAvatar4: a("quote-avatar-4.webp", 152, 208, ""),
  quoteAvatar5: a("quote-avatar-5.webp", 152, 208, ""),
  quoteAvatar6: a("quote-avatar-6.webp", 152, 208, ""),

  // Section 9 — Persona profiles
  personaMultitasker: a("persona-multitasker.webp", 280, 400, "Line illustration of a person on a treadmill listening to a podcast"),
  personaSociable: a("persona-sociable.webp", 280, 400, "Line illustration of two people walking and talking"),
  personaTechEnthusiast: a("persona-tech-enthusiast.webp", 280, 400, "Line illustration of a person wearing a VR headset"),

  // Section 10 — Competitive analysis
  logoSoundcloud: a("logo-soundcloud.webp", 128, 128, "SoundCloud"),
  logoSpotify: a("logo-spotify.webp", 128, 128, "Spotify"),
  logoApplePodcast: a("logo-apple-podcast.webp", 128, 128, "Apple Podcast"),
  logoYoutube: a("logo-youtube.webp", 128, 128, "YouTube"),
  logoTelegram: a("logo-telegram.webp", 128, 128, "Telegram"),
  iconMarketGap: a("icon-market-gap.webp", 48, 48, "Market gap"),
  competitorShot1: a("competitor-1-soundcloud.webp", 392, 780, "SoundCloud player with quick comment interactions"),
  competitorShot2: a("competitor-2-spotify.webp", 392, 780, "Spotify comments list with structured community replies"),
  competitorShot3: a("competitor-3-apple.webp", 392, 780, "Apple Podcast in-app conversation thread"),
  competitorShot4: a("competitor-4-youtube.webp", 392, 780, "YouTube chaptered episode with categorised comments"),
  competitorShot5: a("competitor-5-telegram.webp", 392, 780, "Timestamped commenting on a video"),

  // Section 11 — Ideation
  prioritizationMatrix: a("prioritization-matrix.webp", 2272, 1200, "Idea prioritisation matrix plotting 24 ideas by impact against effort, colour-coded per persona"),

  // Section 12 — Crazy 8s
  crazy8s1: a("crazy8s-1.webp", 710, 1000, "Hand-drawn Crazy 8s sketches of the player and comment screens"),
  crazy8s2: a("crazy8s-2.webp", 710, 1000, "Hand-drawn Crazy 8s sketches of the question and feedback flows"),
  crazy8s3: a("crazy8s-3.webp", 710, 1000, "Hand-drawn Crazy 8s sketches of the community feed"),

  // Section 13 — Visual design (one composition per numbered block)
  ui1Playback: a("ui-1-playback.webp", 2272, 3720, "Playback page: the current Castbox design beside the redesigned version, annotated with the problems found and the changes made"),
  ui2Comments: a("ui-2-comments.webp", 2272, 2260, "Comment section: the current design beside the redesigned version, annotated with categorisation, nesting and mention improvements"),
  ui3Community: a("ui-3-community.webp", 2272, 1160, "Community section: the current design beside the redesigned version, annotated with tab categorisation, friends' engagement and the new FAB"),
  ui4LockScreen: a("ui-4-lockscreen.webp", 2272, 1080, "Lock-screen media widget in collapsed and expanded views, with one-tap reactions and pre-written comments"),
  ui5Reminder: a("ui-5-reminder.webp", 2272, 1160, "Reminder sheet prompting a listener to comment on an episode they finished"),

  // Section 14 — Impacts from user feedback
  feedbackSession1: a("feedback-session-1.webp", 1136, 580, "Google Meet feedback session showing the redesigned empty comments state"),
  feedbackSession2: a("feedback-session-2.webp", 1136, 580, "Google Meet feedback session showing the redesigned community post"),

  // Sections 15–17 — Spot illustrations
  illusTarget: a("illus-target.webp", 430, 430, "Line illustration of a dart hitting a target beside analytics cards"),
  illusCrossroads: a("illus-crossroads.webp", 430, 430, "Line illustration of a person facing branching paths toward a flag"),
  illusCollaboration: a("illus-collaboration.webp", 590, 420, "Line illustration of two people working together at a laptop"),
} satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;
