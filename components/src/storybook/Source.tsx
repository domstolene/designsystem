import { Source as StorybookSource } from '@storybook/addon-docs';
import { ReactNode } from 'react';

type SourceProps = {
  children?: ReactNode;
  code?: string;
};

export const Source = ({ children, code }: SourceProps) => (
  <StorybookSource dark code={code} language="tsx">
    {children}
  </StorybookSource>
);
