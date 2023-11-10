import { Source as StorybookSource } from '@storybook/addon-docs';

interface SourceProps {
  language?: string;
  code?: string;
}

export const Source = ({ code, language = 'tsx' }: SourceProps) => (
  <StorybookSource dark code={code} language={language} />
);
