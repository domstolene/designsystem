import { ddsBaseTokens as tokens } from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { CallIcon } from '../Icon/icons';
import { Typography } from '../Typography';

import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListGroup,
  type DescriptionListProps,
  DescriptionListTerm,
} from '.';

export default {
  title: 'dds-components/DescriptionList',
  component: DescriptionList,
};

export const Overview = () => {
  return (
    <StoryTemplate
      display="grid"
      title="DescriptionList - overview"
      gap="30px"
      $columnsAmount={2}
    >
      <DescriptionList>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>

        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
      <DescriptionList appearance="small">
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>

        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>

      <DescriptionList>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>

      <DescriptionList appearance="small">
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>
  );
};

export const Default = (args: DescriptionListProps) => {
  return (
    <StoryTemplate title="DescriptionList - default">
      <DescriptionList {...args}>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>
  );
};

export const Group = (args: DescriptionListProps) => {
  return (
    <StoryTemplate title="DescriptionList - group" gap="0px">
      <div>
        <DescriptionList {...args}>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 1</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
            <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 2</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 2</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 3</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 3</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 4</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 4</DescriptionListDesc>
          </DescriptionListGroup>
        </DescriptionList>
      </div>
    </StoryTemplate>
  );
};

export const WithIcon = (args: DescriptionListProps) => {
  return (
    <StoryTemplate title="DescriptionList - with icon">
      <DescriptionList {...args}>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>
  );
};

export const RowDirectionExample = (args: DescriptionListProps) => {
  const margin = tokens.spacing.SizesDdsSpacingX1;
  return (
    <StoryTemplate title="DescriptionList - Flere kolonner">
      <div>
        <DescriptionList {...args} direction="row">
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 1</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 2</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 2</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 3</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 3</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 4</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 4</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 5</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 5</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 6</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 6</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 7</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 7</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 8</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 8</DescriptionListDesc>
          </DescriptionListGroup>
        </DescriptionList>
      </div>
    </StoryTemplate>
  );
};
