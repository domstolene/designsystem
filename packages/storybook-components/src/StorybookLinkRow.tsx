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
      gap: 'var(--dds-spacing-x0-75)',
      marginBottom: props.withBottomSpacing
        ? 'var(--dds-spacing-x2)'
        : undefined,
    }}
  />
);

interface props {
  docsHref: string;
  figmaHref?: string;
  githubHref: string;
  withBottomSpacing?: boolean;
}

export const ComponentLinkRow = ({
  docsHref,
  figmaHref,
  githubHref,
  withBottomSpacing,
}: props) => (
  <StorybookLinkRow withBottomSpacing={withBottomSpacing}>
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
