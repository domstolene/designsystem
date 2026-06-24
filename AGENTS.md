# Elsa — Domstolenes designsystem

Norwegian Courts design system monorepo. Code prefix: `dds`. Language: Norwegian (docs/MDX/MD/PRs), English (code).

## Quick start

```bash
pnpm install       # install all workspace deps
pnpm dev           # watch-build all packages; dist build once, then file watchers
pnpm storybook     # Storybook dev server on :6006
pnpm build         # full build all packages (turbo)
```

## Package layout

| Package | npm | Build tool | Notes |
|---|---|---|---|
| `packages/dds-components` | `@norges-domstoler/dds-components` | tsup | React components. Build runs `tcm src` (CSS type gen) before tsup. |
| `packages/dds-tokens` | `@norges-domstoler/dds-design-tokens` | rollup | Design tokens. `generate:tokens` runs Style Dictionary. |
| `packages/dds-formatting` | `@norges-domstoler/dds-formatting` | tsup | Text formatting utils (no React). |
| `packages/storybook-components` | `@norges-domstoler/storybook-components` | none (src/index.ts) | **Private**. Storybook helper components. No build/test scripts. |
| `packages/development-utils` | `@norges-domstoler/development-utils` | tsup | Dev utilities (EnvBannerProvider). Also runs `tcm src` before build. |

## Commands

```bash
# Test
pnpm test                     # all packages (turbo)
pnpm test:components          # dds-components only
pnpm test:components <File>.spec.tsx   # single test file (e.g. Button.spec.tsx)
pnpm coverage                 # all packages with coverage
pnpm coverage:components      # dds-components coverage only

# Typecheck (tsc --noEmit per package)
pnpm typecheck                # depends on build — must run build first

# Lint & format
pnpm lint                     # ESLint 9 flat config
pnpm lint:fix                 # with --fix
pnpm format:check             # Prettier (singleQuote, no parens on single arrow params)
pnpm format:write

# Tokens
pnpm generate:tokens          # regenerate CSS/SCSS/JS from JSON token sources

# Component scaffolding
pnpm generate:component-template  # interactive CLI, creates all required files

# Release
pnpm changeset                # add changeset entry
pnpm changeset version --snapshot dev   # snapshot version for dev testing
```

## Build details

- `turbo.json`: `test` depends on `^build`, `typecheck` depends on `build`
- Must run `pnpm build` before `pnpm typecheck`
- `dds-components` and `development-utils` generate TypeScript types from CSS Modules (`tcm src`) as part of build
- React 19 is pinned via `pnpm-workspace.yaml` overrides (`react: 19.2.6`, `react-dom: 19.2.6`)
- `strictPeerDependencies: false` in workspace config

## Testing conventions

- **Vitest** with jsdom, globals enabled, @testing-library/react/user-event
- Test files: `*.spec.tsx` / `*.spec.ts`
- Coverage thresholds: 90% statements/functions/lines, 85% branches (dds-components)
- Components using React portals need `portalRender()` (not RTL's `render`) and must render inside `<DdsProvider>`

## Component file structure

```
KomponentNavn/
  KomponentNavn.tsx        # component
  komponentNavn.module.css # CSS Modules
  KomponentNavn.spec.tsx   # tests
  KomponentNavn.stories.tsx# Storybook stories
  KomponentNavn.mdx        # docs
  index.ts                 # re-export
```

Props use `BaseComponentProps` / `BaseComponentPropsWithChildren` from `../../types`. Use `cn()` from `../../utils` for class composition, `getBaseHTMLProps` for native attribute forwarding.

## Storybook conventions

- Stories use `preview.meta({ title: 'dds-components/ComponentName', component: Component, argTypes: { ...commonArgTypes } })` pattern
- `#.storybook/*` path alias configured in root tsconfig.json
- Use `<StoryVStack>` / `<StoryHStack>` from `../layout/Stack/utils` for layout in stories
- Visual regression via Chromatic (manual review in PR)

## Release process

- Changesets for versioning/changelog. PR title must match Jira pattern (CI enforced).
- All packages published together via "Version Packages" PR merge.
- Publishing done by team Elsa only.
- `provenance: true` in publishConfig for npm provenance.
- Base branch: `main`.

## CI pipelines (GitHub Actions)

- **PR to main**: token gen → build → tests+coverage → ESLint → typecheck → Prettier → optional Chromatic
- **Push to main (packages/ or .changeset/)**: Release via changesets
- **Push to main (always)**: Deploy Storybook to GitHub Pages
- All use composite action `.github/composite-actions/install/action.yml` (pnpm setup + node 24 + pnpm install)

## Environment

- Node 24.1.0, pnpm 11.1.3 (managed via Volta; requires `VOLTA_FEATURE_PNPM=1` env var)
- `packageManager: "pnpm@11.1.3"` in root package.json

## Misc

- No pre-commit hooks
- SVG imports typed via `global.d.ts` (returns string; `?raw` suffix also supported)
- CSS custom properties use `--dds-*` naming from design tokens
