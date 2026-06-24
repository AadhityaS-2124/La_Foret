---
name: AURA
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#586059'
  on-secondary: '#ffffff'
  secondary-container: '#dde5db'
  on-secondary-container: '#5e665f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#dde5db'
  secondary-fixed-dim: '#c1c9c0'
  on-secondary-fixed: '#161d18'
  on-secondary-fixed-variant: '#414942'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.08em
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies the "Japandi" philosophy—a synthesis of Japanese minimalism and Scandinavian functionality. It targets a high-end audience that values intentionality, silence, and structural clarity. The emotional response is one of calm authority and timeless sophistication.

The visual style is **Hard-Edge Minimalism**. It rejects all forms of simulated depth, including shadows, gradients, and blurs. Instead, it relies on precise alignment, generous negative space, and the rhythmic use of thin hairlines to define hierarchy. Every element must feel essential; if a stroke or a label does not serve a functional purpose, it is removed.

## Colors
The palette is grounded in organic, architectural tones. 

- **Primary (#1A1A1A):** Used for all high-contrast elements, including primary text, borders, and structural lines. It provides the "ink on paper" feel.
- **Background (#FBFBF9):** An expansive, warm off-white that prevents the starkness of pure white while maintaining a high-end gallery feel.
- **Secondary/Surface (#F2F1ED):** Used for subtle containment and layout partitioning without introducing heavy visual weight.
- **Accent (#7A827A):** A muted sage used sparingly for active states, success indicators, or to draw focus to a single primary call-to-action.

## Typography
The typographic scale emphasizes contrast between the expressive, editorial Serif headers and the functional, lightweight Sans-Serif body.

- **Headlines:** Set in Playfair Display. Use high-scale headers to create "moments" in the layout. Tracking should be slightly tightened for large sizes.
- **Body & UI:** Set in Inter at 300 (Light) weight to maintain the airy, minimalist aesthetic. 
- **Labels:** Always uppercase with increased letter spacing to denote navigation, buttons, and overlines. This creates a technical, architectural feel.

## Layout & Spacing
The layout follows a **Rigid Fixed Grid** philosophy within a maximum container width of 1440px. 

- **Grid:** A 12-column system for desktop, 6-column for tablet, and 2-column for mobile.
- **Rhythm:** All spacing must be multiples of 4px. Use extreme vertical padding (e.g., 120px or 160px between sections) to enforce the "AURA" of the brand.
- **Borders as Grid:** Use 1px #1A1A1A lines to separate sections horizontally or vertically, mimicking a blueprint or a traditional Japanese floor plan.

## Elevation & Depth
Depth is created exclusively through **Tonal Layering** and **Line Work**. 

- **Level 0 (Base):** #FBFBF9 (Background).
- **Level 1 (Containers):** #F2F1ED (Secondary Surface). Use this for sidebars, footer blocks, or subtle card backgrounds.
- **Level 2 (Interaction):** High-contrast #1A1A1A fill for primary actions.

Shadows are strictly prohibited. Overlays (modals) should use a solid #FBFBF9 background with a 1px #1A1A1A border to distinguish them from the base layer.

## Shapes
The shape language is strictly **Rectilinear**. All corners are 0px (Sharp). This reinforces the architectural and precision-based nature of the design system. Rounding is only permitted for iconography that represents physical, circular objects; all UI containers, buttons, and inputs must remain perfectly square.

## Components

- **Buttons:** 
  - *Primary:* Solid #1A1A1A fill with #FBFBF9 uppercase label. 0px radius.
  - *Secondary:* 1px #1A1A1A border, transparent background, #1A1A1A label.
  - *Active:* Solid #7A827A (Muted Sage) fill.
- **Input Fields:** 1px #1A1A1A bottom-border only for a "form" look, or a full 1px #1A1A1A box for higher visibility. No background fill unless focused (use #F2F1ED).
- **Cards:** No shadows. Define boundaries using either a 1px #1A1A1A border or a simple #F2F1ED background fill.
- **Lists:** Separated by 1px #F2F1ED horizontal rules. High vertical padding (16px to 24px) per item.
- **Checkboxes/Radios:** Perfectly square (0px radius). Checked state is a solid #1A1A1A fill or a simple "X" mark.
- **Navigation:** Top-tier navigation uses Label-MD typography with a 1px #1A1A1A underline on the active state.