# Elsa testapplikasjon

Denne applikasjonen er tenkt til å brukes som en sandboks for å teste ut endringer i designsystemets-komponenter og -tokens under utvikling og testing.

Applikasjonen bruker [relative-deps](https://www.npmjs.com/package/relative-deps) for å installere designsystem-pakkene fra ditt lokale utviklingsmiljø.
`relative-deps` vil bygge og installere [@norges-domstoler/dds-components](../components/) og [@norges-domstoler/dds-tokens](../tokens/) automatisk når du installerer avhengigheter eller starter opp utviklingsmiljøet.

## 🏃 Kom i gang

Installer avhengigheter

```bash
npm install
```

Start opp utviklingsmiljøet

```bash
npm start
```

## 🧪 Mer avansert bruk

### 🕵️ Analyser Webpack bundle

For å analysere hvordan Webpack vil bundle denne applikasjonen kan du kjøre følgende kommando:

```bash
npm run analyze
```

Her vil du få en grafisk visning på bundle størrelse, og hvor stor de forskjellige delene av applikasjonen er. Du kan f.eks. bruke dette til å se på hvor stor plass en komponent du utvikler vil ta, eller verifisere at en komponent du ikke bruker blir _treeshaket_ bort riktig.
