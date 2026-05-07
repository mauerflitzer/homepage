---
name: Silicon Logic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#8e9193'
  on-tertiary-container: '#272a2c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-page: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 96px
---

## Brand & Style

This design system is built for a high-end technical portfolio that balances executive sophistication with deep engineering roots. The brand personality is "The Architect of Intelligence"—authoritative, precise, and visionary. 

The aesthetic leverages a mix of **Minimalism** and **Glassmorphism**. It utilizes heavy whitespace (or "dark space") to allow complex technical data to breathe, while employing frosted glass layers to suggest depth and computational complexity. The emotional response should be one of "trust through transparency," where the UI feels like a high-performance instrument.

## Colors

The palette is defined by a "Midnight Lab" aesthetic. The foundational layer is a deep **Slate Gray** (Neutral), transitioning into **Charcoal** for container surfaces. 

- **Primary (Electric Indigo):** Used for primary actions, active states, and "intelligence" indicators.
- **Secondary (Neon Cyan):** Used for technical data highlights, code syntax, and secondary accents.
- **Surface:** A series of semi-transparent slates to create hierarchy without breaking the dark-mode immersion.
- **Glow:** Subtle radial gradients of the primary color with 10-15% opacity are used behind key cards to simulate energy.

## Typography

This design system utilizes a dual-font strategy. **Inter** provides a highly legible, Swiss-inspired foundation for all narrative and interface text. Its tight aperture and variable weight range allow for clean information density.

**Space Grotesk** is used as the technical utility font. It should be applied to all "meta" information: labels, code snippets, timestamps, and architectural specifications. All headlines should utilize a slight negative letter-spacing to achieve that "SF Tech" editorial feel.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (12 columns) and a fluid model on mobile. A strict 4px baseline grid ensures mathematical alignment of all elements.

- **Negative Space:** Use `stack-xl` to separate major case studies to emphasize a premium, gallery-like experience.
- **Information Density:** Use `stack-sm` for technical metadata groupings to keep related data points conceptually linked.
- **Sectioning:** Content should be contained within a 1280px max-width wrapper, centered horizontally.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

1.  **Base Layer:** The deepest slate (`#0F172A`).
2.  **Surface Layer:** A slightly lighter charcoal with a 1px solid border at 10% white opacity.
3.  **Glass Layer:** Used for navigation bars and floating cards. `backdrop-filter: blur(12px)` with a background of `rgba(15, 23, 42, 0.7)`.
4.  **Accent Elevation:** Elements with high priority (Active Project Cards) receive a "Secondary" glow—a 1px border using a linear gradient from Electric Indigo to Neon Cyan, paired with a very soft, diffused outer glow (20px blur, 10% opacity).

## Shapes

The shape language is "Soft-Technical." A base roundedness of **4px (Soft)** is used for most UI components (inputs, buttons, tags) to maintain a crisp, engineered look. 

Larger containers such as project cards or "bento-box" style grid items may use `rounded-lg` (8px) to feel more approachable. Circles are reserved exclusively for avatars or status indicators (e.g., "System Live").

## Components

### Buttons
- **Primary:** Solid Electric Indigo with white text. 1px inner light-border to give a "glass-press" feel.
- **Ghost:** Transparent background with a 1px slate border. Transitions to a Secondary (Cyan) border on hover.

### Cards (Bento Style)
Use for project highlights. Each card features a 1px border (`rgba(255,255,255,0.05)`) and a subtle background noise texture (2% opacity) to add a tactile, non-digital feel.

### Chips & Tags
Use Space Grotesk in All-Caps. Backgrounds should be low-opacity tints of the Cyan accent (e.g., `rgba(6, 182, 212, 0.1)`) with matching text color.

### Input Fields
Darker than the surface layer to create an "inset" look. Use the Neon Cyan for the focus ring (2px) to signify an active system state.

### Code Blocks
Encapsulated in a "terminal" container. Use a distinct dark background (`#020617`) with the monospace font. Include a subtle header with "window controls" (Red, Yellow, Green dots) to emphasize the dev-centric nature of the portfolio.

### Data Visualizations
Small sparklines or "system health" bars should use the Primary/Secondary gradient to represent AI performance or project impact metrics.