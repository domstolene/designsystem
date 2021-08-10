import {
  Typography as DDSTypography,
  Typography,
  TypographyProps
} from './Typography';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { LocalMessage } from '../LocalMessage';

export default {
  title: 'Design system/Typography/Link',
  component: DDSTypography,
  argTypes: {
    externalLink: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
    color: { control: { type: 'text' } }
  }
};

export const Overview = (args: TypographyProps) => {
  return storyHTMLTemplate(
    'Link - overview',
    <>
      <Typography {...args} typographyType="a" href="https://www.domstol.no">
        {' '}
        Link{' '}
      </Typography>
      <Typography
        {...args}
        typographyType="a"
        href="https://www.domstol.no"
        externalLink
      >
        {' '}
        Link{' '}
      </Typography>
      <Typography>
        Rettsmekling går ut på at partene selv finner en løsning på konflikten
        ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
        saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med
        en dom. Rettsmekling kan bare brukes i{' '}
        <Typography
          {...args}
          typographyType="a"
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
        >
          {' '}
          sivile saker{' '}
        </Typography>
        , ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres
        saken ved hovedforhandling (rettssak). Rettsmekling er regulert i{' '}
        <Typography
          {...args}
          typographyType="a"
          href="https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3"
          externalLink
        >
          {' '}
          tvisteloven §§ 8-3
        </Typography>
        . Litt mer tekst.
      </Typography>
      <LocalMessage>
        Dette er tekst med{' '}
        <Typography
          {...args}
          typographyType="a"
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
        >
          lenke
        </Typography>
        .
      </LocalMessage>
      <LocalMessage purpose="danger">
        Dette er tekst med{' '}
        <Typography
          {...args}
          typographyType="a"
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
        >
          lenke
        </Typography>
        .
      </LocalMessage>
      <LocalMessage purpose="success">
        Dette er tekst med{' '}
        <Typography
          {...args}
          typographyType="a"
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
        >
          lenke
        </Typography>
        .
      </LocalMessage>
      <LocalMessage purpose="tips">
        Dette er tekst med{' '}
        <Typography
          {...args}
          typographyType="a"
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
        >
          lenke
        </Typography>
        .
      </LocalMessage>
    </>
  );
};

export const Default = (args: TypographyProps) => {
  return storyHTMLTemplate(
    'Link - default',
    <Typography
      {...args}
      typographyType="a"
      href="?path=/story/design-system-typography-link--default"
    >
      {' '}
      Link{' '}
    </Typography>
  );
};
