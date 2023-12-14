import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Divider, DividerProps } from '.';
import { Typography } from '../Typography';

export default {
  title: 'dds-components/Divider',
  component: Divider,
  argTypes: {},
};

export const Overview = (args: DividerProps) => {
  return (
    <StoryTemplate title="Divider - overview" display="block">
      <div>
        <Divider {...args} />
        <Divider {...args} color="primaryLighter" />
      </div>
    </StoryTemplate>
  );
};

export const Default = (args: DividerProps) => {
  return (
    <StoryTemplate title="Divider - default" display="block">
      <div>
        <Divider {...args} />
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
        <Divider {...args} />
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
