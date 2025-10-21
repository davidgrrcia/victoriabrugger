# 🐺 Quick Reference Guide - Masterclass Page

## Common Updates & Where to Make Them

### 💰 Update Pricing

**File**: `/src/components/masterclass/pack-tiers.tsx`

```typescript
const tiers: Tier[] = [
  {
    id: "lone-wolf",
    name: "LONE WOLF",
    price: 497, // ← Change this number
    // ...
  },
  {
    id: "pack-runner",
    price: 997, // ← Change this number
    // ...
  },
  {
    id: "alpha",
    price: 2997, // ← Change this number
    // ...
  },
];
```

---

### 🎨 Change Colors

**Primary colors** are defined inline. Search and replace:

- Red: `#dc2626` or `red-600`
- Blue: `#3b82f6` or `blue-500`
- Purple: `#a855f7` or `purple-500`

**Tip**: Use VS Code's Find & Replace (Cmd+Shift+H) to change all instances

---

### ❓ Modify Qualification Questions

**File**: `/src/components/masterclass/entrance-gate.tsx`

Find the sections for `question1`, `question2`, and `question3`:

```typescript
// Question 1 - Line ~65
{
  id: "mediocrity",
  label: "A mediocre life that feels like slow death"
}

// Question 2 - Line ~95
{
  id: "financial",
  label: "Financial freedom, no more compromises"
}

// Question 3 - Line ~125
{
  id: "yes_all",
  label: "Yes. Whatever it takes."
}
```

---

### 🔗 Connect Payment Processing

**File**: `/src/components/masterclass/pack-tiers.tsx`

Find the TODO comment (around line 160):

```typescript
onClick={() => {
  // TODO: Implement checkout
  window.location.href = `#checkout-${tier.id}`;  // ← Replace this
}}
```

**Options**:

1. **Stripe**: Replace with your Stripe checkout URL
2. **Gumroad**: Use Gumroad product link
3. **Custom**: Link to your checkout page

Example with Stripe:

```typescript
onClick={() => {
  window.location.href = `https://buy.stripe.com/your-product-${tier.id}`;
}}
```

---

### 📝 Update Copy & Messaging

#### Hero Headline

**File**: `/src/components/masterclass/wolf-hero.tsx` (Line ~28)

```typescript
<h1>RAISED BY WOLVES</h1>
```

#### Hero Subheadline

**File**: `/src/components/masterclass/wolf-hero.tsx` (Line ~37)

```typescript
Society domesticated you.
It's time to remember who you are.
```

#### Manifesto Statements

**File**: `/src/components/masterclass/wolf-manifesto.tsx` (Line ~35+)
Each statement is in a separate div with color-coded borders

---

### 🎯 Update Spots Remaining

**File**: `/src/components/masterclass/pack-tiers.tsx` (Line ~160)

```typescript
<div className="flex items-center justify-center gap-2">
  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
  <span>7 SPOTS LEFT TODAY</span>  // ← Change this number
</div>
```

Make it dynamic:

```typescript
const spotsRemaining = 7; // Could fetch from API

