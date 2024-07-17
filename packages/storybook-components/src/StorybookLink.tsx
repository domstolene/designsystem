import {
  type CSSProperties,
  type ComponentProps,
  type ElementType,
  type ReactNode,
} from 'react';

import {
  FigmaSvg,
  GithubSvg,
  NpmSvg,
  SlackSvg,
  StorybookSvg,
  ZeroheightSvg,
} from './assets/logos';

type Size = 'small' | 'large';

const Link = (props: ComponentProps<'a'> & { size?: Size }) => {
  const { size, ...rest } = props;
  const style =
    size === 'large'
      ? {
          display: 'block',
          backgroundColor: 'var(--dds-color-surface-default)',
          border: '1px solid var(--dds-color-border-default)',
          textDecoration: 'none',
        }
      : undefined;
  return (
    <a
      {...rest}
      style={{
        color: 'var(--dds-color-text-default)',
        transition: '0.2s',
        ...style,
      }}
    />
  );
};
const linkInnerSmallStyle: CSSProperties = {
  flexDirection: 'row',
  gap: 'var(--dds-spacing-x0-5)',
  padding: 'var(--dds-spacing-x0-25)',
};

const linkInnerLargeStyle: CSSProperties = {
  flexDirection: 'column',
  gap: 'var(--dds-spacing-x0-75)',
  padding: 'var(--dds-spacing-x0-75)',
};

type LinkType =
  | 'npm'
  | 'zeroheight'
  | 'figma'
  | 'slack'
  | 'github'
  | 'storybook';

interface StorybookLinkProps {
  href: string;
  children?: ReactNode;
  text: string;
  linkType: LinkType;
  size?: Size;
  className?: string;
}

export const StorybookLink = ({
  text,
  href,
  linkType,
  size = 'large',
  className,
}: StorybookLinkProps) => {
  const iconSize = size === 'small' ? '1.25rem' : '50';

  const InnerAs: ElementType = size === 'small' ? 'span' : 'div';

  return (
    <Link
      href={href}
      target="_blank"
      className={className}
      size={size}
      style={{ width: size === 'large' ? '210px' : 'fit-content' }}
    >
      <InnerAs
        style={{
          display: 'flex',
          alignItems: 'center',
          ...(size === 'large' ? linkInnerLargeStyle : linkInnerSmallStyle),
        }}
      >
        {linkType === 'npm' && <NpmSvg size={iconSize} />}
        {linkType === 'zeroheight' && <ZeroheightSvg size={iconSize} />}
        {linkType === 'figma' && <FigmaSvg size={iconSize} />}
        {linkType === 'slack' && <SlackSvg size={iconSize} />}
        {linkType === 'github' && <GithubSvg size={iconSize} />}
        {linkType === 'storybook' && <StorybookSvg size={iconSize} />}
        <span>{text}</span>
      </InnerAs>
    </Link>
  );
};
