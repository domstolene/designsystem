---
'@norges-domstoler/dds-components': minor
---

Legger til util-funksjonene `nativeDateToCalendarDate`, `nativeDateToTime` og `calendarDateToNativeDate` for å løse problemer folk hadde med transformeringsfunksjonene som kom ut sammen med den nye `DatePicker`-en. De andre funksjonene ga `DateValue`, som ikke er støttet av `DatePicker`. Den krever `CalendarDate` som `value`.