<span>{spotsRemaining} SPOTS LEFT TODAY</span>
```

---

### 🚀 Skip the Entrance Gate (For Testing)

**File**: `/src/app/masterclass/page.tsx` (Line ~12)

Change:

```typescript
const [hasEnteredGate, setHasEnteredGate] = useState(false);
```

To:

```typescript
const [hasEnteredGate, setHasEnteredGate] = useState(true); // Skip gate
```

**Remember**: Change back to `false` for production!

---

### ✏️ Edit Tier Features

**File**: `/src/components/masterclass/pack-tiers.tsx` (Line ~17+)

```typescript
features: [
  "Core transformation modules",
  "Self-paced digital content",
  "Community forum access",
  // Add more here
];
```

---

### 🌍 Update Spanish Subtitles

All Spanish subtitles use this pattern:

```typescript
subtitle: "El Despertar",  // The Awakening
subtitle: "La Liberación",  // The Liberation
subtitle: "La Transformación",  // The Transformation
subtitle: "La Manada",  // The Pack
subtitle: "El Otro Yo",  // The Other Self
```

Find and replace in respective files.

---

### 📧 Add Email Capture

**File**: `/src/components/masterclass/entrance-gate.tsx`

After each question is answered, add:

```typescript
const handleAnswer = async ({ question, answer }) => {
  setAnswers((prev) => ({ ...prev, [question]: answer }));

  // If this is the first question, capture email
  if (question === "running_from") {
    // Show email input or send to your backend
    await captureEmail(answer);
  }

  // Continue to next stage...
};
```

---

### 🎬 Disable Animations (For Testing)

**File**: `/src/app/globals.css`

Comment out the animations:

```css
/* @keyframes float { ... } */
```

Or add this class to any element:

```typescript
className = "animate-none";
```

---

### 📱 Test Mobile Layout

Use Chrome DevTools:

1. Cmd+Opt+I to open DevTools
2. Click device toolbar icon (Cmd+Shift+M)
3. Test different screen sizes

Common breakpoints:

- `md:` = 768px (tablet)
- `lg:` = 1024px (desktop)

---

### 🎨 Customize Tier Colors

**File**: `/src/components/masterclass/pack-tiers.tsx` (Line ~17)

```typescript
{
  id: "lone-wolf",
  color: "blue",  // ← Change to "red" or "purple"
  // ...
}
```

---

### ⏱️ Change Animation Speeds

**File**: `/src/app/globals.css`

Find animation durations and adjust:

```css
animation: float 10s linear infinite;  // ← Change "10s"
```

Or inline in components:

```typescript
className = "transition-all duration-500"; // ← Change "duration-500"
```

---

### 🔧 Add Analytics Tracking

Add tracking to key actions:

```typescript
// Track question answers
const handleAnswer = ({ question, answer }) => {
  // Your analytics
  gtag('event', 'qualification_answer', {
    question: question,
    answer: answer
  });

  // Continue...
}

// Track tier selection
onClick={() => {
  gtag('event', 'tier_click', {
    tier: tier.name,
    price: tier.price
  });

  // Continue to checkout...
}
```

---

### 🎯 A/B Testing Questions

Create variants:

```typescript
const questionVariants = {
  variant_a: [{ id: "option1", label: "Original option" }],
  variant_b: [{ id: "option1", label: "Alternative option" }],
};

const currentVariant = Math.random() > 0.5 ? "variant_a" : "variant_b";
```

---

## Component Architecture

```
masterclass/page.tsx (Orchestrator)
├── entrance-gate.tsx (Qualification)
│   ├── Question 1
│   ├── Question 2
│   ├── Question 3
│   └── Unlocking animation
│
└── Main Content (After qualification)
    ├── wolf-hero.tsx (Hero)
    ├── transformation-journey.tsx (4 Stages)
    ├── wolf-manifesto.tsx (Who This Is For)
    ├── pack-tiers.tsx (Pricing - 3 tiers)
    └── final-call.tsx (Final CTA)
```

---

## File Sizes & Performance

Current setup is optimized for performance:

- No heavy images (using CSS animations)
- Minimal JavaScript
- Lazy loading where possible
- Smooth 60fps animations

If adding images:

1. Use Next.js `<Image>` component
2. Optimize before uploading (TinyPNG)
3. Use WebP format
4. Add proper width/height

---

## Common Issues & Solutions

### Issue: Animations are choppy

**Solution**: Check browser performance, reduce particle count

### Issue: Text is hard to read

**Solution**: Increase contrast in dark areas, adjust opacity

### Issue: Mobile layout is broken

**Solution**: Test each section, add more mobile-specific classes

### Issue: Entrance gate won't unlock

**Solution**: Check state management, ensure onUnlock is called

### Issue: Colors don't match

**Solution**: Use consistent color classes, check Tailwind config

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Check for errors
npm run lint
```

---

## Quick Wins for Conversion

1. **Add urgency**: Real countdown timer
2. **Add social proof**: Testimonials with photos
3. **Add guarantee**: Money-back guarantee badge
4. **Add scarcity**: Live counter of spots
5. **Add authority**: Press mentions, certifications
6. **Add video**: Short intro or testimonial
7. **Add FAQ**: Address common objections
8. **Exit intent**: Special offer popup

---

## Support & Resources

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Color Palette Tool**: https://coolors.co
- **Animation Inspiration**: https://uiverse.io

---

**Need help?** Refer to `MASTERCLASS_REDESIGN.md` for full documentation.

🐺 Remember: This is for the wolves. Keep it bold. Keep it real.
