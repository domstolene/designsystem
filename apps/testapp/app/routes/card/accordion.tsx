import {
  Button,
  Card,
  CardAccordion,
  CardAccordionBody,
  CardAccordionHeader,
  Paragraph,
  VStack,
} from "@norges-domstoler/dds-components";
import { useState } from "react";

export default function Accordion() {
  const [bodyItemCount, setBodyItemCount] = useState(0);

  return (
    <VStack align="flex-start" gap="layout-x1">
      <Button
        onClick={() => setBodyItemCount((prev) => prev + 1)}
        label="Legg til barn"
      />
      <Card cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Åpne meg!</CardAccordionHeader>
          <CardAccordionBody>
            Her er litt tekst. Det er plass til mye tekst her.
            {Array.from({ length: bodyItemCount }, (_, i) => i).map((el) => (
              <Paragraph key={el}>test</Paragraph>
            ))}
          </CardAccordionBody>
        </CardAccordion>
      </Card>
    </VStack>
  );
}
