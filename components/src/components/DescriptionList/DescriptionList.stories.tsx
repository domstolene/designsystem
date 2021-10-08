import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListProps
} from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { Typography } from '../Typography';

export default {
  title: 'Design system/DescriptionList',
  component: DescriptionList
};

export const Overview = (args: DescriptionListProps) => {
  return (
    <StoryTemplate
      display="grid"
      title="DescriptionList - overview"
      gap="40px"
      columnsAmount={2}
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
        <DescriptionListDesc Icon={PhoneOutlinedIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc Icon={PhoneOutlinedIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>

      <DescriptionList appearance="small">
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc Icon={PhoneOutlinedIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc Icon={PhoneOutlinedIcon}>
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
    <StoryTemplate title="DescriptionList - group">
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
        <DescriptionListDesc Icon={PhoneOutlinedIcon}>
          Beskrivelse
        </DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>
  );
};

export const ColumnExample = (args: DescriptionListProps) => {
  return (
    <StoryTemplate title="DescriptionList - column example">
      <div>
        <DescriptionList
          {...args}
          style={{
            height: '275px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
          }}
        >
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
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 5</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 5</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 6</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 6</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 7</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 7</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 8</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 8</DescriptionListDesc>
          </DescriptionListGroup>
        </DescriptionList>
      </div>
    </StoryTemplate>
  );
};
