# IP Mining Report — Full Vault Analysis (2026-07-05)

Scope: full pass over ~350 markdown files in `braindump` (≈80k words), including `journal/`, idea files, workshop notes, book notes, drafts, and the giant `inbox.md`.

---

# Executive Summary

This vault is not a pile of random notes — it is the research archive of a **product engineer who spent years at the frontier of local-first software, hypermedia, rich-text editors, and state machines**, while simultaneously building a Spanish-language teaching practice (egghead, Escuela Frontend, mentorias) and small businesses (Happori, Mintter/Seed).

Three bodies of work are hiding in here, each substantial enough to anchor a public identity:

1. **Local-first / distributed systems practitioner notes** (Pushpin, Kleppmann, Mintter internals, CRDTs, decentralized social protocols, hypermedia history from Engelbart to Ted Nelson). Almost nobody writing about local-first today has *shipped* a production local-first editor. You have. This is your strongest moat.
2. **State machines & the actor model as a UI architecture philosophy** ("Everything is an Actor", XState workshops, parallel-states-vs-actors, content-to-share tips). This is your clearest teachable, evergreen curriculum — half of it is already outlined.
3. **Teaching & creator craft** (record-badass-screencasts, mentoria system, newsletter research, Sales Safari, BADASS book notes). This is the distribution engine for #1 and #2.

The 80/20: **publish the local-first practitioner material and the state-machine curriculum; use everything else as fuel.**

---

# Best Insights (strongest raw material found)

- **"Store questions, not facts"** (ideas.md): *"what if instead of storing facts in our notes, we store the questions that come to our minds when we read the facts and build knowledge around them?"* — an original PKM thesis; could become signature terminology ("question-first notes").
- **Parallel states vs invoked actors as "faces of a gem" vs "helpers you hand work to"** — one of the clearest mental models for a famously confusing XState topic.
- **The Usenet `.newsrc` observation** — feeds designed to be *finished* vs infinite scroll. Pairs perfectly with your local-first data-ownership thesis.
- **From BADASS notes:** "people recommend because they feel better about themselves — 'I'm awesome because of this' is the feeling behind 'this thing is awesome'." A lens for both product work and educational content.
- **Hammock-driven development notes** — your synthesis is already talk-quality.
- **The clap-to-edit screencast trick** (record-badass-screencasts): tiny original tip, extremely shareable.
- **git worktree workflow** — a complete, battle-tested tutorial including the `fetch` config gotcha and a Q&A section. Publishable almost as-is.
- **"Be Brave Enough"** — raw but honest personal essay about ego, empathy, parenting. The emotional register your technical brand lacks; one edit away from publishable (remove the angry paragraph).

---

# Content Opportunities (ranked by long-term leverage)

1. **"Lessons from building a production local-first app"** — essay/talk series. Format: blog + conference talk. Audience: local-first/dev-tools engineers (fast-growing niche: Ink & Switch, ElectricSQL, Jazz, Automerge crowd). Why now: local-first is peaking and almost all content is theory; your Mintter/Seed war stories (editor-per-block experiments, CRDT UI sync, Electron perf, IPLD/CID modeling in `mintter-explanation-of-the-system.md`) are practice. Effort: medium — notes exist, needs narrative. **Highest-leverage item in the vault.**
2. **"Everything is an Actor" educational series** — YouTube/egghead + blog. From your two FrontendMasters workshop notes + actor-model notes + the two already-written "state machine tips" posts (EN & ES). Hooks: "Boolean explosion", "your app is a graph". Effort: low-medium, outline already exists in `maquinas-de-estado.md` (intro → modeling → actions → guards → async → nested).
3. **git worktree guide** — publish nearly as-is. High-search-volume evergreen; easy win to restart the publishing habit. Effort: <1 day.
4. **"Test your tests" (mutation testing) + Cypress vs Playwright comparison** — `intro-to-mutation-testing.md` is a finished draft; `component-testing.md` is a complete comparison table. Effort: <1 day each.
5. **"Feeds you can finish"** — essay weaving Usenet `.newsrc` + Check Your Pulse curation-architecture notes + rewilding-your-attention + local-first data ownership. This is opinion-leader material connecting your niches. Effort: medium.
6. **Hypermedia history series** — Engelbart 1969 demo, Ted Nelson, hypertext-hands-on book, "As We May Think" annotations. Positions you as the person who connects 50 years of hypertext history to modern local-first apps. Effort: medium; compounds forever.
7. **Spanish JavaScript fundamentals corpus** — 10+ substantial posts (scopes, hoisting, let/const, prototypes, "no todo en JavaScript son objetos", igualdad, this, closures). Already written. Republishing/canonicalizing on your own site = instant content depth + SEO in an underserved language market.

---

# Product Opportunities

1. **State Machine Battle ("CSS Battle for state machines")** — appears twice in your notes; genuinely original. Users: JS devs learning XState/statecharts. MVP: 10 modeling challenges + a validator comparing the machine graph to a spec (model-based testing does the grading). Monetization: free + sponsorship (Stately is an obvious partner) or premium challenge packs. Confidence: 7/10 — unique, on-brand, audience-building, and a perfect demo of your two niches at once.
2. **Local-First Starter Kit / course** — opinionated Electron/Tauri + CRDT + sync template distilled from Mintter/Seed learnings. Users: devs who want to build local-first apps without 6 months of research. MVP: template repo + 10-lesson walkthrough. Monetization: paid course/workshop; template free as funnel. Confidence: 8/10 — you have rare production experience; workshops in this space sell.
3. **State machines workshop (Spanish)** — you already ran XState workshops and have full notes. Spanish-language advanced frontend training is scarce; you have the Escuela Frontend + mentoria network as a channel. MVP: 1-day live cohort. Confidence: 8/10, fastest to revenue.
4. **YouTube timestamped-comments Chrome extension** — recurring idea (2 files + tweet). Fun and viral-adjacent but off-thesis; low monetization. Confidence: 4/10. Park it.
5. **"Content reminder" / IP-mining tooling** — you journaled "list all my content in content-reminder repo" in 2021; this very session proves the pain (mine notes → surface opportunities). A small tool/prompt-library for creators mining their own vaults could be a niche info-product. Confidence: 5/10; revisit after the content engine is running.

