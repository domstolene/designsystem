# Elsa — Domstolenes designsystem

Norwegian Courts design system monorepo. Code prefix: `dds`. Language: Norwegian (docs/MDX/MD/PRs/JSDoc), English (code).

## Quick start

```bash
pnpm install       # install all workspace deps
pnpm dev           # watch-build packages (tsdown --watch / tcm --watch)
pnpm storybook     # Storybook dev server on :6006
pnpm build         # full build all packages (turbo)
```

## Package layout

| Package                         | npm                                      | Build tool          | Notes                                                                                          |
| ------------------------------- | ---------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| `packages/dds-components`       | `@norges-domstoler/dds-components`       | tsdown              | React components. `prebuild` generates `dds-tokens.css`; `build` runs `tcm src` then `tsdown`. |
| `packages/dds-tokens`           | `@norges-domstoler/dds-design-tokens`    | tsdown              | Design tokens. `generate:tokens` runs Style Dictionary (`build.js`). No `test`/`typecheck`.    |
| `packages/dds-formatting`       | `@norges-domstoler/dds-formatting`       | tsdown              | Text, number, and date/time formatting utils (no React).                                       |
| `packages/storybook-components` | `@norges-domstoler/storybook-components` | none (src/index.ts) | **Private**. Storybook doc helper components. Has `typecheck` only (no `build`/`test`).        |
| `packages/development-utils`    | `@norges-domstoler/development-utils`    | tsdown              | Dev utilities (`EnvironmentBannerProvider`). Runs `tcm src` before `tsdown`.                   |

## Commands

```bash
# Test
pnpm test                                      # all packages (turbo)
pnpm test:components                           # dds-components only
pnpm test:components <File>.spec.tsx           # single test file (e.g. Button.spec.tsx)
pnpm test:components:ui                        # dds-components Vitest UI with coverage
pnpm coverage                                  # all packages with coverage
pnpm coverage:components                       # dds-components coverage only

# Typecheck (tsc --noEmit per package)
pnpm typecheck                                 # turbo runs build first automatically

# Lint & format (scoped to packages/**/src/**)
pnpm lint                                      # ESLint 10 flat config (needs build outputs on clean checkout)
pnpm lint:fix                                  # with --fix
pnpm format:check                              # Prettier (singleQuote, arrowParens: "avoid")
pnpm format:write

# Storybook & visual tests
pnpm build:storybook                           # pnpm build && storybook build
pnpm chromatic                                 # Chromatic visual regression tests

# Tokens & scaffolding
pnpm generate:tokens                           # regenerate CSS/SCSS/JS in dds-tokens/generated-tokens/
pnpm generate:component-template <Name>        # scaffold component files + src/index.ts export

# Release
pnpm changeset                                 # add changeset entry
pnpm version:dev                               # snapshot version (--snapshot dev)
```

## Build details

- Published packages bundle with `tsdown` (`--config-loader unrun --dts`), sharing root `tsdown.config.ts` (CJS + ESM, `es2022`, PostCSS with CSS Modules scoped as `dds-[name]__[local]`, `.svg` as `dataurl`). `dds-components` and `development-utils` add `"use client";` banners and export `./index.css`.
- `turbo.json`: `test` and `coverage` depend on `^build`; `typecheck` depends on `build`. Running per-package `tsc --noEmit` or root `pnpm lint` (uses `typescript-eslint` `projectService`) on a clean checkout requires `pnpm build` first so `dist/` and CSS Module `.d.ts` files exist.
- `dds-components` `prebuild` runs `scripts/generate-dds-tokens-css.mjs` to generate `src/styles/dds-tokens.css` from `@norges-domstoler/dds-design-tokens`, and both `dds-components` and `development-utils` generate CSS Module types via `tcm src`.
- TypeScript `6.0.3`, Vite `8`, Storybook `10` (`@storybook/react-vite`).
- React 19 is pinned via `pnpm-workspace.yaml` overrides (`react: 19.3.1`, `react-dom: 19.3.1`).
- `strictPeerDependencies: false`, `autoInstallPeers: true`, `enablePrePostScripts: true` in `pnpm-workspace.yaml`.

## Testing conventions

