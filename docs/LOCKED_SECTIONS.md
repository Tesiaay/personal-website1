# Locked Sections

## Locked Final Areas

The following areas are completed and locked:

1. Hero Section is completed and must not be changed casually.
2. Project Index is completed and must not be changed casually.
3. Future tasks must not modify these two areas by default unless the user explicitly says "allow modifying Hero" or "allow modifying Project Index".

## Hero Section Lock Scope

Do not modify the following Hero-related files, assets, logic, styles, or interactions unless the user explicitly allows Hero changes:

- `src/components/Hero.tsx`
- `src/components/HeroIntroSequence.tsx`
- `src/components/HeroCloudLayer.tsx`
- Hero-related CSS classes
- Hero boarding-pass / flight-ticket card layout
- Hero cloud background and micro-interactions
- Flight mode entry animation
- `VIEW PROJECTS`, `VIEW RESUME`, and `CONTACT INFO` links and styles
- Hero section related `public/intro` image resources

Do not adjust Hero visuals, animation, layout, layer order, color, or interaction unless explicitly requested.

## Project Index Lock Scope

Do not modify the following Project Index logic, styles, or interactions unless the user explicitly allows Project Index changes:

- Project Index related logic in `src/components/Projects.tsx`
- 01-05 project index wheel effect
- Active row scale / clarity effect
- Upper and lower row fading / tilt effect
- Back button
- `Contact Info`, `PDF Resume Shortcut`, and `PROJECT INDEX` title positions
- Project Index related CSS classes

Do not adjust Project Index visuals, animation, layout, layer order, color, or interaction unless explicitly requested.

## Future Editing Rules

For future changes to other pages such as Resume, About, Tiva, Testimonials, Support, or Contact:

1. First check whether the change could affect Hero or Project Index.
2. If it could affect either locked area, stop and ask:
   "This change may affect the locked Hero / Project Index. Is it allowed?"
3. Do not modify locked areas without confirmation.

Do not modify Hero or Project Index while cleaning CSS, optimizing structure, refactoring components, or removing unused code.

Avoid broad refactors to:

- App horizontal pagination structure
- Routing structure
- Global scroll logic
- Global background layering
- Locked page class names

## Global CSS Rule

If `src/index.css` must be modified in a future task:

- Do not override Hero-related classes.
- Do not override Project Index related classes.
- Do not change their `z-index`, `position`, `transform`, `opacity`, `animation`, or `pointer-events`.
- If it is unclear whether a class belongs to Hero or Project Index, ask the user before editing.
