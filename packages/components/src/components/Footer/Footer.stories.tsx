import { type Meta, type StoryObj } from '@storybook/react';

import { Link, Paragraph } from '../..';
import { Icon } from '../Icon';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../Icon/icons';
import { VisuallyHidden } from '../VisuallyHidden';

import {
  Footer,
  FooterLeft,
  FooterList,
  FooterListGroup,
  FooterListHeader,
  FooterListsGroup,
  FooterLogo,
  FooterSocialsGroup,
  FooterSocialsList,
} from '.';

export default {
  title: 'dds-components/Footer',
  component: Footer,
  argTypes: {
    smallScreen: { control: 'boolean' },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: args => (
    <Footer {...args}>
      <FooterLeft>
        <FooterLogo />
        <FooterSocialsGroup>
          <FooterListHeader>Følg oss</FooterListHeader>
          <FooterSocialsList>
            <li>
              <Link href="/">
                <Icon icon={FacebookIcon} />
                <VisuallyHidden as="span">Facebook</VisuallyHidden>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Icon icon={InstagramIcon} />
                <VisuallyHidden as="span">Instagram</VisuallyHidden>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Icon icon={LinkedInIcon} />
                <VisuallyHidden as="span">LinkedIn</VisuallyHidden>
              </Link>
            </li>
          </FooterSocialsList>
        </FooterSocialsGroup>
      </FooterLeft>
      <FooterListsGroup>
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
      </FooterListsGroup>
    </Footer>
  ),
};

export const Complex: Story = {
  render: args => (
    <Footer {...args}>
      <FooterLeft>
        <FooterLogo />
        <FooterSocialsGroup>
          <FooterListHeader>Følg oss</FooterListHeader>
          <FooterSocialsList>
            <li>
              <Link href="/">
                <Icon icon={FacebookIcon} />
                <VisuallyHidden as="span">Facebook</VisuallyHidden>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Icon icon={InstagramIcon} />
                <VisuallyHidden as="span">Instagram</VisuallyHidden>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Icon icon={LinkedInIcon} />
                <VisuallyHidden as="span">LinkedIn</VisuallyHidden>
              </Link>
            </li>
          </FooterSocialsList>
        </FooterSocialsGroup>
      </FooterLeft>
      <FooterListsGroup>
        <FooterListGroup>
          <FooterListHeader>Domstoladministrasjonen</FooterListHeader>
          <div>
            <Paragraph withMargins>Org.nr: 000 000 000</Paragraph>
            <Paragraph withMargins>Postadresse: Bla bla bla</Paragraph>
            <Paragraph withMargins>0000 Byen</Paragraph>
          </div>
        </FooterListGroup>
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
      </FooterListsGroup>
    </Footer>
  ),
};

export const Adress: Story = {
  render: args => (
    <Footer {...args}>
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
  render: args => (
    <Footer {...args}>
      <FooterLogo />
    </Footer>
  ),
};

export const FooterListExample: Story = {
  name: 'FooterList',
  render: args => (
    <Footer {...args}>
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

export const FooterSocials: Story = {
  render: args => (
    <Footer {...args}>
      <FooterSocialsGroup>
        <FooterListHeader>Følg oss</FooterListHeader>
        <FooterSocialsList>
          <li>
            <Link href="/">
              <Icon icon={FacebookIcon} />
              <VisuallyHidden as="span">Facebook</VisuallyHidden>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icon icon={InstagramIcon} />
              <VisuallyHidden as="span">Instagram</VisuallyHidden>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icon icon={LinkedInIcon} />
              <VisuallyHidden as="span">LinkedIn</VisuallyHidden>
            </Link>
          </li>
        </FooterSocialsList>
      </FooterSocialsGroup>
    </Footer>
  ),
};
