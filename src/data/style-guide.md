# Flying Dodo Website Style Guide

## Brand Philosophy
The website embodies the handmade, artisanal spirit of Flying Dodo beers. Every design element should feel crafted, authentic, and slightly imperfect—just like artisanal brewing.

---

## Typography

### Primary Fonts
- **Headlines & Titles:** Cormorant Garamond (serif)
  - Warm, elegant, premium feel
  - Use for section headers and beer names
  
- **Body Text:** System sans-serif stack
  - Clean, readable, accessible
  - Used for descriptions and general content

- **Handwritten Accents:** Caveat
  - Organic, personal touch
  - Used sparingly for taglines and notes

### Font Sizes
```css
.text-headline: clamp(2rem, 5vw, 3.5rem)
.text-body: 1rem (16px)
.text-body-lg: 1.125rem (18px)  
.text-caption: 0.75rem (12px) uppercase tracking-wider
.text-handwritten: 1.25rem (20px)
```

---

## Color Palette

### Primary Colors (HSL)
```css
--background: 45 20% 96%      /* Warm parchment */
--foreground: 30 20% 15%      /* Deep brown-black */
--primary: 35 60% 45%         /* Amber/copper - beer tones */
--primary-foreground: 45 20% 98%
--secondary: 40 15% 88%       /* Warm beige */
--muted: 40 10% 70%
--muted-foreground: 30 15% 45%
--accent: 35 45% 55%          /* Golden accent */
--border: 35 15% 80%
```

### Texture Colors
```css
--parchment: 42 30% 94%
--bark: 25 25% 30%
--grain: 40 20% 85%
```

---

## Spacing

### Section Spacing
```css
.section-spacing: py-16 md:py-24 lg:py-32
```

### Container Widths
```css
.container-wide: max-w-6xl mx-auto px-4 sm:px-6
.container-narrow: max-w-4xl mx-auto px-4 sm:px-6
```

### Component Gaps
- Card grid: gap-6 md:gap-8
- Inline elements: gap-3 or gap-4
- Section header to content: mb-12 md:mb-16

---

## Components

### Cards (`.card-artisan`)
```css
background: var(--background)
border: 1px solid var(--border)
border-radius: 2px (nearly square)
box-shadow: subtle, warm
slight rotation: transform: rotate(±0.3deg)
```

### Buttons
- Primary: amber/copper background, warm foreground
- Ghost: transparent with border
- Rounded: rounded-sm (subtle)

### Stamps & Badges (`.stamp`)
```css
border-radius: 50%
border: 1px dashed var(--primary)
padding: variable
opacity: slight fade for worn effect
```

---

## Textures

### Paper Texture (`.texture-paper`)
Subtle SVG filter with noise for parchment feel

### Grain Texture (`.texture-grain`)
Fine grain overlay for organic sections

### Worn Image Effect (`.img-worn`)
Slight sepia, reduced contrast, vintage feel

---

## Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile Considerations
- Stack cards vertically
- Reduce padding proportionally
- Hamburger menu for navigation
- Touch-friendly tap targets (min 44px)

---

## Animation Guidelines

### Allowed
- Subtle fade-ins on scroll (framer-motion)
- Gentle hover states
- Smooth scroll for navigation

### Avoid
- Flashy transitions
- Parallax effects
- Auto-playing carousels
- Aggressive animations

---

## Editing Data Files

### Beers (`src/data/beers.ts`)
Add or modify beers by editing the `beers` array:
```typescript
{
  id: "unique-id",
  name: "Beer Name",
  style: "Beer Style",
  description: "Tasting notes...",
  abv: 5.5,
  ibu: 30,        // optional
  plato: 12.5,    // optional
  foodPairing: "Pairs with...",  // optional
  isNew: true     // optional - shows "New!" badge
}
```

### Stores (`src/data/stores.ts`)
Add stores to any region:
```typescript
{ id: "unique-id", name: "Store Name", area: "Area Name" }
```

---

## Image Guidelines

- Use real photography from the brewery
- Apply `.img-worn` class for vintage feel
- Prefer warm, natural lighting
- Avoid stock photography or AI-generated images
- Compress images for web performance

---

## Accessibility

- Maintain 4.5:1 contrast ratio for text
- Include alt text for all images
- Ensure keyboard navigation works
- Use semantic HTML elements
- Label all form inputs
