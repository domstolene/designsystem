# Elsa testapplikasjon

Denne applikasjonen er tenkt til å brukes som en sandboks for å teste ut endringer i designsystemets-komponenter og -tokens under utvikling og testing.

## 🏃 Kom i gang

Prosjektet er satt opp som et npm workspace monorepo, så følgende kommandoer bør kjøres i roten av prosjektet.

Installer avhengigheter

```bash
npm install
```

Start opp utviklingsmiljøet

```bash
npm run dev
```

## 🧪 Mer avansert bruk

### 🕵️ Analyser Webpack bundle

For å analysere hvordan Webpack vil bundle denne applikasjonen kan du kjøre følgende kommando:

```bash
npm run -w testapp analyze
```

Her vil du få en grafisk visning på bundle størrelse, og hvor stor de forskjellige delene av applikasjonen er. Du kan f.eks. bruke dette til å se på hvor stor plass en komponent du utvikler vil ta, eller verifisere at en komponent du ikke bruker blir _treeshaket_ bort riktig.
