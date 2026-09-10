# Lokal linking av pakker fra @norges-domstoler

Denne guiden beskriver hvordan man linker en lokal versjon av en pakke fra `@norges-domstoler` inn i eget prosjekt for utvikling og testing.

## Forutsetninger

Eksempel på lokal mappestruktur:

```text
dev/
├── designsystem
└── <eget_prosjekt>
```

## 1. Link designsystem-pakken

Gå til roten i eget prosjekt:

```bash
cd ~/dev/<eget_prosjekt>
```

Link den lokale pakken som du ønsker:

```bash
pnpm link ../designsystem/packages/<linket_pakke>
```

Verifiser at linken er opprettet:

```bash
pnpm list @norges-domstoler/<linket_pakke>
```

Forventet output:

```text
Legend: production dependency, optional only, dev only

<eget_prosjekt>@<versjon> <sti_til_prosjekt> (PRIVATE)

dependencies:
└── @norges-domstoler/<linket_pakke>@link:../designsystem/packages/<linket_pakke>

1 package
```

Ved linking kan prosjektets pnpm-workspace.yaml bli oppdatert med en lokal referanse til den linkede pakken:

```yaml
'@norges-domstoler/<linket_pakke>': link:../designsystem/packages/<linket_pakke>
```

Kontroller at symlinken peker til riktig katalog:

```bash
realpath node_modules/@norges-domstoler/<linket_pakke>
```

Forventet output:

```text
/<sti_på_lokal_maskin>/designsystem/packages/<linket_pakke>
```

---

## 2. Oppdater Vite-konfigurasjon

Når en pakke linkes fra et annet repo, må Vite få tilgang til filer utenfor prosjektmappen. Dette kan for eksempel være .woff-filer fra designsystemet. Man vil få 403 Forbidden om denne konfigurasjonen ikke legges inn.

### Legg til `server.fs.allow`

```ts
server: {
    port: 3000,
    fs: {
        allow: ['..'],
    },
},
```

Dette gjør at Vite kan lese filer fra søskenrepoer under samme parent-katalog (`~/dev`). Denne konfigurasjonen er generell og kan committes til `main`.

---

## 3. Unngå duplisert React-instans

Ved linking kan både `<eget_prosjekt>` og den linkede pakken laste inn hver sin React-instans. Dette kan føre til feil med hooks og context.

Legg til følgende (forutsetter at du har importert `path`, f.eks. `import path from 'node:path'`):

```ts
resolve: {
    dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
    alias: {
        react: path.resolve(import.meta.dirname, 'node_modules/react'),
        'react-dom': path.resolve(import.meta.dirname, 'node_modules/react-dom'),
    },
},
```

Denne konfigurasjonen er generell og kan committes til `main`.

---

## 4. Ekskluder `<linket_pakke>` fra Vite-optimalisering

For å unngå at Vite pre-bundler den linkede pakken:

```ts
optimizeDeps: {
    exclude: ['@norges-domstoler/<linket_pakke>'],
},
```

Dette forhindrer at flere instanser av designsystemet lastes inn.

NB! Denne innstillingen er vanligvis kun nødvendig ved lokal linking. Dersom prosjektet fungerer som normalt uten den etter unlinking, kan den fjernes.

---

## 5. Start applikasjonen i eget prosjekt

Hvis Vite-cachen allerede er bygget med gamle innstillinger kan den slettes:

```bash
rm -rf node_modules/.vite
```

Start deretter applikasjonen:

```bash
pnpm start
```

---

## 6. Utvikling av `<linket_pakke>`

Etter endringer i `<linket_pakke>` kan pakken måtte bygges på nytt:

```bash
cd ~/dev/designsystem
pnpm --filter @norges-domstoler/<linket_pakke> build
```

Deretter refresh eller restart eget prosjekt ved behov.

---

## Fjerne linken

Når lokal testing er ferdig:

```bash
pnpm unlink @norges-domstoler/<linket_pakke>
pnpm install
```

Alternativt:

```bash
rm -rf node_modules
pnpm install
```

Da brukes versjonen som er definert i `package.json` igjen.

---
