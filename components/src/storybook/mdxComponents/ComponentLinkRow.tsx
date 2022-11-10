import { StorybookLink, StorybookLinkRow } from '..';

type props = {
  docsHref: string;
  figmaHref?: string;
  githubHref: string;
};

export const ComponentLinkRow = ({
  docsHref,
  figmaHref,
  githubHref,
}: props) => (
  <StorybookLinkRow>
    <StorybookLink
      size="small"
      text="Docs"
      href={docsHref}
      linkType="zeroheight"
    />
    {figmaHref && (
      <StorybookLink
        size="small"
        text="Figma"
        href={figmaHref}
        linkType="figma"
      />
    )}
    <StorybookLink
      size="small"
      text="Github"
      href={githubHref}
      linkType="github"
    />
  </StorybookLinkRow>
);
