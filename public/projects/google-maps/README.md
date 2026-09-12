# Google Maps case study — image exports

Source: Figma → the **"All Sections"** frame (`18:588`, `1280 × 21104`) in the
file you opened via the Desktop Bridge plugin.

Drop each file below into this folder using the **exact file name**, then open
`src/components/google-maps/assets.ts` and flip that entry's `ready` to `true`.
Until then the page renders a labelled dashed placeholder at the right aspect
ratio, so nothing breaks.

## Export settings

- **Format:** WebP (or PNG if Figma can't export WebP — then rename the entry in
  `assets.ts` to match).
- **Scale:** **2×** for everything under ~800px wide; **1×** for the large
  `ui-*` compositions and the hero (they're already ≥1080px).
- **Background:** keep transparent for the app icons, source logos and the spot
  illustrations; the phone screenshots and the `ui-*` compositions can be flat.
- Sizes below are the **intrinsic pixel sizes** used for aspect ratio — the
  exact number matters less than the ratio.

## The list (33 files)

### Section 1 — Hero

| File | Size | Figma node | What to select |
| --- | --- | --- | --- |
| `hero-devices.webp` | 1280×840 | `18:597` | The whole **Devices** frame — the doodle backdrop plus both angled phones |

### Section 3 — Problem discovery

| File | Size | Figma node | What to select |
| --- | --- | --- | --- |
| `source-cnn.webp` | 48×48 | `18:713` → `CNN` | CNN logo next to "The Cost of a Wrong Direction" |
| `source-business-insider.webp` | 48×48 | `18:732` → `X` | Business Insider logo next to "Lost in the Middle of Nowhere" |
| `source-reddit.webp` | 48×48 | `18:746` → `Reddit` | Reddit logo next to "Blind Spot for Attractions" |
| `insight-routing.webp` | 244×169 | `18:813` | Car skidding off a snowy road |
| `insight-transit.webp` | 244×169 | `18:1487` | Anxious traveller at a bus stop |
| `insight-labels.webp` | 244×169 | `18:1639` | Person at a confusing signpost |
| `insight-attractions.webp` | 244×169 | `18:1847` | Traveller exploring a 3D city map |

### Section 4 — Interviews

| File | Size | Figma node | What to select |
| --- | --- | --- | --- |
| `interview-map.webp` | 1136×552 | `18:2356` | The **Map** frame only — the dotted world map. **Not** the five white insight cards on top of it; those are real text on the page. |

### Section 6 — Persona profile

| File | Size | Figma node | What to select |
| --- | --- | --- | --- |
| `persona-illustration.webp` | 1136×584 | `18:2513` | The full-width illustration of the two travellers |

### Section 7 — Competitive analysis

App icons are used twice — 56px in the header row and 32px in the cells — so
one export each is enough. The greyed-out cells are the **same** icon rendered
with a CSS grayscale filter, so export only the full-colour version.

| File | Size | What to select |
| --- | --- | --- |
| `app-apple-maps.webp` | 128×128 | Apple Maps icon |
| `app-waze.webp` | 128×128 | Waze icon |
| `app-citymapper.webp` | 128×128 | Citymapper icon |
| `app-kakaomap.webp` | 128×128 | KakaoMap icon |
| `app-maps-me.webp` | 128×128 | Maps.me icon |
| `app-neshan.webp` | 128×128 | Neshan icon |

| File | Size | Figma node | What to select |
| --- | --- | --- | --- |
| `shot-waze.webp` | 193×420 | `18:3769` | 1st phone screenshot (Waze — real-time feedback) |
| `shot-apple-maps.webp` | 193×420 | `18:3777` | 2nd phone screenshot (Apple Maps — routes list) |
| `shot-kakaomap.webp` | 193×420 | `18:3785` | 3rd phone screenshot (KakaoMap — transit info) |
| `shot-citymapper.webp` | 193×420 | `18:3793` | 4th phone screenshot (Citymapper — delays) |
| `shot-neshan.webp` | 193×420 | `18:3801` | 5th phone screenshot (Neshan — lane guidance) |

### Section 9 — Visual design

Export **each phone pair as one image**, covering the phones, the annotation
boxes and any connector lines — but **not** the numbered heading above the
block (that's real text on the page).

| File | Size | Figma node | Block |
| --- | --- | --- | --- |
| `ui-1a-route-details.webp` | 1080×874 | `18:3906` | ① Separated route details — pair 1 |
| `ui-1b-route-details.webp` | 1080×874 | `18:4239` | ① Separated route details — pair 2 |
| `ui-1c-route-details.webp` | 1080×874 | `18:4457` | ① Separated route details — pair 3 |
| `ui-2a-lane-feedback.webp` | 1080×874 | `18:4847` | ② Lane display & real-time feedback — pair 1 |
| `ui-2b-lane-feedback.webp` | 1080×874 | `18:5117` | ② Lane display & real-time feedback — pair 2 |
| `ui-2c-lane-feedback.webp` | 1080×874 | `18:5334` | ② Lane display & real-time feedback — pair 3 |
| `ui-3a-arrival-feedback.webp` | 1080×874 | `18:5411` | ③ Feedback upon arrival — pair 1 |
| `ui-3b-arrival-feedback.webp` | 1080×874 | `18:5509` | ③ Feedback upon arrival — pair 2 |

### Section 10 — Success metric icons

| File | Size | Figma node | What to select |
| --- | --- | --- | --- |
| `metric-safety.webp` | 48×48 | `18:5603` | Green shield with a tick |
| `metric-exit-misses.webp` | 48×48 | `18:5617` | Cluster of coloured map pins |
| `metric-incident.webp` | 48×48 | `18:5637` | Magnifying glass with an exclamation mark |
| `metric-feedback.webp` | 48×48 | `18:5646` | Sad/happy face pair with an arrow |
| `metric-trip-planning.webp` | 48×48 | `18:5653` | Calendar with a clock |

## Not needed

- **The Impact/Effort matrix (section 8)** — rebuilt in code from the real
  coordinates, quadrant fills and category colours. Do not export it.
- **The feature comparison table (section 7)** — rebuilt in code; only the six
  app icons above are needed.
- **The five interview insight cards (section 4)** — real text, positioned over
  `interview-map.webp`.
- **The hand-drawn orange callout (section 5)** — approximated in CSS.
- **The persona cards (section 6)** — real text; only the illustration above it
  is an export.
- `google-maps.png` is the project card cover used by `src/content/projects.ts`
  — leave it alone (though at 15.9 MB / 7680×4800 it's worth re-exporting much
  smaller some time).