---

# Website Opportunities

- **/local-first** — evergreen hub: what it is, your production lessons, annotated reading list (your inbox contains an excellent curated link set: Ink & Switch, ElectricSQL, vlcn, Automerge, Peritext). Establishes the authority you want.
- **/state-machines** — the curriculum hub; every tip/video/post lives under it. This is the "my thing" page.
- **/garden or /notes** — the braindump is already Foam-published-ish (readme has "Latest posts / Featured notes"); a curated digital garden turns 350 files into ambient authority.
- **/uses + /screencasting** — record-badass-screencasts as a public guide; small but very shareable in the teaching niche.
- **/mentoria** — you mentored 12+ people; a page describing the system (and the "fake interview mode" idea) supports both brand and paid offerings.

---

# Research Opportunities

- **Schema evolution / versioning in local-first apps** — flagged as open problem in your Pushpin notes; unsolved industry-wide. Keywords: Cambria, lenses, Automerge schema. A serious essay here = instant credibility with Ink & Switch orbit.
- **Actor model beyond UI** — Swift distributed actors, Erlang/Temporal links in inbox. Research: "actors as the unifying abstraction from UI components to distributed systems" — bridges your two niches into one signature thesis.
- **Model-based testing of UIs with state machines** — jlongster link + XState test notes; underexplored, feeds product #1.
- **Question-first note-taking** — validate your original PKM idea against Zettelkasten literature; potential signature concept.

---

# Related Themes (cross-document map)

- **Ownership & permanence**: local-first ⭤ Usenet/feeds ⭤ digital gardens ⭤ "publish ideas useful years from now". One coherent worldview — name it and claim it.
- **Modeling before coding**: state machines ⭤ hammock-driven development ⭤ "software modeling is planning ahead" (workshop notes). A second coherent thread.
- **Teaching as compounding asset**: egghead craft ⭤ mentorias ⭤ Escuela Frontend ⭤ BADASS ("make users awesome") ⭤ Smart Notes. Your meta-skill.
- **Contradiction worth noticing**: notes praise consistency (flexible-consistency, newsletter CONSISTENCIA) while the vault shows publishing stopped repeatedly. The bottleneck is not ideas — it's a publishing pipeline. That's what this IP-mining process should fix.

---

# Hidden Gems

- `inbox.md` is itself a product-grade **curated local-first/editor/hypermedia reading list** — 100+ vetted links. One weekend of annotation = a "awesome-local-first" style resource page people bookmark.
- The **Hot Ones interview-research question** (how-to-interview.md) — could seed a podcast format: deeply-researched interviews with local-first/dev-tool builders.
- **"Fake interview mode" for mentorias** — a paid offering hiding in a bullet.
- The **Fraser Discord quote** on parallel states — with permission, that's a viral explainer thread.
- **Editby/Nomo feedback notes** — you naturally produce sharp UX teardowns; "product teardown" posts are an easy recurring format that reinforces the product-engineer identity.
- **package-manager-pays-maintainers idea** (2020 tweet) — you called the OSS-funding wave years early; a "revisiting my old ideas" post format could be a recurring series.

---

# Immediate Action Items (each <1 day unless noted)

1. Publish the **git worktree** post (edit pass only).
2. Publish **mutation testing** post on your own site (it's finished; currently `published: false`).
3. Write the **"Parallel states vs invoked actors"** explainer (blog + thread) — clearest quick win in the state-machine niche.
4. Create **/local-first hub page** with 10 annotated links from inbox.md as v1.
5. Outline the **"Lessons from building production local-first apps"** talk (1 page, from Pushpin + Mintter notes) — target 2–3 CFPs.
6. Draft the **state-machines series index** from `maquinas-de-estado.md` (6 posts, ES+EN).
7. Prototype **State Machine Battle** as a single CodeSandbox challenge to test appetite (2–3 days; do after 1–6).

---

# Opportunity Backlog (running, ranked)

| # | Opportunity | Type | Leverage | Status |
|---|---|---|---|---|
| 1 | Local-first production lessons (essays + talk) | Content/Authority | Very high | Not started |
| 2 | State machines curriculum (ES+EN) | Content/Course | Very high | Outlined in notes |
| 3 | /local-first + /state-machines hub pages | Website | High | Not started |
| 4 | Local-First Starter Kit + workshop | Product | High | Raw material exists |
| 5 | State Machine Battle | Product | High (audience) | Idea (recurring) |
| 6 | git worktree / mutation testing / Cypress-vs-Playwright posts | Content | Medium (quick wins) | Drafts done |
| 7 | Feeds-you-can-finish / ownership essay | Content/Opinion | Medium-high | Notes exist |
| 8 | Hypermedia history series | Content | Medium (compounds) | Notes exist |
| 9 | Spanish JS corpus republish | Website/SEO | Medium | Written |
| 10 | Interview-driven podcast (Hot Ones method) | Content | Medium | Question stage |
| 11 | YouTube timestamp extension | Product | Low | Parked |
