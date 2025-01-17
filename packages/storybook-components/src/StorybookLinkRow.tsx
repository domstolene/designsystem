import type { ComponentProps } from 'react';

import { StorybookLink } from './StorybookLink';

export const StorybookLinkRow = (
  props: ComponentProps<'div'> & { withBottomSpacing?: boolean },
) => (
  <div
    {...props}
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--dds-spacing-x0-5)',
      marginBottom: props.withBottomSpacing
        ? 'var(--dds-spacing-x2)'
        : undefined,
    }}
  />
);

interface props {
  docsHref: string;
  storybookHref?: string;
  figmaHref?: string;
  githubHref: string;
  withBottomSpacing?: boolean;
}

export const ComponentLinkRow = ({
  docsHref,
  figmaHref,
  githubHref,
  storybookHref,
  withBottomSpacing,
}: props) => (
  <StorybookLinkRow withBottomSpacing={withBottomSpacing}>
    <StorybookLink
      size="small"
      text="Docs"
      href={docsHref}
      linkType="zeroheight"
    />
    {storybookHref && (
      <StorybookLink
        size="small"
        text="Storybook"
        href={storybookHref}
        linkType="storybook"
      />
    )}
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
