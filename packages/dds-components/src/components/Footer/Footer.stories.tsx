import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Grid, GridChild, Link, Paragraph } from '../..';
import { Icon } from '../Icon';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../Icon/icons';
import { VisuallyHidden } from '../VisuallyHidden';

import {
  Footer,
  FooterLeft,
  FooterList,
  FooterListGroup,
  FooterListHeader,
  FooterLogo,
  FooterSocialsGroup,
  FooterSocialsList,
} from '.';

export default {
  title: 'dds-components/Components/Footer',
  component: Footer,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

const socials = (
  <FooterSocialsGroup>
    <FooterListHeader>Følg oss</FooterListHeader>
    <FooterSocialsList>
      <li>
        <Link
          href="/"
          htmlProps={{
            style: { display: 'block' },
          }}
        >
          <Icon
            icon={FacebookIcon}
            htmlProps={{ style: { display: 'block' } }}
          />
        </Link>
        <VisuallyHidden as="span">Facebook</VisuallyHidden>
      </li>
      <li>
        <Link
          href="/"
          htmlProps={{
            style: { display: 'block' },
          }}
        >
          <Icon
            icon={InstagramIcon}
            htmlProps={{ style: { display: 'block' } }}
          />
          <VisuallyHidden as="span">Instagram</VisuallyHidden>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          htmlProps={{
            style: { display: 'block' },
          }}
        >
          <Icon
            icon={LinkedInIcon}
            htmlProps={{ style: { display: 'block' } }}
          />
          <VisuallyHidden as="span">LinkedIn</VisuallyHidden>
        </Link>
      </li>
    </FooterSocialsList>
  </FooterSocialsGroup>
);

export const Default: Story = {
  render: args => (
    <Footer {...args}>
      <Grid
        as="div"
        rowGap={{
          xs: 'var(--dds-spacing-x2-5)',
          sm: 'var(--dds-spacing-x2-5)',
        }}
      >
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/3',
            md: '1/4',
            lg: '1/4',
            xl: '1/4',
          }}
        >
          <FooterLeft>
            <FooterLogo hideBreakpoint="xs" />
            {socials}
          </FooterLeft>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '4/6',
            md: '7/10',
            lg: '7/10',
            xl: '7/10',
          }}
        >
          <FooterListGroup>
            <FooterListHeader>Kontakt oss</FooterListHeader>
            <FooterList>
              <li>
                <Link href="/">Kontakt</Link>
              </li>
              <li>
                <Link href="/">Finn domstol</Link>
              </li>
            </FooterList>
          </FooterListGroup>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '6/9',
            md: '10/13',
            lg: '10/13',
            xl: '10/13',
          }}
        >
          <FooterListGroup>
            <FooterListHeader>Om nettstedet</FooterListHeader>
            <FooterList>
              <li>
                <Link href="/">Personvern</Link>
              </li>
              <li>
                <Link href="/">Tilgjengelighetserklæring</Link>
              </li>
              <li>
                <Link href="/">Lenke</Link>
              </li>
            </FooterList>
          </FooterListGroup>
        </GridChild>
      </Grid>
    </Footer>
  ),
};

