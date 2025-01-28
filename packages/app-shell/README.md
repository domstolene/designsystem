# @norges-domstoler/app-shell

![Static badge](https://img.shields.io/badge/status-deprecated-red) [![Version](https://img.shields.io/npm/v/@norges-domstoler/app-shell)](https://www.npmjs.com/package/@norges-domstoler/app-shell) ![License](https://img.shields.io/npm/l/@norges-domstoler/app-shell)

AppShell for bruk i utvikling av applikasjoner til Norges Domstoler. Dette er en standard wrapper for en Lovisa-applikasjon.

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/app-shell
```

## 🔨 Bruk

```tsx
import { Link } from 'react-router-dom';
import {
  AppShell,
  FolderIcon,
  ChecklistIcon,
} from '@norges-domstoler/dds-components';

<AppShell
  version="1.0.0"
  navigation={{
    internal: [
      {
        as: Link,
        to: '/saker',
        icon: FolderIcon,
        label: 'Saker',
        active: true,
      },
      { as: Link, to: '/oppgaver', icon: ChecklistIcon, label: 'Oppgaver' },
    ],
    external: [{ href: '...', external: true, label: 'Registeroppslag' }],
  }}
>
  Applikasjonskoden din her...
</AppShell>;
```
