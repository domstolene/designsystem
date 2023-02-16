import {
  Card,
  HStack,
  VStack,
  Heading,
  Paragraph,
} from "@norges-domstoler/dds-components";

export default function IdPortenCard() {
  return (
    <Card
      cardType="navigation"
      color="strokeLight"
      href="https://idporten.difi.no/"
      htmlProps={{ style: { padding: "1.5rem", width: "max-content" } }}
    >
      <div>
        <HStack gap="layout-x1.5" align="center">
          <img
            className="logo"
            alt=""
            src="https://docs.digdir.no/assets/Merket_hovedlogoRGB.png"
            style={{ height: "60px" }}
          />
          <VStack align="flex-start" gap="local-x0.75">
            <Heading level={4}>ID-porten</Heading>
            <Paragraph>BankID, Buypass ID, Commfides</Paragraph>
          </VStack>
        </HStack>
      </div>
    </Card>
  );
}
