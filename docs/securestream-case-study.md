# SecureStream portfolio evidence

The public case study at `/projects/securestream` presents an engineering prototype through screenshots of the actual React/FastAPI application. The self-paced workflow is a screenshot walkthrough, not a running public scanner.

Screenshots were captured from security source revision `70b26241307037be0b78413b71643686caa4d8a1` in a fresh local workspace containing only fictional sample records. No existing account, production file, key, or private customer record was used. The sample account credentials and temporary database are not portfolio assets.

The recorded run classified the supplied Normal sample, saved model-replay event #1, uploaded `sample-brief.txt`, encrypted it, restored it while retaining the encrypted backup, and downloaded the recovered file. The downloaded bytes matched the original. Its SHA-256 is `9a3f7e1857ce7c9c7c55e0327454a8e92f05f3f51fa0a1e2892eb52dbc687afe`.

The page links to source, isolation tests, browser workflows, the offline evaluation, and the failed candidate experiment at that exact revision. Test counts and model metrics describe that revision. They are not production reliability guarantees or commercial outcomes. The old NetSecure deployment is not used as the project action.

Assets are JPEG browser captures under `public/assets/projects/securestream/`. Full-size links let readers inspect the original screenshots. The image set is under 700 KB, and the case-study route is lazy-loaded.

Verify with `npm run build`, ESLint on the changed TypeScript files, and browser checks of the workflow buttons, screenshot loads, keyboard interaction, mobile overflow, and the project-card route.
