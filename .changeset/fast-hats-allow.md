---
'@norges-domstoler/dds-components': patch
---

Endrer default `width` i `<DatePicker>` og `<TimePicker>` til å være `fit-content`. Grunnet theming kan teksten bli bredere, og siden default `width` ble før satt i `px` ble spacing til høyre for lite. Med `fit-content` tar komponenten den plassen den trenger; siden bredden på dato- og tid-input er statisk, ingenting vil "hoppe". Ingen endringer i hvordan custom bredde settes.
