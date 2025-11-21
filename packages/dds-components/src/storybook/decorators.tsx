import { type Decorator } from '@storybook/react-vite';
import { type ReactNode, useEffect, useRef, useState } from 'react';

import { HStack, VStack } from '../components/layout';
import { getBreakpointFromScreenWidth } from '../components/layout/common/utils';
import { ThemeContext } from '../components/ThemeProvider';
import { Paragraph } from '../components/Typography';
import { useWindowResize } from '../hooks';
import { LanguageContext } from '../i18n';

export const ddsProviderDecorator: Decorator = Story => {
  const themeRef = useRef<HTMLDivElement>(null);

  const [element, setElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    setElement(themeRef.current);
  }, []);

  return (
    <LanguageContext value={{ language: 'nb' }}>
      <div ref={themeRef}>
        <ThemeContext value={{ theme: 'core-light', el: element }}>
          <Story />
        </ThemeContext>
      </div>
    </LanguageContext>
  );
};

export const windowWidthDecorator = (Story: ReactNode, intro?: string) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useWindowResize(() => setWidth(window.innerWidth));

  const bp = getBreakpointFromScreenWidth(width);
  const getIcon = () => {
    switch (true) {
      case bp === 'xs':
        return 'M7.75 5.778c0-.614.455-1.028.917-1.028h6.666c.462 0 .917.414.917 1.028v12.444c0 .614-.455 1.028-.917 1.028H8.667c-.462 0-.917-.414-.917-1.028zm.917-2.528c-1.38 0-2.417 1.178-2.417 2.528v12.444c0 1.35 1.037 2.528 2.417 2.528h6.666c1.38 0 2.417-1.178 2.417-2.528V5.778c0-1.35-1.037-2.528-2.417-2.528zM12 16.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z';
      case bp === 'sm':
        return 'M6.75 5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25zM8 2.25A2.75 2.75 0 0 0 5.25 5v14A2.75 2.75 0 0 0 8 21.75h8A2.75 2.75 0 0 0 18.75 19V5A2.75 2.75 0 0 0 16 2.25zm3.5 2.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z';
      case bp === 'md':
        return 'M4.75 5c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25zM6 2.25A2.75 2.75 0 0 0 3.25 5v14A2.75 2.75 0 0 0 6 21.75h12A2.75 2.75 0 0 0 20.75 19V5A2.75 2.75 0 0 0 18 2.25zm4.5 2.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z';
      case bp === 'lg':
        return 'M5.5 4.25A1.75 1.75 0 0 0 3.75 6v9c0 .966.784 1.75 1.75 1.75h13A1.75 1.75 0 0 0 20.25 15V6a1.75 1.75 0 0 0-1.75-1.75zM5.25 6a.25.25 0 0 1 .25-.25h13a.25.25 0 0 1 .25.25v9a.25.25 0 0 1-.25.25h-13a.25.25 0 0 1-.25-.25zM3 18.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z';
      case bp === 'xl':
        return 'M2.25 4.5c0-.69.56-1.25 1.25-1.25h17c.69 0 1.25.56 1.25 1.25v11c0 .69-.56 1.25-1.25 1.25h-7.75v2.5H19a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h5.25v-2.5H3.5c-.69 0-1.25-.56-1.25-1.25zm1.5.25v10.5h16.5V4.75z';
    }
  };

  return (
    <VStack gap="x1">
      <HStack>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d={getIcon()}
            clip-rule="evenodd"
          ></path>
        </svg>
        {bp}{' '}
        <span
          style={{
            color: 'var(--dds-color-text-subtle)',
            marginInlineStart: 'var(--dds-spacing-x1)',
          }}
        >
          {' '}
          {width}px
        </span>
      </HStack>
      {intro && <Paragraph typographyType="bodySmall">{intro}</Paragraph>}
      {Story}
    </VStack>
  );
};
