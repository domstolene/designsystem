import { type Meta, type StoryObj } from '@storybook/react-vite';

import { LocalMessage } from '../components/LocalMessage';
import { type DdsTheme } from '../components/ThemeProvider';
import { Paragraph } from '../components/Typography';
import { createTexts, useTranslation } from '../i18n';
import { type Language } from '../i18n/translation.types';

import { DdsProvider } from '.';

export default {
  title: 'dds-components/DdsProvider',
  component: DdsProvider,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof DdsProvider>;

type Story = StoryObj<typeof DdsProvider>;

interface TCProps {
  lang?: Language;
  theme?: DdsTheme;
}

function TranslationComponent(props: TCProps) {
  const { t } = useTranslation();

  const texts = createTexts({
    theme: {
      no: 'Tema',
      nb: 'Tema',
      nn: 'Tema',
      en: 'Theme',
    },

    lang: {
      no: 'Språk',
      nb: 'Språk',
      nn: 'Språk',
      en: 'Language',
    },
    message: {
      en: 'The theme here depends on controls below, not the toggle bar in top right corner.',
      nb: 'Temaet her er avhengig av kontrollere nedenfor, ikke toggle bar oppe til høyre.',
      nn: 'Temaet her er avhengig av kontrollane nedanfor, ikkje vekslefeltet oppe til høgre.',
      no: 'Temaet her er avhengig av kontrollere nedenfor, ikke toggle bar oppe til høyre.',
    },
  });
  return (
    <>
      <Paragraph>
        {t(texts.theme)}: {props.theme}
      </Paragraph>
      <Paragraph>
        {t(texts.lang)}: {props.lang}
      </Paragraph>
      <LocalMessage>{t(texts.message)}</LocalMessage>
    </>
  );
}

export const Preview: Story = {
  args: {
    theme: 'public',
    language: 'en',
  },
  render: args => {
    return (
      <DdsProvider {...args}>
        <TranslationComponent theme={args.theme} lang={args.language} />
      </DdsProvider>
    );
  },
};
