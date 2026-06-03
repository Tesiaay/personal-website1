# AGENTS.md

## Project Context

This is Tesia Zhou's personal portfolio website for AI product direction.

The website is used to present:

* personal background
* AI product practice
* Tiva personal AI assistant system
* AI evaluation and iteration report
* AI color palette app concept
* resume and contact entry points

Treat this website as a refined personal portfolio, not a generic AI landing page.

The core goal is clarity, credibility, visual consistency, and interview-ready presentation.

---

## Core Editing Rule

Only edit what the user explicitly asks you to edit.

If the user asks to modify one section, only modify that section.

Do not modify:

* unrelated pages
* unrelated components
* unrelated CSS
* unrelated routes
* unrelated assets
* completed sections
* global layout
* locked components

If a change is not required by the user's request, do not make it.

---

## Default Locking Rule

Unless the user explicitly mentions a section and asks to adjust it, treat all other sections as locked.

This means:

* If the user asks to edit About Me, do not edit Hero Section.
* If the user asks to edit Project Index, do not edit Loading Overlay.
* If the user asks to edit one block inside a page, do not edit other blocks inside that page.
* If the user asks to adjust content, do not redesign the layout unless necessary.
* If the user asks to adjust layout, do not rewrite the content unless necessary.

Only the explicitly mentioned area is open for editing.

Everything else is locked by default.

---

## Locked Final Sections

The following sections are already approved and must not be changed unless the user explicitly asks to modify them.

### Loading Overlay

The loading overlay is approved and locked.

Do not change:

* loading overlay structure
* airplane position, size, shape, color, or animation
* dashed ellipse shape, arrow style, color, size, or animation
* `LOADING...` text position
* `PLS WAITING` text position
* overlay background
* overlay z-index
* transition behavior
* loading component CSS or SVG structure

Only modify the loading overlay if the user explicitly asks for loading overlay changes.

### Hero Section

The Hero Section is approved and locked.

Do not change:

* boarding-pass / ticket concept
* main layout
* main title
* FROM / TO structure
* stamp buttons
* barcode / contact area
* airplane transition area
* class/status/seat/gate structure
* typography or spacing

Only modify Hero Section if the user explicitly asks for Hero Section changes.

### Project Index

The Project Index page is approved and locked.

Do not change:

* table-of-contents structure
* project row order
* main title
* bilingual description
* status labels
* row layout
* black background style
* index-line structure

Only modify Project Index if the user explicitly asks for Project Index changes.

---

## Global Layout Safety Rules

Every page must remain visually stable and readable.

Do not allow:

* text overflow
* content overflow
* content being cropped
* text overlapping other text
* cards overlapping other cards
* content covering navigation buttons
* content covering progress indicators
* content covering arrows
* elements breaking out of their containers
* layout collapse after resizing
* repeated duplicated content

Every page must keep:

* enough breathing room
* clear visual hierarchy
* readable font size
* consistent alignment
* safe spacing around edges
* stable left / right structure when applicable

If content is too long, prioritize:

1. reducing content density
2. simplifying wording
3. improving layout spacing
4. keeping the page readable

Do not force too much text into a fixed page area.

---

## Bottom Navigation Safe Area Rule

For any paginated project section, the bottom progress indicator and previous/next navigation arrows are protected UI areas.

Do not allow page content to overlap, cover, or visually touch:

* progress dots
* `you are here` label
* previous arrow
* next arrow

Every paginated content canvas must reserve a bottom safe area of at least 90px unless the user explicitly requests another layout.

If content is too tall, reduce content density or compress the content area. Do not let content enter the bottom navigation safe area.

---

## Typography System Rules

Use the attached typography reference images only as font feeling, font weight, font size hierarchy, and English / Chinese relationship references.

Do not copy:

* page layout
* content
* colors
* spacing
* image composition
* website UI

### 1. English Level-1 Main Titles

For English first-level page titles, follow the typography feeling of Reference Image 1.

Rules:

* Use a large, elegant, editorial-style serif font.
* The title should feel premium, calm, and expressive.
* The font size should be the largest text level on the page.
* It can be visually strong, but must not overflow the canvas.
* Keep generous line-height and readable spacing.
* Do not use casual, cartoon, neon, or overly tech-style fonts.

Examples of this level:

* PROJECT OVERVIEW
* PORTFOLIO INDEX
* CONTACT
* SUPPORT
* MOOD
* large project/page titles

### 2. Chinese Level-1 Main Titles

For Chinese first-level page titles, follow the typography feeling of Reference Image 2.

Rules:

* Use an elegant Chinese serif / Songti-style font where available.
* Chinese Level-1 title size should be slightly smaller than the English Level-1 title.
* It should feel refined and stable, not too bold or too decorative.
* Keep it visually aligned with the English Level-1 title system.
* Do not make Chinese title larger than the English main title unless explicitly requested.

### 3. Level-2 Titles / Bilingual Subtitles

For second-level bilingual title sections, follow Reference Image 3.

Rules:

* English Level-2 title keeps the reference image's relative size and style.
* Chinese Level-2 title should be one size smaller than the English Level-2 title.
* English and Chinese should have clear hierarchy.
* Keep line-height comfortable.
* Avoid stacking too many bilingual lines too tightly.
* Do not let English and Chinese text visually fight for the same emphasis.

Examples of this level:

