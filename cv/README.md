# CV system

One database, several documents. Nothing here is published automatically.

```
master.yaml     every job, project, skill and claim, with source and status
variants.yaml   which parts each document uses, and how they are worded
build.mjs       builds out/<variant>.html and out/<variant>.pdf
verify.mjs      checks a built file: text extraction, diacritics, links
out/            generated, safe to delete
```

## Build

```bash
cd cv
npm install                       # once
node build.mjs --variant=general  # the version you send to employers
node build.mjs --variant=master   # everything, for your own reference
node verify.mjs "<abs path>\out\general.html"
```

To publish the general CV on the portfolio:

```bash
cp cv/out/general.pdf public/cv/Amar-Muminovic-CV.pdf
```

The Download CV button in the hero points at that file.

## Rules that keep the documents honest

- **`status:` decides what ships.** `confirmed` and `reported` can appear in a
  document. `pending` and `dropped` never do; the builder filters them out and
  `verify.mjs` fails loudly if one slips through.
- **`internal:` never reaches a document.** It is for notes to ourselves.
- **Facts are identical in every variant.** Titles, employers, dates and scope
  come from `master.yaml`. A variant chooses *which* bullets appear and how they
  are phrased, never what is true.
- **Parallel roles are not extra years.** CreditGenius overlaps the P23 lead
  role in 2025. Both are listed with real dates; the total is never summed.
- **Numbers need a source.** If a metric cannot be backed up, describe the
  delivery instead. Do not invent percentages.
- **YAML gotcha:** a bullet containing `: ` must be quoted, otherwise YAML reads
  it as a map and the document prints `[object Object]`.

## Tailoring to a specific job ad

Copy the prompt below into a new session, with the ad attached.

---

**Prompt — targeted CV**

> You are updating a CV for Amar Muminović from an existing master database.
> Do not invent experience, retitle roles, or change dates.
>
> 1. Read `cv/master.yaml` and `cv/variants.yaml`. Treat `status: pending` and
>    `status: dropped` as unusable, and `internal:` as private.
> 2. Read the job ad I attach. Split its requirements into **must-have** and
>    **nice-to-have**. Do not assume the ad reveals every internal criterion.
> 3. Build this table before writing anything:
>
>    | Ad requirement | Evidence in master.yaml | Where it will appear in the CV | confirmed / partial / unknown / real gap |
>
>    A real gap stays a gap. Do not paper over it with adjacent technology:
>    React is not React Native, Angular is not AngularJS, and calling an LLM API
>    is not training a model.
> 4. Add a new variant to `cv/variants.yaml` named after the company or role.
>    Adjust only: profile title (if it is genuinely accurate), summary, which
>    bullets appear and in what order, which projects appear, and the order of
>    skill groups.
> 5. Build it: `node build.mjs --variant=<name>`, then run `verify.mjs` on the
>    output.
> 6. Re-read the extracted text of the finished PDF against the ad, and confirm
>    the strongest evidence for each must-have is actually in the document, not
>    only on the portfolio. Assume the reader never opens a link.
> 7. Report back: the table, what was left out and why, and any real gaps. Call
>    this an internal check, not an ATS score.
>
> Save the ad text next to the variant as `ads/<name>.md` so the pairing is kept.

---

## Open questions

`master.yaml` ends with `open_questions`. Anything listed there is missing from
the public documents on purpose. When Amar answers one, update `master.yaml`
first, then rebuild — never edit a built file by hand.
