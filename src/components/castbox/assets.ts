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
  // Section 8 — Interviews
  meetInterview1: a("meet-interview-1.webp", 740, 360, "Google Meet interview session with three participants", true),
  meetInterview2: a("meet-interview-2.webp", 740, 360, "Google Meet interview session with three participants", true),
  meetInterview3: a("meet-interview-3.webp", 740, 360, "Google Meet interview session with three participants", true),
  quoteAvatar1: a("quote-avatar-1.webp", 148, 181, "", true),
  quoteAvatar2: a("quote-avatar-2.webp", 148, 191, "", true),
  quoteAvatar3: a("quote-avatar-3.webp", 133, 185, "", true),
  quoteAvatar4: a("quote-avatar-4.webp", 136, 180, "", true),
  quoteAvatar5: a("quote-avatar-5.webp", 136, 200, "", true),
  quoteAvatar6: a("quote-avatar-6.webp", 139, 184, "", true),

  // Section 9 — Persona profiles
  personaMultitasker: a("persona-multitasker.webp", 142, 385, "Line illustration of a person on a treadmill listening to a podcast", true),
  personaSociable: a("persona-sociable.webp", 224, 365, "Line illustration of two people walking and talking", true),
  personaTechEnthusiast: a("persona-tech-enthusiast.webp", 203, 365, "Line illustration of a person wearing a VR headset", true),

  // Section 10 — Competitive analysis
  logoSoundcloud: a("logo-soundcloud.webp", 128, 128, "SoundCloud", true),
  logoSpotify: a("logo-spotify.webp", 128, 128, "Spotify", true),
  logoApplePodcast: a("logo-apple-podcast.webp", 128, 128, "Apple Podcast", true),
  logoYoutube: a("logo-youtube.webp", 128, 128, "YouTube", true),
  logoTelegram: a("logo-telegram.webp", 128, 128, "Telegram", true),
  iconMarketGap: a("icon-market-gap.webp", 48, 48, "Market gap", true),
  competitorShot1: a("competitor-1-soundcloud.webp", 387, 783, "SoundCloud player with quick comment interactions", true),
  competitorShot2: a("competitor-2-spotify.webp", 387, 783, "Spotify comments list with structured community replies", true),
  competitorShot3: a("competitor-3-apple.webp", 388, 783, "Apple Podcast in-app conversation thread", true),
  competitorShot4: a("competitor-4-youtube.webp", 387, 783, "YouTube chaptered episode with categorised comments", true),
  competitorShot5: a("competitor-5-telegram.webp", 387, 783, "Timestamped commenting on a video", true),

  // Section 11 — Ideation
  prioritizationMatrix: a("prioritization-matrix.webp", 2272, 1204, "Idea prioritisation matrix plotting 24 ideas by impact against effort, colour-coded per persona", true),

  // Section 12 — Crazy 8s
  crazy8s1: a("crazy8s-1.webp", 348, 502, "Hand-drawn Crazy 8s sketches of the player and comment screens", true),
  crazy8s2: a("crazy8s-2.webp", 349, 502, "Hand-drawn Crazy 8s sketches of the question and feedback flows", true),
  crazy8s3: a("crazy8s-3.webp", 350, 502, "Hand-drawn Crazy 8s sketches of the community feed", true),

  // Section 13 — Visual design (one composition per numbered block)
  ui1Playback: a("ui-1-playback.webp", 1136, 2123, "Playback page: the current Castbox design beside the redesigned version, annotated with the problems found and the changes made", true),
  ui2Comments: a("ui-2-comments.webp", 1136, 573, "Comment section: the current design beside the redesigned version, annotated with categorisation, nesting and mention improvements", true),
  ui3Community: a("ui-3-community.webp", 1136, 573, "Community section: the current design beside the redesigned version, annotated with tab categorisation, friends' engagement and the new FAB", true),
  ui4LockScreen: a("ui-4-lockscreen.webp", 1136, 530, "Lock-screen media widget in collapsed and expanded views, with one-tap reactions and pre-written comments", true),
  ui5Reminder: a("ui-5-reminder.webp", 1136, 530, "Reminder sheet prompting a listener to comment on an episode they finished", true),

  // Section 14 — Impacts from user feedback
  feedbackSession1: a("feedback-session-1.webp", 560, 276, "Google Meet feedback session showing the redesigned empty comments state", true),
  feedbackSession2: a("feedback-session-2.webp", 560, 276, "Google Meet feedback session showing the redesigned community post", true),

  // Section 15 — Design Iteration (added in the newer Figma file)
  iteration1Before: a("iteration-1-before.webp", 248, 213, "Episode About tab before the fix, showing a document icon", true),
  iteration1After: a("iteration-1-after.webp", 248, 213, "Episode About tab after the fix, showing a file-size label", true),
  iteration2Before: a("iteration-2-before.webp", 190, 230, "Playback menu before the fix, with Delete and Trim Silence", true),
  iteration2After: a("iteration-2-after.webp", 190, 230, "Playback menu after the fix, with Clear and Skip Silence", true),
  iteration3Before: a("iteration-3-before.webp", 248, 213, "Chapter list before the fix, with a retweet-style icon", true),
  iteration3After: a("iteration-3-after.webp", 248, 213, "Chapter list after the fix, with clearer action icons", true),
  iteration4Before: a("iteration-4-before.webp", 190, 193, "Sort-by sheet before the fix, with a Timestamp option", true),
  iteration4After: a("iteration-4-after.webp", 190, 193, "Sort-by sheet after the fix, renamed to Episode Timeline", true),
  iteration5Before: a("iteration-5-before.webp", 248, 213, "Community feed before the fix, with a checklist-like icon", true),
  iteration5After: a("iteration-5-after.webp", 248, 213, "Community feed after the fix, with a hashtag icon", true),
  iteration6Before: a("iteration-6-before.webp", 260, 363, "Lock screen before the fix, with pre-written comment chips", true),
  iteration6After: a("iteration-6-after.webp", 260, 363, "Lock screen after the fix, with a compose affordance", true),
  iterationAvatar1: a("iteration-avatar-1.webp", 46, 56, "", true),
  iterationAvatar2: a("iteration-avatar-2.webp", 44, 53, "", true),
  iterationAvatar3: a("iteration-avatar-3.webp", 46, 56, "", true),
  iterationAvatar4: a("iteration-avatar-4.webp", 46, 56, "", true),
  iterationAvatar5: a("iteration-avatar-5.webp", 46, 56, "", true),
  iterationAvatar6: a("iteration-avatar-6.webp", 45, 56, "", true),
  iterationAvatar7: a("iteration-avatar-7.webp", 43, 52, "", true),
  iterationAvatar8: a("iteration-avatar-8.webp", 51, 58, "", true),

  // Sections 16–18 — Spot illustrations
  illusTarget: a("illus-target.webp", 212, 223, "Line illustration of a dart hitting a target beside analytics cards", true),
  illusCrossroads: a("illus-crossroads.webp", 213, 210, "Line illustration of a person facing branching paths toward a flag", true),
  illusCollaboration: a("illus-collaboration.webp", 295, 219, "Line illustration of two people working together at a laptop", true),
} satisfies Record<string, Asset>;

export type AssetKey = keyof typeof assets;
