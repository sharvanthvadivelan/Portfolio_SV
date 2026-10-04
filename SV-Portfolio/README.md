# SV Portfolio — VS Code edition

Latest portfolio source with the Instagram link, GitHub project links, results viewer, LAILA interface video, separate photo/certificate galleries, animations, terminal, command palette, and shooting/MTB passions.

This is a standalone Next.js edition. It does not require Sites, Cloudflare, or ChatGPT sign-in to run locally. The appearance and application content are preserved; development/build/start commands use standard Next.js. Editing this copy does not automatically update the hosted portfolio.

## Start on Windows

Install Node.js 22.13+ and VS Code. Extract this ZIP and open the `SV-Portfolio` folder in VS Code. In Terminal > New Terminal run:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:3000 or the address printed in the terminal. Use Ctrl+C to stop. On macOS/Linux use `npm ci` and `npm run dev`. The Windows `.cmd` form avoids PowerShell script-policy errors. Installation needs internet access. Dependencies are excluded from the ZIP.

## Production build

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

## Edit content

| Change | Location |
| --- | --- |
| Name, Instagram, GitHub, email, meeting link | `content/portfolio.ts` → `profile` |
| Projects, descriptions, repository links | `content/portfolio.ts` → `projects` |
| Skills and passions | `content/portfolio.ts` → `skills` |
| Project screenshots/videos and code-file links | `content/media.ts` → `projectEvidence` |
| Photo files | `public/photos/` |
| Photo gallery entries | `content/media.ts` → `photos` |
| Certificate images/PDFs | `public/certificates/` |
| Certificate entries | `content/media.ts` → `certificates` |
| Project media | `public/projects/<project-id>/` |
| Markdown blog text | `content/notes.ts` |
| Main page | `app/page.tsx` |
| Styling | `app/globals.css`, `app/reference-flow.css`, `app/media-showcase.css` |

### Add a portrait

Save `public/photos/sv.jpg` and add to `photos`:

```ts
{ id: 'sv-portrait', src: '/photos/sv.jpg', alt: 'Sharvanth Vadivelan', title: 'Sharvanth Vadivelan', caption: 'AI builder, professional shooter, and MTB cyclist.' }
```

### Add a certificate

Save its preview in `public/certificates/` and add to `certificates`:

```ts
{ title: 'Certificate title', issuer: 'Actual issuer', date: '2026', image: '/certificates/certificate.jpg', url: '', file: '/certificates/certificate.pdf' }
```

Use the real verification URL when available. Remove `file` if no PDF exists. Portrait/certificate arrays are currently empty because these files have not been supplied.

### Add results

Add `projectEvidence[projectId]` with `summary`, `media`, `files`, and `notes`. Media entries use `type: 'image'` or `'video'`, `src`, `title`, `caption`, and `alt`; videos may specify `poster`. The LAILA entry shows the format.

The LAILA video is a repository interface-animation asset, not a recording of a live model response. Other project results require real screenshots or videos.

## Current behavior

- GitHub data uses `/api/github`, with public API rate limits. No token is required.
- Until an email is configured, the form downloads an unsent draft. With `profile.email`, it opens a mail draft. It has no backend email delivery.
- The floating assistant is a curated guide, not an LLM connection.
- Audio defaults off; reduced-motion preferences are respected.
- Ctrl/Cmd+K opens the command palette; backtick opens the terminal.
- PWA caches only public static assets, not the whole website.
- Google Fonts, GitHub data and external links need internet access.

## Sharing changes

This local copy does not automatically update the hosted Site. You can commit it to your GitHub and deploy using a Next.js-compatible host. GitHub Pages alone cannot run the `/api/github` server route.
