---
name: Ricardo Duque Portfolio
description: One-page developer portfolio. Monochrome zinc canvas, one signal-orange accent, real product imagery from Resty.
dials:
  design-variance: 6
  motion-intensity: 5
  visual-density: 4
colors:
  light:
    canvas: "#F6F6F7"
    surface: "#FDFDFD"
    surface-sunk: "#EDEDEF"
    ink: "#111113"
    ink-muted: "#52525B"
    ink-subtle: "#67676F"
    hairline: "#E4E4E7"
    hairline-strong: "#D4D4D8"
    accent: "#C2410C"
    accent-hover: "#9A3412"
    accent-ink: "#FFF7F2"
    accent-soft: "#FDEEE6"
  dark:
    canvas: "#0C0C0E"
    surface: "#151518"
    surface-sunk: "#1C1C20"
    ink: "#F4F4F5"
    ink-muted: "#A1A1AA"
    ink-subtle: "#8B8B94"
    hairline: "#26262B"
    hairline-strong: "#36363D"
    accent: "#FB923C"
    accent-hover: "#FDBA74"
    accent-ink: "#0C0C0E"
    accent-soft: "#2A1A10"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 5.6vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  small:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "normal"
  figure:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2rem + 3.5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.05em"
    fontVariantNumeric: "tabular-nums"
  meta:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  panel: "20px"
  media: "14px"
  control: "9999px"
spacing:
  base: "4px"
  gutter-mobile: "20px"
  gutter-desktop: "32px"
  section-y-mobile: "80px"
  section-y-desktop: "128px"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.small}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline-strong}"
    typography: "{typography.small}"
    rounded: "{rounded.control}"
    height: "44px"
    padding: "0 20px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-sunk}"
  chip:
    backgroundColor: "{colors.surface-sunk}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
  panel:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.panel}"
    padding: "24px / 40px (lg)"
  nav:
    height: "64px"
    backgroundColor: "{colors.canvas} at 80% + backdrop blur"
    border: "1px solid {colors.hairline} (bottom)"
---

# Ricardo Duque Portfolio: DESIGN.md

## Overview

A one-page portfolio for a Full Stack & Mobile developer. The reader is a recruiter or hiring manager scanning for proof: what he shipped, for whom, with what stack, and how to reach him. The design gets out of the way of that scan.

**Design read:** developer portfolio for recruiters and hiring managers hiring remote engineers, with a clean technical language, leaning toward Tailwind v4 utilities + Geist + restrained motion.

**Dials:** `DESIGN_VARIANCE 6` (offset, left-aligned, asymmetric splits; no chaos), `MOTION_INTENSITY 5` (fluid entry and scroll reveals, hover feedback, nothing looping), `VISUAL_DENSITY 4` (standard spacing, content-first).

**Key characteristics**
- Cool zinc monochrome canvas. One accent, **signal orange**, used on the primary CTA, the availability indicator, focus rings, and tinted feature surfaces. Nothing else is colored.
- Resty's own black-and-white product art (phone screen, restroom card, city map) is the only imagery. It is real, it is his, and its monochrome palette sits naturally on the zinc canvas.
- Geist for everything, Geist Mono only for dates and metadata. Display type tracks tight; body stays neutral.
- Auto light/dark via `prefers-color-scheme`. Both modes are first-class; the whole page follows one theme, no inverted sections.

## Colors

All colors are CSS custom properties on `:root`, swapped under `@media (prefers-color-scheme: dark)`, and exposed to Tailwind through `@theme inline`. Never hard-code a hex in a component.

- **canvas**: page background. Off-white `#F6F6F7` / off-black `#0C0C0E`. Never pure `#FFF` or `#000`.
- **surface**: panels and bento cells sitting on the canvas.
- **surface-sunk**: chips, hover fills, secondary panels.
- **ink / ink-muted / ink-subtle**: headings and emphasis / body copy / meta and dates. All pass WCAG AA on every surface in both modes (lowest: ink-subtle on surface-sunk, 4.8:1 light / 5.0:1 dark).
- **hairline / hairline-strong**: 1px borders on panels / borders on secondary buttons.
- **accent**: `#C2410C` light (4.8:1 on canvas, accent-ink on it 4.9:1), `#FB923C` dark (8.6:1 on canvas, canvas-colored text on it 8.6:1). `accent-hover` is one step deeper in light, one step lighter in dark.
- **accent-soft**: tinted surface for the one or two cells per section that deserve emphasis. Accent-colored text on it still passes AA (4.6:1 light, 7.4:1 dark).

**Color lock:** the orange accent is the only hue on the page. No blue links, no green "success" badges, no gradient text.

## Typography

| Token | Use |
|---|---|
| `display` | Hero name only. |
| `headline` | Section headings (h2). Title Case. `text-wrap: balance`. |
| `title` | Role titles, card headings (h3). |
| `lead` | Hero subtitle, section intros. Max 60ch. |
| `body` | Bullets and paragraphs. Max 68ch. `text-wrap: pretty`. |
| `small` | Buttons, chips, labels. |
| `figure` | Big numbers (percentiles, downloads). Always `tabular-nums`. |
| `meta` | Dates, employment type, file hints. Geist Mono. |

Rules
- Emphasis inside a sentence is **weight** (600) in the same family, never a second typeface.
- Metrics inside bullets (e.g. "~2,000 orders per day") are set in `ink` at weight 600 so a scanning eye catches them.
- No em dashes or en dashes anywhere visible. Date ranges use a spaced hyphen: `Jun 2024 - Present`.
- Brand names and tech tokens carry `translate="no"`.

