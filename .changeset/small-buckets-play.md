---
'@norges-domstoler/dds-components': minor
---

Utbedrer oppførselen til `width` prop i input-komponenter; Hvis bredde settes kun på enkelte brekkpunkter vil resterende brekkpunkter få default bredde definert i komponenten. Før fikk utelatte brekkpunkter ingen definert bredde, og dermed utforutsigbar bredde. Kan potensielt føre til endringer i layout. Påvirker komponentene `<TextInput>`, `<Select>`, `<PhoneInput>`, `<ProgressBar>`, `<NativeSelect>`, `<TextArea>`, `<DatePicker>`, `<TimePicker>`.
