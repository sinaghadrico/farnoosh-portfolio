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

  // Section 15 — Design Iteration (added in the newer Figma file)
  iteration1Before: a("iteration-1-before.webp", 480, 450, "Episode About tab before the fix, showing a document icon"),
  iteration1After: a("iteration-1-after.webp", 480, 450, "Episode About tab after the fix, showing a file-size label"),
  iteration2Before: a("iteration-2-before.webp", 364, 436, "Playback menu before the fix, with Delete and Trim Silence"),
  iteration2After: a("iteration-2-after.webp", 364, 436, "Playback menu after the fix, with Clear and Skip Silence"),
  iteration3Before: a("iteration-3-before.webp", 480, 450, "Chapter list before the fix, with a retweet-style icon"),
  iteration3After: a("iteration-3-after.webp", 480, 450, "Chapter list after the fix, with clearer action icons"),
  iteration4Before: a("iteration-4-before.webp", 364, 392, "Sort-by sheet before the fix, with a Timestamp option"),
  iteration4After: a("iteration-4-after.webp", 364, 392, "Sort-by sheet after the fix, renamed to Episode Timeline"),
  iteration5Before: a("iteration-5-before.webp", 480, 440, "Community feed before the fix, with a checklist-like icon"),
  iteration5After: a("iteration-5-after.webp", 480, 440, "Community feed after the fix, with a hashtag icon"),
  iteration6Before: a("iteration-6-before.webp", 480, 500, "Lock screen before the fix, with pre-written comment chips"),
  iteration6After: a("iteration-6-after.webp", 480, 500, "Lock screen after the fix, with a compose affordance"),
  iterationAvatar1: a("iteration-avatar-1.webp", 152, 208, ""),
  iterationAvatar2: a("iteration-avatar-2.webp", 152, 208, ""),
  iterationAvatar3: a("iteration-avatar-3.webp", 152, 208, ""),
  iterationAvatar4: a("iteration-avatar-4.webp", 152, 208, ""),
  iterationAvatar5: a("iteration-avatar-5.webp", 152, 208, ""),
  iterationAvatar6: a("iteration-avatar-6.webp", 152, 208, ""),
  iterationAvatar7: a("iteration-avatar-7.webp", 152, 208, ""),
  iterationAvatar8: a("iteration-avatar-8.webp", 152, 208, ""),

  // Sections 16–18 — Spot illustrations
  illusTarget: a("illus-target.webp", 430, 430, "Line illustration of a dart hitting a target beside analytics cards"),
  illusCrossroads: a("illus-crossroads.webp", 430, 430, "Line illustration of a person facing branching paths toward a flag"),
  illusCollaboration: a("illus-collaboration.webp", 590, 420, "Line illustration of two people working together at a laptop"),
} satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;
