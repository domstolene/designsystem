---
'@norges-domstoler/dds-components': major
---

- Oppdaterer alle komponenter til å bruke CSS modules istedenfor styled-components. Det vil gi oss bl.a. bedre performance, lettere styling override, og kompatibilitet med server components. Denne oppgraderingen betyr at det ikke brukes en CSS-in-JS-løsning lenger, og det kan påvirke hvordan komponentene oppleves hos konsumenter.

- `<Button>` støtter ikke `label`-prop lenger, da den er deprecated. Bruk `children` i stedet.

- `<Button>` ble redesignet og simplifisert, da det ikke trengs så mange varianter. Den støtter ikke `appearance`-prop lenger. Det støttes kun `purpose`-prop med følgende verdier: `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`. Hvordan koden skal oppdateres avhenger av kontekst; for eksempel, en gammel lukkeknapp brukte `<Button purpose="secondary" appearance="borderless">`, den byttes til `<Button purpose="tertiary">`.

- `<Typography>` støtter ikke `interactionProps`-prop lenger. Du kan overskrive styling for `:hover` og `:active` med egen CSS-kode i stedet.

- `<LocalMessage>` støtter ikke `purpose="confidential"` lenger, da den ikke ble brukt.

- `<Card>` endrer navn på `color`-prop til `appearance` for standardisering på tvers av komponenter. Endrer også navn på typen brukt av propen fra `CardColor` til `CardAppearance` Fjerner variantene `color="filledDark"` og `color="strokeDark"`, og begrenser til kun verdier `"filled"` og `"border"`. Dette for å fjerne lite brukte/unødvendige varianter.

- `<CardAccordionBody>` støtter ikke `paddingTop`-prop lenger. Bruk `padding`-prop eller egen CSS-kode i stedet.

- Byttet navn på ikoner: `Thumbdown`, `Thumbup`, `ThumbdownFilled`, `ThumbupFilled`, `HourglassBottom`, `HourglassTop`, `HourglassEmpty`, `HourglassDisabled`, `HourglassFull` til: `ThumbDownIcon`, `ThumbUpIcon`, `ThumbDownFilledIcon`, `ThumbUpFilledIcon`, `HourglassBottomIcon`, `HourglassTopIcon`, `HourglassEmptyIcon`, `HourglassDisabledIcon`, `HourglassFullIcon`. Dette slik at navngivning følger samme mønster som andre ikoner. For å migrere legg på 'Icon' på slutten av importert ikon.

- `<Tag>` støtter ikke `strong`-prop lenger. I stedet brukes `appearance`-prop for å standardisere propnavn på tvers av komponenter. Støttede verdier er `'default'` eller `'strong'`, for å standardisere navngivning av visuelt uttrykk.

- `<DescriptionList>` sin `appearance`-prop støtter ikke verdiene `'bold'` og `'small'` lenger. I stedet brukes `'default'` eller `'subtle'`, for å bedre beskrive utseende og standardisere navngivning av visuelt uttrykk.