* section subtitles
* module titles
* page intro headings
* bilingual explanatory heading pairs

### 4. Body Text / Paragraph Text

For bilingual body text, follow Reference Image 4, but reduce the font size by about three levels compared with the reference.

Rules:

* Body text must remain readable.
* English and Chinese body text should feel clean, calm, and editorial.
* Chinese body text can be slightly more prominent when the content is primarily for Chinese readers.
* English body text should usually act as supporting text unless explicitly requested otherwise.
* Do not make body text overly large.
* Do not make body text too small to read.
* Avoid dense bilingual text blocks.
* Use spacing to separate Chinese and English clearly.

### 5. Labels / Small Metadata Text

Labels, tags, page numbers, mini captions, and status text may adjust according to each page layout.

Rules:

* Labels must stay within the typography system.
* They cannot use fonts outside the defined visual direction.
* They should be smaller than body text or close to body text depending on context.
* They should never become visually louder than main titles or section titles.
* Keep labels clean, restrained, and readable.

### 6. Typography Boundary Rule

All future font choices must stay within these typography boundaries:

* elegant serif for major editorial titles
* refined Chinese serif / Songti-style for Chinese major titles
* clean readable sans-serif or restrained serif for supporting text
* no random decorative fonts
* no cartoon fonts
* no overly futuristic tech fonts
* no inconsistent font families across similar content levels

### 7. Layout Safety with Typography

When changing typography:

* Do not allow text overflow.
* Do not allow text overlap.
* Do not allow title text to cover navigation, progress indicators, or arrows.
* Do not shrink text until it becomes unreadable.
* If a title is too long, adjust line breaks, width, or scale within the same hierarchy.
* Do not change unrelated sections just to fit typography.

### 8. Change Scope Rule

When the user asks to modify typography on a specific page or section:

* only modify that page or section
* do not apply experimental font changes globally unless the user explicitly requests a global typography update
* do not touch locked sections unless explicitly named

---

## Bilingual Content Rules

This portfolio uses Chinese and English together.

For bilingual content:

* Chinese is usually the primary reading content.
* English should support the Chinese content.
* English does not need to be a long full translation.
* Keep English shorter and lighter when possible.
* Avoid dense Chinese-English paragraph stacking.
* Do not repeat the same content multiple times.
* Do not create duplicated bilingual sections.
* Do not change the meaning of user-approved copy unless asked.

When simplifying content, preserve the original meaning.

---

## Visual Style Rules

The website should feel:

* refined
* editorial
* calm
* personal
* structured
* premium but not cold
* AI-related but not generic SaaS

Base visual direction:

* black background
* warm off-white content areas
* muted dark green accents
* low-saturation supporting colors
* clean spacing
* restrained visual effects

Avoid:

* generic AI card-wall style
* random gradients
* excessive icons
* childish decoration
* neon technology style
* heavy dashboard style
* over-animation
* cluttered layouts
* unnecessary visual noise

Each project can have its own visual metaphor, but it must still feel like part of the same portfolio system.

---

## Page-Specific Rules

### About Me

The right-side FROM / TO area and Transferable Notes area must not be changed unless explicitly requested.

If the user asks to modify only the left-side About Me content, only modify the left-side About Me content.

The About Me page should:

* explain personal transition clearly
* avoid dense paragraphs
* avoid repeated content
* keep bilingual structure clean
* stay readable and airy

### Tiva Project

Keep the project documentation / system explanation feeling.

This section should present:

* what Tiva is
* why it was built
* how the workflow works
* what modules it contains
* what the user did
* what was learned
* next iteration

Do not make it feel like a generic chatbot page.

### AI Evaluation & Iteration Report

Keep the handheld game / level-based evaluation report style.

This section should present:

* evaluation purpose
* intent recognition tests
* routing tests
* memory judge tests
* badcase and prompt iteration
* final iteration results

Do not over-gamify it.
Keep it professional and readable.

### AI Color Palette App

Keep the color-lab / palette exploration style.

This section should present:

* concept overview
* why this idea exists
* user flow
* MVP scope
* next step

Do not imply the product only supports one color.
It is a full color app driven by user perception.

---

## Editing Discipline

Before editing:

1. Read the user's request carefully.
2. Identify the exact section the user wants to modify.
3. Treat all other areas as locked.
4. Make the smallest necessary change.
5. Do not refactor unrelated code.

During editing:

* Do not rename unrelated classes.
* Do not clean up unrelated CSS.
* Do not optimize unrelated components.
* Do not modify unrelated files.
* Do not change approved visual structures.
* Do not rewrite approved content.
* Do not move elements that were not mentioned.

After editing:

* Verify the requested section changed correctly.
* Verify unrelated sections are unchanged.
* Verify there is no overflow.
* Verify there is no text overlap.
* Verify there is no duplicated content.
* Verify the page still fits within the visible area.
* Verify loading overlay remains unchanged unless requested.
* Verify navigation still works.

---

## Response Requirement After Editing

After making changes, report clearly:

1. What was changed
2. Which files were modified
3. Whether any unrelated files were touched
4. Whether the page was checked for:

   * overflow
   * overlap
   * duplicated content
   * layout stability
   * navigation behavior

If no unrelated files were touched, say so.

If something could not be completed, explain clearly instead of guessing.

---

## Most Important Rule

Do not modify anything the user did not explicitly ask to modify.

When in doubt, make a smaller change, not a larger one.
