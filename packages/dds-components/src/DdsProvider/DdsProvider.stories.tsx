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
      se: 'Temá',
    },

    lang: {
      no: 'Språk',
      nb: 'Språk',
      nn: 'Språk',
      en: 'Language',
      se: 'Giella',
    },
    message: {
      no: 'Tema og språk styres av kontrollene under, ikke av bryteren øverst til høyre.',
      nb: 'Tema og språk styres av kontrollene under, ikke av bryteren øverst til høyre.',
      nn: 'Tema og språk blir styrt av kontrollane under, ikkje av brytaren øvst til høgre.',
      en: 'The theme and language here depend on controls below, not the toggle bar in top right corner.',
      se: 'Fáddá ja giela stivret vuolábealde, ii fal bajábeal olgešbealde.',
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
