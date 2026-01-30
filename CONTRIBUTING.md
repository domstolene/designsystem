# Bidra

Vi setter pris på at du vil gjøre Elsa bedre! Vi bruker Slack kanalen [#team-elsa-intern](https://domstoladm.slack.com/archives/C0AAV9F9KUM) for samarbeid med faste bidragsytere. Ellers ta gjerne kontakt med team Elsa i [#designsystemet-elsa](https://domstoladm.slack.com/archives/C01HNLSPTT9) for å diskutere bidraget.

## Innhold

- [Kom i gang](#kom-i-gang)
- [Konvensjoner](#konvensjoner)
- [Komponentutvikling](#komponentutvikling)
- [Ikoner](#ikoner)
- [Design tokens](#design-tokens)
- [Release notes](#release-notes)
- [Publisering](#publisering)

## Kom i gang

### Jira

Arbeidet logges i [Elsa Utvikling tavle](https://domstol.atlassian.net/jira/software/c/projects/ELSA1/boards/357) i Jira. Du kan be team Elsa om å lage oppgave og få den tildelt.

### Nødvendige installasjoner

- **[Volta](https://volta.sh/)**: Vi anbefaler å installere Volta for versjonshåndtering av Node.js og pnpm. Volta vil automatisk installere riktig versjon av Node.js og pnpm når du jobber med designsystemet. Siden Volta kun har eksperimentell støtte for pnpm må du legge til `VOLTA_FEATURE_PNPM=1` i miljøvariabler (Windows), eller `.bashrc`, `.zshrc` eller tilsvarende (Linux/Mac). Se [Volta pnpm support](https://docs.volta.sh/advanced/pnpm) for mer informasjon.
- **[Node.js](https://nodejs.org/en)**: kjør `volta install node` for riktig versjon.
- **[pnpm](https://pnpm.io/)**: vi bruker pnpm som pakke-manager. Kjør `volta install pnpm` for riktig versjon.

### Kjør miljøet

Installer dependencies:

```shell
pnpm install
```

Bygg løsningen:

```shell
pnpm build
```

Kjør dev server:

```shell
pnpm dev
```

Kjør Storybook (utviklingsmiljø, demoside og playground):

```shell
pnpm storybook
```

Storybook kjører på port `6006`.

### Linking

Hvis du vil teste endringer i Elsa live i applikasjonen din kan du bruke `npm link`.

```Shell
cd ~/designsystem/packages/pakke # velg pakke
npm link
cd ~/din-app
npm link pakke
```

`pakke` må tilsvare `name` som er satt i `pakke/package.json`, for eksempel `@norges-domstoler/dds-components`.

### Branch preview

Vi bruker Cloudflare Pages til å deploye til Storybook ved ny PR. Preview er nyttig ved code review.

### Testing

Du kan teste hele applikasjonen:

```Shell
pnpm test
```

#### Komponenttesting

Test kun dds-components:

```Shell
pnpm test:components
```

Kjør spesifikk testfil:

```Shell
pnpm test:components <KomponentNavn>.spec.tsx
```

#### Visuell testing

Vi kjører visuell testing med Chromatic i Storybook on push. Hvis din commit resulterer i visuelle endringer i Storybook vil de dukke opp i [nyeste Chromatic build](https://www.chromatic.com/builds?appId=685279c6f45f55e818f8f255). Disse skal godkjennes/avslåes, enten av deg eller reviewer (spørs på kontekst). Avslåtte endringer må fikses, så kjøres tester på nytt.

Du kan kjøre visuelle tester direkte i nettleseren i Storybook ved å trykke på "Run tests" i global widget:

![image](https://github.com/user-attachments/assets/766db2a9-6617-493b-9ee4-17c526313e45)

Tester kan også kjøres per komponent via fanen "Visual tests":

![image](https://github.com/user-attachments/assets/cc52dd61-264b-460b-b969-84b5339b6983)

Du kan også kjøre en kommando for å se resultatet i terminalen:

```Shell
pnpm chromatic
```

Les mer i Storybook docs: [kjør visuelle tester](https://storybook.js.org/docs/writing-tests/visual-testing#run-visual-tests) og [se over endringer](https://storybook.js.org/docs/writing-tests/visual-testing#review-changes).

## Konvensjoner

### Språk

- **Norsk:** dokumentasjon i design.domstol.no, `.mdx`-filer, `.md`-filer, pull requests, [JSDoc](https://jsdoc.app/) som dokumenterer props og annen kode.

- **Engelsk:** kode, utviklingsrelaterte uttrykk i dokumentasjon som gir mest mening på engelsk, f.eks. "property".

### Pull request

- Bruk PR-malen
- Bruk [Markdown](https://www.markdownguide.org/basic-syntax/) slik at det er tydelig hva du refererer til. F.eks. et HTML element, en funksjon og en CSS-klasse bør bruke kode-markdown.
- Ta med skjermdumper eller videoer av resultatet hvis relevant.
- Squash gjerne dine commits.

### Linting

Vi bruker ESLint.

#### VS Code

Installer gjerne [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Du kan velge i innstillinger om feil skal fikses ved lagring. Trykk `Ctrl + Shift + P`, søk på "Open User settings (JSON)" og ha med følgende:

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
```

### Kodeformatering

Vi bruker Prettier. Du kan sjekke hvilke filer er feilformatert:

```shell
pnpm format:check
```

Du kan rette filer med:

```shell
pnpm format:write
```

Hvis resultatet viser filer du ikke har rørt er de mest sannsynligvis egentlig ikke feil; de vil forsvinne fra source control hvis du prøver å stage dem, og vil vises som fikset hvis du kjører kommandoen på nytt.

#### VS Code

Installer plugin [Prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

I innstillinger:

- Sett **Text Editor > Default formatter** til "Prettier - code formatter".
- Sett **Text Editor > Formatting > Format on save mode** til "true".

## Komponentutvikling

Hver komponent skal ligge i egen mappe, der navnet er <KomponentNavn>. Mappen skal inneholde:

- **Komponentfil:** `<KomponentNavn>.tsx`
- **Css-fil:** - styling vha CSS modules: `<komponentNavn>.module.css`
- **Testfil:** - tester: `<KomponentNavn>.spec.tsx`
- **Stories-fi -l:** - stories: `<KomponentNavn>.stories.tsx`
- **Docs-fil:** - teknisk dokumentasjon: `<KomponentNavn>.mdx`
- **Index-fil:** `index.ts` for eksportering
- **_(Ved behov) Types-fil:_** - hvis komponenten har mange types eller flere delkomponenter deler types, kan det være relevant å flytte det ut til egen fil: `<KomponentNavn>.types.tsx`

Det kan også være relevant med flere filer, f. eks. RadioButton inneholder komponentfilene `RadioButton.tsx` og `RadioButtonGroup.tsx`, samt CSS-, testing- og stories-filer for begge.

```
├── <KomponentNavn>
│ ├── <KomponentNavn>.mdx
| ├── <komponentNavn>.module.css
│ ├── <KomponentNavn>.spec.tsx
│ ├── <KomponentNavn>.stories.tsx
│ ├── <KomponentNavn>.tsx
| ├── <komponentNavn>.types.tsx (ved behov)
│ └── index.ts
```

### Komponent-fil

Her bygges selve komponenten. Du kan følge en enkel mal:

```JSX
import styles from './Component.module.css';
import { BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';

export type ComponentSize = 'small' | 'medium';

//BaseComponentProps eller BaseComponentPropsWithChildren for props
// Bruk JSDoc og beskriv hver prop
export type ComponentProps = BaseComponentProps<
HTMLDivElement,
{
    /**
     * Størrelse.
     * @default "medium"
    */
    size: ComponentSize;
}>;

// Komponenten
export const Component = (props: ComponentProps) =>{
    const { id, className, htmlProps, size, ...rest } = props;

    return (
        <div
            // Bruk getBaseHTMLProps, slik at konsumenter ikke får alle native HTML-attributter i tooltip.
            {...getBaseHTMLProps(
                id,
                // CSS styling, bruk cn() for å kombinere klasser
                cn(className, styles.container, styles[size]),
                restHTMLprops,
                rest
            )}
        />
    )
};
```

### Css-fil

Vi bruker [CSS modules](https://github.com/css-modules/css-modules) til å scope styling per komponent. Bruk gjerne [BEM](https://getbem.com/introduction/)-systemet for lesbarhet. Her bruker du våre design tokens på CSS-format.

Eksempel:

```CSS
/* Chip.module.css */
.container {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    gap: var(--dds-spacing-x0-25);
    padding: var(--dds-spacing-x0-125) var(--dds-spacing-x0-25)
    var(--dds-spacing-x0-125) var(--dds-spacing-x0-5);
    border: 1px solid var(--dds-color-border-subtle);
    border-radius: var(--dds-border-radius-chip);
    background-color: var(--dds-color-surface-subtle);
}

.group {
    display: flex;
    gap: var(--dds-spacing-x0-75);
}
```

### Stories-fil

Vi bruker Storybook som utviklingsmiljø, demoside og playground. Hver komponent skal ha minst en av grunnleggende stories (begge hvis relevant):

- **Preview**, for bare-bones eksempel
- **Overview**, der visuelle varianter og bruken av relevante props presenteres

Spørs på komponenten kan det være relevant med flere stories: eksempel med kontrollert input, bruk av delkomponenter, gruppering osv. Ta gjerne kontakt med team Elsa hvis du er i tvil.

Du kan følge en enkel mal for stories-fila:

```JSX
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Button } from '.';
import { commonArgTypes, labelText } from '../../storybook';

// config
export default {
  title: 'dds-components/Button',
  component: Button,
  // kontrollere  for demo hvis default ikke passer
  argTypes: {
    children: { control: 'text' },
    // ved bruk av BaseComponentProps formater felles props likt
    ...commonArgTypes,
    // ekskluderte kontrollere;
    // bruk på props som ikke trenger å styres med i demo
    icon: { control: false },
  }
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// demo; kan ha default args for bedre showcase
export const Preview: Story = {
  args: { children: 'Tekst' }
};

```

#### `<StoryVStack> og <StoryHStack>`

Hvis du viser flere varianter i en enkel story kan du bruke `<StoryVStack>` og `<StoryHStack>`-helpers til å oppnå riktig layout. De bruker fornuftige defaults for typiske avstander. Ved behov kan de overskrives, se [Stack-komponenten](https://design.domstol.no/987b33f71/p/8539cc-stack) for hva som støttes.

```JSX
import { Button } from '.';
import { StoryVStack } from '../layout/Stack/utils';

/**config...**/

// Demo med stack
export const Sizes: Story = {
    render: args => (
        <StoryVStack>
        <Button {...args} size="small">Small</Button>
        <Button {...args} size="medium">Medium</Button>
        <Button {...args} size="large">Large</Button>
        </StoryVStack>
    )
};

```

### Docs-fil

Docs-fila er en `.mdx` fil som inneholder teknisk dokumentasjon og viser Storybook demoer. Den bruker en blanding av markdown og JSX, og vises som en docs-story i Elsa Storybook.

Vi har en liten intern pakke `@norges-domstoler/storybook-components` for komponenter og hjelpere vi bruker i Storybook docs for standardisert visning.

Enkel mal for docs-fila:

```JSX
import { Canvas, Controls, Meta } from '@storybook/addon-docs/blocks';
import { Source, ComponentLinkRow } from '@norges-domstoler/storybook-components';
import * as komponentStories from './KomponentNavn.stories'
import * as delkomponentStories from './DelkomponentNavn.stories'

<Meta of={komponentStories} />

# KomponentNavn

// Lenker til tilknyttede ressurser; hør med Elsa team.
<ComponentLinkRow
  docsHref="link"
  figmaHref="link"
  githubHref={{ folder: 'components', comp: 'Komponentnavn' }}
  storybookHref={{ folder: 'components', comp: 'komponentnavn' }}
/>

// Referanse til primære storien, ofte komponentStories.Preview.
// Bruk Canvas for demo og Controls for kotrollere.
// Kan bruke `<Tabs>` ved flere eksempler eller delkomponenter; Hør med Elsa team.
<Canvas of={komponentStories.Preview} />
<Controls of={komponentStories.Preview} />

// Eksempler med manuell kode ved behov
## Eksempler

<Source code={`
import { KomponentNavn } from '@norges-domstoler/pakkenavn';
    // eksempel på bruk
`} />

// Retningslinjer for utviklere
## Retningslinjer

/*...liste eller seksjoner med retningslinjer...*/
```

### Testfil

Vi bruker Vitest og React Testing Library for testing.

Testene sørger for riktig oppførsel på overordnet nivå: blir teksten i en wrapper rendret, blir inputfeltet `disabled` ved bruk av dedikert prop osv. Ha også med UU-relaterte tester, som å sjekke om elementer får tilgjengelig navn og instrukser.

Du kan kjøre testene i filen din:

```shell
pnpm test:components KomponentNavn.spec.tsx
```

#### `portalRender()`

For komponenter som bruker React portal (`<Modal>` osv.) har vi custom `portalRender()` funksjon som erstatter RTL sin `render`; disse komponentene krever å bli rendret inni `<DdsProvider>`, så vi genererer DOM-noden portalen bruker.

### Index-fil

Eksportering av komponenten:

```JSX

// src/components/Button/index.ts
export * from './RadioButton';

// global
// ../../../index.ts
export * from './components/Button';
```

### Helpers og utils

Gjenbrukbare ressurser som løser typiske problemstillinger.

- `helpers/`: delkomponenter o.l. (`<Backdrop>`, `<Input>`, `<StylelessList>` osv.)
- `hooks/`: React hooks
- `i18n/`: oversettelsesmodul
- `polymorphic/`: polymorfi
- `storybook/`: stories-hjelpere for `dds-components` pakken (`<StoryLabel>` osv.)
- `types/`: globale typings, bl.a. `type BaseComponentProps`
- `utils/`: assorterte utilities.

### Kvalitetskontroll

- Test i alle evergreen nettlesere: Chrome, Firefox, Safari, Edge.
- Følg relevante [WCAG krav](https://www.uutilsynet.no/wcag-standarden/wcag-standarden/86).
- Test med skjermleser.
- Sjekk nettleserstøtte for teknologi du bruker, for eksempel med [Can I use](https://caniuse.com/) eller [MDN Web Docs](https://developer.mozilla.org/en-US/).
- Sjekk om navngiving og andre konvensjoner er like på tvers av komponentene.
- Komponenter skal være gjenbrukbare, gjerne diskuter med designere og utviklere på ditt team samt team Elsa hvilke bruksområder og eventuelle edge cases som er relevante.

## Ikoner

Ikoner er JSX-elementer som returnerer `<svg>`. Under `dds-components/src/components/Icon` ligger:

- Komponenten `<Icon>`
- `icons/`: selve ikonene som `.tsx` filer.
- `utils/`: utilities for ikon
- `overview-page/`: katalog med ikoner

### Legge til ikon

#### Eksporter fra Figma

Få taket i svg-koden til ikonet i Figma DDS Foundations; hvis det ikke finnes skal det legges inn der først.

#### I kode

Når du har svg-koden tilgjengelig, kopier **kun barna til `<svg>`** (`<path>`, `<rect>`, `<cicrle>` osv. **OBS!** Ikke ta med fill-attributtet, fargen skal ikke være hardkodet). For eksempel:

```HTML
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- kopier kun barna til svg! -->
    <!-- Ikke ta med fill! -->
    <path d="ikon-sin-path" />
</svg>
```

Legg til nytt ikon under `icons/` på følgende form:

```JSX
import { type SvgProps, SvgWrapper } from '../utils';

export function NameIcon(props: SvgProps) {
    return (
    <SvgWrapper {...props}>
        /*barna til svg*/
    </SvgWrapper>
);
}
```

Eksporter ikonet i `index.tsx`.

## Design-tokens

Tokens ligger på GitHub som `.json`-filer i `packages/dds-tokens/dds/tokens`.

### Installasjon

Installer [Style-dictionary](https://amzn.github.io/style-dictionary):

```
pnpm --filter "@norges-domstoler/dds-design-tokens" add -D style-dictionary
```

### Generere variabler

Designansvarlig i team Elsa oppdaterer tokens i Figma. De blir automatisk synced med `.json`-filene i kodebasen. Dette vil generere en PR via integrasjon med GitHub og generere stylingvariabler (CSS, SCSS og JS).

Stylingvariabler kan ved behov genereres manuelt:

```Shell
pnpm generate:tokens
```

Genererte variabler ligger i `/generated-tokens` organisert etter plattform.

## Release notes

Når du er ferdig med PR, legg til [changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md):

```Shell
pnpm changeset
```

Velg pakke(r) som ble endret, velg riktig [semver](https://semver.org/) bump, og skriv changelog entry for neste release. Skriv gjerne flere entries ved behov, og bruk Markdown slik at det er tydelig hva du refererer til.

Til slutt setter du team Elsa som reviewer.

## Publisering

> **OBS!** Publisering blir gjort av team Elsa.

Alle pakker i repoet publiseres samtidig ved å merge "Version Packages" PR.
