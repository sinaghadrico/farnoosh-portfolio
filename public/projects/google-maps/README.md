# Google Maps case study — image exports

Source: Figma → **Google Maps**, file `T8Uv6j9TG9zH2M9WVR6024`, page `0:1`
(`1280 × 24208`) — the updated design.

Drop each file below into this folder using the **exact file name**, then open
`src/components/google-maps/assets.ts` and flip that entry's `ready` to `true`.
Until then the page renders a labelled dashed placeholder at the right aspect
ratio, so nothing breaks.

## Export settings

- **Format:** WebP (or PNG — then rename the entry in `assets.ts` to match).
- **Scale:** **2×** for everything under ~800px wide; **1×–2×** for the large
  `vd-*` compositions.
- **Background:** transparent for the avatar, app icons, source logos and spot
  illustrations; flat is fine for the phone screenshots and `vd-*` blocks.
- Sizes are **intrinsic pixel sizes** — the ratio is what matters.

## Status

**19 files already exported and live.** They were pulled from the *previous*
version of the file and are unchanged in the update: the source logos, the two
desk-research illustrations, the interview map, the persona illustration, the
six app icons, the five competitor screenshots and the five success-metric
icons.

**⏳ 20 files still missing** — 16 of them are new because the update rebuilt
the hero and replaced the whole Visual Design section.

> ⚠️ `vd-*` sizes below are **estimates read off the page render**. When the
> real files land, read their actual dimensions and update `w`/`h` in
> `assets.ts` — otherwise `next/image` will stretch them.

## What the update changed

| Section | Change |
| --- | --- |
| Hero | Rebuilt: gradient band (rebuilt in CSS) + a collage of screens on the right |
| Case Study Scope | New Methods and Objectives lists; Role now includes UX Designer |
| **My Role** | **New section** — avatar + two paragraphs |
| Visual Design | Replaced: 8 numbered feature blocks instead of 4 |
| Project Takeaways | Restyled — left colour bar, tinted card, ghost numeral |
| Contact | Phone number added |
| Everything else | Unchanged |

## The list

### Section 1 — Hero

| File | Size | What to select |
| --- | --- | --- |
| ⏳ `hero-collage.webp` | 566×509 | The collage of phone screens on the right of the hero, **without** the gradient background — that is rebuilt in CSS. Keep the clipping as it appears in the band. |

`hero-devices.webp` is the **old** hero export. Nothing references it any more —
delete it whenever you like.

### Section 3 — My Role

| File | Size | What to select |
| --- | --- | --- |
| ⏳ `role-avatar.webp` | 96×96 | The circular portrait beside the "My Role" heading |

### Section 4 — Problem discovery

| File | Size | What to select |
| --- | --- | --- |
| `source-cnn.webp` | 96×96 | ✅ done |
| `source-business-insider.webp` | 96×96 | ✅ done |
| `source-reddit.webp` | 96×96 | ✅ done |
| `insight-routing.webp` | 489×209 | ✅ done |
| `insight-transit.webp` | 486×324 | ✅ done |
| ⏳ `insight-labels.webp` | 244×169 | Person at a confusing signpost (3rd card) |
| ⏳ `insight-attractions.webp` | 244×169 | Traveller exploring a 3D city map (4th card) |

### Section 5 — Interviews

| File | Size | What to select |
| --- | --- | --- |
| `interview-map.webp` | 1136×552 | ✅ done — map only, the five cards are real text |

### Section 7 — Persona profile

| File | Size | What to select |
| --- | --- | --- |
| `persona-illustration.webp` | 1136×585 | ✅ done |

### Section 8 — Competitive analysis

All ✅ done: `app-apple-maps`, `app-waze`, `app-citymapper`, `app-kakaomap`,
`app-maps-me`, `app-neshan` (128×128 each) and `shot-waze`, `shot-apple-maps`,
`shot-kakaomap`, `shot-citymapper`, `shot-neshan` (387×840 each).

The greyed-out matrix cells reuse the same icon with a CSS grayscale filter, so
only the full-colour version is needed.

### Section 10 — Visual design

Export **each part as one image**, covering the phones, the connector lines and
the dashed annotation boxes — but **not** the numbered heading above the block
(that is real text on the page). "Hero" is the large before/after pair;
"details" is the row of smaller screens under it.

| File | Approx. size | Block |
| --- | --- | --- |
| ⏳ `vd-1-walking-hero.webp` | 1136×570 | ① Provided Feedback: Walking Navigation |
| ⏳ `vd-1-walking-details.webp` | 1136×575 | ① — the 4 report screens |
| ⏳ `vd-2-transit-hero.webp` | 1136×590 | ② Provided Feedback: Public Transportation |
| ⏳ `vd-2-transit-details.webp` | 1136×590 | ② — the 4 stop-location screens |
| ⏳ `vd-3-arrival-hero.webp` | 1136×570 | ③ Provided Feedback: Upon Arrival |
| ⏳ `vd-3-arrival-details.webp` | 1136×580 | ③ — the 3 feedback screens |
| ⏳ `vd-4-exploration-hero.webp` | 1136×520 | ④ Introduced Exploration Mode |
| ⏳ `vd-4-exploration-details.webp` | 1136×570 | ④ — the 2 street/map screens |
| ⏳ `vd-5-emergency-hero.webp` | 1136×740 | ⑤ Supported Emergency Conditions |
| ⏳ `vd-5-emergency-details.webp` | 1136×580 | ⑤ — the 3 SOS screens |
| ⏳ `vd-6-trip-hero.webp` | 1136×620 | ⑥ Personalized Trip Planning |
| ⏳ `vd-6-trip-details.webp` | 1136×690 | ⑥ — the 4 plan-builder screens |
| ⏳ `vd-6-trip-details-2.webp` | 1136×620 | ⑥ — the 2 timeline / start-navigation screens |
| ⏳ `vd-7-driving-hero.webp` | 1136×560 | ⑦ Customized Driving Experience |
| ⏳ `vd-7-driving-details.webp` | 1136×680 | ⑦ — the 3 route / speed / lane screens |
| ⏳ `vd-8-place-hero.webp` | 1136×590 | ⑧ Structured Place Information |

### Section 11 — Success metric icons

All ✅ done: `metric-safety`, `metric-exit-misses`, `metric-incident`,
`metric-feedback`, `metric-trip-planning`.

## Not needed

- **The hero gradient** — rebuilt in CSS so the heading stays real text.
- **The Impact/Effort matrix** — rebuilt in code from the real coordinates,
  quadrant fills and category colours.
- **The feature comparison table** — rebuilt in code; only the six app icons.
- **The five interview insight cards** — real text over `interview-map.webp`.
- **The hand-drawn orange callout** — approximated in CSS.
- **The persona cards, takeaway cards and every section heading** — real text.
- `google-maps.png` is the project card cover used by `src/content/projects.ts`
  — leave it alone (though at 15.9 MB / 7680×4800 it is worth re-exporting much
  smaller some time).
