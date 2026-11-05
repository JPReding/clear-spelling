# Clear Spelling

Offline-first spelling practice PWA for iPad mini.

## Included

- All 66 lists from `thirdgradespellinglists-studentcopy.pdf`.
- One adaptive Practice flow that selects Build the Word, Choose the Letters, or Spell From Memory per word.
- Spoken dictation through the device browser, Spalding-aligned hints, adaptive local review, and a parent dashboard.
- Local progress via `localStorage` and an app shell cached by the service worker.

## iPad installation

Serve this folder from any HTTPS web host, open the URL in Safari on the iPad, then use Share > Add to Home Screen. For local testing, open `index.html` in a browser; service-worker offline caching requires HTTPS or localhost.

Daily Practice runs through every word in the selected lists. Missed words are placed back into the session until they are answered correctly; words with prior mastery are deprioritized.
