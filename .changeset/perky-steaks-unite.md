---
'@norges-domstoler/dds-components': patch
---

Standardiserer høyde på tvers av inputkomponenter og knapper ved å ta i bruk nye design tokens på formen `dds-size-height-<størrelse>`. Dette resulterer i minimale endringer i høyde og interne størrelser, men kan i verste fall knekke layout. Følgende komponenter er påvirket: `<TextInput>`, `<DatePicker>`, `<TimePicker>`, `<Select>`, `<NativeSelect>`, `<Search>`, `<Button>`, `<SplitButton>`, `<ToggleButton>`, `<ToggleBar>`.
