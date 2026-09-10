# Bambinos Design System

Adapted from [DESIGN-lovable.md](file:///C:/Users/pc/Downloads/DESIGN-lovable.md): Lovable’s warm parchment system, with **primary `#F57584`** and **Lexend Deca**.

## 1. Visual Theme & Atmosphere

The page sits on a creamy, parchment-toned background (`#f7f4ed`) — approachable and analog, like a well-crafted notebook. Near-black text (`#1c1c1c`) on this cream keeps contrast readable without a cold white canvas.

**Lexend Deca** is the brand typeface: a humanist sans with open counters and a comfortable reading rhythm, suited to parents scanning articles. At display sizes (48px–60px), weight 600 with negative letter-spacing (-0.9px to -1.5px) compresses headlines into confident, editorial statements. Fallbacks: `ui-sans-serif, system-ui`.

Depth is opacity-driven. Grays are `#1c1c1c` at varying opacities (0.03, 0.04, 0.4, 0.82–0.83). Borders: `1px solid #eceae4` for light divisions and `1px solid rgba(28, 28, 28, 0.4)` for interactive boundaries. **Primary coral `#F57584`** is the accent for CTAs, selected categories, focus rings, and link hover — the one saturated brand color in an otherwise warm-neutral palette.

**Key Characteristics:**
- Warm parchment background (`#f7f4ed`)
- Lexend Deca with editorial letter-spacing at display sizes
- Opacity-driven neutrals from `#1c1c1c`
- Primary coral `#F57584` for actions and emphasis
- Inset shadow on primary buttons: `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset`
- Warm borders: `#eceae4` (subtle), `rgba(28,28,28,0.4)` (interactive)
- Full-pill radius (`9999px`) for category chips and icon containers
- Focus: `rgba(245,117,132,0.35) 0px 4px 12px` (coral glow) plus charcoal soft shadow as needed
- shadcn/ui + Radix UI primitives with Tailwind CSS when building components

Font files (project copies live in `fonts/`):

| Weight | File |
|--------|------|
| 100 Thin | `fonts/LexendDeca-Thin.ttf` |
| 200 ExtraLight | `fonts/LexendDeca-ExtraLight.ttf` |
| 300 Light | `fonts/LexendDeca-Light.ttf` |
| 400 Regular | `fonts/LexendDeca-Regular.ttf` |
| 500 Medium | `fonts/LexendDeca-Medium.ttf` |
| 600 SemiBold | `fonts/LexendDeca-SemiBold.ttf` |
| 700 Bold | `fonts/LexendDeca-Bold.ttf` |
| 800 ExtraBold | `fonts/LexendDeca-ExtraBold.ttf` |
| 900 Black | `fonts/LexendDeca-Black.ttf` |

## 2. Color Palette & Roles

### Primary
- **Coral** (`#F57584`): Brand primary. Primary CTAs, selected chips, focus ring, link hover, accent marks.
- **Cream** (`#f7f4ed`): Page background, card surfaces, tertiary button surfaces.
- **Charcoal** (`#1c1c1c`): Primary text, headings. Not used as the main button fill (coral is).
- **Off-White** (`#fcfbf8`): Text on coral/dark buttons, subtle highlight.

Coral RGB: `245, 117, 132`. CSS: `hsl(353 86% 71%)`.

### Neutral Scale (Opacity-Based)
- **Charcoal 100%** (`#1c1c1c`): Primary text, headings.
- **Charcoal 83%** (`rgba(28,28,28,0.83)`): Strong secondary text.
- **Charcoal 82%** (`rgba(28,28,28,0.82)`): Body copy.
- **Muted Gray** (`#5f5f5d`): Secondary text, descriptions, captions.
- **Charcoal 40%** (`rgba(28,28,28,0.4)`): Interactive borders, outline buttons.
- **Charcoal 4%** (`rgba(28,28,28,0.04)`): Subtle hover backgrounds.
- **Charcoal 3%** (`rgba(28,28,28,0.03)`): Barely-visible overlays.

### Surface & Border
- **Light Cream** (`#eceae4`): Card borders, dividers, image outlines.
- **Cream Surface** (`#f7f4ed`): Card backgrounds, section fills.

### Interactive
- **Primary** (`#F57584`): Buttons, selected category, active nav.
- **Primary 50%** (`rgba(245,117,132,0.5)`): Focus ring (`--tw-ring-color`).
- **Primary 12%** (`rgba(245,117,132,0.12)`): Selected chip / soft fill.
- **Focus Shadow** (`rgba(245,117,132,0.25) 0px 4px 12px`): Focus and active emphasis.

### Inset Shadows
- **Button Inset** (`rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`): Primary coral buttons.

## 3. Typography Rules

### Font Family
- **Primary**: `Lexend Deca`, fallbacks: `ui-sans-serif, system-ui`
- **UI weights**: 400 Regular (body, buttons, links), 600 SemiBold (headings, emphasis)
- **Optional**: 500 Medium for labels; 100–300 and 700–900 exist in the files but are not required for hierarchy

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Lexend Deca | 60px (3.75rem) | 600 | 1.00–1.10 | -1.5px | Maximum impact |
| Display Alt | Lexend Deca | 60px (3.75rem) | 500 | 1.00 | normal | Lighter hero |
| Section Heading | Lexend Deca | 48px (3.00rem) | 600 | 1.00 | -1.2px | Feature titles |
| Sub-heading | Lexend Deca | 36px (2.25rem) | 600 | 1.10 | -0.9px | Sub-sections |
| Card Title | Lexend Deca | 20px (1.25rem) | 400 | 1.25 | normal | Card headings |
| Body Large | Lexend Deca | 18px (1.13rem) | 400 | 1.38 | normal | Introductions |
| Body | Lexend Deca | 16px (1.00rem) | 400 | 1.50 | normal | Reading text |
| Button | Lexend Deca | 16px (1.00rem) | 400 | 1.50 | normal | Button labels |
| Button Small | Lexend Deca | 14px (0.88rem) | 400 | 1.50 | normal | Compact buttons |
| Link | Lexend Deca | 16px (1.00rem) | 400 | 1.50 | normal | Underline |
| Link Small | Lexend Deca | 14px (0.88rem) | 400 | 1.50 | normal | Footer links |
| Caption | Lexend Deca | 14px (0.88rem) | 400 | 1.50 | normal | Metadata |

### Principles
- Hierarchy through size and spacing; keep UI to 400 and 600
- Headlines: negative letter-spacing (-0.9px to -1.5px); body: normal tracking
- Do not letter-space headings wider

## 4. Component Stylings

### Buttons

**Primary (Coral, Inset Shadow)**
- Background: `#F57584`
- Text: `#fcfbf8`
- Padding: 8px 16px
- Radius: 6px
- Shadow: button inset
- Active: opacity 0.8
- Focus: coral focus shadow
- Use: Primary CTA

**Ghost / Outline**
- Background: transparent
- Text: `#1c1c1c`
- Padding: 8px 16px
- Radius: 6px
- Border: `1px solid rgba(28,28,28,0.4)`
- Active: opacity 0.8
- Use: Secondary actions

**Cream Surface**
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Padding: 8px 16px
- Radius: 6px
- No border
- Use: Tertiary / toolbar

**Pill / Category Chip**
- Default: cream, charcoal text, `1px solid #eceae4`, radius 9999px
- Selected: `#F57584` background or `rgba(245,117,132,0.12)` fill with `#F57584` text
- Use: Categories, filters, icon buttons

### Cards & Containers
- Background: `#f7f4ed`
- Border: `1px solid #eceae4`
- Radius: 12px (standard), 16px (featured), 8px (compact)
- No box-shadow by default

### Inputs & Forms
- Background: `#f7f4ed`
- Text: `#1c1c1c`
- Border: `1px solid #eceae4`
- Radius: 6px
- Focus: ring `rgba(245,117,132,0.5)`
- Placeholder: `#5f5f5d`

### Navigation
- Sticky cream bar
- Links: Lexend Deca 14–16px weight 400, `#1c1c1c`
- CTA: coral primary button, 6px radius
- Mobile: hamburger, 6px radius

### Links
- Color: `#1c1c1c`
- Decoration: underline
- Hover: `#F57584`

### Distinctive (Bambinos landing)
- Category list as pills
- Article cards: image/placeholder + title + caption, 12px radius, `#eceae4` border
- Empty articles / empty categories: muted body copy, no fake chrome

## 5. Layout Principles

### Spacing System
Base 8px. Scale: 8, 10, 12, 16, 24, 32, 40, 56, 80, 96, 128, 176, 192, 208.

### Grid & Container
- Max content width ~1200px, centered
- Hero: single column, generous vertical padding (96px+)
- Article grid: 2–3 columns, collapse to 1 on small screens
- Footer: multi-column → stacked on mobile

### Border Radius
- 4px micro, 6px buttons/inputs, 8px compact, 12px cards, 16px containers, 9999px pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, cream | Page, most content |
| Bordered | `1px solid #eceae4` | Cards, images |
| Inset | Button inset on `#F57584` | Primary actions |
| Focus | Coral glow shadow | Active/focus |
| Ring | `rgba(245,117,132,0.5)` 2px | Keyboard focus |

Hero: soft warm wash (cream with a hint of coral). No heavy drop shadows on cards.

## 7. Do's and Don'ts

### Do
- Use cream `#f7f4ed` as the page foundation
- Use Lexend Deca at display sizes with tight letter-spacing
- Derive grays from `#1c1c1c` opacity
- Use `#F57584` for primary actions and selected categories
- Use `#eceae4` borders instead of card shadows
- Keep UI weights at 400 and 600

### Don't
- Don’t use pure white as the page background
- Don’t use heavy box-shadows on cards
- Don’t introduce extra saturated accents beyond `#F57584`
- Don’t use 9999px radius on rectangular CTAs
- Don’t use blue focus rings — use coral

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <600px | Single column, reduced padding |
| Mobile | 600–640px | Standard mobile |
| Tablet Small | 640–700px | 2-column grids |
| Tablet | 700–768px | Card grids expand |
| Desktop Small | 768–1024px | Multi-column |
| Desktop | 1024–1280px | Full layout |
| Large Desktop | 1280–1536px | Max width, generous margins |

Hero type: 60px → 48px → 36px. Nav: links → hamburger at 768px. Article grid: 3 → 2 → 1. Section spacing: 128px+ → 64px on mobile.

## 9. CSS tokens

```css
:root {
  --background: #f7f4ed;
  --foreground: #1c1c1c;
  --muted: #5f5f5d;
  --border: #eceae4;
  --primary: #F57584;
  --primary-foreground: #fcfbf8;
  --ring: rgba(245, 117, 132, 0.5);
  --font-sans: "Lexend Deca", ui-sans-serif, system-ui, sans-serif;
}
```

@font-face: load Thin through Black from `fonts/LexendDeca-*.ttf` with matching `font-weight` 100–900.

## 10. Agent prompt notes

1. Cream `#f7f4ed` is the base — never pure white
2. Primary interactive color is `#F57584`
3. Typeface is Lexend Deca, not Camera Plain
4. Grays from `#1c1c1c` at opacity
5. Borders `#eceae4` for containment
6. Letter-spacing: -1.5px at 60px, -1.2px at 48px, -0.9px at 36px, normal at 16px
7. Inset shadow on coral primary buttons
