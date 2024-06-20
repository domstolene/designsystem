---
'@norges-domstoler/dds-components': minor
---

Endringer i oppførsel og utseende i input-komponenter ved `readOnly`. Tidligere var `readOnly` komponenter som ikke støttet nativ `readonly` satt til `disabled`. I tillegg gjorde styling ved `readOnly` at feltet så ut som statisk tekst. Dette stemmer ikke med hvordan nativ `readonly` input skal oppføre seg og se ut, spesielt da deaktiverte felt ikke får sendt sin verdi sammen med skjema. Komponentene `<TextInput>` og `<TextArea>` får ny styling ved `readOnly`; komponentene `<Select>`, `<NativeSelect>`, `<RadioButton>`, `<Checkbox>`, `<DatePicker>` og `<TimePicker>` får ny styling OG ny oppørsel. De blir ikke satt til `disabled`, istedet er det umulig for brukeren å endre verdien mens de kan fortsatt få fokus.
