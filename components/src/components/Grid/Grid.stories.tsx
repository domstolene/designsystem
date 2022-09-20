import { Grid, GridChild } from '.';
import { StoryTemplate } from '../../storybook';
import { TextInput } from '../TextInput';
import { Heading } from '../Typography';

export default {
  title: 'Design system/Grid',
  component: Grid,
};

export const Default = () => (
  <StoryTemplate title="Grid- default" display="block">
    <Grid as="div">
      <GridChild>
        <Heading level={2} withMargins>
          Opplysninger
        </Heading>
      </GridChild>
      <GridChild>
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="firstHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="secondHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild></GridChild>
    </Grid>
  </StoryTemplate>
);

export const CustomColumns = () => (
  <StoryTemplate title="Grid- custom columns" display="block">
    <Grid as="div">
      <GridChild>
        <Heading level={2} withMargins>
          Opplysninger
        </Heading>
      </GridChild>
      <GridChild columnsOccupiedCustom={{ sm: '1/3' }}>
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="firstHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="secondHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild></GridChild>
    </Grid>
  </StoryTemplate>
);
