import {
  Card,
  CardAccordion,
  CardAccordionBody,
  CardAccordionHeader,
  Paragraph
} from '@norges-domstoler/dds-components';

export default function Accordion() {
  return (
    <Card cardType="expandable">
      <CardAccordion>
        <CardAccordionHeader>Åpne meg!</CardAccordionHeader>
        <CardAccordionBody>
          Her er litt tekst. Det er plass til mye tekst her.
          <Paragraph>
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
            Her er litt tekst. Det er plass til mye tekst her.
          </Paragraph>
        </CardAccordionBody>
      </CardAccordion>
    </Card>
  )
}