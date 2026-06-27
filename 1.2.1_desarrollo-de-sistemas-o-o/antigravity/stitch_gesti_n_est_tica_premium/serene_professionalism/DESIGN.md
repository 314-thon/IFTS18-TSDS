---
name: Serene Professionalism
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#4a454f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#7c7480'
  outline-variant: '#cdc3d0'
  surface-tint: '#6f5092'
  primary: '#6f5092'
  on-primary: '#ffffff'
  primary-container: '#d8b4fe'
  on-primary-container: '#604283'
  inverse-primary: '#dbb8ff'
  secondary: '#765469'
  on-secondary: '#ffffff'
  secondary-container: '#fdd0ea'
  on-secondary-container: '#79576c'
  tertiary: '#6d3bd7'
  on-tertiary: '#ffffff'
  tertiary-container: '#cdb8ff'
  on-tertiary-container: '#5f27c8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#efdbff'
  primary-fixed-dim: '#dbb8ff'
  on-primary-fixed: '#29074a'
  on-primary-fixed-variant: '#573878'
  secondary-fixed: '#ffd8ed'
  secondary-fixed-dim: '#e5bad3'
  on-secondary-fixed: '#2c1325'
  on-secondary-fixed-variant: '#5c3d51'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built on a foundation of serenity, femininity, and refined professionalism. It targets an audience that values wellness, creative consulting, or boutique professional services. The aesthetic is a modern interpretation of minimalism fused with soft tonal layering.

The visual narrative prioritizes "breathing room" through generous white space and a restricted, high-end pastel palette derived from the brand's logo. The style is clean and contemporary, avoiding unnecessary ornamentation to ensure the content remains the primary focus. The emotional response should be one of calm reliability and sophisticated warmth.

## Colors

The palette is anchored by soft, ethereal tones that transition from a gentle Lilac primary to a Soft Pink secondary. A deep Purple serves as the tertiary accent for high-contrast actions and critical text elements.

- **Primary (Lilac):** Used for main UI actions, active states, and brand-identifying motifs.
- **Secondary (Soft Pink):** Applied to subtle background washes, decorative elements, and secondary highlighting.
- **Tertiary (Purple):** Reserved for high-priority calls to action and sophisticated typography.
- **Neutrals:** A range of cool grays with a slight violet undertone ensures the interface feels cohesive and professional rather than stark.

## Typography

The design system utilizes **Manrope** exclusively to maintain a clean, geometric, and modern feel. The typeface’s balance between technical precision and friendly curves perfectly mirrors the "serene yet professional" brand pillars.

Headlines use a tighter letter-spacing and heavier weights to establish clear hierarchy, while body text maintains a generous line height for maximum legibility. For mobile displays, top-level headlines scale down slightly to prevent awkward line breaks while maintaining their visual impact.

## Layout & Spacing

This system employs a **Fluid Grid** model based on an 8px rhythmic scale. 

- **Desktop:** 12-column layout with 24px gutters and 64px outer margins.
- **Tablet:** 8-column layout with 20px gutters and 32px outer margins.
- **Mobile:** 4-column layout with 16px gutters and 16px margins.

The spacing philosophy is "Atmospheric." We favor larger gaps (`lg` and `xl` tokens) between major sections to reduce cognitive load and enhance the feeling of serenity. Components should use `md` (24px) padding internally to maintain a spacious, premium feel.

## Elevation & Depth

To maintain a soft, feminine aesthetic, this design system avoids heavy, dark shadows. Instead, it utilizes **Tonal Layers** and **Ambient Shadows**:

1.  **Low Elevation:** No shadow. Differentiation is achieved through subtle shifts in background color (e.g., a white card on a #FDFCFE background).
2.  **Mid Elevation:** Used for cards and buttons. A very soft, diffused shadow with a Lilac-tinted hue (e.g., `0px 4px 20px rgba(216, 180, 254, 0.15)`).
3.  **High Elevation:** Reserved for modals and dropdowns. A multi-layered shadow that remains light but provides clear separation from the background.

Surface borders should be thin (1px) and use low-contrast pastel tones rather than harsh grays.

## Shapes

The shape language is defined by a "Gentle Roundness." Using the `ROUND_EIGHT` standard (0.5rem / 8px), the UI feels approachable and soft without appearing juvenile.

- **Standard Elements (Buttons, Inputs):** 8px corner radius.
- **Large Containers (Cards, Modals):** 16px corner radius (`rounded-lg`).
- **Interactive Tags/Chips:** Full pill-shape to provide a distinct visual contrast against rectangular inputs.

## Components

### Buttons
Primary buttons feature a solid Lilac background with white text. Secondary buttons utilize a Soft Pink ghost style with a Lilac border. Interaction states (hover) should involve a subtle shift toward the Tertiary Purple to provide clear feedback.

### Input Fields
Inputs are defined by a 1px border in a pale neutral-violet. On focus, the border transitions to Primary Lilac with a soft 4px glow. Labels are positioned above the field in `label-md` for clarity.

### Cards
Cards are the primary container for content. They should have a white background, the standard 16px corner radius, and a "Mid Elevation" ambient shadow. Padding inside cards should never be less than 24px.

### Chips & Tags
Used for categorization. These should be pill-shaped with a Soft Pink background and a slightly darker pink or purple text for readability.

### Progress Indicators
Steppers and progress bars should use a soft gradient transition from Soft Pink to Lilac to reinforce the brand's serene color story.