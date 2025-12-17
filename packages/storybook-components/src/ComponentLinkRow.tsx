import { type IconType } from './types';
import { iconMap } from './utils';

const sbURLBase = 'https://domstolene.github.io/designsystem/?path=/story/';
const gbURLBase =
  'https://github.com/domstolene/designsystem/tree/main/packages/dds-components/src/';
const zhURLBase = 'https://design.domstol.no/987b33f71/p/';
const figmaURLBase =
  'https://www.figma.com/design/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?';

type StorybookFolder =
  | 'components'
  | 'layout-primitives'
  | 'hooks'
  | 'patterns';
type CodeFolder = 'components' | 'layout-primitives' | 'hooks';

interface props {
  /**Unik id til relevant side i dokumentasjonen, legges bak base URL. */
  docsHref: string;
  /**Overordnet mappe og komponentnavn i Storybook URL; kombineres med base URL. */
  storybookHref?: {
    folder?: StorybookFolder;
    comp: string;
  };
  /**Unik node-id til relevant Figma-frame, legges bak base URL. */
  figmaHref?: string;
  /**Overordnet mappe og komponentmappe i Github URL; kombineres med base URL. */
  githubHref?: {
    folder?: CodeFolder;
    comp: string;
  };
}

export const ComponentLinkRow = ({
  docsHref,
  figmaHref,
  githubHref,
  storybookHref,
}: props) => {
  const storybookURL = (sb?: {
    folder?: StorybookFolder;
    comp: string;
  }): string => {
    if (!sb) return '';

    const { folder, comp } = sb;
    if (folder === 'patterns') {
      return `${sbURLBase}patterns-${comp}`;
    }
    if (folder) {
      return `${sbURLBase}dds-components-${folder}-${comp}--preview`;
    }
    return `${sbURLBase}${comp}--preview`;
  };

  const githubURL = (gh?: { folder?: CodeFolder; comp: string }): string => {
    if (!gh) return '';
    const prefix = gh.folder ? `${gh.folder}/` : '';
    return `${gbURLBase}${prefix}${gh.comp}`;
  };

  return (
    <div className="sb-component-link-row">
      <LinkItem
        text="Docs"
        href={`${zhURLBase}${docsHref}`}
        linkType="zeroheight"
      />
      {storybookHref && (
        <LinkItem
          text="Storybook"
          href={storybookURL(storybookHref)}
          linkType="storybook"
        />
      )}
      {figmaHref && (
        <LinkItem
          text="Figma"
          href={`${figmaURLBase}${figmaHref}`}
          linkType="figma"
        />
      )}
      {githubHref && (
        <LinkItem
          text="Github"
          href={githubURL(githubHref)}
          linkType="github"
        />
      )}
    </div>
  );
};

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
