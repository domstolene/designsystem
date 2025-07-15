import { Source as StorybookSource } from '@storybook/addon-docs/blocks';

type SupportedLanguage =
  | 'jsextra'
  | 'jsx'
  | 'json'
  | 'yml'
  | 'md'
  | 'bash'
  | 'css'
  | 'html'
  | 'tsx'
  | 'typescript'
  | 'graphql';

interface SourceProps {
  language?: SupportedLanguage;
  code?: string;
}

export const Source = ({ code, language = 'tsx' }: SourceProps) => (
  <StorybookSource dark code={code} language={language} />
);
