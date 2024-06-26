import { StorybookLink } from './StorybookLink';
import { StorybookLinkRow } from './StorybookLinkRow';

interface props {
  docsHref: string;
  figmaHref?: string;
  githubHref: string;
}

export const ComponentLinkRow = ({
  docsHref,
  figmaHref,
  githubHref,
}: props) => (
  <StorybookLinkRow style={{ marginBottom: '16px' }}>
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
