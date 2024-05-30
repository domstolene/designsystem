import { type CSSProperties, type ComponentProps, type ReactNode } from 'react';

import {
  FigmaSvg,
  GithubSvg,
  NpmSvg,
  SlackSvg,
  ZeroheightSvg,
} from './assets/logos';

const Link = (props: ComponentProps<'a'>) => (
  <a
    {...props}
    style={{
      display: 'block',
      backgroundColor: 'var(--dds-color-surface-default)',
      border: '1px solid var(--dds-color-border-default)',
      color: 'var(--dds-color-text-default)',
      textDecoration: 'none',
      transition: '0.2s',
    }}
  />
);

const linkInnerSmallStyle: CSSProperties = {
  flexDirection: 'row',
  gap: 'var(--dds-spacing-x0-5)',
  padding: 'var(--dds-spacing-x0-5)',
};

const linkInnerLargeStyle: CSSProperties = {
  flexDirection: 'column',
  gap: 'var(--dds-spacing-x0-75)',
  padding: 'var(--dds-spacing-x0-75)',
};

type LinkType = 'npm' | 'zeroheight' | 'figma' | 'slack' | 'github';

type Size = 'small' | 'large';

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
  const iconSize = size === 'small' ? '1rem' : '50';

  return (
    <Link
      href={href}
      target="_blank"
      className={className}
      style={{ width: size === 'large' ? '210px' : 'fit-content' }}
    >
      <div
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
        <span>{text}</span>
      </div>
    </Link>
  );
};
