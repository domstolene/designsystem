---
'@norges-domstoler/dds-components': major
---

Endringer i `htmlProps` prop (som støttes i de fleste komponenter), se [detaljer i migreringsguide v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22):

- `style` prop flyttes ut av `htmlProps` til roten. I tillegg blir `className` og `id` ikke lengre støttet både på roten og i `htmlProps`.
- Fikser bug der alle HTML-attributter var støttet både under `htmlProps` og på roten. Alle HTML-attributter (med individuelle unntak spesifisert i dokumentasjonen for hver komponent) støttes nå kun under `htmlProps`. Denne endringen fører til mye strengere typings og krever at konsumentene sjekker om HTML-attributter settes riktig i alle komponenter som støtter `htmlProps`.
- `<Contrast>` defineres nå som layout primitive; den bruker `<Box>` under panseret og støtter samme props. Det betyr at den bruker nå `htmlProps` som andre komponenter, med props `style`, `className`, `id` og `as` på roten.
- `aria-label` prop er nå støttet på roten av `<Button>`.
