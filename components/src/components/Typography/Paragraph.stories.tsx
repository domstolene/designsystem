import {
  Typography as DDSTypography,
  Typography,
  TypographyProps
} from './Typography';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { LocalMessage } from '../LocalMessage';

export default {
  title: 'Design system/Typography/Paragraph',
  component: DDSTypography,
  argTypes: {
    color: { control: { type: 'text' } }
  },
  parameters: {
    controls: {
      exclude: ['externalLink', 'as']
    }
  }
};

export const Overview = (args: TypographyProps) => {
  return storyHTMLTemplate(
    'Paragraph - overview',
    <>
      <Typography {...args}>
        Jordskifterettene tilbyr hvert år studenter sommerjobb i
        jordskifterettene. Studenter ved NMBU og HVL prioriteres til sommerjobb
        som lønnes med sentrale midler. Tilbud om sommerjobb kunngjøres også på
        studiestedet.
      </Typography>
      <Typography {...args}>
        I tillegg vil noen jordskifteretter kunne tilby sommerjobb av egne
        driftsmidler. Studenter som ønsker sommerjobb i jordskifterettene sender
        søknad direkte til den aktuelle jordskifteretten.
      </Typography>
      <LocalMessage>
        <Typography {...args}>
          Jordskifterettene tilbyr hvert år studenter sommerjobb i
          jordskifterettene. Studenter ved NMBU og HVL prioriteres til
          sommerjobb som lønnes med sentrale midler. Tilbud om sommerjobb
          kunngjøres også på studiestedet.
        </Typography>
        <Typography {...args}>
          I tillegg vil noen jordskifteretter kunne tilby sommerjobb av egne
          driftsmidler. Studenter som ønsker sommerjobb i jordskifterettene
          sender søknad direkte til den aktuelle jordskifteretten.
        </Typography>
      </LocalMessage>
    </>
  );
};

export const Default = (args: TypographyProps) => {
  return storyHTMLTemplate(
    'Paragraph - default',
    <>
      <Typography {...args}>
        Jordskifterettene tilbyr hvert år studenter sommerjobb i
        jordskifterettene. Studenter ved NMBU og HVL prioriteres til sommerjobb
        som lønnes med sentrale midler. Tilbud om sommerjobb kunngjøres også på
        studiestedet.
      </Typography>
      <Typography {...args}>
        I tillegg vil noen jordskifteretter kunne tilby sommerjobb av egne
        driftsmidler. Studenter som ønsker sommerjobb i jordskifterettene sender
        søknad direkte til den aktuelle jordskifteretten.
      </Typography>
    </>
  );
};