## Layout

- Container `max-w-[1200px]`, gutters 20px mobile / 32px desktop.
- Section rhythm: 80px vertical padding on mobile, 128px on desktop. Sections are separated by space, not rules.
- Every section uses a different layout family:
  1. **Hero**: asymmetric split, 7/5. Text left, Resty phone on an accent-soft panel right.
  2. **Featured project (Resty)**: one wide panel with the Resty city map as its background; content left, restroom card image, stats, and stack right.
  3. **Experience**: sticky side heading (4 cols) + timeline (8 cols) with a mono date column.
  4. **Skills**: bento grid, exactly 7 cells for the 7 CV groups, mixed spans, one accent-soft cell.
  5. **Certifications**: row of three big figures divided by hairlines, courses listed below.
  6. **Contact**: centered closing block with the email as a display-size link.
- `html` carries `scroll-padding-top` equal to the nav height plus 16px, so anchor jumps and keyboard focus never land under the sticky nav.
- Below 768px every multi-column layout collapses to a single column, declared explicitly in each component.

## Shapes

Documented radius rule, applied everywhere:
- **Panels and bento cells**: 20px.
- **Images inside panels**: 14px, or none when the image is a transparent cut-out.
- **Interactive controls** (buttons, chips, nav CTA): full pill.

No other radii.

## Elevation

Flat by default. Hierarchy comes from surface steps (canvas → surface → surface-sunk) and 1px hairlines, not shadows. The only shadows are the ones baked into Resty's product images.

## Components

- **Primary button**: accent fill, accent-ink label, pill, 44px tall. One primary per view: "Email Me" in the hero, "Download CV" in the contact block. The nav's "Download CV" is secondary so it never competes with the hero CTA.
- **Ink button**: ink fill, canvas label, pill. Reserved for app-store links, echoing the official black store badges (inverts to light in dark mode).
- **Secondary button**: transparent with hairline-strong border; hover fills surface-sunk.
- **Chip**: surface-sunk pill with `small` text. Used for skills and stack lists. Not interactive.
- **Panel**: surface fill, hairline border, 20px radius, 24px padding (40px on lg).
- **Nav**: sticky, 64px, canvas at 80% with backdrop blur and a bottom hairline. Name left, section links center-right (hidden below md), "Download CV" right. Always one line.
- **Timeline entry**: mono date column (160px on md+), then title, company line with employment-type meta, bullets. Current roles get a small accent "Current" label (real state, not decoration).

**CTA labels (one label per intent):** `Email Me`, `LinkedIn`, `Download CV`, `App Store`, `Google Play`, `app-resty.com`. Do not add synonyms like "Get in touch" or "Let's talk".

## Motion

- Library: `motion/react` via `LazyMotion` + `domAnimation` to keep the bundle small.
- Hero: children fade and rise 16px on load, staggered 80ms, 600ms, ease `[0.16, 1, 0.3, 1]`.
- Sections: fade and rise 20px when 20% visible, once.
- Buttons: 150ms color and background transitions; `active:scale-[0.98]` for a physical press.
- Why it moves: the hero stagger sets reading order (name, role, actions), and the section reveals mark where the reader is. Nothing loops, nothing parallaxes.
- `prefers-reduced-motion: reduce` disables all transforms (Motion's `reducedMotion="user"`) and smooth scrolling.
- Only `transform` and `opacity` animate. Never `transition: all`.

## Imagery

All images come from Resty (app-resty.com), the product he co-founded:
- `resty-phone.webp`: onboarding screen in an iPhone frame, transparent background. Hero.
- `resty-card.webp`: restroom detail card, transparent corners. Featured project.
- `resty-map.webp`: light greyscale city map. Featured-project panel background. In dark mode it is inverted and dimmed so it reads as a dark map.

Every `<img>` has explicit `width`/`height`. The hero phone gets `fetchpriority="high"`; everything else below the fold is `loading="lazy"`.

No stock photos, no picsum placeholders, no hand-drawn SVG illustrations, no div-built fake screenshots.

## Content Rules

- **Source of truth:** `Ricardo_Duque_CV.pdf`. Every role, date, number, skill, and certification on the page comes from it verbatim or near-verbatim. Do not add projects, metrics, clients, or skills.
- Contact details shown: email, phone, LinkedIn, location/timezone.
- The downloadable CV is the unmodified PDF, served from `public/`.

## Responsive

| Breakpoint | Behavior |
|---|---|
| < 768px | Single column everywhere. Nav shows name + Download CV only. Hero phone panel stacks under the text. Timeline date moves above the title. Bento cells stack. Figures stack with top hairlines. |
| 768-1023px | Two-column bento, timeline keeps its date column, hero still stacked. |
| ≥ 1024px | Full layouts as described above. |

Touch targets ≥ 44px. No horizontal scroll at 320px.

## Do / Don't

**Do**
- Keep the page one theme per visit.
- Let real numbers carry emphasis (weight, not color).
- Keep hero to four text elements: availability eyebrow, name, role line, actions.

**Don't**
- Add a second accent hue, gradients, glows, or glassmorphism.
- Add eyebrows above section headings (the hero eyebrow is the only one).
- Put pills or labels on top of images.
- Use em dashes, en dashes, or scroll cues.
- Invent metrics or testimonials.
