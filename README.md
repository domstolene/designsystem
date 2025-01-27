# Elsa - Domstolenes designsystem

Elsa er Domstolenes offisielle designsystem. Det består av design i Figma, [dokumentasjon](https://design.domstol.no/) og dette monorepoet.

I koden brukes prefikset `dds` for å spesifisere assosiasjon med designsystemet.

## 📚 Innhold i monorepo

🪑 [Komponenter](packages/dds-components/README.md)

🎨 [Design tokens](packages/dds-tokens/README.md)

📕 [Formatering](packages/dds-formatting/README.md)

🔧 [Dev utils](packages/development-utils/README.md)

🐚 [App shell](packages/app-shell/README.md) (deprecated)

## 🏬 Storefront

📖 [Elsa - dokumentasjon](https://design.domstol.no/)

## 🤝 Bidra

Team Elsa setter pris på all bidrag. Les hvordan bidra i [guiden for bidragsytere](https://design.domstol.no/987b33f71/p/34c962-hvordan-bidra/b/603442).

### 🧑‍💻 Utvikling

> Vi anbefaler å installere [Volta](https://volta.sh/) for versjonshåndtering av Node.js og pnpm.
> Volta vil automatisk installere riktig versjon av Node.js og pnpm når du jobber med designsystemet.
> Siden Volta kun har eksperimentell støtte for pnpm må du legge til `VOLTA_FEATURE_PNPM=1` i miljøvariabler (Windows), eller `.bashrc`, `.zshrc` eller tilsvarende (Linux/Mac).
> Se [https://docs.volta.sh/advanced/pnpm](https://docs.volta.sh/advanced/pnpm) for mer informasjon.

Installer avhengigheter

```bash
pnpm install
```

Start opp utviklingsmiljøet

```bash
pnpm dev
```

Start opp storybook

```bash
pnpm storybook
```

#### Linking

Hvis du vil teste endringer i Elsa live i applikasjonen din kan du bruke `npm link`.

```bash
cd ~/designsystem/packages/pakke # velg pakke
npm link
cd ~/din-app
npm link pakke
```

#### Finner ikke `@norges-domstoler\dds-design-tokens`

Skal ikke egentlig være nødvendig, men hvis du får en feilmeldinger om at den ikke finner `@norges-domstoler\dds-design-tokens` kan du prøve:

```bash
pnpm build
```

#### Legge til change notes

Når du er ferdig med PR, legg til [changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md):

```bash
pnpm changeset
```

Velg pakke(r) som ble endret, velg riktig semver bump type, og skriv changelog entry for neste release. Skriv gjerne flere entries ved behov.

#### Publisering

Ny versjon av alle pakker i repoet publiseres samtidig ved å merge "Version Packages" PR.

**OBS!** Publisering blir gjort av Elsa-teamet.
