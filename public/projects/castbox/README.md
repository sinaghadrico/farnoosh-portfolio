# Castbox case study — image exports

Source: Figma → **My Case Studies → Castbox Case Study** (`1280 × 20373`).

Drop each file below into this folder using the **exact file name**, then open
`src/components/castbox/assets.ts` and flip that entry's `ready` to `true`.
Until then the page renders a labelled dashed placeholder at the right aspect
ratio, so nothing breaks.

## Export settings

- **Format:** WebP (or PNG if Figma can't export WebP — then rename the entry in
  `assets.ts` to match).
- **Scale:** export at **2×** where the target size below is under 800px wide,
  **1×** for the large `ui-*` compositions (they're already ~2272px).
- **Background:** keep transparent for the avatars, persona illustrations, logos
  and spot illustrations; the phone screenshots and Meet captures can be flat.
- Sizes below are the **intrinsic pixel sizes** used for aspect ratio — the exact
  number matters less than the ratio.

## The list (30 files)

### Section 8 — Interviews

| File | Size | What to select in Figma |
| --- | --- | --- |
| `meet-interview-1.webp` | 736×344 | 1st Google Meet screenshot |
| `meet-interview-2.webp` | 736×344 | 2nd Google Meet screenshot |
| `meet-interview-3.webp` | 736×344 | 3rd Google Meet screenshot |
| `quote-avatar-1.webp` | 152×208 | Figure next to “I turn to other platforms…” |
| `quote-avatar-2.webp` | 152×208 | Figure next to “I’m doing other activities…” |
| `quote-avatar-3.webp` | 152×208 | Figure next to “Posts on Community are not…” |
| `quote-avatar-4.webp` | 152×208 | Figure next to “I’m willing to write a review…” |
| `quote-avatar-5.webp` | 152×208 | Figure next to “I don’t even know…” |
| `quote-avatar-6.webp` | 152×208 | Figure next to “The interface is old…” |

### Section 9 — Persona profiles

| File | Size | What to select |
| --- | --- | --- |
| `persona-multitasker.webp` | 280×400 | Treadmill line illustration |
| `persona-sociable.webp` | 280×400 | Two people walking |
| `persona-tech-enthusiast.webp` | 280×400 | Person with VR headset |

### Section 10 — Competitive analysis

| File | Size | What to select |
| --- | --- | --- |
| `logo-soundcloud.webp` | 128×128 | SoundCloud app icon |
| `logo-spotify.webp` | 128×128 | Spotify app icon |
| `logo-apple-podcast.webp` | 128×128 | Apple Podcast app icon |
| `logo-youtube.webp` | 128×128 | YouTube app icon |
| `logo-telegram.webp` | 128×128 | Telegram app icon |
| `icon-market-gap.webp` | 48×48 | The small “Market Gap” icon in the findings list |
| `competitor-1-soundcloud.webp` | 392×780 | 1st phone screenshot (visible & quick interactions) |
| `competitor-2-spotify.webp` | 392×780 | 2nd phone screenshot (clear & structured community) |
| `competitor-3-apple.webp` | 392×780 | 3rd phone screenshot (in-app conversations) |
| `competitor-4-youtube.webp` | 392×780 | 4th phone screenshot (chaptered episodes) |
| `competitor-5-telegram.webp` | 392×780 | 5th phone screenshot (timestamped commenting) |

The five app icons are reused at 22px in the “What did we find?” rows — one
export each is enough.

### Section 11 — Ideation

| File | Size | What to select |
| --- | --- | --- |
| `prioritization-matrix.webp` | 2272×1200 | The whole white matrix card, **including** the axis labels and the persona legend at the bottom |

### Section 12 — Crazy 8s

| File | Size | What to select |
| --- | --- | --- |
| `crazy8s-1.webp` | 710×1000 | 1st sketch sheet |
| `crazy8s-2.webp` | 710×1000 | 2nd sketch sheet |
| `crazy8s-3.webp` | 710×1000 | 3rd sketch sheet |

### Section 13 — Visual Design

Export **each numbered block as one image**, covering the phones, the annotation
boxes and the connector lines between them — but **not** the numbered heading
above it (that's real text on the page). Heights are approximate.

| File | Size | What to select |
| --- | --- | --- |
| `ui-1-playback.webp` | 2272×3720 | Block ① Playback — both phones, annotations, the Problems box and the Default/Active/Sending comment states |
| `ui-2-comments.webp` | 2272×2260 | Block ② Comment section — before/after, sort sheet, Problems box |
| `ui-3-community.webp` | 2272×1160 | Block ③ Community section — before/after plus annotations |
| `ui-4-lockscreen.webp` | 2272×1080 | Block ④ Lock screen — collapsed and expanded widget |
| `ui-5-reminder.webp` | 2272×1160 | Block ⑤ Reminder — the single phone plus its annotation |

### Section 14 — Impacts from user feedback

| File | Size | What to select |
| --- | --- | --- |
| `feedback-session-1.webp` | 1136×580 | Left Google Meet feedback capture |
| `feedback-session-2.webp` | 1136×580 | Right Google Meet feedback capture |

### Sections 15–17 — Spot illustrations

| File | Size | What to select |
| --- | --- | --- |
| `illus-target.webp` | 430×430 | Dart/target illustration (Success Metric) |
| `illus-crossroads.webp` | 430×430 | Person facing branching paths (Challenges) |
| `illus-collaboration.webp` | 590×420 | Two people at a laptop (Takeaways) |

## Not needed

- **The three donut charts (Survey):** drawn as inline SVG from the real
  percentages and the sampled Figma colours — do not export them.
- **The hand-drawn boxes** (assumption headers, survey callout, quote bubbles):
  approximated in CSS.
- Already exported and in place: `hero-shot.webp`, `hero-wave.svg`,
  `castbox-logo.webp`, `about-shots.webp`, `farnoosh-avatar.webp`,
  `questions.svg`.
- `castbox.png` is the project card cover used by `src/content/projects.ts` —
  leave it alone (though at 9.1 MB it's worth re-exporting smaller some time).