export const FourColumns: Story = {
  render: args => (
    <Footer {...args}>
      <Grid
        as="div"
        rowGap={{
          xs: 'var(--dds-spacing-x2-5)',
          sm: 'var(--dds-spacing-x2-5)',
        }}
      >
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '1/4',
            lg: '1/4',
            xl: '1/4',
          }}
        >
          <FooterLeft>
            <FooterLogo hideBreakpoint="sm" />
            <FooterSocialsGroup>
              <FooterListHeader>Følg oss</FooterListHeader>
              <FooterSocialsList>
                <li>
                  <Link href="/" htmlProps={{ title: 'Facebook' }}>
                    <Icon icon={FacebookIcon} />
                  </Link>
                </li>
                <li>
                  <Link href="/" htmlProps={{ title: 'Instagram' }}>
                    <Icon icon={InstagramIcon} />
                  </Link>
                </li>
                <li>
                  <Link href="/" htmlProps={{ title: 'LinkedIn' }}>
                    <Icon icon={LinkedInIcon} />
                  </Link>
                </li>
              </FooterSocialsList>
            </FooterSocialsGroup>
          </FooterLeft>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '4/8',
            lg: '4/7',
            xl: '4/7',
          }}
        >
          <FooterListGroup>
            <FooterListHeader>Adresse</FooterListHeader>
            <div>
              <Paragraph withMargins>Org.nr: 000 000 000</Paragraph>
              <Paragraph withMargins>Postadresse: Bla bla bla</Paragraph>
              <Paragraph withMargins>0000 Byen</Paragraph>
            </div>
          </FooterListGroup>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '8/10',
            lg: '7/10',
            xl: '7/10',
          }}
        >
          <FooterListGroup>
            <FooterListHeader>Kontakt oss</FooterListHeader>
            <FooterList>
              <li>
                <Link href="/">Kontakt</Link>
              </li>
              <li>
                <Link href="/">Finn domstol</Link>
              </li>
            </FooterList>
          </FooterListGroup>
        </GridChild>
        <GridChild
          columnsOccupied={{
            xs: '1/-1',
            sm: '1/-1',
            md: '10/13',
            lg: '10/13',
            xl: '10/13',
          }}
        >
          <FooterListGroup>
            <FooterListHeader>Om nettstedet</FooterListHeader>
            <FooterList>
              <li>
                <Link href="/">Personvern</Link>
              </li>
              <li>
                <Link href="/">Tilgjengelighetserklæring</Link>
              </li>
              <li>
                <Link href="/">Lenke</Link>
              </li>
            </FooterList>
          </FooterListGroup>
        </GridChild>
      </Grid>
    </Footer>
  ),
};

const exampleStyle = (
  <style>
    {`
  .story-padding {
    padding: var(--dds-spacing-x2);
  }
  `}
  </style>
);

export const Address: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {exampleStyle}
      </>
    ),
  ],
  render: args => (
    <Footer {...args} className="story-padding">
      <FooterListGroup>
        <FooterListHeader>Domstoladministrasjonen</FooterListHeader>
        <div>
          <Paragraph withMargins>Org.nr: 000 000 000</Paragraph>
          <Paragraph withMargins>Postadresse: Bla bla bla</Paragraph>
          <Paragraph withMargins>0000 Byen</Paragraph>
        </div>
      </FooterListGroup>
    </Footer>
  ),
};

export const Logo: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {exampleStyle}
      </>
    ),
  ],
  render: args => (
    <Footer {...args} className="story-padding">
      <FooterLogo />
    </Footer>
  ),
};

export const ListHeader: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {exampleStyle}
      </>
    ),
  ],
  render: args => (
    <Footer {...args} className="story-padding">
      <FooterListHeader>Om nettstedet</FooterListHeader>
    </Footer>
  ),
};

export const Left: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {exampleStyle}
      </>
    ),
  ],
  render: args => (
    <Footer {...args} className="story-padding">
      <FooterLeft>
        <FooterLogo />
        {socials}
      </FooterLeft>
    </Footer>
  ),
};
export const ListExample: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {exampleStyle}
      </>
    ),
  ],
  name: 'List',
  render: args => (
    <Footer {...args} className="story-padding">
      <FooterListGroup>
        <FooterListHeader>Om nettstedet</FooterListHeader>
        <FooterList>
          <li>
            <Link href="/">Personvern</Link>
          </li>
          <li>
            <Link href="/">Tilgjengelighetserklæring</Link>
          </li>
          <li>
            <Link href="/">Lenke</Link>
          </li>
        </FooterList>
      </FooterListGroup>
    </Footer>
  ),
};

export const Socials: Story = {
  decorators: [
    Story => (
      <>
        <Story />
        {exampleStyle}
      </>
    ),
  ],
  render: args => (
    <Footer {...args} className="story-padding">
      {socials}
    </Footer>
  ),
};
