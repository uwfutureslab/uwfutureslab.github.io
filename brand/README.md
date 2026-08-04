# Futures Lab — logo

**Concept: Prompt → Product.** A command-line `>` prompt with a blinking cursor;
the cursor **blooms** into a four-colour spark. You describe it, it exists.
The Google partnership lives inside the payoff (the spark carries the four
Google colours) rather than being bolted on.

Full interactive spec, all variants, embed code: **[logo-spec.html](logo-spec.html)**
(open it in a browser).

## Anatomy

| Part | Rule |
|---|---|
| `>` prompt | Google Blue `#4285F4`, monospace, weight 700 |
| `_` cursor | blue underscore, blinks (animated contexts only) |
| ✦ spark | 4-point sparkle, concave sides; one Google colour per quadrant |

Spark quadrants: **blue** top-right `#4285F4` · **red** bottom-right `#EA4335`
· **yellow** bottom-left `#FBBC05` · **green** top-left `#34A853`.

## Rest state

When not animating (nav, business card, favicon, avatar) the mark freezes at
its payoff: **`>` + spark**. That pairing is the logo. The standalone file is
[`../media/futures-lab-mark.svg`](../media/futures-lab-mark.svg) — the resting
mark in a rounded panel (also used as the favicon).

## Motion — "type, then bloom"

blink ×4 (~0.5s/tick) → cursor fades, spark scales up (ease-out, slight
rotate) → hold + twinkle → fade, reset. Loop ≈ 4.2s. Under
`prefers-reduced-motion`: show the finished `> ✦` state, no animation.

## Rules

**Do:** the spark is the only place all four colours meet · prompt stays
monospace · typed requests are lowercase plain language · give the mark air.

**Don't:** recolour the chevron/cursor rainbow · rounded or handwritten fonts
· stretch the spark (uniform scale only) · a second spark near the mark.

## How the landing page uses it (design-sketch/index.html)

- **Nav + colophon:** the rest-state mark (`>` + spark) next to the wordmark.
  On load, the nav mark plays the type-then-bloom **once** and then rests —
  the spec's infinite loop is for hero/standalone contexts; a perpetual loop
  in a sticky nav would fight the page content.
- **Favicon:** `media/futures-lab-mark.svg`.
- The old mark (conic-gradient rounded square) is retired.
