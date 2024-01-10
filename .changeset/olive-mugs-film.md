---
'@norges-domstoler/dds-components': major
'@norges-domstoler/dds-design-tokens': major
---

Vi har slått sammen local og layout spacing tokens til å være en og samme greie. Derfor trenger du ikke lenger å ta stilling til om noe er en layout eller en local spacing. Alle de samme verdiene som var i local og layout spacing er fortsatt tilgjengelig, men vi har droppet navnet local og layout fra begge.

Her er noen før og etter eksempler på hvordan de nye tokenene ser ut:

**Før:**

```css
.example {
  padding: var(--sizes-dds-spacing-local-x-0-75);
  gap: var(--sizes-dds-spacing-layout-x-3);
}
```

```scss
.example {
  padding: $sizes-dds-spacing-local-x-0-75;
  gap: $sizes-dds-spacing-layout-x-3;
}
```

```js
<div
  style={{
    padding: SizesDdsSpacingLocalX075,
    gap: SizesDdsSpacingLayoutX3,
  }}
>
  ...
</div>
```

**Nå:**

```css
.example {
  padding: var(--sizes-dds-spacing-x-0-75);
  gap: var(--sizes-dds-spacing-x-3);
}
```

```scss
.example {
  padding: $sizes-dds-spacing-x-0-75;
  gap: $sizes-dds-spacing-x-3;
}
```

```js
<div
  style={{
    padding: SizesDdsSpacingX075,
    gap: SizesDdsSpacingX3,
  }}
>
  ...
</div>
```

Dette vil nok treffe mange ganske bredt, men vi tror ikke migreringsjobben skal være så omfattende. Siden vi bare har fjernet local og layout skal det være ganske greit å bare søke etter alle forekomster av local og layout og fjerne de. Om du trenger hjelp med migreringen så er det bare å ta kontakt!
