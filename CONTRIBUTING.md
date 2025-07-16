# Bidra

Vi setter pris på at du vil gjøre Elsa bedre! Ta gjerne kontakt med team Elsa i [#designsystemet-elsa](https://domstoladm.slack.com/archives/C01HNLSPTT9) på Slack for å diskutere bidraget.

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

Kjør utviklingsmiljøet:

```shell
pnpm dev
```

Bygg bibliotekene:

```shell
pnpm build
```

Kjør Storybook (demoside og playground):

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

### Finner ikke pakken

Skal ikke egentlig være nødvendig, men hvis du får en feilmeldinger om at den ikke finner en av pakkene kan du prøve:

```Shell
pnpm build
```

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

Hvis din kode kan resultere i visuelle endringer i komponenter eller design tokens, kjør visuelle tester via Storybook sin Chromatic integrasjon.

Du kan gjøre det direkte i nettleseren i Storybook ved å trykke på "Run tests" i global widget:

![image](https://github.com/user-attachments/assets/766db2a9-6617-493b-9ee4-17c526313e45)

Tester kan også kjøres per komponent via fanen "Visual tests":

![image](https://github.com/user-attachments/assets/cc52dd61-264b-460b-b969-84b5339b6983)

Hvis forskjeller er funnet, aksepterer du de som er ønsket, fikser de som er uønsket og kjører tester på nytt. Les mer i Storybook docs: [kjør visuelle tester](https://storybook.js.org/docs/writing-tests/visual-testing#run-visual-tests) og [se over endringer](https://storybook.js.org/docs/writing-tests/visual-testing#review-changes).

Du kan også kjøre en kommando for å se resultatet i terminalen:

```Shell
pnpm chromatic
```

## Konvensjoner

### Språk

- **Norsk:** dokumentasjon i design.domstol.no, `.mdx`-filer, `.md`-filer, [JSDoc](https://jsdoc.app/) som dokumenterer komponenter og hooks, pull requests.

- **Engelsk:** kode, utviklingsrelaterte uttrykk i dokumentasjon som gir mest mening på engelsk, f.eks. "property"

### Pull request

- ID som tilsvarer Jira-saken i tittelen. Eksempel: `ELSA1-23 Ny komponent: Button`.
- Commits bør også ha ID fra Jira i tittelen.
- Beskriv kort men tydelig hva bidraget er.
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
- **Css-fil:** inneholder relevant styling vha CSS modules: `<komponentNavn>.module.css`
- **Testfil:** med tilhørende tester: `<KomponentNavn>.spec.tsx`
- **Stories-fil:** med tilhørende stories: `<KomponentNavn>.stories.tsx`
- **Docs-fil:** tilhørende teknisk dokumentasjon: `<KomponentNavn>.mdx`
- **Index-fil:** `index.ts` for eksportering
- **_(Ved behov) Types-fil:_** hvis komponenten har mange types eller flere delkomponenter deler types, kan det være relevant å flytte det ut til egen fil: `<KomponentNavn>.types.tsx`

Det kan også være relevant med flere filer, f. eks. RadioButton inneholder komponentfilene `RadioButton.tsx` og `RadioButtonGroup.tsx`, samt tilhørende css-, testing- og stories-filer for begge.

```
├── <KomponentNavn>
│ ├── <KomponentNavn>.mdx
| ├── <komponentNavn>.modules.css
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

export type ComponentSize = 'small' | 'medium';

//BaseComponentProps eller BaseComponentPropsWithChildren for props
// Bruk JSDoc og beskriv hver prop
export type ComponentProps = BaseComponentPropsChildren<
HTMLDivElement,
{
    /**
     * Størrelse.
     * @default "medium"
    */
    size: ComponentSize;
}>;

// Komponenten, helst med forwardRef
export const Component = forwardRef<HTMLAnchorElement, ComponentProps>((props, ref)=>{
    const { children, id, className, htmlProps, size, ...rest } = props;

    return (
        <div
        // Bruk getBaseHTMLProps, slik at konsumenter ikke får alle native HTML-attributter i tooltip.
            {...getBaseHTMLProps(
                id,
                className,
                restHTMLprops,
                rest
            )}
            // CSS styling, bruk cn() for å kombinere klasser
            className={cn(styles.container, styles[size])}
            ref={ref} >
            {children}
        </div>
    )
});
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

Vi bruker Storybook som demoside og playground. Hver komponent skal ha minst en av grunnleggende stories (begge hvis relevant):

- **Preview**, for bare-bones eksempel
- **Overview**, der visuelle varianter og bruken av relevante props presenteres

Spørs på komponenten kan det være relevant med flere stories: eksempel med kontrollert input, bruk av delkomponenter, gruppering osv. Ta gjerne kontakt med team Elsa hvis du er i tvil.

Du kan følge en enkel mal for stories-fila:

```JSX
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Button } from '.';

// config
export default {
  title: 'dds-components/Button',
  component: Button,
  // kontrollere  for demo
  argTypes: {
    label: { control: 'text' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    href: { control: 'text' },
    // ekskluderte kontrollere;
    // bruk på props som ikke trenger å styres med i demo
    htmlProps: { control: false },
    target: { control: false },
    icon: { control: false },
  }
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// demo; kan ha default args for bedre showcase
export const Preview: Story = {
  args: { children: 'Tekst' }
};

```

#### StoryVStack og StoryHStack

Hvis du viser flere varianter i en enkel story kan du bruke `<StoryVStack>` og `<StoryHStack>`-helpers til å oppnå riktig layout. De bruker fornuftige defaults for typiske avstander. Ved behov kan de overskrives, se [Stack-komponenten](https://design.domstol.no/987b33f71/p/8539cc-stack) for hva som støttes.

```JSX
import { Button } from '.';
import { StoryVStack } from '../layout/Stack/utils';

/**config...**/

// Demo med stack
export const Sizes: Story = {
    args: { children: 'Tekst' },
    render: args => (
        <StoryVStack>
        <Button {...args} size="small" />
        <Button {...args} size="medium" />
        <Button {...args} size="large" />
        </StoryVStack>
    )
};

```

### Docs-fil

Docs-fila er en `.mdx` fil som inneholder teknisk dokumentasjon og viser Storybook demoer. Den bruker en blanding av markdown og JSX, og vises som en docs-story i Elsa Storybook.

Enkel mal for docs-fila:

```JSX
import { Canvas, Controls, Meta } from '@storybook/addon-docs/blocks';
import { Source, ComponentLinkRow } from '@norges-domstoler/storybook-components';
import * as komponentStories from './KomponentNavn.stories'
import * as delkomponentStories from './DelkomponentNavn.stories'

<Meta of={komponentStories} />

# KomponentNavn

// Lenker til andre ressurser
// Hopp over de som ikek er relevante
<ComponentLinkRow
  docsHref="link"
  storybookHref="link"
  figmaHref="link"
  githubHref="link"
/>

## Props

// Referanse til primære storien, ofte komponentStories.Default.
// Bruk Canvas for demo og Controls for kotrollere.
<Canvas of={komponentStories.Default} />
<Controls of={komponentStories.Default} />

// Hvis det er delkomponenter, vis demoer for de også.
### Delkomponent

<Canvas of={delkomponentStories.Default} />

// Eksempler ved behov
## Eksempler

<Canvas of={komponentStories.Example} />

<Source code={`
import { KomponentNavn } from '@norges-domstoler/pakkenavn';
    // eksempel på bruk
`} />

// Retningslinjer for utviklere
## Retningslinjer

/*...*/
```

### Testfil

Det brukes Vitest og React Testing Library for testing. Skriv tester som sørger for riktig oppførsel.

Ha med også UU-relaterte tester, som å sjekke om interaktive elementer får tilgjengelig navn og instrukser.

Du kan kjøre testene i spesifikk fil:

```shell
pnpm --filter '@norges-domstoler/dds-components' test KomponentNavn.spec.tsx
```

### Index-fil

Eksportering av komponenten:

```JSX

// src/components/Button/index.ts
export * from './RadioButton';

// ../../../index.ts
export * from './components/Button';
```

### Helpers og utils

Gjenbrukbare ressurser som løser typiske problemstillinger.

- `helpers/`: delkomponenter (`<Paper>`, `<Input>` osv.)
- `styling/`: styling på tvers av komponenter, som fokusring (`focus.module.css`), fjerning av default styling og normalisering.
- `hooks/`: React hooks, dokumentert under [Hooks](https://zeroheight.com/987b33f71/p/389796).
- `test/`: mocks til testing av komponenter.
- `types/`: typings, bl.a. `type BaseComponentProps`
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
- `icons.stories.tsx`: katalog med ikoner

### Legge til ikon

#### Eksporter fra Figma

Få taket i svg-koden til ikonet i Figma DDS Foundations; hvis det ikke finnes skal det legges inn der først.

Det finnes flere måter å få taket i koden på. Du kan for eksempel bruke [SVG to JSX Figma plugin](https://www.figma.com/community/plugin/749818562498396194/SVG-to-JSX), eller bruke dev mode.

Du kan også lagre ikonet midlertidig. Eksporter ikonet ved å velge det, sette Export-typen til SVG under Design og trykke på "Export"-knappen.

#### I kode

Når du har svg-koden tilgjengelig, kopier **kun barna til `<svg>`** (`<path>`, `<rect>`, `<cicrle>` osv. **OBS!** Ikke ta med fill-attributtet, fargen skal ikke være hardkodet). For eksempel:

```HTML
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- kopier kun <path>! -->
    <!-- Ikke ta med fill! -->
    <path d="M6.70817 9.33333C8.80225 9.33333 10.4998 7.50516 10.4998 5.25H2.9165C2.9165 7.50516 4.61409 9.33333 6.70817 9.33333Z" />
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

Designansvarlig i team Elsa oppdaterer tokens i Figma; dette vil generere en PR via integrasjon med GitHub. Videre skal man dra branchen lokalt og bygge styling-variabler i CSS, SCSS og TS.

Generer stylingvariabler:

```Shell
pnpm generate:tokens
```

Genererte variabler ligger i `/build` organisert etter plattform.

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
