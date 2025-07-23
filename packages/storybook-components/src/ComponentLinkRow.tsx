import { type IconType } from './types';
import { iconMap } from './utils';

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
  <div
    className={`sb-component-link-row ${withBottomSpacing ? 'sb-component-link-row--bottom-spacing' : undefined}`}
  >
    <LinkItem text="Docs" href={docsHref} linkType="zeroheight" />
    {storybookHref && (
      <LinkItem text="Storybook" href={storybookHref} linkType="storybook" />
    )}
    {figmaHref && <LinkItem text="Figma" href={figmaHref} linkType="figma" />}
    <LinkItem text="Github" href={githubHref} linkType="github" />
  </div>
);

interface LinkItemProps {
  href: string;
  text: string;
  linkType: IconType;
}

const LinkItem = ({ text, href, linkType }: LinkItemProps) => {
  const Icon = iconMap[linkType];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="sb-component-link-row-link"
    >
      <Icon size="1.25rem" />
      <span>{text}</span>
    </a>
  );
};
