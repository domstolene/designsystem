import { Source as StorybookSource } from '@storybook/addon-docs';
import { ReactNode } from 'react';

type SourceProps = {
  children?: ReactNode;
  language?: string;
  code?: string;
};

export const Source = ({ children, code, language = 'tsx' }: SourceProps) => (
  <StorybookSource dark code={code} language={language}>
    {children}
  </StorybookSource>
);
