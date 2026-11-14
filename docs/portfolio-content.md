# Portfolio content notes

## Indie CRM

The case study describes the implementation inspected in the local Indie CRM checkout:

- `src/lib/lead-actions.ts`: workspace and role checks, saved changes, and `revalidateLeadPaths`.
- `src/lib/data.ts`: keyword/semantic retrieval and similarity fallback.
- `src/lib/ai.ts`: generated content, embedding generation, and local fallbacks.
- `README.md`: feature scope, data model, and architecture.
- `public/screenshots/`: actual application screens using seeded Northstar Studio data, copied into this portfolio's project assets.

The 30-second public walkthrough is an interactive reconstruction with fictional sample data. It is explicitly labeled and does not connect to production. It demonstrates a single lead moving through qualification, retrieval, and follow-up; real application screenshots are available within each chapter. Chapters change at 0, 7, 15, and 23 seconds. Qualification moves the sample lead immediately when that chapter starts. Progress indicators and a next-chapter button let visitors follow or skip the timed sequence.

Removed unsupported search-latency figures and Redis Pub/Sub/WebSocket propagation claims. The inspected lead actions persist through Prisma and revalidate Next.js routes. There is no published performance benchmark in this portfolio.

Before adding a latency claim, record the dataset size, environment, measured request boundary, sample count, and percentiles. Cross-session propagation needs its own measurement and an implemented delivery mechanism.

## Packaging

The owner confirmed responsibility for the packaging design and copy, including preparation and approval of ingredient/claims copy. The portfolio credits those deliverables without asserting product formulation or regulatory certification.

Assembled carton views are SVG presentation mockups using viewports over the original front and side panels. The full original dielines remain separately available. These mockups are not evidence of a printed production run.

## CV

Role summaries provide context; each role has three distinct contribution bullets. Quantified improvements without supporting measurement records have been removed.

The downloadable PDF is generated from `src/data/profile.ts` and `src/data/projects.ts`:

```sh
npm run resume:build
```

This requires Python with `reportlab`. Set `PDF_PYTHON` to a Python executable with that package when needed. The two-page output replaces `public/Chiemelie_Isaac_Ekezie_Resume.pdf`.

The application shell owns the navigation and footer. Desktop and mobile share one navigation element.

## Browsing structure

The hero links directly to the software workflow and the assembled packaging range. The homepage keeps selected work before the career timeline, with a separate link to the full skills page instead of repeating skill matrices. The CV presents experience before an expandable skills section. Actual application screenshots start expanded in the CRM case study.
