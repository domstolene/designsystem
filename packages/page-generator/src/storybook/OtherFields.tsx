import {
  DescriptionListGroupField,
  PageGeneratorField,
  PageGeneratorRow,
  PageGeneratorSupportedFields,
} from '../types';

// type FieldWithChildren =
//   | ListField

// type FieldWithoutChildren =
//   | ListItemField

const getHeading = (innerHTML: string): PageGeneratorField => {
  return {
    component: PageGeneratorSupportedFields.Heading,
    props: {
      level: 5,
      withMargins: true,
    },
    innerHTML,
  };
};

const getDescriptionList = (
  children: DescriptionListGroupField[],
  direction?: 'row' | 'column'
): PageGeneratorField => {
  return {
    component: PageGeneratorSupportedFields.DescriptionList,
    props: {
      direction,
    },
    children,
  };
};

const getDescriptionListGroup = (
  term: string,
  desc: string | JSX.Element
): DescriptionListGroupField => {
  return {
    component: PageGeneratorSupportedFields.DescriptionListGroup,
    props: {
      margin: '0',
    },
    children: [
      {
        component: PageGeneratorSupportedFields.DescriptionListTerm,
        props: {},
        innerHTML: term,
      },
      {
        component: PageGeneratorSupportedFields.DescriptionListDesc,
        props: {},
        innerHTML: desc,
      },
    ],
  };
};

export const OtherFields = (): (PageGeneratorField | PageGeneratorRow)[] => {
  return [
    getHeading('DescriptionList - direction row'),
    getDescriptionList(
      [
        getDescriptionListGroup('Term1', 'Desc1'),
        getDescriptionListGroup('Term2', 'Desc2'),
        getDescriptionListGroup('Term3', 'Desc3'),
      ],
      'row'
    ),
    getHeading('DescriptionList - direction column'),
    getDescriptionList(
      [
        getDescriptionListGroup('Term1', 'Desc1'),
        getDescriptionListGroup('Term2', 'Desc2'),
        getDescriptionListGroup('Term3', 'Desc3'),
      ],
      'column'
    ),
    {
      component: PageGeneratorSupportedFields.Card,
      props: {
        cardType: 'info',
        color: 'strokeLight',
      },
      innerHTML: 'Dette er et Card',
    },
    {
      component: PageGeneratorSupportedFields.DrawerGroup,
      props: {
        children: <></>,
      },
      children: [
        {
          component: PageGeneratorSupportedFields.Button,
          props: {
            purpose: 'secondary',
            label: 'Trigger Drawer',
          },
        },
        {
          component: PageGeneratorSupportedFields.Drawer,
          props: {
            header: 'Rediger avdøde',
          },
          innerHTML: 'Dette er en Drawer',
        },
      ],
    },
    {
      component: PageGeneratorSupportedFields.HStack,
      props: {},
      children: [
        {
          component: PageGeneratorSupportedFields.LocalMessage,
          props: {},
          innerHTML: 'Element i HStack',
        },
        {
          component: PageGeneratorSupportedFields.LocalMessage,
          props: {},
          innerHTML: 'Element i HStack',
        },
        {
          component: PageGeneratorSupportedFields.LocalMessage,
          props: {},
          innerHTML: 'Element i HStack',
        },
      ],
    },
    {
      component: PageGeneratorSupportedFields.VStack,
      props: {},
      children: [
        {
          component: PageGeneratorSupportedFields.LocalMessage,
          props: {},
          innerHTML: 'Element i VStack',
        },
        {
          component: PageGeneratorSupportedFields.LocalMessage,
          props: {},
          innerHTML: 'Element i VStack',
        },
        {
          component: PageGeneratorSupportedFields.LocalMessage,
          props: {},
          innerHTML: 'Element i VStack',
        },
      ],
    },
    {
      component: PageGeneratorSupportedFields.Divider,
      props: {},
    },
    {
      component: PageGeneratorSupportedFields.InputMessage,
      props: {
        message: 'Dette er en InputMessage',
        messageType: 'error',
      },
    },
    {
      component: PageGeneratorSupportedFields.Label,
      props: {},
      innerHTML: 'Dette er en Label',
    },
    {
      component: PageGeneratorSupportedFields.Link,
      props: {
        href: '',
      },
      innerHTML: 'Dette er en Link',
    },
    {
      component: PageGeneratorSupportedFields.Paragraph,
      props: {},
      innerHTML: 'Dette er en Paragraph',
    },
    {
      component: PageGeneratorSupportedFields.Spinner,
      props: {},
    },
    {
      component: PageGeneratorSupportedFields.Typography,
      props: {},
      innerHTML: 'Dette er en Typography',
    },
    {
      component: PageGeneratorSupportedFields.VisuallyHidden,
      props: {
        as: 'div',
      },
      innerHTML: 'Dette er en VisuallyHidden',
    },
    {
      component: PageGeneratorSupportedFields.ToggleButtonGroup,
      props: {
        label: 'Dette er ToggleButtonGroup',
      },
      children: [
        {
          component: PageGeneratorSupportedFields.ToggleButton,
          props: {
            label: 'ToggleButton 1',
          },
        },
        {
          component: PageGeneratorSupportedFields.ToggleButton,
          props: {
            label: 'ToggleButton 2',
          },
        },
      ],
    },
    {
      component: PageGeneratorSupportedFields.List,
      children: [
        {
          component: PageGeneratorSupportedFields.ListItem,
          innerHTML: 'Item 1',
        },
        {
          component: PageGeneratorSupportedFields.ListItem,
          innerHTML: 'Item 2',
        },
      ],
    },
  ];
};
