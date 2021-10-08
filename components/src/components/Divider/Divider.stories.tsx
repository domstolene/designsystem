import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Divider as DDSDivider, DividerProps } from '.';
import { Typography } from '../Typography';

export default {
  title: 'design system/Divider',
  component: DDSDivider,
  argTypes: {}
};

export const Overview = (args: DividerProps) => {
  return (
    <StoryTemplate title="Divider - overview" gap="40px">
      <div>
        <DDSDivider {...args} />
        <DDSDivider {...args} color="primaryLighter" />
      </div>
    </StoryTemplate>
  );
};

export const Default = (args: DividerProps) => {
  return (
    <StoryTemplate title="Divider - default" gap="40px">
      <div>
        <DDSDivider {...args} />
      </div>
    </StoryTemplate>
  );
};

export const Example = (args: DividerProps) => {
  return (
    <StoryTemplate title="Divider - example">
      <div>
        <Typography withMargins>
          Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått
          en innkalling (kalles stevning) til saken fordi partene eller retten
          mener du kjenner til noe som kan være viktig for retten å vite. Du har
          plikt til å møte opp i tråd med innkallingen og forklare deg for
          retten.
        </Typography>
        <DDSDivider {...args} />
        <Typography withMargins>
          En rettssak avgjøres med bakgrunn i det som er kommet fram i
          rettssalen. Derfor må vitner forklare seg for retten slik at dommerne
          hører vitneforklaringen. Det gjelder selv om man tidligere ha forklart
          seg for politiet eller partenes advokat. En vitneforklaring kan
          avgjøre utfallet av en sak, derfor har vitner plikt til å snakke sant.
        </Typography>
      </div>
    </StoryTemplate>
  );
};