- **Vitest 4** (`vitest.config.mts`) with globals enabled, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom` (`jsdom` in `dds-components` and `development-utils`, Node in `dds-formatting`).
- Test files: `*.spec.tsx` / `*.spec.ts`.
- Coverage thresholds (v8): 90% statements/functions/lines and 85% branches in `dds-components`; 90% across all metrics in `dds-formatting` and `development-utils`.
- Components using React portals (`Modal`, `Drawer`, `Select`, `DatePicker`, `OverflowMenu`, `SplitButton`, etc.) must use `portalRender()` from `src/test.utils.tsx` instead of RTL's `render` (it wraps the UI in `<ThemeProvider>` so the portal container exists).
- Integrity tests in `packages/dds-components/src/tests/`:
  - `css-variable-usage.spec.ts`: verifies all referenced `--dds-*` CSS variables are defined and locally defined ones are used.
  - `storybook-mdx.spec.ts`: verifies every `.stories.tsx` with a matching `.mdx` file has `export default meta`.

## Component file structure

```
KomponentNavn/
  KomponentNavn.tsx         # component
  KomponentNavn.module.css  # CSS Modules (PascalCase)
  KomponentNavn.types.tsx   # optional shared/extracted types
  KomponentNavn.spec.tsx    # tests
  KomponentNavn.stories.tsx # Storybook stories
  KomponentNavn.mdx         # docs
  index.ts                  # re-export (also barrel-exported in src/index.ts)
```

Props use `BaseComponentProps` / `BaseComponentPropsWithChildren` / `PolymorphicBaseComponentProps` from `../../types`. Use `cn()` from `../../utils` for class composition and `getBaseHTMLProps(id, className, style, htmlProps, rest)` for native attribute forwarding.

## Storybook conventions

- Storybook 10 CSF Factories: `const meta = preview.meta({ title: 'dds-components/Components/ComponentName', component: Component, argTypes: { ...commonArgTypes } })`, `export default meta`, and `export const Preview = meta.story({ ... })`.
- `#.storybook/*` path alias configured in root `tsconfig.json`, `package.json` (`imports`), and `.storybook/main.ts`.
- Use `<StoryVStack>` / `<StoryHStack>` from `../layout/Stack/storybook-utils` for layout in stories.
- Global preview decorator wraps stories in `<DdsProvider language="nb">` with theme (`core`/`supreme`, light/dark) controls (opt out with `parameters: { disableGlobalDecorator: true }`).
- Visual regression via Chromatic (runs on push, reviewed in PR).

## Release process

- Changesets for versioning/changelog (`pnpm changeset`).
- PR title must match `^(Uten issue|(ARCGIS|DATA|ELSA|ELSA1|GLAD|INFOPORTAL|OBYGG|PLATTFORM|SIVIL1|SPES1|SPES2|STRAFF1|STRAFF2|VA|OKONOMI1)-[0-9]+): ` (CI enforced).
- Pushing changesets to `main` opens/updates the "Version Packages" PR and publishes `@dev` snapshot releases; merging "Version Packages" publishes all changed packages to npm (`provenance: true`) and tracks adoption in Zeroheight.
- Publishing done by team Elsa only. Base branch: `main`.

## CI pipelines (GitHub Actions)

- **PR to `main`** (`pull-request.yml`, ignores `**/*.md` and `LICENSE*`): conditional token gen & auto-commit → parallel `build`, `tests` (`pnpm coverage`), `eslint` (`pnpm build && pnpm lint`), `types` (`pnpm typecheck`), `prettier` (`pnpm format:check`), plus Chromatic if tokens changed.
- **PR title check** (`pr-title.yml`): validates Jira issue key or `Uten issue:` prefix.
- **Push (UI-relevant paths)** (`chromatic.yml`): runs Chromatic visual tests.
- **Push to `main` (`packages/**` or `.changeset/**`)** (`release.yml`): Changesets release PR / npm publish + `@dev` snapshot publish.
- **Push to `main` (always)** (`storybook.yml`): deploys Storybook to GitHub Pages (PR branch previews run on Cloudflare Pages).
- **Monthly schedule** (`update-browserslist.yml`): opens PR updating `browserslist-db`.
- All workflows use `.github/composite-actions/install/action.yml` (`jdx/mise-action` + pnpm store cache + `pnpm install`).

## Environment

- Node `24.22.2`, pnpm `11.28.10` (managed via **mise** in `mise.toml`)
- `packageManager: "pnpm@11.28.10"` in root `package.json`

## Misc

- No pre-commit hooks
- Asset and CSS side-effect imports typed via `global.d.ts` (`*.svg`, `*.svg?raw`, `*.png`, `@norges-domstoler/dds-components/index.css`)
- CSS custom properties use `--dds-*` naming from design tokens
