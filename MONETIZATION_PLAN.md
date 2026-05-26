# Monetization Plan

## Positioning

This project is no longer just a demo shell. It is being turned into a content-first landing project with an interactive game layer.

The intended monetization stack:

1. Display ads
2. In-feed ads
3. Article in-content ads
4. Sponsored placements
5. Later-stage affiliate/course partnerships

## Current structure

- Home page: user-facing landing page
- Content hub: article-style sections for search and PV growth
- Demo/game area: extends session time and repeat visits
- Ad slots: placeholder components ready for real ad network integration

## Recommended rollout

### Stage 1

Ship the current landing version and continue adding useful content pages.

Priority topics:

- Frontend roadmap
- AI beginner direction
- Career switching guides
- Learning resource collections

### Stage 2

After initial content is stable, connect an ad network.

Recommended integration approach:

- Fill `VITE_ADSENSE_CLIENT` in a local `.env`
- Replace placeholder ad slot ids with real platform slot ids
- Test only a few ad placements first

### Stage 3

Optimize for RPM and user retention.

Focus on:

- Search-friendly titles
- More article depth
- Related content loops
- Better internal navigation
- Retaining the interactive demo as a differentiator

## Pages that should exist later

1. Privacy Policy
2. Advertising Disclosure
3. Contact / Cooperation
4. About the project
5. More article entry pages by category

## Important note

Do not overload the page with ads at the start. The first goal is to create a site structure that can sustain traffic and longer session duration.
