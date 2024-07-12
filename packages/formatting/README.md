# @norges-domstoler/dds-formatting

![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-formatting) [![License](https://img.shields.io/npm/l/@norges-domstoler/dds-formatting)](https://www.npmjs.com/package/@norges-domstoler/dds-formatting) ![Checks](https://github.com/domstolene/designsystem/actions/workflows/release.yml/badge.svg)

Tekstformatering til bruk i domstolenes tjenester.

Sjekk ut [Elsa - domstolenes designsystem](https://design.domstol.no/) og [ Elsa Storybook](https://domstolene.github.io/designsystem) for mer dokumentasjon og demoer.

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-formatting
```

## 🔨 Bruk

```js
import { formatFoedselsnummer } from '@norges-domstoler/dds-formatting';

const mittUformaterteFoedselsnummer = '12345678901';
const riktigFormatertFoedselsnummer = formatFoedselsnummer(
  mittUformaterteFoedselsnummer,
);
```
