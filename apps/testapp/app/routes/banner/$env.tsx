import {
  Heading,
  Link,
  Paragraph,
  VStack,
} from "@norges-domstoler/dds-components";
import {
  type Environment,
  environments,
  EnvironmentBannerProvider,
} from "@norges-domstoler/development-utils";
import { useParams } from "@remix-run/react";

const isEnvironment = (env: string): env is Environment => {
  return environments.includes(env as Environment);
};

const environmentLinks = (
  <ul>
    {environments.map((env) => (
      <li key={env}>
        <Link href={`/banner/${env}`}>{env}</Link>
      </li>
    ))}
  </ul>
);

export default function Banner() {
  const params = useParams();
  const uppercaseEnvName = params.env?.toUpperCase();

  if (uppercaseEnvName === undefined || !isEnvironment(uppercaseEnvName)) {
    return (
      <VStack align="flex-start" gap="layout-x1">
        <Heading level={1}>Ukjent miljø</Heading>
        <Paragraph>{uppercaseEnvName} er ikke et støttet miljø 🥴</Paragraph>
        {environmentLinks}
      </VStack>
    );
  }

  return (
    <EnvironmentBannerProvider
      environment={uppercaseEnvName}
      bannerPosition="fixed"
    >
      <VStack align="stretch">
        <Heading level={1}>{uppercaseEnvName}</Heading>
        {environmentLinks}

        <div style={{ maxWidth: "60ch" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies vitae leo in pellentesque. Phasellus aliquam cursus
            vestibulum. Sed scelerisque mi commodo nulla ultrices, ut molestie
            purus maximus. Nulla in pulvinar diam. Proin hendrerit risus vel
            sapien venenatis, sit amet euismod orci dapibus. Cras velit ante,
            blandit non commodo nec, pretium eget velit. Quisque porta, ante nec
            fermentum malesuada, sem enim vehicula leo, eu porttitor ex mi eu
            magna. In hac habitasse platea dictumst. Aliquam mollis nisi lorem,
            ac dictum ante efficitur id.
          </p>
        </div>
      </VStack>
    </EnvironmentBannerProvider>
  );
}
