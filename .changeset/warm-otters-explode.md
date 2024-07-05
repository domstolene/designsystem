---
'@norges-domstoler/dds-components': minor
---

Legger til støtte for å bygge `<OverflowMenu>` med subkomponenter (lenke, knapp, divider, header) som barn. Dette gjør `<OverflowMenu>` sitt bruksområde mer generelt.

Før:

```jsx
<OverflowMenu
  userProps={{
    name: 'Agata',
    href: '/min-profil',
  }}
  navItems={[
    {
      title: 'Saker',
      href: '/saker',
    }
    {
      title: 'Oppgaver',
      href: '/oppgaver',
    }
  ]}
/>
```

Nå:

```jsx
<OverflowMenu>
  <nav>
    <OverflowMenuList>
      <OverflowMenuLink href="/min-profil" icon={PersonIcon}>
        Agata
      </OverflowMenuLink>
      <OverflowMenuLink href="/saker">Saker</OverflowMenuLink>
      <OverflowMenuLink href="/oppgaver">Oppgaver</OverflowMenuLink>
    </OverflowMenuList>
  </nav>
</OverflowMenu>
```
